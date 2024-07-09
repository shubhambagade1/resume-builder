import React, { useState } from 'react';
import '../styles/template-14.css';
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
        const element = document.getElementsByClassName('template-14-resume-container')[0];
        const opt = {
            filename: 'Design engineer-resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };

    return (
        <div className='template-14-main-wrapper'>
            <div className='template-14-resume-container' contentEditable="true">
                <div className="template-14-left-column">
                    <header className="template-14-header">
                        <div>
                            <h1>Andrew Michael</h1>
                            <h2>DESIGN ENGINEER</h2>
                        </div>
                        <div className="template-14-avatar">
                            <img src={profileImg} alt="Profile" onClick={() => document.getElementById('profilePhotoInput').click()} />
                            <input type="file" id="profilePhotoInput" accept="image/*" onChange={handleProfileImgChange} style={{ display: 'none' }} />
                        </div>
                    </header>
                    <section className="template-14-section">
                        <h3 className="template-14-section-title">SUMMARY</h3>
                        <p>Design engineer with 7+ years experience in sump components design for commercial/military jet engines and gas turbines...</p>
                    </section>
                    <section className="template-14-section">
                        <h3 className="template-14-section-title">EXPERIENCE</h3>
                        <div>
                            <h6>Lead Design Engineer</h6>
                            <p className="template-14-date">Sep 2018 - Present</p>
                            <p>Boeing Aviation</p>
                            <ul>
                                <li>Design and hardware ownership of sump components in New Product Introduction LM9000 Gas Turbine</li>
                                <li>Participation in creating sump layout on the conceptual phase of the project</li>
                                <li>Cooperation with multinational and cross-functional teams (Systems/Engineering/Supply Chain)</li>
                                <li>Coordination project/design tasks across the team and budget planning</li>
                                <li>Preparing and leading design reviews including presenting design progress</li>
                                <li>Design sump components considering technical requirement and producibility</li>
                                <li>Performing Structural and life/fatigue/vibration analysis using Ansys Workbench</li>
                                <li>Cooperation with Product Definition Engineers in creating necessary design documentation (drawings, assembly procedures)</li>
                                <li>Cooperation with Supply Chain and Manufacturing to manufacture designed components</li>
                                <li>Preparing instrumentation plan for the purpose of design validation after engine test</li>
                                <li>On-site assembly support and test support</li>
                                <li>Participating in TOPS8D investigation resolving issues identified during engine tests</li>
                            </ul>
                        </div>
                        <div>
                            <h6>Design Engineer</h6>
                            <p className="template-14-date">Apr 2016 - Sep 2018</p>
                            <p>Boeing Aviation</p>
                            <ul>
                                <li>Participation in New Product Introduction projects (LM2500+G4, LM6000 PF+) focused on performance improvement of existing engines</li>
                                <li>Bearing compartment (sump) components evaluation in terms of operation in different operating conditions driven by performance</li>
                                <li>Performing FEM analysis in terms of fatigue, life, vibratory response, stiffness</li>
                                <li>Life assessment</li>
                            </ul>
                        </div>
                    </section>
                </div>
                <div className="template-14-right-column">
                    <section className="template-14-contact template-14-section">
                        <h3 className="template-14-section-title">CONTACT</h3>
                        <p>info@resumekraft.com</p>
                        <p>202-555-0120</p>
                        <p>Chicago, Illinois, US</p>
                        <p>linkedin.com/resumekraft</p>
                    </section>
                    <section className="template-14-professional-skills template-14-section">
                        <h3 className="template-14-section-title">PROFESSIONAL SKILLS</h3>
                        <ul>
                            <li>Mechanical Design</li>
                            <li>Project management</li>
                            <li>MS Office</li>
                            <li>3D modeling (NX; Solid Works, Inventor)</li>
                            <li>FEM analysis</li>
                            <li>GD&T</li>
                        </ul>
                    </section>
                    <section className="template-14-languages template-14-section">
                        <h3 className="template-14-section-title">LANGUAGES</h3>
                        <p>English</p>
                        <p>French</p>
                        <p>Arabic</p>
                        <p>German</p>
                    </section>
                    <section className="template-14-hobbies template-14-section">
                        <h3 className="template-14-section-title">HOBBIES</h3>
                        <p>Guitar and drums playing</p>
                        <p>Mountain bikes</p>
                        <p>Classic cars</p>
                        <p>Home engineering</p>
                        <p>Travelling</p>
                    </section>
                    <section className="template-14-personal-skills template-14-section">
                        <h3 className="template-14-section-title">PERSONAL SKILLS</h3>
                        <p>Excellent Communication</p>
                        <p>Clear thinker</p>
                        <p>Teamwork</p>
                        <p>Task management</p>
                        <p>"Out of the box" problem solving approach</p>
                    </section>
                </div>
            </div>
            <div className='download-section'>
                <button className='downloadpdf-btn' onClick={downloadPDF}>Download PDF</button>
            </div>
        </div>
    );
};

export default Resume;
