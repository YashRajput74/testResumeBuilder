const mockUserData = {
    firstName: "Ayesha",
    lastName: "Takia",
    dateOfBirth: "2002-09-15",
    email: "ayesha.takia@example.com",
    phoneNo: "+91 9876543210",
    address: "123, Park Lane, Delhi, India",
    summary: "Enthusiastic and detail-oriented web developer with a passion for building dynamic user interfaces using React. Strong background in team projects and API integrations.",
    profilePhoto: "", 
    projects: [
        {
            proj_title: "Personal Portfolio Website",
            proj_link: "https://ayesha-portfolio.netlify.app",
            proj_description: "Developed a responsive personal portfolio using React and CSS showcasing projects and blogs."
        },
        {
            proj_title: "Weather App",
            proj_link: "https://github.com/ayesha/weather-app",
            proj_description: "A weather forecast app built with OpenWeatherMap API, displaying current weather by location."
        }
    ],

    skills: [
        { skill: "JavaScript" },
        { skill: "React" },
        { skill: "HTML5" },
        { skill: "CSS3" },
        { skill: "Git & GitHub" }
    ],

    achievements: [
        {
            achieve_title: "Top 5 Finalist - Hackathon",
            achieve_description: "Built a disaster alert app during a 24-hour college hackathon."
        },
        {
            achieve_title: "Open Source Contributor",
            achieve_description: "Contributed to documentation and bug fixes in a React open-source project."
        }
    ],

    education: [
        {
            edu_school: "ABC Public School",
            edu_degree: "Senior Secondary (Science)",
            edu_city: "Delhi",
            edu_start_date: "2017",
            edu_graduation_date: "2019",
            edu_description: "Completed high school with a focus on PCM and Computer Science."
        },
        {
            edu_school: "XYZ Institute of Technology",
            edu_degree: "B.Tech in Computer Science",
            edu_city: "Delhi",
            edu_start_date: "2019",
            edu_graduation_date: "2023",
            edu_description: "Learned web development, data structures, and software engineering."
        }
    ],

    experience: [
        {
            exp_title: "Frontend Developer Intern",
            exp_organization: "TechNova Pvt Ltd",
            exp_location: "Remote",
            exp_start_date: 2023,
            exp_end_date: 2024,
            exp_description: "Built reusable React components, integrated REST APIs, and improved UI performance."
        }
    ],

    certifications: [
        {
            certification_title: "React - Frontend Library",
            certification_organization: "freeCodeCamp",
            certification_date: 2023
        },
        {
            certification_title: "Responsive Web Design",
            certification_organization: "Coursera",
            certification_date: 2022
        }
    ]
};

export default mockUserData;