# CoreDot Design System

CoreDot é uma marca de estúdio dev com alma de jogo indie. A identidade foi inspirada em **Undertale** (caixas de diálogo, corações pixelados, sparkles) e o mascote **Dot** — uma pequena múmia de olhos amarelos — foi inspirado no **Amumu (League of Legends)**. Tudo vive sobre fundos quase-pretos e quentes, com creme "atadura" e amarelo como única cor de destaque.

**Fontes deste sistema:** 17 imagens enviadas pelo usuário (logos, mascote, folha de emotes, ícones pixel art, mocks de UI — ver `assets/` e `reference/`) **+ o HTML autocontido da landing original** (`uploads/CoreDot Landing Page.html`, fonte extraída em `reference/landing-source.html`) e sua documentação (`uploads/COREDOT-LANDING.md`). Os valores abaixo são copiados da landing real.

Toda tela da CoreDot deve transmitir: **acolhimento, simplicidade, criatividade, organização.** Evitar: excesso de informação, cores muito saturadas em área grande, aparência corporativa, interfaces frias. Preferir: animações suaves, bastante espaçamento, cartões, pixel art discreta. (Obs.: apesar do brief citar "cantos arredondados", a landing real é toda **reta** — o acolhimento vem do espaço, do tom e do Dot.)

## CONTENT FUNDAMENTALS

- Idioma: **português (BR)**, informal e caloroso. O Dot fala em 1ª pessoa e trata o leitor por "você": "Oi! Eu sou o Dot."
- Frases curtas, tom de jogo: "Dot encontrou uma solução!", "100% concluído!". Exclamações são bem-vindas; jargão corporativo não.
- Rótulos de UI em caixa-alta mono espaçada: `BOTÃO PRIMÁRIO`, `BARRA DE PROGRESSO`.
- Emotes do mascote carregam microcopy de estado: OLÁ!, YAY!, HMM…, OPS…, BUGOU!, EUREKA!, CAFÉ!, SAD…, CODE <3. Use o emote em vez de emoji.
- Emoji Unicode: **não**. Pixel art própria faz esse papel.
- Reticências para estados em andamento ("Dot está pensando…"), exclamação para conquistas.

## VISUAL FOUNDATIONS

- **Cor:** fundos alternam **#0D0D0D / #151515** por seção (pretos quentes); screenshots sobre #1d1d1d; borda universal **1px #2c2c2c**. Texto títulos **#FFFDF2** (nunca branco puro), corpo **#8C8C8C**. Amarelo **#FFD400** é O acento (CTAs, marcadores, olhos do Dot); **#FFE873** para linhas de terminal e tags; sombra de botão **#3a3200**. Verde #27c93f / vermelho #ff5f56 / laranja #ffbd2e só nos dots de janela e estados [✓].
- **Tipo:** `Press Start 2P` — títulos (h1 clamp 22–40px/1.5, h2 18–26px/1.6, h3 11–14px/1.7), botões (10–11px) e marcadores `// 01 — SOBRE` (10px); `VT323` — terminal, nav (20px), tags (16–17px), listas [✓] (19px), sempre ≥16px; `Space Grotesk` — texto corrido 15–18px/1.7. Todas no Google Fonts (importadas em `tokens/typography.css`).
- **Espaço:** seções 90px vertical, grids 20px, container 1180px. Fundos alternam #0D0D0D/#151515 seção a seção com borda inferior 1px #2c2c2c.
- **Cantos:** **nenhum raio** — tudo reto; só os dots de janela são círculos.
- **Bordas:** 1px #2c2c2c em tudo; borda amarela 1px = destaque/modal; filete superior 2px amarelo nos cards de serviço; tracejada amarela = notas.
- **Sombras:** duras, deslocadas, sem blur — botão `4px 4px 0 #3a3200`, card portfólio `8px 8px 0 rgba(255,212,0,.08)`, modal `10px 10px 0 rgba(255,212,0,.15)`.
- **Fundo:** cor chapada + glow radial amarelo sutil (`--glow-radial`, animação glowpulse 6s) em hero/CTA + sinais "+" VT323 e quadradinhos amarelos com opacidade .25–.5, com parcimônia.
- **Animação:** cursor de bloco piscando (`blink 1.1s steps(1)`), `floaty` 4s no mascote, `glowpulse` 6s, boot de terminal digitado (700ms/linha). Transições .12–.15s. Respeitar `prefers-reduced-motion`.
- **Hover:** botão primário `translate(-2px,-2px)` (sombra parece crescer); secundário ganha fundo rgba(255,212,0,.1); cards borda amarela + `translateY(-3px)`; links VT323 ficam amarelos.
- **Transparência/blur:** só na nav sticky (rgba(13,13,13,.94) + blur 6px) e overlay do modal rgba(13,13,13,.88).
- **Imagens:** pixel art da marca com `image-rendering:pixelated`; ilustrações levemente rotacionadas (-4°/+3°) em duplas; screenshots sempre dentro de moldura de janela terminal.
- **Cartões:** retos, `#151515` + borda 1px #2c2c2c + padding 24–26px (cards internos de seção #151515 usam fundo #0D0D0D).

## ICONOGRAPHY

- **Sistema próprio em pixel art PNG** — não há icon font nem SVG. Copiados em `assets/`: `icon-c-badge.png`, `icon-spark.png`, `icon-coracao-balao.png`, ilustrações (`illus-*.png`) e a folha de 22 emotes (`emotes-dot.png`).
- O motivo decorativo é o sinal **"+"** (VT323) e quadradinhos amarelos de opacidade baixa; "ícones" de serviço são glifos de terminal em VT323 26px amarelo: `</>`, `{ sys }`, `[ IA ]`, `<=>`, `[ mvp ]`, `v2.0 ++`. Estados usam `[✓]` verde, `[+]/[-]` no FAQ, `[x]` para fechar, `[≡]` menu.
- Sem emoji, sem Lucide/Heroicons. Se precisar de um ícone que não existe, deixe espaço reservado e peça o asset.
- Logos: `logo-horizontal.png` (wordmark pixel), `logo-com-mascote.png` (Dot ninja + wordmark). Sempre sobre fundo escuro.

## Índice

- `styles.css` → importa `tokens/` (colors, typography, spacing, effects, base)
- `assets/` — logos, mascote, emotes, ícones e ilustrações pixel art (originais com muita margem transparente; use `assets/trim/` — versões recortadas no bounding box). `assets/landing/` — assets exatos extraídos da landing original (logos nav/footer, poses do Dot, screenshots do case Formiga Lúdica, logo Formiga Lúdica).
- `reference/landing-source.html` — fonte completa da landing original (ground truth)
- `reference/` — screenshot de elementos de UI original
- `guidelines/` — cards de fundação (cores, tipo, espaçamento, efeitos, marca)
- `components/core/` — Button, Input, Checkbox, Badge
- `components/feedback/` — ProgressBar, DialogBox, Toast
- `components/surfaces/` — Card, WindowFrame
- `components/brand/` — Mascote (emotes), Sparkles
- `ui_kits/landing/` — landing page do portfólio CoreDot (index.html interativo)
- `SKILL.md` — uso como Agent Skill

### Adições intencionais

- `Sparkles` (decoração de fundo) e `WindowFrame` (chrome de janela dos mocks) — ambos aparecem repetidamente nas imagens, componentizados para reuso.
