import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import dummyimg from '../../images/dummyimg.jpg';
import '../styles/teaching-5.css';

const Teaching5 = () => {
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
        const element = document.getElementById('teaching-5-resume');
        const opt = {
            filename: 'Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };

    return (
        <div className='teaching-5-wrapper'>
            <div className="teaching-5-container" id="teaching-5-resume">
                <div className="teaching-5-header">
                    <div className="teaching-5-title">
                        <h1>Daniel Hadid</h1>
                        <h2>English Teacher</h2>
                        <div className="teaching-5-contact-info">
                            <p><FaPhone /> +123-5678-9012</p>
                            <p><FaEnvelope /> danielhadid@email.com</p>
                            <p><FaMapMarkerAlt /> 4618 Sunrise Road Las Vegas</p>
                        </div>
                    </div>
                    <div className="teaching-5-profile-picture">
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
                </div>
                <div className="teaching-5-content">
                    <div className="teaching-5-column-left">
                        <div className="teaching-5-section teaching-5-experiences">
                            <h3>EXPERIENCES</h3>
                            <p><strong>2011-2012 King School</strong></p>
                            <p>Substitute Teacher</p>
                            <ul>
                                <li>Substituted for English and History classes</li>
                                <li>Assisted after school tutoring for students in need of special attention</li>
                                <li>Taught English and History summer school classes for 3rd and 4th grade students who had fallen behind</li>
                                <li>Maintained high level of student discipline and resolved classroom conflicts</li>
                            </ul>
                            <p><strong>2011-2012 Magnolia School</strong></p>
                            <p>Second Grade Teacher</p>
                            <ul>
                                <li>Co-designed a lesson plan for a class of twenty-one diverse students</li>
                                <li>Provided a variety of hands-on learning experiences that included the use of modern teaching methods</li>
                                <li>Created a classroom environment that was supportive</li>
                            </ul>
                        </div>
                    </div>
                    <div className="teaching-5-column-right">
                        <div className="teaching-5-section teaching-5-education">
                            <h3>EDUCATION</h3>
                            <p className='teaching-5-content-data'><strong>University of Virginia</strong></p>
                            <p className='teaching-5-content-data'>B.A. in English Literature</p>
                            <p className='teaching-5-content-data'>Class of 2011</p>
                            <p className='teaching-5-content-data'><strong>South Florida University</strong></p>
                            <p className='teaching-5-content-data'>M.A. in Education</p>
                            <p className='teaching-5-content-data'>Class of 2016</p>
                        </div>
                        <div className="teaching-5-section teaching-5-skills">
                            <h3>SKILLS</h3>
                            <ul>
                                <li>Student Development</li>
                                <li>Classroom Management</li>
                                <li>Extracurricular Activities</li>
                                <li>Lesson Plan Development</li>
                                <li>First Aid Certified</li>
                            </ul>
                        </div>
                        <div className="teaching-5-section teaching-5-certification">
                            <h3>CERTIFICATION</h3>
                            <p>Postgraduate Certificate in Education (PGCE)</p>
                            <p>Diploma in Education and Training (DET)</p>
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

export default Teaching5;
