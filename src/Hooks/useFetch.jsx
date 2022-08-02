import { useEffect, useState } from "react";

export const useFetch = () => {
    const [fetchData, setFetchData] = useState({  loading : false })

    let url = import.meta.env.VITE_HEROKU || 'http://localhost:3002/'
   
    useEffect( () => {
        let datos
        
        fetch( url )
        .then( res => res.json())
        .then( (dat) => datos = dat )
        .catch( err   => setFetchData({...fetchData, error: err}) )
        .finally( (dat) => {
            setFetchData({...datos, loading : true})
        })

    }, []);

    
    return fetchData
}