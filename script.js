const clientes = [];

// Mostra a tela de cadastro
function showCadastro() {
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('cadastro').classList.remove('hidden');
}

// Mostra a tela de menu
function showMenu() {
    document.getElementById('cadastro').classList.add('hidden');
    document.getElementById('clientes').classList.add('hidden');
    document.getElementById('menu').classList.remove('hidden');
}

// Redireciona para a página de nota fiscal
function gerarNotaFiscal() {
    window.open("https://www.nfse.gov.br/EmissorNacional/", "_blank");
}

// Lida com o cadastro do cliente
document.getElementById('formCadastro').addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o reload da página

    const cliente = {
        nome: document.getElementById('nome').value,
        cpf: document.getElementById('cpf').value,
        endereco: document.getElementById('endereco').value,
        equipamento: document.getElementById('equipamento').value,
        valor: parseFloat(document.getElementById('valor').value),
        quantidade: parseInt(document.getElementById('quantidade').value),
        diasLocados: parseInt(document.getElementById('diasLocados').value),
    };

    clientes.push(cliente);
    alert("Cliente cadastrado com sucesso!");

    // Limpa o formulário
    document.getElementById('formCadastro').reset();

    // Mostra a lista de clientes
    showClientes();
});

// Mostra a lista de clientes cadastrados
function showClientes() {
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('cadastro').classList.add('hidden');
    document.getElementById('clientes').classList.remove('hidden');

    const lista = document.getElementById('listaClientes');
    lista.innerHTML = '';

    if (clientes.length === 0) {
        lista.innerHTML = '<p>Nenhum cliente cadastrado.</p>';
    } else {
        clientes.forEach((cliente, index) => {
            const li = document.createElement('li');
            li.textContent = `Cliente ${index + 1}: ${cliente.nome}, CPF: ${cliente.cpf}, Equipamento: ${cliente.equipamento}, Valor: R$ ${cliente.valor}, Quantidade: ${cliente.quantidade}, Dias Locados: ${cliente.diasLocados}`;
            lista.appendChild(li);
        });
    }
}
