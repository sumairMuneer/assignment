import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
const TextFieldErrorMessage = ({val})=>{
    return (
        <>
        {val && <p className='error-class' >
                    <ErrorOutlineIcon style={{marginRight:4, fontSize:24}}/>
                    <span style={{ fontSize:16}}>{val.message}</span>
                </p>
        }
        </>
    )
}

export default TextFieldErrorMessage;