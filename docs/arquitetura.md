# Arquitetura

Stack: Expo (React Native + Web) com Expo Router, TypeScript.

Um único código-fonte gera o app iOS, Android e a versão web.

## Estrutura de pastas

```
src/
├── app/            # Telas e rotas (roteamento por arquivo do Expo Router)
├── components/
│   ├── ui/         # Componentes base do design system (Button, ThemedText...)
│   └── layout/     # Navegação, headers, containers estruturais
├── constants/
│   └── theme.ts    # Cores, fontes, espaçamentos da identidade CoreDot
├── hooks/          # Lógica de estado reutilizável (ex: use-theme)
├── context/        # Estado global (auth, usuário, projeto ativo)
├── services/       # Integrações externas (API, storage, upload de mídia)
└── utils/          # Funções auxiliares puras
```

## Decisões

- **TypeScript** desde o início (padrão atual do template oficial do Expo).
- Cores/fontes/espaçamentos centralizados em `constants/theme.ts` — nenhum valor de estilo "chumbado" em componentes.
- `context/`, `services/` e `utils/` começam vazios e são preenchidos conforme as funcionalidades do roadmap são implementadas — evitar criar abstrações antes de existir uso real.
