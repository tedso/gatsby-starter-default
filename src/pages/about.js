import React from "react"
import { Link } from "gatsby"
import PageHeader from "../components/page-header"

export default function About() {
    return (
        <div style={{color: "teal"}}>
            <PageHeader headerText="About Gatsby 123"></PageHeader>
            <p>Such wow. Very React.</p>
            <Link to="/">Home</Link>
        </div>
        
    )
}