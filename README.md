# BlogNodeJs
Para consolidar os conhecimento em NodeJs resolvi desenvolver um blog.
Este projeto se trata de mini blog com controle de acesso.

- [x] Estrutura do projeto.
- [x] Implementação do padrão MVC.
- [x] Implementacao de um modelo ORM (sequelize).
- [x] Implementacao de uma api para controle de login (passport).
- [x] Implementação de uma api gerenciador de arquivo.
- [x] Implementação do jest para testes.

# Imagens do projeto.

<div style="display: flex; flex-wrap: wrap;">
   
   Página incial

   <img src="./imagens_do_projeto/pagina_inicial.png" width="700" />

   Página de exibicao do post

   <img src="./imagens_do_projeto/localhost_3000_show_5.png" width="700" />

   Página de registro

   <img src="./imagens_do_projeto/localhost_3000_register.png" width="700" />

   Página de login

   <img src="./imagens_do_projeto/localhost_3000_login.png" width="700"/>

   Página de administracao

   <img src="./imagens_do_projeto/localhost_3000_admin.png" width="700"/>

   Página de criacao de post

   <img src="./imagens_do_projeto/localhost_3000_posts_post.create.png" width="700"/>

   Página de edicao de post

   <img src="./imagens_do_projeto/localhost_3000_posts_post.edit_8.png" width="700"/>
</div>

# Pacotes (NPM)
 - Express 
   - ``` npm install express --save ``` 
 - Sequelize 
    - O sequelize facilita o trabalho com o mysql, ele vai ser no nosso ORM.
    - ``` npm install sequelize --save ``` 
 - MYSQL
   - ``` npm install mysql2 --save ```

- Handlebars 
    - É a engine do projeto, vai gerenciar a parte frontend do blog. Geralmente é ultilizada o EJS, mas
    o Handlebars parece ser mais bonito em suas declarações. o que facilita no entendimento. Me lembra muito o blade do laravel.
    - ```install express-handlebars --save ```

- ejs 
   - Mudança na ultilizacao do engine, por conta da documentacao do handlebars estar desatualizada.
   -Pacote  express-handlebars desistalado.
   - ```  npm install ejs ```

   
- Connect flash
   - Para variaveis de sessao
   - ```  npm install connect-flash ```

- Express session
   - Para variaveis de sessao
   - ```  npm install express-session ```

- Passport
   - Para controle de acesso
   - ``` npm i passport --save ```

- Passport local
   - Para controle de acesso usando o local, temos que instalar os dois
   - ``` npm i passport-local --save ```

- bcryptjs
   - Para senhas
   - ``` npm install bcryptjs```

- ckeditor5
   - Para edições de texto
   - ``` npm i ckeditor5 ```

- Multer 
   - Para envio de imagens
   -  ``` npm install --save multer ```

- Lorem
   - Para gerar textos
   -  ```npm i lorem-ipsum```

- Lorem Pics
   - Para gerar imagem aleatoria
   - ``` npm install --save lorem-picsum```

- Jest
   - Para realizar tests na aplicação.
   - ``` npm i --save jest ```

- Supertest
   - Para realizar tests na aplicação simulando o servidor.
   - ``` npm i --save supertest ```

- Comando para popular a table posts
   - ** Precisa cadastrar categoria antes
   - ```npm run PostSeeder ```
   - Este comando ira gerar 5 posts com textos e imagens aleatórios.

---