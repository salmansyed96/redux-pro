
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector(state => state.cart); 

  const dispatch = useDispatch();

  const removeToCart = (id) => {
    // Dispatch remove action
    dispatch(remove(id));
  };

  const cards = products.map(product => (
    <div key={product.id} className="col-md-12 d-flex justify-content-center" style={{ marginBottom: "10px" }}>
      <Card className="h-100" style={{ width: "18rem" }}>
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR: {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer className="bg-white">
          <Button variant="danger" onClick={() => removeToCart(product.id)}>
            Remove
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return <div className="row">{cards}</div>;
};

export default Cart;
