// import Header from "../Components/Header/Header";
// import Footer from "../Components/Footer/Footer";

// export default function AboutPage() {
//     return (
//         <>
//             <Header />

//             <main className="aboutPageMain">
//                 <section className="aboutHero">
//                     <h1>About Heitech Resume Builder</h1>
//                     <p>Craft modern, professional resumes effortlessly with Heitech.</p>
//                 </section>

//                 <section className="aboutContent">
//                     <div className="aboutSection">
//                         <h2>🚀 Our Mission</h2>
//                         <p>
//                             At Heitech, we aim to simplify the resume creation process for everyone —
//                             from students to seasoned professionals. Our goal is to help you land your dream job
//                             with a standout resume built in minutes.
//                         </p>
//                     </div>

//                     <div className="aboutSection">
//                         <h2>🎨 Beautiful Templates</h2>
//                         <p>
//                             Choose from a variety of stunning, customizable resume templates designed with hiring managers in mind.
//                             Whether you prefer clean minimalism or vibrant modern designs, we’ve got you covered.
//                         </p>
//                     </div>

//                     <div className="aboutSection">
//                         <h2>💡 Smart Editing</h2>
//                         <p>
//                             Use our intuitive editor to personalize your resume sections live.
//                             Add, remove, and rearrange components with real-time preview. 
//                             Everything is auto-formatted — so you focus on your content, not the design.
//                         </p>
//                     </div>

//                     <div className="aboutSection">
//                         <h2>🔒 Your Data, Your Control</h2>
//                         <p>
//                             We value your privacy. Your resume data is securely stored,
//                             and only you can access or edit it. Export it as PDF anytime.
//                         </p>
//                     </div>
//                 </section>
//             </main>

//             <Footer />
//         </>
//     );
// }

// import Header from "../Components/Header/Header";
// import Footer from "../Components/Footer/Footer";
// import "./AboutPage.css"; // CSS file we'll write next

// export default function AboutPage() {
//     return (
//         <>
//             <Header />

//             <main className="about-container">
//                 {/* Hero Section */}
//                 <section className="about-hero">
//                     <img
//                         src="/assets/app-screenshot.png"
//                         alt="App screenshot"
//                         className="about-hero-image"
//                     />
//                     <h1>About Heitech Resume Builder</h1>
//                     <p className="hero-subtext">
//                         Land your dream job with a resume that reflects <em>your uniqueness</em>.
//                     </p>
//                 </section>

//                 {/* Our Story */}
//                 <section className="about-section">
//                     <h2>👇 Why We Built This</h2>
//                     <p>
//                         We were frustrated with generic templates and clunky tools. So we built something better — a
//                         resume builder that feels personal, flexible, and fast. Whether you're a student or a
//                         professional, Heitech helps you stand out with style.
//                     </p>
//                 </section>

//                 {/* Features Section */}
//                 <section className="features-grid">
//                     <FeatureCard icon="💡" title="Live Editing">
//                         Edit your resume sections with instant preview and formatting.
//                     </FeatureCard>
//                     <FeatureCard icon="🎨" title="Beautiful Templates">
//                         Select from designer-made, ATS-friendly templates.
//                     </FeatureCard>
//                     <FeatureCard icon="🛠️" title="WYSIWYG Tools">
//                         Format text, rearrange sections, and fully control the layout.
//                     </FeatureCard>
//                     <FeatureCard icon="📤" title="One-click Export">
//                         Save and export your resume as a PDF with a single click.
//                     </FeatureCard>
//                 </section>

//                 {/* Creator Section */}
//                 <section className="about-section creator-section">
//                     <h2>👥 Built With Passion</h2>
//                     <img
//                         src="/assets/creator-photo.jpg"
//                         alt="Creator"
//                         className="creator-photo"
//                     />
//                     <p>
//                         Hi, I'm Kritika 👋 I created Heitech because resumes should reflect people — not just data.
//                         This builder is crafted with care, design, and functionality at its core.
//                     </p>
//                 </section>

//                 {/* Testimonials */}
//                 <section className="about-section">
//                     <h2>⭐ User Love</h2>
//                     <ul className="testimonial-list">
//                         <li>"This is the best resume builder I’ve used. So clean!"</li>
//                         <li>"I created my resume in 10 minutes and got hired!"</li>
//                         <li>Over <strong>2,500+</strong> resumes created with Heitech</li>
//                     </ul>
//                 </section>

