import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes'

const initialState = {
    places: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {

        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(), 
                    name: action.placeName,
                    image: {
                      uri: "https://images.unsplash.com/photo-1544546773-b23e03a98e31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    }
                  })
            };

        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter((place, i) => {
                    return place.key !== state.selectedPlace.key;
                })
            };

        default:
            return state;
    }
};

export default reducer;