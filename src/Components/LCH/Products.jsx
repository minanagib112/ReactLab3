import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AddProduct from './AddProduct';

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default function Products() {
  const { data: products, loading } = useFetch('http://localhost:2000/products');

  if (loading) {
    return <p>Loading</p>;
  }
  return (
     <>
      <h1 className='text-center mt-5 '>Products</h1>
      <div className="container text-center row" style={{marginLeft:'100px'}}>

        {products.map((product) => (
            <div className="col-12 col-md-4"  key={product.id}>
              <div className="card mb-3">
                <div className="card-body">
                <img src={product.imgUrl} className="card-img-top"  style={{height:'250px'}} />
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text ">Price: {product.price}</p>
                  <p className="card-text ">Quantity: {product.quantity===0?<p className='bg-danger p-2 text-light'>outOfStock</p>:<p>{product.quantity}</p>}</p>
                </div>
              </div>
            </div>
        ))}
        </div>
    </>
        );
      }
  