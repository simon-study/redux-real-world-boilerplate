/**
 *
 * Asynchronously loads the component for ArticleDetail
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
