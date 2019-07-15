import React from 'react'
import User from './User'

class UserBoard extends React.Component {
    render(){
        return <div>
            <h3>User bored</h3>
            <User name="Kelley" />
            <User name="Wouter" />
            <User name="Rembert" />
        </div>
    }
}

export default UserBoard