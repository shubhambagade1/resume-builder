import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaLinkedin } from 'react-icons/fa';
import '../styles/business-analyst-5.css';
import dummyimg from '../../images/dummyimg.jpg';
import html2pdf from 'html2pdf.js';

const BusinessAnalyst4 = () => {
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
        const element = document.getElementsByClassName('business-analyst-5-container')[0];
        const opt = {
            filename: 'Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };

    return (
        <div className='business-analyst-5-wrapper'>
            <div className="business-analyst-5-container" contentEditable="true">
                <div className='business-analyst-5-content'>
                    <div className='business-analyst-5-left-content'>
                        <div className='business-analyst-5-img-div'>
                            <img className='business-analyst-5-img'
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
                        <div className='business-analyst-5-aboutus'>
                            <h6>About Me</h6>
                            <p>Hello, my name is Ketut Susilo, a seasoned business analyst. I thrive on solving complex challenges through data analysis. Building relationships and collaboration are key to my success. I'm passionate about continuous learning and staying ahead in the field.</p>
                        </div>
                        <div className='business-analyst-5-contact'>
                            <h6>Contact</h6>
                            <p contentEditable="true"><FaPhone /> +123-456-7890</p>
                            <p contentEditable="true"><FaEnvelope /> hello@reallygreatsite.com</p>
                            <p contentEditable="true"><FaGlobe /> www.reallygreatsite.com</p>
                            <p contentEditable="true"><FaLinkedin /> @reallygreatsite</p>
                        </div>
                    </div>
                    <div className='business-analyst-5-right-content'>
                        <div className='business-analyst-5-header'>
                            <h2>Ketut Susilo</h2>
                            <h6>Business Analyst – Business Strategist</h6>
                            <p contentEditable="true"><FaMapMarkerAlt /> 123 Anywhere St., Any City</p>
                        </div>
                        <div className='business-analyst-right-section'>
                            <div className="business-analyst-5-experience">
                                <h5>Experience</h5>
                                <p><strong>Business Analyst</strong><br />Arowval Industries <span>2024 – 2023</span></p>
                                <p>During my one-year tenure at Arowval Industries, I honed my business analysis skills through various projects and cross-departmental collaborations, gaining insights into dynamic market trends.</p>
                                <p><strong>Business Strategist</strong><br />Keithston and Partners <span>2023 – 2022</span></p>
                                <p>As a Business Strategist at Keithston and Partners, my role involved leveraging insights and strategic vision to navigate complex business landscapes and drive sustainable growth.</p>
                            </div>
                            <div className="business-analyst-5-section-education">
                                <h5>Education</h5>
                                <p><strong>Business Science</strong><br />Rimberio Institute <span>2022 – 2018</span></p>
                                <p>During my one-year tenure at Arowval Industries, I honed my business analysis skills through various projects and cross-departmental collaborations, gaining insights into dynamic market trends.</p>
                            </div>
                            <div className="business-analyst-5-section-skills">
                                <h5>Skills</h5>
                                <ul>
                                    <li>Business Analyzing</li>
                                    <li>Public Speaking</li>
                                    <li>Problem Solving</li>
                                </ul>
                            </div>
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

export default BusinessAnalyst4;
