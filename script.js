function gerarSenha() {
    var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var senha = "";
    for (var i = 0; i < 18; i++) {
        var randomIndex = Math.floor(Math.random() * caracteres.length); // Gera um índice aleatório
        senha += caracteres [randomIndex]; // Adiciona o caractere correspondente à senha
    }
    document.getElementById('inserirSenha').value = senha; // Exibe a senha no campo de texto
}

function copiarSenha(){
    var campoSenha = document.getElementById('inserirSenha');
    campoSenha.select();
    document.execCommand('copy');
    if(campoSenha.value === ""){
        alert("Nenhuma senha para copiar. Gere uma senha primeiro.");
        return;
    }
    alert("Senha copiada para a área de transferência");
}