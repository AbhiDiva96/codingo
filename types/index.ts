export interface ScrapedData {
  gfgusername: string;
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
  leetusername: string;
  name : string;
  totalMedal?: number;
  rank?: number;
  solved?:number;
  activeYears?: [];
  streak?: number;
  totalActiveDays?:number;
  dailyChallengeMedal?:number;
  competitionMedal?: number;
  GlobalRanking?: number;
  Rating?: number;
  level?: string | null ;
   iconGif?: string;
  iconGifBackground: string;
}
