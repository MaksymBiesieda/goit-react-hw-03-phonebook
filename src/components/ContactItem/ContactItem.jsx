import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export default function ContactItem({ data, onDeleteContact }) {
    return (
        <li className={css.item}>
                {`${data.name}: ${data.number}`}   
                <button onClick={() => onDeleteContact(data.id)} className={css.button}>Delete</button>
        </li>
)
}

ContactItem.propTypes = {
    data: PropTypes.object,
    onDeleteContact: PropTypes.func.isRequired,
}