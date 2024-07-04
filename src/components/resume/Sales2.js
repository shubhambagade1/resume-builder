import React, { useState } from 'react';
import '../styles/sales-2.css';
import dummyimg from '../../images/dummyimg.jpg'; // Replace with the actual path to your dummy image
import html2pdf from 'html2pdf.js';

const SalesTemplate = () => {
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
        const element = document.getElementsByClassName('sales-2-container')[0];
        const opt = {
            filename: 'Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };

    return (
        <div className='sales-2-wrapper'>
            <div className="sales-2-container" contentEditable="true">
                <div className="sales-2-left-column">
                    <img
                        className='sales-2-img'
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
                    <h1 contentEditable="true">Isabela Moner</h1>
                    <h2 contentEditable="true">Inside Sales Representative</h2>
                    <section className="sales-2-section">
                        <h3 contentEditable="true">SUMMARY</h3>
                        <p contentEditable="true">Active and companionable inside sales representative with 5+ years of experience...</p>
                    </section>
                    <section className="sales-2-section">
                        <h3 contentEditable="true">ACCOMPLISHMENTS</h3>
                        <ul contentEditable="true">
                            <li>Best Inside Sales Representative (2020)</li>
                            <li>Most Promising Inside Sales Representative (2019)</li>
                        </ul>
                    </section>
                    <section className="sales-2-section">
                        <h3 contentEditable="true">CONTACT DETAILS</h3>
                        <p contentEditable="true">Home: 123-456-7890</p>
                        <p contentEditable="true">Cell: 123-456-7890</p>
                        <p contentEditable="true">hello@resumebot.com</p>
                        <p contentEditable="true">www.resumebot.com</p>
                        <p contentEditable="true">123 Anywhere Street, Any City, State, Country 12345</p>
                    </section>
                </div>
                <div className="sales-2-right-column">
                    <section className="sales-2-section">
                        <h3 contentEditable="true">WORK EXPERIENCE</h3>
                        <div className="sales-2-experience">
                            <h4 contentEditable="true">Inside Sales Representative</h4>
                            <p contentEditable="true">RJH Management Group | 2019 - 2020</p>
                            <ul contentEditable="true">
                                <li>Established strong rapport with clients via telephone to identify needs and present solutions.</li>
                                <li>Managed contracts and volume spreads.</li>
                                <li>Sourced new sales opportunities through inbound lead follow-up from call-ins, emails, and food shows.</li>
                            </ul>
                        </div>
                        <div className="sales-2-experience">
                            <h4 contentEditable="true">Inside Sales Representative</h4>
                            <p contentEditable="true">Link Group USA | 2015 - 2019</p>
                            <ul contentEditable="true">
                                <li>Maintained and updated CRM system (Sales Toolbox) for contacts, weekly call reports on most meaningful customer activities and customer projects.</li>
                                <li>Conducted market research on existing and prospect accounts to define customer unmet needs, pain points and identify new projects for growth.</li>
                                <li>Prepared and managed price quotations as well as follow up on quotations.</li>
                            </ul>
                        </div>
                    </section>
                    <section className="sales-2-section">
                        <h3 contentEditable="true">SKILLS</h3>
                        <ul contentEditable="true">
                            <li>Team player</li>
                            <li>Project management</li>
                            <li>In-depth product knowledge</li>
                            <li>Cold Calling & Telephone Sales</li>
                            <li>B2B & B2C Sales</li>
                            <li>Rapport Building on the Call</li>
                            <li>Buyer-Seller Agreement</li>
                            <li>Active Listening</li>
                            <li>Time Management</li>
                            <li>Post-Sale Relationship Management</li>
                            <li>Referral Selling</li>
                        </ul>
                    </section>
                    <section className="sales-2-section">
                        <h3 contentEditable="true">ACADEMIC HISTORY</h3>
                        <p contentEditable="true">Boston University | MS in Applied Data Analytics</p>
                        <p contentEditable="true">Boston University | Master of Arts in Teaching</p>
                    </section>
                </div>
            </div>
            <div className="download-section">
                <button className="downloadpdf-btn" onClick={downloadPDF}>Download PDF</button>
            </div>
        </div>
    );
};

export default SalesTemplate;
