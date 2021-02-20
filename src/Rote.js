import React from 'react'

function Rote({item}) {
    return (
        <div>
            <img src={item.user.avatar_url} alt="git_img" />
            <h5>{item.user.login}</h5>
            <h5>{item.user.id}</h5>
            <p>{item.body}</p>
            
        </div>
    )
}

export default Rote
