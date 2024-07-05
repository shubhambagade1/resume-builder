import React, { useState } from 'react';
import '../styles/sales-5.css';
import dummyimg from '../../images/dummyimg.jpg';
import html2pdf from 'html2pdf.js';

const Sales5 = () => {
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
        <div className='sales-5-wrapper'>
            <div className="sales-5-container" contentEditable="true">
                <header className="sales-5-header">
                    <div className="sales-5-header-left">
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
                        />
                    </div>
                    <div className="sales-5-header-right">
                        <h1>SOPHIA FORRESTA</h1>
                        <h2>SALES REPRESENTATIVE</h2>
                    </div>
                </header>
                <div className='sales-5-content'>
                    <div className='sales-5-left-content'>
                        <section className="sales-5-contact">
                            <h3>CONTACT INFORMATION</h3>
                            <p><strong>Home:</strong> 123-456-7890</p>
                            <p><strong>Cell:</strong> 123-456-7890</p>
                            <p><strong>Email:</strong> sophia@forresta.com</p>
                            <p><strong>Address:</strong> AnyWhere Street, Any City, State, Country 12345</p>
                        </section>
                        <section className="sales-5-skills">
                            <h3>PERSONAL SKILLS & QUALITIES</h3>
                            <ul>
                                <li>Well-developed interpersonal skills</li>
                                <li>Communication (verbal & written)</li>
                                <li>Presentational ability</li>
                                <li>Focused, determined self-starter</li>
                                <li>Fast learner with a passion for sales</li>
                                <li>Collaborative problem solver</li>
                            </ul>
                        </section>
                        <section className="sales-5-qualifications">
                            <h3>QUALIFICATIONS</h3>
                            <p>Real Estate Certificate in Real Estate<br />Abe Lee Real Estate - Honolulu, HI<br />March 2016 to April 2016</p>
                            <p>A.A. in Business Administration and Fashion Merchandising<br />Fashion Institute of Design and Merchandising - Los Angeles, CA<br />1982 to 1984</p>
                        </section>
                    </div>
                    <div className='sales-5-right-content'>
                        <section className="sales-5-summary">
                            <h3>PROFILE SUMMARY</h3>
                            <p>
                                I'm a sales, marketing and sales management professional with both B2B and B2C experience. The varied scope of my work has provided me with strong interpersonal skills and an excellent track record of meeting or exceeding targets. I have team-leading and supervisory experience focused on delivering excellent customer service, and also possess strong administration skills.
                            </p>
                        </section>
                        <section className="sales-5-experience">
                            <h3>PROFESSIONAL EXPERIENCE</h3>
                            <div>
                                <p><strong>Sales Executive, Marketing Executive</strong></p>
                                <p>Hilton Grand Vacations - Honolulu, HI | Jan 2018 to Present</p>
                                <ul>
                                    <li>Generating strong sales leads and booking qualified vacation ownership sales presentations.</li>
                                    <li>Selling promotional vacation packages for Hilton Grand Vacations ownership.</li>
                                    <li>Ranking in the group top 3 for domestic ownership sales by February 2020.</li>
                                    <li>Being consistently in the top 3 for booking qualified presentations for prospective clients.</li>
                                </ul>
                            </div>
                            <div>
                                <p><strong>Realtor/Sales Associate</strong></p>
                                <p>East Oahu Realty - Honolulu, HI | March 2016 to January 2018</p>
                                <ul>
                                    <li>Responsible for residential real estate sales in Hawaii Kai's leading real estate brokerage.</li>
                                    <li>Developed a highly structured reputation for personalized client service.</li>
                                    <li>Embraced the approach to customer service until leaving after the death of the founder.</li>
                                </ul>
                            </div>
                            <div>
                                <p><strong>Sales Manager</strong></p>
                                <p>Rays - Honolulu, HI | 2009 to 2016</p>
                                <ul>
                                    <li>Oversaw and led a multi-property workforce making retail sales, running beach activities and a surf school.</li>
                                    <li>Drove sales, marketing and merchandising activities to meet corporate P&L targets.</li>
                                    <li>Ensured excellent customer service and client relations.</li>
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

export default Sales5;
