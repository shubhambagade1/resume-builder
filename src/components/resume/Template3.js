import React, { useState } from 'react';
import '../styles/template-3.css';
import dummyimg from '../../images/dummyimg.jpg';
import html2pdf from 'html2pdf.js';

const Template3 = () => {
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
        const element = document.getElementsByClassName('template-3-resume-container')[0];
        const opt = {
            filename: 'Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };

    return (
        <div className="template-3-main-wrapper">
            <div className="template-3-resume-container">
                <div className="template-3-left-column">
                    <div className="template-3-profile-image" onClick={() => document.getElementById('profilePhotoInput').click()}>
                        <img src={profileImg} alt="Profile" />
                        <input type="file" id="profilePhotoInput" accept="image/*" onChange={handleProfileImgChange} style={{ display: 'none' }} />
                    </div>
                    <div className="template-3-section">
                        <h3>Contact</h3>
                        <p contentEditable="true">+1 212 06 06 060</p>
                        <p contentEditable="true">name@email.com</p>
                        <p contentEditable="true">LA, California</p>
                    </div>
                    <div className="template-3-section">
                        <h3>Career Objective</h3>
                        <p contentEditable="true">Passionate and enthusiastic 3rd year student with excellent interpersonal skills and a high interest in foreign languages. Looking for a student job as a hostess in a hotel or a catering company.</p>
                    </div>
                    <div className="template-3-section">
                        <h3>Languages</h3>
                        <p contentEditable="true">English</p>
                        <p contentEditable="true">French</p>
                        <p contentEditable="true">Italian</p>
                    </div>
                    <div className="template-3-section">
                        <h3>Skills</h3>
                        <ul>
                            <li contentEditable="true">Team work</li>
                            <li contentEditable="true">Creativity</li>
                            <li contentEditable="true">Open-mindedness</li>
                            <li contentEditable="true">Punctuality</li>
                            <li contentEditable="true">Photoshop</li>
                            <li contentEditable="true">Video</li>
                        </ul>
                    </div>
                    <div className="template-3-section">
                        <h3>Interests</h3>
                        <ul>
                            <li contentEditable="true">Interest 1</li>
                            <li contentEditable="true">Interest 2</li>
                            <li contentEditable="true">Interest 3</li>
                        </ul>
                    </div>
                </div>
                <div className="template-3-right-column">
                    <h2 contentEditable="true">Nancy Michaels</h2>
                    <p className="template-3-job-title" contentEditable="true">Internship / Student Job</p>
                    <div className="template-3-section">
                        <h3 className='template-3-right-column-heading'>Education</h3>
                        <h4 contentEditable="true">Hospitality & Tourism, B.S.</h4>
                        <p contentEditable="true">California State University | 20XX - 20XX</p>
                        <ul>
                            <li contentEditable="true">F&B management</li>
                            <li contentEditable="true">Travel and tourism</li>
                            <li contentEditable="true">Revenue management</li>
                            <li contentEditable="true">Law and ethics</li>
                        </ul>
                        <h4 contentEditable="true">High School Diploma</h4>
                        <p contentEditable="true">Los Angeles High School | 20XX</p>
                        <ul>
                            <li contentEditable="true">Graduated with honors</li>
                            <li contentEditable="true">Class valedictorian</li>
                            <li contentEditable="true">National debate team</li>
                            <li contentEditable="true">Captain of basketball team</li>
                        </ul>
                    </div>
                    <div className="template-3-section">
                        <h3 className='template-3-right-column-heading'>Professional Experience</h3>
                        <h4 contentEditable="true">Catering Services</h4>
                        <p contentEditable="true">Cater2U, LA | July 20XX</p>
                        <ul>
                            <li contentEditable="true">Taking inventory</li>
                            <li contentEditable="true">Assisting in kitchen duties</li>
                            <li contentEditable="true">Serving event attendees</li>
                        </ul>
                        <h4 contentEditable="true">Fry Cook</h4>
                        <p contentEditable="true">Popeye's | July 20XX</p>
                        <ul>
                            <li contentEditable="true">Prepared and executed dishes</li>
                            <li contentEditable="true">Kept an organized workstation</li>
                        </ul>
                    </div>
                    <div className="template-3-section">
                        <h3 className='template-3-right-column-heading'>Volunteer</h3>
                        <h4 contentEditable="true">Soup Kitchen</h4>
                        <p contentEditable="true">Leeza's Care Connection | December 20XX</p>
                        <ul>
                            <li contentEditable="true">Prepared food for Alzheimer patients</li>
                            <li contentEditable="true">Food distribution</li>
                            <li contentEditable="true">Provided emotional support when needed</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='download-section'>
                <button className='downloadpdf-btn' onClick={downloadPDF}>Download PDF</button>
            </div>
        </div>
    );
};

export default Template3;
