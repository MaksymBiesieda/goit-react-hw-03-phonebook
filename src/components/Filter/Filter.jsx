import PropTypes from 'prop-types';
import css from './Filter.module.css';

export default function Filter({onFilterChange}) {
    return (
        <label className={css.filter_label}>
            Find contacts by name
        <input
         type="text"
         name="filter"              
         onChange={onFilterChange}
         className={css.filter_input}
          />
        </label>
    )
}

Filter.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
}