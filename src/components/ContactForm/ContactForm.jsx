import PropTypes from 'prop-types';
import React, { Component } from "react";
import css from './ContactForm.module.css';

export default class ContactForm extends Component  {

  static propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired, name: PropTypes.string.isRequired, number: PropTypes.string.isRequired, }),),
  };

  state = {
  name: '',
  number: ''
  }

   handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({[name]: value})
  }

  handleSubmit = (event) => {
    const { contacts } = this.props;
    const { name } = this.state;
     event.preventDefault();
     const isSameName = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (isSameName) { alert(`${name} is already in contacts`) } else {
      this.props.onFormSubmit(this.state)
      this.reset();
    }
     
  }

  reset = () => {
    this.setState({ name: '', number: ''})
  }

  render() {
 return (
<div>
 <form onSubmit={this.handleSubmit} className={css.form}>
  <label className={css.label}>
    Name
   <input
    type="text"
    name="name"
    value={this.state.name}               
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    onChange={this.handleChange}
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
    className={css.input}
  />
  </label> 
  <label className={css.label}>
    Number
   <input
    type="tel"
    name="number"
    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    value={this.state.number}
    onChange={this.handleChange}
    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    required
    className={css.input}
   />
  </label>
   <button type='submit'>Add contact</button>             
 </form>
</div>
)
  }
   
}