// import React from 'react';

// const Detail = ({phone})=>{
//   let click = () => alert(phone.model);
//   let booking = (e) => {
//     if(e.type === 'click'){
//       alert("Order is booked");
//     }
//   }
//   return(
//     <div>
//       <h3 onClick={click}>{phone.model}</h3>
//       <p><button onClick={booking}>book</button></p>
//     </div>
//   )
// }
// export default Detail;
/////////////////////////////////
//
import React, { Component } from 'react';

class Detail extends Component {
  constructor(props){
    super(props)
    this.state = {
      active: false
    }
  }

  click = () => {
    this.setState({
      active: !this.state.active
    })
    console.log(this.state.active);
  }

  render() {
    const {phone} = this.props
    const {active} = this.state;
    return (
      <div id="detail">
        <h1>{phone.model}</h1>
        {active === false ?
        (<button onClick={this.click}>Book this phone</button>):
        (<button onClick={this.click}>{phone.content}</button>)
      }
      </div>
    );
  }

}

export default Detail;
