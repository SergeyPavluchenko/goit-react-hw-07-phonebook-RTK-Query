import React, { useEffect } from 'react';

import { Layout } from './Layout/Layout';
import { PhoneForm } from './PhoneForm/PhoneForm';
import { Contacts } from './Contacts/Contacts';
import { PageStyle } from './PageStyle';
import { GlobalStyled } from './GlobalStyled';
import { useDispatch } from 'react-redux';
import { getContatsThunk } from '../redux/thunk/thunk';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContatsThunk());
  }, [dispatch]);

  return (
    <Layout>
      <PageStyle>
        <PhoneForm />
        <Contacts />
      </PageStyle>
      <GlobalStyled />
    </Layout>
  );
};
