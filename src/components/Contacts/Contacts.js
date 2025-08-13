import { Filter } from 'components/filter/Filter';
import { ContactBody } from './ContactsBody';

import { UlStyle } from './ContactsStyled';

export const Contacts = () => {
  return (
    <div>
      <h1>Contacts</h1>
      <UlStyle>
        <Filter />
        <ContactBody />
      </UlStyle>
    </div>
  );
};
