

# BOAS VINDAS AO REPOSITÓRIO DO TESTE TÉCNICO PARA VAGA DEV BACKEND - TECH4H!

---
 
Projeto desenvolvido utilizando a API Open Weather Map (https://openweathermap.org/api),JavaScript, React, Axios, NodeJs e PostegreSQL.


---


### PASSO A PASSO:

1. Clone o repositório
  * Entre na pasta do repositório que você acabou de clonar:
    * `new_project`

2. Instale as dependências
  * `npm install`

3. Entre na pasta server
  * Instale as dependencias
    * `npm install`
 

4. Entre na pasta client
  * `npm install`

5. Crie um database usando o SGBD PostgreSQL e a seguinte tabela
  * `CREATE TABLE cidades (id SERIAL PRIMARY KEY, city TEXT NOT NULL, dia BIGINT not NULL)`
  
6. No arquivo .env na pasta server, altere as variáveis de ambiente 
  * DATABASE_URL=postgres://{seuUsuario}:{suaSenha}@localhost:5432/{seuDatabase}
 
7. Para rodar o projeto:
  * Inicie seu banco de dados
  * Na pasta server, digite no terminal node index.js
  * Na pasta client, digite npm start

