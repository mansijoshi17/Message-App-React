import React from 'react';

class UserProfile extends React.Component {
    render() {
        return (
            <div>
                <div className="ui massive horizontal divided list">
                    <div className="item">
                        <img className="ui avatar image" alt="person" src="https://img.icons8.com/bubbles/100/000000/girl-and-check.png" style={{fontSize:'35px',border:'2px solid'}}/>
                        <div className="content">
                            <div className="header" style={{color:'white'}}>Mansi Joshi</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile;