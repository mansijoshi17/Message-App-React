import React from 'react';
import { ChatAreaComp } from './ChatArea-styled';

import ChatHeader from './ChatHeader-component';
import ChatHistory from './ChatHistory-component';

import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';


class ChatArea extends React.Component {

    constructor() {
        super();
        this.state = {
            Message: ''
        }
    }

    render() {

        const onChangeHandler = (event) => {
            this.setState({ Message: event.target.value });
        }//Input message 

        const ADD_MESSAGE = gql`
        mutation  addMessage($input:MessageInput)
        {
            addMessage(input:$input){
                chathistory
                       {
                         parentid
                         type
                         name
                         message
                        }
                  }
        }`
     //Add message mutation.

        return (
            <ChatAreaComp>
                <ChatHeader />
                <ChatHistory />
                <div className="ui fluid icon input">
                    <Mutation mutation={ADD_MESSAGE}>
                        {(addMessage) => {
                            return <input type="text" className="pt-3 pb-3" placeholder="Send Message..." style={{ borderRadius: '0px' }} onChange={onChangeHandler} onKeyUp={(e) => {
                                return e.keyCode === 13 ?  addMessage({ variables: { input: { parentid: localStorage.getItem("Id"), type: "sender", name: "Mansi", message: this.state.Message } } }, window.location.reload()) : null
                            }} /> //Passing chatid from localstorage to parentid to match with id of node and than put this object in that node's chathistory array
                            //If keyCode is 13 means that if that key is enter than addMessage occur.
                        }}
                      
                    </Mutation>

                </div>
            </ChatAreaComp>
        )
    }
}



export default ChatArea;