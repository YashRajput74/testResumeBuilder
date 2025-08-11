import { FaLink } from "react-icons/fa";
import { useResume } from "../../context/ResumeContext";

export default function AddLinkButton({ index, link, onSetLink }) {
    const { style } = useResume();
    const handleClick = () => {
        const newLink = prompt("Enter URL:", link || "");
        if (newLink !== null) {
            onSetLink(index, newLink.trim());
        }
    };

    return (
        <button
            onClick={handleClick}
            title={link ? "Edit Link" : "Add Link"}
            style={{
                ...style?.contact?.linkIcon,
                margin: "0 8px",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: link ? "#4CAF50" : "#888",
                fontSize: "16px",
            }}
        >
            <FaLink />
        </button>
    );
}
