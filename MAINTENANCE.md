# Guia de Manutenção - TechFlow

## 📋 Checklist de Manutenção Mensal

### Segurança
- [ ] Verificar vulnerabilidades conhecidas
- [ ] Atualizar dependências (se adicionar no futuro)
- [ ] Verificar links externos
- [ ] Testar formulário de contato

### Performance
- [ ] Executar Lighthouse audit
- [ ] Verificar Google PageSpeed Insights
- [ ] Testar em diferentes navegadores
- [ ] Verificar analytics

### Conteúdo
- [ ] Revisar cópia do texto
- [ ] Atualizar informações de contato
- [ ] Verificar links quebrados
- [ ] Validar e-mails dos formulários

### SEO
- [ ] Verificar posicionamento no Google
- [ ] Atualizar sitemap.xml
- [ ] Verificar robots.txt
- [ ] Revisar meta tags

---

## 🔄 Atualizações de Conteúdo

### Como Atualizar Serviços

```html
<!-- Localize -->
<div class="services-grid">

<!-- Adicione novo card -->
<div class="service-card">
  <div class="service-icon">🎯</div>
  <h3>Novo Serviço</h3>
  <p>Descrição do serviço...</p>
</div>
```

### Como Adicionar Perguntas ao FAQ

```html
<!-- Localize -->
<div class="faq-container">

<!-- Adicione novo item -->
<div class="faq-item">
  <div class="faq-question">
    <span>Sua pergunta aqui?</span>
    <span class="faq-icon">▼</span>
  </div>
  <div class="faq-answer">
    Sua resposta aqui...
  </div>
</div>
```

### Como Atualizar Informações de Contato

**Footer:**
```html
<a href="tel:+5511987654321">(11) 98765-4321</a>
<a href="mailto:contato@techflow.com">contato@techflow.com</a>
```

**WhatsApp Button:**
```html
<a href="https://wa.me/5511987654321">💬</a>
```

---

## 🐛 Resolução de Problemas Comuns

### Formulário não envia

**Verificar:**
1. IDs dos inputs correspondem ao JS?
2. Há erros no console?

```javascript
// Debug no console
document.getElementById('contactForm').addEventListener('submit', (e) => {
  console.log('Formulário enviado');
});
```

### Dark mode não funciona

**Verificar:**
1. localStorage habilitado?
2. Há erros no console?

```javascript
// Teste localStorage
localStorage.setItem('test', 'test');
console.log(localStorage.getItem('test'));
```

### Navegação não funciona

**Verificar:**
1. IDs das seções existem?
2. Links têm o # correto?

```html
<!-- Verificar correspondência -->
<a href="#services">Serviços</a>
<section id="services">...</section>
```

---

## 📊 Monitoramento

### Tools Recomendadas

1. **Google Analytics**
   ```html
   <!-- Adicione no <head> -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

2. **Google Search Console**
   - Verifique posicionamento
   - Monitore clicks
   - Veja erros de crawl

3. **Uptime Monitor**
   - UptimeRobot
   - Pingdom
   - StatusCake

### Métricas a Monitorar

- Tempo de carregamento (deve ser < 3s)
- Bounce rate (manter baixo)
- Conversão de formulário
- Taxa de cliques em CTA

---

## 🔄 Backup e Recuperação

### Backup Regular

```bash
# Backup local (recomendado)
git clone seu-repositorio backup-$(date +%Y-%m-%d)

# GitHub é seu backup automático!
# Verifique em: https://github.com/seu-usuario/techflow
```

### Recuperar Versão Anterior

```bash
# Ver histórico
git log --oneline

# Voltar para commit anterior
git revert COMMIT_HASH
git push
```

---

## 📈 Melhorias Futuras

### Curto Prazo (1-2 meses)
- [ ] Blog/News
- [ ] Integração com API de contato
- [ ] Envio de e-mail confirmação
- [ ] Rate limiting no formulário

### Médio Prazo (2-6 meses)
- [ ] Database (Firebase/MongoDB)
- [ ] Admin dashboard
- [ ] Sistema de usuários
- [ ] CMS simples

### Longo Prazo (6+ meses)
- [ ] PWA (Progressive Web App)
- [ ] Mobile app
- [ ] Marketplace
- [ ] AI chatbot

---

## 📞 Suporte Técnico

### Se algo quebrar

1. **Verifique o Console (F12)**
2. **Veja Git Log** para mudanças recentes
3. **Revert se necessário**
4. **Teste localmente primeiro**

```bash
# Revert último commit
git revert HEAD
git push

# Ou restaurar arquivo específico
git checkout HEAD -- arquivo.html
```

---

## 🚀 Dicas de Otimização

### Performance

```javascript
// Lazy load de imagens (futuro)
<img loading="lazy" src="...">

// Prefetch de recursos
<link rel="prefetch" href="...">
```

### SEO

```html
<!-- Meta tags importantes -->
<meta name="description" content="...">
<meta name="keywords" content="...">
<meta name="author" content="TechFlow">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
```

### Acessibilidade

```html
<!-- ARIA labels -->
<button aria-label="Abrir menu">☰</button>

<!-- Skip links -->
<a href="#main" class="skip-link">Pular para conteúdo</a>
```

---

## 📝 Documentação a Manter

- [ ] README.md atualizado
- [ ] CONTRIBUTING.md com regras claras
- [ ] TECHNICAL.md com arquitetura
- [ ] DEPLOY.md com instruções
- [ ] Comments no código importante

---

## 🎯 Checklist Antes de Deploy

- [ ] Testar em todos os navegadores
- [ ] Validar HTML (W3C)
- [ ] Sem erros no console
- [ ] Lighthouse score > 90
- [ ] Testar formulário
- [ ] Testar dark mode
- [ ] Testar mobile
- [ ] Links funcionam
- [ ] SEO configurado
- [ ] Analytics pronto

---

**Última atualização:** Fevereiro 2026

Para dúvidas, consulte os arquivos de documentação ou abra uma issue no GitHub.
