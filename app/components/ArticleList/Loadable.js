/**
 *
 * Asynchronously loads the component for ArticleList
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
