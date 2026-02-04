# MovieNight : Descubra o que assistir de forma fácil e rápida!


## Descrição

O MovieNight é uma plataforma moderna de exploração cinematográfica que oferece aos usuários um catálogo atualizado e detalhado sobre os filmes de maior sucesso. 

## Funcionamento

O projeto é um Web App com Landing Page, vitrine de contéudo com filtros de gênero integrada com API, e rotas dinâmicas com páginas individuais de filmes.

## Instruções de Execução

Para rodar o projeto localmente, siga os passos abaixo:

Clonar o Repositório:

Bash
`git clone [https://github.com/tomazaureliano/desafio-api2.git](https://github.com/tomazaureliano/desafio-api2/tree/master)`

Instalar Dependências:

`npm install`

> [!NOTE]
> Configurar Variáveis de Ambiente: Altere o nome de .env.example para .env.local e insira sua chave de API
>`NEXT_PUBLIC_TMDB_API_KEY=sua_chave_aqui`

Executar o Servidor de Desenvolvimento:

`npm run dev`

Acesse o projeto em http://localhost:3000.

## API Utilizada

O projeto consome dados da TMDB API (The Movie Database), utilizando os seguintes recursos:

GET /movie/popular: Para alimentar a vitrine inicial.

GET /search/movie: Para a funcionalidade de busca por texto.

GET /discover/movie: Para a filtragem refinada por gêneros.

GET /movie/{id}: Para a recuperação de metadados na página de detalhes.


