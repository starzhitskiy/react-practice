import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { BaseInput } from '../ModalIcon/BaseInput';

import './Forma.scss';

export const Forma = (props) => {
  const addTodo = (value) => {
    props.addTodo({ ...value });
  };

  return (
    <Formik
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .min(2, 'Too Short!')
          .max(20, 'Too Long!')
          .required('Required')
          .matches(/^[a-zA-Z0-9А-Яа-я ]+$/),
        description: Yup.string().min(2, 'Too Short!').max(40, 'Too Long!').required('Required'),
      })}
      initialValues={{ name: '', description: '', done: false }}
      onSubmit={addTodo}
    >
      {(formik) => (
        <Form className="modal__wrap">
          <BaseInput label="Name" name="name" placeholder="Add Name" />
          <BaseInput label="Description" name="description" placeholder="Add Description" />
          <BaseInput
            name="done"
            type="checkbox"
            onChange={() => {
              formik.setFieldError('test', 'Test Field was changed');
            }}
          />
        </Form>
      )}
    </Formik>
  );
};
