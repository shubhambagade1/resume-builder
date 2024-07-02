import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/data-scientist-4.css';
import html2pdf from 'html2pdf.js';

const DataScientist4 = () => {
    const downloadPDF = () => {
        const element = document.getElementsByClassName('datascientist-4-resume-container')[0];
        const opt = {
            filename: 'Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };

    return (
        <div className="datascientist-4-main-wrapper">
            <div className="datascientist-4-resume-container">
                <div className='datascientist-4-header'>
                    <h2 contentEditable="true">Raj Kapoor</h2>
                    <p className="datascientist-4-job-title" contentEditable="true">Senior Data Analyst</p>
                </div>
                <div className='data-scientist-4-content-div'>
                    <div className="datascientist-4-left-column">
                        <div className="datascientist-4-section">
                            <h3>Contact</h3>
                            <p contentEditable="true"><FaMapMarkerAlt /> Delhi, India</p>
                            <p contentEditable="true"><FaEnvelope /> rajeshkapoor@email.com</p>
                            <p contentEditable="true"><FaPhoneAlt /> +91-9876543210</p>
                            <p contentEditable="true">
                                <FaLinkedin /> <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                                    LinkedIn Profile
                                </a>
                            </p>
                            <p contentEditable="true">
                                <FaGithub /> <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                                    GitHub Profile
                                </a>
                            </p>
                        </div>
                        <div className="datascientist-4-section">
                            <h3>Education</h3>
                            <p contentEditable="true">Ph.D. in Computer Science (Specialization: Machine Learning) DEF University | Graduation Year</p>
                            <p contentEditable="true">Dissertation: "Ensemble Learning Techniques for Complex Pattern Recognition"</p>
                            <p contentEditable="true">Master of Science in Statistics GHI University | Graduation Year</p>
                        </div>
                        <div className="datascientist-4-section">
                            <h3>Certifications</h3>
                            <p contentEditable="true">Deep Learning Specialization | [University/Platform] | [Year]</p>
                            <p contentEditable="true">Certified Analytics Professional (CAP) | [Certifying Body] | [Year]</p>
                        </div>
                        <div className="datascientist-4-section">
                            <h3>Hobbies and Interests</h3>
                            <p contentEditable="true">Mentorship: Enjoys guiding and mentoring aspiring data scientists.</p>
                            <p contentEditable="true">Yoga and Meditation: Practitioner for mental and physical well-being.</p>
                        </div>
                        <div className="datascientist-4-section">
                            <h3>Publications</h3>
                            <p contentEditable="true">Kapoor, R., & Singh, A. (Year). "Ensemble Learning Techniques for Complex Pattern Recognition". Journal of Machine Learning Research, Volume(Issue), Page Numbers.</p>
                        </div>
                    </div>
                    <div className="datascientist-4-right-column">
                        <div className="datascientist-4-section">
                            <h3>Objective</h3>
                            <p contentEditable="true">Experienced senior data scientist with a track record of leading high-impact data science initiatives. Proven expertise in developing and deploying advanced machine learning models and driving data-driven decision-making. Seeking a senior-level data scientist position to lead and innovate in a dynamic data science environment.</p>
                        </div>
                        <div className="datascientist-4-section">
                            <h3>Professional Experience</h3>
                            <h4 contentEditable="true">Lead Data Scientist | Analytics Innovators Pvt. Ltd. | Delhi, India | [Start Date] - Present</h4>
                            <ul>
                                <li contentEditable="true">Directed a team of data scientists and engineers in developing cutting-edge machine learning models for demand forecasting, resulting in a 30% reduction in inventory costs.</li>
                                <li contentEditable="true">Established best practices for data science processes, including data acquisition, feature engineering, model training, and deployment.</li>
                            </ul>
                            <h4 contentEditable="true">Senior Data Scientist | Data Dynamics Solutions | Mumbai, India | [Start Date] - [End Date]</h4>
                            <ul>
                                <li contentEditable="true">Led the development of a recommendation engine that personalized product offerings, contributing to a 25% increase in conversion rates.</li>
                                <li contentEditable="true">Collaborated with cross-functional teams to design and implement a real-time fraud detection system, reducing fraudulent transactions by 40%.</li>
                            </ul>
                        </div>
                        <div className="datascientist-4-section">
                            <h3>Skills</h3>
                            <ul>
                                <li contentEditable="true">Programming Languages: Python (Pandas, NumPy), R, SQL</li>
                                <li contentEditable="true">Machine Learning Libraries: Scikit-Learn, TensorFlow, Keras, XGBoost, LightGBM</li>
                                <li contentEditable="true">Big Data Tools: Hadoop, Spark</li>
                                <li contentEditable="true">Data Visualization: Tableau, Matplotlib, Seaborn</li>
                                <li contentEditable="true">Statistical Analysis: Hypothesis Testing, Experimental Design, Time Series Analysis</li>
                                <li contentEditable="true">Natural Language Processing (NLP): NLTK, spaCy</li>
                            </ul>
                        </div>
                        <div className="datascientist-4-section">
                            <h3>Professional Memberships</h3>
                            <p contentEditable="true">Senior Member, [Relevant Professional Association]</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='download-section'>
                <button className='downloadpdf-btn' onClick={downloadPDF}>Download PDF</button>
            </div>
        </div>
    );
};

export default DataScientist4;
