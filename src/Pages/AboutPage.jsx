import Header from "../Components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function AboutPage() {
    return (
        <>
            <Header />

            <main className="aboutPageMain">
                <section className="aboutHero">
                    <h1>About Heitech Resume Builder</h1>
                    <p>Craft modern, professional resumes effortlessly with Heitech.</p>
                </section>

                <section className="aboutContent">
                    <div className="aboutSection">
                        <h2>🚀 Our Mission</h2>
                        <p>
                            At Heitech, we aim to simplify the resume creation process for everyone —
                            from students to seasoned professionals. Our goal is to help you land your dream job
                            with a standout resume built in minutes.
                        </p>
                    </div>

                    <div className="aboutSection">
                        <h2>🎨 Beautiful Templates</h2>
                        <p>
                            Choose from a variety of stunning, customizable resume templates designed with hiring managers in mind.
                            Whether you prefer clean minimalism or vibrant modern designs, we’ve got you covered.
                        </p>
                    </div>

                    <div className="aboutSection">
                        <h2>💡 Smart Editing</h2>
                        <p>
                            Use our intuitive editor to personalize your resume sections live.
                            Add, remove, and rearrange components with real-time preview. 
                            Everything is auto-formatted — so you focus on your content, not the design.
                        </p>
                    </div>

                    <div className="aboutSection">
                        <h2>🔒 Your Data, Your Control</h2>
                        <p>
                            We value your privacy. Your resume data is securely stored,
                            and only you can access or edit it. Export it as PDF anytime.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
