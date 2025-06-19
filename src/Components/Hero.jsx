
import './Header/Header'
export default function Hero(){
    function handleScroll(){
        const section=document.getElementById("templates");
        if(section) section.scrollIntoView({behavior:"smooth"});
    }
    return (
       <section className="hero">
        <div className="heroContent">
          <div  className='uprpara'>Allow customization and optimization for different job roles</div>
          <h1>Build your Resume Instantly</h1>
          <p>Create a professional resume using beautiful templates and your own data</p>
           <div className="ctaButtons">
          <button className="btnPrimary">Get Started</button>
          <button className="btnSecondary">Browse Templates</button>
        </div>
          {/* <button onClick={handleScroll}>Choose a Template</button> */}
        </div>
      </section>
    //      <section className="hero">
    //     <div className="hero-text">
    //       <h1>Design Your Dream Resume</h1>
    //       <p>Choose from modern, classic, and creative templates to build a standout resume in minutes.</p>
    //     </div>
    //     <div className="hero-img">
    //       <img src='' alt="Resume Preview" />
    //     </div>
    //   </section>
    )
}