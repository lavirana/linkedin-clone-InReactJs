import React from 'react'
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon  from '@mui/icons-material/FiberManualRecord';
function Widgets() {
    const newsArticle = (heading, Subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                    <FiberManualRecordIcon />
            </div>

            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{Subtitle}</p>
            </div>
        </div>
    );
  return (
    <div className='widgets' >
        <div className='widgets__header'>              
            <h2>LinkedIn News</h2>
              <InfoIcon />
        </div>
        {newsArticle("React Top news", "Top news - 9099 readers")}
        {newsArticle("Tesla hits new high", "cars & auto - 300")}
        {newsArticle("Is Redux too good", "code - 123 readers")}
        {newsArticle("What is Redux", "code - 1233 readers")}
    </div>
  )
}

export default Widgets