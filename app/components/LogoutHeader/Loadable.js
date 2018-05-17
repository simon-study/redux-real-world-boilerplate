/**
 *
 * Asynchronously loads the component for LogoutHeader
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
