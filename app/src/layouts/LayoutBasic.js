import React, { Component } from 'react'
import {useStaticQuery, graphql, Link} from "gatsby";
import "./LayoutBasic.css";


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
        <div className='header'>
            <h1>{data.site.siteMetadata.title}</h1>            
            <div className='menu'>
                <Link to="/">index</Link>
                <Link to="/about-me">about</Link>
            </div>
        </div>        
        {children}
      </div>
    )
  
}
