import React from 'react'
interface DocsProps {
    params : {
        slug: string[]
    }
}
const Docs = ({params}: DocsProps) => {
  return (
    <div>Docs Page{params.slug?.join('/')}</div>
  )
}

export default Docs