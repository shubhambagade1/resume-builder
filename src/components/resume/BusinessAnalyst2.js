import React, { useState } from 'react';
import '../styles/business-analyst-2.css';
import { FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';
import dummyimg from '../../images/dummyimg.jpg';
import html2pdf from 'html2pdf.js';


const BusinessAnalyst2 = () => {
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
        const element = document.getElementsByClassName('business-analyst-2-container')[0];
        const opt = {
            filename: 'Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };
    return (
        <div className='business-analyst-1-wrapper'>
            <div className="business-analyst-2-container" contentEditable="true">
                <div className="business-analyst-2-profile">
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
                    <div className="business-analyst-2-name-title">
                        <h2 contentEditable="true">Adeline Palmerston</h2>
                        <h3 contentEditable="true">Business Analyst</h3>
                    </div>
                </div>
                <div className="business-analyst-2-section">
                    <h3 contentEditable="true">About me</h3>
                    <p contentEditable="true">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                </div>
                <div className="business-analyst-2-content">
                    <div className='business-analyst-2-leftsection'>
                        <div className="business-analyst-2-section">
                            <h3 contentEditable="true">Education</h3>
                            <p contentEditable="true">Timmerman University<br />2012-2016 Bachelor Business</p>
                            <p contentEditable="true">Borcelle University<br />2016-2018 Bachelor Management</p>
                        </div>
                        <div className="business-analyst-2-section">
                            <h3 contentEditable="true">Skills</h3>
                            <ul contentEditable="true">
                                <li>Communication</li>
                                <li>Management</li>
                                <li>Team Work</li>
                                <li>Problem Solving</li>
                                <li>Technical</li>
                            </ul>
                        </div>
                    </div>
                    <div className='business-analyst-2-rightsection'>
                        <div className="business-analyst-2-section">
                            <h3 contentEditable="true">Experience</h3>
                            <p contentEditable="true">Start up Internship<br />2016-2017 Junior Analyst</p>
                            <p contentEditable="true">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <p contentEditable="true">Business Analyst<br />2018-Present Salford & Co.</p>
                            <p contentEditable="true">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>

                        <div className="business-analyst-2-section">
                            <h3 contentEditable="true">Contact</h3>
                            <p contentEditable="true"><FaPhone /> +123-456-7890</p>
                            <p contentEditable="true"><FaEnvelope /> hello@reallygreatsite.com</p>
                            <p contentEditable="true"><FaGlobe /> reallygreatsite.com</p>
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

export default BusinessAnalyst2;
