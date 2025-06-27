

import { createContext, useContext, useState } from "react";

export const ResumeContext = createContext();

export const useResume = () => useContext(ResumeContext);

export function ResumeProvider({ children, initialData, style, editModeFromURL }) {
 const defaultGrid = style?.layout?.areas || [];

  const [gridAreas, setGridAreas] = useState(() => {
    const saved = localStorage.getItem("gridAreas");
    return saved ? JSON.parse(saved) : defaultGrid;
  });

  
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("resumeData");
    return saved ? JSON.parse(saved) : initialData;
  });

  const [editMode, setEditMode] = useState(editModeFromURL || false);
const [selectedSection, setSelectedSection] = useState(null);

  

  const save = () => {
    localStorage.setItem("resumeData", JSON.stringify(data));
    setEditMode(false);
    console.log("Saved rich text data:", data);  
  };
  const updateField = (section, key, value) => {
     console.log("Updating:", section, key, value);
  setData((prev) => {
    if (key === null && section) {
      return {
        ...prev,
        [section]: value,
      };
    }

    if (key && section) {
      return {
        ...prev,
        [section]: {
          ...prev[section],
          [key]: value,
        },
      };
    }

    if (!section && key) {
      return {
        ...prev,
        [key]: value,
      };
    }
  localStorage.setItem("resumeData", JSON.stringify(updated)); 
    return updated;
  });
};


  return (
   <ResumeContext.Provider
  value={{
    data,
    setData,
    style,
    editMode,
    setEditMode,
    save,
    updateField,
    selectedSection,
    setSelectedSection,
    gridAreas,
    setGridAreas

  }}
>
      {children}
    </ResumeContext.Provider>
  );
}




// import { createContext, useContext, useState } from "react";

// export const ResumeContext = createContext();

// export const useResume = () => useContext(ResumeContext);

// export function ResumeProvider({ children, initialData, style, editModeFromURL }) {



//   const [data, setData] = useState(() => {
//     const saved = localStorage.getItem("resumeData");
//     return saved ? JSON.parse(saved) : initialData;
//   });

//   const [editMode, setEditMode] = useState(editModeFromURL || false);
// const [selectedSection, setSelectedSection] = useState(null);

  

//   const save = () => {
//     localStorage.setItem("resumeData", JSON.stringify(data));
//     setEditMode(false);
//     console.log("Saved data:", data);
//   };
//   const updateField = (section, key, value) => {
//   setData((prev) => {
//     if (key === null && section) {
//       return {
//         ...prev,
//         [section]: value,
//       };
//     }

//     if (key && section) {
//       return {
//         ...prev,
//         [section]: {
//           ...prev[section],
//           [key]: value,
//         },
//       };
//     }

//     if (!section && key) {
//       return {
//         ...prev,
//         [key]: value,
//       };
//     }

//     return prev;
//   });
// };


//   return (
//    <ResumeContext.Provider
//   value={{
//     data,
//     setData,
//     style,
//     editMode,
//     setEditMode,
//     save,
//     updateField,
//     selectedSection,
//     setSelectedSection

//   }}
// >
//       {children}
//     </ResumeContext.Provider>
//   );
// }
