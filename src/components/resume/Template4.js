import React from 'react';
import html2pdf from 'html2pdf.js';
import '../styles/template-4.css';

const Resume = () => {

    const downloadPDF = () => {
        const element = document.getElementsByClassName('main-content-template-4')[0];
        const opt = {
            filename: 'teaching resume-2.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };

    return (
        <div className='template-3-main-wrapper'>
            <div className="main-content-template-4">
                <div className="header">
                    <div className="full-name">
                        <span className="first-name" contentEditable>Your</span>
                        <span className="last-name" contentEditable>Name</span>
                    </div>
                    <div className="contact-info">
                        <span className="email">Email: </span>
                        <span className="email-val" contentEditable>your.id@gmail.com</span>
                        <span className="separator"></span>
                        <span className="phone">Phone: </span>
                        <span className="phone-val" contentEditable>111-222-3333</span>
                    </div>
                    <div className="about" contentEditable>
                        <span className="position">General science teacher</span>
                        <span className="desc">
                            I am general science teacher with more than 3 years of experience In Maths, science and English. I'm motivated, result-focused, and seeking a successful team-oriented company with opportunities to grow.
                        </span>
                    </div>
                </div>

                <div className="details">
                    <div className="section">
                        <div className="section__title">Experience</div>
                        <div className="section__list">
                            <div className="section__list-item">
                                <div className="left" contentEditable>
                                    <div className="name">Job Post</div>
                                    <div className="desc">Did this and that</div>
                                </div>
                                <div className="right" contentEditable>
                                    <div className="name">KlowdBox</div>
                                    <div className="addr">San Fr, CA</div>
                                    <div className="duration">Jan 2011 - Feb 2015</div>
                                </div>
                            </div>
                            <div className="section__list-item">
                                <div className="left" contentEditable>
                                    <div className="name">Job Post</div>
                                    <div className="desc">Did this and that</div>
                                </div>
                                <div className="right" contentEditable>
                                    <div className="name">Akount</div>
                                    <div className="addr">San Monica, CA</div>
                                    <div className="duration">Jan 2011 - Feb 2015</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <div className="section__title">Education</div>
                        <div className="section__list">
                            <div className="section__list-item">
                                <div className="left" contentEditable>
                                    <div className="name">Name of institute</div>
                                    <div className="desc">Did this and that</div>
                                </div>
                                <div className="right" contentEditable>
                                    <div className="name">academic Year</div>
                                    <div className="addr">San Fr, CA</div>
                                    <div className="duration">Jan 2011 - Feb 2015</div>
                                </div>
                            </div>
                            <div className="section__list-item">
                                <div className="left" contentEditable>
                                    <div className="name">Name of institute</div>
                                    <div className="desc">Did this and that</div>
                                </div>
                                <div className="right" contentEditable>
                                    <div className="name">academic Year</div>
                                    <div className="addr">San Monica, CA</div>
                                    <div className="duration">Jan 2011 - Feb 2015</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <div className="section__title">Projects</div>
                        <div className="section__list">
                            <div className="section__list-item" contentEditable>
                                <div className="name">DSP Project 1</div>
                                <div className="text">Description of Project 1.</div>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <div className="section__title">Skills</div>
                        <div className="skills">
                            <div className="skills__item">
                                <div className="left">
                                    <div className="name">Science</div>
                                </div>
                                <div className="right">
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
                            <div className="skills__item">
                                <div className="left">
                                    <div className="name">Maths</div>
                                </div>
                                <div className="right">
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

                    <div className="section">
                        <div className="section__title">Interests</div>
                        <div className="section__list" contentEditable>
                            <div className="section__list-item">Football, programming.</div>
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

export default Resume;
