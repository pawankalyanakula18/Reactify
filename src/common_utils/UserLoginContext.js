import { createContext } from "react";

const UserLoginContext = createContext({
    loggedInUser: "Akula",
    setUserName: () => {},
});

export default UserLoginContext;
