import React from 'react';
import { ChatHeaderComp } from './ChatHeader-styled';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';




class ChatHeader extends React.Component {
    render() {

        const Id = localStorage.getItem("Id");
        return (
            <ChatHeaderComp>
                <div className="ui massive horizontal divided list">
                    
                    <Query query={
                        gql`{
                            chatById(id:${Id}){
                                id
                                name
                                profileimg
                              }
                    }
                     `}>
                         {/* Getting profile of particular id */}
                        {({ loading, error, data }) => {
                            if (loading) return <p></p>
                            if (error) return <p>Error :(</p>;
                            return <div className="item">
                                <img className="ui avatar image" alt="person" src={data.chatById.profileimg} style={{ fontSize: '30px', border: '2px solid' }} />
                                <div className="content">
                                    <div className="header" style={{ color: '#2D3E50' }}>{data.chatById.name}</div>
                                </div>
                            </div>
                        }}

                    </Query>
                </div>
            </ChatHeaderComp>
        )
    }
}



export default ChatHeader;