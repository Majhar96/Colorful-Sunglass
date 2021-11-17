import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import './Purchase.css'

const Purchase = () => {

    const { productId } = useParams();
    const [products] = useProducts();
    const [specifiqProduct, setSpecifiqProduct] = useState({});

    useEffect(() => {
        if (products.length > 0) {
            // eslint-disable-next-line eqeqeq
            const matchedData = products.find(product => product._id == productId);
            setSpecifiqProduct(matchedData);
        }

    }, [productId, products])

    return (
        <div className="d-flex justify-content-center">
            <div className="purchase ">
                <img className="purchase-image" src={specifiqProduct?.img} alt="booking" />
                <h3>{specifiqProduct?.name}</h3>
                <h2>{specifiqProduct?.price}</h2>
                <p>{specifiqProduct?.description}</p>
            </div>
        </div>
    );
};

export default Purchase;

