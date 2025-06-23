
import { createContext, useContext, useState } from "react";

export const ResumeContext = createContext();

export const useResume = () => useContext(ResumeContext);

export function ResumeProvider({ children, initialData, style, editModeFromURL }) {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("resumeData");
    return saved ? JSON.parse(saved) : initialData;
  });

  const [editMode, setEditMode] = useState(editModeFromURL || false);

  const save = () => {
    localStorage.setItem("resumeData", JSON.stringify(data));
    setEditMode(false);
    console.log("Saved data:", data);
  };
  const updateField = (section, key, value) => {
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

    return prev;
  });
};


  return (
    <ResumeContext.Provider
      value={{ data, setData, style, editMode, setEditMode, save, updateField }}
    >
      {children}
    </ResumeContext.Provider>
  );
}
