import React from 'react';

const UpcomingEvents = () => {
  const eventsData = [
    {
      id: 1,
      title: "GEETA CHANTING COMPETITION",
      image: "/Events/Geeta_Chanting.jpg", 
      description: "\"Perform every action with you heart fixed on the Supreme Lord\" With devotion and confidence, they are showcasing the timeless beauty of Bhagavad Gita Shlokas through their melodious recitations. This sacred event not only strengthens their connection with our rich cultural and spiritual heritage but also nurtures values of discipline, focus, and devotion. Best wishes to our young chanters as they spread the divine message of the Geeta with purity and dedication."
    },
    {
      id: 2,
      title: "ANNUAL DAY CELEBRATION",
      image: "/Events/Annual_day.jpg", 
      description: "We are delighted to share that our school successfully celebrated its 11th Annual Day 2025 (NAVODAYAN) on Sunday, 9th November, with great enthusiasm and joy! The event was graced by our esteemed Chief Guest, Sh. Amit Khare, Secretary to the Vice President of India, and our Guest of Honour, Smt. Nidhi Khare, Secretary, Department of Consumer Affairs. We were also privileged to welcome our Special Guest, Capt. Indu Boken Kasana DEO Gurugram."
    },
    {
      id: 3,
      title: "SCHOOL EXCURSION",
      image: "/Events/school_excursion.jpg", 
      description: "\"Learning should be a joy and full of excitement. It is life's greatest adventure\" This is to inform you that our school has organised educational excursions to various locations for all classes. These excursions aim to enhance students’ learning experiences by providing practical exposure beyond the classroom environment. We kindly seek the active participation and cooperation of all students and parents to ensure the successful conduct of these educational visits."
    },
    {
      id: 4,
      title: "PADMA SHRI 2025",
      image: "/Events/padam_shree.jpg", 
      description: "We are proud to share that one of our Swami ji from Bharat Sevashram Sangha has received PADMA SHRI on the 27th of this month. We, on behalf of Pranavananda International School, all parents, staff and students congratulate Swami ji for this remarkable achievement. Thanks to all parents and all other stakeholders for their support and trust in Bharat Sevashram Sangha and Pranavananda International School"
    },
    {
      id: 5,
      title: "Our Students Shine at MUN 2025",
      image: "/Events/mncu.jpg", 
      description: "Model United Nations (MUN) is more than just a simulation—it's a gateway into the world of diplomacy, global affairs, and leadership. It empowers students to step into the shoes of world leaders, historical figures, and international delegates, tackling pressing global issues through debate, negotiation, and collaboration. We are thrilled to share that our students recently had the honour of participating in the prestigious MUN, one of the most renowned conferences in the region."
    },
    {
      id: 6,
      title: "First Position at the District Level Youth Kala Utsav",
      image: "/Events/kala.jpg", 
      description: "We are pleased to share that our school has secured the First Position at the District Level Youth Kala Utsav, achieving this honour along with a cash prize of Rs. 31,000. We are also delighted to inform you that our team has qualified for the State Level competition."
    },
    {
      id: 7,
      title: "WOMEN SAFETY WORKSHOP",
      image: "/Events/women_safety.jpg", 
      description: "The workshop on women’s safety was conducted at our School, with the aim of raising awareness about the challenges women face and providing practical tools and strategies to enhance their safety. The workshop was arranged for all the girl students. The training has been designed to explain and demonstrate Self-Defense in real-time scenarios. This workshop was really helpful and an eye-opener for all the participants as it is so much required to remain aware to safeguard oneself in any situation."
    },
    {
      id: 8,
      title: "INVESTITURE CEREMONY",
      image: "/Events/iinverstiture.jpg", 
      description: "It is a proud moment for us that we organized the investiture ceremony for this session. A spirit of unity and dynamism filled the air as the Grand Ceremony commenced with the soulful rendition of the School Prayer. The newly elected student council members pledged to work earnestly and uphold the honor and glory of the institution while receiving their prestigious Flag, badge, and flower bouquets. Congratulations on your great responsibilities while embarking on a new journey as a leader."
    },
    {
      id: 9,
      title: "Independence Day Celebration",
      image: "/Events/independence_day.jpg", 
      description: "Independence Day is a time of great pride and patriotism for every Indian. As we celebrate this day, we must teach students the importance of freedom, unity, and love for our country. Schools become a good ground for nurturing these kinds of feelings by organizing various activities that bring alive the spirit of Independence Day."
    },
    {
      id: 10,
      title: "Inter-House Tournament",
      image: "/Events/inter_house.jpg", 
      description: "Taking part in any sport has its merits. But volleyball in itself is a league of its own, providing students with a plethora of benefits like organization, teamwork, and communication. Keeping this in mind, the school organized an Inter-House Volleyball competition for the students of classes VI-XII on 19th October 2024 on the school premises."
    },
    {
      id: 11,
      title: "DIVISIONAL LEVEL LEGAL LITERACY COMPETITION",
      image: "/Events/division.jpg", 
      description: "Our school was honored to host the divisional-level literacy competition and cultural program on Thursday, i.e, 8 August 2024, in the distinguished and gracious presence of Chief Guests Sh. Ramesh Chander (Chief Judicial Magistrate, DLSA, Gurugram), Sh. Hitesh Kumar, IAS (Additional Deputy Commissioner, Gurugram) & the Guest of Honour Capt. Indu Boken Kasana (District Education Officer, Gurugram). The event was a testament to our students' remarkable talents and our dedication to promoting academic and artistic excellence, enhancing community spirit through a celebration of creativity and achievement."
    },
    {
      id: 12,
      title: "Diwali Celebration",
      image: "/Events/DiwaliCelebration.jpg", 
      description: "Diwali, the Festival of Lights, is a vibrant and culturally rich celebration that holds a special place in the hearts of millions around the world. It’s a time when homes, streets, and hearts are illuminated with joy, positivity, and hope. Diwali, commonly referred to as Deepavali holds a special place among India’s most revered and widely observed festivals. Its name originates from the Sanskrit terms “deepa” (meaning lamp) and “avali” (indicating rows), symbolizing the radiant rows of lamps."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-white">
      {/* Softer, delicate Section Heading */}
      <div className="text-center mb-14">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 tracking-wide inline-block relative pb-2">
          Upcoming & Recent Events
          {/* Thin, subtle underline */}
          <span className="absolute bottom-0 left-1/2 w-16 h-[2px] bg-orange-400 -translate-x-1/2 rounded-full"></span>
        </h2>
        {/* Subheading with an orange theme */}
        <p className="mt-5 text-orange-500/90 font-medium text-base md:text-lg max-w-2xl mx-auto">
          Catch a glimpse of the vibrant activities, achievements, and celebrations at Pranavananda International School.
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {eventsData.map((event) => (
          <div 
            key={event.id} 
            className="group flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 overflow-hidden transition-shadow duration-300"
          >
            {/* Image Container with a very soft hover scale */}
            <div className="relative h-56 w-full overflow-hidden bg-gray-50">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>

            {/* Content Container (Full text, no truncation) */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-bold text-gray-800 mb-3 uppercase tracking-wide group-hover:text-orange-500 transition-colors duration-300">
                {event.title}
              </h3>
              
              {/* Delicate divider */}
              <div className="w-10 h-[2px] bg-blue-400/70 mb-4"></div>

              {/* Full description */}
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;