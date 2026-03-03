import React from 'react';
const LeadershipDesk = () => {
  const leaders = [
    {
      role: "Chairman",
      name: "Swamy Atmajnanananda",
      subTag: "Chairman",
      title: "Message from the desk of Chairman",
      image: "leaders/Chairman.png", 
      message: "Why did we plan to establish an educational institution when there were a large number of such establishments around us. The reply is that we intend to make Pranavananda International School a different one from others and we, who run this institution, look at things in a different way. We believe that learning should be based on experiences and applications, not just knowledge. I feel proud to say that our school is gratifyingly equipped with the best services."
    },
    {
      role: "Principal",
      name: "JEEVITENDRA SATI",
      subTag: "Principal",
      title: "Greetings from the Desk of the Principal",
      image: "/leaders/Principal.png", 
      message: "\"If wealth is lost nothing is lost, If health is lost, something is lost, If character is lost, everything is lost.\"\n\nIndia needs a value education system which will inculcate among the students universal values and enrich his or her personality. One very often hears that the children of today are going astray and their parents and school fail to help them to build their character."
    },
    {
      role: "Vice Principal",
      name: "SEEMA SATI",
      subTag: "M.A., B.ED.",
      title: "Greetings from the Desk of the Vice Principal",
      image: "/leaders/vice_principal.png", 
      message: "Application of fine-tuning methods to bring out the perfection in human being is called, in a nut shell; EDUCATION. Unfathomable power and prowess lie latent in Human Being. Fortunate are those who finally blossom their full potential which provides eternal peace & happiness and their lives are dedicated to the welfare of the masses. Bharat Sevashram Sangha has tirelessly been striving in this field."
    }
  ];

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 py-20 bg-gradient-to-b from-gray-50 to-gray-100 rounded-3xl my-12 overflow-hidden">
      
      {/* Premium Background Accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 pt-8">
        {leaders.map((leader, index) => (
          <div 
            key={index} 
            className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 border border-gray-100 flex flex-col mt-6"
          >
            
            {/* Premium Overlapping Badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-nowrap text-white text-sm md:text-base font-bold px-8 py-2.5 rounded-full shadow-[0_4px_15px_rgba(249,115,22,0.4)] tracking-wider uppercase">
                {leader.role}
              </div>
            </div>

            <div className="px-6 pt-14 pb-8 flex-1 flex flex-col items-center relative overflow-hidden rounded-2xl">
              
              {/* Decorative Background Quote Icon */}
              <span className="absolute top-24 right-4 text-[120px] leading-none text-gray-50 font-serif z-0 select-none group-hover:text-orange-50/80 transition-colors duration-500">
                &rdquo;
              </span>
              
              {/* Profile Image with Gradient Ring */}
              <div className="relative z-10 mb-5 p-1 bg-gradient-to-tr from-orange-400 to-orange-100 rounded-full shadow-lg group-hover:scale-105 transition-transform duration-500">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-28 h-28 rounded-full object-cover border-4 border-white"
                />
              </div>
              
              {/* Name & SubTag */}
              <div className="relative z-10 text-center mb-5">
                <h3 className="text-gray-900 font-extrabold text-xl uppercase tracking-wide group-hover:text-orange-600 transition-colors duration-300">
                  {leader.name}
                </h3>
                <p className="text-orange-500/80 text-sm font-semibold tracking-widest mt-1">
                  {leader.subTag}
                </p>
              </div>
              
              {/* Elegant Divider */}
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-5 relative z-10"></div>

              {/* Title / Greeting */}
              <h4 className="relative z-10 text-gray-800 font-serif italic text-center text-base md:text-lg mb-4 px-2 ">
                "{leader.title}"
              </h4>

              {/* Message */}
              <div className="relative z-10 text-gray-500 text-sm leading-relaxed text-center flex-1 whitespace-pre-line px-2 font-medium">
                {leader.message}
              </div>

              {/* Premium Subtle Bottom Indicator */}
              <div className="mt-8 relative z-10 flex justify-center w-full">
                <div className="w-12 h-1.5 bg-gray-200 rounded-full group-hover:bg-orange-400 group-hover:w-20 transition-all duration-500 ease-out"></div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipDesk;