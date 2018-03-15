export default function reducer(state = {
    form:{
        visible: false,
        day: '01.01'
    },
    events: [],
    currentDay: {
        date: '05.01'
    },
    week: [{
        day: 'Sun',
        date: '01.01'
    },{
        day: 'Mon',
        date: '02.01'
    },{
        day: 'Tue',
        date: '03.01'
    },{
        day: 'Wed',
        date: '04.01'
    },{
        day: 'Thu',
        date: '05.01'
    },{
        day: 'Fri',
        date: '06.01'
    },{
        day: 'Sat',
        date: '07.01'
    }] 
}, action) {
    switch (action.type) {
        case 'ADD_EVENT':
            return {...state, events: [...state.events, action.event]};
        case 'TOGGLE_FORM':
            return {
                ...state,
                form: {
                        visible: !state.form.visible,
                        day: action.day
                    }
                };
        case 'UPDATE_TODAY' :
                return {...state, today: action.today};
        default:
            return state;
    }
}
