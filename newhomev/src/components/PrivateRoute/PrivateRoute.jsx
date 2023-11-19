import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({
    canActivate,
    RedirectPath = '/'
}) => {
  if (!canActivate) {
    return <Navigate to={RedirectPath} replace />
  }
  return <Outlet />;
}

PrivateRoute.propTypes = {
  canActivate: PropTypes.elementType.isRequired,
  RedirectPath: PropTypes.string.isRequired, 
};

export default PrivateRoute;
