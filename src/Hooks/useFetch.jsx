import { useEffect, useState } from "react";

export const useFetch = () => {
    const [fetchData, setFetchData] = useState({  loading : false })

    let url2 = process.env.HEROKU || 'http://localhost:3002/'
    console.log( process.env.HEROKU )
    console.log( process.env.heroku )
    console.log( process.env )

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