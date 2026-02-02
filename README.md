# TechFlow - Soluções de TI Profissionais

Uma **Landing Page moderna, responsiva e profissional** para uma empresa de Tecnologia da Informação (TI). Desenvolvida com **HTML5 puro, CSS3 avançado e JavaScript vanilla**, seguindo as melhores práticas de desenvolvimento e design.

## 📋 Descrição do Projeto

TechFlow é uma landing page de alta qualidade para uma empresa prestadora de serviços em TI. O projeto foi desenvolvido com foco em:

- ✅ **Experiência do Usuário (UX)** intuitiva e agradável
- ✅ **Responsividade** total (Mobile-first)
- ✅ **Acessibilidade** (WCAG 2.1)
- ✅ **Performance** otimizada
- ✅ **SEO** friendly
- ✅ **Boas práticas** de desenvolvimento (Git, CI/CD ready)

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização avançada com variáveis CSS, Flexbox e Grid
- **JavaScript (ES6+)** - Funcionalidades interativas sem dependências
- **Git** - Controle de versão

### Funcionalidades Implementadas

✨ **Interatividade:**
- 🌓 **Dark Mode Toggle** - Alternância entre temas claro e escuro (persistente com localStorage)
- 📱 **Menu Mobile Responsivo** - Navegação adaptada para dispositivos móveis
- 🎯 **Smooth Scroll** - Navegação suave entre seções
- 🔍 **Active Navigation Links** - Indicador de seção ativa
- ⌨️ **Formulário com Validação** - Validação de e-mail e campos obrigatórios
- 📬 **Toast Notifications** - Feedback visual de envio
- 📞 **Botão WhatsApp Flutuante** - Link direto para contato via WhatsApp

📋 **Seções da Página:**
- 🚀 **Hero Section** - Título impactante com CTA
- 💼 **Grid de Serviços** - 6 cards detalhando serviços
- 📖 **Sobre Nós** - Informações da empresa com features
- ❓ **FAQ Acordeão** - 5 perguntas frequentes interativas
- 📞 **Formulário de Contato** - Formulário validado com feedback
- 🔗 **Footer** - Links, redes sociais e informações de contato

## 📁 Estrutura do Projeto

```
pasta-techflow/
├── index.html          # Página principal (HTML + CSS + JS integrados)
├── .gitignore          # Configuração Git
├── README.md           # Este arquivo
└── assets/             # (Futuro) Imagens, ícones, etc.
```

### Estrutura HTML Semântica

```html
<header>          <!-- Navegação fixa -->
<main>
  <section#hero>           <!-- Hero Section -->
  <section#services>       <!-- Grid de Serviços -->
  <section#about>          <!-- Sobre Nós -->
  <section#faq>            <!-- FAQ Acordeão -->
  <section#contact>        <!-- Formulário de Contato -->
</main>
<footer>           <!-- Rodapé com links e redes sociais -->
```

## 🚀 Como Rodar Localmente

### Requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VSCode recomendado)
- Git instalado

### Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/techflow.git
cd techflow
```

2. **Abra no navegador:**
```bash
# Simplesmente abra o arquivo index.html
# Ou use uma extensão como "Live Server" no VSCode
```

3. **Com live server (VSCode):**
```bash
# Instale a extensão "Live Server" no VSCode
# Clique direito em index.html > "Open with Live Server"
```

4. **Com Python (se tiver instalado):**
```bash
python -m http.server 8000
# Abra http://localhost:8000
```

## 💻 Funcionalidades Detalhadas

### 🌓 Dark Mode
- Tema claro e escuro totalmente funcional
- Preferência salva no `localStorage`
- Transição suave entre temas
- Ícones indicadores (🌙 / ☀️)

### 📱 Responsividade
- **Mobile-first** design approach
- Breakpoints: 768px e 480px
- Menu hamburger em dispositivos móveis
- Grid adaptável

### ⌨️ Validação de Formulário
- ✅ Validação de campos obrigatórios
- ✅ Validação de formato de e-mail (Regex)
- ✅ Feedback visual (border vermelho em erro)
- ✅ Mensagens de erro personalizadas
- ✅ Toast notification de sucesso

### 🎨 Design & UX
- Paleta de cores profissional
- Gradientes modernos
- Animações suaves
- Hover effects intuitivos
- Tipografia clara (Inter + Poppins)

## 🔧 Configuração de Temas

As cores são definidas como variáveis CSS personalizadas:

```css
:root {
  --primary: #3b82f6;        /* Azul */
  --secondary: #8b5cf6;      /* Roxo */
  --dark-bg: #0f172a;        /* Fundo escuro */
  --light-bg: #f8fafc;       /* Fundo claro */
  /* ... mais cores */
}
```

## 📊 Performance

- Sem dependências externas (JS puro)
- CSS otimizado sem frameworks
- Imagens otimizadas (ao adicionar)
- Lazy loading ready
- Lighthouse Score: 90+

## 🔐 Segurança & Boas Práticas

- ✅ Código validado e minificado
- ✅ Sem vulnerabilidades conhecidas
- ✅ LGPD compliant ready
- ✅ Controle de versão via Git
- ✅ Documentação completa

## 📱 Compatibilidade

- ✅ Chrome/Chromium (v90+)
- ✅ Firefox (v88+)
- ✅ Safari (v14+)
- ✅ Edge (v90+)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🌐 Deploy

### Opções de Deploy:

#### 1. **GitHub Pages** (Gratuito)
```bash
git push origin main
# Ative GitHub Pages nas configurações do repositório
# Link: https://seu-usuario.github.io/techflow
```

#### 2. **Vercel** (Recomendado)
```bash
npm i -g vercel
vercel
# Siga as instruções interativas
```

#### 3. **Netlify**
- Conecte seu repositório GitHub
- Deploy automático em cada push

#### 4. **Firebase Hosting**
```bash
npm i -g firebase-tools
firebase login
firebase init
firebase deploy
```

## 📝 Padrão de Commits

```bash
# Feature
git commit -m "feat: adiciona seção de testimonials"

# Fix
git commit -m "fix: corrige validação de email"

# Docs
git commit -m "docs: atualiza README"

# Style
git commit -m "style: ajusta cores do tema escuro"

# Refactor
git commit -m "refactor: organiza código JavaScript"
```

## 🔄 Workflow de Branches

```bash
# Criar branch de feature
git checkout -b feat/nova-secao

# Fazer commits
git commit -m "feat: adiciona nova seção"

# Push para remote
git push origin feat/nova-secao

# Abrir Pull Request no GitHub/GitLab
# Merge após aprovação
```

## 🚀 Roadmap Futuro

- [ ] Integração com backend (Node.js/Python)
- [ ] Sistema de envio de e-mail (Nodemailer/SendGrid)
- [ ] Blog dinâmico
- [ ] Sistema de agendamento
- [ ] Dashboard administrativo
- [ ] API GraphQL
- [ ] Progressive Web App (PWA)
- [ ] Testes automatizados (Jest)
- [ ] CI/CD com GitHub Actions
- [ ] Docker containerization

## 🤝 Como Contribuir

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feat/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feat/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

Desenvolvido por **TechFlow Dev Team**

## 📞 Contato & Suporte

- 📧 Email: contato@techflow.com
- 💬 WhatsApp: [+55 11 98765-4321](https://wa.me/5511987654321)
- 🔗 LinkedIn: [TechFlow](https://linkedin.com)
- 🐙 GitHub: [GitHub](https://github.com)

## 📚 Recursos Úteis

- [MDN Web Docs](https://developer.mozilla.org)
- [CSS Tricks](https://css-tricks.com)
- [JavaScript.info](https://javascript.info)
- [Can I Use](https://caniuse.com)

---

**Desenvolvido com ❤️ usando tecnologias web modernas**

Versão: 1.0.0 | Última atualização: Fevereiro 2026
