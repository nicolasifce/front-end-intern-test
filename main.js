// Adicionamos nosso código dentro de uma função anônima para evitar
// variáveis globais.

(function() {
  // Elemento principal do formulário
  const contactForm = document.getElementById('contact');

  // Campos do formulário
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // "addEventListener" instrui o navegador a executar uma função sempre
  // que um evento específico acontece. Nesse caso, a função abaixo será
  // executada toda vez que o botão de envio for pressionado.
  contactForm.addEventListener('submit', function() {
    // A propriedade "value" contém o valor atual de um input ou textarea
    const nameValue = nameInput.value;
		const emailValue = emailInput.value;
		const messageValue = messageInput.value;	
    // A propriedade "length" contém o tamanho (em caracteres) de uma
    // uma string. Toda string contém essa propriedade.
    const nameLength = nameValue.length;
		const emailLength = emailValue.length;
		const messageLength = messageValue.length;
		//Lista que recebe os campos vazios.
		const campos_vazios = [];
		//Variável que vai definir se existe um campo vazio.
		var vazio = false;
		//Condições que verificam se cada campo foi preenchido.	
		if(nameLength == 0){
			campos_vazios.push('Digite seu nome');
			vazio = true;
		}
	
		if(emailLength == 0){
			campos_vazios.push('Digite seu email');
			vazio = true;
		}

		if (messageLength == 0){
			campos_vazios.push('Digite uma mensagem para nós');
			vazio = true;
		}
		//Caso exista um campo vazio ele para o submit com event.preventDefault().
		if(vazio == true){
			window.alert(campos_vazios);
			event.preventDefault();
		//Se não tiver campo vazio o submit é ativado.	
		}else{
		// "window" é um objeto global que representa a janela (ou aba) do
		// navegador que está executando o código do seu site. O método
		// "alert" simplesmente mostra um aviso para o usuário contendo a
		// mensagem provida.
		
		window.alert(`Obrigado pela sua mensagem ${nameValue}`);
		contactForm.submit;
		}
		
		
	// Altere e complete essa função para validar os campos do formulário
    // de acordo com as especificações do teste. Boa sorte!
  });
})();
