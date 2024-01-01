import { useContext, createContext , useState} from "react";

const AuthContext = createContext();

export function AuthProvider({children}){
    const [userData, setuserData] = useState(
        ()=>{
            return localStorage.getItem('userdata') || null;
        }
    );

    function LoginFunction(userdata,userToken){
        setuserData(userData);
        console.log("i am in the Login function here ", userdata, userToken);
        localStorage.setItem("userdata", JSON.stringify(userdata));
        localStorage.setItem("userToken", userToken);
        
    }

    function LogOutUser(){
        localStorage.removeItem("userdata");
        localStorage.removeItem("userToken");
        setuserData(null);
    }

    return(
        <AuthContext.Provider value={{
            userData,
            LoginFunction,
            LogOutUser
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export function authApp(){return useContext(AuthContext)};