import React from 'react';
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';

export default function Search(props) {
  return (
    <>
      <InputGroup className='mb-3'>
        <InputGroup.Prepend>
          <Button
            variant="outline-secondary"
            onClick={props.getCards}
            >Search</Button>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Search for a card"
          aria-label="Card name search"
          aria-describedby="card-name-search"
          id="searchName"
          onChange={(event) => props.setSearchName(event.target.value)}
          value={props.searchName}
        >
        </FormControl>
      </InputGroup>

      <div className="form-group">
        <label htmlFor="set">Set</label>
        <select
          className="form-control"
          id="set"
          onChange={(event) => props.setSearchSet(event.target.value)}
          value={props.searchSet}
        >
          <option value="all">- Select Set-</option>
          <option value="LEA">Alpha (Limited Edition)</option>
          <option value="LEB">Beta (Limited Edition)</option>
          <option value="2ED">Unlimited Edition</option>
          <option value="ARN">Arabian Nights</option>
          <option value="ATQ">Antiquities</option>
          <option value="3ED">Revisieed Edition</option>
          <option value="LEG">Legends</option>
          <option value="DRK">The Dark</option>
          <option value="FEM">Fallen Empires</option>
          <option value="4ED">Fourth Edition</option>
          <option value="ICE">Ice Age</option>
          <option value="CHR">Chronicles</option>
          <option value="HML">HomeLands</option>
          <option value="ALL">Alliances</option>
          <option value="MIR">Mirage</option>
          <option value="VIS">Visions</option>
          <option value="5ED">Fifth Edition</option>
          <option value="POR">Portal</option>
          <option value="WTH">Weatherlight</option>
          <option value="TMP">Tempest</option>
          <option value="STH">Stronghold</option>
          <option value="EXO">Exodus</option>
          <option value="P02">Portal SSecond Age</option>
          <option value="UGL">Unglued</option>
          <option value="USG">Urza's Saga</option>
          <option value="ATH">Anthologies</option>
          <option value="ULG">Urza's Legacy</option>
          <option value="6ED">Sixth Edition</option>
          <option value="PTK">Portal Three Kingdoms</option>
          <option value="UDS">Urza's Desting</option>
          <option value="S99">Starter 1999</option>
          <option value="MMQ">Mercadian Masques</option>
          <option value="BRB">Battle Royale</option>
          <option value="NEM">Nemesis</option>
          <option value="S00">Starter 2000</option>
          <option value="PCY">Prophecy</option>
          <option value="INV">Invasion</option>
          <option value="BTD">Beatdown</option>
          <option value="PLS">Planeshift</option>
          <option value="7ED">Seventh Edition</option>
          <option value="APC">Apocalypse</option>
          <option value="ODY">Odyssey</option>
          <option value="DKM">Deckmasters 2001</option>
          <option value="CHR">Chronicles</option>
          <option value="TOR">Torment</option>
          <option value="JUD">Judgement</option>
          <option value="ONS">Onslaught</option>
          <option value="LGN">Legions</option>
          <option value="SCG">Scourge</option>
          <option value="8ED">Eighth Edition</option>
          <option value="MRD">Mirrodin</option>
          <option value="DST">Darksteel</option>
          <option value="5DN">Fifth Dawn</option>
          <option value="CHK">Champions of Kamigawa</option>
          <option value="UNH">Unhinged</option>
          <option value="BOK">Betrayers of Kamigawa</option>
          <option value="SOK">Saviors of Kamigawa</option>
          <option value="9ED">Ninth Edition</option>
          <option value="RAV">Ravnica: City of Guilds</option>
          <option value="GPT">Guild Pact</option>
          <option value="DIS">Dissension</option>
          <option value="CSP">Coldsnap</option>
          <option value="TSP">Time Spiral</option>
          <option value="PLC">PLanar Chaos</option>
          <option value="FUT">Future Sight</option>
          <option value="10E">Tenth Edition</option>
          <option value="MED">Masters Edition</option>
          <option value="LRW">Lorwyn</option>
          <option value="EVG">Duel Decks: Elves vs. Goblins</option>
          <option value="MOR">Morningtide</option>
          <option value="SHM">Shadowmoor</option>
          <option value="EVE">Eventide</option>
          <option value="DRB">From the Vault: Dragons</option>
          <option value="ME2">Masters Edition II</option>
          <option value="ALA">Shards of Alara</option>
          <option value="CHR">Duel Decks: Jace vs. Chandra</option>
          <option value="CON">Conflux</option>
          <option value="DDC">Duel Decks: Divine vs. Demonic</option>
          <option value="ARB">Alara Reborn</option>
          <option value="M10">Magc 2010</option>
          <option value="TD0">Commander Theme Decks</option>
          <option value="V09">From the Vault: Exiled</option>
          <option value="HOP">PLanechase</option>
          <option value="ME3">Masters Edition 3</option>
          <option value="ZEN">Zendikar</option>
          <option value="DDD">Duel Decks: Garruk vs. Liliana</option>
          <option value="H09">Premium Deck Series: Silvers</option>
          <option value="WWK">Worldwake</option>
          <option value="DDE">Duel Decks: Phyrexia vs. The Coalition</option>
          <option value="ROE">Rise of the Eldrazi</option>
          <option value="DPA">Duels of the Planswalkers</option>
          <option value="ARC">Archenemy</option>
          <option value="M11">Magic 2011</option>
          <option value="V10">From the Vaults: Relics</option>
          <option value="DDF">Duel Decks: Elspeth vs. Tezzeret</option>
          <option value="SOM">Scars of Mirrodin</option>
          <option value="TD0">Magic Online Deck Series</option>
          <option value="PD2">Premium Deck Series: Fire & Lightning</option>
          <option value="ME4">Masters Edition IV</option>
          <option value="MBS">Mirrodin Besieged</option>
          <option value="DDG">Duel Decks: Knights vs. Dragons</option>
          <option value="NPH">New Phyrexia</option>
          <option value="CMD">Commander</option>
          <option value="M12">Magic 2012</option>
          <option value="V11">From the Vault: Legends</option>
          <option value="DDH">Duel Decks: Ajani vs. Nicol Bolas</option>
          <option value="ISD">Innistrad</option>
          <option value="PD3">Premium Deck Series: GraveBorn</option>
          <option value="DKA">Dark Ascension</option>
          <option value="DDI">Duel Decks: Venser vs. Koth</option>
          <option value="AVR">Avacyn Restored</option>
          <option value="PC2">Plancechase 2012</option>
          <option value="M13">Magic 2013</option>
          <option value="V12">From the Vault: Realms</option>
          <option value="DDJ">Duel Decks: Izzet vs. Golgari</option>
          <option value="RTR">Return to Ravnica</option>
          <option value="CM1">Commander's Arsenal</option>
          <option value="TD2">Duel Decks: Mirrodin Pure vs. New Phyrexia</option>
          <option value="GTC">Gatecrash</option>
          <option value="DDK">Duel Decks: Sorin vs. Tibalt</option>
          <option value="DGM">Dragon's Maze</option>
          <option value="MMA">Modern Masters</option>
          <option value="M14">Magic 2014</option>
          <option value="V13">From the Vault: Twenty</option>
          <option value="DDL">Duel Deck: Heroes vs. Monsters</option>
          <option value="THS">Theros</option>
          <option value="C13">Commander 2013</option>
          <option value="BNG">Born of the Gods</option>
          <option value="DDM">Duel Decks: Jace vs. Vraska</option>
          <option value="JOU">Journey into Nyx</option>
          <option value="MD1">Modern Event Deck</option>
          <option value="CNS">Conspiracy</option>
          <option value="VMA">Vintage Masters</option>
          <option value="M15">Magic 2015</option>
          <option value="V14">From the Vaults: Annihilation</option>
          <option value="DDN">Duel Decks: Speed vs. Cunning</option>
          <option value="KTK">Khans of Tarkir</option>
          <option value="C14">Commander 2014</option>
          <option value="DD3">Duel Decks Anthology</option>
          <option value="FRF">Fate Reforged</option>
          <option value="DDO">Duel Decks: Elspeth vs. Kiora</option>
          <option value="DTK">Dragons of Tarkir</option>
          <option value="TPR">Tempest Remastered</option>
          <option value="MM2">Modern Masters 2015</option>
          <option value="ORI">Magic Origins</option>
          <option value="V15">From the Vault: Angels</option>
          <option value="DDP">Duel Decks: Zendikar vs. Eldrazi</option>
          <option value="BFZ">Battle for Zendikar</option>
          <option value="EXP">Zendikar Expiditions</option>
          <option value="C15">Commander 2014</option>
          <option value="PZ1">Legendary Cube</option>
          <option value="OGW">Oath of the Gatewatch</option>
          <option value="DDQ">Duel Decks: Blessed vs. Cursed</option>
          <option value="W16">Welcome Deck 2016</option>
          <option value="SOI">Shadows Over Innistrad</option>
          <option value="EMA">Eternal Masters</option>
          <option value="EMN">Eldritch Moon</option>
          <option value="V16">From the Vaults: Lore</option>
          <option value="CN2">Conspiracy: Tale the Crown</option>
          <option value="DDR">Duel Decks: Nissa vs Ob Nixilis</option>
          <option value="KLD">Kaladesh</option>
          <option value="MPS">Kaladesh Inventions</option>
          <option value="PZ2">Treasure Chests</option>
          <option value="C16">Commander 2016</option>
          <option value="PCA">Planechase Anthology</option>
          <option value="AER">Aether Revolt</option>
          <option value="MM3">Modern Masters 2017</option>
          <option value="DDS">Duel Decks: Mind vs. Might</option>
          <option value="W17">Welcome Deck 2017</option>
          <option value="AKH">Amonkhet</option>
          <option value="MP2">Amonkhet Invocations</option>
          <option value="CMA">Commander Anthology</option>
          <option value="E01">Archenemy: Nicol Bolas</option>
          <option value="HOU">Hours of Devastation</option>
          <option value="C17">Commander 2017</option>
          <option value="XLN">Ixalan</option>
          <option value="DDT">Duel Decks: Merfolk vs. Goblins</option>
          <option value="IMA">Iconic Masters</option>
          <option value="E02">Explorers of Ixalan</option>
          <option value="KLD">From the Vault: Transform</option>
          <option value="UST">Unstable</option>
          <option value="RIX">Rivals of Ixalan</option>
          <option value="A25">Masters 25</option>
          <option value="DDU">Duel Decks: Elves vs. Inventors</option>
          <option value="Q01">Challenger Decks</option>
          <option value="DOM">Dominaria</option>
          <option value="CM2">Commander Anthology Volume II</option>
          <option value="BBD">Battlebond</option>
          <option value="SS1">Signature Spellbook: Jace</option>
          <option value="GS1">Global Series: Jiang Yanggu & Mu Yanling</option>
          <option value="M19">Core Set 2019</option>
          <option value="C18">Commander 2018</option>
          <option value="MED">Guilds of Ravnica Mythic Edition</option>
          <option value="GRN">Guilds of Ravnica</option>
          <option value="SK1">Spellslinger Starter Kit</option>
          <option value="GK1">Guilds of Ravnica Guild Kits</option>
          <option value="GNT">Game Night</option>
          <option value="UMA">Ultimate Masters</option>
          <option value="MED">Ravnica Allegiance Mythic Edition</option>
          <option value="RNA">Ravnica Allegiance</option>
          <option value="GK2">Ravnica Allegiance Guild Kits</option>
          <option value="Q02">Challenger Decks 2019</option>
          <option value="MED">War of the Spark Mythic Edition</option>
          <option value="WAR">War of the Spark</option>
          <option value="MH1">Modern Horizons</option>
          <option value="SS2">Signature Spellbook: Gideon</option>
          <option value="M20">Core Set 2020</option>
          <option value="C19">Commander 2019</option>
          <option value="ELD">Throne of Eldraine</option>
          <option value="GN2">Game Night 2019</option>
          <option value="SLD">Secret Lair Drop Series</option>
          <option value="THB">Theros Beyond Death</option>
          <option value="USD">Unsanctioned</option>
          <option value="Q03">Challenger Decks 2020</option>
          <option value="C20">Commander 2020</option>
          <option value="M21">Core set 2021</option>
          <option value="CC1">Commander Collection: Green</option>
          <option value="CMR">Commander Legends</option>
        </select>
      </div>

      <Form>
        {['checkbox'].map(type => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check inline label="Blue" type={type} id={`inline-${type}-1`} />
            <Form.Check inline label="Black" type={type} id={`inline-${type}-2`} />
            <Form.Check inline label="White" type={type} id={`inline-${type}-2`} />
            <Form.Check inline label="Red" type={type} id={`inline-${type}-2`} />
            <Form.Check inline label="Green" type={type} id={`inline-${type}-2`} />
          </div>
        ))}
      </Form>

    </>
  );
}