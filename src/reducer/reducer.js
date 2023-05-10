const initialState = {
    myFavorite: []
}

const reducer = (state = initialState, actions) => {
    switch(actions.type){
        case "ADD_FAV":
            return{
                ...state,
                myFavorite: [...state.myFavorite, actions.payload]
            }
        case "REMOVE_FAV":
            return {
                ...state,
                myFavorite: state.myFavorite.filter(fav => fav.id !== Number(actions.payload))
            }    
    default:
        return {...state}
    }
}

export default reducer;