import React from 'react';

const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];

class PersonalForm extends React.Component {

  render() {
    return (
      <fieldset>
        <legend>Dados Pessoais</legend>
        <div>
          Nome:
          <input type='name' maxLength='40' required name='name' value={this.props.name} onChange={this.props.changeHandler} />
        </div>
        <div>
          Email:
          <input type='email' maxLength='50' required name='email' onChange={this.props.changeHandler} />
        </div>
        <div>
          CPF:
          <input type='text' maxLength='11' required name='cpf' onChange={this.props.changeHandler} />
        </div>
        <div>
          Endereço:
          <input type='text' maxLength='28' required name='address' onChange={this.props.changeHandler} />
        </div>
        <div>
          Cidade:
          <input type='text' maxLength='28' required name='city' onChange={this.props.changeHandler} />
        </div>
        <div>
          Estado:
          <select required name='countryState' onChange={this.props.changeHandler}>
            <option>Selecione</option>
            { states.map((value, key) => (
              <option key={ key }>{ value }</option>
            ))
            }
          </select>
        </div>
        <div>
          Tipo:
          <label>
          <input type='radio' id='house' name='addressType' onChange={this.props.changeHandler} />
          Casa
          </label>
          <label>
          <input type='radio' id='apartment' name='addressType' onChange={this.props.changeHandler} />
          Apartamento
          </label>
        </div>
      </fieldset>
    );
  }
}

export default PersonalForm;
