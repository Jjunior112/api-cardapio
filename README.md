# api-cardapio
API de Cardápio, uma aplicação Node.js que utiliza o MongoDB como banco de dados para gerenciar pratos e tipos de pratos em um cardápio. Esta API oferece endpoints simples para adicionar, remover e alterar informações sobre os pratos, bem como adicionar novos tipos de pratos.

**Variáveis .env**

Para que a API funcione corretamente, devem ser criadas em um arquivo .env as seguintes variáveis:

PORT = 3000

RATE_LIMIT_WINDOWS_MS = 60000

RATE_LIMIT_MAX_REQUESTS = 50

MONGODB_USERNAME = Username do cluster MongoDB

MONGODB_PASSWORD = Senha do cluster MongoDB

**Limitador de Requisições**

A API implementa um limitador de requisições por minuto usando express-rate-limit. Se o número máximo de requisições for excedido, a resposta será um erro 429 - Too Many Requests.

**Contribuição**

Este é um projeto com fins acadêmicos, fique à vontade para contribuir com melhorias, correções de bugs ou novos recursos. Abra uma issue para discussões ou envie uma pull request diretamente.
