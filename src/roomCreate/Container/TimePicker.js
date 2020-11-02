import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";

const DeliTimePicker = ({ className, onChange, value, name, ...rest }) => (
  <TimePicker
    {...rest}
    className={className}
    popupClassName={className}
    showSecond={false}
    onChange={onChange}
    hideDisabledOptions
    minuteStep={5}
    value={value}
    use12Hours
    name={name}
  />
);

DeliTimePicker.propTypes = {
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.instanceOf(moment),
};

export default DeliTimePicker;
