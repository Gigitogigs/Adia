export function getAssetUrl(path: string) {
  // If the path doesn't start with a slash, add one
  const safePath = path.startsWith('/') ? path : `/${path}`;
  // Prepend the base path
  return `/Adia${safePath}`;
}
