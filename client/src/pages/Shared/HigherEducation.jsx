import React from 'react';
import Navbar from '../../Component/Navbar';
import Footer from '../../Component/Footer';

const higherEducationLinks = [
  {
    title: 'GRE',
    link: 'https://www.ets.org/gre',
    description: 'Graduate Record Examination',
    eligibility: 'For graduate school admissions'
  },
  {
    title: 'TOEFL',
    link: 'https://www.ets.org/toefl',
    description: 'Test of English as a Foreign Language',
    eligibility: 'For non-native English speakers applying to English-speaking universities'
  },
  {
    title: 'GATE',
    link: 'https://gate.iitb.ac.in/',
    description: 'Graduate Aptitude Test in Engineering',
    eligibility: 'For admission to postgraduate programs in engineering/technology in India, including Master\'s and PhD programs'
  },
  {
    title: 'CAT',
    link: 'https://iimcat.ac.in/',
    description: 'Common Admission Test',
    eligibility: 'For admission to postgraduate management programs in India, including MBA'
  },
  {
    title: 'UGC NET',
    link: 'https://ugcnet.nta.nic.in/',
    description: 'National Eligibility Test',
    eligibility: 'For eligibility for Assistant Professorship and Junior Research Fellowship in Indian universities and colleges'
  },
  {
    title: 'CSIR NET',
    link: 'https://csirnet.nta.nic.in/',
    description: 'Council of Scientific and Industrial Research National Eligibility Test',
    eligibility: 'For eligibility for lectureship and Junior Research Fellowship in Indian universities and colleges in the field of science'
  },
  {
    title: 'CMAT',
    link: 'https://cmat.nta.nic.in/',
    description: 'Common Management Admission Test',
    eligibility: 'For admission to postgraduate management programs in India, including MBA'
  },
  {
    title: 'XAT',
    link: 'https://www.xatonline.in/',
    description: 'Xavier Aptitude Test',
    eligibility: 'For admission to postgraduate management programs in India, including MBA'
  },
  {
    title: 'JAM',
    link: 'https://jam.iisc.ac.in/',
    description: 'Joint Admission Test for M.Sc.',
    eligibility: 'For admission to Integrated Ph.D. and M.Sc. programs in science at IITs and IISc'
  },
  {
    title: 'CEED',
    link: 'https://ceed.iitb.ac.in/',
    description: 'Common Entrance Exam for Design',
    eligibility: 'For admission to Master\'s and PhD programs in design at IITs'
  },
  {
    title: 'NEET PG',
    link: 'https://nbe.edu.in/neetpg/',
    description: 'National Eligibility cum Entrance Test for Postgraduate Medical Courses',
    eligibility: 'For admission to postgraduate medical courses (MD/MS/PG Diploma) in India'
  },
  {
    title: 'AIIMS PG',
    link: 'https://www.aiimsexams.org/',
    description: 'All India Institute of Medical Sciences Postgraduate Entrance Exam',
    eligibility: 'For admission to various postgraduate medical courses (MD/MS/MDS/DM/MCh)'
  },
  {
    title: 'JEE Advanced',
    link: 'https://jeeadv.ac.in/',
    description: 'Joint Entrance Examination Advanced',
    eligibility: 'For admission to undergraduate programs (B.Tech, B.Arch) at IITs'
  },
  {
    title: 'BITSAT',
    link: 'https://www.bitsadmission.com/',
    description: 'Birla Institute of Technology and Science Admission Test',
    eligibility: 'For admission to undergraduate engineering programs at BITS Pilani, Goa, and Hyderabad campuses'
  },
  {
    title: 'NID Entrance Exam',
    link: 'https://admissions.nid.edu/NIDA2021/',
    description: 'National Institute of Design Entrance Exam',
    eligibility: 'For admission to undergraduate and postgraduate design programs at NID campuses'
  },
  {
    title: 'CLAT',
    link: 'https://consortiumofnlus.ac.in/clat-2023/',
    description: 'Common Law Admission Test',
    eligibility: 'For admission to undergraduate and postgraduate law programs at National Law Universities in India'
  },
  {
    title: 'JAMIA Entrance Exam',
    link: 'https://www.jmi.ac.in/',
    description: 'Jamia Millia Islamia Entrance Exam',
    eligibility: 'For admission to various undergraduate and postgraduate programs at Jamia Millia Islamia University'
  },
  {
    title: 'NIFT Entrance Exam',
    link: 'https://nift.ac.in/',
    description: 'National Institute of Fashion Technology Entrance Exam',
    eligibility: 'For admission to undergraduate and postgraduate programs in fashion design, technology, and management at NIFT campuses'
  },
  {
    title: 'NATA',
    link: 'https://www.nata.in/',
    description: 'National Aptitude Test in Architecture',
    eligibility: 'For admission to undergraduate architecture programs in India'
  },
  {
    title: 'AILET',
    link: 'https://nludelhi.ac.in/ailet-2023/',
    description: 'All India Law Entrance Test',
    eligibility: 'For admission to undergraduate and postgraduate law programs at National Law University, Delhi'
  },

];

const HigherEducation = () => {
  return <>
      <Navbar />
       <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">Higher Education Links</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {higherEducationLinks.map((link, index) => (
          <div key={index} className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Title :{link.title}</h2>
              <p>Description :{link.description}</p>
              <p className="text-gray-600">Elligibility : {link.eligibility}</p>
              <div className="card-actions justify-end">
                <a href={link.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Explore</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
};

export default HigherEducation;
