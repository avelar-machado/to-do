// App.js File 
import React, { useState } from "react"; 
import "bootstrap/dist/css/bootstrap.css"; 
import Container from "react-bootstrap/Container"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup"; 
import FormControl from "react-bootstrap/FormControl"; 
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";


function App() {

  const [inputItem, setItem] = useState("");
  const [listItem, setList] = useState([]);

  const addItem = () => {
    if (inputItem !== "") {
      setList([
        ...listItem,
        {
          id: Math.random(),
          value: inputItem,
        }
      ]);
      setItem ("");
    }
  }

  const deleteItem = (id) => {
    const updateList = listItem.filter((item) => item.id !== id);
    setList (updateList);
  }

  const updateItem = (index) => {
    const item = prompt('Edit the item:');
    if (item !== null && item.trim() !=="") {
      listItem[index].value = item;
      console.log (listItem[index].value);
      setList ([
        ...listItem,
      ]);
    }
  }

  return (
    <Container>
      
      <Row className="d-flex justify-content-center align-items-center" style={{fontWeight: "bolder", fontSize: "3rem",}}>
        TODO LIST
      </Row>
      <hr/>   
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <div  className="d-none" style={{ backgroundColor: 'lightblue' }}>Coluna com span de 6</div>
          <InputGroup className="mb-3">
          <InputGroup.Text>Item:</InputGroup.Text>
            <FormControl
              placeholder="add item . . . "
              size="lg"
              value={inputItem}
              onChange={(item) => {setItem (item.target.value)}}
              aria-label="add something"
              aria-describedby="basic-addon2"           
            />
             <InputGroup>
              <Button
                variant="dark"
                className="mt-2"
                onClick={addItem}>
                ADD
              </Button>
            </InputGroup>
          </InputGroup> 
        </Col>
      </Row>
      <Row>
        <Col md={{span: 4, offset:4}}>
        <ListGroup>
        { listItem.map((item, index) => {
          return ( 
          <div key={item.id}>          
           <ListGroup.Item 
            variant="dark"
            style={{display:"flex", justifyContent:'space-between'
            }}>
            {item.value}
            <span >
              <Button variant="light" 
              style={{marginRight: "10px"}}
              onClick={() => {updateItem(index)}}>
                Edit
              </Button>
              <Button 
              variant="danger"
              onClick={() => {deleteItem(item.id)}}>
                Delete
              </Button>
            </span>
          </ListGroup.Item>
          </div> 
          );}
        )}
        </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App; 
