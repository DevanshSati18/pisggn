import React from 'react';

const Ashram = () => {
  return (
    <div className="w-full bg-gray-50 overflow-x-hidden pb-16">
      
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[55vh]">
        <img 
          src="/school_building.png" // Replace with actual school building image
          alt="Pranavananda International School Campus" 
          className="absolute inset-0 w-full h-full object-cover"
        />      
      </section>
      <section className="relative w-full py-20 bg-[#004b87] overflow-hidden">
        {/* Decorative background patterns */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-widest uppercase mb-6 leading-tight drop-shadow-md">
            Bharat Sevashram Sangha <br /> 
            <span className="text-orange-400 text-2xl md:text-4xl">& Sri Sri Pranav Math</span>
          </h1>
          <div className="w-32 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto px-4 -mt-8 relative z-20 space-y-12">
        
        {/* Intro & History Card */}
        <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
          <p className="text-gray-700 leading-relaxed text-lg text-justify mb-6">
            <strong className="text-orange-600 font-semibold">Bharat Sevashram Sangha</strong>, a socio-cultural, charitable, philanthropic and a leading monastic organization in India is the brainchild of Acharya Srimat Swami Pranavanandaji Maharaj, the great spiritual Master. The Sangha was founded in 1917 on the holy Maghi Purnima day at Bajitpur (now in Bangladesh after 1947). On the auspicious Maghi Purnima day in 1923 in a congregation of spiritual aspirants of the Sangha at the Bajitpur hermitage, the Ashram was named as Bharat Seva Ashram Sangha. In 1927 on 2nd June at Calcutta the Sangha was formally registered Under Society Act XII of 1860.
          </p>

          {/* PM Modi Highlight Box */}
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg my-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-800 font-medium italic">
              Honourable Prime Minister Shri Narendra Modi addresses Centenary Celebrations of Bharat Sevashram Sangha.
            </p>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
            <p>
              The Sangha gradually grew in size and stature as the spiritual aspirants started joining at the spiritual influence of Acharya Swami Pranavanandaji Maharaj. The philanthropic and humanitarian activities of the Sangha have become manifold and stretched cutting across the length and breadth of the country. Initially Relief Works by rescuing people from misery and providing them with food and essential commodities in various natural calamities such as flood, famine, draught etc. That drew the attention of the masses and people from all walks of life started helping the Sangha with financial contribution by enabling to continue rendering humanitarian services to the nation in need. 
            </p>
            <p>
              Naturally several branches of the Sangha established in different parts of the country and people began to come in contact of the holy selfless monks of the Sangha to quench their spiritual thirst also. With the direct involvement of hundreds of monks, the Sangha has tirelessly been serving the nation in various means. Gradually Charitable Dispensaries, Mobile Medical Units, Students’ Home, Schools, Colleges, Hospitals, Libraries, Vocational Training Centres, Gymnasiums, Tribal Welfare Centres opened in various centres and sub-centres beside regular performance of Guru Puja, Aarti, Hawan, Meditation, Spiritual Initiation, Annual Functions.
            </p>
            <p>
              To make available the Indian cultural tradition and heritage to the Indian Diaspora abroad, the Sangha established centres in London, New York, New Jersey, Los Angeles, Chicago, Guyana, Trinidad, Kathmandu, Suva, Dhaka, Khulna, Madaripur, Nagaon etc.
            </p>
            <p className="font-medium text-gray-800 border-l-4 border-blue-500 pl-4 bg-blue-50/50 py-3 pr-3 rounded-r-lg">
              Thus the Sangha following the footsteps and guiding principles of its founder and great spiritual Master has become a centre for manifestation of human excellence. People irrespective of cast, colour or creed can join this divine organization to help themselves and others too to be blessed with the divine power for eternal peace and prosperity.
            </p>
          </div>
        </section>

        {/* Ideology Section */}
        <section className="bg-gradient-to-br from-[#004b87] to-blue-900 text-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
            <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2zm0 4l7.5 15h-15L12 6z"/></svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 border-b border-blue-400/30 pb-4 inline-block">
            Ideology Behind the Name
          </h2>
          <p className="leading-relaxed text-blue-50 text-justify mb-6 text-sm md:text-base">
            In the year 1923 on the auspicious Maghipurnima day, in a gathering of the Brahmacharins and sacrificing workers, in the hermitage of Bajitpur (Now in Bangladesh), the epithet <strong>Bharat Sevashram Sangha</strong> was suggested and adopted by the Acharya (Swami Pranavanandaji Maharaj) as the appropriate denomination of his Organisation. The ideology behind the epithet, as explained by the Acharya was as follows:
          </p>
          <ul className="space-y-4 text-blue-50 text-sm md:text-base leading-relaxed ml-4 mb-8">
            <li><span className="text-orange-400 font-bold">Bharat</span> indicates that the Sangha’s primary object is emancipation of the Indian people on the basis of its eternal ideals.</li>
            <li><span className="text-orange-400 font-bold">Seva</span> imports the idea that the Sangha includes those who are true servants of the nation and who have dedicated their lives to the service of the people – physical, mental, moral and spiritual.</li>
            <li><span className="text-orange-400 font-bold">Ashrama</span> will at once suggest the ideals of the ancient ‘Varnashrama’ system which was based and disciplined on the ideals and practice of renunciation, self-control, truth and continence.</li>
            <li><span className="text-orange-400 font-bold">Sangha</span> means organisation; the Sangha will be a living organism, the Acharya himself being the life and soul and all the sacrificing and devoted children being its different limbs.</li>
          </ul>
          <p className="text-sm text-blue-200">
            For more information please visit our website: <a href="https://www.bharatsevashramsangha.org/" target="_blank" rel="noreferrer" className="text-orange-400 hover:text-orange-300 underline underline-offset-4">www.bharatsevashramsangha.org</a>
          </p>
        </section>

        {/* Swami Pranavanandaji Maharaj Section */}
        <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Swami Pranavanandaji Maharaj</h2>
            <p className="text-orange-600 font-medium">Celebrating 125th Advent Anniversary (1896 - 2020)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <blockquote className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500 shadow-sm">
              <p className="text-gray-800 font-serif italic text-lg mb-4">
                "Whenever virtue declines and vice prevails, I incarnate myself from age to age to secure the virtuous and to destroy the sinners."
              </p>
              <footer className="text-sm font-bold text-orange-600">— Shrimad Bhagavad Geeta</footer>
            </blockquote>

            <blockquote className="bg-blue-50 p-6 rounded-xl border-l-4 border-[#004b87] shadow-sm">
              <p className="text-gray-800 font-serif italic text-lg mb-4">
                "Students are the backbone of the nation. If their characters are not built on the very basis of self-sacrifice, self-control, adherence to truth and continence, then it is of no avail... India will take hold the seat of Master again in the world."
              </p>
              <footer className="text-sm font-bold text-[#004b87]">— Acharya Swami Pranavanandaji Maharaj</footer>
            </blockquote>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
            <p>
              Acharya Swami Pranavananda is such a universal nation-building prophet at the present age as compared to Lord Krishna, Lord Buddha and the like. His message is also universal and meant to guide the bewildered humanity in the path of security and peace.
            </p>
            <p>
              A glimpse into the life and nature of the Acharya will help us to comprehend the greatness of his divine personality. This spiritual Master is worshipped worldwide as the incarnation of Lord Shiva. The history behind it is that one Vishnucharan, a staunch devotee of Lord Shiva, being entangled in series of dangers and difficulties, undertook to propitiate Lord Shiva by a year-long penance and meditation for whole night without food and sleep. Lord Shiva being moved to pity, vouchsafed to Vishnucharan a boon that he would incarnate himself as his son. After this, a son was born to him on an auspicious Maghi Purnima on 29th January in 1896, Wednesday.
            </p>
            <p>
              The divine boy Vinod, as he was named, possessed by birth the nature of Shiva,– always calm and quiet, having little care for food or play. The meditative nature grew deeper as the boy became older; so much so that he could not properly attend his studies in school. At home also he would often pass whole night, unconscious of outside world, waking up only in the morning when someone knocked at the door.
            </p>
            <p>
              Thus went on his deep meditation and severe “Brahmacharya Sadhna,” till at last his diet became a handful of cooked rice and a few boiled potatoes and sleep was reduced to an hour only. Later on, he totally left off sleep for six long years at a stretch. At that time he would pass the whole night on the altar of penance in the cremation ground in meditation and spiritual trance.
            </p>
            <p>
              At last Lord Shiva unfolded himself in full-fledged power and grandeur and the Almighty will then began to work through the superhuman personality of the Acharya in 1917. Here was the inception of the Sangha.
            </p>
            <p>
              Acharya Srimat Swami Pranavanandaji Maharaj was born to Shri Vishnucharan & Sarda Devi at Bajitpur of Madaripur district in Bangladesh. After initiation at Gorakhpur Math by Yogiraj Baba Gambhirnathji into formal spiritual world in 1913 at the age of 16, he was known as Brahmchari Vinod... He declared– "This is the age of Universal Awakening, this is the age of Universal Unification, this is the age of Universal Assimilation, this is the age of Universal Emancipation." 
            </p>
            <p>
              In January, 1924 on the holy occasion of Kumbh Mela at Prayag Dham (Allahabad), Brahmachari Vinod embraced formal Sannyas from Swami Govindananda Giriji Maharaj and become known to all in the name of Acharya Swami Pranavanandaji Maharaj.
            </p>
            <p className="font-semibold text-gray-900 bg-gray-100 p-4 rounded-lg text-center">
              On 8th January in 1941 Acharydev left his mortal coil at Kolkata Ballygunge Head Office at 12.45am in a Yogic method.
            </p>
          </div>
        </section>

        {/* Sangha Vani Section */}
        <section className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center">
          <h2 className="text-3xl font-bold text-[#004b87] mb-8 inline-block relative">
            Sangha Vani
            <span className="absolute -bottom-2 left-1/2 w-12 h-1 bg-orange-500 -translate-x-1/2 rounded-full"></span>
          </h2>
          {/* Sangha Vani Image Placeholder */}
          <div className="w-full max-w-2xl mx-auto overflow-hidden rounded-xl shadow-md border border-gray-200">
            <img 
              src="/Ashram/sangh_vani.jpg" 
              alt="Sangha Vani" 
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* News & Events Section */}
        <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 border-b pb-4">BSS News & Events</h2>
          
          <div className="space-y-12">
            {/* Event 1 */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-bold text-[#004b87] mb-3">Bharat Sevashram Sangha, Delhi : Corona Virus lock-down Relief Work March 2020</h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                New Delhi branch of Bharat Sevashram Sangha has started its Relief Work by distributing cooked food among the poor and needy people in Delhi during the outbreak of dreaded Corona Virus and subsequent nationwide lock-down to contain the pandemic. As always, the Sangha monks and volunteers have been engaged under the supervision of Swamy Atmajnananandaji Maharaj, Secretary of Delhi Ashram of the Sangha. Cooked food is transported to different areas and being distributed at those places. Similar services are being extended in different parts of the country by the local branches of the Bharat Sevashram Sangha including Kolkata, Haridwar, Bankura, Faridabad.
              </p>
            </div>

            {/* Event 2 */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold text-[#004b87] mb-2">MAGHI PURNIMA CELEBRATIONS - 2022</h3>
              <p className="text-gray-600 mb-2">Celebrated 125th Advent Anniversary of Acharya Srimat Swami Pranavanandaji Maharaj on 9th February 2020.</p>
              <h3 className="text-lg font-bold text-[#004b87] mt-4">Shivratri celebration 2022.</h3>
            </div>

            {/* Event 3 */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl md:text-2xl font-bold text-[#004b87] mb-4">SRI SRI DURGA PUJA 2023</h3>
              {/* 2 Photos in Column */}
              <div className="flex flex-col gap-6 max-w-2xl mx-auto">
                <img src="/Ashram/durgaPuja1.jpg" alt="Durga Puja 2023 1" className="w-full h-auto rounded-xl shadow-md border border-gray-200" />
                <img src="/Ashram/durgaPuja2.jpg" alt="Durga Puja 2023 2" className="w-full h-auto rounded-xl shadow-md border border-gray-200" />
              </div>
            </div>

            {/* Event 4 */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl md:text-2xl font-bold text-[#004b87] mb-4">ANNUAL FUNCTION - 2024</h3>
              <p className="text-gray-600 leading-relaxed text-justify mb-6">
                Annual Function is organised on the occasion of Deepavali. Holy monks of the Sangha from different centres of the country do attend the programme. Spiritual discourses by the holy monks and dignitaries, Bhajan, Vedic Havan and Sri Sri Guru Puja & Aarti form the core of the celebration. A cultural programme befitting the occasion is presented by the students of Pranavananda Internation School. Prasad is distributed after the programme. Spiritual Initiation is given by the senior revered Swamijis to the devotees having inclination to live a spiritual life.
              </p>
              {/* 3 Photos in Column */}
              <div className="flex flex-col gap-6 max-w-2xl mx-auto">
                <img src="/Ashram/AnnualFunction.jpg" alt="Annual Function 1" className="w-full h-auto rounded-xl shadow-md border border-gray-200" />
                <img src="/Ashram/kaliPuja2024.jpg" alt="Annual Function 2" className="w-full h-auto rounded-xl shadow-md border border-gray-200" />
                <img src="/Ashram/MaghiPurnima.jpg" alt="Annual Function 3" className="w-full h-auto rounded-xl shadow-md border border-gray-200" />
              </div>
            </div>
          </div>
        </section>

        {/* Activities List Section */}
        <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
          <h2 className="text-3xl font-bold text-[#004b87] mb-6">Activities</h2>
          <p className="text-gray-600 mb-6 text-lg">
            For the past one hundred years, the activities of Bharat Sevashram Sangha spread in leaps and bounds. The manifold activities of the Sangha can be summed up in the field of:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            {[
              "Spirituality", "Education", "Healthcare", "Upliftment of the downtrodden",
              "Tribal Welfare", "Reformation of the Holy Places", "Relief Work during natural calamities",
              "Vocational Training centres for the unemployed", "Publication of books and magazine on spirituality",
              "Propagation of Indian Culture and Tradition in India and abroad"
            ].map((activity, idx) => (
              <li key={idx} className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                <span className="text-orange-500 font-bold mt-0.5">✓</span>
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* An Appeal / Donation Section */}
        <section className="bg-orange-50 rounded-2xl shadow-xl p-8 md:p-12 border-2 border-orange-200 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">An Appeal</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
            <p>
              The manifold activities of Bharat Sevashram Sangha are spreading in fast pace. Besides spiritual activities, the Sangha serves the humanity in different fields - Education, Healthcare, Relief Work during natural disaster, poor feeding, Leprosy Eradication, Tribal Welfare and many more with utmost devotion.
            </p>
            <p>
              A grand Temple is very much required and planned to give proper look and shape of an Ashram. Devotees residing around the Ashram are also in search of such a place of worship and meditation. A huge amount of fund is needed to build such grand Temple with Prayer Hall.
            </p>
            <p className="font-semibold text-gray-900">
              So we earnestly invite your active participation with generous contribution to transform this divine task into reality.
            </p>
            <p>
              For the maintenance of educational and charitable works, the Sangha is in need of patronage and financial backing from all generous people. Bharat Sevashram Sangha appeals to generous public, to co-operate in its multifarious activities... Persons having faith in the aims and objectives of the Sangha are requested to contribute liberally to the Sangha’s charitable funds.
            </p>
          </div>

          {/* Bank Details Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-xl mx-auto border-t-4 border-[#004b87]">
            <h3 className="text-xl font-bold text-[#004b87] mb-6 uppercase tracking-wider border-b pb-4">Bank Details</h3>
            <div className="space-y-3 text-left">
              <p className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span className="text-gray-500">Account Name:</span>
                <strong className="text-gray-900">BHARAT SEVASHRAM SANGHA</strong>
              </p>
              <p className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span className="text-gray-500">A/c No:</span>
                <strong className="text-gray-900 text-lg tracking-wider">82272200033968</strong>
              </p>
              <p className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span className="text-gray-500">IFSC Code:</span>
                <strong className="text-gray-900">CNRB0018227</strong>
              </p>
              <p className="flex justify-between items-center pt-1">
                <span className="text-gray-500">Bank:</span>
                <strong className="text-gray-900">CANARA BANK, WAZIRPUR, GURUGRAM</strong>
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-xs text-orange-600 font-semibold mb-4 bg-orange-100 py-2 rounded">
                Donations to Bharat Sevashram Sangha are exempted from income tax U/s 80G of I.T. act.
              </p>
              <p className="text-sm text-gray-600">
                Please contact us by email:<br/>
                <a href="mailto:gurgaonbss@gmail.com" className="text-[#004b87] font-semibold hover:underline">gurgaonbss@gmail.com</a> / <a href="mailto:info@bssdelhi.com" className="text-[#004b87] font-semibold hover:underline">info@bssdelhi.com</a>
              </p>
            </div>
          </div>
        </section>

        {/* Final Photo After Contact Section */}
        <section className="flex justify-center pt-8">
          <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="/Ashram/BharatSeva.jpg" 
              alt="Bharat Sevashram Sangha Closing" 
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

      </div>
    </div>
  );
};

export default Ashram;