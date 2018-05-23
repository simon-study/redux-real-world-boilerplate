/**
 *
 * Asynchronously loads the component for CommentInput
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
