/* eslint-disable react/jsx-props-no-spreading */
import { useField } from 'formik';
import React from 'react';
import TextField from '@material-ui/core/TextField';

export function BaseInput(props) {
  const [field, meta] = useField(props);
  const { type, label } = props;
  const { value, onChange, onBlur } = field;
  const { error, touched } = meta;

  const handleBlur = (e) => {
    onBlur(e);
    if (props.onBlur) props.onBlur(value);
  };

  const handleChange = (e) => {
    onChange(e);
    if (props.onChange) props.onChange(value);
  };

  return (
    <TextField
      {...field}
      label={label}
      onChange={handleChange}
      onBlur={handleBlur}
      type={type}
      error={touched && Boolean(error)}
      helperText={touched && error}
    />
  );
}
