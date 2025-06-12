export default function PersonalInfo({ data }) {
    return (
        <div className="personalInfo">
            <h1>{data.name}</h1>
            <p>{data.email} | {data.phoneNo}</p>
            <p>{data.address}</p>
            <p>LinkedIn: {data.linkedin}</p>
        </div>
    );
}