export default function reducer(state = {formVisible: false}, action) {
    switch (action.type) {
        case 'ADD_EVENT':
            return state;
        case 'TOGGLE_FORM':
            return {
                ...state,
                formVisible: !state.formVisible,
                currentEventDay: action.day
                }
        default:
            return state;
    }
}
