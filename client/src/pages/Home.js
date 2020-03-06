import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import "../App.css";
import { Container, Row, Button, Col, Card } from "react-bootstrap";
import Axios from "axios";
import CardDisplay from '../components/CardDisplay';
import Search from '../components/Search';
import DeckList from '../components/DeckList';

function Home(props) {

  const [cardList, setCardList] = useState([]);

  const [searchName, setSearchName] = useState('');

  const [searchSet, setSearchSet] = useState('');

  const [searchColors, setSearchColors] = useState('');

  const []

  const { isAuth, logout } = useContext(AuthContext);

  const [secret, setSecret] = useState("");

  const getCards = async () => {
    const response = await Axios.get('/api/cards');
    console.log(response);
    setCardList(response.data);
  }


  // this function is duplicated in the Members page component
  // consider refactor 
  const getSecret = async () => {
    const secretResponse = await Axios.get("/api/secrets");
    console.log(secretResponse.data);
    setSecret(secretResponse.data);
  };

  return (
    <Container className="signup">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Row
            className='display-inline-block'
          >
            <Col>
              <h1>Logo</h1>
            </Col>
            <Col>
              <h1>Home Page</h1>
            </Col>
            <Col>
              <Button>Manage</Button>
              <Button>Create</Button>
            </Col>
            <Col>
              {isAuth ? (
                <>
                  <Button
                    className="m-1"
                    onClick={e => {
                      e.preventDefault();
                      setSecret('');
                      logout();
                    }}
                  >
                    Logout
              </Button>
                  <Button
                    className="m-1"
                    onClick={e => {
                      e.preventDefault();
                      props.history.push("/members");
                    }}
                  >
                    Members
              </Button>
                </>
              ) : (
                  <>
                    <Button
                      className="m-1"
                      onClick={e => {
                        e.preventDefault();
                        props.history.push("/login");
                      }}
                    >
                      Login
              </Button>
                    <Button
                      className="m-1"
                      onClick={e => {
                        e.preventDefault();
                        props.history.push("/signup");
                      }}
                    >
                      Signup
              </Button>
                  </>
                )}
            </Col>
          </Row>
          <Button
            className="m-1"
            onClick={e => {
              e.preventDefault();
              getSecret();
            }}
          >
            Show Secrets
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h1>{secret}</h1>
        </Col>
      </Row>
      <Row>
        <Col md='2'>
          <Search
          searchSet={searchSet}
          setSearchSet={setSearchSet}

          searchName={searchName}
          setSearchName={setSearchName}

          searchColors={searchColors}
          setSearchColors={setSearchColors}

          getCards={getCards}
          ></Search>
        </Col>
        <Col md='8'>
          <CardDisplay
          cardList={cardList}
          ></CardDisplay>
        </Col>
        <Col md='2'>
         <DeckList></DeckList>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
