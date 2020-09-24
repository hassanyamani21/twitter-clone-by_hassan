import React, {useState} from 'react'
import './TweetBox.css'
import { Button, Avatar } from "@material-ui/core"
import db from './Firebase'

function TweetBox() {
    
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const sendTweet = (e) => {
      e.preventDefault();

    db.collection("posts").add({
        displayName: "Hassan Yamani",
        username:"hassan developer",
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar: "https://kusocartoon.com/images2/backup/kusoCartoon_16009384520890_avatar.jpg",

    });
     setTweetMessage("");
     setTweetImage("");
    };
    return (
        <div className="tweetbox"> 
            <from>
                <div className="tweetbox__input">
                    <Avatar src="https://kusocartoon.com/images2/backup/kusoCartoon_16009384520890_avatar.jpg"></Avatar>
                    <input 
                    value={tweetMessage} 
                    type="text"
                     placeholder="What's happening?"
                     onChange={(e) => setTweetMessage(e.target.value)}>
                         
                     </input>
                </div>
                <input
                
                className="tweet__image"
                onChange={(e) =>setTweetImage(e.target.value)}
                value={tweetImage}
                placeholder="Optional: Enter image URL"
                type="text"/>
                <div>
                <Button onClick ={sendTweet} type ="submit" className="tweetbox__tweetbutton" > Tweet</Button>
                  </div>
            </from>
        </div>
    )
}

export default TweetBox
