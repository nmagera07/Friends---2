import React from 'react'
import { connect } from 'react-redux'
import { getData } from '../actions'
import  FriendMap  from './FriendMap'

class FriendsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            friends: {
                name: '',
                age: '',
                email: ''
            }
         }
    }

    componentDidMount() {
        this.props.getData()
    }

    handleChanges = e => {
        this.setState({
            friends: {
                ...this.state.friends,
                [e.target.name]: e.target.value
            }
            
        })
    }

    addFriend = e => {
        e.preventDefault()
        this.props.addFriend(this.state.friends)
        this.setState({
            friends: {
                name: '',
                age: '',
                email: ''
            },
            // redirect: true
        })
    }

    render() { 
        if (this.props.fetching) {
            return <p>Loading data...</p>
        } else {
        return ( 
            <div>
                <FriendMap friends={this.props.friends}/>
                <form onSubmit={this.handleSubmit}>
                    <h2>Enter a new friend!</h2>
                    <input 
                        type="text"
                        value={this.state.name}
                        name="name"
                        onChange={this.handleChanges}
                        placeholder="Name"
                        required
                    />
                    <input 
                        type="text"
                        value={this.state.age}
                        name="age"
                        onChange={this.handleChanges}
                        placeholder="Age"
                    />
                    <input 
                        type="text"
                        value={this.state.email}
                        name="email"
                        onChange={this.handleChanges}
                        placeholder="Email"
                    />
                    <button onClick={this.addFriend}>Add Friend</button>
                    
                </form>
            </div>
         );
        }
    }
}
 
const mapStateToProps = state => ({
  error: state.error,
  fetching: state.fetching,
  friends: state.friends
})


export default connect(
  mapStateToProps,
  {
    getData
  }
)(FriendsList);