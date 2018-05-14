/**
 *
 * Asynchronously loads the component for ArticleAction
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
