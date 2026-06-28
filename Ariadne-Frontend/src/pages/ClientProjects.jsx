import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './Portfolio.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';


const resolveUrl = (src) => {
    if (!src) return '';
    if (src.startsWith('http') || src.startsWith('blob:') || src.startsWith('data:')) return src;
    return `${API_URL}${src}`;
};

const ClientProjects = () => {
    const { clientName } = useParams();
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const decodedName = decodeURIComponent(clientName);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(
                    `${API_URL}/api/portfolio/client/${encodeURIComponent(decodedName)}`
                );
                if (response.data.success) {
                    setProjects(response.data.data);
                }
            } catch (error) {
                console.error('Failed to fetch client projects', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProjects();
    }, [decodedName]);

    if (isLoading) {
        return (
            <div className="portfolio-container">
                <div className="container text-center py-5">
                    <h2>Loading Projects...</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="portfolio-container">
            <div className="container">
                <Link to="/packages" className="back-link">← Back to Portfolio</Link>

                {/* Client header */}
                <div style={{ marginBottom: '2.5rem' }}>
                    <p style={{ color: '#a0aec0', fontSize: '0.9rem', marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        All projects for
                    </p>
                    <h1 className="portfolio-title" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>
                        {decodedName}
                    </h1>
                    <p className="portfolio-subtitle" style={{ textAlign: 'left' }}>
                        {projects.length} project{projects.length !== 1 ? 's' : ''} completed
                    </p>
                </div>

                {projects.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '4rem 0', color: '#a0aec0' }}>
                        <p style={{ fontSize: '1.2rem' }}>No published projects found for this client.</p>
                        <Link to="/packages" className="back-link" style={{ marginTop: '1rem', display: 'inline-block' }}>
                            ← Browse Portfolio
                        </Link>
                    </div>
                ) : (
                    <div className="portfolio-grid">
                        {projects.map(project => {
                            const coverMedia = project.media?.find(m => m.isFeatured) || project.media?.[0];
                            const fallbackUrl = resolveUrl(coverMedia?.thumbnailUrl || coverMedia?.url);
                            const coverUrl = project.coverImage ? resolveUrl(project.coverImage) : fallbackUrl;

                            return (
                                <Link
                                    to={`/portfolio/project/${project.slug}`}
                                    key={project._id}
                                    className="portfolio-item-link"
                                >
                                    <div
                                        className="portfolio-item"
                                        style={{
                                            backgroundImage: `url(${coverUrl})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}
                                    >
                                        <div className="portfolio-overlay">
                                            <h3>{project.title}</h3>
                                            {project.category?.name && (
                                                <p style={{ color: '#bd9f67', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                                    {project.category.name}
                                                </p>
                                            )}
                                            {project.date && (
                                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', margin: 0 }}>
                                                    {new Date(project.date).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ClientProjects;
