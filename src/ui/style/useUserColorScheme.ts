export function getUserPreference() {
  return localStorage.getItem('theme') || 'system';
}

export function saveUserPreference(userPreference: string) {
  localStorage.setItem('theme', userPreference);
}

const useUserColorScheme = (): 'light'| 'dark' => {
  const userPreference = getUserPreference();

  if (userPreference === 'light') return userPreference;
  if (userPreference === 'dark') return userPreference;

  // determine by system
  if (matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }
  return 'dark';
};

export default useUserColorScheme;