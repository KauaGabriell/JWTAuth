# JWT Authentication Study 🔐

Este é um projeto de estudo focado na implementação de fluxos de autenticação e autorização utilizando **JSON Web Token (JWT)** em APIs Node.js. O desenvolvimento deste projeto foi baseado nas orientações do módulo de especialização da **Rocketseat**.

## 🎯 Objetivo do Projeto

O propósito central deste estudo foi compreender como a segurança de uma API funciona "por baixo dos panos". Ver como isso funciona internamente é fundamental para consolidar conhecimentos sobre a proteção de rotas, geração de tokens e o gerenciamento de permissões em aplicações backend.

## 🛠️ Tecnologias e Ferramentas

* **Node.js & Express**: Framework base utilizado para a construção da API.
* **TypeScript**: Adotado para garantir tipagem estática, aumentando a segurança e produtividade no desenvolvimento.
* **jsonwebtoken (JWT)**: Biblioteca principal para a criação, assinatura e verificação dos tokens de acesso.
* **tsx**: Runner utilizado para executar o código TypeScript em ambiente de desenvolvimento com suporte nativo a arquivos `.env`.

## 🚀 Funcionalidades Implementadas

* **Autenticação JWT**: Verificação de credenciais de usuário e geração de tokens assinados com segredos configuráveis e prazos de expiração definidos.
* **Middleware de Autenticação**: Interceptador de rotas que valida a presença e a integridade do token JWT enviado no cabeçalho das requisições.
* **RBAC (Role-Based Access Control)**: Controle de acesso baseado em funções, permitindo que apenas usuários com cargos específicos (ex: `admin`, `rh`) acessem determinados recursos da API.
* **Tratamento de Erros Personalizado**: Implementação da classe `AppError` para padronizar as respostas de erro em toda a aplicação.

## 📂 Organização do Projeto

* **src/configs**: Configurações centrais do JWT, como segredo e tempo de vida do token.
* **src/controllers**: Lógica responsável por gerenciar as sessões de usuário e o acesso a produtos.
* **src/middlewares**: Funções que garantem a segurança das rotas através da validação de tokens e cargos.
* **src/routes**: Definição centralizada de todos os endpoints da API.
* **src/types**: Extensão das propriedades do Express para suportar dados do usuário na requisição (`request.user`).

## ⚙️ Instalação e Execução

### 1. Clonar o repositório
Clone o projeto para sua máquina local.

```bash
git clone <url-do-repositorio>
```

### 2. Instalar dependências
Execute o comando abaixo para instalar as bibliotecas necessárias:

```bash
npm install
```

### 3. Preparar o ambiente
Configure as variáveis de ambiente seguindo estes passos:

Crie um arquivo .env na raiz do projeto baseado no arquivo .env.example

Defina uma chave secreta para a variável AUTH_SECRET

### 4. Iniciar o servidor
Inicie a aplicação em modo de desenvolvimento:

```bash
npm run dev
```

O servidor estará rodando em http://localhost:3333

📋 Exemplos de Uso
Autenticação (Login)
```bash
POST /sessions
Content-Type: application/json

{
  "email": "usuario@exemplo.com",
  "password": "senha123"
}
```

Resposta de sucesso
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

Acesso a Rota Protegida
```bash
GET /products
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Acesso a Rota com RBAC (Apenas Admin)
```bash
DELETE /products/1
Authorization: Bearer <token-de-usuario-com-role-admin>
```

🔄 Fluxo de Autenticação
1. Usuário envia credenciais (email/senha) para /sessions
2. API valida as credenciais e gera um token JWT assinado
3. Token é retornado ao cliente
4. Cliente envia o token no header Authorization das próximas requisições
5. Middleware ensureAuthenticated valida o token antes de processar a rota
6. Middleware ensureRole verifica se o usuário tem permissão necessária
7. API processa a requisição e retorna a resposta

🧪 Estrutura do Token JWT
```json
// Header
{
  "alg": "HS256",
  "typ": "JWT"
}

// Payload
{
  "sub": "uuid-do-usuario",
  "role": "admin",
  "iat": 1234567890,
  "exp": 1234567890
}

// Signature
HMACSHA256(base64Header + "." + base64Payload, secret)
```

📝 Licença
Este projeto é desenvolvido apenas para fins educacionais e de estudo.

Desenvolvido com ☕ durante os estudos na Rocketseat
