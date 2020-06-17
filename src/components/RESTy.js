import React from 'react';
import Form from './Form';
import Results from './Results';

class RESTy extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      url: 'https://gitschooledalexaapp.herokuapp.com/potions',
      method: 'GET',
      results: [],
    }
  };

  async updateAPIParams(val, key){
    await this.setState({...this.state, [key]: val})
  }

  async fetchThatAPI () {
    let url = this.state.url;

    let res = await fetch(url, {
      method: this.state.method,
      headers: {
        Accept: 'application/json',
      }
    });

    let data = await res.json();
    data = data.results;
    
    let objects = [];

    for(let i = 0; i < data.length; i ++) {
      objects.push({ src: data[i].urls.thumb, desc: data[i].description })
    }

    this.setState({ ...this.state, results: objects })
  }

  render() {
    return (
      <>
      <h1>GET all your RESTfull info here!</h1>
      <Form
        label='URL'
        value={this.state.query}
        type='text'
        stateKey='query'
        onChange={this.updateAPIParams.bind(this)}
        />
      </>
    )
  }
}

export default RESTy