import { Redirect} from 'react-router-dom';

const Match=(props)=>{
    console.log(props.IsLoggedInValue);
    if(props.IsLoggedInValue===true){
        return <Redirect to={'/Home'}/>;
    }else return <Redirect to={'/'}/>
}
export default Match;