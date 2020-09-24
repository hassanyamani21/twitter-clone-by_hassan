import React, { useState, useEffect } from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from './Firebase'
import FlipMove from 'react-flip-move';



function Feed() {

  const [posts, setPosts ] = useState([]);
  
  useEffect(()=> {
    db.collection('posts').onSnapshot(snapshot =>(
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  }, []);
  return (
           <div className="feed">

          {/* header   */}

         <div className="feed__header">
            <h2>Home</h2>
            </div> 

        

          {/* tweet-box */}

          <TweetBox />


          {/* post */}
          <FlipMove>
          { posts.map(post =>(
        
          <Post
          key={post.text}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
          />
          ))}
          </FlipMove>
        
          {/* <Post displayName="Hassan Yamani"
          username='Hassan Developer'
          verified={true}
          text="Hello everyone"
          avatar="https://kusocartoon.com/images2/backup/kusoCartoon_16008754237497_avatar.jpg"
          image="https://media.giphy.com/media/26xBHvvlbngJW73b2/giphy.gif"/>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post /> */}
          <Post /> 
          {/* post */}
          {/* post */}
          {/* post */}
          {/* post*/}
        </div>
    )
}

export default Feed
