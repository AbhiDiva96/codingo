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
                    <div className="isolate aspect-video w-96 rounded-xl bg-green-500/50 shadow-lg ring-1 ring-black/5">
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