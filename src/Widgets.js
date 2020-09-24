import React from 'react'
import './Widgets.css'
import SearchIcon from '@material-ui/icons/Search';
import { 
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from 'react-twitter-embed';

function Widgets() {
    return (
        <div className="widgets">
          <div className="widgets__input">
              <SearchIcon className="widgets__searchIcon"/>
              <input type="text" placeholder="Search Twitter"/>

          </div>
          <div className="widgets__widgetcontainer">
              <h2>whats happening</h2>
              <TwitterTweetEmbed tweetId={"1405298371"}/>

              <TwitterTimelineEmbed
              sourceType="profile"
              screenName="Nasa"
              options={{ height: 400}} />
              <TwitterShareButton
              url={"https://facebook.com/cleverprogrammer"}
              options={{text: "JS is awesome", via:"hassanyamani"}}/>
          </div>
            
        </div>
    )
}

export default Widgets
