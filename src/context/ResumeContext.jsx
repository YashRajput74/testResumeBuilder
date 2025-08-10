import { createContext, useContext, useState, useEffect } from "react";

export const ResumeContext = createContext();
export const useResume = () => useContext(ResumeContext);

export function ResumeProvider({ children, initialData, style, editModeFromURL, templateId }) {
    const [data, setData] = useState(() => {
        const saved = localStorage.getItem("resumeData");
        return saved ? JSON.parse(saved) : initialData;
    });

    const [editMode, setEditMode] = useState(editModeFromURL || false);
    const [selectedSection, setSelectedSection] = useState(null);

    const [customLayoutAreas, setCustomLayoutAreas] = useState(null);
    const [sectionOrder, setSectionOrder] = useState([]);

    const [viewTypes, setViewTypes] = useState(() => {
        const key = `resumeViewTypes-${templateId}`;
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : {};
    });

    // Load layout areas
    useEffect(() => {
        if (!templateId || !style?.layout?.grid?.areas) return;

        const layoutKey = `resumeCustomAreas-${templateId}`;
        const saved = localStorage.getItem(layoutKey);

        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed)) {
                    setCustomLayoutAreas(parsed);
                    return;
                }
            } catch { }
        }

        setCustomLayoutAreas(style.layout.grid.areas || []);
    }, [templateId, style]);

    // Load or derive section order
    useEffect(() => {
        if (!templateId) return;

        const sectionKey = `resumeSectionOrder-${templateId}`;
        const saved = localStorage.getItem(sectionKey);

        const fallback = (customLayoutAreas || style?.layout?.grid?.areas || []).flatMap(
            (a) => a.sections
        );

        try {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length > 0) {
                setSectionOrder(parsed);
            } else {
                setSectionOrder(fallback);
            }
        } catch {
            setSectionOrder(fallback);
        }
    }, [templateId, style, customLayoutAreas]);

    // Save section order
    useEffect(() => {
        if (!templateId) return;
        const sectionKey = `resumeSectionOrder-${templateId}`;
        localStorage.setItem(sectionKey, JSON.stringify(sectionOrder));
    }, [sectionOrder, templateId]);

    // Save layout areas
    useEffect(() => {
        if (!templateId || !customLayoutAreas) return;
        const layoutKey = `resumeCustomAreas-${templateId}`;
        localStorage.setItem(layoutKey, JSON.stringify(customLayoutAreas));
    }, [customLayoutAreas, templateId]);

    // Save resume data
    useEffect(() => {
        localStorage.setItem("resumeData", JSON.stringify(data));
    }, [data]);

    // Save viewTypes
    useEffect(() => {
        if (!templateId) return;
        const key = `resumeViewTypes-${templateId}`;
        localStorage.setItem(key, JSON.stringify(viewTypes));
    }, [viewTypes, templateId]);

    const save = () => {
        localStorage.setItem("resumeData", JSON.stringify(data));
        setEditMode(false);
    };

    const updateField = (section, key, value) => {
        setData((prev) => {
            if (key === null && section) {
                return {
                    ...prev,
                    [section]: value,
                };
            }

            if (key && section) {
                return {
                    ...prev,
                    [section]: {
                        ...prev[section],
                        [key]: value,
                    },
                };
            }

            if (!section && key) {
                return {
                    ...prev,
                    [key]: value,
                };
            }

            return prev;
        });
    };

    return (
        <ResumeContext.Provider
            value={{
                data,
                setData,
                style,
                editMode,
                setEditMode,
                save,
                updateField,
                selectedSection,
                setSelectedSection,
                sectionOrder,
                setSectionOrder,
                customLayoutAreas,
                setCustomLayoutAreas,
                viewTypes,
                setViewTypes
            }}
        >
            {children}
        </ResumeContext.Provider>
    );
}
