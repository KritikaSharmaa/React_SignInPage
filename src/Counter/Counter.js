import './Counter.css';
import {useSelector,useDispatch} from "react-redux";
import {IncNum,DecNum} from './action/Action';
const Counter=()=>{
    const curr_state=useSelector((state)=>state.Reducer);
    const dispatch=useDispatch();
    return(
        <>
            <div className="container">
                <input type="text" value={curr_state} className="input"></input>
                <div className="operator">
                    <button className="sub" onClick={()=>dispatch(DecNum())}>-</button>
                    <button className="sum" onClick={()=>dispatch(IncNum())}>+</button>
                </div>
            </div>
        </>
    );
};
export default Counter;