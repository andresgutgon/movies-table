import React, { Component } from 'react';

import './styles/index.css';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.onChange = this._onChange.bind(this);

    this.state = {
      value: '',
    }
  }

  _onChange(event) {
    const { onKeyDown } = this.props;
    this.setState({ value: event.target.value })

    onKeyDown(this._input.value);
  }

  render() {
    const { value } = this.state;

    return (
      <div className='filter'>
        <input
          ref={(c) => this._input = c}
          onChange={this.onChange}
          value={value}
          type='text'
        />
      </div>
    );
  }
}

export default Filter;
