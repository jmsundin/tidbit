import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function TidbitCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Card.Link href="https://www.instagram.com/marisssaloren/guide/tidbits/18023476921386740/">
          Card Link
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default TidbitCard;
