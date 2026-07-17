/* @ds-bundle: {"format":4,"namespace":"CoreDotDesignSystem_317a5b","components":[{"name":"Mascote","sourcePath":"components/brand/Mascote.jsx"},{"name":"Sparkles","sourcePath":"components/brand/Sparkles.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"DialogBox","sourcePath":"components/feedback/DialogBox.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"WindowFrame","sourcePath":"components/surfaces/WindowFrame.jsx"}],"sourceHashes":{"components/brand/Mascote.jsx":"d4dab33e9fbb","components/brand/Sparkles.jsx":"d43168719904","components/core/Badge.jsx":"701975bd7650","components/core/Button.jsx":"aec4449d3bfe","components/core/Checkbox.jsx":"f39d4c6762bc","components/core/Input.jsx":"f79e97e1ea55","components/feedback/DialogBox.jsx":"55ef2b1c05c5","components/feedback/ProgressBar.jsx":"1982ff2f3a2a","components/feedback/Toast.jsx":"b21acc39043e","components/surfaces/Card.jsx":"7e9772c70863","components/surfaces/WindowFrame.jsx":"7c84913600c8","ui_kits/landing/sections.jsx":"7f3e38cf509a","ui_kits/landing/sections2.jsx":"220e842feb9a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CoreDotDesignSystem_317a5b = window.CoreDotDesignSystem_317a5b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Mascote.jsx
try { (() => {
function Mascote({
  src,
  size = 120,
  float = true,
  alt = 'Dot, o mascote da CoreDot',
  style
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    className: "cd-sprite",
    style: {
      width: size,
      height: size,
      objectFit: 'contain',
      animation: float ? 'cd-float 3s var(--ease-soft) infinite' : 'none',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Mascote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Mascote.jsx", error: String((e && e.message) || e) }); }

// components/brand/Sparkles.jsx
try { (() => {
function Sparkles({
  count = 6,
  color = 'var(--amarelo)',
  style
}) {
  const seeds = Array.from({
    length: count
  }, (_, i) => ({
    left: (i * 37 + 11) % 92 + 3,
    top: (i * 53 + 9) % 86 + 5,
    plus: i % 2 === 0,
    size: i % 3 === 0 ? 22 : 15,
    op: .3 + i * 13 % 25 / 100
  }));
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      overflow: 'hidden',
      ...style
    }
  }, seeds.map((s, i) => s.plus ? /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: 'absolute',
      left: s.left + '%',
      top: s.top + '%',
      fontFamily: 'var(--font-terminal)',
      fontSize: s.size,
      color,
      opacity: s.op
    }
  }, "+") : /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: 'absolute',
      left: s.left + '%',
      top: s.top + '%',
      width: 7,
      height: 7,
      background: color,
      opacity: s.op
    }
  })));
}
Object.assign(__ds_scope, { Sparkles });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Sparkles.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  color = 'amarelo',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `cd-badge cd-badge--${color}`,
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    className: `cd-btn cd-btn--${variant} cd-btn--${size}`,
    disabled: disabled,
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "cd-check",
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "cd-check-on"
  }, "[\u2713]"), /*#__PURE__*/React.createElement("span", {
    className: "cd-check-off"
  }, "[\xA0]"), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  style,
  ...rest
}) {
  const field = /*#__PURE__*/React.createElement("input", _extends({
    className: "cd-input"
  }, rest));
  if (!label) return /*#__PURE__*/React.createElement("div", {
    style: style
  }, field);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), field);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/feedback/DialogBox.jsx
