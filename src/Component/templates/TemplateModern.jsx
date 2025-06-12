export default function TemplateModern({ data }) {
  return (
    <div style={{ padding: "20px", background: "#f0f0f0" }}>
      <h1 style={{ color: "#0077cc" }}>{data.personal.name}</h1>
      <h3>{data.personal.title}</h3>
      <p>{data.personal.summary}</p>

      {data.sections.map((section) => (
        <div key={section.id} style={{ marginTop: "20px" }}>
          <h2 style={{ borderBottom: "2px solid #0077cc" }}>{section.title}</h2>
          <ul>
            {section.items.map((item, i) => (
              <li key={i}>{typeof item === "string" ? item : JSON.stringify(item)}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}