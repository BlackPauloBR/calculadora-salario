import React, { Component } from 'react';
import './bar.module.css';

export default class Bar extends Component {
  render() {
    let { value, color = 'black' } = this.props;

    return (
      <div
        style={{
          marginTop: '10px',
          width: value + '%',
          height: '20px',
          backgroundColor: color,
        }}
      />
    );
  }
}
