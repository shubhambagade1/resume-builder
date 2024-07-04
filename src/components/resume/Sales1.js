import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/sales-1.css';
import html2pdf from 'html2pdf.js';

const SalesManager = () => {
    const downloadPDF = () => {
        const element = document.getElementsByClassName('sales-1-container')[0];
        const opt = {
            filename: 'Sales-1 Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };

    return (
        <div className='sales-1-wrapper'>
            <div className="sales-1-container" contentEditable="true">
                <div className="sales-1-header">
                    <h1 contentEditable="true">Taylor Foster</h1>
                    <h2 contentEditable="true">Experienced Sales Manager | Business Development Strategist</h2>
                    <div className="sales-1-contact-info">
                        <p contentEditable="true"><FaEnvelope /> diana@novoresume.com</p>
                        <p contentEditable="true"><FaPhone /> 044 412 2020</p>
                        <p contentEditable="true"><FaMapMarkerAlt />Palo Alto, CA</p>
                    </div>
                </div>
                <div className="sales-1-content">
                    <div className="sales-1-left-column">
                        <section className="sales-1-section">
                            <h3 contentEditable="true">STRENGTHS</h3>
                            <ul contentEditable="true">
                                <li>Team Leadership</li>
                                <li>Strategic Negotiation</li>
                                <li>Market Analysis</li>
                            </ul>
                        </section>
                        <section className="sales-1-section">
                            <h3 contentEditable="true">SKILLS</h3>
                            <ul contentEditable="true">
                                <li>Sales Management</li>
                                <li>Business Development</li>
                                <li>Go-to-market Strategy</li>
                                <li>Client Relationship Management</li>
                            </ul>
                        </section>
                        <section className="sales-1-section">
                            <h3 contentEditable="true">CERTIFICATION</h3>
                            <ul contentEditable="true">
                                <li>Advanced Sales Management</li>
                                <li>Business Development Masterclass</li>
                            </ul>
                        </section>
                        <section className="sales-1-section">
                            <h3 contentEditable="true">PASSIONS</h3>
                            <ul contentEditable="true">
                                <li>Stay Current with Tech</li>
                                <li>Mentoring New Talent</li>
                            </ul>
                        </section>
                    </div>
                    <div className="sales-1-right-column">
                        <section className="sales-1-section">
                            <h3 contentEditable="true">SUMMARY</h3>
                            <p contentEditable="true">Highly experienced Sales Manager with over 10 years of experience...</p>
                        </section>
                        <section className="sales-1-section">
                            <h3 contentEditable="true">EXPERIENCE</h3>
                            <div>
                                <h4 contentEditable="true">Sales Manager</h4>
                                <p contentEditable="true">Gartner | 2017 - Present | Jacksonville, FL</p>
                                <ul contentEditable="true">
                                    <li>Successfully increased sales revenue by 40% in first quarter.</li>
                                    <li>Developed and implemented data-driven strategies resulting in 30% increase in customer retention.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 contentEditable="true">Business Development Manager</h4>
                                <p contentEditable="true">Forbes | 2013 - 2017 | New York, NY</p>
                                <ul contentEditable="true">
                                    <li>Managed a team focused on client acquisition and business growth.</li>
                                    <li>Successfully developed partnerships with 5 enterprise accounts in the first month.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 contentEditable="true">Sales Executive</h4>
                                <p contentEditable="true">HubSpot | 2010 - 2013 | Boston, MA</p>
                                <ul contentEditable="true">
                                    <li>Consistently exceeded sales targets by 20% each quarter.</li>
                                    <li>Brought in 10 new high-profile clients within the first year.</li>
                                </ul>
                            </div>
                        </section>
                        <section className="sales-1-section">
                            <h3 contentEditable="true">EDUCATION</h3>
                            <p contentEditable="true">Master's Degree in Business Administration | Harvard Business School | 2008 - 2010 | Cambridge, MA</p>
                            <p contentEditable="true">Bachelor's Degree in Marketing | University of Florida | 2004 - 2008 | Gainesville, FL</p>
                        </section>
                        <section className="sales-1-section">
                            <h3 contentEditable="true">LANGUAGES</h3>
                            <p contentEditable="true">English (Native)</p>
                            <p contentEditable="true">Spanish (Advanced)</p>
                        </section>
                    </div>
                </div>
            </div>
            <div className="download-section">
                <button className="downloadpdf-btn" onClick={downloadPDF}>Download PDF</button>
            </div>
        </div>
    );
};

export default SalesManager;
