import React, { PropTypes } from 'react';
import { FastField, Form, Formik } from 'formik';

import { Button, FormGroup, Spinner } from 'reactstrap';
import * as Yup from 'yup';
import InputField from '../../../../costum-field/inputField';

const contactForm = (props) => {
	const { initialValues, isAddMode } = props;

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('This field is required.'),

    categoryId: Yup.number()
      .required('This field is required.')
      .nullable(),

    photo: Yup.string().when('categoryId', {
      is: 1,
      then: Yup.string().required('This field is required.'),
      otherwise: Yup.string().notRequired(),
    })
  });
	return(


	<Formik
		 initialValues={initialValues}
       	validationSchema={validationSchema}
       	onSubmit={props.onSubmit}
	>
		{formikProps => {
        	// do something here ...
	        const { values, errors, touched, isSubmitting } = formikProps;
	        console.log({ values, errors, touched });
	       return(
	       	<div>
	       		
	       	</div>
	       	);
    	}
    }
	</Formik>
	);
};
contactForm.propTypes = {
	 onSubmit: PropTypes.func,
};
contactForm.defaultProps={
	 onSubmit: null,
};

contactForm.displayName = 'contactForm';


export default contactForm;
	