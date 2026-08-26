/* @ds-bundle: {"format":4,"namespace":"SushenDevDesignSystem_801d0d","components":[{"name":"MetaList","sourcePath":"components/content/MetaList.jsx"},{"name":"NoteCard","sourcePath":"components/content/NoteCard.jsx"},{"name":"PostRow","sourcePath":"components/content/PostRow.jsx"},{"name":"SectionHeader","sourcePath":"components/content/SectionHeader.jsx"},{"name":"StatusRow","sourcePath":"components/content/StatusRow.jsx"},{"name":"Typewriter","sourcePath":"components/content/Typewriter.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Kbd","sourcePath":"components/core/Kbd.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Wordmark","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"TextLink","sourcePath":"components/core/TextLink.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"ThemeToggle","sourcePath":"components/forms/ThemeToggle.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"GlassPanel","sourcePath":"components/surfaces/GlassPanel.jsx"},{"name":"GrainField","sourcePath":"components/surfaces/GrainField.jsx"}],"sourceHashes":{"components/content/MetaList.jsx":"18c21fd5edbb","components/content/NoteCard.jsx":"1cc1e50d6730","components/content/PostRow.jsx":"b0b5ec7fbae0","components/content/SectionHeader.jsx":"a9207b678dcb","components/content/StatusRow.jsx":"9448e5a96ae4","components/content/Typewriter.jsx":"9086ed1c8f31","components/core/Badge.jsx":"c5a9e2a8a45c","components/core/Button.jsx":"559ea62a7d74","components/core/Divider.jsx":"1e31d563dc2d","components/core/Icon.jsx":"f8b1045d5029","components/core/IconButton.jsx":"2a8ad3d5eef2","components/core/Kbd.jsx":"5fdfc382391f","components/core/Logo.jsx":"cbd256c1f280","components/core/Tag.jsx":"e66737ca6c12","components/core/TextLink.jsx":"467d8e93cc45","components/forms/Input.jsx":"a27b040b7a01","components/forms/ThemeToggle.jsx":"2cdd7dceb3c8","components/internal/injectCss.js":"3efb5b2901e5","components/surfaces/Card.jsx":"a3f13b52c6a5","components/surfaces/GlassPanel.jsx":"a3bd12c8b9ae","components/surfaces/GrainField.jsx":"08e6c16cb601","ui_kits/website/HomeScreen.jsx":"46c1fc7786fe","ui_kits/website/NotesScreen.jsx":"f2146ecfd4c7","ui_kits/website/PostScreen.jsx":"5ae801353f4f","ui_kits/website/Shell.jsx":"3d24e519a0fe","ui_kits/website/WritingScreen.jsx":"113729baa78c","ui_kits/website/data.js":"d8e1b42df9b7"},"inlinedExternals":[],"unexposedExports":[{"name":"injectCss","sourcePath":"components/internal/injectCss.js"}]} */

(() => {

const __ds_ns = (window.SushenDevDesignSystem_801d0d = window.SushenDevDesignSystem_801d0d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/MetaList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Key/value list with dotted leaders — the typewriter table of contents. */
function MetaList({
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("dl", _extends({
    style: {
      margin: 0,
      display: "grid",
      gap: "var(--space-2)",
      ...style
    }
  }, rest), items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.label,
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-xs)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      whiteSpace: "nowrap"
    }
  }, it.label), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      transform: "translateY(-2px)",
      background: "repeating-linear-gradient(to right,var(--border-hairline) 0 2px,transparent 2px 6px)"
    }
  }), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-sm)",
      color: "var(--text-primary)",
      whiteSpace: "nowrap"
    }
  }, it.value))));
}
Object.assign(__ds_scope, { MetaList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/MetaList.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const HUES = {
  amber: "var(--accent)",
  coral: "var(--accent-2)",
  teal: "var(--accent-3)",
  lilac: "var(--accent-4)",
  lagoon: "var(--accent-5)"
};

/** Numbered section header: "01 / HELLO THERE ————————". */
function SectionHeader({
  index,
  children,
  action,
  hue = "amber",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      marginBottom: "var(--space-5)",
      ...style
    }
  }, rest), index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-xs)",
      color: HUES[hue] || HUES.amber,
      letterSpacing: "var(--track-label)",
      fontWeight: "var(--weight-bold)"
    }
  }, String(index).padStart(2, "0")), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--track-wide)",
      textTransform: "uppercase",
      color: "var(--text-secondary)",
      whiteSpace: "nowrap"
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "repeating-linear-gradient(to right,var(--border-hairline) 0 4px,transparent 4px 8px)"
    }
  }), action);
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  ok: "var(--status-ok)",
  warn: "var(--status-warn)",
  err: "var(--status-err)",
  info: "var(--status-info)",
  neutral: "var(--text-muted)"
};

