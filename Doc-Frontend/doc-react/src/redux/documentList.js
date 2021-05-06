import * as Actions from './actionTypes';


export const documentList = (state ={
    documents:[]
},action) =>{
    
    switch(action.type){
        case Actions.GET_DOCUMENT_LIST:
            return{
                ...state,documents:action.payload.Contents
            }
        case Actions.ADD_DOCUMENT_LIST:
            return { ...state,documents:action.payload.Contents}
        default:
            return state;
        }
        
}