import React, { useState } from 'react';
import '../styles/template-5.css';
import dummyimg from '../../images/dummyimg.jpg';
import html2pdf from 'html2pdf.js';


const Resume = () => {
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
        const element = document.getElementsByClassName('main-content-template-4')[0];
        const opt = {
            filename: 'Account-resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };

    return (
        <div className='template-3-main-wrapper'>
            <div className="main-content-template-4">
                <header>
                    <div className="header-left">
                        <div className="profile-image">
                            <img id="profileImg" src={profileImg} alt="Profile" onClick={() => document.getElementById('profilePhotoInput').click()} />
                            <input type="file" id="profilePhotoInput" accept="image/*" onChange={handleProfileImgChange} style={{ display: 'none' }} />
                        </div>
                        <h2 contentEditable>Your Name</h2>
                        <p contentEditable>Job Title</p>
                    </div>
                    <div className="header-right">
                        <p contentEditable>e: joe@bloggs.com</p>
                        <p contentEditable>w: www.bloggs.com</p>
                        <p contentEditable>m: 01234567890</p>
                    </div>
                </header>
                <section className="personal-profile">
                    <h3>Personal Profile</h3>
                    <p contentEditable>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor metus, interdum at scelerisque in, porta at lacus. Maecenas dapibus luctus cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
                </section>
                <section className="work-experience">
                    <h3>Work Experience</h3>
                    <div className="job">
                        <h4 contentEditable>Job Title at Company</h4>
                        <p className="date" contentEditable>April 2011 - Present</p>
                        <p contentEditable>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
                    </div>
                    <div className="job">
                        <h4 contentEditable>Job Title at Company</h4>
                        <p className="date" contentEditable>January 2007 - March 2011</p>
                        <p contentEditable>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
                    </div>
                    <div className="job">
                        <h4 contentEditable>Job Title at Company</h4>
                        <p className="date" contentEditable>October 2004 - December 2006</p>
                        <p contentEditable>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
                    </div>
                </section>
                <section className="key-skills">
                    <h3>Key Skills</h3>
                    <ul>
                        <li contentEditable>A Key Skill</li>
                        <li contentEditable>A Key Skill</li>
                        <li contentEditable>A Key Skill</li>
                        <li contentEditable>A Key Skill</li>
                    </ul>
                </section>
                <section className="education">
                    <h3>Education</h3>
                    <div className="education-item">
                        <h4 contentEditable>College/University</h4>
                        <p contentEditable>Qualification</p>
                        <p contentEditable>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim.</p>
                    </div>
                    <div className="education-item">
                        <h4 contentEditable>College/University</h4>
                        <p contentEditable>Qualification</p>
                        <p contentEditable>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim.</p>
                    </div>
                </section>
            </div>
            <div className='download-section'>
                <button className='downloadpdf-btn' onClick={downloadPDF}>Download PDF</button>
            </div>
        </div>
    );
};

export default Resume;
