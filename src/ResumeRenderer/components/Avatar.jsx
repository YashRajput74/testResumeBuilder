import { useResume } from "../../context/ResumeContext";
import { useRef } from "react";
import { FaPen } from "react-icons/fa";

export default function Avatar() {
    const { data, updateField, editMode, style } = useResume();
    const fileInputRef = useRef(null);

    const handleImageClick = () => {
        if (editMode && fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onloadend = () => updateField(null, "profilePhoto", reader.result);
        reader.readAsDataURL(file);
    };

    const handleTextBlur = (field, e) => {
        const value = e.target.innerText.trim();
        updateField(null, field, value);
    };

    return (
        <div className="avatar" style={style?.avatar?.box}>
            <div className="profile-card" style={style?.avatar?.card}>
                <div
                    className="profile-image hover-image"
                    style={{
                        ...style?.avatar?.imageDiv,
                        position: "relative",
                        cursor: editMode ? "pointer" : "default",
                        border: editMode ? "2px solid white" : "none",
                    }}
                    onClick={handleImageClick}
                >
                    <img
                        src={data.profilePhoto}
                        alt="Profile"
                        crossOrigin="anonymous"
                        style={style?.avatar?.image}
                    />

                    {editMode && (
                        <div className="edit-overlay">
                            <FaPen size={16} color="#fff" />
                        </div>
                    )}
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                    />
                </div>

                {style?.avatar?.sideBox ? (
                    <div style={style?.avatar?.innerBox}>
                        <h2 style={style?.avatar?.heading}>
                            <span
                                contentEditable={editMode}
                                suppressContentEditableWarning
                                onBlur={(e) => handleTextBlur("firstName", e)}
                            >
                                {data.firstName}
                            </span>
                            <br />
                            <span
                                contentEditable={editMode}
                                suppressContentEditableWarning
                                onBlur={(e) => handleTextBlur("lastName", e)}
                            >
                                {data.lastName}
                            </span>
                        </h2>
                        <p
                            style={style?.avatar?.position}
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleTextBlur("position", e)}
                        >
                            {data.position}
                        </p>
                    </div>
                ) : (
                    <>
                        <h2 style={style?.avatar?.heading}>
                            <span
                                contentEditable={editMode}
                                suppressContentEditableWarning
                                onBlur={(e) => handleTextBlur("firstName", e)}
                            >
                                {data.firstName}
                            </span>
                            <br />
                            <span
                                contentEditable={editMode}
                                suppressContentEditableWarning
                                onBlur={(e) => handleTextBlur("lastName", e)}
                            >
                                {data.lastName}
                            </span>
                        </h2>
                        <p
                            style={style?.avatar?.position}
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleTextBlur("position", e)}
                        >
                            {data.position}
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}