'use client'

import { ScrapedData } from "@/types"

 
 export const Card = (
    {gotRank ,
     username, 
     currentStreak,
     totalStreak,
     codingScore,
     problemSolved,
     contestRating
    } : ScrapedData) => {

    return <div>

          <div className="flex justify-center ">
               <div >
            <div className="relative z-10 isolate aspect-video w-96 rounded-xl bg-green-400 dark:bg-green-600/30 shadow-lg backdrop-blur-md border border-green-300/20 dark:border-green-500/30 ring-1 ring-green-500/20 dark:ring-green-700/30">
                       <div className="flex justify-between px-4 pt-2">
                           <div>
                            Rank: 
                            {gotRank}
                           </div>
                           <div>
                            {username}
                           </div>
                           <div>
                            <div className="flex justify-center inline-block border-b-2 border-white w-10 pb-1">
                                {currentStreak}
                            </div>
                            <div className="flex justify-center">
                              {totalStreak}
                            </div>
                           </div>
                       </div>

                       <div className="flex justify-between  sticky top-[100vh] px-4 py-2">
                           <div className="">
                             <div className="flex justify-center">
                            { codingScore}
                             </div>
                              <div className="text-sm">
                                Score
                              </div>
                           </div>
                           <div>
                             <div className="flex justify-center">
                              { problemSolved}
                             </div>
                              <div className="text-sm">
                                Que Solved
                              </div>
                           </div>
                             <div>
                              <div className="flex justify-center">
                               {contestRating}
                             </div>
                              <div className="text-sm">
                                Rating
                              </div>
                           </div>

                           <div>
                              <div className="flex justify-center">
                               {contestRating}
                             </div>
                              <div className="text-sm">
                                Level
                              </div>
                           </div>
                           
                             <div>
                              <div className="flex justify-center">
                               {contestRating}
                             </div>
                              <div className="text-sm">
                                Global Rank
                              </div>
                           </div>
{/* 
                             <div>
                              <div className="flex justify-center">
                               {contestRating}
                             </div>
                              <div className="text-sm">
                                Attended
                              </div>
                           </div> */}

                           

                           
                        
                         

                       </div>
                 </div>
               </div>
          </div>
    </div>
 }