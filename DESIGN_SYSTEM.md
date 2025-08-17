# Sistema de Design - Portfolio Luiz Scotta

## Paleta e Acento Únicos

### Cor de Acento Principal
- **Roxo Violeta**: `#8B5CF6` (violet-600)
- Aplicada em botões, links, badges e ícones
- Gradientes harmonizados: `from-violet-600 to-violet-400`

### Cores Neutras Consistentes
- **Texto**: `#0F172A` (slate-900)
- **Bordas**: `#E2E8F0` (slate-200)
- **Fundos**: `#F8FAFC` (slate-50)
- **Fundos Brancos**: `#FFFFFF` (white)

## Tipografia com Hierarquia Clara

### Fontes
- **Títulos**: Space Grotesk (peso 700/600)
- **Corpo**: Inter (400/500)
- **Tech Tags**: JetBrains Mono (400/500)

### Escala Tipográfica
- **H1**: 56px (3.5rem) - peso 700
- **H2**: 36px (2.25rem) - peso 600
- **H3**: 28px (1.75rem) - peso 600
- **Corpo**: 18px (1.125rem) - peso 400
- **Corpo Pequeno**: 16px (1rem) - peso 400
- **Line Height**: 1.6 (leading-relaxed)

## Botões Padronizados

### Primário
- Preenchido com acento roxo
- `rounded-2xl`, `shadow-sm`
- `ring-1 ring-violet-600/10`
- Hover: `hover:translate-y-[1px]`

### Secundário
- `bg-white` com `ring-1 ring-slate-200`
- Mesmas transições e hover

### Estados
- Transições suaves: `transition-all duration-200`
- Focus visível: `focus-visible:ring-2 focus-visible:ring-violet-600`

## Cartões e Superfícies

### Padrão
- `rounded-2xl`, `p-6`, `shadow-sm`
- `border border-slate-200`, `bg-white`
- Hover: `hover:translate-y-0.5 + shadow-md`

### Fundos Tinted
- `from-violet-50 to-slate-50` (sutil)
- Alternância entre fundo branco e `bg-slate-50`

## Grid, Respiro e Largura

### Container
- `max-w-7xl` para largura máxima
- Parágrafos limitados a ~70 caracteres

### Espaçamentos
- Ritmo vertical consistente: 8/12/16/24/32 px
- Tailwind: 2/3/4/6/8

### Seções
- Alternando fundo branco e `bg-slate-50`
- Criação de ritmo visual

## Ícones e Pictogramas

### Padrão
- Set único: Lucide (1.5–2px)
- Ícones em círculos: `bg-violet-50 + text-violet-600`
- Remoção de ícones desnecessários

## Avatar e Imagens

### Foto de Perfil
- Anel de gradiente discreto com acento
- `shadow-md`

### Thumbs dos Projetos
- Formato 16:9, `rounded-xl`
- Overlay de gradiente sutil no topo
- Legibilidade das tags

## Timeline

### Linha Vertical
- `border-slate-200` mais nítida
- Marcadores circulares: `bg-violet-600 + ring-white`

### Cards de Eventos
- `bg-white`, `shadow-sm`, `rounded-xl`
- Coerentes com demais componentes

## Badges/Chips

### Padrão
- Cor base: `bg-violet-50 + text-violet-700`
- Mesma altura/raio: `h-7 px-3 rounded-full`
- `tracking-wide` para legibilidade

## Footer e Cabeçalho

### Footer
- Fundo tinted: `bg-slate-50`
- Links no acento roxo
- Texto de créditos com contraste reduzido

### Header
- `backdrop-blur` com `border-b border-slate-200`
- Sensação premium ao rolar

## Sombra, Borda e Raio

### Padrão Único
- **Raio**: `rounded-2xl` para tudo
- **Sombra**: `shadow-sm` padrão, `shadow-md` destaque
- **Borda**: `border-slate-200` única intensidade

## Micro-animações

### Entrada
- Fade/slide leve nos cards
- Delay em cascata: 40–80ms

### Hover
- `translate-y-0.5 + shadow-md` (sutil)
- `transition-all duration-200`

### Acessibilidade
- `prefers-reduced-motion` respeitado
- Animações desabilitadas quando necessário

## Contraste (AA)

### Garantias
- Relação ≥ 4.5:1 em texto/ícones
- Hover em azul/roxo claro: `-600` para legibilidade
- Cores de fundo e texto otimizadas

## Classes CSS Utilitárias

### Animações
- `.animate-fade-in`: entrada suave
- `.animate-slide-in`: deslizamento lateral

### Transições
- `transition-all duration-200`: padrão
- `hover:translate-y-[1px]`: hover sutil

### Cores
- `text-slate-900`: texto principal
- `text-slate-600`: texto secundário
- `text-violet-600`: acento
- `bg-violet-50`: fundo sutil
- `border-slate-200`: bordas

## Exemplos de Uso

### Botão Primário
```tsx
<Button className="bg-violet-600 hover:bg-violet-700">
  Ação Primária
</Button>
```

### Card Padrão
```tsx
<Card className="bg-white border-slate-200 rounded-2xl shadow-sm">
  Conteúdo do Card
</Card>
```

### Badge
```tsx
<Badge className="bg-violet-50 text-violet-700">
  Tag
</Badge>
```

### Seção Alternada
```tsx
<section className="py-20 bg-slate-50">
  {/* Conteúdo */}
</section>
```

## Implementação

Este sistema de design foi implementado usando:
- **Tailwind CSS** para utilitários
- **CSS Variables** para cores consistentes
- **Componentes React** reutilizáveis
- **Tipografia Google Fonts** (Space Grotesk, Inter, JetBrains Mono)
- **Animações CSS** otimizadas para performance
