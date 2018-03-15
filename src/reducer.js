export default function reducer(state = {
    formVisible: false,
    events: [],
    today: 0
}, action) {
    switch (action.type) {
        case 'ADD_EVENT':
            return {...state, events: [...state.events, action.event]};
        case 'TOGGLE_FORM':
            return {
                ...state,
                formVisible: !state.formVisible,
                currentEventDay: action.day
                }
        case 'UPDATE_TODAY' :
                return {...state, today: action.today};
        default:
            return state;
    }
}
