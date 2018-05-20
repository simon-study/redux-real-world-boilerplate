/**
 *
 * Asynchronously loads the component for ListErrors
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
