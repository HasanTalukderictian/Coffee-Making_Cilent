import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const {name} = coffee;
   
    return (
        <div>
             <h2>Update Coffee :{name}</h2>
        </div>
    );
};

export default UpdateCoffee;