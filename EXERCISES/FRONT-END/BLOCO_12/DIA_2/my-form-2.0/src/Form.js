import React from 'react';
import PersonalForm from './PersonalForm';

class Form extends React.Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      countryState: '',
      addressType: '',
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <PersonalForm value={this.state.name} handleChange={this.handleChange} />
      </form>
    );
  }
}

export default Form;
