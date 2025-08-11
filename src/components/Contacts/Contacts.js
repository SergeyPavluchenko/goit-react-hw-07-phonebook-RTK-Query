import { useDispatch, useSelector } from 'react-redux';
import { Filter } from 'components/filter/Filter';
// import { removeContact } from '../../redux/contactSlice/contactSlice';
import { deleteContactThunk } from '../../redux/thunk/thunk';
import { useGetContactsQuery } from '../../redux/API/contactAPI';
import {
  LiStyle,
  UlStyle,
  UlStyleContactList,
  ButtonDel,
  MdDelete,
} from './ContactsStyled';
import '../loader/loading.css';

export const Contacts = () => {
  const { data = [], error, isLoading, isFetching } = useGetContactsQuery();
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

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
              <MdDelete onClick={() => dispatch(deleteContactThunk(id))} />
            </ButtonDel>
          </LiStyle>
        ))}
      </UlStyleContactList>
    );
  }

  return (
    <div>
      <h1>Contacts</h1>
      <UlStyle>
        <Filter />
        {content}
      </UlStyle>
    </div>
  );
};
