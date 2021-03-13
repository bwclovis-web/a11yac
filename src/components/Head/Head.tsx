import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
interface HeadProps {
  title: string;
}

const Head: React.FC<HeadProps> = ({title}) => {
    return (
        <Helmet titleTemplate={`%s | A11Y Accceptance Criteria Library`}>
            <html lang="en" />
            <meta charSet="utf-8" />
            <title>{title}</title>
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <link rel="alticon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
    )
}

export default Head;