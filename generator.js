const fs = require('fs');
const htmlToText = require('html-to-text');
const showdown = require('showdown');
const showdownHighlight = require('showdown-highlight');
const sortBy = require('lodash/sortBy');

const postPath = './_posts';
const encoding = 'UTF-8';
const sitemapPath = './sitemap.xml';
const metadataPath = './_metadata/metadata.json';
const tagsPath = './_metadata/tags.json';
const postsPath = './_metadata/posts.json';

const getFiles = (dir, files = []) => {
    fs.readdirSync(dir).forEach((file) => {
        const path = `${dir}/${file}`;
        const stat = fs.statSync(path);
        if (stat.isDirectory()) {
            getFiles(path, files);
        } else {
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
    const newPath = `/posts/${f.path.substring(9, f.path.length - 3)}`;
    const metadata = {
        path: newPath,
        preview,
    };
    const post = {
        path: newPath,
        content: html,
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

fs.writeFileSync(sitemapPath, sitemapXml);

const sortedMetadatas = sortBy(Object.values(metadatas), 'date').reverse().reduce((prev, curr) => {
    return Object.assign(prev, { [curr.path]: curr });
}, {});

fs.writeFileSync(metadataPath, JSON.stringify(sortedMetadatas, null, '\t'), {
    encoding: 'UTF-8',
});

fs.writeFileSync(tagsPath, JSON.stringify(tags, null, '\t'));

fs.writeFileSync(postsPath, JSON.stringify(posts, null, '\t'));
