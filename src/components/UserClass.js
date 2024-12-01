import React from "react";
import { ADMIN_GIT_URL } from "../common_utils/constant";
import UserLoginContext from "../common_utils/UserLoginContext";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        //console.log(props);

        this.state = {
           userInfo: {
                name: "ABC",
                user_view_type: "View",
                bio: "Default",
           },
        }
    };

    async componentDidMount(){
        const data = await fetch(ADMIN_GIT_URL);
        const json = await data.json();
        
        this.setState({
            userInfo: json,
        });
    }
    componentWillUnmount(){
        //console.log("Component UnMounted...");
    }
    componentDidUpdate(){
        //console.log("Component Updated...");
    }

    render(){
        const { name, user_view_type, bio } = this.state.userInfo;
        return (
            <div className="user_class_compt">
                <div>
                    LoggedIn User: 
                    <UserLoginContext.Consumer>
                        {({loggedInUser}) => (
                            <h1 className="text-3xl font-bold">{ loggedInUser }</h1>
                        ) }
                    </UserLoginContext.Consumer>
                </div>
                <h3>{name}</h3>
                <h3>{user_view_type}</h3>
                <h3>{ bio }</h3>
            </div>
        );
    }
};
export default UserClass;
