import { useSelector } from 'react-redux';
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from '../../redux/API/contactAPI';

import '../loader/loading.css';
import {
  ButtonDel,
  LiStyle,
  MdDelete,
  UlStyleContactList,
} from './ContactsStyled';

export const ContactBody = () => {
  const { data = [], error, isLoading, isFetching } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filter = useSelector(state => state.filter);
  const filteredContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  let content;
  if (isLoading || isFetching) content = <div className="loader" />;
  else if (error) {
    const msg = error?.data?.message || error?.error || 'Помилка завантаження';
    content = <p>{msg}</p>;
  } else {
    content = (
      <UlStyleContactList>
        {' '}
        {filteredContacts.map(({ id, name, number }) => (
          <LiStyle key={id}>
            {name}: {number}
            <ButtonDel>
              <MdDelete onClick={() => deleteContact(id)} />
            </ButtonDel>
          </LiStyle>
        ))}
      </UlStyleContactList>
    );
  }

  return <div>{content}</div>;
};
