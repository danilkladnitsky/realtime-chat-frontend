export const isAuthenticated = !!localStorage.getItem('userName');

export const clearUserData = () => {
  localStorage.clear();
};
