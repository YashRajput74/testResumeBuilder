
import { useResume } from "../../context/ResumeContext";

export default function Language() {
    const { data, style } = useResume();

    if (!data?.language) return null; 

    if (style.language?.list) {
        return (
            <div className="languages" style={style?.language?.box}>
                <h2 style={style?.language?.heading}>Languages</h2>
                <ul style={style?.language?.wholeList}>
                    {data.language.map((language, index) => (
                        <li key={index} style={style?.language?.listItem}>{language}</li>
                    ))}
                </ul>
            </div>
        );
    } else {
        return (
            <div className="languages" style={style?.language?.box}>
                <h2 style={style?.language?.heading}>Languages</h2>
                <div className="individualLanguage" style={style?.language?.everylanguageBox}>
                    {data.language.map((language, index) => (
                        <div key={index} style={style?.language?.eachLanguageBox}>{language}</div>
                    ))}
                </div>
            </div>
        );
    }
}
