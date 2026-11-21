# Task Plan - Adicionar Novos Projetos (Jardim Secreto, Valença & Advogados, Cafeteria Portuguesa)

## Objetivo
Integrar os 3 novos projetos ao portfólio preservando a estética Developer Console (sem AI-slop, tags de terminal, botões de alta precisão) e os 21 projetos anteriores, totalizando 24 projetos.

## Fases do Projeto

### Phase 1: Copiar Imagens dos Novos Projetos
- [x] Copiar imagem 1 (`media_1795223725700_2776f43b.jpg`) -> `vertical-glow-portfolio-main/public/projects/jardim-secreto.jpg`.
- [x] Copiar imagem 2 (`media_1795223775686_0c29a077.jpg`) -> `vertical-glow-portfolio-main/public/projects/valenca-advogados.jpg`.
- [x] Copiar imagem 3 (`media_1795224585719_479fef12.jpg`) -> `vertical-glow-portfolio-main/public/projects/cafeteria-portuguesa.jpg`.
**Status:** complete

### Phase 2: Atualização do PortfolioSection.tsx
- [x] Inserir os 3 novos projetos no início da lista com títulos, descrições ricas, categorias, tecnologias e URLs correspondentes.
- [x] Reindexar os IDs dos projetos subsequentes (1 a 24).
**Status:** complete

### Phase 3: Verificação de Build e Deploy Git
- [x] Executar `npm.cmd run build` em `vertical-glow-portfolio-main`.
- [ ] Realizar git commit com autor `RaphaCalixto <NaoDrezzy@outlook.com>` e push para `origin master`.
**Status:** in_progress
