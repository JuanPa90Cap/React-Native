import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";


enum StateTest {
    'ckecking',
    'login',
    'closed',
    'authenticated'
}


interface UserApp {
    name?: string,
    email?: string
}

interface AuthState {
    state: StateTest;
    user?: UserApp;
    isChecking: boolean;
    isAuthenticated: boolean
    loginEmailWithPassword: (email: string, pass: string) => void,
    logOut: () => void
}



export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);


export const AuthProvider = ({ children }: PropsWithChildren) => {

    const [state, setstate] = useState(StateTest.ckecking);
    const [user, setUSer] = useState<UserApp>();

    useEffect(() => {

        setTimeout(() => {
            setstate(StateTest.login)

        }, 1500);

    }, [])


    const loginEmailWithPassword = (email: string, pass: string) => {

        setUSer({
            name: "Juan Pablo Guevara",
            email: email
        })

        setstate(StateTest.authenticated)

    }

    const logOut = () => {
        setUSer({});
        setstate(StateTest.closed)
    }



    return (
        <AuthContext.Provider value={{
            state: state,
            isChecking: state == StateTest.ckecking,
            isAuthenticated: state == StateTest.authenticated,
            loginEmailWithPassword,
            logOut,
            user


        }}>

            {children}

        </AuthContext.Provider>
    )
};