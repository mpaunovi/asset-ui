import React, { Component } from 'react';
import axios from 'axios';

class GetAllAssets extends Component {
    state = {
        assets: [],
    };

    componentDidMount() {
        axios.get('http://localhost:8080/api/v1/asset')
            .then(response => {
                this.setState({ assets: response.data });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    render() {
        return (
            <div>
                <h1>Asset List</h1>
                <ul>
                    {this.state.assets.map(asset => (
                        <li key={asset.id}>
                            <strong>Name:</strong> {asset.name}, <strong>Quantity:</strong> {asset.quantity}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default GetAllAssets;
