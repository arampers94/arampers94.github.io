import React, { Component } from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardLink,
  CardImg,
  Button
} from 'reactstrap';

import ProfilePic from './bakugo4.png'

class InfoCard extends Component {
  render() {
    const { title, subtitle, text } = this.props;
    return (
      <Card>
        <CardImg top width="100%" src={ProfilePic} />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{subtitle}</CardSubtitle>
          <CardText>{text}</CardText>
        </CardBody>
      </Card>
    )
  }
}

export default InfoCard;