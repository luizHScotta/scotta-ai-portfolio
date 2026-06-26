# Redesign do Portfólio — Design Spec

**Data:** 2026-04-13  
**Status:** Aprovado

---

## Decisões de Design

| Aspecto | Decisão |
|---|---|
| Estética | Minimal & Bold |
| Cor de acento | Esmeralda — `#059669` (anel: `#bbf7d0`, fundo suave: `#f0fdf4`) |
| Fundo primário | Branco `#ffffff` |
| Fundo alternado | Cinza muito claro `#f9fafb` |
| Texto principal | `#111111` |
| Texto secundário | `#555555` / `#666666` |
| Bordas | `#e5e7eb` (hover: `#059669`) |
| Hero layout | Split — texto à esquerda, foto à direita |
| Tipografia headings | Font-weight 900, letter-spacing negativo |

---

## Seções e Mudanças

### Header
- Logo `LHS` com `S` em esmeralda
- Nav links minimalistas sem sublinhado
- Botão "Contato" como CTA esmeralda sólido (canto direito)
- Sticky com `border-bottom: 1px solid #e5e7eb` ao scrollar

### Hero
- Tag de abertura: linha esmeralda + texto em caps + letter-spacing
- Nome: `LUIZ` em preto 900, `SCOTTA` em esmeralda 900, tamanho ~60-70px, letter-spacing `-3px`
- Subtítulo em cinza, max-width contido
- Botões: preto sólido "Ver Projetos →", outline esmeralda "Contato", ghost "↓ CV"
- Foto em círculo com borda esmeralda + anel externo `rgba(5,150,105,0.1)`
- Fundo branco

### Stack Principal (NOVA SEÇÃO)
- Faixa `#f9fafb` entre Hero e Sobre
- Label `STACK PRINCIPAL` em caps letter-spacing
- Pills com ícone (dot esmeralda) + nome da tecnologia
- Tecnologias: Python, React, TypeScript, FastAPI, Docker, LLMs/RAG, PostgreSQL, TailwindCSS

### Sobre
- Tag `// sobre` em esmeralda
- Título `Quem sou eu` em 900 letter-spacing negativo
- Texto fluido max-width 600px
- 2 cards de experiência lado a lado com `border: 1px solid #e5e7eb`, hover `border-color: #059669`
- Remover ícones de círculo cinza (simplificar)

### Projetos
- Fundo `#f9fafb`
- Tag `// projetos`, título `O que eu construí`
- ProjectCard: borda `1px solid #e5e7eb`, hover com `border-color: #059669` e sombra leve
- Tags de tecnologia: outline esmeralda (`border: 1px solid #059669; color: #059669`)
- Projeto "em construção": borda tracejada esmeralda

### Habilidades
- Fundo branco
- Tag `// habilidades`, título `Tecnologias`
- Cards com dot esmeralda no título
- Pills de skill: `background: #f0fdf4; border: 1px solid #bbf7d0; color: #059669`
- Remover SkillCard duplicado (usar apenas inline cards)

### Contato
- Fundo preto `#111` (contraste máximo, seção impactante)
- Tag e textos em esmeralda/branco
- 3 itens: Email, Localização, Disponibilidade em cards com `border: 1px solid #222`
- Links sociais em esmeralda

### Footer
- Fundo `#0a0a0a`
- Logo `LHS` com `S` esmeralda
- Texto de copyright centralizado em cinza escuro

---

## Animações (Scroll)

Usar `IntersectionObserver` via classes CSS para fade-in suave ao entrar na viewport:

```css
.reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }
```

Aplicar em: títulos de seção, cards de projeto, cards de skill, items de contato.

Respeitar `prefers-reduced-motion` (já existe no CSS).

---

## Arquivos a Modificar

| Arquivo | Mudança |
|---|---|
| `src/index.css` | Variáveis CSS, `.reveal` animation classes |
| `src/components/Header.tsx` | Logo, CTA button, estilos |
| `src/components/Hero.tsx` | Tipografia bold, botões, foto ring |
| `src/components/About.tsx` | Cards de experiência, remove ícones |
| `src/components/Projects.tsx` | Tags outline, fundo, título |
| `src/components/ProjectCard.tsx` | Hover border esmeralda, tags |
| `src/components/Skills.tsx` | Pills esmeralda, dot nos títulos |
| `src/components/Contact.tsx` | Fundo preto, estilos |
| `src/components/Footer.tsx` | Logo com S esmeralda, simplificação |
| `src/pages/Index.tsx` | Adicionar `<StackStrip />` |
| `src/components/StackStrip.tsx` | **NOVO** — faixa de stack principal |

---

## Fora de Escopo

- Não alterar roteamento ou lógica funcional
- Não adicionar dependências novas
- Não alterar conteúdo (textos, projetos, links)
- Não adicionar dark mode toggle
