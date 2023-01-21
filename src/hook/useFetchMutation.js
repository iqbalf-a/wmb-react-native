import React from "react";

const useFetchMutation = (mutation, onSuccess) => {
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)

    const fetchMutation = async (data) => {
        try {
            setLoading(true)
            const result = await mutation(data)
            onSuccess?.(result)
        } catch (e) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    return {
        loading, error, fetchMutation
    }
}

export default useFetchMutation;