// /**
//  *
//  * SignInComponent
//  *
//  */

// import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
// import { createStructuredSelector } from 'reselect';
// import { compose } from 'redux';

// import injectSaga from 'utils/injectSaga';
// import injectReducer from 'utils/injectReducer';
// import makeSelectSignInComponent from './selectors';
// import reducer from './reducer';
// import saga from './saga';
// import messages from './messages';
// import SignIn from '../../components/SignIn';

// export class SignInComponent extends React.Component {
//   onChangeEmail = (value) => {
//     this.props.changeEmailAuth(value)
//     console.log(value)
//   }

//   render() {
//     return (
//       <SingnIn onChangeEmail={() => this.props.onChangeEmail(value)} />
//     );
//   }
// }

// SignInComponent.propTypes = {
//   // dispatch: PropTypes.func.isRequired,
// };

// const mapStateToProps = createStructuredSelector({
//   signincomponent: makeSelectSignInComponent(),
// });

// function mapDispatchToProps(dispatch) {
//   return {
//     changeEmailAuth: (value) => dispatch({ type: 'CHANGE_EMAIL', value }),
//     dispatch,
//   };
// }

// const withConnect = connect(mapStateToProps, mapDispatchToProps);

// const withReducer = injectReducer({ key: 'signInComponent', reducer });
// const withSaga = injectSaga({ key: 'signInComponent', saga });

// export default compose(
//   withReducer,
//   withSaga,
//   withConnect,
// )(SignInComponent);
