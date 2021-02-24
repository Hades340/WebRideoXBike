import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label, FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik';


inputField.propTypes = {
    field: PropTypes.object.isRequired,
  	form: PropTypes.object.isRequired,

  	type: PropTypes.string,
  	label: PropTypes.string,
  	placeholder: PropTypes.string,
  	disabled: PropTypes.bool,
};
inputField.defaultProps={
	type: 'text',
  	label: '',
  	placeholder: '',
  	disabled: false,
}
function inputField(props) {
	const {
		field, form,
		type, label, placeholder, disabled,
	} = props;
	const { name } = field;
	const { errors, touched } = form;
	const showError = errors[name] && touched[name];
    return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <Input
        id={name}
        {...field}

        type={type}
        disabled={disabled}
        placeholder={placeholder}

        invalid={showError}
      />

      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
    );
};

inputField.displayName = 'inputField';


export default inputField;
