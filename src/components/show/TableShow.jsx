import React from 'react'
import Table from 'react-bootstrap/Table';

const TableShow = ({data}) => {
    return data === null ? <h2>Loading...</h2> : (
        <React.Fragment>
            <h2>Bad Jokes!!</h2>
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
    )
}

export default TableShow;
