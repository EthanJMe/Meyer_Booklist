import { Button, Card, Form } from "react-bootstrap"
import { useState, } from 'react'

function FirstDisplay() {
    const [booklist, setbooklist] = useState([])
    const [response, setResponse] = useState({title:""}); //we use this to keep track of the form input, see handleSubmit
    const updateField = (e) => {
      setResponse({
        ...response,
        [e.target.name]: e.target.value
      })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setbooklist([...booklist,response])
    }
    return (
        <div>
            <Form className="App-header" onSubmit={handleSubmit}>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" className="widthAndMargin" placeholder="To Kill A Mockingbird" onChange={updateField} name = 'title'/>
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" className="widthAndMargin" placeholder="Harper Lee" onChange={updateField} name="author"/>
                <Form.Label>Synopsis</Form.Label>
                <Form.Control as="textarea" className="widthAndMargin" placeholder="Boo, Scout, and Gregory play in a treehouse" onChange={updateField} name="synopsis"/>
                <Button onClick={handleSubmit}>Submit</Button>
            </Form>
            {booklist.map((books, i)=>{
                return(
                    <Card className="Card">
                        <Card.Title>{books.title}</Card.Title>
                        <Card.Body>
                            {books.author}
                            <p>{books.synopsis}</p>
                        </Card.Body>
                    </Card>

                )
            })}

        </div>
    )
}

export default FirstDisplay
