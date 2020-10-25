import * as actionsTypes from "./actions/actionsTypes"


const intialState={
          clothes:[],
          total:0.00,
          tax:0
}



export const reducer =(state=intialState,action)=>{
 switch (action.type){
    case actionsTypes.ADD_CLOTHE:
        return {
            ...state,
            clothes:[...state.clothes,action.clothe],
            
            total:(+(state.total)+ +(action.clothe.price)).toFixed(2)
        }
    case actionsTypes.REMOVE_CLOTHE:
        return {
            ...state,
            total:(state.total-state.clothes.find(t=>t.id===action.id).price).toFixed(2),
            clothes:state.clothes.filter(item=>!(item.id===action.id)),
            

        }
    default:  
     
 }
    return state 
}