import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";


const Product = () => {

    const dispatch = useDispatch();



  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from API
    fetch('https://fakestoreapi.com/products')
      .then(data => data.json())
      .then(result => setProducts(result));
  }, []);

  const addToCart = (product) =>{
    //dispatch an add action
    dispatch(add(product))
  }

  const cards = products.map(product => (
    <div key={product.id} className="col-md-3"  style={{marginBottom: '10px'}} >
      <Card className="h-100" style={{ width: '18rem' }}>
        <div className="text-center">
          <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            INR: {product.price}
          </Card.Text>
          
        </Card.Body>
        <Card.Footer className="bg-white">
  <Button variant="primary" onClick={()=> addToCart(product)}>Add To Cart</Button>
</Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Product Dashboard</h1>
      <div className="row">
        {cards}
      </div>
    </>
  );
}

export default Product;