/** Dot + label status marker: "shipping", "draft", "archived". */
function Badge({
  children,
  tone = "neutral",
  pulse,
  style,
  ...rest
}) {
  const c = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-xs)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-secondary)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: pulse ? "status-dot status-dot--live" : "status-dot",
    style: {
      width: 7,
      height: 7,
      borderRadius: "var(--radius-pill)",
      background: c,
      boxShadow: pulse ? `0 0 0 3px color-mix(in oklab, ${c} 22%, transparent)` : "none",
      flex: "0 0 auto"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/StatusRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** "What I'm doing" line: role/project, org, dates, status. */
function StatusRow({
  title,
  org,
  period,
  tone = "ok",
  status,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: "var(--space-3) 0",
      borderBottom: "1px solid var(--border-hairline)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: "var(--space-4)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--space-2)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-md)",
      color: "var(--text-primary)"
    }
  }, title), org && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, "@ ", org)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, status && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: tone,
    pulse: tone === "ok"
  }, status), period && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)",
      whiteSpace: "nowrap"
    }
  }, period))), children && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-2) 0 0",
      maxWidth: "var(--ui-measure)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-base)",
      lineHeight: "var(--lh-base)",
      color: "var(--text-secondary)",
      textWrap: "pretty"
    }
  }, children));
}
Object.assign(__ds_scope, { StatusRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatusRow.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Horizontal rule. `dashed` gives the typewriter dash rule; `label` centres a small-caps caption. */
function Divider({
  label,
  dashed,
  style,
  ...rest
}) {
  const line = {
    flex: 1,
    height: 1,
    background: dashed ? "repeating-linear-gradient(to right,var(--border-strong) 0 4px,transparent 4px 8px)" : "var(--border-hairline)"
  };
  if (!label) return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    style: {
      ...line,
      width: "100%",
      flex: "none",
      ...style
    }
  }, rest));
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      width: "100%",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: line
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-xs)",
      letterSpacing: "var(--track-wide)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      whiteSpace: "nowrap"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: line
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const BASE = "https://unpkg.com/lucide-static@0.544.0/icons/";

/** Lucide glyph, masked to currentColor so it inherits text colour. */
function Icon({
  name,
  size = 16,
  strokeWidth,
  style,
  className,
  label
}) {
  const url = `url("${BASE}${name}.svg")`;
  return /*#__PURE__*/React.createElement("span", {
    role: label ? "img" : "presentation",
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    className: className,
    style: {
      display: "inline-block",
      width: size,
      height: size,
      flex: "0 0 auto",
      backgroundColor: "currentColor",
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      opacity: strokeWidth && strokeWidth < 2 ? 0.9 : 1,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Kbd.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Keycap for shortcut hints. */
function Kbd({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("kbd", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 24,
      height: 24,
      padding: "0 6px",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      color: "var(--text-secondary)",
      background: "var(--surface-glass)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-xs)",
      boxShadow: "var(--shadow-inset-key)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Kbd });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Kbd.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// The mark is a monoline signature inside a hairline circle, mounted as a CSS
// mask rather than an <img> so it inherits currentColor and re-colours in both
// themes. Its strokes are ~1.4% of its width, so it is a LARGE-FORMAT mark only:
// below ~72px the signature collapses to a smudge. Use Wordmark for headers.
const MARK = "logo.png"; // 1510px, true stroke weight
const MARK_SM = "logo-small.png"; // dilated strokes, for 72-96px mounts
const MIN_SIZE = 72;

/** The sushen.dev mark. Large format only (>= 72px) — see Wordmark for headers. */
function Logo({
  size = 96,
  wordmark,
  color = "currentColor",
  href,
  style,
  ...rest
}) {
  const Tag = href ? "a" : "span";
  const px = Math.max(MIN_SIZE, size);
  const base = typeof window !== "undefined" && window.DS_ASSET_BASE || "../../assets/";
  const url = `url("${base}${px < 112 ? MARK_SM : MARK}")`;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    "aria-label": "sushen.dev",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      textDecoration: "none",
      border: 0,
      color,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    role: "img",
    style: {
      width: px,
      height: px,
      flex: "0 0 auto",
      backgroundColor: "currentColor",
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      WebkitMaskPosition: "center",
      maskPosition: "center"
    }
  }), wordmark && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: px < 96 ? "var(--text-md)" : "var(--text-lg)",
      letterSpacing: "var(--track-tight)",
      color: "var(--text-primary)"
    }
  }, "sushen"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: px < 96 ? "var(--text-sm)" : "var(--text-base)",
      color: "var(--accent)"
    }
  }, ".dev")));
}

/** The small-format lockup: typed name only. Use this in headers and anywhere
    under 72px — the signature mark cannot hold detail at that size. */
