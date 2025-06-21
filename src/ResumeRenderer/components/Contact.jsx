// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone, faEnvelope, faLocationDot, faGlobe } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
// import { useResume } from '../../context/ResumeContext';

// export default function Contact() {
//     const { data, style } = useResume();

//     return (
//         <div className="contactList" style={style?.contact?.box}>
//             <h2 style={style?.contact?.heading}>Contact</h2>
//             <div className="contactItem" style={style?.contact?.innerBox}>
//                 <FontAwesomeIcon icon={faPhone} style={style?.contact?.icon}/>
//                 <p style={style?.contact?.content}>{data.phoneNo}</p>
//             </div>

//             <div className="contactItem" style={style?.contact?.innerBox}>
//                 <FontAwesomeIcon icon={faEnvelope}  style={style?.contact?.icon}/>
//                 <p style={style?.contact?.content}>{data.email}</p>
//             </div>

//             <div className="contactItem" style={style?.contact?.innerBox}>
//                 <FontAwesomeIcon icon={faLocationDot}  style={style?.contact?.icon}/>
//                 <p style={style?.contact?.content}>{data.address}</p>
//             </div>

//             <div className="contactItem" style={style?.contact?.innerBox}>
//                 <FontAwesomeIcon icon={faGlobe}  style={style?.contact?.icon}/>
//                 <a href={data.portfolio} style={style?.contact?.anchor}>Portfolio</a>
//             </div>

//             <div className="contactItem" style={style?.contact?.innerBox}>
//                 <FontAwesomeIcon icon={faLinkedin}  style={style?.contact?.icon}/>
//                 <a href={data.linkedin} style={style?.contact?.anchor}>LinkedIn</a>
//             </div>

//             <div className="contactItem" style={style?.contact?.innerBox}>
//                 <FontAwesomeIcon icon={faGithub}  style={style?.contact?.icon}/>
//                 <a href={data.github} target='blank_'  style={style?.contact?.anchor}>Github</a>
//             </div>
//         </div>
//     )
// }


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone, faEnvelope, faLocationDot, faGlobe } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
// import { useResume } from '../../context/ResumeContext';

// export default function Contact() {
//   const { data, style, editMode, updateField } = useResume();

//   return (
//     <div className="contactList" style={style?.contact?.box}>
//       <h2 style={style?.contact?.heading}>Contact</h2>

//       {/* Phone */}
//       <div className="contactItem" style={style?.contact?.innerBox}>
//         <FontAwesomeIcon icon={faPhone} style={style?.contact?.icon} />
//         {editMode ? (
//           <input
//             type="text"
//             value={data.phoneNo}
//             onChange={(e) => updateField("contact", "phoneNo", e.target.value)}
//             style={style?.contact?.content}
//           />
//         ) : (
//           <p style={style?.contact?.content}>{data.phoneNo}</p>
//         )}
//       </div>

//       {/* Email */}
//       <div className="contactItem" style={style?.contact?.innerBox}>
//         <FontAwesomeIcon icon={faEnvelope} style={style?.contact?.icon} />
//         {editMode ? (
//           <input
//             type="text"
//             value={data.email}
//             onChange={(e) => updateField("contact", "email", e.target.value)}
//             style={style?.contact?.content}
//           />
//         ) : (
//           <p style={style?.contact?.content}>{data.email}</p>
//         )}
//       </div>

//       {/* Address */}
//       <div className="contactItem" style={style?.contact?.innerBox}>
//         <FontAwesomeIcon icon={faLocationDot} style={style?.contact?.icon} />
//         {editMode ? (
//           <input
//             type="text"
//             value={data.address}
//             onChange={(e) => updateField("contact", "address", e.target.value)}
//             style={style?.contact?.content}
//           />
//         ) : (
//           <p style={style?.contact?.content}>{data.address}</p>
//         )}
//       </div>

//       {/* Portfolio */}
//       <div className="contactItem" style={style?.contact?.innerBox}>
//         <FontAwesomeIcon icon={faGlobe} style={style?.contact?.icon} />
//         {editMode ? (
//           <input
//             type="text"
//             value={data.portfolio}
//             onChange={(e) => updateField("contact", "portfolio", e.target.value)}
//             style={style?.contact?.content}
//           />
//         ) : (
//           <a href={data.portfolio} style={style?.contact?.anchor}>Portfolio</a>
//         )}
//       </div>

