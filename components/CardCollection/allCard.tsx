'use client'
import { ScrapedData, ScrapedLeetCodeData } from "@/types";

import { Card }  from '../gfgCardcom';
import { LeetCodeCard } from "../leetcodeCard"

export const GFGCard = (
    {gotRank ,
     username, 
     currentStreak,
     totalStreak,
     codingScore,
     problemSolved,
     contestRating} : ScrapedData ) => {

        return <div>
            <Card 
                gotRank={gotRank}
                username={username}
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
      username,
      iconGif
    } : ScrapedLeetCodeData
) => {
     
    return (
        <div>
           <LeetCodeCard
                rank={rank}
                username={username}
                iconGif={iconGif} name={""} iconGifBackground={""}           />
        </div>
    )
}