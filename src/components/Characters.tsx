import { SimpleGrid, Text } from "@chakra-ui/react";
import useCharacters from "../hooks/useCharacters";
import CharacterCard from "./CharacterCard";

const Characters = () => {
  const { characters, error } = useCharacters();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={4} spacing={5} paddingX="250px" paddingY="80px">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Characters;
