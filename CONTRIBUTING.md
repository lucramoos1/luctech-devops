# Guia de Contribuição - TechFlow

## Bem-vindo! 👋

Obrigado por considerar contribuir para o TechFlow. É pessoas como você que tornam este projeto tão ótimo.

## Como Posso Contribuir?

### Relatando Bugs 🐛

Se você encontrou um bug, crie uma issue incluindo:

- **Resumo do bug**: Descrição clara e concisa
- **Passos para reproduzir**: Instruções detalhadas
- **Comportamento esperado**: O que deveria acontecer
- **Comportamento atual**: O que acontece
- **Screenshots**: Se aplicável
- **Seu ambiente**: Navegador, SO, versão

### Sugerindo Melhorias 💡

Sugestões são sempre bem-vindas! Ao criar uma sugestão de melhoria, inclua:

- **Descrição clara**: Explicar a melhoria
- **Justificativa**: Por que seria útil
- **Exemplos**: Exemplos de implementação

### Pull Requests 🚀

1. **Fork** o repositório
2. **Clone** seu fork: `git clone https://github.com/seu-usuario/techflow.git`
3. **Crie uma branch**: `git checkout -b feat/sua-feature`
4. **Faça suas mudanças**: Edite os arquivos necessários
5. **Commit**: `git commit -m "feat: descrição clara da mudança"`
6. **Push**: `git push origin feat/sua-feature`
7. **Abra um Pull Request**: Com descrição detalhada

## Padrões de Desenvolvimento

### Convenção de Commits

```
feat: adiciona nova funcionalidade
fix: corrige bug
docs: alterações em documentação
style: formatação, sem mudança lógica
refactor: refatora código existente
test: adiciona testes
chore: alterações de build, dependências, etc
```

### Nomenclatura de Branches

```
feat/nome-da-feature      - Nova funcionalidade
fix/nome-do-fix           - Correção de bug
docs/nome-da-doc          - Documentação
style/nome-da-mudanca     - Estilo
refactor/nome-da-mudanca  - Refatoração
```

### Padrões de Código

#### HTML
- Usar tags semânticas
- Indentação com 4 espaços
- Atributos em ordem: id, class, data-*, aria-*
- Fechar todas as tags

```html
<section id="hero" class="hero-content">
  <div class="container">
    <h1>Título</h1>
  </div>
</section>
```

#### CSS
- Usar variáveis CSS
- Mobile-first approach
- Usar `rem` para dimensões
- Organizar por: Layout → Tipografia → Cores → Efeitos

```css
.elemento {
  /* Layout */
  display: flex;
  gap: 1rem;
  
  /* Tipografia */
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  
  /* Cores */
  color: var(--text-color);
  background: var(--bg-color);
  
  /* Efeitos */
  transition: all 0.3s ease;
}
```

#### JavaScript
- Usar `const` por padrão, `let` se necessário
- Comentar seções principais
- Usar nomes descritivos
- Evitar variáveis globais

```javascript
// ===== FUNCIONALIDADE =====
const element = document.getElementById('elemento');

element.addEventListener('click', (e) => {
  console.log('Clicado!');
});
```

### Checklist para Pull Request

- [ ] Testei em navegadores modernos
- [ ] Validei HTML com W3C
- [ ] Testei responsividade (mobile, tablet, desktop)
- [ ] Dark mode funciona corretamente
- [ ] Sem console errors
- [ ] Performance aceitável (Lighthouse 90+)
- [ ] Documentação atualizada
- [ ] Commits com mensagens claras
- [ ] Sem código comentado ou debug
- [ ] Sem dependências não declaradas

## Questões?

Sinta-se à vontade para:
- Abrir uma issue
- Iniciar uma discussão
- Enviar um email para contato@techflow.com

## Código de Conduta

### Nosso Compromisso

Nos comprometemos a fornecer um ambiente acolhedor e inclusivo para todos, independente de:
- Idade
- Tamanho do corpo
- Deficiência
- Etnia
- Identidade e expressão de gênero
- Nível de experiência
- Nacionalidade
- Aparência pessoal
- Raça
- Religião
- Identidade e orientação sexual

### Nossos Padrões

Exemplos de comportamento que contribuem para um ambiente positivo:
- Usar linguagem acolhedora e inclusiva
- Ser respeitoso com pontos de vista diferentes
- Aceitar crítica construtiva com graça
- Focar no que é melhor para a comunidade
- Mostrar empatia com outros membros

### Execução

Instâncias de comportamento abusivo, de assédio ou inaceitável podem ser
reportadas para contato@techflow.com. Todas as reclamações serão revisadas
e investigadas.

---

Obrigado por contribuir! 🎉
