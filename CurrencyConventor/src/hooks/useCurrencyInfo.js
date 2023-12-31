import { useEffect, useState } from "react";

// custom hook
function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => {
            console.log('resp_apiii', res)
            setData(res[currency])
        })
        console.log('data', data)
    }, [currency])
    return data;
}

export default useCurrencyInfo;