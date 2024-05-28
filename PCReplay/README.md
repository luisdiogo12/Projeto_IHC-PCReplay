# IHC_assigment2
## Descrição do Projeto
PCReplay:

Website de compra e venda de computadores usados.

Os produtos, caso não estejam já no localStorage, sao gerados quando o website é ligado e ficam permantemente guardados até o website ser desligado ou o localStorage ser limpo. Devido a esta configuração, por vezes, é necessário fazer refresh à página para que os produtos apareçam.
## Autores do Projeto

- [Luís Manuel Trindade Diogo, NºMec.: 108668](https://github.com/luisdiogo12)
- [João André Moreira Rodrigues, NºMec.: 103947 ](https://github.com/joaoamrodrigues)
- [Gonçalo Monteir, NºMec.: 107758](https://github.com/Girafa3456)



## Instalação
**Package managers necessários:**
- Node.js: `v20.12.1`
- npm: `10.2.5`

**Passos de instalação e execução do projeto:**

1. Clonar o projeto

2. Instalar Node.js

	- linux:
	```bash
	sudo apt update
	sudo apt install nodejs
	```
	- windows:
	```bash
	winget install OpenJS.NodeJS.LTS
	```
3. Entrar na pasta do projeto

4. Instalar as dependências
	```bash
	..\PCReplay>npm install
	```

5. Executar o frontend como developer
	```bash
	..\PCReplay>npm run dev
	```
6. Abrir o browser e navegar para `http://localhost:3000`, caso não esteja a carregar, que se deve ao gerador de produtos, fazer refresh à página.
  