import React from 'react'
import { Card, Feed } from 'semantic-ui-react'

const StoryCard = () => (
  <Card className="card__story">
    <Card.Content>
      <Card.Header>限時動態</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label image='https://picsum.photos/id/600/200' />
          <Feed.Content>
            <Feed.Summary>kiangmay</Feed.Summary>
            <Feed.Date content='2 小時前' />
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='https://picsum.photos/id/301/200' />
          <Feed.Content>
            <Feed.Summary>kelly423</Feed.Summary>
            <Feed.Date content='5 小時前' />
          </Feed.Content>
        </Feed.Event>        
        <Feed.Event>
          <Feed.Label image='https://picsum.photos/id/913/200' />
          <Feed.Content>
            <Feed.Summary>j8453</Feed.Summary>
            <Feed.Date content='1 天前' />
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='https://picsum.photos/id/873/200' />
          <Feed.Content>
            <Feed.Summary>kk_______</Feed.Summary>
            <Feed.Date content='1 天前' />
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='https://picsum.photos/id/203/200' />
          <Feed.Content>
            <Feed.Summary>godreplyme</Feed.Summary>
            <Feed.Date content='1 天前' />
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='https://picsum.photos/id/388/200' />
          <Feed.Content>
            <Feed.Summary>fff97</Feed.Summary>
            <Feed.Date content='1 天前' />
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='https://picsum.photos/id/412/200' />
          <Feed.Content>
            <Feed.Summary>yi.1998</Feed.Summary>
            <Feed.Date content='1 天前' />
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='https://picsum.photos/id/55/200' />
          <Feed.Content>
            <Feed.Summary>hello357</Feed.Summary>
            <Feed.Date content='1 天前' />
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
)

export default StoryCard