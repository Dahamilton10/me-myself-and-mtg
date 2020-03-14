import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../AuthContext";
import "../App.css";
import { Container, Row, Button, Col, InputGroup, FormControl, DropdownButton } from "react-bootstrap";
import Axios from "axios";
import CardDisplay from '../components/CardDisplay';
import Search from '../components/Search';
import DeckList from '../components/DeckList';
import DecksListItem from '../components/DecksListItem';

function Home(props) {

  // an array of cards that are querried by the user
  const [cardList, setCardList] = useState([]);

  // a list of decks for a user
  const [decks, setDecks] = useState([]);

  // The currently selected deck for editing
  const [currentDeck, setCurrentDeck] = useState([]);

  // deckList is a list of cards in a deck NOT A LIST OF DECKS
  const [deckList, setDeckList] = useState([]);

  // the id of the currently selected deck
  const [deckID, setDeckID] = useState('');

  // the name of the currently selected deck
  const [deckName, setDeckName] = useState('');

  // the value of the search input
  const [searchName, setSearchName] = useState('');

  // the value of the search via set option
  const [searchSet, setSearchSet] = useState('');

  // the search values for colors
  const [searchColors, setSearchColors] = useState('');

  // values for the user and whether or not theyre logged in
  const { user, isAuth, logout } = useContext(AuthContext);

  const [secret, setSecret] = useState("");

  // search by name for a card
  const getCards = async () => {
    let response = await Axios.get(`/api/cards/${searchName}`);
    console.log(response.data[0]);
    setCardList(response.data[0].reverse());
  }

  // function to add a deck
  const addDeck = async () => {
    console.log({ user });
    const response = await Axios.post(`/api/deck/${user.id}/${deckName}`);
    console.log(response.data);
    console.log('Getting all decks for current user');
    await getDecks();
    console.log('Got decks');
  }

  // function to get deck data for a user
  const getDecks = async () => {
    if (user.id !== null) {
      const response = await Axios.get(`/api/deck/${user.id}`);
      console.log(response.data);
      setDecks(response.data);
    } else {
      console.log('No user id');
    }
  }

  // This function breaks the app and I dont know why :)
  // This is a function to grab the decks of a user on update of the user state
  // useEffect(() => {
  //   getDecks();
  // }, [user]);



  // function to add a card to a deck
  const addDeckItem = async (cardID) => {
    const response = await Axios.post(`/api/deckItem/${deckID}/${cardID}`);
    console.log(response.data[0]);
    setCardList(response.data[0]);
  }

  // function to get all deckItems with a specified deckID
  const getDeckItems = async () => {
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
    <Container fluid className="signup" id='wholeThing'>
      <Row>
        <Col>
          <Row
            className='display-inline-block'
            id='head'
          >
            <Col>
              <h1>Me, Myself, and MTG</h1>
            </Col>
            <Col>
              <h1>Current Deck</h1>
            </Col>
            <Col>
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
              <DropdownButton
                onClick={e => {
                  e.preventDefault();
                  getDecks()
                }}
                variant='secondary'
                id="current-deck"
                title={deckName}>
                {decks.map((deck) =>
                  <DecksListItem
                    key={deck.id}
                    decks={decks}
                    deckList={deckList}
                    getDeckItems={getDeckItems}
                  />
                )}
              </DropdownButton>
            </Col>
            <Col xs='auto'>
              {isAuth ? (
                <>
                  <Button
                    variant='secondary'
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
                    variant='secondary'
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
                      variant='secondary'
                      className="m-1"
                      onClick={e => {
                        e.preventDefault();
                        props.history.push("/login");
                      }}
                    >
                      Login
              </Button>
                    <Button
                      variant='secondary'
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
