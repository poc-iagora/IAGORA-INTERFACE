import React, { Component } from 'react';
import axios from 'axios';

class Expert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: 'test', // Endpoint actuel
    };
  }

  componentDidMount() {
    // Au chargement du composant, effectuez une requête vers le serveur Flask
    axios.get('/get_endpoint')
      .then((response) => {
        this.setState({ endpoint: response.data.endpoint });
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération de l\'endpoint :', error);
      });
  }

  handleClick = () => {
    const { endpoint } = this.state;
    console.log(endpoint)
    // Utilisez l'endpoint actuel pour effectuer une action
    // ...
  };

  render() {
    const { endpoint } = this.state;

    return (
      <div>
        <button onClick={this.handleClick}>Effectuer une action</button>
        <p>Endpoint actuel : {endpoint}</p>
      </div>
    );
  }
}

export default Expert;