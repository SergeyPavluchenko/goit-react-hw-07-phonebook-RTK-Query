import { Form as FormStyle } from 'formik';
import { Field as FieldStyle } from 'formik';
import styled from 'styled-components';

export const Field = styled(FieldStyle)`
  border-radius: 4px;
`;

export const Form = styled(FormStyle)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ButtonContact = styled.button`
  cursor: pointer;
  border-radius: 4px;
`;
