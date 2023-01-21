import {useState, useEffect} from "react";

const useFetchQuery = (query, params) => {
    const [fetch, setFetch] = useState(false);
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const refetch = () => {
        setFetch(true)
    }

    const fetchQuery = async () => {
        try {
            setLoading(true);
            if (!fetch) setFetch(true)
            const response = await query(params)
            setData(response.data)
        } catch (e) {
            setError(true)
        } finally {
            setLoading(false)
            setFetch(false)
        }
    }

    useEffect(() => {
        if (fetch) fetchQuery();
    }, [fetch])

    useEffect(() => {
        fetchQuery();
    }, [params])

    return {
        data, loading, error, refetch
    }
}

export default useFetchQuery;