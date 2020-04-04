import React from 'react'
import { Feed } from 'semantic-ui-react'

const UserFeed = () => (
  <div className="feed__user">
    <Feed>
      <Feed.Event>
        <Feed.Label image='https://picsum.photos/id/798/200' />
        <Feed.Content>
          <Feed.Summary>lmnooney</Feed.Summary>
          <Feed.Meta>瑾</Feed.Meta>
        </Feed.Content>
      </Feed.Event>
    </Feed>
  </div>
)

export default UserFeed