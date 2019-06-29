import React from 'react';

class IndividualProfile extends React.Component {

    componentDidMount() {
        this.getUserProfile()
    }

    getUserProfile() {
        // getUser(this.props.match.params.username)
    }
    
    render() {
        console.log('this.props ====>', this.props)
        return (
            <div>
                <h1>IndividualProfile</h1>

                <h2>{this.props.match.params.username}</h2>
            </div>
        )
    }
}

export default IndividualProfile;
