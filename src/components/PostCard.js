import React, { Component } from 'react'
import { Card, Feed, Icon } from 'semantic-ui-react'
import '../css/Post.css';

const PostCard = () => (
  <Card className="card__post">
    <Card.Content>
      <Card.Header>
        <Feed>
          <Feed.Event>
            <Feed.Label image='https://picsum.photos/id/243/200' />
            <Feed.Content className="post--owner--username">997_416</Feed.Content>
          </Feed.Event>
        </Feed>
      </Card.Header>
    </Card.Content>
    <img className="post--img" src="https://picsum.photos/id/308/400/300" alt=""/>
    <Card.Content>
      <div className="post--icons">
        <Icon name='heart outline' size='big' />
        <Icon name='comment outline' size='big' />
        <Icon className="right" name='bookmark outline' size='big' />
      </div>
      <div className="post--likes">
        29 個讚
      </div>
      <div className="post--content">
        <div className="post--content--username">997_416</div>
        <div className="post--content--context">我不知道該發什麼只好貼上乳酪蛋糕做法
自己做健康又好吃準備所有材料
低筋麵粉過篩奶油放入耐熱容器裡隔水加熱使其融化
檸檬清洗乾淨外皮再刨絲及榨汁備用
先將奶油乳酪放置於室溫軟化
製作餅皮餅乾放入較厚的食物袋中用桿麵棍敲碎
將融化的奶油稍微冷卻後備用
將奶油倒入餅乾袋裡攪拌混合
倒入模型中用杯子或湯匙等工具輕壓</div>
      </div>
      <div className="post--extendComment">
        <button className="extend">查看全部 3 則留言</button>
      </div>
      <div className="post--comment">
        <span className="post--comment--username">lmnooney</span>
        <span className="post--comment--context">這麼好看的圖配這個？？？</span>
      </div>
    </Card.Content>
    <Card.Content>
      <LeaveMessage />
    </Card.Content>
  </Card>
)

const LeaveMessage = () => {
  return(
    <div className="post--leaveMessage">
      <input type="text" placeholder="留言..."/>
      <button className="send">發佈</button>
    </div>
  )
}

export default PostCard