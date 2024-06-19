import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/template-1.css';
import html2pdf from 'html2pdf.js';
import dummyimg from '../../images/dummyimg.jpg';

const Template2 = () => {
    const [profileImg, setProfileImg] = useState(dummyimg);
    const [educationEntries, setEducationEntries] = useState([
        { degree: "Master Of Education", year: "2020-22" },
        { degree: "Bachelor Of Arts in Education", year: "2016-20" }
    ]);

    const downloadPDF = () => {
        const element = document.getElementsByClassName('main-content');
        const opt = {
            filename: 'Non technical resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };

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

    const addEducationEntry = () => {
        setEducationEntries([...educationEntries, { degree: "", year: "" }]);
    };

    const handleEducationChange = (index, field, value) => {
        const newEntries = [...educationEntries];
        newEntries[index][field] = value;
        setEducationEntries(newEntries);
    };

    return (
        <>
            <div className='template-3-main-wrapper'>
                <main className="main-content">
                    <section className="left-section">
                        <div className="left-content">
                            <div className="profile-details">
                                <div className="profile-image">
                                    <img id="profileImg" src={profileImg} alt="Profile" onClick={() => document.getElementById('profilePhotoInput').click()} />
                                    <input type="file" id="profilePhotoInput" accept="image/*" onChange={handleProfileImgChange} />
                                </div>
                                <div className="name" contentEditable="true">Your Name</div>
                                <div className="description" contentEditable="true">Software developer</div>
                                <hr style={{ width: '80%', textAlign: 'middle', marginLeft: 0 }} />
                            </div><br />
                            <div className="contact-info" contentEditable="true">
                                <div className="contact-item">
                                    <div className="personal-details">
                                        <div className="email"><FaEnvelope />&nbsp; &nbsp;johndoe@example.com</div><br />
                                        <div className="mobile"><FaPhone /> &nbsp;+1 123-456-7890</div><br />
                                        <div className="location"><FaMapMarkerAlt /> &nbsp;City, State</div>
                                    </div>
                                </div>
                            </div>
                            <div className="skills">
                                <h6 className="right-title" contentEditable="true">SKILLS</h6>
                                <div className="skill-item">
                                    <div className="skill-name" contentEditable="true">
                                        <p>Classroom Management</p>
                                    </div>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-name" contentEditable="true">
                                        <p>Lesson Planning</p>
                                    </div>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-name" contentEditable="true">
                                        <p>Curriculum Development</p>
                                    </div>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-name" contentEditable="true">
                                        <p>Child Psychology</p>
                                    </div>
                                </div>
                            </div>
                            <section className="projects">
                                <h6 className="right-title" contentEditable="true">Projects</h6>
                                <p className="para" contentEditable="true">
                                    <h6>Classroom Reading Program</h6>Implemented a reading program to improve literacy skills among students, resulting in a 20% increase in reading comprehension scores.
                                </p>
                                <p className="para" contentEditable="true">
                                    <h6>STEM Club</h6>Founded and led a STEM club that encouraged students to explore science, technology, engineering, and mathematics through hands-on activities and projects.
                                </p>
                            </section>
                        </div>
                    </section>
                    <section className="right-section">
                        <div className="right-main-content">
                            <section className="about sect">
                                <h2 className="right-title" contentEditable="true">About Me</h2>
                                <ul className="about_me" contentEditable="true">
                                    <li>Passionate and dedicated elementary school teacher with over 5 years of experience in creating a nurturing and stimulating educational environment.</li>
                                    <li>Expert in developing engaging lesson plans that cater to diverse learning styles and abilities.</li>
                                    <li>Committed to fostering a positive classroom culture and helping students achieve their full potential.</li>
                                </ul>
                            </section><br />
                            <section className="education sect">
                                <h2 className="right-title" contentEditable="true">Education</h2>
                                <table contentEditable="true">
                                    <thead>
                                        <tr>
                                            <th>Degree</th>
                                            <th>Year</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {educationEntries.map((entry, index) => (
                                            <tr key={index}>
                                                <td contentEditable="true" onBlur={(e) => handleEducationChange(index, 'degree', e.target.textContent)}>
                                                    {entry.degree}
                                                </td>
                                                <td contentEditable="true" onBlur={(e) => handleEducationChange(index, 'year', e.target.textContent)}>
                                                    {entry.year}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <button className='addrow-btn' onClick={addEducationEntry}>Add Row</button>
                            </section><br />
                            <section className="experience sect">
                                <h2 className="right-title" contentEditable="true">Experience</h2>
                                <p className="para" contentEditable="true">Dedicated elementary school teacher with a proven track record of creating engaging and effective lesson plans, fostering a positive learning environment, and supporting student success. Experienced in classroom management, curriculum development, and integrating technology into lessons.</p>
                            </section>
                        </div>
                    </section>
                </main>
                <div className='download-section'>
                    <button className='downloadpdf-btn' onClick={downloadPDF}>Download PDF</button>
                </div>
            </div>
        </>
    );
};

export default Template2;
