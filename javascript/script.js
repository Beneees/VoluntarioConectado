const form = document.querySelector("#form");
const nomeInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");
const estadoInput = document.querySelector("#estado");
const cidadeInput = document.querySelector("#cidade");

   
  form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    if (nomeInput.value === "" || emailInput.value === "" || estadoInput.value === "" || cidadeInput.value === "") {

        alert('Por favor, preencha todos os campos do formulário.');

        return false;

      }
      form.submit(alert('Formulário enviado com sucesso!'));

      return true;
  })
   

