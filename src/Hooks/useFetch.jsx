import { useEffect, useState } from "react";

export const useFetch = () => {
    const [fetchData, setFetchData] = useState({  loading : false })

    let url2 = import.meta.env.HEROKU || 'http://localhost:3002/'
    console.log( import.meta.env.VITE_HEROKU )
    console.log( import.meta )

    let url = 'https://fluffy-triage-api.herokuapp.com/'

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