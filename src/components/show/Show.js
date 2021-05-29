import React, { useEffect } from 'react';

const Show = () => {
    useEffect(() => {
        fetch("http://localhost:3001/show")
            .then((response) => response.json())
            .then((res  => console.log(res)))
            .catch((err) => console.error(err))
    })

    return (
        <>
            <h2>hola!!</h2>
        </>
    )
}

export default Show;