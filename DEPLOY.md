# Guia de Deploy - TechFlow

## 🌐 Plataformas de Deploy

### 1️⃣ GitHub Pages (Recomendado para Começar)

**Vantagens:**
- ✅ Gratuito
- ✅ Integrado ao Git
- ✅ Deploy automático
- ✅ Domínio fornecido

**Passos:**

```bash
# 1. Crie um repositório no GitHub chamado:
# seu-usuario.github.io
# OU
# techflow (qualquer nome)

# 2. Inicialize Git (se não tiver)
git init
git add .
git commit -m "Initial commit"

# 3. Adicione remote
git remote add origin https://github.com/seu-usuario/techflow.git

# 4. Faça push
git branch -M main
git push -u origin main

# 5. Ative GitHub Pages
# Vá para Settings > Pages > Source: main branch
# Salve

# 6. Seu site estará em:
# https://seu-usuario.github.io/techflow
# OU (se for seu-usuario.github.io)
# https://seu-usuario.github.io
```

### 2️⃣ Vercel (Melhor Performance)

**Vantagens:**
- ✅ Excelente performance
- ✅ SSL automático
- ✅ CDN global
- ✅ Analytics integrado
- ✅ Deploy contínuo

**Passos:**

```bash
# 1. Instale Vercel CLI
npm install -g vercel

# 2. Faça login
vercel login

# 3. Deploy
vercel

# 4. Siga as instruções interativas

# Seu site estará em:
# https://techflow-xxxxx.vercel.app
```

**Com GitHub:**
1. Conecte seu GitHub na [Vercel Dashboard](https://vercel.com/dashboard)
2. Importe seu repositório
3. Deploy automático em cada push!

### 3️⃣ Netlify (Fácil e Poderoso)

**Vantagens:**
- ✅ Interface intuitiva
- ✅ Formulários nativos
- ✅ Lambda functions
- ✅ A/B testing

**Passos (via Interface):**

1. Vá para [netlify.com](https://netlify.com)
2. Clique em "Sign up"
3. Conecte seu GitHub
4. Selecione seu repositório
5. Deploy automático!

**Seu site estará em:**
```
https://seu-site-xxx.netlify.app
```

### 4️⃣ Firebase Hosting

**Vantagens:**
- ✅ Integrado ao Firebase
- ✅ SSL automático
- ✅ CDN global
- ✅ Database options

**Passos:**

```bash
# 1. Instale Firebase CLI
npm install -g firebase-tools

# 2. Login
firebase login

# 3. Inicialize projeto
firebase init hosting

# 4. Selecione seu projeto (ou crie novo)

# 5. Configure public directory como "."

# 6. Deploy
firebase deploy

# Seu site estará em:
# https://seu-projeto.firebaseapp.com
```

### 5️⃣ Heroku (com Backend futuro)

**Vantagens:**
- ✅ Bom para apps com backend
- ✅ Environment variables
- ✅ Database support

**Passos:**

```bash
# 1. Instale Heroku CLI
npm install -g heroku

# 2. Login
heroku login

# 3. Crie app
heroku create seu-app

# 4. Deploy
git push heroku main

# Seu site estará em:
# https://seu-app.herokuapp.com
```

---

## 🚀 Deploy Contínuo (CI/CD)

### GitHub Actions (Automático com GitHub Pages)

**Arquivo:** `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
```

### GitHub Actions (Deploy para Vercel)

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: npm i -g vercel
      - run: vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
```

---

## 🔧 Configuração de Domínio Personalizado

### Qual Plataforma Usar?

1. **Registrar Domínio:**
   - Namecheap
   - GoDaddy
   - Google Domains
   - Registro.br (para .br)

2. **Configurar DNS:**

   **Para GitHub Pages:**
   ```
   CNAME: seu-usuario.github.io
   A: 185.199.108.153
   A: 185.199.109.153
   A: 185.199.110.153
   A: 185.199.111.153
   ```

   **Para Vercel:**
   ```
   CNAME: cname.vercel-dns.com
   ```

   **Para Netlify:**
   ```
   CNAME: seu-site-xxx.netlify.app
   ```

3. **Ativar SSL/TLS:** Automático em todas as plataformas

---

## 📊 Monitoramento Pós-Deploy

### Ferramentas Recomendadas

```bash
# 1. Google Analytics
# Adicione código de tracking no <head>
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>

# 2. Sentry (Error Tracking)
npm install @sentry/browser
// Adicione no JS

# 3. Speedgun (Performance)
# Monitorar com Lighthouse CI

# 4. Uptime Monitor
# UptimeRobot, Pingdom, etc
```

### Checklist Pós-Deploy

- [ ] Site carrega em menos de 3 segundos
- [ ] Mobile funciona corretamente
- [ ] Formulário envia corretamente
- [ ] Dark mode funciona
- [ ] Links funcionam
- [ ] Analytics configurado
- [ ] SSL ativado (HTTPS)
- [ ] Sitemap.xml criado
- [ ] robots.txt criado
- [ ] Google Search Console vinculado

---

## 🔒 Segurança em Deploy

### Checklist de Segurança

- [ ] Sem credenciais em commits
- [ ] HTTPS habilitado
- [ ] Headers de segurança configurados
- [ ] CSP (Content Security Policy)
- [ ] Sem vulnerabilidades conhecidas
- [ ] Backup automático ativado

### Headers de Segurança (Vercel/Netlify)

**vercel.json:**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" }
      ]
    }
  ]
}
```

---

## 📈 Próximos Passos

1. **Escolher Plataforma:** Comece com GitHub Pages ou Vercel
2. **Configurar Domínio:** Registre seu domínio
3. **Ativar HTTPS:** Automático na maioria dos serviços
4. **Configurar Analytics:** Google Analytics ou Plausible
5. **Monitorar Performance:** Use Lighthouse CI
6. **Automatizar Deploy:** Configure CI/CD pipeline

---

## 🆘 Troubleshooting Deploy

### Site não atualiza após push

```bash
# Limpe cache do navegador
Ctrl+Shift+Delete (Windows)
Cmd+Shift+Delete (Mac)

# Ou
- Abra DevTools (F12)
- Application > Clear cache
```

### Domínio não funciona

1. Aguarde propagação DNS (pode levar 24h)
2. Verifique configuração DNS
3. Teste com: nslookup seu-dominio.com

### 404 em páginas

- GitHub Pages: arquivo precisa estar na raiz
- Verifique caminhos relativos

### SSL não funciona

- Aguarde certificado (automático em 24h)
- Limpe cache do navegador
- Tente acessar em nova aba anônima

---

**Última atualização:** Fevereiro 2026
