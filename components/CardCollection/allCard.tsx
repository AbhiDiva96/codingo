'use client'
import { ScrapedData } from "@/types"
import { Card } from "../card"

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

export const LeetCodeCard = () => {
     
    return (
        <div>
            <h1>Leetcode</h1>
        </div>
    )
}