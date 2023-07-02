import React, { Component } from 'react'
import {useStaticQuery, graphql} from "gatsby";

export default function LayoutBasic(props){

    const {children} = props;
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site  {
                siteMetadata {
                    title
                    description
                    author
                }
            }
        }
    `)

    return (
      <div>
        <h1>{data.site.siteMetadata.title}</h1>
        {children}
      </div>
    )
  
}
