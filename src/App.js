import React from 'react';
import './App.css';
import ChatList from './Components/ChatList/ChatList-component';
import ChatArea from './Components/ChatArea/ChatArea-component';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';//Which work as store provider its let app to use the data of whole app.


const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})


function App() {
  return (
    <ApolloProvider client={client}>
      <div >
        <div className="row">
          <div className="col-md-3 pr-0">
            <ChatList />
          </div>
          <div className="col-md-9 pl-0">
            <ChatArea />
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
