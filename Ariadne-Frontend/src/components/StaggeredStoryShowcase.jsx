import React from 'react';
import './StaggeredStoryShowcase.css';

const StaggeredStoryShowcase = () => {
    return (
        <section className="staggered-showcase-section">
            <div className="staggered-section-header">
                <span className="staggered-eyebrow">EDITORIAL JOURNAL</span>
                <h2>Stories Behind <span>The Lens</span></h2>
                <p>A visual diary of quiet moments, raw landscapes, and cinematic storytelling from around the world.</p>
            </div>

            <div className="staggered-stage-wrapper">
                <div className="staggered-grid">

                    {/* Frame 1: Full-bleed Hero Story (Offset High) */}
                    <div className="staggered-card card-frame-1">
                        <div className="card-inner-padded">
                            <div className="card-img-rounded">
                                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop" alt="East Coast Expedition" />
                            </div>
                            <div className="card-text-block">
                                <span className="card-badge">FEATURED STORY</span>
                                <h3>Wild Camping Along Tasmania's Coast</h3>
                                <p className="card-subtext">Scroll for more ↓</p>
                            </div>
                        </div>
                    </div>

                    {/* Frame 2: Dark Editorial Statement (Offset Low) */}
                    <div className="staggered-card card-frame-2 card-theme-dark">
                        <div className="card-inner-padded">
                            <div className="card-header-divider"></div>
                            <h3>About Ariadne</h3>
                            <p className="card-body-text">
                                We are slow visual travelers with a soft spot for quiet moments, raw lighting, and unscripted stories that don't make the guidebooks.
                            </p>
                            <p className="card-footer-tag">Currently roaming. Always searching.</p>
                        </div>
                    </div>

                    {/* Frame 3: Center Spotlight Article (Offset High) */}
                    <div className="staggered-card card-frame-3 card-theme-light">
                        <div className="card-inner-padded">
                            <div className="card-top-img">
                                <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop" alt="Tasmania" />
                            </div>
                            <div className="card-content-area">
                                <h3>Wild Camping Along Tasmania's East Coast</h3>
                                <div className="card-meta-row">
                                    <span>📅 July 11, 2026</span>
                                    <span>📍 Australia</span>
                                </div>
                                <p className="card-excerpt">
                                    The coast of Tasmania doesn't care where you came from. It just opens up—wild, wind-lashed, and utterly indifferent...
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Frame 4: Recent Stories Thumbnail (Offset Low) */}
                    <div className="staggered-card card-frame-4 card-theme-cream">
                        <div className="card-inner-padded">
                            <h4>Latest travel stories</h4>
                            <div className="card-thumb-rounded">
                                <img src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop" alt="Desert Dunes" />
                            </div>
                            <div className="card-bottom-info">
                                <span className="card-date">September 17, 2026</span>
                                <h5>Driving Across Sahara Dunes</h5>
                            </div>
                        </div>
                    </div>

                    {/* Frame 5: Modern Typography Poster (Offset High) */}
                    <div className="staggered-card card-frame-5 card-theme-warm">
                        <div className="card-inner-padded">
                            <span className="card-eyebrow-sm">END OF THE TRAIL</span>
                            <h2 className="card-bold-heading">Less rush.<br />More wonder.</h2>
                            <div className="card-nav-links">
                                <span>Home</span>
                                <span>Articles</span>
                                <span>About</span>
                                <span>Contact</span>
                            </div>
                            <div className="card-social-icons">
                                <span>📷</span>
                                <span>📌</span>
                                <span>▶</span>
                                <span>𝕏</span>
                            </div>
                        </div>
                    </div>

                    {/* Frame 6: Bold Brand Monogram (Offset Low) */}
                    <div className="staggered-card card-frame-6 card-theme-blue">
                        <div className="card-inner-padded">
                            <div className="card-top-nav">
                                <span>Home</span>
                                <span>Articles</span>
                                <span>About</span>
                            </div>
                            <div className="card-brand-title">
                                <h2>The Roam<br />Report</h2>
                            </div>
                            <div className="card-illustration-icon">
                                🚂 ✨ 📷
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default StaggeredStoryShowcase;
