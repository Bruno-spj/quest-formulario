const btnSubmit = document.getElementById('btn');
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputFone = document.getElementById('fone');
const inputMsg = document.getElementById('msg'); // Para o textarea de mensagem

btnSubmit.addEventListener('click', (event) => {
    let isValid = true;

    // Função para verificar se um campo está vazio
    const checkInput = (input) => {
        const erro = input.nextElementSibling;
        if (input.value === "") {
            isValid = false;
            input.classList.add('input-vazio');
            erro.textContent = "Campo obrigatório";
            erro.style.display = 'block';
        } else {
            input.classList.add('input-preenchido');
            erro.textContent = "";
            erro.style.display = 'none';
        }
    };

    // Verificar todos os campos
    checkInput(inputName);
    checkInput(inputEmail);
    checkInput(inputFone);
    checkInput(inputMsg);

    // Impedir o envio do formulário se algum campo estiver vazio
    if (!isValid) {
        event.preventDefault();
    }
});
