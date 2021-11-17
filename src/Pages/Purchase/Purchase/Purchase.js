import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Purchase.css'

const Purchase = () => {

    const { productName } = useParams();

    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`https://cryptic-badlands-93599.herokuapp.com/purchase/${productName}`)
            .then(res => res.json())
            .then(data => console.log(data));
    }, [productName])

    return (
        <div className="d-flex justify-content-center">
            <div className="purchase ">
                <img className="purchase-image" src={product?.img} alt="booking" />
                <h3>{product?.name}</h3>
                <h2>{product?.price}</h2>
                <p>{product?.description}</p>
            </div>
        </div>
    );
};

export default Purchase;