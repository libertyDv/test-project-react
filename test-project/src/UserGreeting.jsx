function UserGreeting(props) {
   /* if (props.isLoggedIn) {
        return <h2>Welcome {props.username}</h2>
    }
    return <h2>Please log in</h2>*/

    const welcomeMessage = <h2>Welcome {props.username}</h2>
    const loginPromp = <h2>Please log in</h2>
    return(props.isLoggedIn ? welcomeMessage : loginPromp)
    

}

export default UserGreeting