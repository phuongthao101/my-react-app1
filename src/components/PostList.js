import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'


const PostList = (props) => {
  const { posts } = props



  const [data, setData] = useState(posts)
  const [open, setOpen] = useState()

  useEffect(() => {
    setData(posts)
  }, [posts])

  const handleClick = (id) => {
    console.log('id cua title ne: ' + id)
    setOpen(id)
  }
  console.log('gia tri cua open ' + open);
  const handleOnChange = (e) => {
    setData(data.map(item => item.id == open ? { ...item, title: e.target.value } : item))
  }

  // const handleOnChange = (id) => {
  //   setData(data.map(item => item.id == id ? { ...item, title: "úaduaodupa" } : item))
  // }

  return (
    <ul className='post-list'>
      {data.map(dataItem => (
        <>
          <li key={dataItem.id} onClick={() => handleClick(dataItem.id)}>{dataItem.title}</li>
          <input type="text" hidden={open === dataItem.id ? false : true} onChange={handleOnChange} />
        </>
      ))}
    </ul>
  )



};

// const PostList = (props) => {
//   const { posts } = props
//   return (
//     <ul className='post-list'>
//       {posts.map(post => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   )
// }



PostList.propTypes = {
  posts: PropTypes.array,
};

PostList.defaultProps = {
  posts: [],
};

export default PostList
