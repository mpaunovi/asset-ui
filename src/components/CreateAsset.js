import React, { Component } from 'react';
import axios from 'axios';

class CreateAsset extends Component {
    state = {
        asset: {
            name: '',
            quantity: 0, // Initialize quantity as an integer
            // Add other properties as needed
        },
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // Send a POST request to the backend to create a new asset
        axios.post('http://localhost:8080/api/v1/asset', this.state.asset)
            .then(response => {
                // Handle the response (e.g., show a success message or redirect)
                console.log('Asset created:', response.data);
            })
            .catch(error => {
                // Handle errors (e.g., display an error message)
                console.error('Error creating asset:', error);
            });
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            asset: {
                ...prevState.asset,
                [name]: name === 'quantity' ? parseInt(value, 10) : value,
                // Parse quantity as an integer
            }
        }));
    };

    render() {
        return (
            <div>
                <h1>Create Asset</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={this.state.asset.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="quantity">Quantity:</label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            value={this.state.asset.quantity}
                            onChange={this.handleChange}
                        />
                    </div>
                    {/* Add other form fields as needed */}
                    <button type="submit">Create Asset</button>
                </form>
            </div>
        );
    }
}

export default CreateAsset;
