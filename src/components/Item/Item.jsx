import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { db } from '../../firebase/Firebase';
import { getDocs, collection, query, where, limit, getDoc, doc } from 'firebase/firestore';

 function Item({prod}) {

  return (
    <Card className="card" style={{ width: '19rem' }}>
      <Card.Img variant="top" src={prod.image} />
      <Card.Body>
        <Card.Title>{prod.title}</Card.Title>
        <Card.Text>
          {/* {prod.descripcion} */}
        </Card.Text>
        <Card.Text>
          Precio: ${prod.price}
        </Card.Text>
        <Button as={Link} to={`/item/${prod.id}`} variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  )
}

export default Item