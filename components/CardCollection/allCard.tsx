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
      iconGif,
      activeYears,
      streak,
      totalActiveDays,
      solved,
      level,
      Rating,
      GlobalRanking
    } : ScrapedLeetCodeData
) => {
     
    return (
        <div>
           <LeetCodeCard
                rank={rank}
                leetusername={leetusername}
                iconGif={iconGif}
                 name={""}
                  iconGifBackground={""}
                  activeYears={activeYears}
                  streak={streak}
                  totalActiveDays={totalActiveDays}
                  solved={solved}
                  level={level}
                  Rating={Rating}
                  GlobalRanking={GlobalRanking}
                  />
        </div>
    )
}