//       {/* LinkedIn */}
//       <div className="contactItem" style={style?.contact?.innerBox}>
//         <FontAwesomeIcon icon={faLinkedin} style={style?.contact?.icon} />
//         {editMode ? (
//           <input
//             type="text"
//             value={data.linkedin}
//             onChange={(e) => updateField("contact", "linkedin", e.target.value)}
//             style={style?.contact?.content}
//           />
//         ) : (
//           <a href={data.linkedin} style={style?.contact?.anchor}>LinkedIn</a>
//         )}
//       </div>

//       {/* GitHub */}
//       <div className="contactItem" style={style?.contact?.innerBox}>
//         <FontAwesomeIcon icon={faGithub} style={style?.contact?.icon} />
//         {editMode ? (
//           <input
//             type="text"
//             value={data.github}
//             onChange={(e) => updateField("contact", "github", e.target.value)}
//             style={style?.contact?.content}
//           />
//         ) : (
//           <a href={data.github} target="_blank" rel="noreferrer" style={style?.contact?.anchor}>Github</a>
//         )}
//       </div>
//     </div>
//   );
// }


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone, faEnvelope, faLocationDot, faGlobe } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
// import { useResume } from '../../context/ResumeContext';

// export default function Contact() {
//   const { data, style, editMode, updateField } = useResume();
//   const contact = data.contact;

//   return (
//     <div className="contactList" style={style?.contact?.box}>
//       <h2 style={style?.contact?.heading}>Contact</h2>

//       {[
//         { icon: faPhone, label: "phoneNo", placeholder: "Phone" },
//         { icon: faEnvelope, label: "email", placeholder: "Email" },
//         { icon: faLocationDot, label: "address", placeholder: "Address" },
//         { icon: faGlobe, label: "portfolio", placeholder: "Portfolio", isLink: true },
//         { icon: faLinkedin, label: "linkedin", placeholder: "LinkedIn", isLink: true },
//         { icon: faGithub, label: "github", placeholder: "GitHub", isLink: true }
//       ].map(({ icon, label, placeholder, isLink }) => (
//         <div className="contactItem" key={label} style={style?.contact?.innerBox}>
//           <FontAwesomeIcon icon={icon} style={style?.contact?.icon} />
//           {editMode ? (
//             <input
//               type="text"
//               value={contact[label]}
//               placeholder={placeholder}
//               onChange={(e) => updateField("contact", label, e.target.value)}
//               style={style?.contact?.content}
//             />
//           ) : isLink ? (
//             <a href={contact[label]} style={style?.contact?.anchor} target="_blank" rel="noreferrer">
//               {placeholder}
//             </a>
//           ) : (
//             <p style={style?.contact?.content}>{contact[label]}</p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useResume } from '../../context/ResumeContext';
import EditableField from '../../EditableFields/EditableField';


export default function Contact() {
  const { style } = useResume();

  return (
    <div className="contactList" style={style?.contact?.box}>
      <h2 style={style?.contact?.heading}>Contact</h2>

      <div className="contactItem" style={style?.contact?.innerBox}>
        <FontAwesomeIcon icon={faPhone} style={style?.contact?.icon} />
        <EditableField section="contact" field="phoneNo" style={style?.contact?.content} />
      </div>

      <div className="contactItem" style={style?.contact?.innerBox}>
        <FontAwesomeIcon icon={faEnvelope} style={style?.contact?.icon} />
        <EditableField section="contact" field="email" style={style?.contact?.content} />
      </div>

      <div className="contactItem" style={style?.contact?.innerBox}>
        <FontAwesomeIcon icon={faLocationDot} style={style?.contact?.icon} />
        <EditableField section="contact" field="address" style={style?.contact?.content} />
      </div>

      <div className="contactItem" style={style?.contact?.innerBox}>
        <FontAwesomeIcon icon={faGlobe} style={style?.contact?.icon} />
        <a href="#">
          <EditableField section="contact" field="portfolio" style={style?.contact?.anchor} tag="span" />
        </a>
      </div>

      <div className="contactItem" style={style?.contact?.innerBox}>
        <FontAwesomeIcon icon={faLinkedin} style={style?.contact?.icon} />
        <a href="#">
          <EditableField section="contact" field="linkedin" style={style?.contact?.anchor} tag="span" />
        </a>
      </div>

      <div className="contactItem" style={style?.contact?.innerBox}>
        <FontAwesomeIcon icon={faGithub} style={style?.contact?.icon} />
        <a href="#" target="_blank" rel="noreferrer">
          <EditableField section="contact" field="github" style={style?.contact?.anchor} tag="span" />
        </a>
      </div>
    </div>
  );
}