//                 {/* CTA */}
//                 <section className="cta-section">
//                     <a href="/resume" className="cta-button">
//                         🚀 Build My Resume →
//                     </a>
//                 </section>
//             </main>

//             <Footer />
//         </>
//     );
// }

// function FeatureCard({ icon, title, children }) {
//     return (
//         <div className="feature-card">
//             <h3>{icon} {title}</h3>
//             <p>{children}</p>
//         </div>
//     );
// }
import { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import "./AboutPage.css";

export default function AboutPage() {
    const [reviews, setReviews] = useState([]);
    const [formData, setFormData] = useState({ name: "", text: "" });

    // Load reviews from localStorage on mount
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("heitech-reviews")) || [];
        setReviews(stored);
    }, []);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const updated = [...reviews, formData];
        setReviews(updated);
        localStorage.setItem("heitech-reviews", JSON.stringify(updated));
        setFormData({ name: "", text: "" });
    };

    return (
        <>
            <Header />

            <main className="about-container">
                {/* Hero */}
                <section className="about-hero">
                    <img src="c:\Users\LENOVO\AppData\Local\Packages\5319275A.WhatsAppDesktop_cv1g1gvanyjgm\TempState\07811DC6C422334CE36A09FF5CD6FE71\WhatsApp Image 2025-07-25 at 22.56.42_44ed172c.jpg" alt="App Screenshot" className="about-hero-image" />
                    <h1>About Heitech Resume Builder</h1>
                    <p className="hero-subtext">Land your dream job with a resume that reflects <em>your uniqueness</em>.</p>
                </section>

                {/* Our Story */}
                <section className="about-section">
                    <h2>👇 Why We Built This</h2>
                    <p>
                        We built Heitech because we believe resumes should be personal, powerful, and beautifully simple.
                        No more fighting with templates. You just focus on your story — we’ll make it look great.
                    </p>
                </section>

                {/* Features */}
                <section className="features-grid">
                    <FeatureCard icon="💡" title="Live Editing">Edit your resume sections with instant preview.</FeatureCard>
                    <FeatureCard icon="🎨" title="Beautiful Templates">Choose from clean, modern, and creative templates.</FeatureCard>
                    <FeatureCard icon="🛠️" title="WYSIWYG Tools">Rich formatting tools to style your resume.</FeatureCard>
                    <FeatureCard icon="📤" title="One-click Export">Export high-quality PDFs instantly.</FeatureCard>
                </section>

                {/* Creator */}
                <section className="about-section creator-section">
                    <h2>👥 Built With Passion</h2>
                    <img src="/assets/creator-photo.jpg" alt="Creator" className="creator-photo" />
                    <p>
                        Hi, I'm Kritika 👋 I created Heitech to help people like you land their dream jobs
                        with confidence and style.
                    </p>
                </section>

                {/* User Reviews */}
                <section className="about-section">
                    <h2>⭐ User Love</h2>
                    <ul className="testimonial-list">
                        {reviews.length === 0 ? (
                            <li>No reviews yet. Be the first to share yours!</li>
                        ) : (
                            reviews.map((r, index) => (
                                <li key={index}>
                                    <strong>{r.name}</strong>: "{r.text}"
                                </li>
                            ))
                        )}
                    </ul>
                </section>

                {/* Submit a Review */}
                <section className="review-section">
                    <h2>💬 Share Your Experience</h2>
                    <form className="review-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                        <textarea
                            name="text"
                            placeholder="What did you love about Heitech?"
                            value={formData.text}
                            onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                            required
                        ></textarea>
                        <button type="submit">Submit Review</button>
                    </form>
                </section>

                {/* CTA */}
                <section className="cta-section">
                    <a href="/resume" className="cta-button">
                        🚀 Build My Resume →
                    </a>
                </section>
            </main>

            <Footer />
        </>
    );
}

function FeatureCard({ icon, title, children }) {
    return (
        <div className="feature-card">
            <h3>{icon} {title}</h3>
            <p>{children}</p>
        </div>
    );
}
