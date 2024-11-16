'use client'

import { ScrapedLeetCodeData } from "@/types"
import Image from "next/image"
import { useEffect, useState } from "react"
 
 export const LeetCodeCard = (
     {rank,
     leetusername,
      level,
     iconGif,
     iconGifBackground,
    //  totalMedal,
    //  competitionMedal,
    //  dailyChallengeMedal,
     streak,
      GlobalRanking,
      Rating,
      totalActiveDays,
      solved,
     activeYears,

      } : ScrapedLeetCodeData
) => {

    const [isImage, setIsImage] = useState(false);

  // Function to check if the level is "No level" and set the state
  useEffect(() => {
  const getImage = () => {
    if (level === 'No level' || !level) {
      setIsImage(false);
    } else {
      setIsImage(true);
    }
  };
  getImage();
}, [level]);

   

    return <div> 

         <div className="flex justify-center ">
            {/* Top Right Circle */}
          
            <div className="relative z-10 isolate aspect-video w-96 md:w-[100vh] rounded-xl bg-yellow-400/30 dark:bg-yellow-600/30 shadow-lg backdrop-blur-md border border-yellow-300/20 dark:border-yellow-500/30 ring-1 ring-yellow-500/20 dark:ring-yellow-700/30">
        
                <div className="flex justify-between px-4 pt-2">
                    <div>
                        <div className=" inline-block border-white w-10 pb-1">
                    
                        <div className="flex justify-center"
                            style={{
                                    backgroundImage: `url(${iconGifBackground})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                        >
                        <Image 
                            src={iconGif as string}
                            alt="level"
                            width={50}
                            height={50}
                        />
                        </div>
                           <div className="flex justify-center">
                            Badge
                           </div>
                       </div>
  
                    </div>

                    <div>
                        {leetusername}
                    </div>

                <div>
                        <div>
                            {!isImage ? (
                                <p>No Level</p>
                            ) : (
                                <div className="flex justify-center" 
                                   style={{
                                    backgroundImage: `url(${iconGifBackground})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                                >
                                <Image
                                    src={level as string} // Make sure "level" is a valid image URL here.
                                    alt="level"
                                    width={50}
                                    height={50}
                                />
                                </div>
                            )}
                            </div>
                     <div className="flex justify-center">
                        Level
                     </div>
                     </div>
                </div>

                <div className="sticky top-[100vh] px-4">
                    <div className="flex justify-center text-sm gap-2">
                         <div className="">
                            <div className="border-b-2 flex justify-center">
                                {streak}
                          </div> 
                          <div className="flex justify-center">
                            Steak
                          </div>
                         </div>

                         <div className="">
                             <div className="border-b-2 flex justify-center">
                                {totalActiveDays}
                             </div>
                             <div className="flex justify-center">
                                TotalActive
                             </div>
                         </div>

                         
                         <div className="">
                             <div className="border-b-2 flex justify-center">
                                {solved}
                             </div>
                             <div className="flex justify-center">
                                Solved
                             </div>
                         </div>
                            
                         <div className="">
                             <div className="border-b-2 flex justify-center">
                                {(Rating)?.toString().split('.')[0]}
                             </div>
                             <div className="flex justify-center">
                                Rating
                             </div>
                         </div>


                         <div className="">
                             <div className="border-b-2 flex justify-center">
                                {GlobalRanking}
                             </div>
                             <div className="flex justify-center">
                                G-Rank
                             </div>
                         </div>

                         
                         <div className="">
                             <div className="border-b-2 flex justify-center">
                               {rank}
                             </div>
                             <div className="flex justify-center">
                               Rank
                             </div>
                         </div>
                         
                    </div>
                    <div className="flex justify-center text-sm border-y-2">
                        Active : {activeYears?.join(' ')}
                    </div>
                </div>
            </div>
        </div>
   </div>

 }