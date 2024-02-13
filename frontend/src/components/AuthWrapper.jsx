import { Navigate } from "react-router-dom"

export const AuthWrapper = ({loggedIn}) => {
    return (
        loggedIn ? <Navigate to='/dashboard' replace /> : <Navigate to='/signin' replace />
    )
}