import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

const Del = () => {
    const [data, setData] = useState([])
    const [hasError, setHasError] = useState(false);
    const [isDelete, setIsDelete] = useState(true);

    useEffect(() => {
        fetch("http://192.168.100.5:3001/show")
            .then((response) => response.json())
            .then((data  => {
                setData(data);
            }))
            .catch((err) => setHasError(true))
    }, [isDelete])

    const onDelete = (event) => {
        const toDelete = event.target.value;
        fetch("http://192.168.100.5:3001/delete", 
        {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: toDelete
            })
        })
        .then(response => response.json())
        .then(res => isDelete ? setIsDelete(false):setIsDelete(true))
        .catch((err) => setHasError(true))
    }

    return hasError ? <Alert variant="danger">Error...</Alert>: (
        <Container fluid className="text-center">
            <h2>Press the button to delete joke</h2>
            <hr/>
            {
                data.map((joke, i) => (
                    <div key={i}>
                        <br/>
                        <Button variant="dark" value={joke.id} onClick={onDelete}>{joke.name}</Button>
                    </div>
                ))
            }
        </Container>
    )
}

export default Del