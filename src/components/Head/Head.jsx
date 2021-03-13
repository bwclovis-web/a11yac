import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ children, title}) => {
    const { site } = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `);
    return (
        <Helmet titleTemplate={`%s | ${site.siteMetadata.title}`}>
            <html lang="en" />
            <meta charSet="utf-8" />
            <title>{title}</title>
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <link rel="alticon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={site.siteMetadata.description} />
            {children}
        </Helmet>
    )
}

export default Head;