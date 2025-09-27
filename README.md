# 🎬 Catálogo de Filmes Full-Stack

Um projeto web completo para gerenciar um catálogo de filmes, construído com um backend robusto em Django e um frontend moderno e reativo em Svelte.

## ✨ Funcionalidades

- **Listagem de Filmes:** Visualize o catálogo completo de filmes.
- **Visualização Detalhada:** Clique em um filme para ver mais detalhes.
- **Adicionar Filmes:** Formulário para adicionar novos filmes ao catálogo.
- **API RESTful:** Backend Django servindo os dados dos filmes.
- **Frontend Reativo:** Interface construída com SvelteKit para uma experiência de usuário fluida.
- **UI Dinâmica:** A estrutura do menu de navegação e dos formulários é fornecida pela API, permitindo alterações na interface sem a necessidade de modificar o código do frontend.

## 🛠️ Tecnologias Utilizadas

- **Backend:**
  - ![Python](https://img.shields.io/badge/Python-3.11-3776AB?style=for-the-badge&logo=python)
  - ![Django](https://img.shields.io/badge/Django-4.2-092E20?style=for-the-badge&logo=django)
  - ![Django REST Framework](https://img.shields.io/badge/DRF-3.14-A30000?style=for-the-badge&logo=django)
  - ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-4169E1?style=for-the-badge&logo=postgresql)
- **Frontend:**
  - ![SvelteKit](https://img.shields.io/badge/SvelteKit-2.0-FF3E00?style=for-the-badge&logo=svelte)
  - ![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite)
  - ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
  - ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.0-06B6D4?style=for-the-badge&logo=tailwindcss)
- **Ambiente:**
  - ![Node.js](https://img.shields.io/badge/Node.js-20.x-5FA04E?style=for-the-badge&logo=nodedotjs)
  - ![NPM](https://img.shields.io/badge/NPM-10.x-CB3837?style=for-the-badge&logo=npm)

---

## 🚀 Começando

Siga estas instruções para configurar e rodar o projeto em seu ambiente de desenvolvimento local.

### Pré-requisitos

Antes de começar, garanta que você tenha os seguintes softwares instalados:

- [Python 3.10+](https://www.python.org/downloads/)
- [Node.js (LTS)](https://nodejs.org/en/) e npm

### ⚙️ Instalação

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/patresio/svelte-django.git
    cd svelte-django
    ```

2.  **🐍 Configuração do Backend:**
    - Navegue até a pasta do backend:
      ```bash
      cd backend
      ```
    - Crie um ambiente virtual. Isso isola as dependências do seu projeto.
      ```bash
      python3 -m venv .venv
      ```
    - Ative o ambiente virtual:
      - **Linux/macOS:**
        ```bash
        source .venv/bin/activate
        ```
      - **Windows:**
        ```bash
        .venv\Scripts\activate
        ```
    - Instale as dependências do Python:
      ```bash
      pip install -r requirements.txt
      ```
    - Configure as variáveis de ambiente. Copie o arquivo de exemplo e preencha com suas informações (especialmente a `DATABASE_URL` e `SECRET_KEY`).
      ```bash
      cp contrib/env-sample .env
      ```
    - Volte para a raiz do projeto:
      ```bash
      cd ..
      ```

3.  **🎨 Configuração do Frontend:**
    - Navegue até a pasta do frontend:
      ```bash
      cd frontend
      ```
    - Instale as dependências do Node.js:
      ```bash
      npm install
      ```
    - Volte para a raiz do projeto:
      ```bash
      cd ..
      ```

4.  **Instale o Orquestrador de Scripts:**
    - Na raiz do projeto, instale o `concurrently`:
      ```bash
      npm install
      ```

### 🏃 Executando os Servidores de Desenvolvimento

Depois de tudo configurado, você pode iniciar o backend e o frontend simultaneamente com um único comando a partir da **raiz do projeto**:

```bash
npm run dev
```

- O frontend estará disponível em `http://localhost:5173`.
- O backend estará disponível em `http://localhost:8000`.

### 🌱 Populando o Banco de Dados (Seeding)

Para adicionar dados de exemplo ao banco de dados, você pode usar o script de seeding. 

**Importante:** O servidor de backend deve estar em execução antes de rodar o script.

1.  Certifique-se de que o servidor de desenvolvimento (`npm run dev`) está rodando em um terminal.
2.  Em um **novo terminal**, na raiz do projeto, execute o seguinte comando:

    ```bash
    node populate_db.mjs
    ```

Isso irá ler os filmes de exemplo e adicioná-los ao seu banco de dados através da API.

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
