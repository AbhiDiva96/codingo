export interface ScrapedData {
  username: string;
  codingScore?: number;
   problemSolved?: number;
    contestRating?: number;
  solvedQuestions?: number;
  institution?: string;
  gotRank?: number;
  totalStreak?:number;
  currentStreak?:number;
  level?:number;
  globalRank?:number;
  totalContest?: number;
  // Add more fields as needed
}


export interface ScrapedLeetCodeData{
  username: string;
  badges?: number;
}
