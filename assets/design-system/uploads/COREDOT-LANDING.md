# CoreDot — Landing Page de Portfólio

Documentação do projeto construído neste workspace. Última atualização: 16/07/2026.

## Visão geral
Landing page one-page da **CoreDot** (soluções digitais personalizadas), com estética pixel/terminal: fundo escuro (#0D0D0D / #151515), amarelo #FFD400, tipografia Press Start 2P (títulos), VT323 (detalhes de terminal) e Space Grotesk (texto corrido). Mascote **Dot** em pixel art presente em várias seções.

## Arquivos
| Arquivo | Função |
|---|---|
| `CoreDot Landing.dc.html` | Página principal (fonte editável) |
| `CoreDot Landing Export.dc.html` | Cópia para exportação (screenshots embutidos, sem slots) |
| `CoreDot Landing Page.html` | HTML final autocontido (6,2 MB) — pronto para hospedar |
| `image-slot.js` | Componente de slots de imagem arrastáveis |
| `.image-slots.state.json` | Screenshots arrastados (capa, desktop, IA, admin) |
| `assets/` | Poses do Dot, logos CoreDot, logo Formiga Lúdica, decorações |
| `uploads/` | Arquivos originais enviados |

## Estrutura da página
1. **Hero** — "Do núcleo da ideia ao produto final." + terminal boot animado
2. **01 — Sobre** — "Tecnologia com identidade." + Dot banner
3. **02 — Portfólio** — card Formiga Lúdica (screenshot + tags); "Ver projeto" abre o **modal do case**; "Acessar online" vai para o site
4. **03 — O que fazemos** — 6 cards (Sites e landing pages, Sistemas e painéis de gestão, IA, Integrações e APIs, MVP, Evolução e hospedagem)
5. **04 — Como trabalhamos** — fluxo em 6 etapas
6. **05 — Diferenciais** — 4 itens
7. **06 — Filosofia** — "Código é meio. Solução é o objetivo."
8. **07 — Para quem criamos** — chips em linha
9. **08 — FAQ** — acordeão com 6 perguntas
10. **Contato/CTA** — botões WhatsApp + canais (Instagram, WhatsApp, e-mail clicáveis)
11. **Rodapé** — Dot tchau

### Modal do case Formiga Lúdica
Janela estilo terminal com logo, 3 screenshots (catálogo desktop, Formiguinha IA, painel de gestão), "O desafio", "O que foi criado", "O resultado" e CTA para o site. Foco no produto, sem jargão técnico. Fecha por [x] ou clique fora.

## Decisões de design
- Portfólio sobe para a posição 02 — cliente vê trabalho real primeiro
- Seções "grade" alternam fundo #0D0D0D / #151515; grades de 6 itens usam 3 colunas fixas (3+3), de 4 itens usam 4 colunas (2×2 no médio, 1 no mobile)
- Tecnologias específicas (Railway, GitHub, Gemini, RAG) citadas apenas dentro do case, nunca como promessa geral
- Placeholders "[PROJETO FUTURO]" existem mas ficam ocultos por padrão (tweak `showFuturos`); com 4+ projetos, evoluir para carrossel horizontal

## Tweaks (configuráveis sem mexer no código)
| Tweak | Valor atual |
|---|---|
| `showFuturos` | false |
| `projetoFormigaUrl` | https://formigaludica.up.railway.app/ |
| `instagramLink` | https://www.instagram.com/lausilps/ (texto fixo: "@lausilps · embaixadora CoreDot") |
| `whatsapp` | (37) 9 9913-9354 |
| `whatsappLink` | https://wa.me/5537999139354?text=Olá!%20Quero%20iniciar%20um%20projeto%20com%20a%20CoreDot |
| `email` | coredotcontact@gmail.com |

## Como atualizar
- **Textos/cores pontuais**: editar direto no editor visual ou pedir no chat
- **Screenshots**: arrastar a nova imagem por cima do slot na página fonte
- **Novo projeto no portfólio**: pedir no chat — o card segue o padrão do da Formiga Lúdica
- **Gerar novo HTML final**: pedir "gerar o HTML" — os screenshots são embutidos automaticamente na exportação

## Pendências / próximos passos
- Adicionar novos projetos ao portfólio conforme forem concluídos (com 4+, virar carrossel)
- Algumas imagens de apoio ainda têm fundo não transparente — substituir ou remover fundo quando houver versões finais
