import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import '../styles/business-analyst-1.css';
import html2pdf from 'html2pdf.js';
import dummyimg from '../../images/dummyimg.jpg';

const BusinessAnalystResume = () => {
    const [profileImg, setProfileImg] = useState(dummyimg);

    const handleProfileImgChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                setProfileImg(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const downloadPDF = () => {
        const element = document.getElementsByClassName('business-analyst-1-container')[0];
        const opt = {
            filename: 'Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };

    return (
        <div className="business-analyst-1-wrapper">
            <div className="business-analyst-1-container" contentEditable="true">
                <div className="business-analyst-1-header">
                    <div className='business-analyst-img-container'>
                        <img className="business-analyst-1-profile-image"
                            src={profileImg}
                            alt="Profile"
                            onClick={() => document.getElementById('profilePhotoInput').click()}
                        />
                        <input
                            type="file"
                            id="profilePhotoInput"
                            accept="image/*"
                            onChange={handleProfileImgChange}
                            style={{ display: 'none' }}
                        />
                    </div>
                    <div className="business-analyst-1-header-text">
                        <h1 contentEditable="true">Aaron Loeb</h1>
                        <h2 contentEditable="true">Business Analyst</h2>
                        <div className="business-analyst-1-contact">
                            <div>
                                <p contentEditable="true"><FaMapMarkerAlt /> 123 Anywhere St., Any City</p>
                                <p contentEditable="true"><FaPhone /> +123-456-7890</p>
                            </div>
                            <div>
                                <p contentEditable="true">
                                    <FaEnvelope /> <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                                        your email
                                    </a>
                                </p>
                                <p contentEditable="true">
                                    <FaLinkedin /> <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                                        LinkedIn Profile
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="business-analyst-1-content">
                    <div className='business-analyst-1-left'>
                        <div className="business-analyst-1-about">
                            <h3 contentEditable="true">About Me</h3>
                            <p contentEditable="true">
                                I am a highly passionate individual who thrives upon seeking new challenges through my career as a Business Analyst.
                                My initial years of working in the business industry push me to go further in discovering more things in it.
                                Of course, I am motivated to join a group of seasoned and experienced Business Analyst professionals in the industry respectively.
                            </p>
                        </div>
                        <div className="business-analyst-1-skills">
                            <h3 contentEditable="true">Skills</h3>
                            <ul contentEditable="true">
                                <li>Data Visualization</li>
                                <li>Analytical and Research Skills</li>
                                <li>Modeling: Linear and logistic regressions</li>
                                <li>Problem Solving</li>
                                <li>Software Development Life Cycle</li>
                                <li>User Acceptance Testing</li>
                                <li>Critical Thinking</li>
                                <li>Work in team or Individual</li>
                                <li>Creative Thinking</li>
                                <li>Brain Storming</li>
                                <li>Knowledge in Information Technology</li>
                                <li>Good in Time Management</li>
                            </ul>
                        </div>
                    </div>

                    <div className='business-analyst-1-right'>
                        <div className="business-analyst-1-experiences">
                            <h3 contentEditable="true">Experiences</h3>
                            <div className="business-analyst-1-job">
                                <h4 contentEditable="true">Business Analyst at Borcelle Woodcraft</h4>
                                <p contentEditable="true">2016 - 2018</p>
                                <ul contentEditable="true">
                                    <li>Improved operations defined from internal data, which reduces working hours year over year</li>
                                    <li>Interpreted, extrapolated, and tracked various data of customers to find out customer behaviors along with state-wide retention numbers</li>
                                    <li>Presented predictive modeling insights to C-level suite and stakeholders, participating in decisions surrounding policy packages that saved the company in legal costs</li>
                                    <li>Worked with 4 analysts to institute a new technique</li>
                                </ul>
                            </div>

                            <div className="business-analyst-1-job">
                                <h4 contentEditable="true">Business Analyst at Ingoude Company</h4>
                                <p contentEditable="true">2013 - 2016</p>
                                <ul contentEditable="true">
                                    <li>Traveled 2 of 5 days to work with clients, observing business processes, interviewing staff, and documenting practices</li>
                                    <li>Initiated research, analyzed business operations, and problem solved operating inefficiencies, saved a combined 800 man-hours a month</li>
                                    <li>Worked with clients and stakeholders to draft and document goals, encouraging transparent communication to meet 7% of deadlines</li>
                                </ul>
                            </div>
                        </div>
                        <div className="business-analyst-1-education">
                            <h3 contentEditable="true">Education</h3>
                            <p contentEditable="true">Shodwe University</p>
                            <p contentEditable="true">Bachelor of Engineering</p>
                            <p contentEditable="true">Major in Computer Science, Minors in Mathematics</p>
                        </div>
                    </div>
                </div>
                <div className="download-section">
                    <button className="downloadpdf-btn" onClick={downloadPDF}>Download PDF</button>
                </div>
            </div>
        </div>
    );
};

export default BusinessAnalystResume;
