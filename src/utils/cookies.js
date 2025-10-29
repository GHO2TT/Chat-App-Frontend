import Cookies from 'js-cookie';

// Cookie options for secure storage
const cookieOptions = {
  expires: 7, // 7 days
  secure: false, // Set to true in production with HTTPS
  sameSite: 'lax'
};

// Store user data in cookie
export const setUserCookie = (userData) => {
  Cookies.set('user', JSON.stringify(userData), cookieOptions);
};

// Get user data from cookie
export const getUserCookie = () => {
  const user = Cookies.get('user');
  return user ? JSON.parse(user) : null;
};

// Remove user cookie (logout)
export const removeUserCookie = () => {
  Cookies.remove('user');
};

// Store token in cookie (although backend also sets it as httpOnly)
export const setTokenCookie = (token) => {
  Cookies.set('token', token, cookieOptions);
};

// Get token from cookie
export const getTokenCookie = () => {
  return Cookies.get('token');
};

// Remove token cookie
export const removeTokenCookie = () => {
  Cookies.remove('token');
};

// Clear all auth-related cookies
export const clearAuthCookies = () => {
  removeUserCookie();
  removeTokenCookie();
};
