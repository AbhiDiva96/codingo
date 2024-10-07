'use client'

import { ScrapedData, ScrapedLeetCodeData } from "@/types"
import { url } from "inspector"
import Image from "next/image"
import { useState } from "react"
 
 export const LeetCodeCard = (
     {rank,
     leetusername,
    //  level,
     iconGif,
    //  iconGifBackground,
    //  totalMedal,
    //  competitionMedal,
    //  dailyChallengeMedal,
    //  streak,
    //  GlobalRanking,
    //  Rating,
    //  totalActiveDays,
    //  solved,
    //  activeYears,

      } : ScrapedLeetCodeData
) => {


    return <div> 

         <div className="flex justify-center  relative overflow-hidden">
            {/* Top Right Circle */}
          
            <div className="relative z-10 isolate aspect-video w-96 rounded-xl bg-yellow-400/30 dark:bg-yellow-600/30 shadow-lg backdrop-blur-md border border-yellow-300/20 dark:border-yellow-500/30 ring-1 ring-yellow-500/20 dark:ring-yellow-700/30">
        
                <div className="flex justify-between px-4 pt-2">
                    <div>
                        <div className="inline-block border-b-2 border-white w-10 pb-1">
                            {rank}
                        </div>
                        <div>
                            Rank
                        </div>
                    </div>
                    <div>
                        {leetusername}
                    </div>
                    <div>
                        <Image 
                            src={iconGif as string}
                            alt="level"
                            width={50}
                            height={50}
                        />
                    </div>
                </div>

                <div className="sticky top-[100vh] px-4">
                    <div>
                        all list
                    </div>
                    <div className="flex justify-center border-y-2">
                        Active Year: 2021 2022 2023 2024 2022 
                    </div>
                </div>
            </div>
        </div>
   </div>

 }