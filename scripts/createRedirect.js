import fs from "fs";

const issueBody = process.env.ISSUE_BODY || "";

const redirectsFile = "./redirects.json";

// -------------------------
// Extract Fields
// -------------------------

function extract(label) {

    const regex = new RegExp(`${label}[\\s\\S]*?\\n\\n`, "i");

    const match = issueBody.match(regex);

    if (!match) return "";

    return match[0]
        .replace(label, "")
        .trim();

}

const slug = extract("Redirect Slug");

const url = extract("Destination URL");

const redirectType = extract("Redirect Type");

const description = extract("Description");

// -------------------------
// Validation
// -------------------------

if (!slug)
    throw new Error("Redirect slug missing.");

if (!/^[a-z0-9-]+$/.test(slug))
    throw new Error("Invalid slug.");

if (!url.startsWith("http://") && !url.startsWith("https://"))
    throw new Error("Invalid URL.");

// -------------------------
// Load Database
// -------------------------

const redirects = JSON.parse(
    fs.readFileSync(redirectsFile, "utf8")
);

// -------------------------
// Duplicate Check
// -------------------------

if (redirects[slug]) {

    throw new Error(`Redirect "${slug}" already exists.`);

}

// -------------------------
// Create Redirect
// -------------------------

redirects[slug] = {

    url,

    status: redirectType.startsWith("302") ? 302 : 301,

    description

};

// -------------------------
// Save
// -------------------------

fs.writeFileSync(

    redirectsFile,

    JSON.stringify(redirects, null, 2)

);

console.log(`Created redirect "${slug}"`);
