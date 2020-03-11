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

  const [deckList, setDeckList] = useState([]);

  const [deckID, setDeckID] = useState('');

  const [searchName, setSearchName] = useState('');

  const [searchSet, setSearchSet] = useState('');

  const [searchColors, setSearchColors] = useState('');

  const { user, isAuth, logout } = useContext(AuthContext);

  const [secret, setSecret] = useState("");

  const getCards = async () => {
    const response = await Axios.get(`/api/cards/${searchName}`);
    console.log(response.data[0]);
    setCardList(response.data[0]);
  }

  const addDeckItem = async (cardID) => {
    const response = await Axios.post(`/api/deckItem/${deckID}/${cardID}`);
    console.log(response.data[0]);
    setCardList(response.data[0]);
  }

  const getDeck = async () => {
    const response = await Axios.get(`/api/cards/${deckID}`);
    console.log(response.data);
    setDeckList(response.data);
  }

  const removeCard = async (cardID) => {
    const response = await Axios.delete(`/api/deckItem/${deckID}/${cardID}`);
    console.log(response.data);
    setDeckList(response.data);
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
        <Col>
          <Row
            className='display-inline-block'
          >
            <Col>
              <h1>Me, Myself, and MTG</h1>
            </Col>
            <Col>
              <h1>Current Deck</h1>
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
        <Col>
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
            addDeckItem={addDeckItem}
          ></CardDisplay>
        </Col>
        <Col md='2'>
          <DeckList
            deckList={deckList}
            removeCard={removeCard}
          ></DeckList>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
