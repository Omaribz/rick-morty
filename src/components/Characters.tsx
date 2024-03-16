import { Text } from "@chakra-ui/react";
import useCharacters from "../hooks/useCharacters";

const Characters = () => {
  const { characters, error } = useCharacters();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Characters;
