# Findings & Architectural Decisions

## Diagnóstico da Estética Anterior ("AI Slop")
- Presença excessiva de gradientes genéricos `from-blue-500 to-purple-600` e sombras difusas em botões, títulos, ícones e overlays de cards.
- Blobs desfocados roxos no fundo (`bg-purple-500/10`) sem estrutura ou propósito.
- Anéis decorativos giratórios genéricos ao redor do avatar sem contexto.

## Nova Direção de Design: Dark Engineering Console
1. **Paleta & Fundo**:
   - Fundo obsidiana profundo (`zinc-950` / `#09090b` / `#0c0d12`).
   - Grade de pontos sutil (subtle dot-matrix / engineering grid) usando CSS background radial-gradient.
   - Acentos:
     - Esmeralda terminal (`emerald-500` / `#10b981`) para status online, live links e execuções bem-sucedidas.
     - Ciano elétrico (`cyan-500` / `#06b6d4`) ou branco puro (`zinc-100`) para comandos e destaques de arquitetura.
     - Superfícies em `zinc-900/80` com bordas precisas `border-zinc-800` (hover: `border-zinc-700` ou `border-emerald-500/30`).
2. **Tipografia & Elementos de Dev**:
   - Monospace (`font-mono`) para badges, comandos CLI, caminhos de arquivo (`~/projects/web/nutri-lemon`), tags de versão (`v2.4.0`), latência (`12ms`), status (`status: operational`).
   - Terminal window headers: `● ● ●` (red, yellow, green) no topo dos cards de projetos.
   - Code-syntax hints: `const developer = { ... }`, flags de linha de comando nos filtros (`--all`, `--fullstack`, `--web`, `--mobile`).
3. **Animações (Framer Motion & GSAP)**:
   - Framer Motion: `layoutId` para transição suave de aba selecionada.
   - Framer Motion: spring cards com efeito de escala suave, elevação táctil e hover nos botões de ação.
   - Animação de entrada dos cards com `staggerChildren` para cascata fluida.
