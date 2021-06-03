import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';


const Show = () => {
    const [data, setData] = useState([]);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        fetch("http://192.168.100.5:3001/show")
            .then((response) => response.json())
            .then((data  => {
                setData(data);
            }))
            .catch((err) => setHasError(true))
    }, [])

    return !data.length ? <Alert variant="info">Loading...</Alert> :  hasError ? <Alert variant="error">Error...</Alert>: (
        <React.Fragment>
            <br/>
                <h2>Bad Jokes!!</h2>
            <hr/>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Chiste!</th>
                        <th>Creador</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, i) =>
                            (
                                <tr key={i}>
                                    <td>{item.name}</td>
                                    <td>{item.joke}</td>
                                    <td>{item.by_user}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </Table>
        </ React.Fragment>
    );
}

export default Show;