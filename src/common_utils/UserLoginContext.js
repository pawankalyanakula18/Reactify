import { createContext } from "react";

const UserLoginContext = createContext({
    loggedInUser: "Guest",
    setUserName: () => {},
});

export default UserLoginContext;
