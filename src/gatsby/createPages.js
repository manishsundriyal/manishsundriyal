const path = require("path");

const createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return graphql(`
    {
        allMarkdownRemark {
          nodes {
            frontmatter {
              template
              slug
            }
            fields {
              slug
            }
          }
        }
      }
    `).then(result => {
        result.data.allMarkdownRemark.nodes.forEach(node => {
            const pageDetails = {
                path: `/${node.frontmatter.slug}`,
                context: { slug: node.fields.slug },
            };
            if (node.frontmatter.template === "snippet") {
                // snippet layout
                pageDetails.component = path.resolve("./src/templates/snippet/template-1.js")
            } else if (node.frontmatter.template === "blog") {
                // blog layout
                pageDetails.component = path.resolve("./src/templates/blog/template-1.js")
            } else {
                pageDetails.component = null;
            }
            createPage(pageDetails);
        });
    })
}

module.exports = createPages;
