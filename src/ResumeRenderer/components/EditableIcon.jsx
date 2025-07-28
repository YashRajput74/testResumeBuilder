import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { allContactIcons } from "../../utils/iconList";
import "./EditableIcon.css";
import { useResume } from "../../context/ResumeContext";

export default function EditableIcon({ currentIconKey, field, iconMap, setIconMap, editMode }) {
    const { style } = useResume();
    const [showPicker, setShowPicker] = useState(false);
    const pickerRef = useRef(null);

    const handleClickOutside = (e) => {
        if (pickerRef.current && !pickerRef.current.contains(e.target)) {
            setShowPicker(false);
        }
    };

    useEffect(() => {
        if (showPicker) document.addEventListener("mousedown", handleClickOutside);
        else document.removeEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [showPicker]);

    const usedKeys = Object.values(iconMap);
    const availableIcons = allContactIcons.filter(
        (entry) => !usedKeys.includes(entry.key) || iconMap[field] === entry.key
    );

    const handleSelect = (iconObj) => {
        setIconMap((prev) => ({
            ...prev,
            [field]: iconObj.key,
        }));
        setShowPicker(false);
    };

    const selectedIconObj = allContactIcons.find(entry => entry.key === currentIconKey);

    return (
        <div className="editable-icon-wrapper" style={{ position: "relative", display: "inline-block" }}>
            <FontAwesomeIcon
                icon={selectedIconObj?.icon}
                onClick={() => editMode && setShowPicker((prev) => !prev)}
                style={{
                    cursor: editMode ? "pointer" : "default",
                    ...style?.contact?.icon,
                }}
            />

            {showPicker && (
                <div ref={pickerRef} className="icon-picker-popup">
                    {availableIcons.length > 0 ? (
                        availableIcons.map((entry) => (
                            <div key={entry.key} className="icon-option" onClick={() => handleSelect(entry)}>
                                <FontAwesomeIcon icon={entry.icon} style={style?.contact?.icon} />
                            </div>
                        ))
                    ) : (
                        <div className="icon-option none">All icons used</div>
                    )}
                </div>
            )}
        </div>
    );
}
