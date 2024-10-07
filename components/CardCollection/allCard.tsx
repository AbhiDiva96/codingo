'use client'
import { ScrapedData, ScrapedLeetCodeData } from "@/types";

import { Card }  from '../gfgCardcom';
import { LeetCodeCard } from "../leetcodeCard"

export const GFGCard = (
    {gotRank ,
     gfgusername, 
     currentStreak,
     totalStreak,
     codingScore,
     problemSolved,
     contestRating} : ScrapedData ) => {

        return <div>
            <Card 
                gotRank={gotRank}
                gfgusername={gfgusername}
                currentStreak={currentStreak}
                totalStreak={totalStreak}
                codingScore= {codingScore}
                problemSolved={problemSolved}
                contestRating={contestRating}
                /> 
         </div>

}

export const LeetCodeCards = (
    {
      rank,
      leetusername,
      iconGif
    } : ScrapedLeetCodeData
) => {
     
    return (
        <div>
           <LeetCodeCard
                rank={rank}
                leetusername={leetusername}
                iconGif={iconGif} name={""} iconGifBackground={""}           />
        </div>
    )
}