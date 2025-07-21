

import { useNavigate } from "react-router-dom";
import '../Header/Header';

export default function Hero() {
  const navigate = useNavigate();

  const handleBrowseTemplates = () => {
    navigate("/all-templates");
  };

  return (
    <section className="hero">
      <div className="heroContent">
        <div className='center'>Allow customization and optimization for different job roles</div>
        <h1>Build your Resume Instantly</h1>
        <p>
          Create a <span className="highlighted">professional</span> resume using
          beautiful templates and your own data
        </p>
        <div className="ctaButtons">
          <button className="btnPrimary">Get Started</button>
          <button className="btnSecondary" onClick={handleBrowseTemplates}>
            Browse Templates
          </button>
        </div>
      </div>
    </section>
  );
}
