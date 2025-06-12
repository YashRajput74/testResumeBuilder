// export const resumeData = {
//   personal: {
//     name: "John Doe",
//     title: "Frontend Developer",
//     summary: "Passionate developer with 3 years of experience."
//   },
//   sections: [
//     {
//       id: "experience",
//       title: "Experience",
//       items: [
//         {
//           role: "Intern",
//           company: "Google",
//           duration: "June 2022 - Aug 2022",
//           details: "Worked on Material UI components"
//         }
//       ]
//     },
//     {
//       id: "education",
//       title: "Education",
//       items: [
//         {
//           degree: "B.Tech in CSE",
//           school: "ABC University",
//           year: "2023"
//         }
//       ]
//     },
//     {
//       id: "skills",
//       title: "Skills",
//       items: ["React", "JavaScript", "CSS"]
//     }
    
//   ]
// };
// resumeData.js
export const resumeData = {
  personal: {
    name: "John Doe",
    title: "Frontend Developer",
    summary: "Passionate developer with 3 years of experience."
  },
  sections: {
    summary: {
      title: "Summary",
      content: "Passionate developer with 3 years of experience."
    },
    experience: {
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
    education: {
      title: "Education",
      items: [
        {
          degree: "B.Tech in CSE",
          school: "ABC University",
          year: "2023"
        }
      ]
    },
    skills: {
      title: "Skills",
      items: ["React", "JavaScript", "CSS"]
    },
    projects: {
      title: "Projects",
      items: []
    },
    achievements: {
      title: "Achievements",
      items: []
    }
  }
};
