# make-cards-sneakers
Criador de cards de sneakers. Projeto do CTD - Digital House.

Link para acessar a ferramenta. https://vitto2.github.io/make-cards-sneakers/index.html

Basicamente você só precisa inserir as informações na caixa de texto e clicar no botão parar criar o card. Você pode usar qualquer URL na aba de imagem. 


Iniciando mais um projeto para praticar front-end, mas especificamenta a manipulação do HTML direto do Javascript. A cara final do projeto ficou assim: 
![image](https://user-images.githubusercontent.com/47305804/173443411-4d34500a-4e09-4f67-83cf-ae11d3e3b236.png)


Ao preencher o formulário com os dados solicitados e clicar em criar um card é inserido na área livre da direita.

![image](https://user-images.githubusercontent.com/47305804/173443639-f9921bb6-eea5-4647-86a5-ab1868cd1ea8.png)


A função responsável por manipular o HTML e inserir o elemento é esta: 
![image](https://user-images.githubusercontent.com/47305804/173443769-3ce3991d-b4da-42ae-9efc-e7662621fb2e.png)

Basicamente li os valores inseridos no input usando querySelector e usei tempplate strings + o innerHTML para inserir o template na página. 

O template ficou dessa forma: 
![image](https://user-images.githubusercontent.com/47305804/173444044-54de41be-0b11-49f3-9c02-b1bb87335fc9.png)

posteriormente fiz uma atualização para que o número de cards se limitem a 6, ficando desta forma: 

![image](https://user-images.githubusercontent.com/47305804/173449196-dad2cf60-8aea-4aff-a8f7-507dfc93d863.png)