function Wordmark({
  size = "var(--text-sm)",
  href,
  onClick,
  style,
  ...rest
}) {
  const Tag = href ? "a" : "span";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    "aria-label": "sushen.dev",
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: 3,
      textDecoration: "none",
      border: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: size,
      letterSpacing: "var(--track-tight)",
      color: "var(--text-primary)"
    }
  }, "sushen"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: size,
      color: "var(--accent)"
    }
  }, ".dev"));
}
Object.assign(__ds_scope, { Logo, Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/internal/injectCss.js
try { (() => {
// Injects a component's pseudo-state CSS once per document.
// Hover/active/focus states can't be expressed as inline styles, and we ship no
// stylesheets, so each component registers its own rules under a ds- prefix.
const done = new Set();
function injectCss(id, css) {
  if (typeof document === "undefined" || done.has(id)) return;
  done.add(id);
  const el = document.createElement("style");
  el.setAttribute("data-ds", id);
  el.textContent = css;
  document.head.appendChild(el);
}
Object.assign(__ds_scope, { injectCss });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/internal/injectCss.js", error: String((e && e.message) || e) }); }

// components/content/Typewriter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss("typewriter", `
@keyframes ds-caret{0%,49%{opacity:1}50%,100%{opacity:0}}
.ds-caret{display:inline-block;width:0.55em;height:1em;transform:translateY(0.13em);
  background:var(--accent);animation:ds-caret var(--caret-blink) steps(1) infinite}
`);

/**
 * Types text out one character at a time, then blinks a caret.
 * Reserves the final size first (a hidden copy) so nothing reflows mid-animation.
 */
function Typewriter({
  text = "",
  speed = 34,
  startDelay = 120,
  caret = true,
  as: Tag = "span",
  style,
  ...rest
}) {
  const [n, setN] = React.useState(0);
  const reduce = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  React.useEffect(() => {
    if (reduce) {
      setN(text.length);
      return;
    }
    setN(0);
    let raf,
      t0 = null;
    const start = setTimeout(() => {
      const step = t => {
        if (t0 === null) t0 = t;
        const i = Math.min(text.length, Math.floor((t - t0) / speed));
        setN(i);
        if (i < text.length) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, startDelay);
    return () => {
      clearTimeout(start);
      cancelAnimationFrame(raf);
    };
  }, [text, speed, startDelay, reduce]);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      position: "relative",
      display: "inline-block",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      visibility: "hidden"
    }
  }, text), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      whiteSpace: "pre-wrap"
    }
  }, text.slice(0, n), caret && n >= text.length && /*#__PURE__*/React.createElement("i", {
    className: "ds-caret"
  })));
}
Object.assign(__ds_scope, { Typewriter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Typewriter.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss("btn", `
.ds-btn{transition:background var(--dur-fast) var(--ease-mech),color var(--dur-fast) var(--ease-mech),border-color var(--dur-fast) var(--ease-mech),transform var(--dur-instant) var(--ease-mech)}
.ds-btn:not(:disabled):active{transform:translateY(1px)}
.ds-btn-primary:not(:disabled):hover{background:var(--accent-hover)}
.ds-btn-primary:not(:disabled):active{background:var(--accent-press)}
.ds-btn-secondary:not(:disabled):hover{border-color:var(--border-strong);background:var(--surface-glass-strong)}
.ds-btn-ghost:not(:disabled):hover{background:var(--surface-glass);color:var(--text-primary)}
.ds-btn-quiet:not(:disabled):hover{color:var(--accent)}
.ds-btn-quiet:not(:disabled):hover .ds-btn-rule{background:var(--accent)}
`);
const SIZES = {
  sm: {
    h: 32,
    px: "var(--space-4)",
    fs: "var(--text-xs)"
  },
  md: {
    h: 40,
    px: "var(--space-5)",
    fs: "var(--text-sm)"
  }
};

/** The system's action primitive. Uppercase, tracked, mechanical press. */
function Button({
  children,
  variant = "secondary",
  size = "md",
  iconLeft,
  iconRight,
  disabled,
  fullWidth,
  as,
  href,
  onClick,
  type = "button",
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const Tag = as || (href ? "a" : "button");
  const quiet = variant === "quiet";
  const skin = {
    primary: {
      background: "var(--accent)",
      color: "var(--accent-contrast)",
      border: "1px solid transparent"
    },
    secondary: {
      background: "var(--surface-glass)",
      color: "var(--text-primary)",
      border: "1px solid var(--border-hairline)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-secondary)",
      border: "1px solid transparent"
    },
    quiet: {
      background: "transparent",
      color: "var(--text-secondary)",
      border: "0",
      padding: 0,
      height: "auto",
      width: "fit-content",
      justifySelf: "start",
      justifyContent: "flex-start"
    }
  }[variant] || {};
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `ds-btn ds-btn-${variant}`,
    href: href,
    type: Tag === "button" ? type : undefined,
    disabled: Tag === "button" ? disabled : undefined,
    onClick: onClick,
    style: {
      display: fullWidth ? "flex" : "inline-flex",
      width: fullWidth ? "100%" : undefined,
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--space-2)",
      height: quiet ? "auto" : s.h,
      padding: quiet ? 0 : `0 ${s.px}`,
      font: "inherit",
      fontFamily: "var(--font-ui)",
      fontSize: s.fs,
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      textDecoration: "none",
      borderRadius: quiet ? 0 : "var(--radius-control)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.42 : 1,
      whiteSpace: "nowrap",
      ...skin,
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, children), quiet && /*#__PURE__*/React.createElement("span", {
    className: "ds-btn-rule",
    style: {
      width: 18,
      height: 1,
      background: "var(--border-strong)",
      transition: "background var(--dur-fast) var(--ease-mech)"
    }
  }), iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: 16
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss("iconbtn", `
.ds-iconbtn{transition:background var(--dur-fast) var(--ease-mech),border-color var(--dur-fast) var(--ease-mech),color var(--dur-fast) var(--ease-mech)}
.ds-iconbtn:not(:disabled):hover{color:var(--text-primary);border-color:var(--border-strong);background:var(--surface-glass-strong)}
.ds-iconbtn:not(:disabled):active{transform:translateY(1px)}
`);

/** Square icon-only control. Always pass a label — it becomes the aria-label. */
function IconButton({
  icon,
  label,
  size = 32,
  bare,
  href,
  onClick,
  disabled,
  style,
  ...rest
}) {
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: "ds-iconbtn",
    "aria-label": label,
    title: label,
    href: href,
    onClick: onClick,
    disabled: Tag === "button" ? disabled : undefined,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      color: "var(--text-secondary)",
      background: bare ? "transparent" : "var(--surface-glass)",
      border: bare ? "1px solid transparent" : "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-control)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.42 : 1,
      padding: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size >= 32 ? 18 : 16
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss("tag", `
.ds-tag-int{transition:border-color var(--dur-fast) var(--ease-mech),color var(--dur-fast) var(--ease-mech)}
.ds-tag-int:hover{color:var(--accent);border-color:var(--accent)}
`);

/** Topic tag. Hairline pill, uppercase, tiny. Never filled except when selected. */
function Tag({
  children,
  selected,
  href,
  onClick,
  style,
  ...rest
}) {
  const interactive = Boolean(href || onClick);
  const Tag_ = href ? "a" : onClick ? "button" : "span";
  return /*#__PURE__*/React.createElement(Tag_, _extends({
    className: interactive ? "ds-tag ds-tag-int" : "ds-tag",
    href: href,
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-1)",
      height: 24,
      padding: "0 var(--space-3)",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-xs)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      textDecoration: "none",
      color: selected ? "var(--accent)" : "var(--text-muted)",
      background: selected ? "var(--surface-selected)" : "transparent",
      border: `1px solid ${selected ? "var(--accent)" : "var(--border-hairline)"}`,
      borderRadius: "var(--radius-pill)",
      cursor: interactive ? "pointer" : "default",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/PostRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss("postrow", `
.ds-postrow{display:grid;grid-template-columns:8ch 1fr auto;gap:var(--space-4);align-items:baseline;
  padding:var(--space-3) 0;border-bottom:1px solid var(--border-hairline);text-decoration:none;color:inherit;
  transition:background var(--dur-fast) var(--ease-mech)}
.ds-postrow:hover{background:var(--surface-glass)}
.ds-postrow:hover .ds-postrow-title{color:var(--accent)}
.ds-postrow:hover .ds-postrow-arrow{opacity:1;transform:translateX(2px)}
.ds-postrow-arrow{opacity:0;transition:opacity var(--dur-fast) var(--ease-mech),transform var(--dur-fast) var(--ease-mech)}
@media (max-width:560px){.ds-postrow{grid-template-columns:1fr auto}.ds-postrow-date{display:none}}
`);

/** One line in the writing index: date, title, kind, tags. */
function PostRow({
  date,
  title,
  href,
  kind,
  tags = [],
  readingTime,
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    className: "ds-postrow",
    href: href,
    onClick: onClick,
    style: style
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ds-postrow-date",
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      whiteSpace: "nowrap"
    }
  }, date), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "var(--space-3)",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-postrow-title",
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-md)",
      letterSpacing: "var(--track-tight)",
      color: "var(--text-primary)",
      transition: "color var(--dur-fast) var(--ease-mech)"
    }
  }, title), tags.slice(0, 3).map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t
  }, t))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-xs)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      whiteSpace: "nowrap"
    }
  }, kind === "note" ? "note" : readingTime, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    className: "ds-postrow-arrow",
    name: "arrow-right",
    size: 15
  })));
}
Object.assign(__ds_scope, { PostRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PostRow.jsx", error: String((e && e.message) || e) }); }

// components/core/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss("textlink", `
.ds-textlink{color:var(--text-link);text-decoration:none;border-bottom:1px dotted color-mix(in oklab,var(--text-link) 60%,transparent);transition:color var(--dur-fast) var(--ease-mech),border-color var(--dur-fast) var(--ease-mech)}
.ds-textlink:hover{color:var(--accent);border-bottom-style:solid;border-bottom-color:var(--accent)}
.ds-textlink:active{color:var(--accent-press)}
`);

/** Inline link: dotted underline that goes solid amber on hover. */
function TextLink({
  children,
  href,
  external,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    className: "ds-textlink",
    href: href,
    target: external ? "_blank" : undefined,
    rel: external ? "noreferrer noopener" : undefined,
    style: {
      display: "inline",
      ...style
    }
  }, rest), children, external && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: 14,
    style: {
      marginLeft: 2,
      verticalAlign: "baseline"
    }
  }));
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss("input", `
.ds-input{transition:border-color var(--dur-fast) var(--ease-mech),background var(--dur-fast) var(--ease-mech)}
.ds-input:hover{border-bottom-color:var(--border-strong)}
.ds-input:focus{outline:none;border-bottom-color:var(--accent);background:var(--surface-glass)}
.ds-input::placeholder{color:var(--text-muted);opacity:1}
`);

/** Underline text field. Mono, no box — a line on paper. */
function Input({
  label,
  hint,
  icon,
  id,
  style,
  wrapStyle,
  ...rest
}) {
  const rid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-2)",
      ...wrapStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-xs)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)"
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    style: {
      color: "var(--text-muted)"
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: rid,
    className: "ds-input",
    style: {
      flex: 1,
      height: "var(--field-height)",
      padding: "0 var(--space-1)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-base)",
      color: "var(--text-primary)",
      background: "transparent",
      border: "0",
      borderBottom: "1px solid var(--border-hairline)",
      borderRadius: 0,
      ...style
    }
  }, rest))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/ThemeToggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss("themetoggle", `
.ds-theme-opt{padding:0 var(--space-3);height:26px;display:inline-flex;align-items:center;
  font-family:var(--font-ui);font-size:var(--text-xs);letter-spacing:var(--track-label);
  text-transform:uppercase;background:transparent;border:0;cursor:pointer;color:var(--text-muted);
  transition:color var(--dur-fast) var(--ease-mech),background var(--dur-fast) var(--ease-mech)}
.ds-theme-opt:hover{color:var(--text-primary)}
.ds-theme-opt[aria-pressed="true"]{color:var(--accent-contrast);background:var(--accent)}
`);

/** Bracketed [ DARK | LIGHT ] switch. Writes data-theme on <html>. */
function ThemeToggle({
  value,
  onChange,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(value || "light");
  const active = value || internal;
  const set = v => {
    setInternal(v);
    if (typeof document !== "undefined") document.documentElement.setAttribute("data-theme", v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-1)",
      color: "var(--text-muted)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-sm)"
    }
  }, "["), ["dark", "light"].map((v, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: v
  }, i === 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-sm)"
    }
  }, "|"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ds-theme-opt",
    "aria-pressed": active === v,
    onClick: () => set(v)
  }, v))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-sm)"
    }
  }, "]"));
}
Object.assign(__ds_scope, { ThemeToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ThemeToggle.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss("card", `
.ds-card{transition:border-color var(--dur-base) var(--ease-mech),transform var(--dur-base) var(--ease-mech),box-shadow var(--dur-base) var(--ease-mech)}
.ds-card-int:hover{border-color:var(--border-strong);transform:translateY(-1px);box-shadow:var(--shadow-pop)}
.ds-card-int:active{transform:translateY(0)}
`);

/** Opaque surface card for lists and grids — solid, unlike GlassPanel. */
function Card({
  children,
  href,
  footer,
  interactive,
  padding = "var(--space-5)",
  style,
  ...rest
}) {
  const Tag = href ? "a" : "div";
  const int = interactive || Boolean(href);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `ds-card ${int ? "ds-card-int" : ""}`,
    href: href,
    style: {
      display: "block",
      textDecoration: "none",
      color: "inherit",
      background: "var(--surface-card)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-card)",
      boxShadow: "var(--shadow-lift)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      padding
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `var(--space-3) ${padding}`,
      borderTop: "1px solid var(--border-hairline)",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-xs)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/GlassPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PAD = {
  none: 0,
  sm: "var(--space-3)",
  md: "var(--space-5)",
  lg: "var(--space-6)"
};

/** Frosted sheet that sits on the sparkle layer. The system's main surface. */
function GlassPanel({
  children,
  padding = "md",
  strong,
  corner = "sm",
  edge = true,
  as: Tag = "div",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      position: "relative",
      padding: PAD[padding] ?? PAD.md,
      background: strong ? "var(--surface-glass-strong)" : "var(--surface-glass)",
      backdropFilter: `blur(${strong ? "var(--glass-blur-strong)" : "var(--glass-blur)"}) saturate(var(--glass-saturate))`,
      WebkitBackdropFilter: `blur(${strong ? "var(--glass-blur-strong)" : "var(--glass-blur)"}) saturate(var(--glass-saturate))`,
      border: "1px solid var(--border-hairline)",
      borderRadius: corner === "none" ? "var(--radius-none)" : "var(--radius-card)",
      boxShadow: edge ? "var(--shadow-glass-edge), var(--shadow-panel)" : "none",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { GlassPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/GlassPanel.jsx", error: String((e && e.message) || e) }); }

// components/content/NoteCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Micro note: a few lines of something learned, with date and topic. */
function NoteCard({
  date,
  children,
  tags = [],
  href,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.GlassPanel, _extends({
    as: href ? "a" : "div",
    href: href,
    padding: "sm",
    style: {
      display: "block",
      textDecoration: "none",
      color: "inherit",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-3)",
      marginBottom: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, date), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: "var(--space-1)"
    }
  }, tags.slice(0, 2).map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-base)",
      lineHeight: "var(--lh-base)",
      color: "var(--text-primary)",
      textWrap: "pretty"
    }
  }, children));
}
Object.assign(__ds_scope, { NoteCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/NoteCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/GrainField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// The backdrop of every sushen.dev page: a static base colour, a slowly drifting
// sparkle layer, an isometric hairline lattice, and a fixed grain overlay.
// Layer order: base colour, slowly ROTATING old-paper glimmer, drifting sparkle,
// fixed grain. Three layers, no lattice — any ruled grid read as a seam.
// All are composited layers — nothing animates layout, paint stays on the GPU.
__ds_scope.injectCss("grainfield", `
@keyframes ds-rotate{from{transform:rotate(0deg) scale(1.6)}to{transform:rotate(360deg) scale(1.6)}}
@keyframes ds-drift{
  0%{transform:translate3d(-3%,-2%,0) scale(1.06)}
  50%{transform:translate3d(3%,2%,0) scale(1.12)}
  100%{transform:translate3d(-3%,-2%,0) scale(1.06)}
}
.ds-field{position:relative;isolation:isolate;overflow:hidden;background:var(--bg-base)}
.ds-field>.ds-l{position:absolute;inset:0;pointer-events:none}
.ds-field-sparkle{
  background-image:var(--texture-sparkle);background-size:var(--sparkle-size);
  background-repeat:no-repeat;filter:blur(var(--sparkle-blur));
  opacity:var(--sparkle-opacity);
  animation:ds-drift var(--dur-drift) var(--ease-linear) infinite;
  will-change:transform}
.ds-field-glimmer{
  background-image:var(--texture-glimmer);background-repeat:no-repeat;background-size:100% 100%;
  filter:blur(var(--glimmer-blur));opacity:var(--glimmer-opacity);
  animation:ds-rotate var(--dur-rotate) var(--ease-linear) infinite;
  transform-origin:50% 50%;will-change:transform}
.ds-field-grain{background-image:var(--texture-grain);mix-blend-mode:var(--grain-blend);opacity:var(--grain-opacity)}
.ds-field-content{position:relative;z-index:1}
@media (prefers-reduced-motion:reduce){.ds-field-sparkle,.ds-field-glimmer{animation:none}}
`);

/** Full-bleed grainy-glass backdrop. Wrap a whole page or a single hero in it. */
function GrainField({
  children,
  sparkle = true,
  grain = true,
  minHeight,
  style,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `ds-field ${className}`,
    "data-ds-field": "",
    style: {
      minHeight,
      ...style
    }
  }, rest), sparkle && /*#__PURE__*/React.createElement("div", {
    className: "ds-l ds-field-glimmer",
    style: {
      overflow: "hidden"
    }
  }), sparkle && /*#__PURE__*/React.createElement("div", {
    className: "ds-l ds-field-sparkle"
  }), grain && /*#__PURE__*/React.createElement("div", {
    className: "ds-l ds-field-grain"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ds-field-content"
  }, children));
}
Object.assign(__ds_scope, { GrainField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/GrainField.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  GlassPanel,
  SectionHeader,
  StatusRow,
  PostRow,
  Typewriter,
  Button,
  TextLink,
  Badge,
  Icon
} = window.SushenDevDesignSystem_801d0d;

// 01 Hello there · 02 On my desk · 03 Field notes — in that order, one column.
function HomeScreen({
  go
}) {
  const S = window.SITE;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--baseline-3)"
    }
  }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SectionHeader, {
    index: 1,
    hue: "amber"
  }, "Hello there"), /*#__PURE__*/React.createElement(GlassPanel, {
    padding: "lg",
    strong: true
  }, /*#__PURE__*/React.createElement(Typewriter, {
    as: "h1",
    text: S.intro,
    speed: 30,
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-3xl)",
      lineHeight: "var(--lh-3xl)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--track-display)",
      color: "var(--text-primary)"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-5) 0 0",
      maxWidth: "var(--prose-measure)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-md)",
      lineHeight: "var(--lh-md)",
      color: "var(--text-secondary)",
      textWrap: "pretty"
    }
  }, S.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      marginTop: "var(--space-6)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: "arrow-right",
    onClick: () => go("writing")
  }, "Read the writing"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: "mail",
    href: "mailto:me@sushen.dev"
  }, "Say hello")))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SectionHeader, {
    index: 2,
    hue: "coral",
    action: /*#__PURE__*/React.createElement(Badge, {
      tone: "ok",
      pulse: true
    }, "currently")
  }, "On my desk"), S.doing.map(d => /*#__PURE__*/React.createElement(StatusRow, {
    key: d.title,
    title: d.title,
    org: d.org,
    period: d.period,
    status: d.status,
    tone: d.tone
  }, d.body))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SectionHeader, {
    index: 3,
    hue: "teal",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "quiet",
      onClick: () => go("writing")
    }, "All notes")
  }, "Field notes"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: "calc(var(--baseline) * 9)",
      overflowY: "auto",
      overscrollBehavior: "contain",
      maskImage: "linear-gradient(180deg,transparent 0,#000 var(--space-2),#000 calc(100% - var(--space-5)),transparent 100%)",
      WebkitMaskImage: "linear-gradient(180deg,transparent 0,#000 var(--space-2),#000 calc(100% - var(--space-5)),transparent 100%)"
    }
  }, S.posts.map(p => /*#__PURE__*/React.createElement(PostRow, {
    key: p.slug,
    date: p.date,
    title: p.title,
    tags: p.tags,
    readingTime: p.readingTime,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("post", p);
    }
  })), S.notes.map((n, i) => /*#__PURE__*/React.createElement(PostRow, {
    key: "n" + i,
    date: n.date,
    title: n.body.split(".")[0] + ".",
    tags: n.tags,
    kind: "note",
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("notes");
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--space-2)",
      marginTop: "var(--space-2)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-2xs)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 1,
      background: "var(--border-hairline)"
    }
  }), "keep scrolling for older notes", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 12
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-5)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-base)",
      color: "var(--text-secondary)"
    }
  }, "Shorter things live in ", /*#__PURE__*/React.createElement(TextLink, {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("notes");
    }
  }, "notes"), " \u2014 four lines each, no intro paragraph.")));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/NotesScreen.jsx
try { (() => {
const {
  SectionHeader,
  NoteCard,
  Input,
  Button
} = window.SushenDevDesignSystem_801d0d;

// Notes stream: two-column glass cards, newest first, filterable.
function NotesScreen({
  go
}) {
  const [q, setQ] = React.useState("");
  const notes = window.SITE.notes.filter(n => (n.body + n.tags.join(" ")).toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    index: 3,
    hue: "lilac",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "quiet",
      onClick: () => go("writing")
    }, "Everything")
  }, "Scraps"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "var(--space-5)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "52ch",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-md)",
      lineHeight: "var(--lh-md)",
      color: "var(--text-secondary)"
    }
  }, "Micro notes: one idea, four lines, no preamble. Mostly things I looked up twice."), /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "filter notes\u2026",
    value: q,
    onChange: e => setQ(e.target.value),
    wrapStyle: {
      width: 230
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4)"
    }
  }, notes.map(n => /*#__PURE__*/React.createElement(NoteCard, {
    key: n.date,
    date: n.date,
    tags: n.tags
  }, n.body))), !notes.length && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, "nothing matches \"", q, "\". ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "_")));
}
Object.assign(window, {
  NotesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/NotesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PostScreen.jsx
try { (() => {
const {
  Button,
  Tag,
  MetaList,
  Divider,
  TextLink,
  GlassPanel,
  Input
} = window.SushenDevDesignSystem_801d0d;

// Long-form reading view: serif body, 66ch measure, sparkle off (see GrainField).
function PostScreen({
  go,
  post
}) {
  const p = post || window.SITE.posts[0];
  return /*#__PURE__*/React.createElement("article", {
    style: {
      display: "grid",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "quiet",
    iconLeft: "arrow-left",
    onClick: () => go("writing")
  }, "Back to writing"), /*#__PURE__*/React.createElement("header", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, p.date), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, p.readingTime)), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      maxWidth: "30ch",
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-2xl)",
      lineHeight: "var(--lh-2xl)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--track-display)"
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)"
    }
  }, p.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    href: "#"
  }, t)))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "var(--prose-measure)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-lg)",
      lineHeight: "var(--lh-lg)",
      color: "var(--text-primary)",
      textWrap: "pretty"
    }
  }, p.lede), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--baseline)",
      maxWidth: "var(--prose-measure)"
    }
  }, window.SITE.body.map((para, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-md)",
      lineHeight: "var(--lh-md)",
      color: "var(--text-secondary)",
      textWrap: "pretty"
    }
  }, para)), /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: "var(--space-2) 0",
      padding: "var(--space-4)",
      overflowX: "auto",
      background: "var(--surface-inset)",
      border: "1px solid var(--border-hairline)",
      borderRadius: "var(--radius-xs)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-sm)",
      lineHeight: "var(--lh-sm)",
      color: "var(--text-primary)"
    }
  }, "BEGIN;\nSELECT pg_advisory_xact_lock(hashtext($1));\n-- do the work; the lock dies with the transaction\nCOMMIT;"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-md)",
      lineHeight: "var(--lh-md)",
      color: "var(--text-secondary)"
    }
  }, "Related: ", /*#__PURE__*/React.createElement(TextLink, {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("post", window.SITE.posts[2]);
    }
  }, "pg_stat_statements, minimally"), ".")), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-6)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(MetaList, {
    items: [{
      label: "words",
      value: "1,240"
    }, {
      label: "updated",
      value: p.date
    }, {
      label: "source",
      value: "github"
    }]
  }), /*#__PURE__*/React.createElement(GlassPanel, {
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-2xs)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: "var(--space-3)"
    }
  }, "Get new notes"), /*#__PURE__*/React.createElement(Input, {
    placeholder: "you@domain.dev",
    hint: "Roughly monthly. No newsletter voice."
  }))));
}
Object.assign(window, {
  PostScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PostScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shell.jsx
try { (() => {
const {
  GrainField,
  ThemeToggle,
  IconButton,
  Divider,
  MetaList,
  Kbd,
  Logo,
  Wordmark
} = window.SushenDevDesignSystem_801d0d;

// Page chrome: fixed hairline header, narrow column, footer with meta + theme.
function Header({
  route,
  go
}) {
  const items = [["home", "hello"], ["writing", "desk"], ["notes", "notes"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 5,
      backdropFilter: "blur(18px) saturate(1.25)",
      WebkitBackdropFilter: "blur(18px) saturate(1.25)",
      background: "linear-gradient(180deg,color-mix(in oklab,var(--bg-void) 62%,transparent),color-mix(in oklab,var(--bg-base) 34%,transparent) 62%,transparent)",
      border: 0,
      boxShadow: "var(--shadow-glass-edge)",
      maskImage: "linear-gradient(180deg,#000 0%,#000 62%,transparent 100%)",
      WebkitMaskImage: "linear-gradient(180deg,#000 0%,#000 62%,transparent 100%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "0 var(--page-gutter)",
      height: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("home");
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-5)"
    }
  }, items.map(([r, label]) => /*#__PURE__*/React.createElement("a", {
    key: r,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(r);
    },
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-xs)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      textDecoration: "none",
      border: 0,
      color: route === r ? "var(--accent)" : "var(--text-muted)"
    }
  }, label)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 16,
      background: "var(--border-hairline)"
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "github",
    label: "GitHub",
    size: 28,
    bare: true
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "rss",
    label: "RSS",
    size: 28,
    bare: true
  }))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "var(--baseline-3) var(--page-gutter) var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Divider, {
    dashed: true,
    label: "end of file"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-8)",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "wrap",
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 120,
    style: {
      color: "var(--accent)",
      opacity: .9
    }
  }), /*#__PURE__*/React.createElement(MetaList, {
    style: {
      minWidth: 240,
      flex: 1
    },
    items: window.SITE.meta
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement(ThemeToggle, null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--text-2xs)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Kbd, null, "/"), " search ", /*#__PURE__*/React.createElement(Kbd, null, "g"), /*#__PURE__*/React.createElement(Kbd, null, "n"), " notes"))));
}
function Shell({
  route,
  go,
  children,
  sparkle = true
}) {
  return /*#__PURE__*/React.createElement(GrainField, {
    sparkle: sparkle,
    minHeight: "100vh"
  }, /*#__PURE__*/React.createElement(Header, {
    route: route,
    go: go
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "var(--baseline-3) var(--page-gutter) 0"
    }
  }, children), /*#__PURE__*/React.createElement(Footer, null));
}
Object.assign(window, {
  Shell,
  Header,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WritingScreen.jsx
try { (() => {
const {
  SectionHeader,
  PostRow,
  Input,
  Tag,
  Divider
} = window.SushenDevDesignSystem_801d0d;

// Writing index: filter row + search, hairline-separated rows. No cards.
function WritingScreen({
  go
}) {
  const S = window.SITE;
  const all = [...S.posts, ...S.notes.map((n, i) => ({
    slug: "note-" + i,
    date: n.date,
    title: n.body.split(".")[0] + ".",
    tags: n.tags,
    kind: "note"
  }))].sort((a, b) => a.date < b.date ? 1 : -1);
  const tags = ["all", ...Array.from(new Set(all.flatMap(p => p.tags)))];
  const [tag, setTag] = React.useState("all");
  const [q, setQ] = React.useState("");
  const shown = all.filter(p => (tag === "all" || p.tags.includes(tag)) && p.title.toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    index: 3,
    hue: "teal"
  }, "Field notes"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "var(--prose-measure)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-md)",
      lineHeight: "var(--lh-md)",
      color: "var(--text-secondary)"
    }
  }, "Posts are things I had to work out. Notes are things I want to remember. Both are here, newest first."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "var(--space-6)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap"
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: t === tag,
    onClick: () => setTag(t)
  }, t))), /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "filter titles\u2026",
    value: q,
    onChange: e => setQ(e.target.value),
    wrapStyle: {
      width: 230
    }
  })), /*#__PURE__*/React.createElement("div", null, shown.map(p => /*#__PURE__*/React.createElement(PostRow, {
    key: p.slug,
    date: p.date,
    title: p.title,
    tags: p.tags,
    kind: p.kind,
    readingTime: p.readingTime,
    href: "#",
    onClick: e => {
      e.preventDefault();
      p.kind === "note" ? go("notes") : go("post", p);
    }
  })), !shown.length && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-6) 0",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, "nothing matches \"", q, "\". ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "_"))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, shown.length, " of ", all.length, " entries"));
}
Object.assign(window, {
  WritingScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WritingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Sample content for the sushen.dev kit. Placeholder copy written in the brand
// voice (see readme.md > CONTENT FUNDAMENTALS) — replace with real content.
window.SITE = {
  name: "sushen.dev",
  intro: "I build fast, boring systems.",
  blurb: "Platform engineer. I spend my time on query paths, caches and the parts of latency nobody puts in a changelog. This site does three things: says who I am, says what I'm doing, and keeps notes on what I'm learning.",
  meta: [{
    label: "location",
    value: "Bengaluru, IN"
  }, {
    label: "stack",
    value: "go · postgres · htmx"
  }, {
    label: "reply time",
    value: "~2 days"
  }, {
    label: "page weight",
    value: "41.2 kB"
  }],
  doing: [{
    title: "Platform engineering",
    org: "acme",
    period: "2024 — now",
    status: "currently",
    tone: "ok",
    body: "Query paths, caches, and the boring parts of latency. Mostly Go and Postgres."
  }, {
    title: "pgpeek",
    org: "open source",
    period: "2025 — now",
    status: "in progress",
    tone: "warn",
    body: "A single-binary reader for pg_stat_statements. No agent, no dashboard."
  }, {
    title: "Writing weekly notes",
    org: "here",
    period: "2023 — now",
    status: "in progress",
    tone: "warn",
    body: "One micro note a week, minimum. Long posts when something is worth the length."
  }, {
    title: "Backend, payments",
    org: "previous",
    period: "2021 — 2024",
    status: "done",
    tone: "neutral",
    body: "Ledgers, idempotency, reconciliation. Learned to distrust retries."
  }],
  posts: [{
    slug: "advisory-locks",
    date: "2026-04-08",
    title: "Advisory locks beat table locks",
    tags: ["postgres", "concurrency"],
    readingTime: "6 min",
    kind: "post",
    lede: "A row lock protects a row. An advisory lock protects an idea — and ideas are usually what you're actually serialising."
  }, {
    slug: "forty-kb",
    date: "2026-02-27",
    title: "A 40 kB site that still feels fast",
    tags: ["web", "performance"],
    readingTime: "4 min",
    kind: "post",
    lede: "Most of what makes a page feel slow isn't bytes. It's layout that changes after you've started reading."
  }, {
    slug: "pgss-minimal",
    date: "2026-03-19",
    title: "pg_stat_statements, minimally",
    tags: ["postgres", "ops"],
    readingTime: "5 min",
    kind: "post",
    lede: "Four queries that answer nearly every 'why is it slow' question, and nothing else."
  }, {
    slug: "retries",
    date: "2026-01-14",
    title: "Retries are a distributed system",
    tags: ["reliability"],
    readingTime: "7 min",
    kind: "post",
    lede: "The moment you add a retry you own a second, invisible system with its own failure modes."
  }],
  notes: [{
    date: "2026-04-02",
    tags: ["sqlite"],
    body: "WAL mode isn't a tuning knob. It changes the failure mode: readers stop blocking, and now you care about checkpoint timing instead."
  }, {
    date: "2026-03-28",
    tags: ["go"],
    body: "context.WithTimeout on the caller, not the handler. The handler doesn't know how patient the user is."
  }, {
    date: "2026-03-21",
    tags: ["postgres"],
    body: "EXPLAIN (ANALYZE, BUFFERS). Without BUFFERS you're guessing whether it was slow or just cold."
  }, {
    date: "2026-03-09",
    tags: ["web"],
    body: "Set width and height on every image. One attribute pair removes an entire class of layout shift."
  }, {
    date: "2026-02-18",
    tags: ["ops"],
    body: "A dashboard nobody opens during an incident is documentation, not observability."
  }],
  body: ["The first time I reached for an advisory lock it felt like cheating. There was no row to lock — the thing I needed to serialise was a job that didn't exist yet, and the table it would eventually write to was irrelevant.", "That is the whole idea. A row lock protects a row. An advisory lock protects a claim: this worker, and only this worker, is allowed to do this piece of work right now. The database is only being used as a place everyone agrees to look.", "Two rules have kept this boring for me. Use the transaction-scoped variant, so the lock dies with the transaction and you never write cleanup code. And hash a stable string, not an id you might renumber later."]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.MetaList = __ds_scope.MetaList;

__ds_ns.NoteCard = __ds_scope.NoteCard;

__ds_ns.PostRow = __ds_scope.PostRow;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.StatusRow = __ds_scope.StatusRow;

__ds_ns.Typewriter = __ds_scope.Typewriter;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Kbd = __ds_scope.Kbd;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.ThemeToggle = __ds_scope.ThemeToggle;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.GlassPanel = __ds_scope.GlassPanel;

__ds_ns.GrainField = __ds_scope.GrainField;

})();
