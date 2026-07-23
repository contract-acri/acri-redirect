import {
    loadRedirects,
    saveRedirects,
    validateSlug,
    validateURL,
    redirectStatus,
    extractField
} from "./utils.js";

const body = process.env.ISSUE_BODY || "";

const slug = extractField(body, "Redirect Slug");
const url = extractField(body, "New Destination URL");
const status = redirectStatus(
    extractField(body, "Redirect Type")
);

validateSlug(slug);
validateURL(url);

const redirects = loadRedirects();

if (!redirects[slug]) {
    throw new Error(`Redirect "${slug}" does not exist.`);
}

redirects[slug].url = url;
redirects[slug].status = status;

saveRedirects(redirects);

console.log(`✓ Updated redirect: ${slug}`);
