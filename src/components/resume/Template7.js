import React, { useState } from 'react';
import '../styles/template-7.css';
import dummyimg from '../../images/dummyimg.jpg';
import html2pdf from 'html2pdf.js';


const Template7 = () => {
    const [profileImg, setProfileImg] = useState(dummyimg);
    const [skills, setSkills] = useState([
        { name: "Customer Service & Satisfaction", level: 80 },
        { name: "Food Safety & Sanitation", level: 90 },
        { name: "Team Training & Motivation", level: 75 },
        { name: "Reporting & Documentation", level: 85 }
    ]);

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
        const element = document.getElementsByClassName('template-7-resume-container')[0];
        const opt = {
            filename: 'Management-resume-1.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };

    const handleSkillLevelChange = (index, event) => {
        const newSkills = [...skills];
        newSkills[index].level = event.target.value;
        setSkills(newSkills);
    };

    return (
        <div className='template-3-main-wrapper'>
            <div className="template-7-resume-container">
                <header className="template-7-header">
                    <div className="template-7-header-left">
                        <h1 contentEditable>Darcy Hall</h1>
                        <p contentEditable>Restaurant Manager</p>
                    </div>
                    <div className="template-7-header-right">
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
                        <div className="template-7-contact-info">
                            <p contentEditable>4759 Sunnydale Lane</p>
                            <p contentEditable>Plano, Texas, United States, 75071</p>
                            <p contentEditable>email@youremail.com</p>
                            <p contentEditable>123-456-7890</p>
                        </div>
                    </div>
                </header>
                <section className="template-7-section">
                    <h2 className="template-7-section-title">Professional Experience</h2>
                    <div>
                        <h3 className="template-7-job-title" contentEditable>Assistant General Manager</h3>
                        <p className="template-7-company" contentEditable>Lucky Fins Downtown Boise, Boise, ID</p>
                        <p className="template-7-date" contentEditable>January 2020 - Present</p>
                        <ul contentEditable>
                            <li>Introduced training and manager-staff communication protocols that helped raise employee retention by 25% in 2 years</li>
                            <li>Negotiated 10% lower kitchen gear costs with vendors</li>
                            <li>Identified and recovered $15K in miscellaneous losses</li>
                            <li>Launched digital promotions and photo contests that increased social media engagement by 50%</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="template-7-job-title" contentEditable>Dining Room Manager</h3>
                        <p className="template-7-company" contentEditable>Anthony's Restaurants, Boise, ID</p>
                        <p className="template-7-date" contentEditable>March 2016 - December 2019</p>
                        <ul contentEditable>
                            <li>Motivated team to consistently exceed monthly sales goal by more than 10%</li>
                            <li>Decreased variable costs 10% by reducing inventory waste</li>
                            <li>Led restaurant to consistently earn a score of 97%+ from the Central District Health Environmental Health Department</li>
                        </ul>
                    </div>
                </section>
                <section className="template-7-section">
                    <h2 className="template-7-section-title">Education</h2>
                    <div>
                        <h3 className="template-7-job-title" contentEditable>Candidate in Associate of Applied Science – Culinary Arts</h3>
                        <p className="template-7-company" contentEditable>College of Southern Idaho, Boise, ID</p>
                        <p className="template-7-date" contentEditable>April 2024</p>
                        <ul contentEditable>
                            <li>Food Sanitation</li>
                            <li>Human Relations</li>
                            <li>Menu Management</li>
                            <li>The Professional Kitchen I</li>
                        </ul>
                    </div>
                </section>
                <section className="template-7-section">
                    <h2 className="template-7-section-title">Key Skills</h2>
                    <div className="template-7-key-skills">
                        {skills.map((skill, index) => (
                            <div key={index} className="template-7-skill">
                                <p contentEditable>{skill.name}</p>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={skill.level}
                                    onChange={(e) => handleSkillLevelChange(index, e)}
                                />
                                <div className="template-7-progress-bar">
                                    <div
                                        className="template-7-progress"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <div className='download-section'>
                <button className='downloadpdf-btn' onClick={downloadPDF}>Download PDF</button>
            </div>
        </div>
    );
};

export default Template7;
