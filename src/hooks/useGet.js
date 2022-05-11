import { useEffect, useState } from "react";

const axios = require('axios');

export const useGet = (url) => {
    const [data, setData] = useState({
        loading:true,
        error: null,
        data: null
    });

    const getData = async () =>{
        try {
            const res = await axios(url);
            setData({
                loading:false,
                error: null,
                data: res.data.results
            })
            console.log(data)
        } catch (e) {
            setData({
                loading:false,
                error: e,
                data: null
            });
            console.log(e)
        }
    }

    useEffect(() => {
        getData();
        console.log(data.data)
    }, [])

    return [data.data, data.loading, data.error];
}