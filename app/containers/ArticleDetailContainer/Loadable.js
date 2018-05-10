/**
 *
 * Asynchronously loads the component for ArticleDetailContainer
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
