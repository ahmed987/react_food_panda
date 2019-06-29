import React from 'react';

class Dashboard extends React.Component {

    
    
    render() {

        return (
            <div>
                <h1>Dashboard</h1>

                <button onClick={() => this.props.history.push('/profile')}>
                    Profile
                </button>
            </div>
        )
    }
}

export default Dashboard;
