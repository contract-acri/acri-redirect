import {
    loadRedirects,
    saveRedirects,
    validateSlug,
    extractField
} from "./utils.js";

const body = process.env.ISSUE_BODY || "";

const slug = extractField(body, "Redirect Slug");

validateSlug(slug);

const redirects = loadRedirects();

if (!redirects[slug]) {
    throw new Error(`Redirect "${slug}" does not exist.`);
}

delete redirects[slug];

saveRedirects(redirects);

console.log(`✓ Deleted redirect: ${slug}`);
