import {connect} from 'react-redux';
import Day from './Day';
import {toggleForm} from '../Actions/actions';

const mapStateToProps = (state, ownProps) => ({
    day: ownProps.day,
    events: getEventsForDay(ownProps.day, state.events),
    today: isDayToday(ownProps.day, state.currentDay)
  });

const isDayToday = (day, currentDay) => (day.date === currentDay.date);
const getEventsForDay = (day, events) => (events.filter(event => event.date === day.date));

const mapDispatchToProps = dispatch => ({
    onClick: day => dispatch(toggleForm(day.date))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Day);
