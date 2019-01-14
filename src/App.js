import React, { Component } from 'react';
import Detail from './components/Detail';
import Data from './components/data.json';
import Header from './components/header';
import Footer from './components/footer';
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
      <div>
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
      </div>
    )
  }
}
export default App;
