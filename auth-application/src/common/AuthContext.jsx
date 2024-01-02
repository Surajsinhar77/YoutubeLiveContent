import { useContext, createContext , useState} from "react";
const AuthContext = createContext();

export function AuthProvider({children}){
    const [userExist, setuserExist] = useState(localStorage.getItem('userExist')? true : false);
    const [userData, setuserData] = useState(()=>{
        return localStorage.getItem('userdata') || null;
    });


    function LoginFunction(userdata,userToken){
        setuserData(userdata);
        setuserExist(true);
        localStorage.setItem("userdata", JSON.stringify(userdata));
        localStorage.setItem('userExist' , true);
        localStorage.setItem("userToken", userToken);
    }

    function LogOutUser(){
        localStorage.removeItem("userdata");
        localStorage.removeItem("userToken");
        localStorage.removeItem('userExist');
        setuserData(null);
        setuserExist(false);
    }

    return(
        <AuthContext.Provider value={{
            userData,
            LoginFunction,
            LogOutUser,
            userExist
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export function authApp(){return useContext(AuthContext)};