try { (() => {
function DialogBox({
  avatar,
  arrow = true,
  cursor = false,
  prompt = true,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 14,
      ...style
    }
  }, avatar && /*#__PURE__*/React.createElement("img", {
    src: avatar,
    alt: "",
    className: "cd-sprite",
    style: {
      width: 90,
      objectFit: 'contain',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "cd-dialog",
    style: {
      marginTop: avatar ? 12 : 0,
      flex: 1
    }
  }, arrow && avatar && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "cd-dialog-arrow"
  }), prompt && /*#__PURE__*/React.createElement(React.Fragment, null, "> "), children, cursor && /*#__PURE__*/React.createElement("span", {
    className: "cd-cursor",
    style: {
      marginLeft: 4
    }
  })));
}
Object.assign(__ds_scope, { DialogBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/DialogBox.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function ProgressBar({
  value = 0,
  segments = 10,
  label,
  showValue = true,
  style
}) {
  const on = Math.round(value / 100 * segments);
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 10
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "cd-progress"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cd-progress-track"
  }, Array.from({
    length: segments
  }, (_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: 'cd-progress-seg' + (i < on ? ' cd-progress-seg--on' : '')
  }))), showValue && /*#__PURE__*/React.createElement("div", {
    className: "cd-progress-label"
  }, Math.round(value), "%")));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  icon,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "cd-toast",
    style: style
  }, icon && /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: "",
    className: "cd-sprite",
    style: {
      width: 28,
      height: 28,
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  hover = true,
  accent = false,
  shadow = false,
  children,
  style,
  ...rest
}) {
  const cls = 'cd-card' + (hover ? ' cd-card--hover' : '') + (accent ? ' cd-card--accent' : '') + (shadow ? ' cd-card--shadow' : '');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/WindowFrame.jsx
try { (() => {
function WindowFrame({
  title,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "cd-window",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "cd-window-bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cd-window-dot",
    style: {
      background: 'var(--vermelho)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "cd-window-dot",
    style: {
      background: 'var(--amarelo)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "cd-window-dot",
    style: {
      background: 'var(--verde)'
    }
  }), title && /*#__PURE__*/React.createElement("span", {
    className: "cd-window-title"
  }, title)), /*#__PURE__*/React.createElement("div", {
    className: "cd-window-body"
  }, children));
}
Object.assign(__ds_scope, { WindowFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/WindowFrame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/sections.jsx
try { (() => {
const DS = window.CoreDotDesignSystem_317a5b;
const {
  Button,
  Badge,
  Card,
  WindowFrame,
  DialogBox,
  Toast,
  Checkbox
} = DS;
const L = '../../assets/landing/';
const Marker = ({
  children
}) => /*#__PURE__*/React.createElement("p", {
  className: "cd-marker"
}, children);
const H2 = ({
  children,
  style
}) => /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: 'var(--font-pixel)',
    fontSize: 'var(--text-h2)',
    lineHeight: 1.6,
    margin: '0 0 22px',
    textWrap: 'balance',
    color: 'var(--branco-quente)',
    ...style
  }
}, children);
const Dots = ({
  s = 12
}) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
  style: {
    width: s,
    height: s,
    borderRadius: '50%',
    background: '#ff5f56'
  }
}), /*#__PURE__*/React.createElement("span", {
  style: {
    width: s,
    height: s,
    borderRadius: '50%',
    background: '#ffbd2e'
  }
}), /*#__PURE__*/React.createElement("span", {
  style: {
    width: s,
    height: s,
    borderRadius: '50%',
    background: '#27c93f'
  }
}));
function Shot({
  title,
  ratio,
  src,
  alt
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--borda)',
      background: 'var(--preto-0)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '10px 14px',
      borderBottom: '1px solid var(--borda)'
    }
  }, /*#__PURE__*/React.createElement(Dots, null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-terminal)',
      fontSize: 17,
      color: 'var(--cinza)',
      marginLeft: 8
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--preto-2)',
      aspectRatio: ratio
    }
  }, src && /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt || title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })));
}
function Nav() {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(13,13,13,.94)',
      backdropFilter: 'blur(6px)',
      borderBottom: '1px solid var(--borda)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '14px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#inicio",
    "aria-label": "CoreDot \u2014 in\xEDcio",
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: L + 'logo-nav.png',
    alt: "CoreDot",
    className: "cd-sprite",
    style: {
      height: 36
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 26,
      fontFamily: 'var(--font-terminal)',
      fontSize: 20
    }
  }, [['#inicio', 'Início'], ['#sobre', 'Sobre'], ['#servicos', 'Serviços'], ['#portfolio', 'Portfólio'], ['#contato', 'Contato']].map(([h, l]) => /*#__PURE__*/React.createElement("a", {
    key: h,
    href: h,
    style: {
      color: 'var(--branco-quente)'
    }
  }, l)), /*#__PURE__*/React.createElement("a", {
    href: "#contato",
    className: "cd-btn cd-btn--primary",
    style: {
      fontSize: 10,
      padding: '12px 16px'
    }
  }, "Iniciar conversa"))));
}
function Hero() {
  const BOOT = ['> inicializando CoreDot...', '> ideias carregadas', '> criatividade ativa', '> pronto para construir'];
  const [typed, setTyped] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setTyped(n => {
      if (n >= BOOT.length) {
        clearInterval(t);
        return n;
      }
      return n + 1;
    }), 700);
    return () => clearInterval(t);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    id: "inicio",
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '1px solid var(--borda)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--glow-radial)',
      animation: 'glowpulse 6s ease-in-out infinite',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 80,
      left: '6%',
      color: 'var(--amarelo)',
      fontFamily: 'var(--font-terminal)',
      fontSize: 22,
      opacity: .5
    }
  }, "+"), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 220,
      left: '12%',
      width: 6,
      height: 6,
      background: 'var(--amarelo)',
      opacity: .35
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      bottom: 120,
      left: '8%',
      color: 'var(--amarelo-claro)',
      fontFamily: 'var(--font-terminal)',
      fontSize: 16,
      opacity: .4
    }
  }, "+"), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 120,
      right: '8%',
      width: 8,
      height: 8,
      background: 'var(--amarelo)',
      opacity: .25
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1180,
      margin: '0 auto',
      padding: '84px 24px 96px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,.95fr)',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-terminal)',
      fontSize: 22,
      color: 'var(--amarelo)',
      margin: '0 0 18px'
    }
  }, "> Bem-vindo \xE0 CoreDot._"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: 'var(--text-hero)',
      lineHeight: 1.5,
      margin: '0 0 24px',
      color: 'var(--branco-quente)',
      textWrap: 'balance'
    }
  }, "Do n\xFAcleo da ideia ao ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--amarelo)'
    }
  }, "produto final"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.7,
      color: 'var(--cinza)',
      margin: '0 0 36px',
      maxWidth: '52ch',
      textWrap: 'pretty'
    }
  }, "Criamos solu\xE7\xF5es digitais personalizadas, constru\xEDdas para resolver necessidades reais, com identidade e organiza\xE7\xE3o."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#portfolio",
    className: "cd-btn cd-btn--primary cd-btn--md"
  }, "Ver projetos"), /*#__PURE__*/React.createElement("a", {
    href: "#contato",
    className: "cd-btn cd-btn--secondary cd-btn--md"
  }, "Falar com a CoreDot"))), /*#__PURE__*/React.createElement(WindowFrame, {
    title: "coredot \u2014 boot.sh"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 150
    }
  }, BOOT.slice(0, typed).map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      color: 'var(--amarelo-claro)'
    }
  }, l)), typed >= BOOT.length && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--verde)'
    }
  }, "> _", /*#__PURE__*/React.createElement("span", {
    className: "cd-cursor",
    style: {
      marginLeft: 2
    }
  }))))));
}
function Sobre() {
  return /*#__PURE__*/React.createElement("section", {
    id: "sobre",
    style: {
      borderBottom: '1px solid var(--borda)',
      background: 'var(--preto-0)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cd-2col",
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '90px 24px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Marker, null, "// 01 \u2014 SOBRE"), /*#__PURE__*/React.createElement(H2, null, "Tecnologia com identidade."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.75,
      color: 'var(--cinza)',
      margin: '0 0 16px',
      textWrap: 'pretty'
    }
  }, "A CoreDot nasce para criar solu\xE7\xF5es digitais personalizadas \u2014 sem encaixar todos os clientes no mesmo molde."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.75,
      color: 'var(--cinza)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, "Trabalhamos com comunica\xE7\xE3o pr\xF3xima, evolu\xE7\xE3o por etapas e cuidado com a experi\xEAncia e a identidade visual de cada projeto.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: L + 'dot-banner-oi.png',
    alt: "Dot se apresentando: Oi! Eu sou o Dot.",
    className: "cd-sprite",
    style: {
      width: 'min(420px,100%)',
      border: '1px solid var(--borda)',
      alignSelf: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      gap: 12
    }
  }, ['atenção ao contexto', 'orientado à necessidade', 'comunicação próxima', 'evolução por etapas'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      border: '1px solid var(--borda)',
      background: 'var(--preto-1)',
      padding: '16px 18px',
      fontFamily: 'var(--font-terminal)',
      fontSize: 19,
      color: 'var(--branco-quente)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--verde)'
    }
  }, "[\u2713]"), " ", t))))));
}
function Portfolio({
  onOpenCase
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "portfolio",
    style: {
      borderBottom: '1px solid var(--borda)',
      background: 'var(--preto-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '90px 24px'
    }
  }, /*#__PURE__*/React.createElement(Marker, null, "// 02 \u2014 PORTF\xD3LIO"), /*#__PURE__*/React.createElement(H2, {
    style: {
      marginBottom: 46
    }
  }, "Projetos que j\xE1 sa\xEDram do n\xFAcleo."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(320px,620px))',
      gap: 22,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("article", {
    style: {
      border: '1px solid var(--borda)',
      background: 'var(--preto-1)',
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '10px 14px',
      borderBottom: '1px solid var(--borda)'
    }
  }, /*#__PURE__*/React.createElement(Dots, null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-terminal)',
      fontSize: 17,
      color: 'var(--cinza)',
      marginLeft: 8
    }
  }, "formiga-ludica \u2014 home")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--preto-2)',
      aspectRatio: '16/10'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: L + 'screenshot-catalogo.webp',
    alt: "Cat\xE1logo Formiga L\xFAdica",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, null, "Sistema web"), /*#__PURE__*/React.createElement(Badge, null, "Cat\xE1logo"), /*#__PURE__*/React.createElement(Badge, null, "IA")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: 14,
      lineHeight: 1.7,
      margin: '0 0 14px',
      color: 'var(--branco-quente)'
    }
  }, "Formiga L\xFAdica"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.7,
      color: 'var(--cinza)',
      margin: '0 0 18px',
      textWrap: 'pretty'
    }
  }, "Plataforma inteligente para uma locadora de jogos de tabuleiro, criada para organizar um acervo com centenas de t\xEDtulos e ajudar cada grupo a encontrar o jogo certo."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginBottom: 22
    }
  }, ['PHP', 'MySQL', 'JavaScript', 'Google Gemini'].map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    color: "cinza"
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onOpenCase,
    className: "cd-btn cd-btn--primary",
    style: {
      fontSize: 10,
      padding: '13px 16px'
    }
  }, "Ver projeto"), /*#__PURE__*/React.createElement("a", {
    href: "https://formigaludica.up.railway.app/",
    target: "_blank",
    className: "cd-btn cd-btn--secondary",
    style: {
      fontSize: 10,
      padding: '11px 16px'
    }
  }, "Acessar online")))))));
}
function CaseModal({
  open,
  onClose
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 300,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(13,13,13,.88)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-label": "Case Formiga L\xFAdica",
    style: {
      position: 'relative',
      width: 'min(1040px,100%)',
      maxHeight: '92vh',
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid var(--amarelo)',
      background: 'var(--preto-1)',
      boxShadow: 'var(--shadow-modal)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '12px 16px',
      borderBottom: '1px solid var(--borda)',
      background: 'var(--preto-0)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Dots, null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-terminal)',
      fontSize: 18,
      color: 'var(--cinza)',
      marginLeft: 8
    }
  }, "case \u2014 formiga-ludica"), /*#__PURE__*/React.createElement("a", {
    onClick: onClose,
    style: {
      cursor: 'pointer',
      marginLeft: 'auto',
      fontFamily: 'var(--font-terminal)',
      fontSize: 19,
      color: 'var(--cinza)',
      border: '1px solid var(--borda)',
      padding: '2px 12px'
    }
  }, "[x] fechar")), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'auto',
      padding: '36px clamp(20px,4vw,44px) 44px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 22,
      flexWrap: 'wrap',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: L + 'logo-formiga-ludica.png',
    alt: "Logo Formiga L\xFAdica",
    style: {
      width: 110,
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Marker, null, "// CASE EM DESTAQUE"), /*#__PURE__*/React.createElement(H2, {
    style: {
      fontSize: 'clamp(16px,2.2vw,24px)',
      margin: 0
    }
  }, "Formiga L\xFAdica"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.7,
      color: 'var(--branco-quente)',
      margin: '0 0 36px',
      maxWidth: '64ch',
      textWrap: 'pretty'
    }
  }, "\u201CMais do que um cat\xE1logo, o projeto transformou um grande acervo em uma experi\xEAncia de descoberta, escolha e recomenda\xE7\xE3o.\u201D"), /*#__PURE__*/React.createElement("div", {
    className: "cd-case",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.15fr) minmax(0,.85fr)',
      gap: 32,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Shot, {
    title: "cat\xE1logo (desktop)",
    ratio: "16/9",
    src: L + 'screenshot-catalogo.webp'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Shot, {
    title: "formiguinha-ia",
    ratio: "4/3.4",
    src: L + 'screenshot-formiguinha-ia.webp'
  }), /*#__PURE__*/React.createElement(Shot, {
    title: "painel de gest\xE3o",
    ratio: "4/3.4",
    src: L + 'screenshot-painel.webp'
  })), /*#__PURE__*/React.createElement(DialogBox, {
    avatar: L + 'dot-laptop.png',
    cursor: false
  }, "projeto entregue, em uso e pronto para evoluir.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--borda)',
      background: 'var(--preto-0)',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: 11,
      color: 'var(--amarelo)',
      margin: '0 0 12px',
      lineHeight: 1.7
    }
  }, "O desafio"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.7,
      color: 'var(--cinza)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, "Uma locadora de jogos de tabuleiro com centenas de t\xEDtulos precisava organizar o acervo, ajudar cada grupo a descobrir o jogo certo e agilizar o atendimento.")), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--borda)',
      background: 'var(--preto-0)',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: 11,
      color: 'var(--amarelo)',
      margin: '0 0 12px',
      lineHeight: 1.7
    }
  }, "O que foi criado"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      fontFamily: 'var(--font-terminal)',
      fontSize: 19,
      color: 'var(--branco-quente)'
    }
  }, ['Catálogo completo com busca, filtros e detalhes de cada jogo', 'Formiguinha IA: assistente que recomenda jogos conversando com o cliente', 'Carrinho e pedido finalizado direto pelo WhatsApp', 'Painel de gestão do acervo com relatórios'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--verde)'
    }
  }, "[\u2713]"), " ", t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--borda)',
      background: 'var(--preto-0)',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: 11,
      color: 'var(--amarelo)',
      margin: '0 0 12px',
      lineHeight: 1.7
    }
  }, "O resultado"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.7,
      color: 'var(--cinza)',
      margin: '0 0 14px',
      textWrap: 'pretty'
    }
  }, "Clientes encontram o jogo ideal sozinhos, o pedido chega pronto no WhatsApp e a gest\xE3o do acervo deixou de ser manual."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, ['descoberta assistida por IA', 'pedido via WhatsApp', 'gestão sem planilhas', 'no ar e em uso'].map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    color: "creme",
    style: {
      color: 'var(--amarelo-claro)'
    }
  }, t)))), /*#__PURE__*/React.createElement(Toast, null, "Tudo com a identidade da Formiga L\xFAdica \u2014 um sistema real, em uso, preparado para crescer."), /*#__PURE__*/React.createElement("a", {
    href: "https://formigaludica.up.railway.app/",
    target: "_blank",
    className: "cd-btn cd-btn--primary",
    style: {
      fontSize: 10,
      padding: '13px 16px',
      alignSelf: 'flex-start'
    }
  }, "Acessar o projeto"))))));
}
Object.assign(window, {
  Nav,
  Hero,
  Sobre,
  Portfolio,
  CaseModal,
  Marker,
  H2,
  Dots,
  Shot,
  LANDING_ASSETS: L
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/sections2.jsx
try { (() => {
const {
  Marker,
  H2,
  Dots,
  LANDING_ASSETS: L2
} = window;
function Servicos() {
  const items = [['</>', 'Sites e landing pages', 'Interfaces modernas, responsivas e alinhadas à identidade da marca.'], ['{ sys }', 'Sistemas e painéis de gestão', 'Organização de rotinas, cadastros, processos, controle e relatórios.'], ['[ IA ]', 'Inteligência artificial', 'Assistentes que conhecem seu negócio, busca inteligente e automações com IA.'], ['<=>', 'Integrações e APIs', 'Conexão com o que você já usa: WhatsApp, pagamentos, planilhas e serviços externos.'], ['[ mvp ]', 'MVP', 'Uma primeira versão enxuta e funcional para validar a ideia rápido, antes de investir no produto completo.'], ['v2.0 ++', 'Evolução e hospedagem', 'Projeto no ar com endereço próprio, manutenção, melhorias e preparação para crescer.']];
  return /*#__PURE__*/React.createElement("section", {
    id: "servicos",
    style: {
      borderBottom: '1px solid var(--borda)',
      background: 'var(--preto-0)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '90px 24px'
    }
  }, /*#__PURE__*/React.createElement(Marker, null, "// 03 \u2014 O QUE FAZEMOS"), /*#__PURE__*/React.createElement(H2, {
    style: {
      marginBottom: 20
    }
  }, "Solu\xE7\xF5es que saem do n\xFAcleo."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.75,
      color: 'var(--cinza)',
      margin: '0 0 46px',
      maxWidth: '60ch',
      textWrap: 'pretty'
    }
  }, "A tecnologia se adapta ao projeto \u2014 n\xE3o o contr\xE1rio."), /*#__PURE__*/React.createElement("div", {
    className: "cd-grid3",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 20
    }
  }, items.map(([ic, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "cd-card cd-card--hover cd-card--accent"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-terminal)',
      fontSize: 26,
      color: 'var(--amarelo)',
      marginBottom: 14
    }
  }, ic), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: 12,
      lineHeight: 1.7,
      margin: '0 0 12px',
      color: 'var(--branco-quente)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.7,
      color: 'var(--cinza)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, d))))));
}
function Processo() {
  const etapas = [['01', 'Entendimento', 'Conhecemos o problema, a rotina e o objetivo.'], ['02', 'Organização', 'Estruturamos funcionalidades, prioridades e fluxo.'], ['03', 'Identidade', 'Definimos como a solução deve parecer e se comunicar.'], ['04', 'Desenvolvimento', 'Transformamos o planejamento em produto funcional.'], ['05', 'Testes', 'Validamos uso, comportamento e pontos de melhoria.'], ['06', 'Entrega e evolução', 'Publicamos, documentamos e preparamos os próximos passos.']];
  return /*#__PURE__*/React.createElement("section", {
    id: "processo",
    style: {
      borderBottom: '1px solid var(--borda)',
      background: 'var(--preto-1)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '90px 24px'
    }
  }, /*#__PURE__*/React.createElement(Marker, null, "// 04 \u2014 COMO TRABALHAMOS"), /*#__PURE__*/React.createElement(H2, {
    style: {
      marginBottom: 46
    }
  }, "Um fluxo, seis etapas."), /*#__PURE__*/React.createElement("div", {
    className: "cd-grid3",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 20
    }
  }, etapas.map(([n, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      border: '1px solid var(--borda)',
      background: 'var(--preto-0)',
      padding: 24,
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: 14,
      color: 'var(--preto-0)',
      background: 'var(--amarelo)',
      padding: '10px 12px',
      flex: 'none'
    }
  }, n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: 11,
      lineHeight: 1.7,
      margin: '0 0 8px',
      color: 'var(--branco-quente)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.65,
      color: 'var(--cinza)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: L2 + 'dot-etapas.png',
    alt: "Dot acompanhando as etapas: acenando, analisando, digitando e apontando",
    className: "cd-sprite",
    style: {
      maxWidth: 'min(560px,100%)',
      border: '1px solid var(--borda)'
    }
  }))));
}
function Diferenciais() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: '1px solid var(--borda)',
      background: 'var(--preto-0)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '90px 24px'
    }
  }, /*#__PURE__*/React.createElement(Marker, null, "// 05 \u2014 DIFERENCIAIS"), /*#__PURE__*/React.createElement(H2, {
    style: {
      marginBottom: 40
    }
  }, "Por que CoreDot?"), /*#__PURE__*/React.createElement("div", {
    className: "cd-grid4",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
      gap: 14
    }
  }, ['Soluções sob medida', 'Identidade visual integrada', 'Desenvolvimento próximo do cliente', 'Projeto preparado para evoluir'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      border: '1px solid var(--borda)',
      background: 'var(--preto-1)',
      padding: '18px 20px',
      fontFamily: 'var(--font-terminal)',
      fontSize: 20,
      color: 'var(--branco-quente)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--amarelo)'
    }
  }, ">"), " ", t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: L2 + 'dot-solucao-bar.png',
    alt: "Dot ao lado de uma barra de di\xE1logo: Dot encontrou uma solu\xE7\xE3o!",
    className: "cd-sprite",
    style: {
      maxWidth: 'min(480px,100%)'
    }
  }))));
}
function Filosofia() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: '1px solid var(--borda)',
      background: 'var(--preto-1)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse 50% 60% at 30% 50%,rgba(255,212,0,.06),transparent 70%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "cd-2col",
    style: {
      position: 'relative',
      maxWidth: 1180,
      margin: '0 auto',
      padding: '90px 24px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Marker, null, "// 06 \u2014 FILOSOFIA"), /*#__PURE__*/React.createElement(H2, null, "C\xF3digo \xE9 meio. Solu\xE7\xE3o \xE9 o objetivo."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.75,
      color: 'var(--cinza)',
      margin: 0,
      textWrap: 'pretty'
    }
  }, "A tecnologia escolhida depende da necessidade do projeto. O foco da CoreDot \xE9 criar algo \xFAtil, compreens\xEDvel, sustent\xE1vel e preparado para continuar evoluindo.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      minHeight: 280
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: L2 + 'notas.png',
    alt: "Anota\xE7\xF5es pixel art de planejamento",
    className: "cd-sprite",
    style: {
      width: 'min(46%,240px)',
      transform: 'rotate(-4deg)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: L2 + 'checklist.png',
    alt: "Checklist pixel art em prancheta",
    className: "cd-sprite",
    style: {
      width: 'min(46%,250px)',
      transform: 'rotate(3deg)',
      marginLeft: -30
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: L2 + 'dot-code.png',
    alt: "Dot programando \u2014 c\xF3digo na m\xE3o",
    className: "cd-sprite",
    style: {
      position: 'absolute',
      bottom: -24,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 150,
      filter: 'drop-shadow(0 0 14px rgba(255,212,0,.3))'
    }
  }))));
}
function ParaQuem() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: '1px solid var(--borda)',
      background: 'var(--preto-0)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '90px 24px'
    }
  }, /*#__PURE__*/React.createElement(Marker, null, "// 07 \u2014 PARA QUEM CRIAMOS"), /*#__PURE__*/React.createElement(H2, {
    style: {
      marginBottom: 40
    }
  }, "Ideias de todos os tamanhos."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12
    }
  }, ['Pequenos negócios', 'Profissionais autônomos', 'Projetos autorais', 'Empresas que precisam organizar processos', 'Negócios que querem presença digital própria', 'Quem quer transformar uma ideia em sistema'].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "cd-chip"
  }, "+ ", t)))));
}
function Faq() {
  const FAQS = [['A CoreDot trabalha apenas com sites?', 'Não. A empresa desenvolve sites, landing pages, sistemas web, painéis administrativos, integrações e funcionalidades com inteligência artificial.'], ['O projeto é feito a partir de um modelo pronto?', 'A estrutura pode aproveitar boas práticas e componentes, mas o visual, os fluxos e as funcionalidades são adaptados às necessidades de cada projeto.'], ['É possível continuar evoluindo o sistema depois da entrega?', 'Sim. Os projetos podem receber manutenção, melhorias e novas etapas conforme a necessidade.'], ['A CoreDot trabalha com projetos pequenos?', 'Sim. O escopo é avaliado de acordo com o problema e o objetivo, não apenas pelo tamanho da empresa.'], ['Como começa um projeto?', 'Com uma conversa inicial para entender contexto, prioridades, funcionalidades e expectativas.'], ['O cliente acompanha o desenvolvimento?', 'Sim. O trabalho acontece com alinhamentos e validações durante as etapas.']];
  const [open, setOpen] = React.useState(-1);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: '1px solid var(--borda)',
      background: 'var(--preto-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 860,
      margin: '0 auto',
      padding: '90px 24px'
    }
  }, /*#__PURE__*/React.createElement(Marker, null, "// 08 \u2014 FAQ"), /*#__PURE__*/React.createElement(H2, {
    style: {
      marginBottom: 40
    }
  }, "F.A.Q"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, FAQS.map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      border: '1px solid var(--borda)',
      background: 'var(--preto-0)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(open === i ? -1 : i),
    "aria-expanded": open === i,
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      background: 'none',
      border: 'none',
      color: 'var(--branco-quente)',
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      fontWeight: 500,
      textAlign: 'left',
      padding: '18px 22px',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", null, q), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-terminal)',
      fontSize: 24,
      color: 'var(--amarelo)',
      flex: 'none'
    }
  }, open === i ? '[-]' : '[+]')), open === i && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      padding: '0 22px 20px',
      fontSize: 15,
      lineHeight: 1.7,
      color: 'var(--cinza)',
      textWrap: 'pretty'
    }
  }, a))))));
}
function Contato() {
  const wa = 'https://wa.me/5537999139354?text=Olá!%20Quero%20iniciar%20um%20projeto%20com%20a%20CoreDot';
  return /*#__PURE__*/React.createElement("section", {
    id: "contato",
    style: {
      borderBottom: '1px solid var(--borda)',
      background: 'var(--preto-0)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse 55% 60% at 50% 45%,rgba(255,212,0,.1),transparent 70%)',
      animation: 'glowpulse 6s ease-in-out infinite',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 70,
      left: '14%',
      color: 'var(--amarelo)',
      fontFamily: 'var(--font-terminal)',
      fontSize: 20,
      opacity: .45
    }
  }, "+"), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      bottom: 90,
      right: '12%',
      width: 7,
      height: 7,
      background: 'var(--amarelo)',
      opacity: .3
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 140,
      right: '20%',
      color: 'var(--amarelo-claro)',
      fontFamily: 'var(--font-terminal)',
      fontSize: 15,
      opacity: .4
    }
  }, "+"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 820,
      margin: '0 auto',
      padding: '110px 24px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: L2 + 'dot-sucesso.png',
    alt: "Dot comemorando com confetes",
    className: "cd-sprite",
    style: {
      width: 150,
      marginBottom: 22,
      animation: 'floaty 4s ease-in-out infinite'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: 'clamp(18px,2.8vw,28px)',
      lineHeight: 1.7,
      margin: '0 0 22px',
      color: 'var(--branco-quente)',
      textWrap: 'balance'
    }
  }, "Tem uma ideia esperando para sair do n\xFAcleo?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.7,
      color: 'var(--cinza)',
      margin: '0 auto 38px',
      maxWidth: '52ch',
      textWrap: 'pretty'
    }
  }, "Conte o que voc\xEA precisa construir. A CoreDot ajuda a organizar o caminho entre a ideia e o produto final."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 18,
      justifyContent: 'center',
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: wa,
    target: "_blank",
    className: "cd-btn cd-btn--primary cd-btn--md"
  }, "Falar sobre meu projeto"), /*#__PURE__*/React.createElement("a", {
    href: "#portfolio",
    className: "cd-btn cd-btn--secondary cd-btn--md"
  }, "Conhecer o portf\xF3lio")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 420,
      margin: '0 auto',
      border: '1px solid var(--borda)',
      background: 'var(--preto-1)',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 12px',
      borderBottom: '1px solid var(--borda)'
    }
  }, /*#__PURE__*/React.createElement(Dots, {
    s: 10
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-terminal)',
      fontSize: 16,
      color: 'var(--cinza)',
      marginLeft: 6
    }
  }, "deploy.log")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px',
      fontFamily: 'var(--font-terminal)',
      fontSize: 19,
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--amarelo-claro)'
    }
  }, "> nova ideia detectada..."), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--verde)'
    }
  }, "> 100% pronto para come\xE7ar.", /*#__PURE__*/React.createElement("span", {
    className: "cd-cursor",
    style: {
      marginLeft: 4,
      width: 9,
      height: 15
    }
  }))))));
}
function Footer() {
  const wa = 'https://wa.me/5537999139354?text=Olá!%20Quero%20iniciar%20um%20projeto%20com%20a%20CoreDot';
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--preto-0)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '56px 24px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 40,
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: L2 + 'logo-footer.png',
    alt: "CoreDot",
    className: "cd-sprite",
    style: {
      width: 200,
      alignSelf: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-terminal)',
      fontSize: 19,
      color: 'var(--cinza)',
      margin: 0
    }
  }, "Do n\xFAcleo da ideia ao produto final."), /*#__PURE__*/React.createElement("img", {
    src: L2 + 'dot-tchau.png',
    alt: "Dot acenando tchau",
    className: "cd-sprite",
    style: {
      width: 96
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      fontFamily: 'var(--font-terminal)',
      fontSize: 19
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: 9,
      color: 'var(--amarelo)',
      marginBottom: 6
    }
  }, "MAPA"), [['#inicio', 'Início'], ['#sobre', 'Sobre'], ['#servicos', 'Serviços'], ['#portfolio', 'Portfólio'], ['#contato', 'Contato']].map(([h, l]) => /*#__PURE__*/React.createElement("a", {
    key: h,
    href: h,
    style: {
      color: 'var(--branco-quente)'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      fontFamily: 'var(--font-terminal)',
      fontSize: 19
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-pixel)',
      fontSize: 9,
      color: 'var(--amarelo)',
      marginBottom: 6
    }
  }, "CANAIS"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cinza)'
    }
  }, "Instagram: ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/lausilps/",
    target: "_blank",
    style: {
      color: 'var(--branco-quente)'
    }
  }, "@lausilps \xB7 embaixadora CoreDot")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cinza)'
    }
  }, "WhatsApp: ", /*#__PURE__*/React.createElement("a", {
    href: wa,
    target: "_blank",
    style: {
      color: 'var(--branco-quente)'
    }
  }, "(37) 9 9913-9354")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cinza)'
    }
  }, "E-mail: ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:coredotcontact@gmail.com",
    style: {
      color: 'var(--branco-quente)'
    }
  }, "coredotcontact@gmail.com")))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--borda)',
      marginTop: 44,
      paddingTop: 22,
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      justifyContent: 'space-between',
      fontFamily: 'var(--font-terminal)',
      fontSize: 17,
      color: 'var(--cinza)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 CoreDot. Todos os direitos reservados."), /*#__PURE__*/React.createElement("span", null, "> compilado com personalidade_", /*#__PURE__*/React.createElement("span", {
    className: "cd-cursor",
    style: {
      background: 'var(--cinza)',
      width: 8,
      height: 13
    }
  })))));
}
function LandingPage() {
  const [caseOpen, setCaseOpen] = React.useState(false);
  React.useEffect(() => {
    document.body.style.overflow = caseOpen ? 'hidden' : '';
  }, [caseOpen]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Sobre, null), /*#__PURE__*/React.createElement(Portfolio, {
    onOpenCase: () => setCaseOpen(true)
  }), /*#__PURE__*/React.createElement(CaseModal, {
    open: caseOpen,
    onClose: () => setCaseOpen(false)
  }), /*#__PURE__*/React.createElement(Servicos, null), /*#__PURE__*/React.createElement(Processo, null), /*#__PURE__*/React.createElement(Diferenciais, null), /*#__PURE__*/React.createElement(Filosofia, null), /*#__PURE__*/React.createElement(ParaQuem, null), /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement(Contato, null), /*#__PURE__*/React.createElement(Footer, null));
}
Object.assign(window, {
  LandingPage,
  Servicos,
  Processo,
  Diferenciais,
  Filosofia,
  ParaQuem,
  Faq,
  Contato,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/sections2.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Mascote = __ds_scope.Mascote;

__ds_ns.Sparkles = __ds_scope.Sparkles;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.DialogBox = __ds_scope.DialogBox;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.WindowFrame = __ds_scope.WindowFrame;

})();
