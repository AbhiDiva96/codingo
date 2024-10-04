import axios from 'axios';
import * as cheerio from 'cheerio';
import { ScrapedData } from '@/types';

export async function scrapeGFG(username: string): Promise<ScrapedData> {

 

  // const url = `https://auth.geeksforgeeks.org/user/${username}/practice/`;
  const url =  `https://www.geeksforgeeks.org/user/${username}`
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const scrapedData: ScrapedData = {
      username: username,
      gotRank: 0,
      currentStreak: 0,
      totalStreak: 0,
      codingScore: 0,
      problemSolved:0,
      contestRating:0,
      level: 0,
      globalRank:0,
      totalContest: 0,
    };

    // Scrape rank
    const rankElement = $('span.educationDetails_head_left_userRankContainer--text__wt81s');
    const rankText = rankElement.text().trim();
    const cleanRankText = rankText.replace(/[^0-9]/g, '');
  
    
// Function to extract the score based on the label text

const extractScore = (labelText: string): number => {
            const labelElement = $('div.scoreCard_head_left--text__KZ2S1')
                .filter((_, el) => $(el).text().trim() === labelText)
                .first();

            if (labelElement.length > 0) {
                const scoreElement = labelElement.next('div.scoreCard_head_left--score__oSi_x');
                if (scoreElement.length > 0) {
                    const scoreText = scoreElement.text().trim();
                    const cleanedScoreText = scoreText.replace(/[^0-9]/g, ''); // Remove non-numeric characters
                    return parseInt(cleanedScoreText, 10) || 0;
                }
            }
            return 0; // Default value if the score is not found
        }
// Extract coding score, problem solved, and contest rating

  // const extractNumber = (element: cheerio.Cheerio): number => {
  //     const text = element.text().trim();
  //     const number = parseInt(text.replace(/\D/g, ''), 10);
  //     return isNaN(number) ? 0 : number;
  //   };

  //   // Updated level extraction
  //   const levelElement = $('span.contestDetailsCard_head_detail__8P4Vo')
  //     .filter((_, el) => $(el).text().includes('Level'))
  //     .find('span.contestDetailsCard_head_detail--text__NG_ae');
    
  //   if (levelElement.length > 0) {
  //     scrapedData.level = extractNumber(levelElement);
  //   }

    
  

      

            const overallStreak = $('div.circularProgressBar_head_mid_streakCnt__MFOF1');

                    const currentStreakText = overallStreak.contents().filter((_, node) => {
                        return node.type === 'text'; // Get the raw text (streak count)
                         }).text().trim();

                    const longestStreakText = overallStreak.find('span.circularProgressBar_head_mid_streakCnt--glbLongStreak__viuBP')
                        .text().replace('/', '').trim(); // Remove the '/' and trim whitespace



                scrapedData.codingScore = extractScore('Coding Score');
                scrapedData.problemSolved = extractScore('Problem Solved');
                scrapedData.contestRating = extractScore('Contest Rating');
                // scrapedData.level = extractDetails('Level');
                scrapedData.totalStreak  =  parseInt(longestStreakText, 10) || 0; 
                scrapedData.currentStreak = parseInt(currentStreakText, 10) || 0;
                scrapedData.gotRank = parseInt(cleanRankText, 10) || 0;
                // scrapedData.level = extractLevels('Level');
                // scrapedData.globalRank = extractLevels('Global Rank');
                // scrapedData.totalContest = extractLevels('Contest Attended');

         
   
    return scrapedData;
  } catch (error) {
    console.error('Error scraping GFG profile:', error);
    throw new Error('Failed to scrape GFG profile');
  }
}