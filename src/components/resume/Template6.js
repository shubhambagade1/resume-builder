import React, { useState } from 'react';
import '../styles/template-6.css';
import dummyimg from '../../images/dummyimg.jpg';
import html2pdf from 'html2pdf.js';

const Template6 = () => {
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
        const element = document.getElementsByClassName('template-6-resume-container')[0];
        const opt = {
            filename: 'CA-resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };

    return (
        <div className='template-3-main-wrapper'>
            <div className="template-6-resume-container">
                <div contentEditable="true" className="template-6-left-column">
                    <div className="template-6-profile-image" onClick={() => document.getElementById('profilePhotoInput').click()}>
                        <img src={profileImg} alt="Profile" />
                        <input type="file" id="profilePhotoInput" accept="image/*" onChange={handleProfileImgChange} style={{ display: 'none' }} />
                    </div>
                    <h2 contentEditable className="template-6-h2">Your Name</h2>
                    <p className="template-6-job-title" contentEditable>ELEMENTARY TEACHER</p>
                    <div className="template-6-section">
                        <h3>INTRODUCTION</h3>
                        <p contentEditable>Hi there! I'm Chun Hei and I love teaching all kinds of children. I love getting to know my students and nurturing them to their fullest potential.</p>
                    </div>
                    <div className="template-6-section">
                        <h3>SKILLS</h3>
                        <ul contentEditable>
                            <li>English Literature</li>
                            <li>Grammar and Vocabulary</li>
                            <li>Student Development</li>
                            <li>Classroom Management</li>
                            <li>Lesson Plan Development</li>
                            <li>Trained for First Aid</li>
                        </ul>
                    </div>
                    <div className="template-6-section">
                        <h3>CONTACT</h3>
                        <p contentEditable>123-456-7890</p>
                        <p contentEditable>hello@reallygreatsite.com</p>
                        <p contentEditable>www.reallygreatsite.com</p>
                        <p contentEditable>123 Anywhere St, Any City, State, Country 12345</p>
                    </div>
                    <div className="template-6-section">
                        <h3>MY INTERESTS</h3>
                        <ul contentEditable>
                            <li>Reading and Writing Poetry</li>
                            <li>Mountain Climbing</li>
                            <li>Skiing and Snowboarding</li>
                            <li>Wall Climbing</li>
                            <li>Jazz and Indie Music</li>
                            <li>Painting and Sketching</li>
                        </ul>
                    </div>
                </div>
                <div contentEditable="true" className="template-6-right-column">
                    <div className="template-6-section">
                        <h3>CAREER PROGRESSION</h3>
                        <div>
                            <h4 contentEditable>ELEMENTARY TEACHER</h4>
                            <p contentEditable>Sunny Rings Elementary School, 2012-Present</p>
                            <ul contentEditable>
                                <li>Co-designed lesson plans for various classes</li>
                                <li>Taught classes using modern teaching methods</li>
                                <li>Fostered a supportive and encouraging classroom environment</li>
                            </ul>
                        </div>
                        <div>
                            <h4 contentEditable>SUBSTITUTE TEACHER</h4>
                            <p contentEditable>Gresdale Elementary School, 2011-2012</p>
                            <ul contentEditable>
                                <li>Substituted for English and Art classes</li>
                                <li>Provided after-school tutoring for students</li>
                                <li>Taught English summer school classes for elementary students</li>
                            </ul>
                        </div>
                    </div>
                    <div className="template-6-section">
                        <h3>ACADEMIC BACKGROUND</h3>
                        <div>
                            <h4 contentEditable>OULCASTER UNIVERSITY</h4>
                            <p contentEditable>MA in Education & Development (2010)</p>
                            <ul contentEditable>
                                <li>Graduated with First Honors</li>
                                <li>Published a paper entitled Education from a Behavioral Standpoint</li>
                                <li>Successfully organized a state-funded teaching program</li>
                            </ul>
                        </div>
                        <div>
                            <h4 contentEditable>KIRMERE STATE COLLEGE</h4>
                            <p contentEditable>B.A. in English Literature (2007)</p>
                            <ul contentEditable>
                                <li>Graduated with 1st Honors</li>
                                <li>Awarded with Academic Excellence in English</li>
                                <li>Member of the Kirmere Youth Education Charity</li>
                                <li>Member of the Kirmere Book Club</li>
                            </ul>
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

export default Template6;
