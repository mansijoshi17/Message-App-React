import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';



class ContactList extends React.Component {

    constructor() {
        super();
        this.state = {
            search: ''
        }
    }

    render() {
        const onChangeHandler = (event) => {
            this.setState({ search: event.target.value });
        }//For filtering contacts set input value


        const getIdHandler = (nodeId) => {
            localStorage.setItem("Id", nodeId);
            window.location.reload();

        }//get nodeid on onclick on contactlist 

        return (
            <div className="ContactList">
                <div className="mt-4 SearchInput">
                    <div className="ui mini icon input" style={{ width: '100%' }}>
                        <input type="text" placeholder="Search Contact..." onChange={onChangeHandler} />
                        <i className="search icon"></i>
                    </div>
                </div>
                <div className="ui middle aligned selection list">
                    <Query query={
                        gql`{
                            chats{
                                id
                                name
                                gender
                                profileimg
                              }
                    }
                     `}>
                        {/* Getting list of contacts  */}
                        {({ loading, error, data }) => {
                            if (loading) return <div class="ui active inverted dimmer">
                                <div class="ui text loader">Loading</div>
                            </div>;
                            if (error) return <p>Error :(</p>;
                            //Converted all the name into lowecase because when we enter in input its in lowercase.
                            return data.chats.filter(node => this.state.search === '' || node.name.toLowerCase().includes(this.state.search)).map((node) => {
                                return <div className="item" key={node.id} onClick={() => getIdHandler(node.id)}>
                                    <img className="ui avatar image" alt="person" src={node.profileimg} style={{ fontSize: '25px', border: '2px solid' }} />
                                    <div className="content">
                                        <div className="header" style={{ color: 'white' }}>{node.name}</div>
                                    </div>
                                </div >

                            })
                        }}

                    </Query>
                </div>
            </div>
        )
    }
}




export default ContactList;

