/*
export const typeDefs = `
     type Channel {   
         id: ID!         # ! denotes a required field
         name: String
     }
     type Query {
         channels: [Channel] # "[]" means this is a list of channels
     }           
`;
*/  
/*  
query ChannelsListQuery {   
    channels {    
      id
      name
    }
  }  

const channelsListQuery = gql`
   query ChannelsListQuery {
     channels {
       id
       name
     }
   }
 `;  

// const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList)
*/ 