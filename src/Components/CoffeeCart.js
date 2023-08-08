import React from 'react';

const CoffeeCart = ({ coffee }) => {
    const { name, quantity, supplier, taste, category, details, photo } = coffee;

    return (
        <div className="card card-side bg-base-100 shadow-xl m-20">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4">

               <div>

               <h2 className="card-title">Name: {name}</h2>
                <p>Taste: {taste}</p>
                <p>Quantity: {quantity}</p>
                <p>Category: {category}</p>

               </div>

                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn">View</button>
                        <button className="btn">Edit</button>
                        <button className="btn">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCart;