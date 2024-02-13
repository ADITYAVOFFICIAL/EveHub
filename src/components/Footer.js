import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Brand from './Brand';
import { footerLinks } from '../static/footerLinks';

function Footer() {
  const location = useLocation();
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    // Simulate fetching the visitor count from an API or database
    // Replace this with actual logic to get the visitor count
    const fetchVisitorCount = async () => {
      // Example: Fetching visitor count from an API
      // const response = await fetch('api/visitorCount');
      // const data = await response.json();
      // setVisitors(data.visitorCount);
      
      // Simulated visitor count increment
      setVisitors(visitors + 1);
    };

    // Call the fetchVisitorCount function
    fetchVisitorCount();
  }, [location.pathname]); // Execute the effect whenever the location changes

  return (
    <div className='flex flex-col gap-4 md:gap-8 py-12 bg-secondary text-neutral-200 font-poppins border-t border-neutral-400' style={
      location.pathname !== "/"
        ? { borderRadius: "25px 25px 0 0" }
        : {}
    }>
      <ul className='md:w-full flex flex-row flex-wrap items-center justify-center gap-4'>
        {footerLinks.map((link, index) =>
          <li key={index} className='border flex items-center justify-center rounded-full p-2 text-2xl hover:scale-125 transition-all'>
            <Link className='' target={'_blank'} to={link.link} title={link.title}>{link.icon}</Link>
          </li>
        )}
      </ul>
      <div>
        <p className='text-neutral-300 text-xs md:text-sm text-center'>&copy; EveHub {new Date().getFullYear()} | All rights reserved | <Link className='hover:text-accent hover:underline' target='_blank' to='https://github.com/ADITYAVOFFICIAL'>ADITYA VERMA</Link> | <Link className='hover:text-accent hover:underline' to='/dashboard'>For Organisers</Link></p>
        <p className='text-neutral-300 text-xs md:text-sm text-center' style={{fontWeight:"bold", paddingTop:"20px"}}>Total Visitors: {visitors}</p>
      </div>
    </div>
  );
}

export default Footer;
