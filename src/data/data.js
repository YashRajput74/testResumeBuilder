

 export const FormData = {

    firstname: { label: "First Name", type: "text", required: true },
    middlename: { label: "Middle Name", type: "text", required: false },
    lastname: { label: "Last Name", type: "text", required: true },
    DateOfBirth: { label: "Date of Birth", type: "date", required: true },
    Email: { label: "Email", type: "email", required: true },
    phoneno: { label: "Phone Number", type: "tel", required: true },
    Address: { label: "Address", type: "text", required: true },
    Summary: { label: "Summary", type: "textarea", required: false },
    ProfilePhoto: { label: "Profile Image", type: "file", required: false },


    projects: {
        label: "Projects",
        fields: [
            { label: "proj_title", type: "text", required: true },
            { label: "proj_link", type: "link", required: true },
            { label: "proj_description", type: "textarea", required: false }
        ]
    },
    skills: {
        label: "Skills",
        fields: [{type:"text", }]
    },
    achievements: {
        label: "Achievements",
        fields: [{ type: "text", label: "achieve_title", required: false }, { label: "achieve_description", type: "text", required: false }]
    },
    education: {
        label: "Education",
        fields: [{ label: "edu_school", type: "text" }, { label: "edu_degree", type: "text" }, { label: "edu_city", type: "text" }, { label: "edu_start_date", type: "text" }, { label: "edu_graduation_date", type: "text" }, { label: "edu_description", type: "text" }]
    },
    experience: {
        label: "Experience",
        fields: [{ label: "exp_title", type: "text" }, { label: "exp_organization", type: "text" }, { label: "exp_location", type: "text" }, { label: "exp_start_date", type: "number" }, { label: "exp_end_date", type: "number" }, { label: "exp_description", type: "text" }]
    },
    certifications: {
        label: "Certifications",
        fields: [{ label: "certification_title", type: "text" }, { label: "certification_organization", type: "text" }, { label: "certification_date", type: "number" }]
    },
    languages: {
      label: "Languages",
      fields: ["language_name", "language_proficiency"]
    }
}




// const user1 = {
//     "name": "Jane Doe",
//     "email": "jane.doe@example.com",
//     "phone": "+1 234 567 8901",
//     "summary": "Aspiring full-stack developer with hands-on experience in React, APIs, and backend integration.",
//     "education": [
//         {
//             "degree": "B.Tech in Computer Science",
//             "institute": "XYZ University",
//             "year": "2023"
//         },
//         {
//             "degree": "B.Tech in Computer Science",
//             "institute": "XYZ University",
//             "year": "2023"
//         }
//     ],
//     "experience": [
//         {
//             "position": "Frontend Intern",
//             "company": "TechCorp",
//             "duration": "Jan 2023 - Apr 2023",
//             "description": "Built reusable components in React and worked with REST APIs."
//         },
//         {
//             "position": "Frontend Intern",
//             "company": "TechCorp",
//             "duration": "Jan 2023 - Apr 2023",
//             "description": "Built reusable components in React and worked with REST APIs."
//         }
//     ],
//     "skills": ["JavaScript", "React", "Node.js", "API Integration", "Git"]
// }