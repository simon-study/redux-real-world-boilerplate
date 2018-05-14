// /**
// *
// * SignIn
// *
// */

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// // import styled from 'styled-components';

// class SignIn extends React.Component {
//   // handleChangeEmail = (e) => {
//   //   this.props.onChangeEmail(e.target.value)
//   //   console.log(e.target.value);
//   // }

//   // handleChangePassword = (e) => {
//   //   this.props.onChangePassword(e.target.value)
//   // }

//   render() {
//     return (
//       <div className="auth-page">
//         <div className="container page">
//           <div className="row">
//             <div className="col-md-6 offset-md-3 col-xs-12">
//               <h1 className="text-xs-center">Sign In</h1>
//               <p className="text-xs-center">
//                 <NavLink exact to="/signup">
//                   Need an account?
//                 </NavLink>
//               </p>

//               <form>
//                 <fieldset>
//                   <fieldset className="form-group">
//                     <input
//                       className="form-control form-control-lg"
//                       type="email"
//                       placeholder="Email"
//                       value={this.props.email}
//                       // onChange={this.handleChangeEmail}
//                     />
//                   </fieldset>

//                   <fieldset className="form-group">
//                     <input
//                       className="form-control form-control-lg"
//                       type="password"
//                       placeholder="Password"
//                       value={this.props.password}
//                       // onChange={this.handleChangePassword}
//                     />
//                   </fieldset>

//                   <button
//                     className="btn btn-lg btn-primary pull-xs-right"
//                     type="submit"
//                   >
//                     Sign in
//                   </button>
//                 </fieldset>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// SignIn.propTypes = {

// };

// export default SignIn;
