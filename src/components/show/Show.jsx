import React, { useEffect, useState } from 'react';


const Show = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("http://192.168.100.22:3001/show")
            .then((response) => response.json())
            .then((data  => {
                setData(data)
                console.log(data[0].name);
            }))
            .catch((err) => console.error(err))
    }, [])

    return (
        <>
            <h2>Show!!</h2>
            <p>{data[0].name}</p>
        </>
    )
}

export default Show;