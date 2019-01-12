import React from 'react';

const Detail = ({phone})=>{
  let click = () => alert(phone.model);
  let booking = (e) => {
    if(e.type === 'click'){
      alert("Order is booked");
    }
  }
  return(
    <div>
      <h3 onClick={click}>{phone.model}</h3>
      <p><button onClick={booking}>book</button></p>
    </div>
  )
}
export default Detail;
/////////////////////////////////
//
// import React, { Component } from 'react';
//
// class Detail extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       postItem: null
//     }
//   }
//
//   setPostStateOnProps(){
//     const {phone} = this.props
//     this.setState({
//       postItem: phone
//     })
//   }
//   componentDidUpdate(prevProps, prevState, snapshop){
//     if(this.props !== prevProps){
//       this.setPostStateOnProps()
//     }
//   }
//   componentDidMount(){
//     this.setPostStateOnProps()
//   }
//
//   click = () => {
//     console.log(phone.model);
//   }
//
//   render() {
//     const {postItem} = this.state;
//     return (
//       <div>
//         <h1 onClick={this.click}>{phone.model}</h1>
//       </div>
//     );
//   }
//
// }
//
// export default Detail;
