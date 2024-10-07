'use client';

import { useState, useRef, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import { SideBar } from './sidebar';
export const SidebarOpening = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null); // Specify the type of the ref

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev); // Toggle the sidebar state
  };

  // Close sidebar if clicking outside of it
  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setSidebarOpen(false); // Close the sidebar if clicked outside
    }
  };

  // Attach event listener for clicks outside the sidebar
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Toggle Button for Mobile View */}
      <button
        onClick={toggleSidebar}
        className="block w-fit md:hidden border border-gray-400/20 rounded text-white bg-gray-800 z-50 p-2 pt-3"
      >
        {/* Change button text or icon based on the sidebar state */}
        {sidebarOpen ? 'Close' : <MenuIcon />}
      </button>

      <div className="flex pt-3">
        {/* Sidebar */}
        <div
          ref={sidebarRef} // Attach ref to the sidebar
          className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white p-4 transform transition-transform duration-300 ease-in-out z-40 
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 md:w-5/5`}
        >
          {/* Close Button Inside Sidebar for Mobile View */}
          <button
            className="block md:hidden text-right text-white mb-4"
            onClick={toggleSidebar} // Close the sidebar on button click
          >
            <CancelIcon fontSize='large' />
          </button>
          
          {/* Sidebar Content */}
          <div className="w-32">
            <SideBar /> 
          </div>
        </div>
      </div>
    </div>
  );
};
