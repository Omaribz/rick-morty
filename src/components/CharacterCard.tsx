import { Character } from "../hooks/useCharacters";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";

interface CharacterProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterProps) => {
  return (
    <Card overflow="hidden">
      <Image src={character.image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{character.name}</Heading>
        <Text>{character.location.name}</Text>
      </CardBody>
    </Card>
  );
};

export default CharacterCard;
