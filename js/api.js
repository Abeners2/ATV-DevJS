function carregarPerfilGitHub(usuario) {
    const container = document.getElementById('perfil-github');
    const url = `https://api.github.com/users/${usuario}`;
    
    // Mostra estado de carregamento
    container.innerHTML = '<div class="loading">Carregando perfil GitHub...</div>';
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Usuário não encontrado ou erro na API (Status: ${response.status})`);
            }
            return response.json();
        })
        .then(data => {
            // Formata os dados para exibição com fallbacks
            const html = `
                <div class="perfil-github">
                    <img src="${data.avatar_url || 'https://via.placeholder.com/100'}" 
                         alt="${data.login || 'usuário GitHub'}" 
                         class="avatar">
                    <h2>${data.login || 'Usuário GitHub'}</h2>
                    
                    ${data.name ? `<p class="nome-completo">${data.name}</p>` : ''}
                    
                    <div class="detalhes">
                        ${data.bio ? `<p class="bio">${data.bio}</p>` : '<p class="bio sem-bio">Sem biografia disponível</p>'}
                        
                        <div class="estatisticas">
                            <div class="estatistica">
                                <span class="numero">${data.public_repos || 0}</span>
                                <span class="rotulo">Repositórios</span>
                            </div>
                            <div class="estatistica">
                                <span class="numero">${data.followers || 0}</span>
                                <span class="rotulo">Seguidores</span>
                            </div>
                            <div class="estatistica">
                                <span class="numero">${data.following || 0}</span>
                                <span class="rotulo">Seguindo</span>
                            </div>
                        </div>
                        
                        ${data.html_url ? `<a href="${data.html_url}" target="_blank" class="botao">Ver no GitHub</a>` : ''}
                    </div>
                </div>
            `;
            
            container.innerHTML = html;
        })
        .catch(error => {
            console.error('Erro ao carregar perfil:', error);
            container.innerHTML = `
                <div class="erro">
                    <p>${error.message}</p>
                    <button onclick="carregarPerfilGitHub('${usuario}')" class="botao">Tentar novamente</button>
                </div>
            `;
        });
}

// Inicia o carregamento quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    carregarPerfilGitHub('Abeners2');
});