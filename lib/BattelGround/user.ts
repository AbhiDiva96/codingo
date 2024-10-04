import { ApolloClient, DocumentNode, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://leetcode.com/graphql',
  cache: new InMemoryCache(),
});

// GraphQL query to fetch user data
const GET_USER_DATA: DocumentNode = gql`
  query getUserData($username: String!) {
    matchedUser(username: $username) {
      username
      profile {
        realName
        ranking
      }
      submitStats {
        totalSubmissionNum {
          difficulty
          count
        }
      }
    }
  }
`;

// Function to scrape data for multiple users
export async function scrapeLeetCodeForMultipleUsers(usernames: string[]) {
  const userDataArray = [];

  for (const username of usernames) {
    try {
      const { data } = await client.query({
        query: GET_USER_DATA,
        variables: { username },
      });
      
      if (data && data.matchedUser) {
        userDataArray.push(data.matchedUser);  // Push each user's data to the array
      } else {
        console.log(`User ${username} not found or no data available`);
      }
    } catch (error) {
      console.error(`Error fetching data for ${username}:`, error);
    }
  }

  return userDataArray; // Return the array with all user data
}
