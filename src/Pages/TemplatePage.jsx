import { useState } from 'react';
import Header from '../Components/Header/Header';
import { useNavigate } from 'react-router-dom';
import { templates } from '../data/templates';
import Footer from '../Components/Footer/Footer';
import { ResumeProvider } from '../context/ResumeContext';
import ResumeRenderer from '../ResumeRenderer/ResumeRenderer';
import templateStyles from '../data/templateStyle';
import mockUserData from '../data/mockUserData';

export default function AllTemplatesPage() {
    const navigate = useNavigate();
    const [headshotFilter, setHeadshotFilter] = useState("");
    const [columnFilter, setColumnFilter] = useState("");
    const [previewSize, setPreviewSize] = useState("normal");
    const [viewMode, setViewMode] = useState("carousel");
    const [carouselIndex, setCarouselIndex] = useState(0);

    const filtered = templates.filter(template => {
        const mh = !headshotFilter ||
            (headshotFilter === "with" && template.isAvatar === "true") ||
            (headshotFilter === "without" && template.isAvatar === "false");
        const mc = !columnFilter ||
            (columnFilter === "one" && template.filteredColumn === "1") ||
            (columnFilter === "two" && template.filteredColumn === "2");
        return mh && mc;
    });

    const handlePrev = () => setCarouselIndex(i =>
        i === 0 ? filtered.length - 1 : i - 1
    );
    const handleNext = () => setCarouselIndex(i =>
        i === filtered.length - 1 ? 0 : i + 1
    );

    const renderCard = (template, style = {}) => (
        <div
            key={template.id}
            className="templateCard"
            style={style}
            onClick={() => navigate(`/resume/${template.id}`)}
        >
            <div className="templatePreview">
                <div
                    style={{
                        transform: previewSize === "compact" ? 'scale(0.22)' : 'scale(0.28)',
                        transformOrigin: 'top left',
                        width: '210mm',
                        height: '297mm',
                        background: '#fff',
                        pointerEvents: 'none',
                        position: 'absolute',
                        top: '0.8rem',
                        left: viewMode === "carousel" ? "-0.1rem" : "1.5rem",
                    }}
                >
                    <ResumeProvider
                        initialData={mockUserData}
                        style={templateStyles[template.id] || {}}
                        editModeFromURL={false}
                    >
                        <ResumeRenderer template={template} />
                    </ResumeProvider>
                </div>
            </div>
            <p>{template.name}</p>
            <button
                className="customizeBtn"
                onClick={e => {
                    e.stopPropagation();
                    navigate(`/resume/${template.id}?edit=true`);
                }}
            >
                Customize
            </button>
        </div>
    );

    return (
        <>
            <section className="allTemplatesPage">
                <Header />
                <div className="templateIntro">
                    <div className="uprpara">
                        <h1>Pick the Template That Suits You Best</h1>
                        <p>Whether you're creative or corporate — we’ve got you covered!</p>
                    </div>
                </div>
                <div className="filterWrapper">
                    <div className="filterBar">
                        <div className="filterLeft">
                            <span className="filterLabel">Filters:</span>
                            <select className="barBtn" value={headshotFilter} onChange={e => setHeadshotFilter(e.target.value)}>
                                <option value="">Headshot</option>
                                <option value="with">With Photo</option>
                                <option value="without">Without Photo</option>
                            </select>
                            <select className="barBtn" value={columnFilter} onChange={e => setColumnFilter(e.target.value)}>
                                <option value="">Columns</option>
                                <option value="one">One Column</option>
                                <option value="two">Two Column</option>
                            </select>
                        </div>
                        <div className="filterRight">
                            <select className="barBtn" value={previewSize} onChange={e => setPreviewSize(e.target.value)}>
                                <option value="normal">Normal View</option>
                                <option value="compact">Compact View</option>
                            </select>
                            <select className="barBtn" value={viewMode} onChange={e => { setViewMode(e.target.value); setCarouselIndex(0); }}>
                                <option value="grid">Grid View</option>
                                <option value="carousel">Carousel View</option>
                            </select>
                        </div>
                    </div>
                </div>

                {filtered.length === 0 ? (
                    <p style={{ textAlign: 'center', marginTop: '2rem' }}>No templates available.</p>
                ) : viewMode === "grid" ? (
                    <div className="allTemplatesGrid">
                        {filtered.map(template => renderCard(template))}
                    </div>
                ) : (
                    <div className="carouselWrapper">
                        <button className="carouselBtn" onClick={handlePrev}>&lt;</button>
                        <div className="carousel">
                            {filtered.map((t, i) => {
                                const offset = i - carouselIndex;
                                const abs = Math.abs(offset);
                                const scale = offset === 0 ? 1 : 0.8;
                                const rotateY = offset * 30;
                                const translateX = offset * 180;
                                const z = offset === 0 ? 2 : 1;
                                const opacity = abs > 2 ? 0 : 1;

                                return renderCard(t, {
                                    position: 'absolute',
                                    left: '50%',
                                    top: 0,
                                    transform: `translateX(${translateX}px) translateX(-50%) scale(${scale}) rotateY(${rotateY}deg)`,
                                    transformStyle: 'preserve-3d',
                                    opacity,
                                    zIndex: z
                                });
                            })}
                        </div>
                        <button className="carouselBtn" onClick={handleNext}>&gt;</button>
                    </div>
                )}
                <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#555', marginTop: '0.5rem' }}>
                    More templates coming soon. You can switch views to explore better.
                </p>
            </section>
            <Footer />
        </>
    );
}
