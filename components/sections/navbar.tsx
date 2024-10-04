'use client'

import { ModeToggle } from "../theme/mode"

export const Navbar = () => {

      return <div>

      <div className="border items-center p-1 rounded ">
         <div className="flex justify-between px-8">
              <div className="flex items-center">
                 Codingo
              </div>
              <div >
                  <ModeToggle />
              </div>
         </div>

         </div> 

      </div> //return div
}