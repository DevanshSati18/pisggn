// import React from 'react';
import { Link } from 'react-router-dom';

export default function Mandatory() {
  // --- DATA STRUCTURES --- //

  const generalInfo = [
    { label: "Name of School", value: "PRANAVANANDA INTERNATIONAL SCHOOL" },
    { label: "Affiliation No", value: "531460" },
    { label: "School Code", value: "41434" },
    { label: "Complete Address with pin code", value: "Sector-92, Gurugram, Haryana-122505" },
    { label: "Principal Name & Qualification", value: "JEEVITENDRA SATI, M.Sc, B.Ed" },
    { label: "School Email ID", value: "bsspisggn@gmail.com" },
    { label: "Contact Details", value: "8448293023/24" },
  ];

  const documentsAndInfo = [
    { title: "COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION", link: "https://www.pisgurugram.com/upload_img/document_img/211.pdf" },
    { title: "COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED BY THE STATE GOVT/UT", link: "https://pisgurugram.com/images/20240603115955_COPY%20OF%20NO%20OBJECTION%20CERTIFICATE%20(NOC)%20ISSUED%20BY%20THE%20STATE%20GOVTUT.pdf" },
    { title: "COPY OF RECOGNITION CERTIFICATE UNDER RTE ACT. 2009", link: "https://pisgurugram.com/images/20240603120029_COPY%20OF%20RECOGNITION%20CERTIFICATE%20UNDER%20RTE%20ACT.%202009.pdf" },
    { title: "COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE", link: "https://pisgurugram.com/images/20240603120126_COPY%20OF%20VALID%20BUILDING%20SAFETY%20CERTIFICATE%20AS%20PER%20THE%20NATIONAL%20BUILDING%20CODE.pdf" },
    { title: "COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY", link: "PASTE_LINK_5_HERE" },
    { title: "COPY OF THE DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION", link: "PASTE_LINK_6_HERE" },
    { title: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE", link: "PASTE_LINK_7_HERE" },
    { title: "COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES", link: "PASTE_LINK_8_HERE" },
  ];

  const resultsAndAcademics = [
    { title: "FEE STRUCTURE OF THE SCHOOL", link: "PASTE_LINK_9_HERE" },
    { title: "ANNUAL ACADEMIC CALENDAR", link: "PASTE_LINK_10_HERE" },
    { title: "LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)", link: "PASTE_LINK_11_HERE" },
    { title: "LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS", link: "PASTE_LINK_12_HERE" },
    { title: "LAST THREE YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY", link: "PASTE_LINK_13_HERE" },
  ];

  const staffDetails = [
    { role: "PRINCIPAL", strength: "01", details: "Mr. Jeevitendra Sati, M.Sc., B.Ed." },
    { role: "VICE PRINCIPAL", strength: "01", details: "Ms. Seema Sati, M.A., B.Ed." },
    { role: "TOTAL NO OF TEACHERS", strength: "68", details: "", link: "PASTE_LINK_14_HERE" },
    { role: "PGT", strength: "15", details: "", link: "PASTE_LINK_15_HERE" },
    { role: "TGT", strength: "10", details: "", link: "PASTE_LINK_16_HERE" },
    { role: "PRT", strength: "43", details: "", link: "PASTE_LINK_17_HERE" },
    { role: "TEACHERS SECTION RATIO", strength: "01 : 1.50 Approx", details: "" },
    { role: "DETAILS OF SPECIAL EDUCATOR", strength: "01", details: "Mr. Sandeep Kumar, B.A, B.Ed. SPECIAL EDUCATION (MR)" },
    { role: "DETAILS OF COUNSELLOR AND WELLNESS TEACHER", strength: "02", details: "1. Ms. Shruti Arya, M.A (Psychology), B.Ed\n2. Ms. Ritu Suhag, M.A (Psychology), B.Ed" },
  ];

  const infrastructure = [
    { label: "TOTAL CAMPUS AREA OF THE SCHOOL (IN SQUARE MTR)", value: "23952 sq.mtr" },
    { label: "NO AND SIZE OF THE CLASS ROOMS (IN SQ MTR)", value: "No of Classrooms - 70\nSize of the Classrooms - 20 X 27 SQ FT" },
    { label: "INTERNET FACILITY", value: "Yes" },
    { label: "NO OF GIRLS TOILETS", value: "40" },
    { label: "NO OF BOYS TOILETS", value: "56" },
    { label: "NO. OF CWSN TOILETS", value: "05" },
  ];

  const labs = [
    "Composit Science Lab - 1 no (30 x 21 sq.ft)",
    "Mathematics Lab - 1 No (20 x 27 sq.ft)",
    "Computer Lab - 2 No (Senior & Junior) (20 x 27 sq.ft)",
    "Biology Lab - 1 No (32 x 29 sq.ft)",
    "Physics Lab - 1 No (51 x 27 sq.ft)",
    "Chemistry lab - 1 No (51 x 27 sq.ft)",
    "Geography lab - 1 No (30 x 21 sq.ft)",
    "Psychology lab - 1 No (20 x 27 sq.ft)",
  ];

  return (
    <div className="w-full bg-[#FFFBF5] min-h-screen pb-24 font-sans">
      
      {/* Hero Section - Orange Theme */}
      <section className="relative w-full py-16 md:py-24 bg-[#004b87] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/20 rounded-full blur-3xl z-0"></div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider uppercase mb-6 drop-shadow-md">
            Mandatory Public Disclosure
          </h1>
          <div className="w-24 h-1.5 bg-white/80 rounded-full mx-auto mb-6 shadow-sm"></div>
          <p className="text-orange-50 max-w-3xl mx-auto text-base md:text-lg font-medium">
            Official records, certifications, and structural details provided transparently in compliance with CBSE guidelines.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 -mt-8 relative z-20 space-y-12">
        
        {/* Navigation Bar */}
        <div className="bg-white rounded-2xl p-4 shadow-lg border border-orange-100 flex items-center justify-between">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-orange-50 hover:bg-orange-100 text-orange-600 font-semibold rounded-xl transition-all duration-300 border border-orange-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Back to Home
          </Link>
          <div className="hidden sm:flex items-center gap-2 text-gray-500 font-medium px-4">
            Official School Records
          </div>
        </div>

        {/* SECTION 1: General Information */}
        <section className="bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4">
            <h2 className="text-xl font-bold text-white tracking-wide uppercase">General Information</h2>
          </div>
          <div className="p-0">
            {generalInfo.map((item, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row border-b border-orange-100 hover:bg-orange-50/50 transition-colors ${idx === generalInfo.length - 1 ? 'border-b-0' : ''}`}>
                <div className="md:w-1/3 bg-orange-50/30 p-4 md:p-6 font-semibold text-gray-700 md:border-r border-orange-100">
                  {item.label}
                </div>
                <div className="md:w-2/3 p-4 md:p-6 text-gray-800 font-medium">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: Documents and Information */}
        <section className="bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4">
            <h2 className="text-xl font-bold text-white tracking-wide uppercase">Documents and Information</h2>
          </div>
          <div className="p-4 md:p-6 space-y-4">
            {documentsAndInfo.map((doc, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-orange-100 bg-orange-50/30 hover:bg-orange-50 hover:border-orange-200 transition-all group">
                <span className="text-gray-700 font-semibold text-sm md:text-base pr-4 leading-snug">
                  {doc.title}
                </span>
                <a 
                  href={doc.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-orange-200 hover:bg-orange-500 text-orange-600 hover:text-white font-medium text-sm rounded-lg transition-colors shadow-sm w-full sm:w-auto justify-center"
                >
                  Click to view
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: Result and Academics */}
        <section className="bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4">
            <h2 className="text-xl font-bold text-white tracking-wide uppercase">Result and Academics</h2>
          </div>
          <div className="p-4 md:p-6 space-y-4">
            {resultsAndAcademics.map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-orange-100 bg-orange-50/30 hover:bg-orange-50 hover:border-orange-200 transition-all group">
                <span className="text-gray-700 font-semibold text-sm md:text-base pr-4 leading-snug">
                  {item.title}
                </span>
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm rounded-lg transition-colors shadow-sm w-full sm:w-auto justify-center"
                >
                  Click to view
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: Information & Details (Staff) */}
        <section className="bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4">
            <h2 className="text-xl font-bold text-white tracking-wide uppercase">Information & Details (Staff)</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-orange-50 border-b border-orange-100 text-orange-800 uppercase text-sm">
                  <th className="p-4 font-bold">Information</th>
                  <th className="p-4 font-bold">Number / Strength</th>
                  <th className="p-4 font-bold">Name & Qualification</th>
                </tr>
              </thead>
              <tbody>
                {staffDetails.map((staff, idx) => (
                  <tr key={idx} className="border-b border-orange-100 hover:bg-orange-50/50 transition-colors">
                    <td className="p-4 font-semibold text-orange-600">{staff.role}</td>
                    <td className="p-4 text-gray-700 font-medium">{staff.strength}</td>
                    <td className="p-4 text-gray-600 whitespace-pre-line">
                      {staff.details}
                      {staff.link && (
                        <a href={staff.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-100 hover:bg-orange-500 text-orange-700 hover:text-white text-xs font-bold rounded transition-colors mt-1">
                          View List <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        </a>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 5: School Infrastructure */}
        <section className="bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4">
            <h2 className="text-xl font-bold text-white tracking-wide uppercase">School Infrastructure Details</h2>
          </div>
          <div className="p-0">
            {infrastructure.map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row border-b border-orange-100 hover:bg-orange-50/50 transition-colors">
                <div className="md:w-1/3 bg-orange-50/30 p-4 md:p-6 font-semibold text-gray-700 md:border-r border-orange-100">
                  {item.label}
                </div>
                <div className="md:w-2/3 p-4 md:p-6 text-gray-800 font-medium whitespace-pre-line">
                  {item.value}
                </div>
              </div>
            ))}

            {/* Labs Section formatted nicely */}
            <div className="flex flex-col md:flex-row border-b border-orange-100">
              <div className="md:w-1/3 bg-orange-50/30 p-4 md:p-6 font-semibold text-gray-700 md:border-r border-orange-100">
                NO AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS
              </div>
              <div className="md:w-2/3 p-4 md:p-6">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {labs.map((lab, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 font-medium text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-orange-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      {lab}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* YouTube Video Embed */}
          <div className="p-4 md:p-8 bg-orange-50/30">
            <h3 className="text-lg font-bold text-orange-600 mb-4 text-center">
              Inspection of School Covering Infrastructure (Video Tour)
            </h3>
            <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-orange-200 bg-black aspect-video relative">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/TvHNiINV7UY" 
                title="School Infrastructure Tour" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}