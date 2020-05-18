import React from 'react';
import {CardImg, CardText, CardBody, CardLink, Row, Col } from "reactstrap";
import {StyledBookCard} from "./BookStyles";
import { Link } from "react-router-dom";
import "../../App.css"

const Book = (props) => {
    const {imageUrl, rating, title, id, goodReadsUrl, review} = props;
    return (
       
            
            <StyledBookCard className="bookCard">
                <CardImg top width="100%" src={imageUrl} alt={title} />
                <CardBody className="cardBody">
                    <CardText>
                        <strong>{`${rating} / 5`}</strong>
                    </CardText>
                    <CardText>
                    {title}
                    </CardText>
                    <CardLink>
                     {review}
                    </CardLink>
                    <CardLink>
                        <Link to={`/edit-book/${id}`}>Edit</Link>
                    </CardLink>
                    <CardLink>
                        {goodReadsUrl && <a href={`${goodReadsUrl}`} target="_blank" rel="noopener noreferrer" >Good Reads</a>}
                    </CardLink>
                </CardBody>
            </StyledBookCard>
       
    );
};

export default Book;