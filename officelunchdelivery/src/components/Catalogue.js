// import React, { Component } from 'react'
// import Product from './Product'

// class Catalogue extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       products: []
//     }
//   }

//   componentDidMount() {
//     fetch('')
//       .then(response => response.json())
//       .then(response => {
//         this.setState({
//           products: response
//         })
//       })
//   }

//   render() {
//     return (
//       // <div className="product-style-area pt-130 pb-30 wow fadeInUp">
//         <div className="center">
//           <div className="section-title-mb-95" style={{borderTop:'2px solid grey',marginTop:-420, paddingBottom:30, paddingTop:30}}>
//             {/* <img src={img49} alt="" /> */}
//             <h2>Mutton Dishes</h2>
//           </div>
//           <div className="row">
//             {
//               this.state.products.map(product => {
//                 return (
//                   <div key={product.id} className="col-lg-4 col-xl-3 col-md-6">
//                     <Product item={product} addToCart={this.props.addToCart} />
//                   </div>
//                 )
//               })
//             }

//           </div>
//         </div>
//       // </div>
//     )
//   }
// }

// export default Catalogue