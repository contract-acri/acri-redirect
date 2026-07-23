import redirects from "../redirects.json";

export async function onRequest(context) {
  const slug = context.params.path;

  // Ignore homepage
  if (!slug) {
    return context.next();
  }

  // Find redirect
  const redirect = redirects[slug];

  // Redirect if found
  if (redirect) {
    return Response.redirect(
      redirect.url,
      redirect.status || 301
    );
  }

  // Otherwise show the custom 404 page
  return context.env.ASSETS.fetch(
    new Request(new URL("/404.html", context.request.url))
  );
}
