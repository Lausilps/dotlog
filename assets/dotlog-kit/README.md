# DotLog UI Kit

Cópia avulsa da logo e dos componentes visuais criados pro DotLog, pra reusar em outro projeto Expo sem depender do resto deste app.

## Logo

- `logo.svg` — fundo preto `#0D0D0D`.
- `logo-transparent.svg` — sem fundo, pra colocar sobre qualquer cor.
- `logo-preview.html` — abre no navegador pra visualizar e exportar PNG (botão direito → salvar imagem).

O texto usa a fonte **Press Start 2P** (Google Fonts) via `@import` no próprio SVG — funciona ao abrir num navegador. Se for importar num programa de design (Figma, Illustrator), pode ser necessário ter a fonte instalada localmente ou converter o texto em contorno/path.

## Componentes

Em `components/ui/`:
- `pixel-icon.tsx` — ícones pixel art (`user`, `lock`, `eye`, `eye-off`), via `react-native-svg`. Fácil adicionar mais: pegue o path em [pixelarticons](https://github.com/halfmage/pixelarticons) (MIT) e adicione no objeto `PATHS`.
- `sparkles.tsx` — fundo de sparkles piscando/deslizando, via `react-native-reanimated`.
- `themed-button.tsx`, `themed-text-input.tsx`, `themed-text.tsx`, `themed-view.tsx` — primitivos de UI (botão com sombra dura, input com ícone, tipografia).
- `dotlog-wordmark.tsx` — o "Dot•Log" renderizado como texto (não é a logo em SVG, é a versão pra usar dentro do app).

`constants/theme.ts` e `hooks/use-theme.ts` — os tokens de cor/tipografia/espaçamento da CoreDot e o hook que os componentes usam. Tudo assume o alias de import `@/*` apontando pra raiz do projeto (padrão do template Expo) — ajuste os imports se o outro projeto não tiver esse alias.

## Dependências necessárias no projeto de destino

```
npx expo install react-native-svg react-native-reanimated react-native-safe-area-context
npx expo install @expo-google-fonts/press-start-2p @expo-google-fonts/vt323 @expo-google-fonts/space-grotesk expo-font
```

E carregar as fontes com `useFonts` (de `expo-font`) antes de renderizar qualquer `ThemedText`/`ThemedButton`/etc — veja `src/app/_layout.tsx` do DotLog como referência.

## Fonte original

Os tokens de cor vêm de `assets/design-system/` (design system oficial da marca CoreDot) — esse kit é a versão já aplicada em componentes React Native prontos pra usar.
