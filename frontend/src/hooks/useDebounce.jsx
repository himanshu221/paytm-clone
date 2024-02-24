import { useEffect, useState } from "react"

export const useDebounce = ({filter}) => {
    const [debouncedVal, setDebouncedValue] = useState(filter)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedValue(filter)
        },200)
        return () => clearTimeout(timeoutId)
    },[filter])

    return debouncedVal;
}