const fs = require('fs');
const htmlToText = require('html-to-text');
const showdown = require('showdown');

const postPath = './_posts';
const encoding = 'UTF-8';
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
            files.push(path);
        }
    });
    return files;
};

const filePath = getFiles(postPath);

const metadatas = {};
const posts = {};
const tags = {};

const converter = new showdown.Converter();

filePath.forEach((path) => {
    const file = fs.readFileSync(path, {
        encoding,
    });
    const metadataStr = file.split('---', 2)[1].trim();
    const content = file.substring(metadataStr.length + 10);
    const html = converter.makeHtml(content);
    let preview = htmlToText.fromString(html, {
        ignoreHref: true,
        ignoreImage: true,
    });
    if (preview && preview.length > 100) {
        preview = `${preview.substring(0, 100)}...`;
    }
    const newPath = `/posts/${path.substring(9, path.length - 3)}`;
    const metadata = {
        path: newPath,
        preview,
    };
    const post = {
        path: newPath,
        content: html,
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
    Object.assign(metadatas, { [newPath]: metadata });
    Object.assign(posts, { [newPath]: post });
});

fs.writeFileSync(metadataPath, JSON.stringify(metadatas, null, '\t'), {
    encoding: 'UTF-8',
});

fs.writeFileSync(tagsPath, JSON.stringify(tags, null, '\t'));

fs.writeFileSync(postsPath, JSON.stringify(posts, null, '\t'));
