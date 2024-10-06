// Usando o método simples para adicionar um título
const titulo = document.getElementById('titulo');
titulo.textContent = 'Bem-vindo a nossa Doceria';

// Usando o método complexo para adicionar um produto
const produtoContainer = document.getElementById('produto');

// Criando elementos para o produto
const produto = document.createElement('div');
produto.classList.add('produto');

const nomeProduto = document.createElement('h2');
nomeProduto.textContent = 'Torta Floresta Negra';

const descricaoProduto = document.createElement('p');
descricaoProduto.textContent = 'Esta é uma descrição do produto exemplo.';

const precoProduto = document.createElement('p');
precoProduto.textContent = 'Preço: R$ 99,99';

const imgProduto = document.createElement('img');
imgProduto.src = "https://benditosalgado.com.br/wp-content/uploads/2021/01/Torta-Floresta-Negra2.jpg" // URL da imagem
imgProduto.alt = 'Imagem do Produto Exemplo';

produto.appendChild(nomeProduto);
produto.appendChild(descricaoProduto);
produto.appendChild(precoProduto);
produto.appendChild(imgProduto);

produtoContainer.appendChild(produto);
