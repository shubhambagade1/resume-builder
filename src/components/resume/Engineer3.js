import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import html2pdf from 'html2pdf.js';
import dummyimg from '../../images/dummyimg.jpg';
import '../styles/engineer-3.css';

const Engineer3 = () => {
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
        const element = document.getElementsByClassName('engineer-3-container')[0];
        const opt = {
            filename: 'Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };

    return (
        <div className="engineer-3-wrapper">
            <div className="engineer-3-container" id="engineer-3-resume" contentEditable="true">
                <div className="engineer-3-left-column">
                    <div className="engineer-3-profile-picture">
                        <img
                            className="engineer-3-img"
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
                    <h1 className="engineer-3-name">John Doe</h1>
                    <p className="engineer-3-title">Software Engineer</p>
                    <div className="engineer-3-contact-info">
                        <p><FaEnvelope /> johndoe@example.com</p>
                        <p><FaPhone /> +123-456-7890</p>
                        <p><FaMapMarkerAlt /> 1234 Elm Street, Some City, ST 12345</p>
                    </div>
                    <div className="engineer-3-section engineer-3-skills">
                        <h5>SKILLS</h5>
                        <ul>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Python</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                </div>
                <div className="engineer-3-right-column">
                    <div className="engineer-3-section engineer-3-summary">
                        <h5>PROFESSIONAL SUMMARY</h5>
                        <p>Experienced software engineer with a background in developing scalable web applications and working across the full stack. Proficient in modern JavaScript frameworks and libraries.</p>
                    </div>
                    <div className="engineer-3-section engineer-3-experience">
                        <h5>WORK EXPERIENCE</h5>
                        <div className="engineer-3-experience-item">
                            <h3>Senior Software Engineer</h3>
                            <p>ABC Tech, Jan 2020 - Present</p>
                            <ul>
                                <li>Developed and maintained web applications using React and Node.js.</li>
                                <li>Led a team of 5 engineers in the design and implementation of new features.</li>
                                <li>Collaborated with product managers to define project requirements and scope.</li>
                            </ul>
                        </div>
                        <div className="engineer-3-experience-item">
                            <h3>Software Engineer</h3>
                            <p>XYZ Solutions, Jun 2017 - Dec 2019</p>
                            <ul>
                                <li>Worked on backend services using Node.js and Express.</li>
                                <li>Implemented RESTful APIs for various client applications.</li>
                                <li>Performed code reviews and provided mentorship to junior developers.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="engineer-3-section engineer-3-education">
                        <h5>EDUCATION</h5>
                        <p>Bachelor of Science in Computer Science</p>
                        <p>Some University, 2013 - 2017</p>
                    </div>
                </div>
            </div>
            <div className="download-section">
                <button className="downloadpdf-btn" onClick={downloadPDF}>Download PDF</button>
            </div>
        </div>
    );
};

export default Engineer3;
