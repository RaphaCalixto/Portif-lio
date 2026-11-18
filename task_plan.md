# Task Plan - Redesign Anti-"AI Slop" & Developer Engineering Aesthetics

## Objetivo
Eliminar completamente todos os gradientes roxos/lilás ("AI slop") de todo o portfólio.
Implementar uma identidade visual única e autêntica de Engenharia de Software / Developer Console (obsidian/dark engineering, acentos ciano elétrico/esmeralda terminal, tipografia com acentos mono, barras de janela terminal `● ● ●`, badges de status, microinterações táteis) e animações ricas com Framer Motion e GSAP.

## Fases do Projeto

### Phase 1: Diagnóstico e Planejamento de Estética Anti-Slop
- [x] Mapear todas as instâncias de gradiente roxo/lilás em todos os componentes.
- [x] Definir tokens de design e direção estética: Dark Engineering Minimalist (fundo obsidiana `#09090b` / `#0d0e12`, bordas técnicas `border-zinc-800`, acentos `emerald-500` e `cyan-500`, badges mono, linhas de grid sutis, terminal bars).
**Status:** complete

### Phase 2: Refatoração do HeroSection
- [x] Remover glow roxo, anéis giratórios roxos e botões genéricos.
- [x] Implementar Hero com estética Dev: terminal badge (`> fullstack_engineer.init()`), dot-matrix sutil, moldura técnica para o avatar com status online pulsante, botões com spring physics do Framer Motion e microinterações de hover.
**Status:** complete

### Phase 3: Refatoração do PortfolioSection (Cards & Filtros)
- [x] Substituir abas de filtro por CLI/Dev pills (`--all`, `--fullstack`, `--web`, `--mobile`) com animated indicator do Framer Motion.
- [x] Modernizar os cards de projeto:
  - Adicionar barra superior de terminal (`● ● ●` e caminho do arquivo/repositório).
  - Animação de hover spring com Framer Motion.
  - Tags de tecnologias limpas e técnicas em `font-mono`.
  - Ações com botões de alta precisão (Deploy/Demo e GitHub) com ícones e microinterações.
  - Eliminar qualquer overlay ou gradiente roxo/violeta.
**Status:** complete

### Phase 4: Refatoração do AboutSection (Experiências e Ferramentas)
- [x] Linha do tempo de carreira técnica (sem gradiente roxo, nós elegantes com linha de código contínua, monospace dates).
- [x] Seção de Skills & Ferramentas com cartões técnicos e visualização de stack categorizada (Front-end, Back-end, DevOps & Infra).
**Status:** complete

### Phase 5: Refatoração de ServicesSection, ContactSection, Sidebar & ScrollToTop
- [x] `ServicesSection`: remover gradientes roxos, adicionar cards modulares com visual de arquitetura de microsserviços / API contract.
- [x] `ContactSection`: terminal de contato / direct channel, inputs de alta precisão, sem roxo.
- [x] `Sidebar` & `ScrollToTop`: navegação limpa com indicadores de status técnicos e microinterações.
**Status:** complete

### Phase 6: Verificação de Build, Teste Visual e Deploy
- [x] Executar `npm.cmd run build` em `vertical-glow-portfolio-main` para certificar zero erros de compilação TS/Vite.
- [ ] Commit e Push para `origin master` no GitHub.
**Status:** in_progress
