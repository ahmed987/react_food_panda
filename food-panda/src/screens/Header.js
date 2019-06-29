import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
    render() {
        return (
            <div style={{width: '100%', height: 70, backgroundColor: 'gray', color: 'white', textAlign: 'right'}}>
                <button>Logout</button>
            </div>
        )
    }
}


export default (Header);
