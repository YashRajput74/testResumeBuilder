import { useResume } from "../../context/ResumeContext";
import FloatingToolbarSimple from "../../Pages/FloatingToolbarSimple";

export default function Language() {
    const { data, style, editMode, updateField, selectedSection, setSelectedSection } = useResume();

    if (!data?.language) return null;

    const handleBlur = (index, e) => {
        const newValue = e.target.innerHTML.trim();
        const updatedLanguages = [...data.language];
        updatedLanguages[index] = newValue;
        updateField("language", null, updatedLanguages);
    };

    const Wrapper = style.language?.list ? "ul" : "div";
    const ItemWrapper = style.language?.list ? "li" : "div";
    const itemStyle = style.language?.list ? style?.language?.listItem : style?.language?.eachLanguageBox;

    return (
        <div
            className="languages resumeSection"
            style={{ ...style?.language?.box, position: "relative" }}
            onClick={() => setSelectedSection("language")}
        >
            <h2
                contentEditable={editMode}
                suppressContentEditableWarning
                style={style?.language?.heading}
            >
                Languages
            </h2>

            {selectedSection === "language" && editMode && (
                <FloatingToolbarSimple
                    sectionKey="language"
                    position={{ top: "-45px", right: "20px" }}
                />
            )}

            <Wrapper
                style={
                    style.language?.list
                        ? style?.language?.wholeList
                        : style?.language?.everylanguageBox
                }
            >
                {data.language.map((lang, index) => (
                    <ItemWrapper
                        key={index}
                        contentEditable={editMode}
                        suppressContentEditableWarning
                        onBlur={(e) => handleBlur(index, e)}
                        style={itemStyle}
                        dangerouslySetInnerHTML={ {__html: lang}}
                    >
                    </ItemWrapper>
                ))}
            </Wrapper>
        </div>
    );
}
