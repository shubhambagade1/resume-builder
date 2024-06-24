import React from 'react';
import '../styles/template-17.css';
import html2pdf from 'html2pdf.js';

const Template17 = () => {

    const downloadPDF = () => {
        const element = document.getElementsByClassName('template-17-resume-container')[0];
        const opt = {
            filename: 'Technical Consultant-resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };

    return (
        <div className='template-17-main-wrapper'>
            <div className="template-17-resume-container" contentEditable="true">
                <div className="template-17-left-panel">
                    <header className="template-17-header">
                        <h1>Vanessa Ford</h1>
                        <p>Technical Consultant | Data Analysis | Software Development</p>
                        <p className="template-17-contact-info">
                            <span>help@enhancv.com</span> | <span>linkedin.com</span> | <span>undefined</span>
                        </p>
                    </header>
                    <section className="template-17-summary">
                        <h2>SUMMARY</h2>
                        <p>Motivated Technical Consultant with over 8 years of experience in IT field, proficient in Python, C++, and SQL. Implemented advanced data solutions boosting efficiency by 30%.</p>
                    </section>
                    <section className="template-17-experience">
                        <h2>EXPERIENCE</h2>
                        <div>
                            <h3>Technical Consultant</h3>
                            <p>2017 - Present</p>
                            <p>Microsoft</p>
                            <ul>
                                <li>Proactively facilitated the integration of software solutions with client systems.</li>
                                <li>Managed implementation of advanced data solutions, boosting efficiency by 30%.</li>
                                <li>Leveraged detailed analytics to direct client data cleanup efforts.</li>
                                <li>Led the transition from legacy systems to AWS, moving 50+ clients in just six months.</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Software Engineer</h3>
                            <p>2015 - 2017</p>
                            <p>IBM</p>
                            <ul>
                                <li>Participated in the complete product life cycle from concept to implementation.</li>
                                <li>Worked with DevOps team to speed up software development process by 25%.</li>
                                <li>Implemented automated testing tools for quality assurance.</li>
                                <li>Developed 10+ software updates that enhanced user experience and productivity.</li>
                            </ul>
                        </div>
                        <div>
                            <h3>System Analyst</h3>
                            <p>2013 - 2015</p>
                            <p>Accenture</p>
                            <ul>
                                <li>Coordinated various teams to plan, develop, and implement software solutions.</li>
                                <li>Flagged system weaknesses and recommended long-term solutions, boosting system productivity by 20%.</li>
                                <li>Offered technical assistance during system upgrades and migrations.</li>
                            </ul>
                        </div>
                    </section>
                    <section className="template-17-education">
                        <h2>EDUCATION</h2>
                        <div>
                            <p>Master's Degree in Computer Science</p>
                            <p>2011 - 2013</p>
                            <p>Georgia Tech University, Georgia, USA</p>
                        </div>
                        <div>
                            <p>Bachelor's Degree in Information Technology</p>
                            <p>2007 - 2011</p>
                            <p>Florida State University, Florida, USA</p>
                        </div>
                    </section>
                    <section className="template-17-languages">
                        <h2>LANGUAGES</h2>
                        <p>English (Native), Spanish (Proficient)</p>
                    </section>
                </div>
                <div className="template-17-right-panel">
                    <section className="template-17-strengths">
                        <h2>STRENGTHS</h2>
                        <ul>
                            <li><strong>Problem-solving:</strong> Designed a recovery protocol for a client dealing with frequent data losses, reducing their incidents by 70%.</li>
                            <li><strong>Time Management:</strong> Successfully juggling multiple projects simultaneously. Correctly estimating time to completion of development tasks, improving delivery times by 15%.</li>
                            <li><strong>Adaptability:</strong> Quickly learning new technologies and adapting different software tools, to ensure optimal delivery in a rapidly changing environment.</li>
                        </ul>
                    </section>
                    <section className="template-17-skills">
                        <h2>SKILLS</h2>
                        <p>Python • C++ • SQL • Data Analysis • AWS • Microsoft Azure • DevOps</p>
                    </section>
                    <section className="template-17-certification">
                        <h2>CERTIFICATION</h2>
                        <p>Certified Professional in AWS</p>
                        <p>Python for Data Science</p>
                    </section>
                    <section className="template-17-passions">
                        <h2>PASSIONS</h2>
                        <p>Data Transparency: Passionate about promoting transparent and efficient data practices.</p>
                        <p>Martial Arts: A disciplined martial artist with a black belt in karate.</p>
                    </section>
                </div>
            </div>
            <div className='download-section'>
                <button className='downloadpdf-btn' onClick={downloadPDF}>Download PDF</button>
            </div>
        </div>
    );
};

export default Template17;
