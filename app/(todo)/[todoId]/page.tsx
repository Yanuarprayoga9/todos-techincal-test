import React from 'react'
interface page {
    params:
        {todoId:string}
}

const page:React.FC<page>= ({params}) => {
  return (
    <div>id</div>
  )
}

export default page