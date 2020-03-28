import React from 'react';
import { ChatListComp } from './ChatList-styled';
import UserProfile from './UserProfile-component';
import ContactList from './ContactList-component';

class ChatList extends React.Component {
    render() {
        return (
            <ChatListComp>
                 <UserProfile/>
                 <ContactList/>
            </ChatListComp>
        )
    }
}

export default ChatList;