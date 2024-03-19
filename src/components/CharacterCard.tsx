import { Character } from "../hooks/useCharacters";
import { Card, CardBody, Image, Text } from "@chakra-ui/react";

interface CharacterProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterProps) => {
  return (
    <Card
      maxW="200px"
      width="200px"
      height="330px"
      marginBottom="20px"
      borderRadius="3px"
      overflow="hidden"
    >
      <Image
        objectFit="cover"
        height="80%"
        src={character.image}
        alt="character"
        borderTopRadius="3px"
      />
      <CardBody>
        <Text fontWeight={600} marginLeft="25px" color="#555555">
          {character.name}
        </Text>
        <Text
          fontWeight={300}
          fontSize="13px"
          marginLeft="25px"
          color="#555555"
        >
          {character.location.name}
        </Text>
      </CardBody>
    </Card>
  );
};

export default CharacterCard;
