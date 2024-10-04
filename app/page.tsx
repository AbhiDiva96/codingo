'use client'

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import { Content } from "@/components/sections/content";
import { SideBar } from "@/components/sections/sidebar";

import { useState } from "react";

export default function Home() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    function toggleSidebar() {
         setSidebarOpen(!sidebarOpen);
    }

  return (

    
      <div className="relative min-h-screen pt-2">
      {/* Toggle Button for Mobile View */}
      <button
        onClick={toggleSidebar}
        className="block md:hidden border rounded p-2 text-white rounded"
      >
        {sidebarOpen ? "close" : <KeyboardDoubleArrowRightIcon/>}
      </button>

      <div className="flex">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full bg-gray-800 text-white p-4 transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-1/5`}
        >
          <button
            className="block md:hidden text-right text-white mb-4"
            onClick={toggleSidebar}
          >
            &times; {/* Close button (cross) */}
          </button>
          <div className='w-48'>
              <SideBar/>
            </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 ">
          <div>
            <Content/>
          </div>
        </div>
      </div>
    </div>
  );
}
