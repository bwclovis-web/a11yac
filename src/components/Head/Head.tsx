import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

interface HeadProps {
  title: string;
}

interface HeaderData {
  site: {
    siteMetadata: {
      title: string,
      description: string
    },
  };
}

const Head: React.FC<HeadProps> = ({title}) => {
    const data: HeaderData = useStaticQuery(graphql`
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
        <Helmet titleTemplate={`%s | ${data.site.siteMetadata.title}`}>
            <html lang="en" />
            <meta charSet="utf-8" />
            <title>{title}</title>
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <link rel="alticon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={data.site.siteMetadata.description} />
        </Helmet>
    )
}

export default Head;