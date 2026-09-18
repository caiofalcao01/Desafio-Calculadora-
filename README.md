# 🧮 Calculadora Simples em React JS

Projeto desenvolvido em React JS utilizando Vite como bundler, focado na manipulação de estados e formulários em componentes funcionais.

## 🚀 Conceitos Aplicados

- **useState**: Gerenciamento do estado dos inputs, operador selecionado e exibição do resultado.
- **Formulários Controlados**: Captura de dados em tempo real utilizando o evento `onChange`.
- **Renderização Condicional e Validação**: Tratamento para impedir envio de campos vazios e tratamento de divisão por zero.
- **CSS Modules**: Estilização escopada para evitar vazamento de estilos entre componentes.

---

## 📦 Observação sobre a pasta `node_modules`

A pasta `node_modules` não é enviada ao GitHub por boas práticas de desenvolvimento (por ser uma pasta pesada de arquivos gerados). 

Todas as dependências e bibliotecas necessárias para o funcionamento do projeto estão registradas no arquivo **`package.json`**. O comando `npm install` lê esse arquivo e baixa automaticamente a pasta `node_modules` atualizada para a sua máquina.

---

## 🛠️ Como Baixar e Executar o Projeto

Siga os passos abaixo para testar a calculadora no seu computador:

1. **Baixe o projeto**:
   - Clique no botão verde **Code** no topo desta página e escolha **Download ZIP** (ou faça o clone do repositório com o Git).
   - Extraia o arquivo `.zip` em uma pasta de sua preferência.

2. **Abra o terminal na pasta do projeto**:
   - Abra a pasta no **VS Code** e abra o terminal integrado (`Ctrl + '` ou `Ctrl + J`).

3. **Instale as dependências (recria a pasta `node_modules`)**:
   ```bash
   npm install
