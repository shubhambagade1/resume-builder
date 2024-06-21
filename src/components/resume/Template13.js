import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/template-13.css';
import html2pdf from 'html2pdf.js';
import dummyimg from '../../images/dummyimg.jpg';

const Template13 = () => {
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
        const element = document.getElementsByClassName('template-13-resume-container')[0];
        const opt = {
            filename: 'Architect-resume-1.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };

    return (
        <div className='template-13-main-wrapper'>
            <div className="template-13-resume-container" contentEditable="true">
                <div className="template-13-left">
                    <div className="template-13-photo">
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
                    <div className="template-13-contact">
                        <h3>Contact</h3>
                        <p><FaPhone /> +53 112234-05</p>
                        <p><FaEnvelope /> janedoesn't.com</p>
                        <p><FaMapMarkerAlt /> Bethany, France</p>
                    </div>
                    <div className="template-13-skills">
                        <h3>Personal Skills</h3>
                        <div className="template-13-skills">
                            <div className="skills__item-template-13">
                                <div className="left">
                                    <div className="skill-name-template13">English</div>
                                </div>
                                <div className="template13-skillcheckbox">
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
                            <div className="skills__item-template-13">
                                <div className="left">
                                    <div className="skill-name-template13">Spanish</div>
                                </div>
                                <div className="template13-skillcheckbox">
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
                    <div className="template-13-hobbies">
                        <h3>Hobbies</h3>
                        <p>Gaming</p>
                        <p>Photography</p>
                        <p>Traveling</p>
                    </div>
                </div>
                <div className="template-13-right">
                    <div className="template-13-header">
                        <h1>Christopher Baltimore</h1>
                        <h2>Architect</h2>
                    </div>
                    <div className="template-13-about">
                        <h3>About Me</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="template-13-education">
                        <h3>Education</h3>
                        <p className='template-13-education-year'>2016-2020</p>
                        <p>BS Fine Arts Major in Advertising</p>
                        <p>Montriad University</p>
                        <p className='template-13-education-year'>2012-2016</p>
                        <p>Junior High School</p>
                        <p>Montriad Learning School</p>
                    </div>
                    <div className="template-13-experience">
                        <h3>Experience</h3>
                        <p className='template-13-experience-current'>Present | Architect</p>
                        <p>Architectural Firm Co.</p>
                        <p className='template-13-experience-current'>2019-2020 | Draftsman</p>
                        <p>Buddy Builds Architecture</p>
                        <p className='template-13-experience-current'>2018-2019 | Junior Draftsman</p>
                        <p>Narnia Labs</p>
                    </div>
                </div>
            </div>
            <div className='download-section'>
                <button className='downloadpdf-btn' onClick={downloadPDF}>Download PDF</button>
            </div>
        </div>
    );
};

export default Template13;
