import React from 'react';
import CircleIcon from "@mui/icons-material/Circle";
import Card from "@mui/material/Card";

function Box({title, status, onClick,classes,item}) {
  return (
    <Card className={`todos__container__card ${classes}`} onClick={()=>onClick(item)}>
      <span className='todos__container__title'>Title: {title}</span>
      <span className='todos__container__status'>
            <span>Status:</span>
            <CircleIcon className={status?`todos__container__status__green`:'todos__container__status__red'}/>
          </span>
    </Card>
  );
}

export default Box;