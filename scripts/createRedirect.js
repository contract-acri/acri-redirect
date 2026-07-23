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
const url = extractField(body, "Destination URL");
const status = redirectStatus(
    extractField(body, "Redirect Type")
);
const description = extractField(body, "Description");

validateSlug(slug);
validateURL(url);

const redirects = loadRedirects();

if (redirects[slug]) {
    throw new Error(`Redirect "${slug}" already exists.`);
}

redirects[slug] = {
    url,
    status,
    description
};

saveRedirects(redirects);

console.log(`✓ Created redirect: ${slug}`);
