import { useEffect, useState } from "react";
import EditableText from "../../Components/shared/EditableText";
import EditableIcon from './EditableIcon';
import { useResume } from "../../context/ResumeContext";
import AddLinkButton from "../../Components/shared/AddLinkButton";

export default function Contact() {
    const { editMode, data, style } = useResume();

    // --- Step 1: Initialize from localStorage or ResumeContext
    const [contacts, setContacts] = useState(() => {
        const local = localStorage.getItem("customContactData");
        return local ? JSON.parse(local) : data.contact || [];
    });

    const [iconMap, setIconMap] = useState(() => {
        const local = localStorage.getItem("customContactIcons");
        if (local) return JSON.parse(local);

        const fallbackMap = {};
        (data.contact || []).forEach((c, i) => {
            fallbackMap[i] = c.icon || "email";
        });
        return fallbackMap;
    });

    // --- Step 2: Save to localStorage on every change
    useEffect(() => {
        localStorage.setItem("customContactData", JSON.stringify(contacts));
        localStorage.setItem("customContactIcons", JSON.stringify(iconMap));
    }, [contacts, iconMap]);

    // --- Step 3: Handlers
    const handleUpdateText = (index, field, newValue) => {
        const updated = [...contacts];
        updated[index][field] = newValue;
        setContacts(updated);
    };

    const handleDelete = (index) => {
        const updated = contacts.filter((_, i) => i !== index);

        const updatedMap = {};
        updated.forEach((_, i) => {
            updatedMap[i] = iconMap[i >= index ? i + 1 : i];
        });

        setContacts(updated);
        setIconMap(updatedMap);
    };

    const handleAdd = () => {
        const newContact = {
            id: Date.now(),
            icon: "email",
            textShown: "New Contact",
            link: ""
        };
        const updated = [...contacts, newContact];
        const newIndex = updated.length - 1;
        setContacts(updated);
        setIconMap({ ...iconMap, [newIndex]: "email" });
    };

    return (
        <div className="contactList">
            <h2 style={style?.contact?.heading}>Contact</h2>
            <ul className="contact-list">
                {contacts.map((contact, index) => (
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
                            link={contact.link}
                            onEnterPress={handleAdd}
                        />

                        {editMode && (
                            <AddLinkButton
                                index={index}
                                link={contact.link}
                                onSetLink={(i, newLink) => handleUpdateText(i, "link", newLink)}
                            />
                        )}

                        {editMode && (
                            <button className="delete-btn" onClick={() => handleDelete(index)}>
                                ❌
                            </button>
                        )}
                    </li>
                ))}
            </ul>

            {editMode && (
                <button className="add-btn" onClick={handleAdd}>➕ Add Contact</button>
            )}
        </div>
    );
}