import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import ReactMarkdown from "react-markdown";
import { useEffect } from "react";
import axios from "axios"
import { useState } from "react";

const MyNotes = () => {
  const [notes, setNotes] = useState([])
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  useEffect(()=>{
fetchNotes()
  },[])
  const fetchNotes = async  () =>{
    let data = await axios.get("http://localhost:5000/")
  
    console.log(data)
  }
  return (
    <MainScreen title="Welcome Back Param">
      <Link to="/createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }}>
          Create New Note
        </Button>
      </Link>
      {notes?.map((note) => (
        <Accordion>
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
               {/* <Accordion.Toggle as={Card.Text} variant="link" eventKey="0"> */}
                  {note.title}
                {/* </Accordion.Toggle> */}
              </span>
              <div>
                <Link to={`/note/${note._id}`}>
                  {" "}
                  <Button>Edit</Button>
                </Link>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            {/* <Accordion.Collapse eventKey="0"> */}
              <Card.Body>
                <h4>
                  <Badge variant="success">Category - {note.category}</Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <ReactMarkdown>{note.content}</ReactMarkdown>
                  <footer className="blockquote-footer">
                    Created on{" "}
                    <cite title="Source Title">
                      {/* {note.createdAt.substring(0, 10)} */}
                      "ab"
                    </cite>
                  </footer>
                </blockquote>
              </Card.Body>
            {/* </Accordion.Collapse> */}
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
