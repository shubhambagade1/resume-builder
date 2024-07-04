import React, { useState } from 'react';
import '../styles/business-analyst-4.css';
import dummyimg from '../../images/dummyimg.jpg';
import html2pdf from 'html2pdf.js';

const BusinessAnalyst4 = () => {
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
        const element = document.getElementsByClassName('business-analyst-2-container')[0];
        const opt = {
            filename: 'Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };

    return (
        <div className='business-analyst-4-wrapper'>
            <div className="business-analyst-4-container" contentEditable="true">
                <header className="business-analyst-4-header">
                    <h1>MICHAEL WILLIAMSON</h1>
                    <h2>BUSINESS ANALYST</h2>
                </header>
                <div className='business-analyst-4-content'>
                    <div className='business-analyst-4-left-content'>
                        <section className="business-analyst-4-contacts">
                            <h3>CONTACTS</h3>
                            <p><strong>PHONE:</strong> +123 4567 8953</p>
                            <p><strong>EMAIL:</strong> yourmail@domain.com</p>
                            <p><strong>ADDRESS:</strong> Your Address Name Here</p>
                        </section>
                        <section className="business-analyst-4-education">
                            <h3>EDUCATION</h3>
                            <p>2015</p>
                            <p><strong>ENTER YOUR DEGREE</strong></p>
                            <p>University / College</p>
                            <p>2015</p>
                            <p><strong>ENTER YOUR DEGREE</strong></p>
                            <p>University / College</p>
                            <p>2015</p>
                            <p><strong>ENTER YOUR DEGREE</strong></p>
                            <p>University / College</p>
                        </section>
                        <section className="business-analyst-4-skills">
                            <h3>SKILLS</h3>
                            <ul>
                                <li>ILLUSTRATOR</li>
                                <li>PHOTOSHOP</li>
                                <li>DREAMWEAVER</li>
                                <li>INDESIGN</li>
                                <li>AFTER EFFECTS</li>
                                <li>FLASH BUILDER</li>
                                <li>FIREWORKS</li>
                            </ul>
                        </section>
                    </div>
                    <div className='business-analyst-4-right-content'>
                        <section className="business-analyst-4-summary">
                            <h3>PROFILE SUMMARY</h3>
                            <div className='business-analyst-summry-content'>
                                <img className='business-analyst-4-img'
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
                                <p>
                                    Lorem ipsum dolor congue ornare justo, et vestibulum tellus. Cras molestie vestibulum ipsum. Donec eu lobortis erat. Ut vel tellus pharetra augue quis sollicitudin neque.
                                </p>
                            </div>
                        </section>
                        <section className="business-analyst-4-work-experience">
                            <h3>WORK EXPERIENCE</h3>
                            <div>
                                <p>2012 - 2016</p>
                                <p><strong>ENTER YOUR JOB POSITION HERE</strong></p>
                                <p>Company Name - address here</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div>
                                <p>2012 - 2016</p>
                                <p><strong>ENTER YOUR JOB POSITION HERE</strong></p>
                                <p>Company Name - address here</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div>
                                <p>2012 - 2016</p>
                                <p><strong>ENTER YOUR JOB POSITION HERE</strong></p>
                                <p>Company Name - address here</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div className="download-section">
                <button className="downloadpdf-btn" onClick={downloadPDF}>Download PDF</button>
            </div>
        </div>
    );
};

export default BusinessAnalyst4;
