import React,{useState} from 'react'
import style from './NoticeCardBrief.module.css';

export default function NoticeCardBrief(props) {

  const [details, setDetails] = useState([]);
  const showDetails = (event)=>{
    console.log("showing details ");
    let   url = `/api/notice/Search?RefNo=${event.target.value}`;
    loadNotices(url);
    console.log(details);
  }

  function loadNotices(url){
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) =>  {
        let arrData = data.Notices
        setDetails(arrData);
    }
    )
}
  
  return (
    <div className={style.noticeCardBrief}>
        <div className={style.date}>
        &nbsp;{props.info.IssueDate.substring(0,10)}&nbsp;
        </div>
        <div className={style.subject}>
            {props.info.Subject}
        </div>       
        <button className={style.moreBtn} value={props.info.RefNo} onClick={showDetails}>More...</button>   
        <div className={style.department}>
        &nbsp; {props.info.PostedBy} &nbsp;
        </div>
        </div>
  )
}
