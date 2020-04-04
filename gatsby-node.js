const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path")

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === "MarkdownRemark") {
        const slug = createFilePath({ node, getNode, basePath: "posts" });
        createNodeField({
            node,
            name: "slug",
            value: slug,
        });
    }
};

exports.createPages = require("./src/gatsby/createPages");