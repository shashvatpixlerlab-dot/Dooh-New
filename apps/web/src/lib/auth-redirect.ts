/** Full-page navigation so the auth cookie is sent before middleware runs. */
export function redirectAfterAuth(path: string) {
  window.location.replace(path);
}
