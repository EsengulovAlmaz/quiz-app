import { onAuthStateChanged, signOut } from "firebase/auth";
import React from "react";
import { FireConfig } from "../config/firebase";
import { AuthContext } from "../context/AuthContext";


export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = React.useState(null);
    const [token, setToken] = React.useState(null);
    const [gameState, setGameState] = React.useState("start");
    const [score, setScore] = React.useState(0);
    const { auth } = FireConfig;

    React.useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const userConfig = {
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL
                }

                setCurrentUser(userConfig);
            }
        })
    }, [auth])

    const getToken = React.useCallback(() => {
        const tokenData = localStorage.getItem("token");

        if (tokenData) {
            setToken(tokenData)
        } else {
            setToken(null)
        }
    }, [])

    React.useEffect(() => {
        getToken()
    }, [getToken])

    const logOut = React.useCallback(() => {
        setToken(null);
        setCurrentUser(null);
        signOut(auth)
        localStorage.clear();
        setGameState("start");
        setScore(0);
        
    }, [auth]);

    const values = React.useMemo(() => ({
        currentUser,
        token,
        gameState,
        setGameState,
        score,
        setScore,
        logOut
    }),
        [
            currentUser,
            token,
            gameState,
            setGameState,
            score,
            setScore,
            logOut
        ]
    )

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
};