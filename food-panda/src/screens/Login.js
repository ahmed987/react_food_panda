import React from 'react';
import { update_user } from '../store/action';
import { connect } from 'react-redux';
import { update_todos } from '../store/action';

class Login extends React.Component {
    state = {
        todos: []
    }

    async componentDidMount() {
        this.props.update_todos();

        // if(this.props.user && this.props.user.name) {
        //     this.props.afterLogin();
        // }
    }

    login() {
        //firebase api
        
        const user = { 
            name: 'kashif', 
            age: 40, 
            profile_pic: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' 
        }

        console.log('this.props ==> ', this.props)
        this.props.store_user(user);
        // this.props.afterLogin();

        this.props.history.push('/dashboard');
    }

    render() {
        const { todos } = this.props;

        return (
            <div>
                <input placeholder="email" />
                <input placeholder="password" />

                <button onClick={this.login.bind(this)}>Login</button>

                {todos.map(elem => {
                    return <h1>{elem.text}</h1>
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
        todos: state.todosReducer.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        store_user: (user) => dispatch(update_user(user)),
        update_todos: () => dispatch(update_todos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
