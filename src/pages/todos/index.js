import React, {useEffect, useState} from 'react';
import {Loader, Snackbar} from '../../components'
import axios from 'axios';
import Box from './box'
import {useNavigate} from "react-router-dom";
import RouteNames from "../../routes/RouteNames";
import {API_URL} from "../../environment";
import './style.scss'

function Index(props) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    if (API_URL !== 'undefined' && API_URL != undefined) {
      axios.get(API_URL)
        .then(data => {
          setItems(data.data);
          setLoading(false)
        }).catch(err => {
        console.log(err);
        setError(err?.message)
        setLoading(false)
      })
    } else {
      setLoading(false)
      setError('Make .env file and put variable REACT_APP_TODO_LIST_URL')
    }
  }, []);

  const onClickHandler = (item) => navigate(`${RouteNames.Todo.home2}/${item.id}`);

  return (
    <div className='todos__container'>

      {error && <Snackbar message={error} type={'error'}/>}

      {loading ? <Loader/> : (items).map((item, key) => (
        <Box key={key} item={item} title={item.title} status={item.completed} onClick={onClickHandler}/>
      ))}
    </div>);
}

export default Index;