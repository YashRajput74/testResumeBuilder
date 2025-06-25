
import { useResume } from "../../context/ResumeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMinimize } from '@fortawesome/free-regular-svg-icons';
import FloatingToolbarPro from "../../Pages/FloatingToolbarPro";

const iconMap = {
  faWindowMinimize: faWindowMinimize,
};

export default function WorkExperience() {
  const { data, style, editMode, updateField, selectedSection,
    setSelectedSection } = useResume();

  const handleBlur = (index, key, e) => {
    const updated = [...data.experience];
    updated[index][key] = e.target.innertext.trim();
    updateField('experience', null, updated);

  };




  // if (!style.workExpe?.sideline) {
  //   return (
  //     <div className="workExperience" style={style?.workExpe?.box}>
  //       <h2 contentEditable={editMode} style={style?.workExpe?.heading}>Work Experience</h2>
  //       {data.experience.map((exp, index) => (
  //         <div className="workPlace" key={index} style={style?.workExpe?.eachWorkPlace}>
  //           <h3 contentEditable={editMode}
  //             suppressContentEditableWarning
  //             onBlur={(e) => handleBlur(index, "Title", e)} style={style?.workExpe?.role}>{exp.Role}</h3>
  //           <h4 contentEditable={editMode}
  //             suppressContentEditableWarning
  //             onBlur={(e) => handleBlur(index, "Title", e)} style={style?.workExpe?.organization}> {exp.Organization}</h4>
  //           <p contentEditable={editMode}
  //             suppressContentEditableWarning
  //             onBlur={(e) => handleBlur(index, "Title", e)} style={style?.workExpe?.dates}>{exp.Location} | {exp["Start Date"]} - {exp["End Date"]}</p>
  //           <ul style={style?.workExpe?.wholeList}>
  //             {exp.Description.map((item, i) => <li contentEditable={editMode}
  //               suppressContentEditableWarning
  //               onBlur={(e) => handleBlur(index, "Title", e)} key={i} style={{ ...style?.workExpe?.bullets, listStyle: 'none', display: 'flex', alignItems: 'center' }}>
  //               {style?.workExpe?.bulletIcon?.type === "fontawesome" && (
  //                 <FontAwesomeIcon
  //                   icon={iconMap[style.workExpe.bulletIcon.icon]}
  //                   style={{
  //                     color: style.workExpe.bulletIcon.color,
  //                     fontSize: style.workExpe.bulletIcon.size,
  //                     marginRight: style.workExpe.bulletIcon.marginRight,
  //                     minWidth: style.workExpe.bulletIcon.size
  //                   }}
  //                 />
  //               )}
  //               {item}
  //             </li>
  //             )}
  //           </ul>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }
  if (!style.workExpe?.sideline) {
  return (
    <div
      className="workExperience resumeSection"
      onClick={() => setSelectedSection("experience")}
      style={style?.workExpe?.box}
    >
      <h2 contentEditable={editMode} style={style?.workExpe?.heading}>
        Work Experience
      </h2>

      {/* ✅ Toolbar */}
      {selectedSection === "experience" && (
        <FloatingToolbarPro
          sectionKey="experience"
          position={{ top: "54%", right: "17%" }}
        />
      )}

      {data.experience.map((exp, index) => (
        <div className="workPlace" key={index} style={style?.workExpe?.eachWorkPlace}>
          <h3
            contentEditable={editMode}
            suppressContentEditableWarning
            onBlur={(e) => handleBlur(index, "Role", e)}
            style={style?.workExpe?.role}
          >
            {exp.Role}
          </h3>
          <h4
            contentEditable={editMode}
            suppressContentEditableWarning
            onBlur={(e) => handleBlur(index, "Organization", e)}
            style={style?.workExpe?.organization}
          >
            {exp.Organization}
          </h4>
          <p
            contentEditable={editMode}
            suppressContentEditableWarning
            onBlur={(e) => handleBlur(index, "Dates", e)}
            style={style?.workExpe?.dates}
          >
            {exp.Location} | {exp["Start Date"]} - {exp["End Date"]}
          </p>
          <ul style={style?.workExpe?.wholeList}>
            {exp.Description.map((item, i) => (
              <li
                contentEditable={editMode}
                suppressContentEditableWarning
                onBlur={(e) => {
                  const updated = [...data.experience];
                  updated[index].Description[i] = e.target.innerText.trim();
                  updateField("experience", null, updated);
                }}
                key={i}
                style={{
                  ...style?.workExpe?.bullets,
                  listStyle: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {style?.workExpe?.bulletIcon?.type === "fontawesome" && (
                  <FontAwesomeIcon
                    icon={iconMap[style.workExpe.bulletIcon.icon]}
                    style={{
                      color: style.workExpe.bulletIcon.color,
                      fontSize: style.workExpe.bulletIcon.size,
                      marginRight: style.workExpe.bulletIcon.marginRight,
                      minWidth: style.workExpe.bulletIcon.size,
                    }}
                  />
                )}
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

  else {
    return (
      <div className="workExperience" style={style?.workExpe?.box}>
        <h2 style={style?.workExpe?.heading}>Work Experience</h2>

        <div className="timeline" style={style?.workExpe?.timeline}>
          {data.experience.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="dot" style={style?.workExpe?.dot}></div>
              <div className="workPlace" style={style?.workExpe?.eachWorkPlace}>
                <h3 style={style?.workExpe?.role}>{exp.Role}</h3>
                <h4 style={style?.workExpe?.organization}>{exp.Organization}</h4>
                <p style={style?.workExpe?.dates}>
                  {exp.Location} | {exp["Start Date"]} - {exp["End Date"]}
                </p>
                <ul style={style?.workExpe?.wholeList}>
                  {exp.Description.map((item, i) => (
                    <li key={i} style={style?.workExpe?.bullets}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
