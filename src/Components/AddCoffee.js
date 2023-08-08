import React from 'react';
import '../App.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const AddCoffee = () => {

    const handleAddform = event =>{

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photoURL.value;

        const  user  = {name,quantity,supplier,taste,category,details,photo};
        console.log(user);

    }


    



    return (
        <div className='App'>
             <h1 className='title'>Add a Coffee </h1>

            <div className='body-form' >
            <form className='container-form' onSubmit={handleAddform}>
                <div className='container-div'>
                    <div className='div-class'>
                    <InputGroup className="input-group">
                        <InputGroup.Text  id="basic-addon1" className='Input-text'>Coffee Name</InputGroup.Text>
                        <Form.Control
                            className='container-name '
                            placeholder="Coffee Name"
                            name='name'
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    </div>
                    <div className='div-class'>
                    <InputGroup className="input-group">
                        <InputGroup.Text id="basic-addon1" className='Input-text'>Available Quantity</InputGroup.Text>
                        <Form.Control
                            placeholder="Available Quantity"
                            className='container-name '
                            aria-label="Username"
                            name='quantity'
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    </div>
                   
                </div>
                <div className='container-div'>
                    <div className='div-class'>
                    <InputGroup className="input-group">
                        <InputGroup.Text  id="basic-addon1" className='Input-text'>Supplier Name</InputGroup.Text>
                        <Form.Control
                            className='container-name '
                            placeholder="Supplier Name"
                            name='supplier'
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    </div>
                    <div className='div-class'>
                    <InputGroup className="input-group">
                        <InputGroup.Text id="basic-addon1" className='Input-text'>Taste</InputGroup.Text>
                        <Form.Control
                            placeholder="Taste"
                            className='container-name '
                            aria-label="Username"
                            name='taste'
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    </div>
                   
                </div>
                <div className='container-div'>
                    <div className='div-class'>
                    <InputGroup className="input-group">
                        <InputGroup.Text  id="basic-addon1" className='Input-text'>Category</InputGroup.Text>
                        <Form.Control
                            className='container-name '
                            placeholder="Category"
                            name='category'
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    </div>
                    <div className='div-class'>
                    <InputGroup className="input-group">
                        <InputGroup.Text id="basic-addon1" className='Input-text'>Details</InputGroup.Text>
                        <Form.Control
                            placeholder="Details"
                            className='container-name '
                            aria-label="Username"
                            name='details'
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    </div>
                   
                </div>
                <div className='container-div'>
                    <div className='div-class'>
                    <InputGroup className="input-group">
                        <InputGroup.Text  id="basic-addon1" className='Input-text'>Photo URL</InputGroup.Text>
                        <Form.Control
                            className='container-name '
                            placeholder="Photo URL"
                            name='photoURL'
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    </div>
                    
                </div> 
                <input type="submit" className="btn-add" value="Add" />
            </form>
            </div>
           
           {/**  form control  **/}
            
        </div>
    );
};

export default AddCoffee;