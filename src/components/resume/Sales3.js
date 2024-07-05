import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import dummyimg from '../../images/dummyimg.jpg';
import html2pdf from 'html2pdf.js';
import '../styles/sales-3.css';

const Sales3 = () => {
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
        const element = document.getElementsByClassName('sales-3-container')[0];
        const opt = {
            filename: 'Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };

    return (
        <div className="sales-3-wrapper">
            <div className="sales-3-container" contentEditable="true">
                <div className="sales-3-header">
                    <div className="sales-3-profile-img-container">
                        <img
                            src={profileImg}
                            alt="Profile"
                            onClick={() => document.getElementById('sales3ProfilePhotoInput').click()}
                        />
                        <input
                            type="file"
                            id="sales3ProfilePhotoInput"
                            accept="image/*"
                            onChange={handleProfileImgChange}
                            style={{ display: 'none' }}
                        />
                    </div>
                    <div className='sales-3-header-text'>
                        <h1>Donna Stroupe</h1>
                        <h2>Sales Representative</h2>
                    </div>

                </div>
                <div className="sales-3-content">
                    <div className="sales-3-left-content">
                        <div className="sales-3-contact-details">

                            <p><FaEnvelope /> hello@reallygreatsite.com</p>
                            <p><FaPhone /> +123-456-7890</p>
                            <p><FaMapMarkerAlt /> 123 Anywhere St, Any City</p>
                            <p><FaGlobe /> reallygreatsite.com</p>
                        </div>
                        <div className="sales-3-section">
                            <h3>Education</h3>
                            <h4>BA Sales and Commerce</h4>
                            <h5>Wardiere University, 2011 - 2015</h5>
                            <h4>BA Sales and Commerce</h4>
                            <h5>Wardiere University, 2011 - 2015</h5>
                        </div>
                        <div className="sales-3-section">
                            <h3>Skills</h3>
                            <ul>
                                <li>Fast-moving Consumer Goods</li>
                                <li>Packaged Consumer Goods</li>
                                <li>Sales</li>
                                <li>Corporate sales account management</li>
                                <li>Experience in retail</li>
                            </ul>
                        </div>
                        <div className="sales-3-section">
                            <h3>Languages</h3>
                            <p>English</p>
                            <p>French</p>
                        </div>
                    </div>
                    <div className="sales-3-right-content">
                        <div className="sales-3-section">
                            <h3>About Me</h3>
                            <p>
                                I am a Sales Representative is a professional who initializes and manages relationships with customers. They serve as their point of contact and lead from initial outreach through the making of the final purchase by them or someone in their household.
                            </p>
                        </div>
                        <div className="sales-3-section">
                            <h3>Work Experience</h3>
                            <h4>Aug 2018 - present</h4>
                            <h5>Timmerman Industries</h5>
                            <p>Consumer Goods Seller</p>
                            <ul>
                                <li>Offer consumer goods packages to corporate and clients</li>
                                <li>Meet with clients every quarter to update or renew services</li>
                                <li>Train junior sales agents</li>
                            </ul>
                            <h4>Jul 2015 - Aug 2018</h4>
                            <h5>Timmerman Industries</h5>
                            <p>FMCG Sales Agent</p>
                            <ul>
                                <li>Visited corporate client offices to offer latest products</li>
                                <li>Built relationships with clients to maintain sales goals and create new opportunities</li>
                            </ul>
                            <h4>Aug 2014 - Jul 2015</h4>
                            <h5>Timmerman Industries</h5>
                            <p>Sales Agent</p>
                            <ul>
                                <li>Visited corporate client offices to offer latest products</li>
                            </ul>
                        </div>
                        <div className="sales-3-section">
                            <h3>References</h3>
                            <div className='sales-3-section-reference'>
                                <div>
                                    <p>Estelle Darcy, Wardiere Inc. / CEO</p>
                                    <p>Phone: +123-456-7890</p>
                                    <p>Email: hello@reallygreatsite.com</p>
                                </div>
                                <div>
                                    <p>Harper Russo, Wardiere Inc. / CEO</p>
                                    <p>Phone: +123-456-7890</p>
                                    <p>Email: hsllo@reallygreatsite.com</p>
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

export default Sales3;
