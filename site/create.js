const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');

const directoryPath = path.join(__dirname, 'pages');

const title = 'ScrubJay - miscellaneous links and thoughts';
const description = 'Random bits and bobs of interesting rabbit holes';
const baseUrl = 'https://scrubjay.xyz';

const htmlTemplate = data => `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>${data.title}</title>
        <meta name="description" content="${data.description}" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="${data.title}" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="${data.pageUrl}" />
        <meta property="og:image" content="${data.imageUrl}" />
        <meta property="og:locale" content="en_US" />
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
        <link href="site.webmanifest" rel="manifest" />
        <link href="css/normalize.css" rel="stylesheet" />
        <link href="css/main.css" rel="stylesheet" />
        <meta name="theme-color" content="#80c8bc" />
    </head>
    <body>
        <nav>
            <div class="item"></div>
            <div class="nav-center">
                ${data.navigation}
            </div>
            <div class="item"></div>
        </nav>

        <article>
            <div class="item"></div>
            <div class="item item-center">
                ${data.content}
            </div>
            <div class="item"></div>
        </article>
        <script src="js/vendor/modernizr-3.11.2.min.js"></script>
        <script src="js/plugins.js"></script>
    </body>
</html>
`;

const siteManifest = {
    "short_name": "Scrub Jay",
    "name": "Scrub Jay",
    "description": "Blog for interesting things",
    "icons": [
        {
            "src":"/android-chrome-192x192.png",
            "sizes":"192x192",
            "type":"image/png"
        },
        {
            "src":"/android-chrome-512x512.png",
            "sizes":"512x512",
            "type":"image/png"
        }
    ],
    "start_url": "/?utm_source=homescreen",
    "background_color": "#fafafa",
    "theme_color": "#80c8bc",
    "display": "standalone"
}

siteManifest['name'] = title;
siteManifest['description'] = description;
function slugify(v) {
    return v.toLowerCase().replace(' ', '-');
}

function createNavigation(pageNames) {
    const navElementTemplate = (urlSlug, text) => `<div class="nav-item"><a href="/${urlSlug}.html">${text}</a></div>`;
    return pageNames.map((v) => {
        if (v === 'index') {
            return navElementTemplate(slugify(v), 'Home');
        }
        return navElementTemplate(slugify(v), v);
    }).join('\n');
}

function compilePage(pageData, navigation, urlSlug) {
    return htmlTemplate({
        "title": title,
        "description": description,
        "navigation": navigation,
        "content": pageData.content,
        "pageUrl": baseUrl + '/' + urlSlug,
        "imageUrl": baseUrl + '/android-chrome-512x512.png',
    });
}

function processPageData(pagesData) {
    const navigation = createNavigation(pagesData.map((v) => v.name));
    const outputPages = {}; // {"page-url": "compiled page"}
    pagesData.forEach((pageData) => {
        const urlSlug = slugify(pageData.name);
        const page = compilePage(pageData, navigation, urlSlug);
        outputPages[urlSlug] = page;
    });
    for (slug in outputPages) {
        fs.writeFile(path.join(__dirname, 'output', slug + '.html'), outputPages[slug], (err) => {
            if (err) throw err;
        });    
    }

    fs.readdir(path.join(__dirname, 'static-root'), function (err, files) {
        if (err) throw err;
        files.forEach(function (file) {
            fs.copyFile(path.join(__dirname, 'static-root', file), path.join(__dirname, 'output', file), (err) => {
                if (err) throw err;
            });    
        });
    });

    fse.copy(path.join(__dirname, 'js'), path.join(__dirname, 'output', 'js'), function (err) {
        if (err) throw err;
    });
    fse.copy(path.join(__dirname, 'img'), path.join(__dirname, 'output', 'img'), function (err) {
        if (err) throw err;
    });
    fse.copy(path.join(__dirname, 'css'), path.join(__dirname, 'output', 'css'), function (err) {
        if (err) throw err;
    });
}

function main() {
    fs.readdir(directoryPath, function (err, files) {
        if (err) throw err;
        pagesData = [];
        files.forEach(function (file) {
            pagesData.push(require(path.join(directoryPath, file)));
        });
        processPageData(pagesData);
    });
}

main();