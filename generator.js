const fs = require('fs');
const htmlToText = require('html-to-text');
const showdown = require('showdown');
const showdownHighlight = require('showdown-highlight');
const sortBy = require('lodash/sortBy');

const postPath = './_posts';
const encoding = 'UTF-8';
const extension = '.md';
const sitemapPath = './sitemap.xml';
const metadatasPath = './_metadata/metadatas.json';
const tagsPath = './_metadata/tags.json';
const postsPath = './_metadata/posts.json';
const routesPath = './_metadata/routes.json';

const routes = {
    '/': {
        page: '/',
    },
}

const getFiles = (dir = '', files = []) => {
    fs.readdirSync(dir).forEach((file) => {
        const path = `${dir}/${file}`;
        const stat = fs.statSync(path);
        if (stat.isDirectory()) {
            getFiles(path, files);
        } else {
            const filePath = path.replace(postPath, '').replace(extension, '');
            Object.assign(routes, {
                [filePath]: {
                    page: '/post',
                    query: {
                        slug: filePath,
                    },
                },
            });
            files.push({
                path,
                stat,
            });
        }
    });
    return files;
};

const files = getFiles(postPath);

const sitemaps = [];
const metadatas = {};
const posts = {};
const tags = {};

const converter = new showdown.Converter({
    emoji: true,
    tables: true,
    extensions: [showdownHighlight],
});

files.forEach((f) => {
    const file = fs.readFileSync(f.path, {
        encoding,
    });
    const metadataStr = file.split('---', 2)[1].trim();
    const content = file.substring(metadataStr.length + 10);
    const html = converter.makeHtml(content);
    let preview = htmlToText.fromString(html, {
        ignoreHref: true,
        ignoreImage: true,
    });
    if (preview && preview.length > 200) {
        preview = `${preview.substring(0, 200)}...`;
    }
    const newPath = `${f.path.replace(postPath, '').replace(extension, '')}`;
    const metadata = {
        path: newPath,
        preview,
    };
    const post = {
        path: newPath,
        content: html,
        preview,
    };
    const sitemap = {
        path: newPath,
        lastmod: f.stat.mtime,
    };
    metadataStr.split('\r\n').forEach((metaStr, index) => {
        if (index !== 0 || index !== metadataStr.length) {
            const key = metaStr.substring(0, metaStr.indexOf(':'));
            const value = metaStr.substring(metaStr.indexOf(':') + 1);
            if (key) {
                Object.assign(post, { [key]: value.trimLeft() });
                Object.assign(metadata, { [key]: value.trimLeft() });
                if (key === 'tags') {
                    const tagSplit = value.split(',');
                    tagSplit.forEach((tag) => {
                        const trimTag = tag.trimLeft();
                        if (tags[trimTag]) {
                            Object.assign(tags, {
                                [trimTag]: {
                                    total: tags[trimTag].total + 1,
                                    paths: tags[trimTag].paths.concat(newPath),
                                },
                            });
                        } else {
                            Object.assign(tags, {
                                [trimTag]: {
                                    total: 1,
                                    paths: [newPath],
                                },
                            });
                        }
                    });
                }
            }
        }
    });
    sitemaps.push(sitemap);
    Object.assign(metadatas, { [newPath]: metadata });
    Object.assign(posts, { [newPath]: post });
});

const formatDate = (date) => {
    const d = new Date(date);
    let month = `${(d.getMonth() + 1)}`;
    let day = `${d.getDate()}`;
    const year = d.getFullYear();
    if (month.length < 2) month = `0${month}`;
    if (day.length < 2) day = `0 ${day}`;
    return [year, month, day].join('-');
};

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://salgum1114.github.io/react-design-editor</loc>
        <lastmod>2019-04-23</lastmod>
    </url>
    ${sitemaps.reduce((prev, curr, index) => {
        if (index === 0) {
            return prev.concat(
    `<url>
        <loc>https://salgum1114.github.io${curr.path}</loc>
        <lastmod>${formatDate(curr.lastmod)}</lastmod>
    </url>\r\n`
            );
        } else if (index === Object.keys(metadatas).length - 1) {
            return prev.concat(
        `    <url>
        <loc>https://salgum1114.github.io${curr.path}</loc>
        <lastmod>${formatDate(curr.lastmod)}</lastmod>
    </url>`
            );
        }
        return prev.concat(
    `    <url>
        <loc>https://salgum1114.github.io${curr.path}</loc>
        <lastmod>${formatDate(curr.lastmod)}</lastmod>
    </url>\r\n`
        );
    }, '')}
</urlset>`;

const getDate = () => {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

fs.writeFileSync(sitemapPath, sitemapXml);
fs.writeFileSync(`./static/sitemap.xml`, sitemapXml);
console.log(`[${getDate()}]`, 'generated sitemap.xml...');

fs.writeFileSync(routesPath, JSON.stringify(routes, null, '\t'));
console.log(`[${getDate()}]`, 'generated routes.json...');

const sortedMetadatas = sortBy(Object.values(metadatas), 'date').reverse().reduce((prev, curr) => {
    return Object.assign(prev, { [curr.path]: curr });
}, {});
fs.writeFileSync(metadatasPath, JSON.stringify(sortedMetadatas, null, '\t'), {
    encoding: 'UTF-8',
});
fs.writeFileSync(`./static/metadatas.json`, sortedMetadatas);
console.log(`[${getDate()}]`, 'generated metadatas.json...');

fs.writeFileSync(tagsPath, JSON.stringify(tags, null, '\t'));
fs.writeFileSync(`./static/tags.json`, tags);
console.log(`[${getDate()}]`, 'generated tags.json...');

const sortedPosts = sortBy(Object.values(posts), 'date').reverse().reduce((prev, curr) => {
    return Object.assign(prev, { [curr.path]: curr });
}, {});
fs.writeFileSync(postsPath, JSON.stringify(sortedPosts, null, '\t'));
fs.writeFileSync(`./static/posts.json`, sortedPosts);
console.log(`[${getDate()}]`, 'generated posts.json...');
