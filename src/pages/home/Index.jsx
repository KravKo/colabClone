import React from 'react'
import { Link } from 'react-router-dom'

function Index() {
  return (
    <div>
        <h1>This is the landing page</h1>
        <Link to="/buy">go donate</Link>
    </div>
  )
}

export default Index