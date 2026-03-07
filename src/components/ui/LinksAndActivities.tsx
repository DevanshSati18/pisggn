import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const LinksAndActivities = () => {
  // Activities Array
  const activities = [
    { id: 1, date: "15", month: "Jan", day: "Mon", title: "Annual Sports Day" },
    { id: 2, date: "22", month: "Feb", day: "Thu", title: "Science Exhibition 2026" },
    { id: 3, date: "05", month: "Mar", day: "Wed", title: "Cultural Fest 'Utsav'" },
    { id: 4, date: "10", month: "Apr", day: "Fri", title: "Parent-Teacher Meeting" },
    { id: 5, date: "18", month: "May", day: "Sat", title: "Summer Camp Registration" },
    { id: 6, date: "25", month: "Jun", day: "Thu", title: "Inter-School Debate Competition" },
    // You can easily add more objects here
  ];

  // Quick Links Array
  const quickLinks = [
    { label: 'Mandatory Public Disclosure', path: '/mandatory' },
    { label: 'Fee Payment', path: '/onlinefee' },
    { label: 'Faculty', path: '/faculty' },
    { label: 'Library Management System', path: '/library' }, 
    { label: 'School Calendar', path: '/calendar' },
    { label: 'Download', path: '/download' },
  ];

  // --- Auto-Scroll Logic ---
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  // We duplicate the activities array so the scroll can loop seamlessly
  const duplicatedActivities = [...activities, ...activities];

  useEffect(() => {
    const scrollElement = scrollRef.current;
    let animationFrameId: number;
    let accumulatedScroll = 0;
    
    // Adjust this value to make the auto-scroll faster or slower (e.g., 0.5 or 1.5)
    const scrollSpeed = 1; 

    const scroll = () => {
      if (scrollElement && !isHovering) {
        accumulatedScroll += scrollSpeed;
        
        // Only update scrollTop when accumulated scroll is at least 1 pixel for smoothness
        if (accumulatedScroll >= 1) {
          scrollElement.scrollTop += Math.floor(accumulatedScroll);
          accumulatedScroll -= Math.floor(accumulatedScroll);
        }

        // Seamless Infinite Loop: If we've scrolled past the first set of items, snap back to 0
        // scrollHeight / 2 represents the exact height of the first original array
        if (scrollElement.scrollTop >= scrollElement.scrollHeight / 2) {
          scrollElement.scrollTop = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    // Cleanup animation on component unmount
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovering]);


  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8 items-stretch">
        
        {/* Left Side: Quick Links (Upgraded Premium UI) */}
        <div className="w-full md:w-1/3 bg-white shadow-xl rounded-2xl p-6 border-t-[5px] border-orange-500 flex flex-col relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-50 rounded-full blur-2xl pointer-events-none"></div>
          
          <h2 className="text-2xl font-bold text-[#004b87] mb-6 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/></svg>
            Quick Links
          </h2>
          
          <div className="flex flex-col gap-3 flex-1 relative z-10">
            {quickLinks.map((link, idx) => (
              <Link 
                key={idx}
                to={link.path}
                className="group flex items-center justify-between px-5 py-4 rounded-xl bg-gray-50/50 hover:bg-gradient-to-r hover:from-orange-50 hover:to-white border border-gray-100 hover:border-orange-200 shadow-sm hover:shadow transition-all duration-300 relative overflow-hidden"
              >
                {/* Animated left border on hover */}
                <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center rounded-r-full"></span>
                
                <span className="font-semibold text-gray-700 group-hover:text-orange-600 transition-colors">
                  {link.label}
                </span>
                
                {/* Arrow Icon that slides right on hover */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-orange-500 transform group-hover:translate-x-1 transition-all duration-300">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side: Current Activities */}
        <div className="w-full md:w-2/3 bg-white shadow-xl rounded-2xl p-6 border-t-[5px] border-[#004b87] flex flex-col relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-50 rounded-full blur-2xl pointer-events-none"></div>

          <h2 className="text-2xl font-bold text-[#004b87] mb-6 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#004b87]"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Current Activities
          </h2>
          
          {/* Auto-Scrollable Container */}
          {/* Events pause when hovering and resume when leaving */}
          <div 
            className="flex-1 overflow-y-auto max-h-90 min-h-0 pr-3 custom-scrollbar relative z-10"
            ref={scrollRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            // Allows manual touch scrolling on mobile to override smoothly
            onTouchStart={() => setIsHovering(true)}
            onTouchEnd={() => setIsHovering(false)}
          >
            <div className="flex flex-col gap-4">
              {/* Map over the DUPLICATED array to create the infinite effect */}
              {duplicatedActivities.map((activity, idx) => (
                <div 
                  key={`${activity.id}-${idx}`} // Unique key for duplicated items
                  className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all cursor-pointer group"
                >
                  
                  {/* Date Block */}
                  <div className="flex flex-col items-center justify-center bg-blue-50 text-[#004b87] group-hover:bg-[#004b87] group-hover:text-white transition-colors duration-300 rounded-lg w-16 h-16 shrink-0 shadow-sm border border-blue-100">
                    <span className="text-sm font-bold">{activity.month}</span>
                    <span className="text-xl font-black leading-none my-0.5">{activity.date}</span>
                    <span className="text-[10px] tracking-wider uppercase font-semibold">{activity.day}</span>
                  </div>
                  
                  {/* Title */}
                  <div className="flex-1 pl-5 text-gray-700 font-semibold line-clamp-2 group-hover:text-orange-600 transition-colors">
                    {activity.title}
                  </div>

                  {/* Subtle right-facing indicator */}
                  <div className="pr-2 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
          
          {/* Fade overlays to make the scroll look seamless at top and bottom */}
          <div className="absolute top-[80px] left-0 right-3 h-8 bg-gradient-to-b from-white to-transparent pointer-events-none z-20"></div>
          <div className="absolute bottom-6 left-0 right-3 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none z-20"></div>

        </div>

      </div>
      
      {/* Custom Scrollbar Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f8fafc; 
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1; 
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #fb923c; 
        }
      `}</style>
    </section>
  );
};

export default LinksAndActivities;