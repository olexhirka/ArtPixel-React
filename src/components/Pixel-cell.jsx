import React from 'react';

export default React.createClass({
  getInitialState: function() {
    return {color: '000'};
  },
  handleClick: function(event) {
    this.setState({color: this.props.currentColor});
  },
  render: function() {
    const { padding, color, width } = this.props;
    let selectedColor = this.state.color;

    const styles = {
      cellWrapper: {
        display: "inline-block",
        width: `${width}%`,
        boxSizing: "border-box",
        padding: padding + 'em'
      },
      cell: {
        backgroundColor: '#' + selectedColor,
        color: 'white',
        position: "relative",
        width: "100%",
        paddingBottom: "100%",
      }
    };

    return <div className="cellWrapper" style={styles.cellWrapper}>
        <div className="cell" onClick={this.handleClick} style={styles.cell}></div>
      </div>;
  }
});
