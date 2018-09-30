import React from 'react';
import { connect } from 'react-redux';
import { switchTool } from '../store/actions/actionCreators';
import { BUCKET } from '../store/reducers/drawingToolReducer';

const Bucket = props => (
  <button
    className={`bucket${props.bucketOn ? ' selected' : ''}`}
    onClick={props.switchBucket}
  />
);

const mapStateToProps = state => ({
  bucketOn: state.present.get('drawingTool') === BUCKET
});

const switchBucketAction = switchTool(BUCKET);
const mapDispatchToProps = dispatch => ({
  switchBucket: () => dispatch(switchBucketAction)
});

const BucketContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Bucket);
export default BucketContainer;
