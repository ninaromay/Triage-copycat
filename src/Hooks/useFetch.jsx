import { useEffect, useState } from "react";

export const useFetch = () => {
    const [fetchData, setFetchData] = useState({  loading : false })

    useEffect( () => {
        let datos
        
        fetch('http://localhost:3002/')
        .then( res => res.json())
        .then( (dat) => datos = dat )
        .catch( err   => setFetchData({...fetchData, error: err}) )
        .finally( (dat) => {
            setFetchData({...datos, loading : true})
        })
    }, []);

    
    return fetchData
}