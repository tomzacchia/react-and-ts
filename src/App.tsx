import React from "react";
import { CharacterInformation } from "./CharacterInformation";
import { CharacterType, fetchCharacter } from "./characters";

const App = () => {
  // NOTE: use of generic to assert value returned from React.useState
  // this is a use case of data-fetching and having an initial state
  const [character, setCharacter] = React.useState<CharacterType | null>(null);

  React.useEffect(() => {
    fetchCharacter().then((c) => setCharacter(c));
  }, []);

  return (
    <main>
      {character ? (
        <CharacterInformation character={character} />
      ) : (
        <p>no character</p>
      )}
    </main>
  );
};

export default App;
