import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditableText from "../../Components/shared/EditableText";
import EditableIcon from './EditableIcon';
import { useResume } from "../../context/ResumeContext";
import { allContactIcons } from "../../utils/iconList";

export default function Contact() {
    const { editMode, data } = useResume();
    const [contacts, setContacts] = useState([]);

    const [iconMap, setIconMap] = useState({});

    const initialized = useRef(false);

    useEffect(() => {
        if (initialized.current) {
            console.log("Effect skipped — already initialized");
            return;
        }

        console.log("Effect running, initialized =", initialized.current);
        console.log("data.contact =", data.contact);

        const storedContacts = JSON.parse(localStorage.getItem("customContactData"));
        const storedIcons = JSON.parse(localStorage.getItem("customContactIcons"));

        console.log("storedContacts =", storedContacts);
        console.log("storedIcons =", storedIcons);

        // ✅ Only use localStorage if they are non-empty
        const hasStoredData =
            Array.isArray(storedContacts) && storedContacts.length > 0 &&
            storedIcons && Object.keys(storedIcons).length > 0;

        if (hasStoredData) {
            console.log("✅ Using data from localStorage");
            setContacts(storedContacts);
            setIconMap(storedIcons);
            initialized.current = true;
        } else if (data.contact?.length) {
            console.log("✅ Using data from ResumeContext");
            const iconMapFromData = {};
            data.contact.forEach((c, i) => (iconMapFromData[i] = c.icon || "email"));
            setContacts(data.contact);
            setIconMap(iconMapFromData);
            localStorage.setItem("customContactData", JSON.stringify(data.contact));
            localStorage.setItem("customContactIcons", JSON.stringify(iconMapFromData));
            initialized.current = true;
        } else {
            console.log("⚠️ No contact data available yet");
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
        <div className="section contact-section">
            <h2 className="section-title">Contact</h2>
            <ul className="contact-list">
                {contacts.map((contact, index) => {
                    const iconKey = iconMap[index];
                    const iconObj = allContactIcons.find(i => i.key === iconKey)?.icon;

                    return (
                        <li key={index} className="contact-item">
                            <EditableIcon
                                currentIcon={iconKey}
                                field={index}
                                iconMap={iconMap}
                                setIconMap={setIconMap}
                                editMode={editMode}
                            />

                            <FontAwesomeIcon icon={iconObj} className="icon-display" />

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
