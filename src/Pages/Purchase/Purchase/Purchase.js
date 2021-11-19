import { Alert } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useProducts from '../../hooks/useProducts';
import './Purchase.css'

const Purchase = () => {

    // purchase card dynamic data
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

    const { user } = useAuth();

    // data update in purchase page
    const initialInfo = { customerName: user.displayName, email: user.email, address: '', phoneNumber: '', howMany: '', comment: '' }
    const [purchase, setPurchase] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...purchase };
        newInfo[field] = value;
        setPurchase(newInfo);
    }


    // data submit in purchase page

    const handleSubmit = e => {
        // data collection
        const purchaseSunglass = {
            ...purchase,
        }

        // send to the server
        fetch('http://localhost:5000/customer', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchaseSunglass)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    <Alert severity="success"> successfully done!</Alert>
                }

            });

        e.preventDefault();
    }




    return (
        <div className="d-flex col-sm-6 col-lg-12 col-md-12">
            <div className="purchase ">
                <img className="purchase-image" src={specifiqProduct?.img} alt="booking" />
                <h3>{specifiqProduct?.name}</h3>
                <h2>${specifiqProduct?.price}</h2>
                <p>{specifiqProduct?.description}</p>
            </div>
            <div className="purchase ">
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Name</label>
                        <input type="name" className="form-control" id="exampleFormControlInput1" onBlur={handleOnBlur} name="customerName"
                            defaultValue={user.displayName} />
                        <label htmlFor="exampleFormControlInput1">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" onBlur={handleOnBlur} name="email" defaultValue={user.email} />
                        <label htmlFor="exampleFormControlInput1">Address</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" onBlur={handleOnBlur} name="address" placeholder="address" />
                        <label htmlFor="exampleFormControlInput1">Phone number</label>
                        <input type="number" className="form-control" id="exampleFormControlInput1" onBlur={handleOnBlur} name="phoneNumber" placeholder="phone number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">How many need</label>
                        <select className="form-control" onBlur={handleOnBlur} name="howMany" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Comment</label>
                        <textarea className="form-control" onBlur={handleOnBlur} name="comment" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <br />
                    <button onClick={handleSubmit} type="submit" className="btn btn-primary mb-2">Confirm Purchase</button>
                </form>
            </div>

        </div>
    );
};

export default Purchase;

