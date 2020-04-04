import React, { Component } from 'react'
import { Card, Feed } from 'semantic-ui-react'

const SuggestionCard = () => (
  <Card className="card__suggestion">
    <Card.Content>
      <Card.Header style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>推薦用戶<span className="checkall">查看全部</span></Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label image='https://picsum.photos/id/38/200' />
          <Feed.Content>
            <Feed.Summary>foodieeee</Feed.Summary>
            <Feed.Meta>Instagram 新用戶</Feed.Meta>
          </Feed.Content>
          <FollowButton />
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='https://picsum.photos/id/139/200' />
          <Feed.Content>
            <Feed.Summary>taipei__</Feed.Summary>
            <Feed.Meta>Instagram 新用戶</Feed.Meta>
          </Feed.Content>
          <FollowButton />
        </Feed.Event>        
        <Feed.Event>
          <Feed.Label image='https://picsum.photos/id/64/200' />
          <Feed.Content>
            <Feed.Summary>asd87324</Feed.Summary>
            <Feed.Meta>Instagram 新用戶</Feed.Meta>
          </Feed.Content>
          <FollowButton />
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
)

const FollowButton = () => {
  return <button className="follow">追蹤</button>
}

export default SuggestionCard