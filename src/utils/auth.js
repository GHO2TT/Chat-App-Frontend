import { clearAuthCookies, getUserCookie, getTokenCookie } from './cookies';

// Logout function - clears cookies and redirects
export const logout = (navigate) => {
  clearAuthCookies();
  if (navigate) {
    navigate('/auth');
  } else {
    window.location.href = '/auth';
  }
};

// Check if user is authenticated
export const isAuthenticated = () => {
  const user = getUserCookie();
  const token = getTokenCookie();
  return !!(user && token);
};
