import React from 'react'
import { graphql } from "gatsby";

const Template1 = ({ data }) => {
    const post = data.markdownRemark;
    return (
        <div>
            <h1>{post.frontmatter.title}</h1>
            <h4>{post.frontmatter.date}</h4>
            <div dangerouslySetInnerHTML={{ __html: post.html }}/>
        </div>
    )
}

export default Template1;

export const query = graphql`
query SnippetBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        frontmatter {
            title
            date
            template
            slug
            tags
            description
            media
        }
    }
}
`;