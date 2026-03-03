import React from 'react';

const LinksAndActivities = () => {
  const activities = [
    { id: 1, date: "15", month: "Jan", day: "Mon", title: "Annual Sports Day" },
    { id: 2, date: "22", month: "Feb", day: "Thu", title: "Science Exhibition 2026" },
    { id: 3, date: "05", month: "Mar", day: "Wed", title: "Cultural Fest 'Utsav'" },
    { id: 4, date: "10", month: "Apr", day: "Fri", title: "Parent-Teacher Meeting" },
    { id: 5, date: "18", month: "May", day: "Sat", title: "Summer Camp Registration" },
    { id: 6, date: "25", month: "Jun", day: "Thu", title: "Inter-School Debate Competition" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Added items-stretch so both columns are forced to the exact same height */}
      <div className="flex flex-col md:flex-row gap-8 items-stretch">
        
        {/* Left Side: Quick Links */}
        {/* Removed 'h-fit' and added 'flex flex-col' so it stretches dynamically */}
        <div className="w-full md:w-1/3 bg-white shadow-xl rounded-xl p-6 border-t-4 border-orange-500 flex flex-col">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Quick Links</h2>
          {/* flex-1 pushes the content to fill the space if the right side is taller */}
          <div className="flex flex-col gap-3 flex-1">
            {['Faculty', 'Carrier', 'Library Management System', 'School Calendar', 'Download'].map((link, idx) => (
              <button 
                key={idx}
                className="w-full text-left px-4 py-3 rounded-lg bg-gray-50 hover:bg-orange-50 hover:text-orange-600 transition-colors font-medium border border-gray-200 shadow-sm"
              >
                {link}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Current Activities */}
        <div className="w-full md:w-2/3 bg-white shadow-xl rounded-xl p-6 border-t-4 border-blue-600 flex flex-col">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Current Activities</h2>
          
          {/* Added flex-1 and min-h-0 to ensure the scroll container respects the flex boundaries */}
          <div className="flex-1 overflow-y-auto max-h-[350px] min-h-0 pr-2 custom-scrollbar">
            <div className="flex flex-col gap-4">
              {activities.map((activity, idx) => (
                <div key={idx} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  {/* Date Block */}
                  <div className="flex flex-col items-center justify-center bg-blue-100 text-blue-800 rounded-md w-16 h-16 shrink-0">
                    <span className="text-sm font-bold">{activity.month}</span>
                    <span className="text-xl font-black leading-none">{activity.date}</span>
                    <span className="text-xs uppercase">{activity.day}</span>
                  </div>
                  
                  {/* Title */}
                  <div className="flex-1 px-4 text-gray-700 font-semibold line-clamp-2">
                    {activity.title}
                  </div>
                  
                  {/* Read More Button */}
                  <button className="text-sm bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors shrink-0 shadow-sm">
                    Read More
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Centered View All Button */}
          <div className="mt-6 text-center border-t border-gray-200 pt-4">
            <button className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-6 rounded-full transition-colors shadow-md">
              View All Activities
            </button>
          </div>
        </div>

      </div>
      
      {/* Optional: Add this to your index.css to make the scrollbar look nice */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1; 
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1; 
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8; 
        }
      `}</style>
    </section>
  );
};

export default LinksAndActivities;