import { useResume } from "../../context/ResumeContext";

export default function Languages() {
    const { data, style, editMode, updateField, selectedSection, setSelectedSection } = useResume();

    const handleBlur = (index, e) => {
        const newValue = e.target.innerHTML.trim();
        const updatedLanguages = [...data.language];
        updatedLanguages[index] = { ...updatedLanguages[index], text: newValue };
        updateField("language", null, updatedLanguages);
    };

    const viewType = style.language?.viewType;

    return (
        <div
            className="languages resumeSection"
            style={{ ...style?.language?.box, position: "relative" }}
            onClick={() => setSelectedSection("language")}
        >
            <h2 style={style?.language?.heading}>Languages</h2>

            {viewType === "list" ? (
                <ul style={style?.language?.wholeList}>
                    {data.language.map((lang, index) => (
                        <li
                            key={lang.id}
                            contentEditable={editMode}
                            suppressContentEditableWarning={true}
                            onBlur={(e) => handleBlur(index, e)}
                            style={style?.language?.listItem}
                            dangerouslySetInnerHTML={{ __html: lang.text || "" }}
                        />
                    ))}
                </ul>
            ) : (
                <div className="individualLanguage" style={style?.language?.everyLanguageBox}>
                    {data.language.map((lang, index) => (
                        <span
                            key={lang.id}
                            contentEditable={editMode}
                            suppressContentEditableWarning={true}
                            onBlur={(e) => handleBlur(index, e)}
                            style={style?.language?.eachLanguageBox}
                            dangerouslySetInnerHTML={{ __html: lang.text || "" }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
