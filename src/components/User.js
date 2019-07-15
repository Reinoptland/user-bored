import React from 'react'

class User extends React.Component {
    // initialising state
    state = {
        present: false
    }


    // I want to use state!
    // 1.) X Initialising state (state = { something: bla })
    // 2.) X Use the state in the return of the render method
    // 3.) X Add an event listener
    // 4.) X Add an event handler (THIS HAS TE BE AN ARROW FUNCTION!!11)
    // 5.) X Event handler calls this.setState 
    // 6.) Marvel at your work 

    handleBoredom = () => {
        this.setState({
            present: !this.state.present
        })
    }

    render(){
        console.log('PROPS:', this.props)
        return <div>
            <h4>
                {this.props.name + " "}  
                is 
                {this.state.present ? ' present' : ' bored'}
            </h4>
            <button onClick={this.handleBoredom}>excite</button>
        </div>
    }
}

export default User