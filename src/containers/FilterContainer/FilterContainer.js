import { connect } from 'react-redux';
import Filter from '../../components/Filter';

import {
  showAll,
  showCompleted,
} from '../../actions';

export default connect(
  (state) => ({
    filter: state.getIn(['filter', 'filter'])
  }),
  (dispatch) => ({
    onShowAll: (event) => (
      dispatch(showAll())
    ),
    onShowCompleted: () => {
      dispatch(showCompleted());
    }
  })
)(Filter);