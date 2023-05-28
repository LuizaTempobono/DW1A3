const masks = {
    cpf(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})(\d+?$)/, '$1')
    },

    telefone(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
            .replace(/(-\d{5})(\d+?$)/, '$1')
    }
}

document.querySelectorAll('input').forEach(($input) => {
    const field = $input.getAttribute("data-js")

    $input.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value)
    }, false)
})

const button = document.getElementById('button');

button.addEventListener('click', (event) => {
    event.preventDefault()

    const nome = document.getElementById('nome')
    const email = document.getElementById('email')
    const cpf = document.getElementById('cpf')
    const endereco = document.getElementById('endereco')
    const telefone = document.getElementById('telefone')

    if (nome.value == '') {
        nome.classList.add("errorInput")
    } else {
        nome.classList.remove("errorInput")
    }

    if (email.value == '') {
        email.classList.add("errorInput")
    } else {
        email.classList.remove("errorInput")
    }

    if (cpf.value == '') {
        cpf.classList.add("errorInput")
    } else {
        cpf.classList.remove("errorInput")
    }

    if (endereco.value == '') {
        endereco.classList.add("errorInput")
    } else {
        endereco.classList.remove("errorInput")
    }

    if (telefone.value == '') {
        telefone.classList.add("errorInput")
    } else {
        telefone.classList.remove("errorInput")
    }

    var validarTel = telefone.value.replaceAll('(', '').replaceAll(')', '').replaceAll(' ', '').replaceAll('-', '')

    if (isNaN(validarTel) == true || validarTel.length != 11) {
        telefone.classList.add("errorInput")
    } else {
        telefone.classList.remove("errorInput")
    }

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)) {
        email.classList.add("errorInput")
    } else {
        email.classList.remove("errorInput")
    }

    var validarCpf = cpf.value.replaceAll('.', '').replace('-', '')
    var cpfValido = TestaCPF(validarCpf)

    if (!cpfValido) {
        cpf.classList.add("errorInput")
    } else {
        cpf.classList.remove("errorInput")
    }
})

function TestaCPF(validarCpf) {
    var Soma;
    var Resto;
    Soma = 0;
    if (validarCpf == "00000000000") return false;

    for (i = 1; i <= 9; i++) Soma = Soma + parseInt(validarCpf.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(validarCpf.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(validarCpf.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(validarCpf.substring(10, 11))) return false;
    return true;
}