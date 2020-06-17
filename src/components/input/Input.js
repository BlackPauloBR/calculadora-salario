import React, { Component } from 'react';
import css from './input.module.css';
export default class Input extends Component {
  render() {
    const { placeHolder, inText, inDisabled, inClasse, inColor } = this.props;
    return (
      <div className={css.labelInput}>
        <label className={css[inClasse]}>
          {inText}
          <strong>
            <input
              type="text"
              value={placeHolder}
              readOnly={inDisabled}
              style={{ color: inColor, fontWeight: 'bold' }}
            />
          </strong>
        </label>
      </div>
    );
  }
}
