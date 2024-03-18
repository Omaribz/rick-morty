import { Box, Heading, IconButton, SimpleGrid, Text } from "@chakra-ui/react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import useCharacters, { Character } from "../hooks/useCharacters";
import CharacterCard from "./CharacterCard";
import { useState } from "react";

const Characters = () => {
  const [page, setPage] = useState(1);
  const { data, isError, error } = useCharacters(page);

  const characters = data?.results.slice(0, 20);

  if (isError) return <Text>{error.message}</Text>;

  return (
    <>
      <Heading
        textAlign="center"
        marginY="80px"
        fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
        color="#1A365D"
      >
        Rick and Morty
      </Heading>
      <Box backgroundColor="black">
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 4 }}
          spacing={5}
          paddingX={{ base: "50px", md: "100px", lg: "150px", xl: "250px" }}
          paddingTop="20px"
          paddingBottom="30px"
        >
          {characters?.map((character: Character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </SimpleGrid>
        <Box display="flex" justifyContent="center" marginBottom="30px">
          <IconButton
            isRound={true}
            variant="solid"
            colorScheme="teal"
            backgroundColor="#fff"
            aria-label="Done"
            fontSize="20px"
            icon={<GrFormPrevious color="black" />}
            onClick={() => setPage(page - 1)}
            marginRight="2px"
          />
          <IconButton
            isRound={true}
            variant="solid"
            colorScheme="teal"
            backgroundColor="#fff"
            aria-label="Done"
            fontSize="20px"
            icon={<MdNavigateNext color="black" />}
            onClick={() => setPage(page + 1)}
            marginRight="2px"
          />
        </Box>
      </Box>
    </>
  );
};

export default Characters;
