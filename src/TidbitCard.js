import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function TidbitCard(props) {
  return (
    <Card bg="dark" text="light" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Card.Link href={props.url}>Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default TidbitCard;
