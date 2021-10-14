import { ButtonGroup } from "react-bootstrap";
import {Button} from "react-bootstrap";
import "./Footer.css";

const Footer = () =>{
    return (
        <>
        <ButtonGroup aria-label="Basic example">
  <Button variant="secondary">Left</Button>
  <Button variant="secondary">Middle</Button>
  <Button variant="secondary">Right</Button>
</ButtonGroup>
      </>
    );
}

export default Footer;