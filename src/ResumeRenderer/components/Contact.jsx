import { allContactIcons } from "../../utils/iconList";
import { useResume } from '../../context/ResumeContext';
import FloatingToolbarSimple from "../../Pages/FloatingToolbarSimple";
import { faPhone, faEnvelope, faLocationDot, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faSkype } from '@fortawesome/free-brands-svg-icons';
import EditableIcon from './EditableIcon';
import { useEffect, useState } from 'react';

export default function Contact() {
    const { data, style, editMode, updateField } = useResume();
    const contact = data.contact;
    const sharedIconMap = true;
    const templateId = sharedIconMap ? "global" : style?.templateId || "default";


    const defaultIconMap = {
        phoneNo: faPhone,
        email: faEnvelope,
        address: faLocationDot,
        portfolio: faGlobe,
        linkedin: faLinkedin,
        github: faGithub,
        skype: faSkype,
    };

    const [iconMap, setIconMap] = useState(() => {
        const saved = localStorage.getItem(`resumeIconMap-${templateId}`);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                const rehydratedMap = {};
                for (const key in parsed) {
                    const { iconName } = parsed[key] || {};
                    const match = allContactIcons.find((entry) => entry.icon.iconName === iconName);
                    if (match) rehydratedMap[key] = match.icon;
                }
                return { ...defaultIconMap, ...rehydratedMap };
            } catch {
                console.warn("Invalid iconMap format in storage");
            }
        }
        return defaultIconMap;
    });

    useEffect(() => {
        if (!templateId) return;
        const toStore = {};
        for (const key in iconMap) {
            const icon = iconMap[key];
            const found = allContactIcons.find(entry => entry.icon.iconName === icon.iconName);
            if (found) {
                toStore[key] = {
                    iconName: icon.iconName,
                    prefix: found.prefix,
                };
            }
        }
        localStorage.setItem(`resumeIconMap-${templateId}`, JSON.stringify(toStore));
    }, [iconMap, templateId]);

    const handleBlur = (key, e) => {
        updateField("contact", key, e.target.innerHTML.trim());
    };

    const contactFields = [
        { key: "phoneNo", isLink: false },
        { key: "email", isLink: false },
        { key: "address", isLink: false },
        { key: "portfolio", isLink: true },
        { key: "linkedin", isLink: true },
        { key: "github", isLink: true },
        { key: "skype", isLink: false },
    ];

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

            {contactFields.map(({ key, isLink }) => (
                <div key={key} className="contactItem" style={style?.contact?.innerBox}>
                    <EditableIcon
                        currentIcon={iconMap[key]}
                        field={key}
                        iconMap={iconMap}
                        setIconMap={setIconMap}
                        editMode={editMode}
                    />
                    {isLink ? (
                        <a
                            href={contact[key]}
                            target="_blank"
                            rel="noreferrer"
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleBlur(key, e)}
                            style={style?.contact?.anchor}
                            dangerouslySetInnerHTML={{ __html: contact[key] || "" }}
                        />
                    ) : (
                        <p
                            contentEditable={editMode}
                            suppressContentEditableWarning
                            onBlur={(e) => handleBlur(key, e)}
                            style={style?.contact?.content}
                            dangerouslySetInnerHTML={{ __html: contact[key] || "" }}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}
