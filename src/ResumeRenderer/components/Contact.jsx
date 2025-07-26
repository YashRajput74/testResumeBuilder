import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditableText from "../../Components/shared/EditableText";
import EditableIcon from './EditableIcon';
import { useResume } from "../../context/ResumeContext";
import { allContactIcons } from "../../utils/iconList";

export default function Contact() {
    const { editMode, data, style } = useResume();
    const [contacts, setContacts] = useState([]);

    const [iconMap, setIconMap] = useState({});

    const initialized = useRef(false);

    useEffect(() => {
        if (initialized.current) {
            return;
        }


        const storedContacts = JSON.parse(localStorage.getItem("customContactData"));
        const storedIcons = JSON.parse(localStorage.getItem("customContactIcons"));


        const hasStoredData =
            Array.isArray(storedContacts) && storedContacts.length > 0 &&
            storedIcons && Object.keys(storedIcons).length > 0;

        if (hasStoredData) {
            setContacts(storedContacts);
            setIconMap(storedIcons);
            initialized.current = true;
        } else if (data.contact?.length) {
            const iconMapFromData = {};
            data.contact.forEach((c, i) => (iconMapFromData[i] = c.icon || "email"));
            setContacts(data.contact);
            setIconMap(iconMapFromData);
            localStorage.setItem("customContactData", JSON.stringify(data.contact));
            localStorage.setItem("customContactIcons", JSON.stringify(iconMapFromData));
            initialized.current = true;
        } else {
        }
    }, [data.contact]);

    useEffect(() => {
        localStorage.setItem("customContactData", JSON.stringify(contacts));
        localStorage.setItem("customContactIcons", JSON.stringify(iconMap));
    }, [contacts, iconMap]);

    const handleUpdateText = (index, field, newValue) => {
        const updated = [...contacts];
        updated[index][field] = newValue;
        setContacts(updated);
    };

    const handleDelete = (index) => {
        const updated = contacts.filter((_, i) => i !== index);
        const newIconMap = { ...iconMap };
        delete newIconMap[index];
        setContacts(updated);
        setIconMap(newIconMap);
    };

    const handleAdd = () => {
        const newContact = {
            icon: "email",
            link: "",
            textShown: "New Contact"
        };
        const updated = [...contacts, newContact];
        const newIndex = updated.length - 1;
        const newIconMap = { ...iconMap, [newIndex]: "email" };
        setContacts(updated);
        setIconMap(newIconMap);
    };

    return (
        <div className="contactList">
            <h2 style={style?.contact?.heading}>Contact</h2>
            <ul className="contact-list">
                {contacts.map((contact, index) => {
                    const iconKey = iconMap[index];
                    const iconObj = allContactIcons.find(i => i.key === iconKey)?.icon;

                    return (
                        <li key={index} className="contactItem" style={style?.contact?.innerBox}>
                            <EditableIcon
                                currentIconKey={iconMap[index]}
                                field={index}
                                iconMap={iconMap}
                                setIconMap={setIconMap}
                                editMode={editMode}
                            />

                            <EditableText
                                value={contact.textShown}
                                onChange={(val) => handleUpdateText(index, "textShown", val)}
                            />

                            {editMode && (
                                <button className="delete-btn" onClick={() => handleDelete(index)}>
                                    ❌
                                </button>
                            )}
                        </li>
                    );
                })}
            </ul>

            {editMode && (
                <button className="add-btn" onClick={handleAdd}>➕ Add Contact</button>
            )}
        </div>
    );
}
