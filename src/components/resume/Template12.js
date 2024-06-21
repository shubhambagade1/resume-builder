import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/template-12.css';
import html2pdf from 'html2pdf.js';
import dummyimg from '../../images/dummyimg.jpg';

const Template12 = () => {
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
        const element = document.getElementsByClassName('template-12-resume-container')[0];
        const opt = {
            filename: 'Design engineer-resume-1.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };

    return (
        <div className='template-3-main-wrapper'>
            <div className="template-12-resume-container" contentEditable="true">
                <div className="template-12-resume-left">
                    <header className="template-12-resume-header">
                        <h1>CARMEN BARROWS</h1>
                        <h2>General Manager</h2>
                    </header>
                    <section className="template-12-profile">
                        <h3>PROFILE</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu posuere arcu. Maecenas pretium maximus sollicitudin. Donec feugiat odio eu nulla finibus fermentum. Nullam efficitur mollis urna vitae vulputate. Cras tempus, eros ac efficitur mollis, erat tellus blandit purus, ac tincidunt nisi velit nec mauris. Duis scelerisque consectetur augue vel convallis. Nullam efficitur mollis urna vitae vulputate cras tempus eros ac efficitur mollis.</p>
                    </section>
                    <section className="template-12-work-experience">
                        <h3>WORK EXPERIENCE</h3>
                        <div className="template-12-job">
                            <div className='template-12-job-head'>
                                <p className="template-12-date-location">2010 - 2014</p>
                                <div>
                                    <h4>ENTER YOUR JOB POSITION</h4>
                                    <p className="template-12-company">Company / Institute name</p>
                                </div>
                            </div>

                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit curabitur eu posuere arcu maecenas pretium maximus sollicitudin donec feugiat odio eu nulla finibus.</li>
                                <li>Crass tempus, eros ac efficitur mollis, erat tellus blandit purus, ac tincidunt nisi velit nec mauris.</li>
                                <li>Nullam efficitur mollis urna vitae vulputate cras tempus eros ac efficitur mollis.</li>
                            </ul>
                        </div>
                        <div className="template-12-job">
                            <div className='template-12-job-head'>
                                <p className="template-12-date-location">2010 - 2014</p>
                                <div>
                                    <h4>ENTER YOUR JOB POSITION</h4>
                                    <p className="template-12-company">Company / Institute name</p>
                                </div>
                            </div>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit curabitur eu posuere arcu maecenas pretium maximus sollicitudin donec feugiat odio eu nulla finibus.</li>
                                <li>Crass tempus, eros ac efficitur mollis, erat tellus blandit purus, ac tincidunt nisi velit nec mauris.</li>
                                <li>Nullam efficitur mollis urna vitae vulputate cras tempus eros ac efficitur mollis.</li>
                            </ul>
                        </div>
                    </section>
                </div>
                <div className='template-12-rightside-divs'>
                    <div className="template-12-resume-right">
                        <section className="template-12-contacts">
                            <div className="template-12-photo">
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
                            <h3>CONTACTS</h3>
                            <p><FaPhone /> +012 3456 789</p>
                            <p><FaEnvelope /> email@example.com</p>
                            <p><FaGlobe /> example.website.com</p>
                            <p><FaMapMarkerAlt /> Your street address here</p>
                        </section>
                        <section className="template-12-education">
                            <h3>EDUCATION</h3>
                            <p>2012</p>
                            <p>ENTER YOUR DEGREE NAME</p>
                            <p className="template-12-institute">University / College</p>
                            <p>2012</p>
                            <p>ENTER YOUR DEGREE NAME</p>
                            <p className="template-12-institute">University / College</p>
                        </section>
                        <section className="template-12-skills">
                            <h3>SKILLS</h3>
                            <ul>
                                <li>skill 1</li>
                                <li>skill 2</li>
                                <li>skill 3</li>
                                <li>skill 4</li>
                                <li>skill 5</li>
                            </ul>
                        </section>
                    </div>

                </div>
            </div>
            <div className='download-section'>
                <button className='downloadpdf-btn' onClick={downloadPDF}>Download PDF</button>
            </div>
        </div>
    );
};

export default Template12;
