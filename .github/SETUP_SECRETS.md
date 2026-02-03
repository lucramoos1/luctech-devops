# 🔐 GitHub Actions - Configuração de Secrets

## Como Configurar o Deployment Automático

### 1️⃣ Ativar GitHub Pages

1. Vá para **Settings** do repositório
2. Navegue até **Pages** (na esquerda)
3. Em "Source", selecione **Deploy from a branch**
4. Selecione branch: **main** e pasta: **/(root)**
5. Clique em **Save**
6. Aguarde 1-2 minutos
7. Seu site estará em: `https://seu-usuario.github.io/techflow`

---

### 2️⃣ Configurar Secrets (Opcional - Para Vercel/Netlify)

#### Para Vercel:

1. Vá para **Vercel Dashboard**
2. Crie um novo projeto ou selecione existente
3. Copie seus tokens:
   - `VERCEL_TOKEN` (vá em Settings > Tokens)
   - `VERCEL_ORG_ID` (vá em Settings > General)
   - `VERCEL_PROJECT_ID` (em Project Settings > General)

4. Adicione ao GitHub:
   - Vá para **Settings > Secrets and variables > Actions**
   - Clique em **New repository secret**
   - Adicione cada um dos 3 secrets acima

#### Para Netlify:

1. Vá para **Netlify Dashboard**
2. Vá em **User settings > Applications > Personal access tokens**
3. Crie um novo token e copie
4. Vá para seu site > **Settings > General**
5. Copie o **Site ID**

6. Adicione ao GitHub:
   - Vá para **Settings > Secrets and variables > Actions**
   - Novo secret: `NETLIFY_AUTH_TOKEN` = seu token
   - Novo secret: `NETLIFY_SITE_ID` = seu site ID

---

## 📋 O que o Workflow Faz

### ✅ Job 1: Validação (Sempre executa)
```yaml
- Valida HTML com W3C Validator
- Verifica tamanho dos arquivos
- Garante qualidade antes de deploy
```

### ✅ Job 2: Deploy GitHub Pages (Sempre executa)
```yaml
- Checkout do código
- Setup do Pages
- Upload dos artifacts
- Deploy automático
```

### ⚠️ Job 3: Deploy Vercel (Apenas em Push para main)
```yaml
- Requer VERCEL_TOKEN configurado
- Faz deploy automático
- URL: techflow-main.vercel.app
```

### ⚠️ Job 4: Deploy Netlify (Apenas em Push para main)
```yaml
- Requer NETLIFY_AUTH_TOKEN configurado
- Requer NETLIFY_SITE_ID configurado
- Faz deploy automático
```

### 📊 Job 5: Lighthouse (Comentado)
```yaml
- Descomente se quiser testes de performance
- Gera relatório de Lighthouse
```

### 🔔 Job 6: Notificações
```yaml
- Mostra se deployment foi sucesso ou falhou
- Exibe informações úteis
```

---

## 🚀 Como Usar

### Deployment Automático

1. **Faça um commit e push para main:**
```bash
git add .
git commit -m "feat: update landing page"
git push origin main
```

2. **Vá para Actions:**
   - GitHub > Seu repo > **Actions**
   - Veja o workflow executando em tempo real

3. **Seu site será atualizado automaticamente!**
   - GitHub Pages: em 1-2 minutos
   - Vercel: em 30-60 segundos
   - Netlify: em 30 segundos

---

## 🔄 Workflow Automático

```
Você faz push
    ↓
GitHub Actions detecta
    ↓
Executa validação (HTML, tamanhos)
    ↓
Se OK, faz deploy para:
    ├─ GitHub Pages ✅ (sempre)
    ├─ Vercel ⚠️ (se secrets configurados)
    └─ Netlify ⚠️ (se secrets configurados)
    ↓
Seu site é atualizado instantaneamente!
```

---

## 📝 Exemplo de Execução

```
Push para main
    ↓
GitHub Actions dispara
    ↓
[1] validate (5-10 min)
    ├─ Checkout ✅
    ├─ Validate HTML ✅
    └─ Check files ✅
    ↓
[2] deploy (2-5 min)
    ├─ Setup Pages ✅
    ├─ Upload artifacts ✅
    └─ Deploy ✅ → https://seu-usuario.github.io/techflow
    ↓
[3] deploy-vercel (opcional, 1-2 min)
    └─ Deploy ✅ → https://techflow-xxx.vercel.app
    ↓
[4] deploy-netlify (opcional, 1-2 min)
    └─ Deploy ✅ → https://seu-site-xxx.netlify.app
    ↓
[6] notify
    └─ Sucesso! ✅
```

---

## 🔧 Customizar o Workflow

### Apenas GitHub Pages (remover Vercel/Netlify):

```yaml
# Comente ou remova essas seções:
# - deploy-vercel
# - deploy-netlify
```

### Adicionar outro destino:

```yaml
  deploy-custom:
    needs: validate
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: echo "Deploy custom script aqui"
```

### Executar apenas em tags:

```yaml
on:
  push:
    tags:
      - 'v*'
```

---

## 🆘 Troubleshooting

### "Validation failed"
- Verifique HTML syntax
- Rode localmente: `python -m http.server 8000`

### "Deploy to Pages failed"
- Vá em Settings > Pages
- Selecione main branch
- Aguarde GitHub detectar

### "Vercel deploy failed"
- Verifique VERCEL_TOKEN
- Verifique VERCEL_ORG_ID
- Verifique VERCEL_PROJECT_ID

### "Netlify deploy failed"
- Verifique NETLIFY_AUTH_TOKEN
- Verifique NETLIFY_SITE_ID
- Token expirou? Gere novo

---

## ✅ Checklist Setup

- [ ] GitHub Pages ativado (Settings > Pages)
- [ ] Arquivo deploy.yml criado
- [ ] Fez primeiro push
- [ ] Viu workflow executando em Actions
- [ ] Site está online
- [ ] Dark mode funciona
- [ ] Formulário valida
- [ ] Confetti! 🎉

---

## 📊 Status do Deployment

Para ver status em tempo real:

1. Vá para **Actions** no seu repositório
2. Veja o workflow atual
3. Clique para ver detalhes
4. Veja logs de cada job

---

## 🎯 Próximos Passos

1. ✅ Configurar GitHub Pages (obrigatório)
2. ⚠️ Adicionar Vercel secrets (opcional)
3. ⚠️ Adicionar Netlify secrets (opcional)
4. 🚀 Fazer push
5. 🎉 Seu site é publicado automaticamente!

---

**GitHub Actions está configurado e pronto para deploy automático!** 🚀
