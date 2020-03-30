import React from 'react';
import { ChatHistoryComp } from './ChatHistory-styled';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { connect } from 'react-redux';


class ChatHistory extends React.Component {

    render() {

        const Id = parseInt(localStorage.getItem("Id"));

        console.log("history", Id);

        return (
            <ChatHistoryComp>
                <div className="ui very relaxed list">
                    <Query query={
                        gql`{
                            chatById(id:${Id}){
                                id
                                chathistory{
                                    parentid
                                    type
                                    name
                                    message
                                }
                              }
                    }
                     `}>
                         {/* Getting chathistory of particular id. */}
                        {({ loading, error, data }) => {
                            if (loading) return <div class="ui active inverted dimmer">
                                <div class="ui text loader">Loading</div>
                            </div>;
                            if (error) return <p>Error :(</p>;
                            console.log(data);
                            return data.chatById.chathistory.map((node, index) => {
                                return <div className="item" key={index}>
                                    <img className="ui avatar image" alt="user" src={node.type === "sender" ? "https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder.jpg" : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwsnq55Il5ReHU1jiLe2x8HweIhZhyiv0WxPEOm-cg9ME6BJmH"} />
                                    <div className="content">
                                        <a href="/" className="header">{node.name}</a>
                                        <div className="description">{node.message}</div>
                                    </div>
                                </div>
                            })
                        }}

                    </Query>

                </div>
            </ChatHistoryComp>
        )
    }
}



export default ChatHistory;

