// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Your Name";
export const AUTHOR_NAME = "Your Name";
export const AUTHOR_INITIAL = "YN";
export const SITE_DESCRIPTION = "Your Name's personal website.";
export const GENERATE_SLUG_FROM_TITLE = true;
export const TRANSITION_API = true;

// Base path helper for GitHub Pages project sites
// In dev: "/" — in prod with BASE_URL: "/ac-site-template/"
const BASE_PATH = import.meta.env.BASE_URL;
export const url = (path: string) => {
  const clean = path.replace(/^\//, "");
  return clean ? BASE_PATH + clean : BASE_PATH;
};
export { BASE_PATH };
