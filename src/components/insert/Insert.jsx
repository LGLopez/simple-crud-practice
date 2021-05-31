import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

const Insert = () => {
    const [user, setUser] = useState("");
    const [joke, setJoke] = useState("");
    const [nameJoke, setNameJoke] = useState("");
    const [jokeAdded, setJokeAdded] = useState(false);

    const onNameChange = (event) => { setNameJoke(event.target.value)};
    const onJokeChange = (event) => { setJoke(event.target.value)};
    const onUserChange = (event) => { setUser(event.target.value)};

    const onSubmitJoke = (event) => {
        fetch("http://192.168.100.22:3001/insert/data", {
            method: 'put',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({
                name: nameJoke,
                joke: joke,
                by_user: user
            })
        })
        .then(res => res.json())
        .then(res => {
            setJokeAdded(res.idJoke !== undefined ? true : false);
            setNameJoke('');
            setUser('');
            setJoke('');
        })
        .catch(err => console.log(err))
    }

    return (
        <Container>
            <br/>
                <h2>Add your own joke</h2>
            <hr/>
            <Form>
                <Form.Group controlId="formNameJoke">
                    <Form.Label>Name of the Joke</Form.Label>
                    <Form.Control type="text" placeholder="Joke's name" onChange={onNameChange} value={nameJoke}/>
                </Form.Group>
                <Form.Group controlId="formJoke">
                    <Form.Label>Joke</Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={onJokeChange} value={joke}/>
                </Form.Group>
                <Form.Group controlId="formUser">
                    <Form.Label>Name of the user</Form.Label>
                    <Form.Control type="text" placeholder="Username" onChange={onUserChange} value={user}/>
                </Form.Group>
            </Form>
            <Button variant="secondary" type="submit" onClick={ onSubmitJoke }>Add joke</Button>
            {jokeAdded?<Alert variant="success" onClose={() =>  setJokeAdded(false)} dismissible>Joke added successfully</Alert>:<p></p>}
        </Container>
    )
}

export default Insert