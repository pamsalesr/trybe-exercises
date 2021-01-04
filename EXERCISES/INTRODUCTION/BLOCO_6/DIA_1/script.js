const statesList = document.getElementById("info-state");
function createStatesOptions() {
  const stateOptions = ['Selecione se estado', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO']
  let value = 1;
  for (let index = 0; index<stateOptions.length; index += 1){
    const options = document.createElement('option');
    statesList.appendChild(options).innerText = stateOptions[index];
    statesList.value = stateOptions[index]
  }
}

window.onload = function () {
  createStatesOptions();
}
