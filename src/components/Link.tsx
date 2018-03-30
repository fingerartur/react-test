import * as React from 'react';
// import PropTypes from 'prop-types';

interface Props {
  active: boolean;
  children: React.Component;
  onClick: any;
}

class Link extends React.Component<Props, {}> {

  render() {
    return (
      <button
       onClick={this.props.onClick}
       disabled={this.props.active}
       style={{ marginLeft: '4px' }}
      >
        {this.props.children}
      </button>
    );
  }
}

// Link.propTypes = {
//   active: PropTypes.bool.isRequired,
//   children: PropTypes.node.isRequired,
//   onClick: PropTypes.func.isRequired
// }

export default Link;
