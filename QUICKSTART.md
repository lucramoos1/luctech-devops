# 🚀 Guia de Início Rápido - TechFlow

Bem-vindo! Este guia te ajudará a começar em 5 minutos.

## ⚡ 5 Minutos de Setup

### 1. Clone ou Faça Download

```bash
# Via Git
git clone https://github.com/seu-usuario/techflow.git
cd techflow

# Ou baixe o ZIP e extraia
```

### 2. Abra no Navegador

```bash
# Opção 1: Abra direto
# Abra o arquivo index.html no navegador

# Opção 2: Com Live Server (VSCode)
# Instale extensão "Live Server"
# Clique direito em index.html > Open with Live Server

# Opção 3: Com Python
python -m http.server 8000
# Visite: http://localhost:8000
```

### 3. Comece a Editar

**Abra `index.html` no seu editor favorito!**

---

## 📚 Estrutura Rápida

```
index.html       ← Tudo aqui (HTML + CSS + JS)
.gitignore       ← Arquivos a ignorar
README.md        ← Documentação completa
TECHNICAL.md     ← Detalhes técnicos
DEPLOY.md        ← Como publicar
MAINTENANCE.md   ← Como manter
```

---

## 🎯 Próximos Passos

### 1. Customizar Conteúdo

**Abra `index.html` e procure:**

```html
<a href="#hero" class="logo">Tech<span>Flow</span></a>
<!-- ↑ Altere para seu nome -->

<h1>Soluções de TI que Transformam Negócios</h1>
<!-- ↑ Altere para seu título -->

<a href="https://wa.me/5511987654321">💬</a>
<!-- ↑ Altere para seu WhatsApp -->
```

### 2. Publicar Online

**Escolha uma opção:**

```
🌟 GitHub Pages (Grátis)    → Configure em Settings > Pages
💨 Vercel (Recomendado)     → vercel deploy
🚀 Netlify (Fácil)          → Conecte seu GitHub
🔥 Firebase (Poderoso)      → firebase deploy
```

Veja [DEPLOY.md](DEPLOY.md) para instruções completas.

### 3. Usar Git (Opcional mas Recomendado)

```bash
# Crie um repositório
git init
git add .
git commit -m "Initial commit"

# Envie para GitHub
git remote add origin https://github.com/seu-usuario/techflow.git
git branch -M main
git push -u origin main
```

---

## 🛠️ Funcionalidades Prontas

✅ Dark Mode (clique no ícone 🌙)  
✅ Menu Mobile Responsivo  
✅ Formulário com Validação  
✅ Animações Suaves  
✅ Compatível com Todos Navegadores  

---

## 🎨 Customização Básica

### Alterar Cores

No `<style>`, procure:

```css
:root {
  --primary: #3b82f6;      /* Azul → Altere para sua cor */
  --secondary: #8b5cf6;    /* Roxo → Altere para sua cor */
}
```

**Exemplo:**
```css
--primary: #ff6b6b;        /* Vermelho */
--primary: #10b981;        /* Verde */
--primary: #f59e0b;        /* Laranja */
```

### Adicionar Novo Serviço

```html
<!-- Procure por id="services" -->
<!-- Copie e cole um card: -->

<div class="service-card fade-in-up">
  <div class="service-icon">💻</div>
  <h3>Seu Serviço</h3>
  <p>Descrição aqui...</p>
</div>
```

### Alterar Telefone WhatsApp

Procure por `wa.me/` e altere o número:

```html
<a href="https://wa.me/5511987654321">💬</a>
<!-- Altere de 5511987654321 para seu número -->
<!-- Formato: 55 (código país) 11 (área) 987654321 (número) -->
```

---

## 📱 Testar Responsividade

No navegador:
1. Pressione `F12` para abrir DevTools
2. Clique no ícone de dispositivo (ou `Ctrl+Shift+M`)
3. Teste em diferentes tamanhos

---

## ❓ Dúvidas Frequentes

**P: Preciso de Node.js ou dependências?**  
R: Não! Tudo funciona com HTML/CSS/JS puro.

**P: Como adicionar imagens?**  
R: Crie pasta `assets/` e adicione `<img src="assets/imagem.jpg">`

**P: Como o formulário envia e-mails?**  
R: Atualmente apenas valida. Para enviar, veja [TECHNICAL.md](TECHNICAL.md#envio-de-formulário)

**P: Posso vender/modificar?**  
R: Sim! É MIT License. Faça o que quiser.

---

## 🔗 Recursos Úteis

- [MDN Docs](https://developer.mozilla.org) - Referência HTML/CSS/JS
- [CSS Tricks](https://css-tricks.com) - Dicas de CSS
- [Can I Use](https://caniuse.com) - Compatibilidade browsers
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance

---

## 📞 Suporte

- 📖 Leia [README.md](README.md)
- 🔧 Veja [TECHNICAL.md](TECHNICAL.md)
- 🚀 Check [DEPLOY.md](DEPLOY.md)
- 🛠️ Veja [MAINTENANCE.md](MAINTENANCE.md)

---

## 🎉 Pronto para Começar?

```bash
# 1. Abra index.html
# 2. Customize com seus dados
# 3. Teste no navegador
# 4. Publique online
# 5. Compartilhe com o mundo! 🌍
```

**Sucesso! Boa sorte com sua landing page! 🚀**

---

*Dúvidas? Abra uma issue no GitHub ou consulte a documentação completa.*
