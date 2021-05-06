import * as Actions from  './actionTypes'


export const getDocuments =()=>( dispatch)=>{
    return fetch ('http://localhost:3000/listObjects')
    .then(response =>{
        if(response.ok){
        return response;
        }
        else{
            var error = new Error('Error'+ response.status + ':'+response.statusText);
            error.response= response;
            throw error;
        }
    },
        error =>{
            throw error;
        }    
    ).then(response => response.json())
    .then(docList => dispatch(addDocuments(docList)))
    .catch(error => {
        console.log('error in document retrieval',error.message)
    } );

}
export const addDocuments = (docList) =>({
    type: Actions.ADD_DOCUMENT_LIST,
    payload: docList
})
