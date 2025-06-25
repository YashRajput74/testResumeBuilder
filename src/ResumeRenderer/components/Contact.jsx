
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faSkype } from '@fortawesome/free-brands-svg-icons';
import { useResume } from '../../context/ResumeContext';

export default function Contact() {
  const { data, style, editMode, updateField } = useResume();
  const contact = data.contact;
  const handleBlur = (key, e) => {
    updateField("contact", key, e.target.innerText.trim());
  };

  return (
    <div className="contactList" style={style?.contact?.box}>
      {style?.contact?.heading?.display !== "none" && (
        <h2 style={style?.contact?.heading}>Contact</h2>
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


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone, faEnvelope, faLocationDot, faGlobe } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
// import { useResume } from '../../context/ResumeContext';

// export default function Contact() {
//   const { data, style, editMode, updateField } = useResume();

//   const contactFields = {
//     phoneNo: { icon: faPhone, label: data.phoneNo, isLink: false },
//     email: { icon: faEnvelope, label: data.email, isLink: false },
//     address: { icon: faLocationDot, label: data.address, isLink: false },
//     portfolio: { icon: faGlobe, label: data.portfolio, isLink: true, display: "Portfolio" },
//     linkedin: { icon: faLinkedin, label: data.linkedin, isLink: true, display: "Linkedin" },
//     github: { icon: faGithub, label: data.github, isLink: true, display: "Github" }
//   };

//   const visible = style?.contact?.visibleFields || [];

//   const handleBlur = (key, e) => {
//     const newValue = e.target.textContent;
//     updateField('contact', key, newValue);
//   };

//   return (
//     <div className="contactList" style={style?.contact?.box}>
//       <h2 style={style?.contact?.heading}>Contact</h2>
//       {visible.map((key, index) => {
//         const field = contactFields[key];
//         if (!field || !field.label) return null;

//         return (
//           <div className="contactItem" style={style?.contact?.innerBox} key={index}>
//             <FontAwesomeIcon icon={field.icon} style={style?.contact?.icon} />

//             {field.isLink ? (
//               editMode ? (
//                 <a
//                   href={field.label}
//                   contentEditable
//                   suppressContentEditableWarning={true}
//                   onBlur={(e) => handleBlur(key, e)}
//                   style={style?.contact?.anchor}
//                 >
//                   {field.label}
//                 </a>
//               ) : (
//                 <a href={field.label} style={style?.contact?.anchor}>
//                   {field.display}
//                 </a>
//               )
//             ) : (
//               <p
//                 contentEditable={editMode}
//                 suppressContentEditableWarning={true}
//                 onBlur={(e) => handleBlur(key, e)}
//                 style={style?.contact?.content}
//               >
//                 {field.label}
//               </p>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// }


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone, faEnvelope, faLocationDot, faGlobe } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
// import { useResume } from '../../context/ResumeContext';

// export default function Contact() {
//   const { data, style, editMode, updateField } = useResume();

//   const contactFields = {
//     phoneNo: { icon: faPhone, label: data.contact.phoneNo, isLink: false },
//     email: { icon: faEnvelope, label: data.contact.email, isLink: false },
//     address: { icon: faLocationDot, label: data.contact.address, isLink: false },
//     portfolio: { icon: faGlobe, label: data.contact.portfolio, isLink: true, display: "Portfolio" },
//     linkedin: { icon: faLinkedin, label: data.contact.linkedin, isLink: true, display: "Linkedin" },
//     github: { icon: faGithub, label: data.contact.github, isLink: true, display: "Github" }
//   };

//   const visible = style?.contact?.visibleFields || Object.keys(contactFields);

//   const handleBlur = (key, e) => {
//     const newValue = e.target.textContent;
//     updateField('contact', key, newValue);
//   };

//   return (
//     <div className="contactList" style={style?.contact?.box}>
//       <h2 style={style?.contact?.heading}>Contact</h2>
//       {visible.map((key, index) => {
//         const field = contactFields[key];
//         if (!field || !field.label) return null;

//         return (
//           <div className="contactItem" style={style?.contact?.innerBox} key={index}>
//             <FontAwesomeIcon icon={field.icon} style={style?.contact?.icon} />

//             {field.isLink ? (
//               editMode ? (
//                 <a
//                   href={field.label}
//                   contentEditable
//                   suppressContentEditableWarning={true}
//                   onBlur={(e) => handleBlur(key, e)}
//                   style={style?.contact?.anchor}
//                 >
//                   {field.label}
//                 </a>
//               ) : (
//                 <a href={field.label} style={style?.contact?.anchor}>
//                   {field.display}
//                 </a>
//               )
//             ) : (
//               <p
//                 contentEditable={editMode}
//                 suppressContentEditableWarning={true}
//                 onBlur={(e) => handleBlur(key, e)}
//                 style={style?.contact?.content}
//               >
//                 {field.label}
//               </p>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// }


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone, faEnvelope, faLocationDot, faGlobe } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
// import { useResume } from '../../context/ResumeContext';

// export default function Contact() {
//   const { data, style, editMode, setSelectedField } = useResume();

//   const contactFields = {
//     phoneNo: { icon: faPhone, label: data.contact.phoneNo, isLink: false },
//     email: { icon: faEnvelope, label: data.contact.email, isLink: false },
//     address: { icon: faLocationDot, label: data.contact.address, isLink: false },
//     portfolio: { icon: faGlobe, label: data.contact.portfolio, isLink: true, display: "Portfolio" },
//     linkedin: { icon: faLinkedin, label: data.contact.linkedin, isLink: true, display: "Linkedin" },
//     github: { icon: faGithub, label: data.contact.github, isLink: true, display: "Github" }
//   };

//   const visible = style?.contact?.visibleFields || Object.keys(contactFields);

//   return (
//     <div className="contactList" style={style?.contact?.box}>
//       <h2 style={style?.contact?.heading}>Contact</h2>
//       {visible.map((key, index) => {
//         const field = contactFields[key];
//         if (!field || !field.label) return null;

//         return (
//           <div
//             className="contactItem"
//             style={style?.contact?.innerBox}
//             key={index}
//           >
//             <FontAwesomeIcon icon={field.icon} style={style?.contact?.icon} />

//             {field.isLink ? (
//               <a
//                 href={field.label}
//                 onClick={(e) => {
//                   if (editMode) {
//                     e.preventDefault(); // prevent navigating
//                     setSelectedField({ section: 'contact', key });
//                   }
//                 }}
//                 style={{ ...style?.contact?.anchor, cursor: editMode ? "pointer" : "default" }}
//               >
//                 {editMode ? field.label : field.display}
//               </a>
//             ) : (
//               <p
//                 onClick={() => {
//                   if (editMode) {
//                     setSelectedField({ section: 'contact', key });
//                   }
//                 }}
//                 style={{ ...style?.contact?.content, cursor: editMode ? "pointer" : "default" }}
//               >
//                 {field.label}
//               </p>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// }




// import ReactQuill from "react-quill";
// import { useResume } from "../context/ResumeContext";

// export default function Contact() {
//   const { data, selectedSection, setSelectedSection, updateField, editMode } = useResume();
//   const [editorContent, setEditorContent] = React.useState(data.contact || "");

//   React.useEffect(() => {
//     if (selectedSection === "contact") {
//       setEditorContent(data.contact || "");
//     }
//   }, [selectedSection, data.contact]);

//   const handleChange = (content) => {
//     setEditorContent(content);
//     updateField("contact", null, content); // Assuming contact is a string or HTML text
//   };

//   return (
//     <div onClick={() => editMode && setSelectedSection("contact")} style={{ position: "relative" }}>
//       {/* Show editor above this section only if selected */}
//       {selectedSection === "contact" && (
//         <div style={{ marginBottom: "1rem" }}>
//           <ReactQuill value={editorContent} onChange={handleChange} />
//           <button onClick={() => setSelectedSection(null)}>Close Editor</button>
//         </div>
//       )}

//       {/* Your usual contact display */}
//       <h2>Contact</h2>
//       <p dangerouslySetInnerHTML={{ __html: data.contact }} />
//     </div>
//   );
// }


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPhone,
//   faEnvelope,
//   faLocationDot,
//   faGlobe,
// } from "@fortawesome/free-solid-svg-icons";
// import {
//   faLinkedin,
//   faGithub,
//   faSkype,
// } from "@fortawesome/free-brands-svg-icons";
// import { useResume } from "../../context/ResumeContext";
// // import QuillEditable from "../common/QuillEditable";
// // import QuillEditable from "../../Common/QuillEditable";

// export default function Contact() {
//   const { data, style, editMode, updateField } = useResume();
//   const contact = data.contact;

//   const handleBlur = (key, e) => {
//     updateField("contact", key, e.target.innerText.trim());
//   };

//   return (
//     <div className="contactList" style={style?.contact?.box}>
//       {style?.contact?.heading?.display !== "none" && (
//         <h2 style={style?.contact?.heading}>Contact</h2>
//       )}

//       {/* Phone */}
//       <div className="contactItem" style={style?.contact?.innerBox}>
//         <FontAwesomeIcon icon={faPhone} style={style?.contact?.icon} />
//         <p
//           contentEditable={editMode}
//           suppressContentEditableWarning
//           onBlur={(e) => handleBlur("phoneNo", e)}
//           style={style?.contact?.content}
//         >
//           {contact.phoneNo}
//         </p>
//       </div>

//       {/* Email */}
//       <div className="contactItem" style={style?.contact?.innerBox}>
//         <FontAwesomeIcon icon={faEnvelope} style={style?.contact?.icon} />
//         <p
//           contentEditable={editMode}
//           suppressContentEditableWarning
//           onBlur={(e) => handleBlur("email", e)}
//           style={style?.contact?.content}
//         >
//           {contact.email}
//         </p>
//       </div>

//       {/* Address (QUILL EDITABLE) */}
//       <div className="contactItem" style={style?.contact?.innerBox}>
//         <FontAwesomeIcon icon={faLocationDot} style={style?.contact?.icon} />
//         <QuillEditable
//           section="contact"
//           field="address"
//           placeholder="Enter your address..."
//           style={style?.contact?.content}
//         />
//       </div>

//       {/* Portfolio */}
//       <div className="contactItem" style={style?.contact?.innerBox}>
//         <FontAwesomeIcon icon={faGlobe} style={style?.contact?.icon} />
//         <a
//           href={contact.portfolio}
//           target="_blank"
//           rel="noreferrer"
//           contentEditable={editMode}
//           suppressContentEditableWarning
//           onBlur={(e) => handleBlur("portfolio", e)}
//           style={style?.contact?.anchor}
//         >
//           {editMode ? contact.portfolio : "Portfolio"}
//         </a>
//       </div>

//       {/* LinkedIn */}
//       <div className="contactItem" style={style?.contact?.innerBox}>
//         <FontAwesomeIcon icon={faLinkedin} style={style?.contact?.icon} />
//         <a
//           href={contact.linkedin}
//           target="_blank"
//           rel="noreferrer"
//           contentEditable={editMode}
//           suppressContentEditableWarning
//           onBlur={(e) => handleBlur("linkedin", e)}
//           style={style?.contact?.anchor}
//         >
//           {editMode ? contact.linkedin : "LinkedIn"}
//         </a>
//       </div>

//       {/* GitHub */}
//       <div className="contactItem" style={style?.contact?.innerBox}>
//         <FontAwesomeIcon icon={faGithub} style={style?.contact?.icon} />
//         <a
//           href={contact.github}
//           target="_blank"
//           rel="noreferrer"
//           contentEditable={editMode}
//           suppressContentEditableWarning
//           onBlur={(e) => handleBlur("github", e)}
//           style={style?.contact?.anchor}
//         >
//           {editMode ? contact.github : "GitHub"}
//         </a>
//       </div>

//       {/* Skype (QUILL EDITABLE) */}
//       <div className="contactItem" style={style?.contact?.innerBox}>
//         <FontAwesomeIcon icon={faSkype} style={style?.contact?.icon} />
//         {/* <QuillEditable
//           section="contact"
//           field="skype"
//           placeholder="Enter your Skype handle..."
//           style={style?.contact?.content}
//         /> */}
//       </div>
//     </div>
//   );
// }
