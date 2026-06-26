# Portfólio — Luiz Henrique Scotta

Portfólio profissional de um Desenvolvedor Full Stack com foco em **Inteligência Artificial e automação**. Construído como uma SPA moderna, rápida e responsiva, com tema claro/escuro, paleta de comandos e integração com a API do GitHub.

🔗 **Acesse:** [siatechbrasil.com.br](https://www.siatechbrasil.com.br/) <!-- ajuste para a URL real do portfólio se for diferente -->

---

## ✨ Funcionalidades

- 🎨 **Tema claro/escuro** com persistência (`next-themes`)
- ⌨️ **Command Palette** (`Ctrl/Cmd + K`) para navegação rápida entre seções
- 🐙 **Integração com GitHub** — exibe repositórios direto da API
- 📱 **Design totalmente responsivo** com TailwindCSS
- ♿ **Componentes acessíveis** baseados em Radix UI (shadcn/ui)
- 📊 **Analytics** via Vercel Analytics
- ⚡ **Imagens otimizadas** em WebP para carregamento rápido

## 🛠️ Stack

| Categoria | Tecnologias |
|-----------|-------------|
| Core | React 18, TypeScript, Vite |
| Estilo | TailwindCSS, shadcn/ui (Radix UI), tailwindcss-animate |
| Roteamento | React Router DOM |
| Dados | TanStack Query |
| Formulários | React Hook Form, Zod |
| UX | cmdk (command palette), Sonner (toasts), Lucide (ícones) |
| Deploy | Vercel + GitHub Actions (CI) |

## 🚀 Começando

**Pré-requisitos:** Node.js 20+ e npm.

```bash
# Clone o repositório
git clone git@github.com:luizHScotta/scotta-ai-portfolio.git
cd scotta-ai-portfolio

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

O app sobe em `http://localhost:5173` por padrão.

## 📜 Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento com HMR |
| `npm run build` | Build de produção |
| `npm run build:dev` | Build em modo development |
| `npm run preview` | Pré-visualiza o build de produção localmente |
| `npm run lint` | Roda o ESLint |

## 📁 Estrutura

```
src/
├── components/     # Seções e componentes de UI (Hero, Projects, Skills, ...)
│   └── ui/         # Componentes base (shadcn/ui)
├── pages/          # Index e NotFound
├── hooks/          # Hooks customizados
└── lib/            # Utilitários
public/             # Imagens, currículo e assets estáticos
```

## 🔄 CI/CD

A cada `push` ou `pull request` na branch `main`, o GitHub Actions roda **lint + build** automaticamente (`.github/workflows/ci.yml`). O deploy é feito pela Vercel.

## 📧 Contato

- **Email:** luizhgscotta@gmail.com
- **GitHub:** [@luizHScotta](https://github.com/luizHScotta)
- **LinkedIn:** [Luiz Scotta](https://www.linkedin.com/in/luiz-scotta-450572213/)

---

Desenvolvido com ❤️ e muito café por **Luiz Henrique Scotta**.
