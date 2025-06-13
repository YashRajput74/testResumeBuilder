export default function TemplateSection({templates,onSelectTemplate}) {
    return (
        <section id="templates">
            <h2>Choose a resume Template</h2>
            <div className="templateGrid">
                {templates.map((template, index) => (
                    <div key={index} className="templateCard" onClick={()=>{onSelectTemplate(template)}}>
                        <div className="templatePreview">
                            
                        </div>
                        <p>{template.name}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}