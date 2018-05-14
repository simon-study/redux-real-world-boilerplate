// /**
// *
// * ArticleMeta
// *
// */

// import React from 'react';
// import { Link } from 'react-router-dom';

// class ArticleMeta extends React.Component { // eslint-disable-line react/prefer-stateless-function
//   render() {
//     const { article } = this.props;
//     return (
//       <div className="article-meta">
//         <Link to="">
//           <img alt={article.author.username} src={article.author.image} />
//         </Link>
//         <div className="info">
//           <a href="" className="author">{article.author.username}</a>
//           <span className="date">{new Date(article.createdAt).toDateString()}</span>
//         </div>
//         <button className="btn btn-sm btn-outline-secondary">
//           <i className="ion-plus-round"></i>
//           &nbsp;
//           Follow {article.author.username} <span className="counter">(10)</span>
//         </button>
//         &nbsp;&nbsp;
//         <button className="btn btn-sm btn-outline-primary">
//           <i className="ion-heart"></i>
//           &nbsp;
//           Favorite Post <span className="counter">({article.favoritesCount})</span>
//         </button>
//       </div>
//     );
//   }
// }

// ArticleMeta.propTypes = {

// };

// export default ArticleMeta;
