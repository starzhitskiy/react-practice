import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { BaseInput } from './BaseInput';

import './ModalIcon.scss';
// eslint-disable-next-line
export const ModalIcon = (props) => {
  const addTodo = (value) => {
    props.addTodo({ ...value });
  };

  return (
    <>
      <div className={`modal ${props.isOpened ? 'open' : 'close'}`}>
        <div className="modal__body">
          <div className="modal__close" onClick={props.onModalClose} role="presentation">
            X
          </div>
          <h2>{props.title}</h2>
          <hr />
          <Formik
            validationSchema={Yup.object().shape({
              name: Yup.string()
                .min(2, 'Too Short!')
                .max(20, 'Too Long!')
                .required('Required')
                .matches(/^[a-zA-Z0-9А-Яа-я ]+$/),
              description: Yup.string()
                .min(2, 'Too Short!')
                .max(40, 'Too Long!')
                .required('Required'),
            })}
            initialValues={{ name: '', description: '', done: false }}
            onSubmit={addTodo}
          >
            {(formik) => {
              console.log(formik);
              return (
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

                  <button
                    className="title__button modal__button"
                    type="submit"
                    onClick={props.onModalClose}
                  >
                    Add new information
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};
