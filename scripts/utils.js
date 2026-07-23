import fs from "fs";

const DATABASE = "./redirects.json";

export function loadRedirects() {
    return JSON.parse(
        fs.readFileSync(DATABASE, "utf8")
    );
}

export function saveRedirects(data) {
    fs.writeFileSync(
        DATABASE,
        JSON.stringify(data, null, 2) + "\n"
    );
}

export function validateSlug(slug) {

    if (!slug)
        throw new Error("Redirect slug is required.");

    if (!/^[a-z0-9-]+$/.test(slug))
        throw new Error(
            "Slug may only contain lowercase letters, numbers and hyphens."
        );

}

export function validateURL(url) {

    try {

        const parsed = new URL(url);

        if (
            parsed.protocol !== "http:" &&
            parsed.protocol !== "https:"
        ) {

            throw new Error();

        }

    }

    catch {

        throw new Error("Invalid destination URL.");

    }

}

export function redirectStatus(text) {

    if (!text)
        return 301;

    return text.includes("302")
        ? 302
        : 301;

}

export function extractField(body, label) {

    const lines = body.split("\n");

    const index = lines.findIndex(line =>
        line.trim() === label
    );

    if (index === -1)
        return "";

    let value = "";

    for (let i = index + 1; i < lines.length; i++) {

        const line = lines[i].trim();

        if (!line)
            continue;

        if (line.startsWith("###"))
            break;

        value += line + " ";

    }

    return value.trim();

}
