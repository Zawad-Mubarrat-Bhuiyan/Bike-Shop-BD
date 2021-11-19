import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';
const Products = () => {
      const [product, setProduct] = useState([])

      useEffect(() => {

            fetch('http://localhost:5000/products')
                  .then(res => res.json())
                  .then(data => setProduct(data))
      }, [])
      return (
            <div>
                  <div className="container">
                        <h1 style={{ color: "#56D5C4" }} className="fs-1">Our All Products</h1>
                        <Row xs={1} md={3} className="g-4">

                              {
                                    product.map(car => <Product
                                          key={car._id}
                                          car={car}
                                    ></Product>)
                              }

                        </Row>

                  </div>
            </div>
      );
};

export default Products;