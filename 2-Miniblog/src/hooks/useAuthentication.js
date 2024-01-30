import { useState, useEffect } from "react"

import { db } from "../firebase/config"
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
} from "firebase/auth"

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled() {
        if(cancelled) {
            return
        }
    }

    const createUser = async (data) => {
        checkIfIsCancelled()

        setLoading(true)
        setError(null)

        try {
            const { user } = await createUserWithEmailAndPassword(auth, data.email, data.password)

            await updateProfile(user, { displayName: data.displayName })

            setLoading(false)

            return user
        } catch (error) {
            console.log(typeof error.message, error.message)
            setLoading(false)
            setError(error.message)
        }
    }

    const logout = () => {
        checkIfIsCancelled()

        signOut(auth)
    }

    const login = async (data) => {
        checkIfIsCancelled()

        setLoading(true)
        setError(false)

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
        
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
            setError(error.message)           
        }

        setLoading(false)
    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return { auth, createUser, error, loading, logout, login }
}