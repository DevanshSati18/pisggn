import React from 'react';

const About = () => {
  return (
    <div className="w-full bg-white overflow-x-hidden">
      
      {/* Top Hero Section with School Image */}
      <section className="relative w-full h-[40vh] md:h-[55vh]">
        <img 
          src="/school_building.png" // Replace with actual school building image
          alt="Pranavananda International School Campus" 
          className="absolute inset-0 w-full h-full object-cover"
        />      
      </section>

      {/* Introduction Section */}
      <section className="max-w-5xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 tracking-wide mb-6">
            Pranavananda International School
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg text-justify md:text-center">
            <strong className="font-semibold text-orange-600">Pranavananda International School</strong> is a CBSE Affiliated English Medium co-ed school run and managed by the Bharat Sevashram Sangha, situated at Sector – 92 of greater Gurugram, Haryana, India. The school began its noble journey in April, 2014 with a few tiny tots from the nearby area with the core objectives of man-making education as envisaged by Acharya Shrimat Swami Pranavanandaji Maharaj, the founder of the Sangha.
          </p>
        </div>

        {/* Highlight Banner */}
        <div className="bg-orange-50 border-l-4 text-center border-orange-500 p-6 md:p-8 rounded-r-xl shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-lg md:text-xl font-medium text-gray-800 italic">
            "President Shri Pranab Mukherjee inaugurated Pranavananda International School"
          </p>
        </div>

        <div className="space-y-6 text-gray-600 leading-relaxed text-justify md:text-lg">
          <p>
            Bharat Sevashram Sangha, the century old great philanthropic and a leading monastic organisation initiated this service to the society aiming to impart present day modern education to the students blended with high moral values and strict discipline. It will be a holistic approach towards all round development and progress of present generation– physical, mental, intellectual, moral, spiritual, social and emotional.
          </p>
          <p>
            With all modern amenities made available amidst a spiritual environment in presence of the holy monks of the Sangha, the institute has steadily been emerging as a learning hub towards man-making education in a true sense of the term. Thereby, the future generations prepared from this learning institute will become a responsible, accountable, patriotic, dutiful, respectful, successful and worthy citizen of our holy motherland.
          </p>
          <p>
            The guiding principles of Acharya Srimat Swami Pranavanandaji Maharaj, the illustrious patriot saint and nation-builder of unparalleled spiritual power and the great founder of Bharat Sevashram Sangha is our core values which can potentially transform manly qualities into divinity.
          </p>
          <p>
            Over the years, Bharat Sevashram Sangha has established several educational institutes across the country and abroad. The passed-out students from Bharat Sevashram Sangha institutes established themselves across the globe imbibing the ideals & principles of Acharya Srimat Swami Pranavanandaji Maharaj and living a dignified and meaningful life.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section (Orange Theme BG) */}
      <section className="bg-gradient-to-b from-orange-50 to-orange-100/50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 tracking-wide mb-6 inline-block relative">
              Mission & Vision
              <span className="absolute -bottom-3 left-1/2 w-16 h-1 bg-orange-400 -translate-x-1/2 rounded-full"></span>
            </h2>
            <h3 className="text-xl md:text-2xl font-serif text-orange-600 mt-8 italic max-w-3xl mx-auto leading-relaxed">
              "This is a school where every child is important. We believe that every child is talented."
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
              <p>
                Pranavananda International School, Gurgaon is an educational unit of Bharat Sevashram Sangha. Bharat Sevashram Sangha is a monastic organization founded by Acharya Srimat Swami Pranavanandaji Maharaj to serve the nation in different ways through its monks, devotees and volunteers.
              </p>
              <p>
                Education is one of the sectors where the Sangha has been providing holistic & quality education to the future of our nation. As it is a non-profit organization being run & managed by the monks only, we want to make children to be a good human being first.
              </p>
              <p>
                Success is sure to follow in all respect. Sound Moral Character, Strong Values, Strict Discipline, Fellow-Feeling, Patriotism, Aspiration to Excel, Love & Respect, Sacrifice and Service are needed to be imbibed into the mild & soft mind of the children. These few things are most important in the life of a student. Devoid of these qualities can not make a good human being. Millions of people having rich wealth & so-called degrees hardly make any difference. But a few people with those above qualities can change the entire society. There are many examples of its kind.
              </p>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-orange-100">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-orange-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.82 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.496 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Focus on Excellence</h4>
              <p className="text-gray-600 leading-relaxed">
                Besides focussing on academics & co-curricular activities, the school gives importance to talent search so that they participate in Physics Olympiad, Maths Olympiad, Chemistry Olympiad, Informatics and Cyber Olympiad and Talent Search examination etc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 tracking-wide mb-10 inline-block relative">
            Our Values
            <span className="absolute -bottom-3 left-1/2 w-16 h-1 bg-orange-400 -translate-x-1/2 rounded-full"></span>
          </h2>
          
          <h3 className="text-2xl md:text-3xl font-serif text-orange-500 mb-10 italic">
            "Simple living and high thinking" <br />
            <span className="text-lg text-gray-500 font-sans not-italic mt-2 block">are our guiding principles.</span>
          </h3>

          {/* Slok Image Placeholder */}
          <div className="my-12 flex justify-center">
            <img 
              src="slok.png" // Replace with actual Slok image
              alt="Guiding Slok" 
              className="max-w-full h-auto rounded-lg shadow-sm border border-gray-100"
            />
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed text-justify md:text-center md:text-lg max-w-4xl mx-auto">
            <p>
              We believe and inculcate "Service to the Motherland" is first and foremost duty of a citizen. To prepare ourselves we need to build our lives collectively to serve our country in various capacities.
            </p>
            <p>
              The selfless monks of the Bharat Sevashram Sangha follow in their daily life the motto of <strong className="font-semibold text-orange-600">“Sacrifice and Service”</strong> before anything. Acharya Srimat Swami Pranavanandaji Maharaj himself lived a life of purity, sacrifice and service and founded Bharat Sevashram Sangha in 1917. The same tradition continues for the past 100 years and hope to maintain the tradition.
            </p>
            <p>
              By following these principles, we hope to make our nation stand tall like a Beacon which will guide humanity towards a meaningful life and bring peace and harmony among all.
            </p>
          </div>
        </div>
      </section>

      {/* Our Other Schools Section */}
      <section className="bg-gray-50 py-16 md:py-24 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 tracking-wide mb-12 inline-block relative">
            Our Other Schools
            <span className="absolute -bottom-3 left-1/2 w-16 h-1 bg-orange-400 -translate-x-1/2 rounded-full"></span>
          </h2>

          {/* Big Chart Photo Placeholder */}
          <div className="w-full bg-white rounded-2xl shadow-xl overflow-hidden p-2 border border-gray-100">
            <img 
              src="other_branch.jpg" // Replace with actual chart image
              alt="Chart of other Bharat Sevashram Sangha Schools" 
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;