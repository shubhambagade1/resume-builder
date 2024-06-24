import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/template-15.css';
import html2pdf from 'html2pdf.js';
import dummyimg from '../../images/dummyimg.jpg';

const Template15 = () => {
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
        const element = document.getElementsByClassName('template-15-resume-container')[0];
        const opt = {
            filename: 'SAP-consultant-resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };

    return (
        <div className='template-15-main-wrapper'>
            <div className="template-15-resume-container" contentEditable="true">
                <div className="template-15-header">
                    <div className="template-15-photo">
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
                    <div className='template-15-header-text'>
                        <h1>Audre Swift</h1>
                        <h2>SAP Consultant</h2>
                    </div>
                </div>
                <div className='template-15-content-div'>
                    <div className="template-15-left">
                        <div className="template-15-contact">
                            <h3>Contact Details</h3>
                            <p><FaEnvelope /> audreswift@gmail.com</p>
                            <p><FaPhone /> (721) 227 0160</p>
                            <p><FaMapMarkerAlt /> Collinsland, 87032-2878, Mississippi</p>
                        </div>
                        <div className="template-15-education">
                            <h3>Education</h3>
                            <p>Master of Science in Business Analytics</p>
                            <p>University of California, Berkeley</p>
                            <p>2017 - 2021</p>
                        </div>
                        <div className="template-15-skills">
                            <h3>Skills</h3>
                            <p>SAP Configuration - Expert</p>
                            <p>Business Analysis - Expert</p>
                            <p>Project Management - Expert</p>
                            <p>ABAP Programming - Expert</p>
                            <p>Data Migration - Expert</p>
                            <p>System Integration - Expert</p>
                        </div>
                    </div>
                    <div className="template-15-right">
                        <div className="template-15-summary">
                            <h3>Summary</h3>
                            <p>SAP Consultant with 5+ years of experience in developing, managing, and optimizing SAP solutions. Skilled in developing and deploying innovative solutions to drive business growth.</p>
                        </div>
                        <div className="template-15-experience">
                            <h3>Work Experience</h3>
                            <div className="template-15-job">
                                <h4>SAP Consultant, SAP Consulting Group</h4>
                                <p>March 2023 - Present</p>
                                <ul>
                                    <li>Provided SAP consulting services to multiple clients, helping to identify and address SAP system issues and process improvements.</li>
                                    <li>Developed custom reports and interfaces between SAP and other systems to assist with data integration.</li>
                                    <li>Led the design, development and implementation of complex SAP solutions to meet business objectives.</li>
                                </ul>
                            </div>
                            <div className="template-15-job">
                                <h4>SAP Consultant, SAP Consulting Group</h4>
                                <p>May 2021 - February 2023</p>
                                <ul>
                                    <li>Collaborated with stakeholders to understand functional and technical requirements for SAP projects.</li>
                                    <li>Ensured compliance with SAP standards, best practices, and change management policies.</li>
                                    <li>Conducted system testing and user acceptance testing of SAP solutions.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="template-15-references">
                            <h3>References</h3>
                            <p>References available upon request</p>
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

export default Template15;
