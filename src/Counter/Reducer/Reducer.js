
const Reducer=(state=0,action)=>{
    switch(action.type){
        case "IncrementNumber": return state+1;
        case "DecrementNumber": return state-1;
        default: return state;
    }
};
export default Reducer; 