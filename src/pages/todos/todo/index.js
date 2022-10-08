import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './style.scss'
import CircleIcon from "@mui/icons-material/Circle";
import Box from '../box'
import axios from "axios";
import {useParams} from "react-router-dom";
import {API_URL} from "../../../environment";
import {Loader, Snackbar} from "../../../components";

function Index() {

  const {todoId} = useParams();
  const [loading, setLoading] = useState(false);
  const [todoItem, setTodoItem] = useState(null);
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true);
    console.log(todoId)
    axios.get(`${API_URL}/${todoId}`)
      .then(data => {
        console.log(data)
        setTodoItem(data.data)
        setLoading(false)
      }).catch(err => {
      console.log(err);
      setError(err?.message)
      setLoading(false)
    })
  }, [todoId]);
  return (
    <div className='todo-container'>
      {error && <Snackbar message={error} type={'error'}/>}
      {loading ? <Loader/> :
        todoItem ? <CardContent>
            <Box title={todoItem.title} status={todoItem.completed} classes='flex-column align-items-start'/>
          </CardContent>
          :
          <p>Nothing to Show</p>
      }
    </div>
  );
}

export default Index;