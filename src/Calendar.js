export default function Calendar(state = {formVisible: false}, action) {
    switch (action.type) {
        case 'ADD_EVENT': 
            return state;
        case 'TOGGLE_FORM':
            return {
                ...state,
                formVisible: !state.formVisible
                }
        default: 
            return state;
    }
}