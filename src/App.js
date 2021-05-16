import React, { Component } from 'react';
import Detail from './components/Details';
import Data from './components/data.json';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      phones: []
    }
  }

  componentDidMount(){
    this.setState({
      phones: Data
    })
  }
  render() {
    return (
      <>
        <Header />
        <br />
        {this.state.phones.map((phone, id) => {
          return <Detail
            phone = {phone}
            key={id}
           />
        })}
        <br />
        <Footer />
      </>
    )
  }
}
export default App;
