import React, { Component } from 'react';
import css from './bar.module.css';
import Bar from './Bar.js';

export default class ShowBar extends Component {
  render() {
    return (
      <div className={css.showBar}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: 1700,
          }}
        >
          <Bar value={this.props.inInfo.porDisINSS} color="#e67e22" />
          <Bar value={this.props.inInfo.porDisIRPF} color="#c0392b" />
          <Bar value={this.props.inInfo.porNetSalary} color="#16a085" />
        </div>
      </div>
    );
  }
}
