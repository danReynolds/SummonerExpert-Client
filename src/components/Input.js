import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import ordinal from 'ordinal';
import _ from 'lodash';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import { colors } from '../assets/styles/Common';

export const INPUT_TYPES = {
  ORDINAL: 'ORDINAL',
  NUMERIC: 'NUMERIC',
  TEXT: 'TEXT',
  RAW: 'RAW',
  TIME: 'TIME',
};

const TIME_FORMAT = 'MMMM Do YYYY H:mm:ss';

const MINIMUM_INPUT_LENGTH = 2;

const styles = (validation = false, inputLength) => StyleSheet.create({
  input: {
    background: 'none',
    border: 'none',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid',
    borderBottomColor: `${validation ? colors.red : colors.darkGrey}`,
    color: colors.darkGrey,
    width: `${inputLength}ch`,
    transition: 'borderBottomColor .3s',
    fontFamily: 'Roboto Mono, monospace',
    outline: 'none',
    cursor: 'pointer',

    ':hover': {
      borderBottomColor: colors.blue,
    },
  },
  raw: {
    borderBottom: 'none',
    paddingBottom: 'none',
    cursor: 'normal',
  },
});

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  static defaultProps = {
    type: INPUT_TYPES.NUMERIC,
  }

  handleChange = (e) => {
    const { onChange, onChangeFormat } = this.props;
    const value = e.target.value;
    onChange(onChangeFormat(this.formatValue(value)));
  }

  handleDateChange = (e) => {
    const { onChange, onChangeFormat } = this.props;
    onChange(onChangeFormat(e.format(TIME_FORMAT)));
  }

  formatTimeToMoment = (time) => {
    return time ? moment(time, TIME_FORMAT) : moment(TIME_FORMAT);
  }

  formatValue = (value) => {
    const { type } = this.props;
    const { active } = this.state;
    if (!active && type === INPUT_TYPES.ORDINAL && value.length) {
      return ordinal(parseInt(value, 10));
    } else {
      return value;
    }
  }

  toggleActive = () => {
    const { active } = this.state;
    this.setState({ active: !active });
  }

  render() {
    const { placeholder, validation, value, type } = this.props;
    const { active } = this.state;
    const formattedValue = this.formatValue(value);
    const formattedLength = _.toString(formattedValue).length;
    let inputLength;
    if (formattedLength) {
      if (active && (type === INPUT_TYPES.ORDINAL || type === INPUT_TYPES.NUMERIC)) {
        inputLength = _.max([MINIMUM_INPUT_LENGTH, formattedLength + 1]);
      } else {
        inputLength = formattedLength;
      }
    } else {
      inputLength = placeholder.length;
    }

    switch (type) {
      case INPUT_TYPES.RAW:
        return (
          <div
            className={css(styles(false, inputLength).input, styles(false, inputLength).raw)}
          >
            {value}
          </div>
        );
      case INPUT_TYPES.TIME:
        return (
          <DatePicker
            showTimeSelect
            timeFormat='HH:mm'
            timeIntervals={30}
            dateFormat={TIME_FORMAT}
            calendarClassName={css(styles().time)}
            onChange={this.handleDateChange}
            className={css(styles(validation && !formattedLength, inputLength).input)}
            selected={this.formatTimeToMoment(formattedValue)}
          />
        )
      default:
        return (
          <input
            type={active && type !== INPUT_TYPES.TEXT ? 'number' : undefined}
            onFocus={this.toggleActive}
            onBlur={this.toggleActive}
            onChange={this.handleChange}
            className={css(styles(validation && !formattedLength, inputLength).input)}
            placeholder={placeholder}
            value={formattedValue}
          />
        );
    }
  }
}

export default Input;
