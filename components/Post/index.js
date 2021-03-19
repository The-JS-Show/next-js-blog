import React from 'react'

const Post = (props) => (
    <div>
        <h2>{props.title}</h2>
        <p>{props.body}</p>
    </div>
)

export default Post