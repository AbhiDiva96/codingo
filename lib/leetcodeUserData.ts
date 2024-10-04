import axios from 'axios';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, DocumentNode } from '@apollo/client';
import { ScrapedLeetCodeData } from '@/types';

const client = new ApolloClient({
    uri: 'https://leetcode.com/graphql',
    cache: new InMemoryCache()
   })

   const GET_USER_BADGES: DocumentNode = gql`
  query userBadges($username: String!) {
    matchedUser(username: $username) {
      badges {
        id
        name
        displayName
        icon
      }
      upcomingBadges {
        name
        progress
      }
    }
  }
`;


export async function scrapeLeetCode(username: string) {
   // Implement LeetCode scraping logic here

   const scrapeLeetcodeData : ScrapedLeetCodeData = {
        username: username,
        badges: 0,
   }
      
    const { data } = await client.query({
      query: GET_USER_BADGES,
      variables: { username },
    });

    const badges = data.matchedUser.badges || [];
    const totalBadges = badges.length;

     
    scrapeLeetcodeData.username = username;
    scrapeLeetcodeData.badges = totalBadges;

   return scrapeLeetcodeData;
   

}