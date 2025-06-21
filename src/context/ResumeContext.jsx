import { createContext, useContext, useState } from "react";

export const ResumeContext = createContext();

export const useResume = () => useContext(ResumeContext);

export function ResumeProvider({children, initialData, style }) {

    const [data, setData] = useState(initialData);
    const [editMode, setEditMode] = useState(false);


    const save = () => {
    setEditMode(false);

    console.log("Saving data:", data);
  };
const updateField = (section, key, value) => {
  if (key === null) {
    setData(prev => ({
      ...prev,
      [section]: value
    }));
  } else {
    setData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }));
  }
};

     return (
    <ResumeContext.Provider value={{  data, setData, style, editMode, setEditMode, save, updateField  }}>
      {children}
    </ResumeContext.Provider>
  );
}




// import { createContext, useContext, useState } from "react";

// export const ResumeContext = createContext();

// export function ResumeProvider({initialData, children}){
//       const [data, setData] = useState(initialData);
//         const [editMode, setEditMode] = useState(false);
//         const save = () => {
//     localStorage.setItem('resumeData', JSON.stringify(data));
//     setEditMode(false);
//   };
//  return (
//     <ResumeContext.Provider
//       value={{ data, setData, editMode, setEditMode, save }}
//     >
//       {children}
//     </ResumeContext.Provider>
//   );

// }

// export const useResume = () => useContext(ResumeContext);