// export default function PersonalInfo({ data }) {
//     return (
//         <div className="personalInfo">
//             <h1>{data.name}</h1>
//             <p>{data.email} | {data.phoneNo}</p>
//             <p>{data.address}</p>
//             <p>LinkedIn: {data.linkedin}</p>
//         </div>
//     );
// }



import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

export default function PersonalInfo({ data }) {
    return (
        <div className="personal-info-container">
            <div className="left-info">
                <h1 className="name">{data.name}</h1>
                <h3 className="role1">Frontend Developer</h3>
                <p className="summary">{data.summary}</p>
            </div>

            <div className="right-info">
                <p>
                    <span className="text">{data.email}</span>
                    <FaEnvelope className="icon" />
                </p>
                <p>
                    <span className="text">{data.phoneNo}</span>
                    <FaPhoneAlt className="icon" />
                </p>
                <p>
                    <span className="text">{data.address}</span>
                    <FaMapMarkerAlt className="icon" />
                </p>
                <p>
                    <span className="text">
                        <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </span>
                    <FaLinkedin className="icon" />
                </p>
                <p>
                    <span className="text">
                        <a href={data.github} target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </span>
                    <FaGithub className="icon" />
                </p>
            </div>
        </div>
    );
}
