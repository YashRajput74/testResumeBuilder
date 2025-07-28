
import { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import AuthModal from "./AuthModal";
import "./AboutPage.css";

export default function AboutPage() {
    const [reviews, setReviews] = useState([]);
    const [authOpen, setAuthOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", text: "" });

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("heitech-reviews")) || [];
        setReviews(stored);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updated = [...reviews, formData];
        setReviews(updated);
        localStorage.setItem("heitech-reviews", JSON.stringify(updated));
        setFormData({ name: "", text: "" });
    };

    return (
        <>
          <Header onLoginClick={() => setAuthOpen(true)} />

            <main className="about-container">
                <section className="about-hero">
                    <img src="c:\Users\LENOVO\AppData\Local\Packages\5319275A.WhatsAppDesktop_cv1g1gvanyjgm\TempState\07811DC6C422334CE36A09FF5CD6FE71\WhatsApp Image 2025-07-25 at 22.56.42_44ed172c.jpg" alt="App Screenshot" className="about-hero-image" />
                    <h1>About Heitech Resume Builder</h1>
                    <p className="hero-subtext">Land your dream job with a resume that reflects <em>your uniqueness</em>.</p>
                </section>

                <section className="about-section">
                    <h2>👇 Why We Built This</h2>
                    <p>
                        We built Heitech because we believe resumes should be personal, powerful, and beautifully simple.
                        No more fighting with templates. You just focus on your story — we’ll make it look great.
                    </p>
                </section>

                <section className="features-grid">
                    <FeatureCard icon="💡" title="Live Editing">Edit your resume sections with instant preview.</FeatureCard>
                    <FeatureCard icon="🎨" title="Beautiful Templates">Choose from clean, modern, and creative templates.</FeatureCard>
                    <FeatureCard icon="🛠️" title="WYSIWYG Tools">Rich formatting tools to style your resume.</FeatureCard>
                    <FeatureCard icon="📤" title="One-click Export">Export high-quality PDFs instantly.</FeatureCard>
                </section>

                <section className="about-section creator-section">
                    <h2>👥 Built With Passion</h2>
                    <img src="/assets/creator-photo.jpg" alt="Creator" className="creator-photo" />
                    <p>
                        Hi, I'm Kritika 👋 I created Heitech to help people like you land their dream jobs
                        with confidence and style.
                    </p>
                </section>

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

                <section className="cta-section">
                    <a href="/resume" className="cta-button">
                        🚀 Build My Resume →
                    </a>
                </section>
            </main>

            <Footer />
             <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)}  />
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
