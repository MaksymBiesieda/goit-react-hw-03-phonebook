import React, { Component } from "react";
import shortid from 'shortid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import css from './App.module.css';

export default class App extends Component  {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  formSubmitHandler = (data) => {
    const itemId = shortid.generate();
    const fullData = { id: itemId, ...data }
    this.setState(prevState => ({contacts:[fullData, ...prevState.contacts]}));
  }

  filterHandler = (event) => {
    this.setState({ filter: event.currentTarget.value });
  }

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => (contact.name.toLowerCase().includes(filter.toLowerCase())))
  }

  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  }
  
  render() {
    const filterResult = this.getFilteredContacts();
    const { contacts } = this.state;
    return(
    <div className={css.container}>
      <h1 className={css.title}>PhoneBook</h1>
        <ContactForm onFormSubmit={this.formSubmitHandler} contacts={contacts} />
        <h2 className={css.contacts_title}>Contacts</h2>
        <Filter onFilterChange={this.filterHandler}/>
        <ContactList  filterResult={filterResult} onDeleteContact={ this.deleteContact} />
    </div> 
    )
  };
};