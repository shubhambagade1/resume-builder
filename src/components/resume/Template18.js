import React from 'react';
import '../styles/template-18.css';
import html2pdf from 'html2pdf.js';


const Template18 = () => {

    const downloadPDF = () => {
        const element = document.getElementsByClassName('template-18-resume-container')[0];
        const opt = {
            filename: 'Technical Consultant-resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    };
    return (
        <div className='template-18-main-wrapper'>
            <div className="template-18-container">
                <header className="template-18-header">
                    <h1 className="template-18-name">Jessica Claire</h1>
                    <p className="template-18-contact">
                        <span>Montgomery Street, San Francisco, CA 94105</span> |
                        <span>(555) 432-1000</span> |
                        <span>resumesample@example.com</span>
                    </p>
                </header>
                <section className="template-18-section">
                    <h2 className="template-18-title">PROFESSIONAL SUMMARY</h2>
                    <p className="template-18-summary">
                        A Full Life-Cycle Recruiter with 8+ blended in-house and search firm recruiting experience having a track record
                        in delivering high volume hiring projects and helping companies to build exceptional workforce that positively
                        impacted their business.
                    </p>
                    <p className="template-18-summary">
                        Objective: Contractor recruiter role in a people and customer-centric organization where can effectively utilize
                        skills and expertise in building most effective technology workforce.
                    </p>
                </section>
                <section className="template-18-section">
                    <h2 className="template-18-title">SKILLS</h2>
                    <ul className="template-18-skills">
                        <li>Talent identification, sourcing and screening</li>
                        <li>Interviewing, short listing and closing</li>
                        <li>Strong follow-up and negotiation</li>
                        <li>Good interpersonal and interacting skills</li>
                        <li>Ability to source and recruit for hard to fill areas or multiple roles and levels simultaneously</li>
                    </ul>
                </section>
                <section className="template-18-section">
                    <h2 className="template-18-title">EXPERIENCE</h2>
                    <div className="template-18-job">
                        <h3 className="template-18-job-title">RECRUITMENT CONSULTANT</h3>
                        <p className="template-18-job-company">Harvard University | Southborough, MA</p>
                        <p className="template-18-job-dates">05/2010 to CURRENT</p>
                        <h4 className="template-18-subtitle">Responsibilities & scope of work:</h4>
                        <ul className="template-18-responsibilities">
                            <li>Sourced candidates for the clients in various industries through job marketing campaigns, referrals, social networks, internal database, career fairs, alumni, professional groups and associations.</li>
                            <li>Conducted candidate screening and interviewing, delivered shortlisted candidates to the clients</li>
                            <li>Assisted clients in arranging interviewing process and job offers with candidates</li>
                            <li>Recruited, trained and supervised a team of 2-4 recruiters</li>
                            <li>%80 of time was dedicated to recruiting efforts & %20 to business development & operations management.</li>
                            <li>Placements were %40 FTE vs. %60 contractor roles.</li>
                        </ul>
                        <h4 className="template-18-subtitle">Achievements & KPIs:</h4>
                        <ul className="template-18-achievements">
                            <li>Increased the number of clients from 2 in 2011 to 20 in 2016 and gross sale by %40 in 2013, %500 in 2014, %200 in 2015</li>
                            <li>Average number of requisitions carried: 2-10 per month and up to 30 during involvement into projects</li>
                            <li>Expected and actual hires per month/year: in average 2/2 per month and 60-150 per year during involvement into projects</li>
                            <li>Average time to hire: 0.5 – 2 months depending on the complexity of search and hiring speed of the client</li>
                            <li>In average reviewed 200 resumes/per role and conducted 100 interviews/per role</li>
                        </ul>
                        <h4 className="template-18-subtitle">Client portfolio:</h4>
                        <p className="template-18-portfolio">
                            Successfully placed candidates for international and local clients in several industries:
                        </p>
                        <ul className="template-18-portfolio-list">
                            <li>Wireless, broadcasting and technology: B&BTv, International Sport Broadcasting Company, Seabak, SEABAK, RCom,</li>
                            <li>Oil & Gas: GE, Wartsila, Weir</li>
                            <li>International Sport & Events: Baku European Games Operating Committee, Quintessentially Events</li>
                            <li>FMCG: Mirlex Trading, Danone, Carlsberg Group</li>
                            <li>Marine: Baku Shipyard</li>
                            <li>Financial Consultancy: PriceWaterHouseCoopers, Delloite</li>
                            <li>Healthcare and Aesthetics: Merck, BTL, Konvent Pharma</li>
                        </ul>
                        <h4 className="template-18-subtitle">Positions filled:</h4>
                        <p className="template-18-positions">
                            IT and Software Development: IT Infrastructure Engineer/Manager, Software Developer and Engineer, Applications Project Manager, Technology Project Manager, Technology Program Manager, IT Security Engineer, CTO, CIO
                        </p>
                    </div>
                </section>
            </div>
            <div className='download-section'>
                <button className='downloadpdf-btn' onClick={downloadPDF}>Download PDF</button>
            </div>
        </div>

    );
};

export default Template18;
