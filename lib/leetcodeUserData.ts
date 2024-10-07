import axios from 'axios';
import { ApolloClient, InMemoryCache } from '@apollo/client';

import { ScrapedLeetCodeData } from '@/types';
import { GET_USER_CONTEST, GET_USER_DATA, GET_USER_SOLVED } from './graphql/leetcodegraphQl';
import { Badge } from 'lucide-react';

const client = new ApolloClient({
    uri: 'https://leetcode.com/graphql',
    cache: new InMemoryCache()
   })

   type BadgeName = "Annual Badge" | "Guardian" | "Knight"; 
 

export async function scrapeLeetCode(username: string ) {
   // Implement LeetCode scraping logic here

   const scrapeLeetcodeData : ScrapedLeetCodeData = {
        leetusername: username,
        name : "",
        totalMedal: 0,
        rank: 0,
        solved:0,
         activeYears: [],
         streak: 0,
         totalActiveDays:0,
         dailyChallengeMedal:0,
         competitionMedal:0,
        GlobalRanking: 0,
        Rating: 0,
        level:'',
        iconGif:'',
        iconGifBackground: '',
   }

    try {
      
            const { data: userData } = await client.query({
        query: GET_USER_DATA,
        variables: { username },
      });

      const { data: contestData } = await client.query({
        query: GET_USER_CONTEST,
        variables: { username },
      });

      const {data : solvedData} = await client.query({
        query: GET_USER_SOLVED,
        variables: {username},
      })

  
if (solvedData && solvedData.matchedUser) {
  const totalSolved = solvedData.matchedUser.submitStatsGlobal;
  const submissionStats = totalSolved.acSubmissionNum || [];

  const difficultyCounts = submissionStats.reduce((acc:any, item : any) => {
    acc[item.difficulty] = item.count;
    return acc;
  }, {});

  scrapeLeetcodeData.solved = difficultyCounts.All;

}


   

    // Extract data from the response
    if (userData && userData.matchedUser) {
      const user = userData.matchedUser;
      scrapeLeetcodeData.name = user.profile.realName || "";

      const medals = user.badges || [];
      let competitionMedals = 0;
      let dailyChallengeMedals = 0; // For example, to track "Daily Coding Challenge" badges

      // Loop through the badges array and check for different badge names
      medals.forEach((badges : {name: BadgeName}) => {
         if(badges.name === "Annual Badge" || badges.name === "Guardian" || badges.name === "Knight"){
            competitionMedals++;
         }else{
            dailyChallengeMedals++;
         }
         });

    const getFirstElement = medals[0];
    const getFirstIconGif = getFirstElement.medal.config.iconGif;
    const getFirstGifbackground = getFirstElement.medal.config.iconGif;
    scrapeLeetcodeData.iconGif = getFirstIconGif;
    scrapeLeetcodeData.iconGifBackground = getFirstGifbackground;
  
          
    
    
                          
       scrapeLeetcodeData.competitionMedal = competitionMedals;
       scrapeLeetcodeData.dailyChallengeMedal = dailyChallengeMedals;
      scrapeLeetcodeData.totalMedal = medals.length;
      scrapeLeetcodeData.rank = user.profile.ranking;

       
      //Annual Badge Guardian  Daily Coding Challenge Knight Study Plan Award
      
      // Extract calendar data
      if (user.userCalendar) {
        scrapeLeetcodeData.activeYears = user.userCalendar.activeYears || [];
        scrapeLeetcodeData.streak = user.userCalendar.streak;
        scrapeLeetcodeData.totalActiveDays = user.userCalendar.totalActiveDays;

      }
    
    }

    if(contestData && contestData.userContestRanking){
      const contests = contestData?.userContestRanking || [];
      scrapeLeetcodeData.Rating = contests.rating;
      scrapeLeetcodeData.GlobalRanking = contests.globalRanking;
  
       if( !contests.badge || !contests.badge.name ){
        scrapeLeetcodeData.level = 'No Level Yet';
       }else{
         scrapeLeetcodeData.level = (contests.badge.name === 'Guardian') ? 'Guardian' : 'Knight';
       }
    }



     


    return scrapeLeetcodeData;
  } catch (error) {
    console.error(`Error fetching data for "${username}":`, error);
    throw new Error('Failed to fetch LeetCode data');
  }
}
      