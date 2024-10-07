'use client'

import { ModeToggle } from "../theme/mode"
import { SidebarOpening } from "./sidebaropening"

export const Navbar = () => {

      return <div>

      <div className="border border-slate-400/20 bg-slate-900 text-white items-center p-1 rounded ">
         <div className="flex justify-between px-8">
              <div className="flex items-center">
                <div className="fixed top-0 left-0 h-full w-64 md:pt-10 ">
                <SidebarOpening />
              </div>
              
              </div>
              <div className="flex justify-center p-2">
                 CodLio
              </div>
              <div >
                  <ModeToggle />
              </div>
         </div>

         </div> 

      </div> //return div
}