/**
 *
 * Asynchronously loads the component for ArticleMeta
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
