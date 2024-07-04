import React, { useState } from 'react';
import '../styles/business-analyst-3.css';
import dummyimg from '../../images/dummyimg.jpg';
import html2pdf from 'html2pdf.js';

const BusinessAnalyst3 = () => {
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
        const element = document.getElementsByClassName('business-analyst-3-container')[0];
        const opt = {
            filename: 'Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };

    return (
        <div className="business-analyst-3-wrapper">
            <div className="business-analyst-3-container" contentEditable="true">
                <div className="business-analyst-3-header">
                    <div className='business-analyst-3-image-container'>
                        <img
                            src={profileImg}
                            alt="Profile"
                            className="profile-img"
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
                    <div className="business-analyst-3-header-text">
                        <h1 contentEditable="true">Bailey Dupont</h1>
                        <h2 contentEditable="true">Business Analyst</h2>
                    </div>
                </div>
                <div className="business-analyst-3-contact-info">
                    <p contentEditable="true"><i className="fa fa-envelope"></i> hello@reallygreatsite.com</p>
                    <p contentEditable="true"><i className="fa fa-phone"></i> +123-456-7890</p>
                    <p contentEditable="true"><i className="fa fa-globe"></i> www.reallygreatsite.com</p>
                </div>
                <div className="business-analyst-3-content">
                    <div className="business-analyst-3-left-column">
                        <div className="business-analyst-3-section">
                            <h3 contentEditable="true">About Me</h3>
                            <p contentEditable="true">I am a highly passionate individual who thrives upon seeking new challenges through my career as a Business Analyst. My initial years of working in the business industry push me to go further in discovering more things in it. Of course, I am motivated to join a group of seasoned and experienced Business Analyst professionals in the industry respectively.</p>
                        </div>
                        <div className="business-analyst-3-section">
                            <h3 contentEditable="true">Education</h3>
                            <p contentEditable="true">Shodwe University<br />Sep 2005 - Apr 2007<br />Bachelor of Engineering<br />Major in Computer Science, Minors in Mathematics</p>
                        </div>
                        <div className="business-analyst-3-section">
                            <h3 contentEditable="true">Skills</h3>
                            <ul contentEditable="true">
                                <li>Data Visualization</li>
                                <li>Analytical and Research Skills</li>
                                <li>Modeling: Linear and logistic regressions</li>
                            </ul>
                        </div>
                    </div>
                    <div className="business-analyst-3-right-column">
                        <div className="business-analyst-3-section">
                            <h3 contentEditable="true">Experiences</h3>
                            <h4 contentEditable="true">Business Analyst at Borcelle Woodcraft</h4>
                            <p contentEditable="true">Aug 2007 - Sep 2010</p>
                            <ul contentEditable="true">
                                <li>Improved operations defined from internal data, which reduces working hours year over year</li>
                                <li>Interpreted, extrapolated, and tracked various data of customers to find out customer behaviors along with state-wide retention numbers</li>
                                <li>Presented predictive modeling insights to C-level suite and stakeholders, participating in decisions surrounding policy packages that saved the company in legal costs</li>
                                <li>Worked with 4 analysts to institute a new technique</li>
                            </ul>
                            <h4 contentEditable="true">Business Analyst at Ingoude Company</h4>
                            <p contentEditable="true">Jun 2011 - Aug 2015</p>
                            <ul contentEditable="true">
                                <li>Traveled 2 of 5 days to work with clients, observing business processes, interviewing staff, and documenting practices</li>
                                <li>Initiated research, analyzed business operations, and problem solved operating inefficiencies, saved a combined 800 man-hours a month</li>
                                <li>Worked with clients and stakeholders to draft and document goals, encouraging transparent communication to meet 7% of deadlines</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="download-section">
                <button className="downloadpdf-btn" onClick={downloadPDF}>Download PDF</button>
            </div>
        </div>
    );
};

export default BusinessAnalyst3;
