import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import dummyimg from '../../images/dummyimg.jpg';
import { useState } from 'react';
import html2pdf from 'html2pdf.js';
import "../styles/template-3.css"


const Template3 = () => {
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
        const element = document.getElementsByClassName('row')[0];
        const opt = {
            filename: 'Non technical resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };

    return (
        <div className="container-fluid template-3-main-wrapper">
            <div className="row main-content-template-3">
                <div className="col-md-4 text-center py-5 bg-primary text-white template-3-left-content">
                    <div className="profile-image">
                        <img id="profileImg" src={profileImg} alt="Profile" onClick={() => document.getElementById('profilePhotoInput').click()} />
                        <input type="file" id="profilePhotoInput" accept="image/*" onChange={handleProfileImgChange} />
                    </div>
                    <div className="container">
                        <h3 className='mt-3' contentEditable="true">Eg.lorem loeerm</h3>
                        <hr />
                        <div className='leftside-info'>
                            <div className="mobile" contentEditable="true"><FaPhone /> &nbsp;+1 123-456-7890</div>
                            <div className="location" contentEditable="true"><FaMapMarkerAlt /> &nbsp;City, State</div>
                            <div className="email" contentEditable="true"><FaEnvelope />&nbsp; &nbsp;johndoe@example.com</div><br />
                        </div>
                    </div>
                    <hr />
                </div>

                <div className="col-md-8 py-1 template-3-right-content">
                    <div className="card">
                        <div className="card-header background">
                            <h3 contentEditable="true">Objective</h3>
                        </div>
                        <div className="card-body">
                            <p id="objT" contentEditable="true">Enter your Objective</p>
                        </div>
                    </div>

                    <div className="card mt-4">
                        <div className="card-header background">
                            <h3 contentEditable="true">Skills</h3>
                        </div>
                        <div className="card-body">
                            <ul contentEditable="true">
                                <li>html</li>
                                <li>css</li>
                                <li>js</li>
                                <li>react</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card mt-4">
                        <div className="card-header background">
                            <h3 contentEditable="true">Education</h3>
                        </div>
                        <div className="card-body">
                            <ul contentEditable="true">
                                <li>Master of computer applications in 2023</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card mt-4">
                        <div className="card-header background">
                            <h3 contentEditable="true">Work Experience</h3>
                        </div>
                        <div className="card-body">
                            <ul contentEditable="true">
                                <li>worked in the xyz company for 2 years</li>
                                <li>worked in the abc company for 1 years</li>
                                <li>worked in the pqr company for 3 years</li>
                            </ul>
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

export default Template3;
