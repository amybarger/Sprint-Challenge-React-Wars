import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const CharacterCard = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Star Wars Character</CardTitle>
          <CardSubtitle>{props.name}</CardSubtitle>
          <CardText>{props.height}</CardText>
          <CardText>{props.birth_year}</CardText>
          <CardText>{props.gender}</CardText>
          <CardText>{props.homeworld}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default CharacterCard;