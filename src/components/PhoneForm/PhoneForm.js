import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ButtonContact, Form, Field } from './PhoneFormStyled';
import { useDispatch } from 'react-redux';
import { addContactThunk } from '../../redux/thunk/thunk';
import { Notify } from 'notiflix';
import { useGetContactsQuery } from '../../redux/API/contactAPI';

const PhoneSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.number()
    .min(6, 'To Short!')
    .positive('Required')
    .required('Required'),
});

export const PhoneForm = () => {
  const dispatch = useDispatch();
  const { data = [] } = useGetContactsQuery();

  return (
    <div>
      <h1>Phonebook</h1>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, actions) => {
          data.find(
            contact =>
              contact.name === values.name || contact.number === values.number
          )
            ? Notify.failure(values.name + 'is already in contact')
            : dispatch(
                addContactThunk({
                  ...values,
                })
              );

          actions.resetForm();
        }}
        validationSchema={PhoneSchema}
      >
        <Form>
          <label>Name</label>
          <Field
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" />

          <label>Number</label>
          <Field
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" />

          <ButtonContact type="submit">Add contact</ButtonContact>
        </Form>
      </Formik>
    </div>
  );
};
