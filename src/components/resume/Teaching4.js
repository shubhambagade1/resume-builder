import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import { FaEnvelope, FaPhone, FaGlobe } from 'react-icons/fa';
import dummyimg from '../../images/dummyimg.jpg';
import '../styles/teaching-4.css';

const Teaching4 = () => {
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
        const element = document.getElementById('teaching-4-resume');
        const opt = {
            filename: 'Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };

    return (
        <div className='teaching-4-wrapper'>
            <div className="teaching-4-container" id="teaching-4-resume">
                <div className="teaching-4-header">
                    <div className="teaching-4-profile-picture">
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
                    <div className="teaching-4-title">
                        <h1>Helene Paquet</h1>
                        <h2>School Teacher</h2>
                    </div>
                </div>
                <div className='teaching-4-profilesummary'>
                    <div className="teaching-4-content">
                        <div className="teaching-4-section teaching-4-skills">
                            <h3>SKILLS</h3>
                            <ul>
                                <li>Teaching Planning</li>
                                <li>Learning Creativity</li>
                                <li>Classroom Conflict Resolution</li>
                                <li>Individual Approach</li>
                            </ul>
                        </div>
                        <div className="teaching-4-section teaching-4-profile-summary">
                            <h3>PROFILE SUMMARY</h3>
                            <p>
                                I am an English language teacher. I teach students from elementary school to high school.
                                I also have experience working with children with special needs. I like to use interactive materials in my work to make learning interesting.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='teaching-4-mid-section'>
                    <div className="teaching-4-education">
                        <div className='teaching-4-education-heading-div'>
                            <h3 className='teaching-4-education-heading'>EDUCATION</h3>
                        </div>
                        <div className='teaching-4-education-content'>
                            <p>Children Education (2012 - 2017) <br /> University, Any City</p>
                            <p>Senior High School (2017 - 2020) <br /> Any University, Any City</p>
                            <p>Psychology (2020 - 2021) <br /> Any Training Facility</p>
                        </div>
                    </div>
                    <div className=" teaching-4-work-experience">
                        <div className='teaching-4-work-heading-div'>
                            <h3 className='teaching-4-work-heading'>WORK EXPERIENCE</h3>
                        </div>
                        <div className='teaching-4-work-content'>
                            <p>2017 - 2019 <br /> Elementary school teacher.</p>
                            <p>2019 - 2020 <br /> Home teacher of children with special needs</p>
                            <p>2020 - 2022 <br /> High school teacher</p>
                        </div>
                    </div>
                </div>
                <div className="teaching-4-footer">
                    <div className="teaching-4-contact">
                        <h3 className='teaching-4-contact-heading'>CONTACT ME</h3>
                        <p><FaPhone /> +123-456-7890</p>
                        <p><FaEnvelope /> hello@reallygreatsite.com</p>
                        <p><FaGlobe /> www.reallygreatsite.com</p>
                    </div>
                    <div className="teaching-4-references">
                        <h3 className='teaching-4-reference-heading'>REFERENCES</h3>
                        <p>Kyrie Petrakis <br /> Head Manager, Studio Shodwe <br /> +123-456-7890</p>
                    </div>
                </div>
            </div>
            <div className="download-section">
                <button className="downloadpdf-btn" onClick={downloadPDF}>Download PDF</button>
            </div>
        </div>
    );
};

export default Teaching4;
