import { useState } from 'react'

const useFormLoading = () => {
    const [isLoading, setIsLoading] = useState(false);
    const handleLoading = (loading: boolean) => setIsLoading(loading);
    
    return {
        isLoading,
        handleLoading
    }
}

export default useFormLoading