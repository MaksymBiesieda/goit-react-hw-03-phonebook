import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';

export default function ContactList({ filterResult, onDeleteContact }) {
    return (
    <ul className={css.list}>
            { filterResult.map(contact => (<ContactItem key={contact.id} data={contact} onDeleteContact={onDeleteContact} />))  }      
    </ul>
)
}

ContactList.propTypes = {
    filterResult: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired, name: PropTypes.string.isRequired, number: PropTypes.string.isRequired, }),),
    onDeleteContact: PropTypes.func.isRequired,
}