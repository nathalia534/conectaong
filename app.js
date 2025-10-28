// Atualiza o ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Função para aplicar máscara
function mascaraInput(input, funcaoMascara, maxLength) {
    input.addEventListener('input', function() {
        // Remove tudo que não é número
        let valor = input.value.replace(/\D/g, "");
        // Limita a quantidade máxima de números
        if (valor.length > maxLength) {
            valor = valor.slice(0, maxLength);
        }
        input.value = funcaoMascara(valor);
    });
}

// Máscaras
function mascaraCPF(valor) {
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return valor;
}

function mascaraTelefone(valor) {
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
    valor = valor.replace(/(\d{4,5})(\d{4})$/, "$1-$2");
    return valor;
}

function mascaraCEP(valor) {
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
    return valor;
}

// Aplicando as máscaras com limite de números
mascaraInput(document.getElementById('cpf'), mascaraCPF, 11);
mascaraInput(document.getElementById('telefone'), mascaraTelefone, 11);
mascaraInput(document.getElementById('cep'), mascaraCEP, 8);
