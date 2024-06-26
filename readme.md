Formulário de cadastro. 

O formulário cria uma nova conta utilizando Nome do Usuário, E-mail, Senha e por segurança, solicita uma segunda confirmação de senha.

Caso todos os dados não sejam preenchidos ou não preenchidos corretamente, mensagens de erro serão exibidas. 

Ao tentar Cadastrar sem preencher os dados, um Alert informando uma mensagem de erro irá ser exibida, mas caso seja preenchido tudo corretamente, ao clicar no botão Cadastrar, um Alert será exibido informando que a operação foi efetuada com sucesso. 

Principais funções:

function errorInput => A função errorInput é utilizada para exibir uma mensagem de erro associada a um campo de entrada (input).

function checkForm => A função checkForm é usada para validar um formulário verificando se todos os campos foram preenchidos corretamente antes de enviar os dados. 

utilizando o método querySelectorAll, verifica se o .form-content, caso retorne true, ao passar no if, retorna uma mensagem positiva, indicando que todos os dados foram preenchidos corretamente, mas caso identifique form-content error, uma mensagem, retorna false e exibe uma mensagem solicitando que os dados sejam preenchidos corretamente. 



ddEventListener("blur") => Verifica se o campo foi preenchido conforme interação do usuario.