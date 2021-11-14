import { useEffect, useState } from 'react';

const useProducts = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://cryptic-badlands-93599.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    // return Products
    return [products]

};

export default useProducts;