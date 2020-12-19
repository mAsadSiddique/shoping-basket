import React from 'react'
import './CardSet.css'
import { Button, Card } from 'react-bootstrap'

interface Props {
    Image: String,
    author: String,
    name: String,
    key: number,
}

const Cardset: React.FC<Props> = ({ Image, name, author, key }): JSX.Element => {
    console.log(Image)
    return (
        <div className="card__container">
            <Card key={key} className="books_list" style={{ width: '18rem' }}>
                <Card.Img className="card__img" variant="top" src={Image?.toString()} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    <div className="author__price__container">
                    <strong>By: </strong>{author}
                    <span className="book__price"><strong>RS 200</strong></span>
                    </div>
                       

                    </Card.Text>
                    <Button className="add__to__cart__button" variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Cardset
