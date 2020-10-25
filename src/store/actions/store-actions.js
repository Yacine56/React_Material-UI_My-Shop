import * as actionType from "./actionsTypes"


export const addClothe=(clothe)=>{
    return{type:actionType.ADD_CLOTHE,clothe}
}

export const removeClothe=(id)=>{
    return {
        type:actionType.REMOVE_CLOTHE,
        id
    }
}

