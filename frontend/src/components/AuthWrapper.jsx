import { Navigate } from "react-router-dom"

export const AuthWrapper = () => {
    return (
        localStorage.getItem('token')!=null ? <Navigate to='/dashboard' replace /> : <Navigate to='/signin' replace />
    )
}