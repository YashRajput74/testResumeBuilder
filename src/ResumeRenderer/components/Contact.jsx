import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useResume } from '../../context/ResumeContext';
import FloatingToolbarSimple from "../../Pages/FloatingToolbarSimple";

import { faPhone, faEnvelope, faLocationDot, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faSkype } from '@fortawesome/free-brands-svg-icons';
import EditableIcon from './EditableIcon';
import { useState } from 'react';

export default function Contact() {
    const { data, style, editMode, updateField } = useResume();
    const contact = data.contact;
    const [iconMap, setIconMap] = useState({
        phoneNo: faPhone,
        email: faEnvelope,
        address: faLocationDot,
        portfolio: faGlobe,
        linkedin: faLinkedin,
        github: faGithub,
        skype: faSkype,
    });


    const handleBlur = (key, e) => {
        updateField("contact", key, e.target.innerHTML.trim());
    };

    return (
        <div className="contactList" style={{ ...style?.contact?.box, position: "relative" }}>
            {style?.contact?.heading?.display !== "none" && (
                <h2 style={style?.contact?.heading}>
                    Contact
                    {editMode && (
                        <FloatingToolbarSimple
                            sectionKey="contact"
                            position={{ top: "-45px", right: "20px" }}
                        />
                    )}
                </h2>
            )}

            <div className="contactItem" style={style?.contact?.innerBox}>
                <EditableIcon
                    currentIcon={iconMap.phoneNo}
                    field="phoneNo"
                    iconMap={iconMap}
                    setIconMap={setIconMap}
                    editMode={editMode}
                />
                <p
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onBlur={(e) => handleBlur("phoneNo", e)}
                    style={style?.contact?.content}
                    dangerouslySetInnerHTML={{ __html: contact.phoneNo || "" }}
                />
            </div>

            <div className="contactItem" style={style?.contact?.innerBox}>
                <EditableIcon
                    currentIcon={iconMap.email}
                    field="email"
                    iconMap={iconMap}
                    setIconMap={setIconMap}
                    editMode={editMode}
                />
                <p
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onBlur={(e) => handleBlur("email", e)}
                    style={style?.contact?.content}
                    dangerouslySetInnerHTML={{ __html: contact.email || "" }}
                />
            </div>

            <div className="contactItem" style={style?.contact?.innerBox}>
                <EditableIcon
                    currentIcon={iconMap.address}
                    field="address"
                    iconMap={iconMap}
                    setIconMap={setIconMap}
                    editMode={editMode}
                />
                <p
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onBlur={(e) => handleBlur("address", e)}
                    style={style?.contact?.content}
                    dangerouslySetInnerHTML={{ __html: contact.address || "" }}
                />
            </div>

            <div className="contactItem" style={style?.contact?.innerBox}>
                <EditableIcon
                    currentIcon={iconMap.portfolio}
                    field="portfolio"
                    iconMap={iconMap}
                    setIconMap={setIconMap}
                    editMode={editMode}
                />
                <a
                    href={contact.portfolio}
                    target="_blank"
                    rel="noreferrer"
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onBlur={(e) => handleBlur("portfolio", e)}
                    style={style?.contact?.anchor}
                    dangerouslySetInnerHTML={{ __html: contact.portfolio || "" }}
                />
            </div>

            <div className="contactItem" style={style?.contact?.innerBox}>
                <EditableIcon
                    currentIcon={iconMap.linkedin}
                    field="linkedin"
                    iconMap={iconMap}
                    setIconMap={setIconMap}
                    editMode={editMode}
                />
                <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onBlur={(e) => handleBlur("linkedin", e)}
                    style={style?.contact?.anchor}
                    dangerouslySetInnerHTML={{ __html: contact.linkedin || "" }}
                />
            </div>

            <div className="contactItem" style={style?.contact?.innerBox}>
                <EditableIcon
                    currentIcon={iconMap.github}
                    field="github"
                    iconMap={iconMap}
                    setIconMap={setIconMap}
                    editMode={editMode}
                />
                <a
                    href={contact.github}
                    target="_blank"
                    rel="noreferrer"
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onBlur={(e) => handleBlur("github", e)}
                    style={style?.contact?.anchor}
                    dangerouslySetInnerHTML={{ __html: contact.github || "" }}
                />
            </div>

            <div className="contactItem" style={style?.contact?.innerBox}>
                <EditableIcon
                    currentIcon={iconMap.skype}
                    field="skype"
                    iconMap={iconMap}
                    setIconMap={setIconMap}
                    editMode={editMode}
                />
                <p
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onBlur={(e) => handleBlur("skype", e)}
                    style={style?.contact?.content}
                    dangerouslySetInnerHTML={{ __html: contact.skype || "" }}
                />
            </div>
        </div>
    );
}