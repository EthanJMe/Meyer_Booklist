import { Button, Card, Form } from "react-bootstrap"


function firstDisplay() {
    return (
        <div>
            <Form className="App-header ">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" className="widthAndMargin" placeholder="To Kill A Mockingbird"/>
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" className="widthAndMargin" placeholder="Harper Lee"/>
                <Form.Label>Synopsis</Form.Label>
                <Form.Control as="textarea" className="widthAndMargin" placeholder="Boo, Scout, and Gregory play in a treehouse"/>
                <Button>Submit</Button>
            </Form>
            <Card className="Card">
                <Card.Title className="textCenter">
                    To Kill A Mockingbird
                </Card.Title>
                <Card.Body className="textCenter">
                    Harper Lee
                    <p>Boo, Scout, and Gregory play in a treehouse</p>
                </Card.Body>
            </Card>
        </div>
    )
}

export default firstDisplay
