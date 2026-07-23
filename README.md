# ACRI Redirect

> Official URL Redirect Service for the Ahmedabad Centre for Research and Innovation.

ACRI Redirect is a lightweight URL redirection service built for the **Ahmedabad Centre for Research and Innovation (ACRI)**. It provides permanent and temporary short links for official websites, research initiatives, conferences, forms, publications, and other institutional resources.

Hosted on **Cloudflare Pages**, the service is managed directly through **GitHub**, making redirect management transparent, version controlled, and easy to maintain.

---

## Features

- Official short links under `redirect.acriindia.org.in`
- Permanent (301) and Temporary (302) redirects
- Cloudflare Pages deployment
- GitHub-based management
- Redirect creation through GitHub Issue Forms
- Automatic validation
- Automatic deployment after approval
- Version history for every redirect
- Custom landing page and 404 page

---

## Example Links

| Short Link | Destination |
|------------|-------------|
| `/fenilpshah-com` | https://fenilpshah.com |
| `/journal` | https://journal.acriindia.org.in |
| `/forms` | Google Forms |
| `/icoy` | ICOY Website |

---

## Repository Structure

```
acri-redirect/
│
├── .github/
│   ├── ISSUE_TEMPLATE/
│   └── workflows/
│
├── functions/
│   └── [[path]].js
│
├── public/
│   ├── index.html
│   ├── 404.html
│   ├── styles.css
│   └── favicon.ico
│
├── redirects.json
├── package.json
├── wrangler.toml
├── .gitignore
├── LICENSE
└── README.md
```

---

## How Redirects Work

Every redirect is stored inside `redirects.json`.

Example:

```json
{
  "fenilpshah-com": {
    "url": "https://fenilpshah.com",
    "status": 301
  }
}
```

When a visitor opens

```
https://redirect.acriindia.org.in/fenilpshah-com
```

Cloudflare Pages automatically redirects them to the configured destination.

---

## Managing Redirects

Redirects are managed through GitHub.

1. Open a **Create Redirect** issue.
2. Enter the required details.
3. Once approved, GitHub Actions automatically updates the redirect database.
4. Cloudflare Pages deploys the changes automatically.

No manual editing of code is required.

---

## Deployment

This repository is designed for deployment on **Cloudflare Pages**.

After connecting the repository to Cloudflare Pages, every commit automatically triggers a new deployment.

---

## Roadmap

- GitHub Issue Forms
- Automated GitHub Actions
- Redirect analytics
- QR Code generation
- Expiring redirects
- Department ownership
- Click statistics
- Redirect search
- REST API

---

## About ACRI

The **Ahmedabad Centre for Research and Innovation (ACRI)** is an independent institution committed to advancing research, innovation, education, and youth leadership through sustainable institutional systems.

**Building Institutions that Endure Individuals.**

---

## License

This project is licensed under the MIT License.
