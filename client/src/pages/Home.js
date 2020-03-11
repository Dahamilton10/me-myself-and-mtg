import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import "../App.css";
import { Container, Row, Button, Col, InputGroup, FormControl } from "react-bootstrap";
import Axios from "axios";
import CardDisplay from '../components/CardDisplay';
import Search from '../components/Search';
import DeckList from '../components/DeckList';

function Home(props) {

  const [cardList, setCardList] = useState([]);

  const [decks, setDecks] = useState([]);

  // deckList is a list of cards in a deck NOT A LIST OF DECKS
  const [deckList, setDeckList] = useState([]);

  const [deckID, setDeckID] = useState('');

  const [deckName, setDeckName] = useState('');

  const [searchName, setSearchName] = useState('');

  const [searchSet, setSearchSet] = useState('');

  const [searchColors, setSearchColors] = useState('');

  const { user, isAuth, logout } = useContext(AuthContext);

  const [secret, setSecret] = useState("");

  // search by name for a card
  const getCards = async () => {
    const response = await Axios.get(`/api/cards/${searchName}`);
    console.log(response.data[0]);
    setCardList(response.data[0]);
  }

  // function to add a deck
  const addDeck = async () => {
    console.log({ user });
    const response = await Axios.post(`/api/deck/${user.id}/${deckName}`);
    console.log(response.data);
    console.log('Getting all decks for current user');
    await getDecks();
  }

  // function to get deck data for a user
  const getDecks = async () => {
    const response = await Axios.get(`/api/deck/${user.id}`);
    console.log(response.data);
    setDecks(response.data);
  }

  // function to add a card to a deck
  const addDeckItem = async (cardID) => {
    const response = await Axios.post(`/api/deckItem/${deckID}/${cardID}`);
    console.log(response.data[0]);
    setCardList(response.data[0]);
  }

  // function to get all deckItems with a specified deckID
  const getDeck = async () => {
    const response = await Axios.get(`/api/deckItem/${deckID}`);
    console.log(response.data);
    setDeckList(response.data);
  }


  // removes a card from a deck
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
              <InputGroup className='mb-3'>
                <InputGroup.Prepend>
                  <Button
                    variant="outline-secondary"
                    onClick={addDeck}
                  >Create</Button>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Deck name..."
                  aria-label="Deck name input"
                  aria-describedby="add-deck-input"
                  id="deckName"
                  onChange={(event) => setDeckName(event.target.value)}
                  value={deckName}
                >
                </FormControl>
              </InputGroup>
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
