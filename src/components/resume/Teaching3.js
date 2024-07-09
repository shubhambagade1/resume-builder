import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import html2pdf from 'html2pdf.js';
import dummyimg from '../../images/dummyimg.jpg';
import '../styles/teaching-3.css';

const Teaching3 = () => {

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
        const element = document.getElementsByClassName('sales-5-container')[0];
        const opt = {
            filename: 'Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };

    return (
        <div className='teaching-3-wrapper'>
            <div className="teaching-3-container" id="teaching-3-resume">
                <div className="teaching-3-left-column">
                    <div className="teaching-3-profile-picture">
                        <img
                            className='sales-5-img'
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
                        />                    </div>
                    <h1 className="teaching-3-name">PAT SUMMERS</h1>
                    <div className="teaching-3-contact-info">
                        <p><FaEnvelope /> example@example.com</p>
                        <p><FaPhone /> 1234567890</p>
                        <p><FaMapMarkerAlt /> Freeport, NY 11520</p>
                    </div>
                    <div className="teaching-3-section teaching-3-summary">
                        <h5>SUMMARY OF QUALIFICATIONS</h5>
                        <ul>
                            <li>Familiarity with the Common Core State Standards and other educational frameworks.</li>
                            <li>Knowledge of different teaching methodologies, including project-based learning and differentiated instruction.</li>
                            <li>Ability to work collaboratively with other teachers, staff, and parents to support student learning and success.</li>
                        </ul>
                    </div>
                    <div className="teaching-3-section teaching-3-education">
                        <h5>EDUCATION</h5>
                        <p>Bachelor of Arts: Early Childhood & Elementary Education</p>
                        <p>Hofstra University, Hempstead, NY, May 2022</p>
                    </div>
                </div>
                <div className="teaching-3-right-column">
                    <h2 className="teaching-3-heading">CAREER OBJECTIVE</h2>
                    <p>
                        Enthusiastic student teacher with good leadership and multitasking skills. Familiar with different instructional approaches and technology options such as Smartboards used in lecture classrooms. Looking to obtain a teaching position where I can apply my relevant coursework and passion for education to create a stimulating and supportive learning environment for students.
                    </p>
                    <div className="teaching-3-section teaching-3-skills">
                        <h5>PROFESSIONAL SKILLS</h5>
                        <h3>Group Teaching Abilities</h3>
                        <ul>
                            <li>Developed and implemented lesson plans for various subject areas and grade levels.</li>
                            <li>Created engaging and age-appropriate learning activities for students.</li>
                            <li>Worked one-on-one and in groups with students ages three to eight and different skill levels.</li>
                        </ul>
                        <h3>Teacher Support</h3>
                        <ul>
                            <li>Collaborated with other two teachers and staff to ensure a positive and effective learning environment for all students.</li>
                            <li>Assisted the teacher with the undertaking of the lesson plans for a class of 22 third graders.</li>
                            <li>Helped implement a book buddy program with a fourth-grade class to promote reading for pleasure and fluency practice.</li>
                        </ul>
                        <h3>Solid Communication and Interpersonal Skills</h3>
                        <ul>
                            <li>Communicated regularly with parents to provide progress updates and identify areas for improvement.</li>
                            <li>Participated in parent/teacher conferences and faculty meetings.</li>
                            <li>Provided one-on-one assistance to a student with an IEP.</li>
                        </ul>
                    </div>
                    <div className="teaching-3-section teaching-3-work-history">
                        <h2>WORK HISTORY</h2>
                        <p>May 2022 - Current</p>
                        <p>Leo F. Giblyn Elementary School - Student Teacher, Freeport, NY</p>
                        <p>January 2020 - May 2022</p>
                        <p>We Care Tutoring Services - Tutor, Freeport, NY</p>
                    </div>
                </div>
            </div>
            <div className="download-section">
                <button className="downloadpdf-btn" onClick={downloadPDF}>Download PDF</button>
            </div>
        </div>

    );
};

export default Teaching3;
