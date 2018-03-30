import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';

export const mapStateToProps = (state: any, props: any) => ({
  active: props.filter === state.visibilityFilter
});

export const mapDispatchToProps = (dispatch: Function, props: any) => ({
  onClick: () => dispatch(setVisibilityFilter(props.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
