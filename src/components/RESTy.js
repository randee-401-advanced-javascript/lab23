import React from 'react';
import Form from './Form';
import Results from './Results';

class RESTy extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      url: '',
      method: 'GET',
      headers: {},
      body: {},
    }
  };

  onURLChange(e){
    console.log('inside URL CHANGE handler')
    console.log('*****************');
    console.log('THIS DOT STATE');
    console.log('*****************');
    console.log(this.state)
    console.log('e.target.val', e.target.value);
    this.setState({...this.state, url: e.target.value})
  }

  onMethodChange(e){
    this.setState({...this.state, method: e.target.value});
  }

  async onSubmit () {
    // console.log('*****************');
    // console.log('THIS DOT STATE');
    // console.log('*****************');
    console.log(this.state)
    console.log(' attempting to make a ', this.state.method, 'request to ', this.state.url);
    
    let body;
    let headers = {};

    let res = await fetch(this.state.url, {
      method: this.state.method, 
      headers: {
        Accept: 'application/json',
      }
    });

    if (res.status === 200) {
      body = await res.json();

      for (const entry of res.headers.entries()) {
        headers[entry[0]] = entry[1];
      }
    }

    this.setState({ headers, body });
 
  }

  render() {
    return (
      <>
      <h1>RESTy</h1>
      <Form
        url={this.state.url}
        onURLChange={this.onURLChange.bind(this)}
        onMethodChange={this.onMethodChange.bind(this)}
        onSubmit={this.onSubmit.bind(this)}
        />
      <Results
        tabWidth={2}
        headers={this.state.headers}
        body={this.state.body}
        />
      </>
    )
  }
}

export default RESTy