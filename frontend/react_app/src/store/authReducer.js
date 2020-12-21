import * as actionTypes from './authActionTypes' ;

// ########################################################
// Initial State
// ########################################################

export const InitialState = {
    error : null,
    loading : false,
    token : null
}

// A simple function to update the state with new values
const updateObject = (oldObject , updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

// Different Reducer Functions which change the store state
const authStartReducer = (state , action) =>{
    return updateObject(state,{
        error : null ,
        loading : true
    });
}
const authSuccessReducer = (state,action) =>{
    return updateObject(state , {
        error : null ,
        loading : false,
        token : action.token
    });
}
const authFailReducer = (state , action) =>{
    return updateObject(state , {
        error : action.error,
        loading : false
    });
}
const authLogoutReducer = (state , action) => {
    return updateObject(state , {
        token : null
    }) ;
}

//THe Main Reducer
const Reducer = (state = InitialState , action) => {
    switch(action.type){
        case actionTypes.AUTH_START : return authStartReducer(state,action);
        case actionTypes.AUTH_SUCCESS : return authSuccessReducer(state,action);
        case actionTypes.AUTH_FAIL : return authFailReducer(state,action);
        case actionTypes.AUTH_LOGOUT : return authLogoutReducer(state,action);
    }
}

export default Reducer