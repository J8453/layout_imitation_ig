import React from 'react';
import StoryCard from './StoryCard';
import SuggestionCard from './SuggestionCard';
import UserCard from './UserCard';
import '../css/RightColumn.css';

const RightColumn = () => {
  const footer = ['關於','使用說明','新聞稿','API','工作機會','隱私','使用條款','地點','熱門帳號','主題標籤','語言'];
  return(
    <div className="column right">
      <div className="fixed">
        <UserCard />
        <StoryCard />
        <SuggestionCard />
        <div className="footer">
          {footer.map((item, i)=>{
            return<Link title={item} key={i} />
          })}
        </div>
      </div>
    </div>
  )
}

function handleClick(e) {
  e.preventDefault();
}

const Link = (props) => {
  return (
    <span>
      <a href="/" onClick={handleClick}>{props.title}</a>
      <span>·</span>
    </span>
  )
}

export default RightColumn