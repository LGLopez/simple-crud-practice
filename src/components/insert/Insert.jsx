import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'

const Insert = () => {
    const [user, setUser] = useState("");
    const [joke, setJoke] = useState("");
    const [nameJoke, setNameJoke] = useState("");

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
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    return (
        <Container>
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0" >
                <legend className="f1 fw6 ph0 mh0">Insert Joke</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name">Name of the Joke</label>
                    <input 
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="text" 
                        name="name" 
                        id="name" 
                        onChange = { onNameChange }
                    />
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name">Joke</label>
                    <input 
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="text" 
                        name="name" 
                        id="name" 
                        onChange = { onJokeChange }
                    />
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name">Name of the user</label>
                    <input 
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="text" 
                        name="name" 
                        id="name" 
                        onChange = { onUserChange }
                    />
                </div>
            </fieldset>
            <div className="">
                <Button variant="secondary" type="submit" onClick={ onSubmitJoke }>Add joke</Button>
                <input 
                    onClick={ onSubmitJoke }
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="Add joke" 
                    />
            </div>
        </Container>
    )
}

export default Insert