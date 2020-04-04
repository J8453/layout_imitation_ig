import React from 'react';
import { Segment, Feed } from 'semantic-ui-react'

const TopRow = () => {
  return(
    <div className="row top">
      <Segment>
        <Feed>
          <Feed.Event className="story">
            <Feed.Label image='https://picsum.photos/id/600/200' />
            <div className="story__username">kiangmay</div>
          </Feed.Event>
          <Feed.Event className="story">
            <Feed.Label image='https://picsum.photos/id/301/200' />
            <div className="story__username">kelly423</div>
          </Feed.Event>
          <Feed.Event className="story">
            <Feed.Label image='https://picsum.photos/id/913/200' />
            <div className="story__username">j8453</div>
          </Feed.Event>
          <Feed.Event className="story">
            <Feed.Label image='https://picsum.photos/id/873/200' />
            <div className="story__username">kk_______</div>
          </Feed.Event>
          <Feed.Event className="story">
            <Feed.Label image='https://picsum.photos/id/203/200' />
            <div className="story__username">godreplyme</div>
          </Feed.Event>
          <Feed.Event className="story">
            <Feed.Label image='https://picsum.photos/id/388/200' />
            <div className="story__username">fff97</div>
          </Feed.Event>
          <Feed.Event className="story">
            <Feed.Label image='https://picsum.photos/id/412/200' />
            <div className="story__username">yi.1998</div>
          </Feed.Event>
          <Feed.Event className="story">
            <Feed.Label image='https://picsum.photos/id/55/200' />
            <div className="story__username">hello357</div>
          </Feed.Event>
        </Feed>
      </Segment>
    </div>
  )
}

export default TopRow