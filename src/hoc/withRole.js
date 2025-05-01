import React from 'react';
import { useRoles } from '../contexts/RoleContext';

export const withRole = (WrappedComponent, requiredRoles) => {
  return (props) => {
    const { roles } = useRoles();
    const hasPermission = requiredRoles.some(role => roles.includes(role));

    if (!hasPermission) {
      return <p>Access Denied</p>;
    }

    return <WrappedComponent {...props} />;
  };
};
