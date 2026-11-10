const KEY = "rfg-favorites";

export function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveFavorite(pair) {
  const favorites = getFavorites();
  // avoid exact duplicates (same image + advice)
  const exists = favorites.some(
    (f) => f.image === pair.image && f.advice === pair.advice
  );
  if (exists) return false;
  favorites.push(pair);
  localStorage.setItem(KEY, JSON.stringify(favorites));
  return true;
}

export function removeFavorite(index) {
  const favorites = getFavorites();
  favorites.splice(index, 1);
  localStorage.setItem(KEY, JSON.stringify(favorites));
}

export function clearFavorites() {
  localStorage.removeItem(KEY);
}