
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faSkype } from '@fortawesome/free-brands-svg-icons';
import { useResume } from '../../context/ResumeContext';
import FloatingToolbarSimple from "../../Pages/FloatingToolbarSimple";

export default function Contact() {
    const { data, style, editMode, updateField } = useResume();
    const contact = data.contact;
    const handleBlur = (key, e) => {
        updateField("contact", key, e.target.innerText.trim());
    };

    return (
        <div className="contactList" style={{...style?.contact?.box,position:"relative"}}>
            {style?.contact?.heading?.display !== "none" && (
                <h2 style={style?.contact?.heading}>Contact
                {editMode && (
                    <FloatingToolbarSimple
                        sectionKey="contact"
                        position={{ top: "-45px", right: "20px" }}
                    />
                )}</h2>
            )}

            <div className="contactItem" style={style?.contact?.innerBox}>
                <FontAwesomeIcon icon={faPhone} style={style?.contact?.icon} />
                <p
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onBlur={(e) => handleBlur("phoneNo", e)}
                    style={style?.contact?.content}
                >
                    {contact.phoneNo}
                </p>
            </div>

            <div className="contactItem" style={style?.contact?.innerBox}>
                <FontAwesomeIcon icon={faEnvelope} style={style?.contact?.icon} />
                <p
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onBlur={(e) => handleBlur("email", e)}
                    style={style?.contact?.content}
                >
                    {contact.email}
                </p>
            </div>

            <div className="contactItem" style={style?.contact?.innerBox}>
                <FontAwesomeIcon icon={faLocationDot} style={style?.contact?.icon} />
                <p
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onBlur={(e) => handleBlur("address", e)}
                    style={style?.contact?.content}
                >
                    {contact.address}
                </p>
            </div>

            <div className="contactItem" style={style?.contact?.innerBox}>
                <FontAwesomeIcon icon={faGlobe} style={style?.contact?.icon} />
                <a
                    href={contact.portfolio}
                    target="_blank"
                    rel="noreferrer"
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onBlur={(e) => handleBlur("portfolio", e)}
                    style={style?.contact?.anchor}
                >
                    {editMode ? contact.portfolio : "Portfolio"}
                </a>
            </div>

            <div className="contactItem" style={style?.contact?.innerBox}>
                <FontAwesomeIcon icon={faLinkedin} style={style?.contact?.icon} />
                <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onBlur={(e) => handleBlur("linkedin", e)}
                    style={style?.contact?.anchor}
                >
                    {editMode ? contact.linkedin : "LinkedIn"}
                </a>
            </div>

            <div className="contactItem" style={style?.contact?.innerBox}>
                <FontAwesomeIcon icon={faGithub} style={style?.contact?.icon} />
                <a
                    href={contact.github}
                    target="_blank"
                    rel="noreferrer"
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onBlur={(e) => handleBlur("github", e)}
                    style={style?.contact?.anchor}
                >
                    {editMode ? contact.github : "GitHub"}
                </a>
            </div>


            <div className="contactItem" style={style?.contact?.innerBox}>
                <FontAwesomeIcon icon={faSkype} style={style?.contact?.icon} />
                <p
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onBlur={(e) => handleBlur("skype", e)}
                    style={style?.contact?.content}
                >
                    {contact.skype}
                </p>
            </div>
        </div>
    );
}