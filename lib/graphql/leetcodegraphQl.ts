import { TypedDocumentNode, gql } from "@apollo/client";

// First query for fetching user badges and profile data
export const GET_USER_DATA: TypedDocumentNode = gql`
  query userBadges($username: String!) {
    matchedUser(username: $username) {
      profile {
        realName
        ranking
      }
      badges {
        name
      }
      userCalendar {
        activeYears
        streak
        totalActiveDays
      }
    }
  }
`;

// Second query for fetching contest ranking data
export const GET_USER_CONTEST: TypedDocumentNode = gql`
  query userContestRankingInfo($username: String!) {
    userContestRanking(username: $username) {
      attendedContestsCount
      rating
      globalRanking
      totalParticipants
      topPercentage
      badge {
        name
      }
    }
  }
`;