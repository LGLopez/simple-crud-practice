import React, { useEffect, useState } from 'react';
import Table from './TableShow'


const Show = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("http://192.168.100.22:3001/show")
            .then((response) => response.json())
            .then((data  => {
                setData(data);
            }))
            .catch((err) => console.error(err))
    }, [])

    return (
        <Table data={data}/>
    );
        
}

export default Show;