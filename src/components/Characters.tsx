import { Box, Heading, IconButton, SimpleGrid, Text } from "@chakra-ui/react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import useCharacters, { Character } from "../hooks/useCharacters";
import CharacterCard from "./CharacterCard";
import { useState } from "react";
import SkeletonCard from "./SkeletonCard";

const Characters = () => {
  const [page, setPage] = useState(1);
  const { data, isError, error, isPending } = useCharacters(page);
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  if (isError) return <Text>{error.message}</Text>;

  return (
    <>
      <Heading
        textAlign="center"
        marginY="80px"
        fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
        color="#1A365D"
        fontWeight={1000}
      >
        Rick and Morty
      </Heading>
      <Box backgroundColor="black">
        <SimpleGrid
          columns={{ base: 1, md: 3, lg: 4, xl: 4 }}
          spacing={5}
          paddingX={{ base: "85px", md: "80px", lg: "80px", xl: "285px" }}
          paddingTop="50px"
          paddingBottom="30px"
        >
          {isPending &&
            skeletons.map((skeleton) => <SkeletonCard key={skeleton} />)}
          {data?.results.map((character: Character) => (
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
            onClick={() => {
              if (data?.info.previous) setPage(page - 1);
            }}
            marginRight="10px"
          />
          <IconButton
            isRound={true}
            variant="solid"
            colorScheme="teal"
            backgroundColor="#fff"
            aria-label="Done"
            fontSize="20px"
            icon={<MdNavigateNext color="black" />}
            onClick={() => {
              if (data?.info.next) setPage(page + 1);
            }}
            marginRight="10px"
          />
        </Box>
      </Box>
    </>
  );
};

export default Characters;
