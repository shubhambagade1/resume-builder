import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import dummyimg from '../../images/dummyimg.jpg';
import '../styles/accountant-3.css';

const Accountant3 = () => {
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
        const element = document.getElementById('accountant-3-resume');
        const opt = {
            filename: 'Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };

    return (
        <div className='accountant-3-wrapper'>
            <div className="accountant-3-container" id="accountant-3-resume">
                <div className="accountant-3-header">
                    <div className="accountant-3-profile-picture">
                        <img
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
                    <div className="accountant-3-title">
                        <h1>Harper Russo</h1>
                        <h2>Certified Public Accountant</h2>
                        <div className="accountant-3-contact-info">
                            <p><FaPhone /> +123-456-7890</p>
                            <p><FaEnvelope /> hello@reallygreatsite.com</p>
                            <p><FaGlobe /> www.reallygreatsite.com</p>
                            <p><FaMapMarkerAlt /> 123 Anywhere St., Any City</p>
                        </div>
                    </div>
                </div>
                <div className="accountant-3-content">
                    <div className="accountant-3-left-column">
                        <div className="accountant-3-section accountant-3-skills">
                            <h3>SKILLS</h3>
                            <ul>
                                <li>Bookkeeping</li>
                                <li>Tax Filing</li>
                                <li>Data Entry</li>
                                <li>Data Analysis</li>
                                <li>Cost Reduction Management</li>
                                <li>Public Accounting</li>
                                <li>Business Budgeting</li>
                                <li>Business Assessments</li>
                            </ul>
                        </div>
                        <div className="accountant-3-section accountant-3-languages">
                            <h3>LANGUAGES</h3>
                            <ul>
                                <li>English</li>
                                <li>Filipino</li>
                                <li>Spanish</li>
                                <li>French</li>
                                <li>Hindi</li>
                            </ul>
                        </div>
                    </div>
                    <div className="accountant-3-right-column">
                        <div className="accountant-3-section accountant-3-professional-experience">
                            <h3>PROFESSIONAL EXPERIENCE</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="accountant-3-section accountant-3-work-experience">
                            <h3>WORK EXPERIENCE</h3>
                            <div className="accountant-3-experience-item">
                                <h4>Keithston & Partners | Senior Accountant</h4>
                                <p>June 2029 - Present</p>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                </ul>
                            </div>
                            <div className="accountant-3-experience-item">
                                <h4>Timmerman Industries | Junior Accountant</h4>
                                <p>February 2028 - February 2029</p>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                </ul>
                            </div>
                            <div className="accountant-3-experience-item">
                                <h4>Ingoode Company | Junior Accountant</h4>
                                <p>January 2027 - January 2028</p>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                </ul>
                            </div>
                        </div>
                        <div className="accountant-3-section accountant-3-education">
                            <h3>EDUCATION</h3>
                            <h4>Really Great University, 2023-2027</h4>
                            <p>Bachelor of Science in Accountancy</p>
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

export default Accountant3;
