import React, { useState } from 'react';
import '../styles/sales-4.css';
import dummyimg from '../../images/dummyimg.jpg';
import html2pdf from 'html2pdf.js';

const Sales4 = () => {
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
        const element = document.getElementsByClassName('sales-4-container')[0];
        const opt = {
            filename: 'Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };

    return (
        <div className='sales-4-wrapper'>
            <div className="sales-4-container" contentEditable="true">
                <header className="sales-4-header">
                    <div className="sales-4-header-left">
                        <img
                            className='sales-4-img'
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
                    <div className="sales-4-header-right">
                        <h1>OLIVIA WILSON</h1>
                        <h2>SALES REPRESENTATIVE</h2>
                    </div>
                </header>
                <div className='sales-4-content'>
                    <div className='sales-4-left-content'>
                        <section className="sales-4-contact">
                            <h3>CONTACT</h3>
                            <p><strong>Email:</strong> hello@reallygreatsite.com</p>
                            <p><strong>Phone:</strong> +123-456-7890</p>
                            <p><strong>Address:</strong> 123 Anywhere St., Any City</p>
                            <p><strong>Website:</strong> reallygreatsite.com</p>
                        </section>
                        <section className="sales-4-skills">
                            <h3>SKILLS</h3>
                            <ul>
                                <li>Fast-moving Consumer Goods (FMCG) Sales</li>
                                <li>Packaged Consumer Goods Sales</li>
                                <li>Corporate sales account management</li>
                                <li>Experience in retail and manufacturing sales</li>
                            </ul>
                        </section>
                        <section className="sales-4-reference">
                            <h3>REFERENCE</h3>
                            <p>Aaron Loeb</p>
                            <p>CFO, Timmerman Industries</p>
                            <p>+123-456-7890</p>
                            <p>hello@reallygreatsite.com</p>
                        </section>
                    </div>
                    <div className='sales-4-right-content'>
                        <section className="sales-4-summary">
                            <h3>SUMMARY</h3>
                            <p>
                                I am a sales representative who specializes in consumer goods sales. I have gathered numerous contacts over the years and strive to meet client needs.
                            </p>
                        </section>
                        <section className="sales-4-experience">
                            <h3>RELEVANT EXPERIENCE</h3>
                            <div>
                                <p><strong>Consumer Goods Seller</strong></p>
                                <p>Timmerman Industries | Aug 2018 - present</p>
                                <ul>
                                    <li>Offer consumer goods packages to corporate and clients</li>
                                    <li>Meet with clients every quarter to update or renew services</li>
                                </ul>
                            </div>
                            <div>
                                <p><strong>FMCG Sales Agent</strong></p>
                                <p>Wardiere Inc. | Jul 2015 - Aug 2018</p>
                                <ul>
                                    <li>Visited corporate client offices to offer latest products</li>
                                    <li>Built relationships with clients to maintain sales goals and create new opportunities</li>
                                </ul>
                            </div>
                        </section>
                        <section className="sales-4-education">
                            <h3>EDUCATION BACKGROUND</h3>
                            <div>
                                <p><strong>BA Sales and Commerce</strong></p>
                                <p>Borcelle University | May 2011 - Jul 2015</p>
                                <ul>
                                    <li>Undergrad Teaching Assistant for Intro to Economics</li>
                                </ul>
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

export default Sales4;
