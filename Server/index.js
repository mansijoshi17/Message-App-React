const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type chathistory{
      parentid : String
      type : String
      name : String
      message : String
  }
  
  type chat {
    id : Int
    name: String
    gender: String
    profileimg:String
    chathistory :[chathistory]
  }

 
  type Query {
    chats: [chat],
    chatById(id:ID!):chat,
  }

  input MessageInput {
    parentid : String
    type : String
    name : String
    message : String
  }
  
  type Mutation{
      addMessage(input:MessageInput):chat
  }
  
  
  `;




const Chat = [{
    id: '1',
    name: 'Jaydip Patel',
    gender: 'male',
    profileimg: 'https://img.icons8.com/bubbles/100/000000/user-male-circle.png',
    chathistory: [
        {
            parentid: '1',
            type: 'sender',
            name: 'Jaydip Patel',
            message: "Hello! How are you?"
        },
        {
            parentid: '1',
            type: 'reciever',
            name: 'Mansi',
            message: "Hey! I am doing good. what about you?"
        },
        {
            parentid: '1',
            type: 'sender',
            name: 'Jaydip Patel',
            message: "I am good. Are you free I need to discuss about project?"
        },
        {
            parentid: '1',
            type: 'reciever',
            name: 'Mansi',
            message: "Yes I am free, but about which project?"
        },
    ]
},
{
    id: '2',
    name: 'Shubhangi Ambade',
    gender: 'female',
    profileimg: 'https://img.icons8.com/bubbles/100/000000/brown-long-hair-lady-with-red-glasses.png',
    chathistory: [
        {
            parentid: '2',
            type: 'sender',
            name: 'Mansi',
            message: "Hello! Shubhangi I need to talk about some functionalities?"
        },
        {
            parentid: '2',
            type: 'Shubhangi',
            name: 'Shubhangi',
            message: "Hey! Mansi yes sure, lets have a call."
        },
        {
            parentid: '2',
            type: 'sender',
            name: 'Mansi',
            message: "At which time?"
        },
        {
            parentid: '2',
            type: 'reciever',
            name: 'Shubhangi',
            message: "Is it okay at 10:AM?"
        },
    ]
},
{
    id: '3',
    name: 'Rahul Singh',
    gender: 'male',
    profileimg: 'https://img.icons8.com/bubbles/50/000000/active-male.png',
    chathistory: [
        {
            parentid: '3',
            type: 'sender',
            name: 'Rahul',
            message: "Hello! How are you?"
        },
        {
            parentid: '3',
            type: 'reciever',
            name: 'Mansi',
            message: "Hey! I am doing good. what about you?"
        },
        {
            parentid: '3',
            type: 'sender',
            name: 'Rahul',
            message: "I am good. Are you free I need to discuss about project."
        },
        {
            parentid: '3',
            type: 'reciever',
            name: 'Mansi',
            message: "Yes I am free, but about which project"
        },
    ]
},
{
    id: '4',
    name: 'Karan Pujara',
    gender: 'male',
    profileimg: 'https://img.icons8.com/bubbles/50/000000/administrator-male.png',
    chathistory: [
        {
            parentid: '4',
            type: 'sender',
            name: 'Karan',
            message: "Hello! How are you?"
        },
        {
            parentid: '4',
            type: 'reciever',
            name: 'Mansi',
            message: "Hey! I am doing good. what about you?"
        },
        {
            parentid: '4',
            type: 'sender',
            name: 'Karan',
            message: "I am good. Are you free I need to discuss about project."
        },
        {
            parentid: '4',
            type: 'reciever',
            name: 'Mansi',
            message: "Yes I am free, but about which project"
        },
    ]
},
{
    id: '5',
    name: 'Mitesh Jabuani',
    gender: 'male',
    profileimg: 'https://img.icons8.com/bubbles/50/000000/man-in-blue-jacket.png',
    chathistory: [
        {
            parentid: '5',
            type: 'sender',
            name: 'Mitesh',
            message: "Hello! How are you?"
        },
        {
            parentid: '5',
            type: 'reciever',
            name: 'Mansi',
            message: "Hey! I am doing good. what about you?"
        },
        {
            parentid: '5',
            type: 'sender',
            name: 'Mitesh',
            message: "I am good. Are you free I need to discuss about project."
        },
        {
            parentid: '5',
            type: 'reciever',
            name: 'Mansi',
            message: "Yes I am free, but about which project"
        },
    ]
}];

const resolvers = {
    Query: {
        chats: () => Chat,
        chatById: (root, args) => {
            const chat = Chat.find(node => node.id == args.id)
            return chat
        }
    },

    Mutation: {
        addMessage: (root, args) => {
            const chat = Chat.find(node => node.id == args.input.parentid)
            chat.chathistory.push(args.input)
            return chat
        },
    }


};//resolvers are function which return the data or response of query.

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});