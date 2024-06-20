import React, { useState } from 'react';
import '../styles/template-9.css';
import html2pdf from 'html2pdf.js';
import dummyimg from '../../images/dummyimg.jpg';

const Template9 = () => {
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
        const element = document.getElementsByClassName('template-9-resume-container')[0];
        const opt = {
            filename: 'Production-resume-1.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };

    return (
        <div className='template-3-main-wrapper'>
            <div className="template-9-resume-container">
                <header className="template-9-header">
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
                    <div className="template-9-header-content">
                        <h1 contentEditable>Liam Markson</h1>
                        <p contentEditable>Product Manager</p>
                    </div>
                    <div className="template-9-contact-info">
                        <p contentEditable>4759 Sunnydale Lane, Plano, Texas, United States, 75071</p>
                        <p contentEditable>123-456-7890</p>
                        <p contentEditable>email@youremail.com</p>
                    </div>
                </header>
                <div className="template-9-main" contentEditable="true">
                    <div className="template-9-left">
                        <section className="template-9-section">
                            <h2 className="template-9-section-title">Professional Experience</h2>
                            <div className="template-9-experience-item">
                                <h3 className="template-9-job-title" contentEditable>Product Manager</h3>
                                <p className="template-9-company" contentEditable>Iota Health Industries, Minneapolis, MN</p>
                                <p className="template-9-date" contentEditable>April 2015 - Present</p>
                                <ul contentEditable>
                                    <li>Visit hospitals and doctor’s offices to interview future customers and identify needs and desired features of products</li>
                                    <li>Lead cross-functional product development teams to create innovative biotech solutions that meet customer requirements</li>
                                    <li>Recommend and implement new pricing policies that lead to increase of customer lifetime value of 18%</li>
                                    <li>Analyze market data to forecast product performance to help make product development decisions</li>
                                </ul>
                            </div>
                            <div className="template-9-experience-item">
                                <h3 className="template-9-job-title" contentEditable>Assistant Product Manager</h3>
                                <p className="template-9-company" contentEditable>Omicron Development, New York, NY</p>
                                <p className="template-9-date" contentEditable>July 2012 - March 2015</p>
                                <ul contentEditable>
                                    <li>Conduct market research and analysis to identify unmet needs</li>
                                    <li>Track customer feedback on product launches and presented reports to senior management on areas for improvement</li>
                                    <li>Help the product manager develop strategic project guidelines, including product specifications, vision, timelines and budgets and communicate this information to members of the cross-functional team</li>
                                </ul>
                            </div>
                        </section>
                        <section className="template-9-section">
                            <h2 className="template-9-section-title">Education</h2>
                            <div className="template-9-education-item">
                                <h3 className="template-9-degree" contentEditable>Bachelor of Science in Business Administration</h3>
                                <p className="template-9-school" contentEditable>University of North Carolina, Kenan-Flagler, Chapel Hill, NC</p>
                                <p className="template-9-date" contentEditable>September 2006 - June 2010</p>
                            </div>
                            <div className="template-9-education-item">
                                <h3 className="template-9-degree" contentEditable>Master in Business Administration</h3>
                                <p className="template-9-school" contentEditable>New York University, Stern School of Business, New York, NY</p>
                                <p className="template-9-date" contentEditable>September 2010 - June 2012</p>
                            </div>
                        </section>
                    </div>
                    <div className="template-9-right">
                        <div className="template-9-section">
                            <h2 className="template-9-section-title-skills">Key Skills</h2>
                            <div className="template-9-skills">
                                <div className="skills__item-template-9">
                                    <div className="left">
                                        <div className="skill-name-template9">Science</div>
                                    </div>
                                    <div className="skillcheckbox">
                                        <input id="js_ck1" type="checkbox" checked readOnly />
                                        <label htmlFor="js_ck1"></label>
                                        <input id="js_ck2" type="checkbox" checked readOnly />
                                        <label htmlFor="js_ck2"></label>
                                        <input id="js_ck3" type="checkbox" readOnly />
                                        <label htmlFor="js_ck3"></label>
                                        <input id="js_ck4" type="checkbox" readOnly />
                                        <label htmlFor="js_ck4"></label>
                                        <input id="js_ck5" type="checkbox" readOnly />
                                        <label htmlFor="js_ck5"></label>
                                    </div>
                                </div>
                                <div className="skills__item-template-9">
                                    <div className="left">
                                        <div className="skill-name-template9">Maths</div>
                                    </div>
                                    <div className="skillcheckbox">
                                        <input id="css_ck1" type="checkbox" checked readOnly />
                                        <label htmlFor="css_ck1"></label>
                                        <input id="css_ck2" type="checkbox" checked readOnly />
                                        <label htmlFor="css_ck2"></label>
                                        <input id="css_ck3" type="checkbox" readOnly />
                                        <label htmlFor="css_ck3"></label>
                                        <input id="css_ck4" type="checkbox" readOnly />
                                        <label htmlFor="css_ck4"></label>
                                        <input id="css_ck5" type="checkbox" readOnly />
                                        <label htmlFor="css_ck5"></label>
                                    </div>
                                </div>
                            </div>
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

export default Template9;
