export default function Hero(){
    function handleScroll(){
        const section=document.getElementById("templates");
        if(section) section.scrollIntoView({behavior:"smooth"});
    }
    return (
        <section className="hero">
            <div className="heroContent">
                <h1>Build your Resume Instantly</h1>
                <p>Create a professional resume using beautiful templates and your own data</p>
                <button onClick={handleScroll}>Choose a Template</button>
            </div>
        </section>
    )
}