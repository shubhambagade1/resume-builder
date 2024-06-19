import React from 'react';
import '../styles/template-2.css';
import html2pdf from 'html2pdf.js';

const Template2 = () => {
    const downloadPDF = () => {
        const element = document.getElementsByClassName('resume-2')[0];
        if (element) {
            const opt = {
                filename: 'teaching resume-1.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
            };
            html2pdf().from(element).set(opt).save();
        } else {
            console.error('Element not found');
        }
    };

    return (
        <div className='main-content-template-2'>
            <div className="resume-2">
                <header className="header-2">
                    <div className='header-name'>
                        <div className="name-2" contentEditable="true">John Doe</div>
                        <div className="title-2" contentEditable="true">Elementary School Teacher</div>
                    </div>
                    <div className="contact-info-2">
                        <div contentEditable="true">Email: johndoe@example.com</div>
                        <div contentEditable="true">Phone: (123) 456-7890</div>
                        <div contentEditable="true">Location: City, State</div>
                    </div>
                </header>
                <main className="main-content-2">
                    <section className="about-2">
                        <h2 className='section-2-heading'>About Me</h2>
                        <p contentEditable="true">Passionate and dedicated elementary school teacher with over 10 years of experience...</p>
                    </section>
                    <section className="skills-2">
                        <h2 className='section-2-heading'>Skills</h2>
                        <ul contentEditable="true">
                            <li>Classroom Management</li>
                            <li>Curriculum Development</li>
                            <li>Interactive Learning</li>
                            <li>Parent Communication</li>
                        </ul>
                    </section>
                    <section className="education-2">
                        <h2 className='section-2-heading'>Education</h2>
                        <ul contentEditable="true">
                            <li>Bachelor of Education, ABC University, 2010</li>
                            <li>Master of Education, XYZ University, 2015</li>
                        </ul>
                    </section>
                    <section className="experience-2">
                        <h2 className='section-2-heading'>Experience</h2>
                        <ul contentEditable="true">
                            <li>5th Grade Teacher, ABC Elementary School, 2010-Present</li>
                            <li>4th Grade Teacher, XYZ Elementary School, 2008-2010</li>
                        </ul>
                    </section>
                </main>
            </div>
            <div className='download-section'>
                <button className='downloadpdf-btn' onClick={downloadPDF}>Download PDF</button>
            </div>
        </div>
    );
}

export default Template2;
