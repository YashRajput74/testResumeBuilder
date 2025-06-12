// export const resumeData = {
//   name: "John Doe",
//   title: "Frontend Developer",
//   summary: "A passionate developer with 3 years of experience.",
//   experience: [
//     {
//       company: "Google",
//       role: "Intern",
//       duration: "June 2022 - Aug 2022",
//       details: "Worked on Material UI components"
//     }
//   ],
//   education: [
//     {
//       school: "ABC University",
//       degree: "B.Tech in CSE",
//       year: "2023"
//     }
//   ],
//   skills: ["React", "JavaScript", "CSS"]
// };

export const resumeData = {
  personal: {
    name: "John Doe",
    title: "Frontend Developer",
    summary: "Passionate developer with 3 years of experience."
  },
  sections: [
    {
      id: "experience",
      title: "Experience",
      items: [
        {
          role: "Intern",
          company: "Google",
          duration: "June 2022 - Aug 2022",
          details: "Worked on Material UI components"
        }
      ]
    },
    {
      id: "education",
      title: "Education",
      items: [
        {
          degree: "B.Tech in CSE",
          school: "ABC University",
          year: "2023"
        }
      ]
    },
    {
      id: "skills",
      title: "Skills",
      items: ["React", "JavaScript", "CSS"]
    }
    
  ]
};

export const templateChoices = {
  classic: {
    name: "Classic",
    primaryColor: "#000",
    fontFamily: "serif",
    order: ["personal", "experience", "education", "skills"]
    layout: []
  },
  modern: {
    name: "Modern",
    primaryColor: "#0077cc",
    fontFamily: "sans-serif",
    order: ["personal", "skills", "experience", "education"]
  }
};


 export default function resumeBuilder(){

  return(

  )
 }