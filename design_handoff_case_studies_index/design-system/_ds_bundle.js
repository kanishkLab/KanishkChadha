/* @ds-bundle: {"format":4,"namespace":"KanishkChadhaDesignSystem_1b1504","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"CapabilityRow","sourcePath":"components/content/CapabilityRow.jsx"},{"name":"FeaturedCard","sourcePath":"components/content/FeaturedCard.jsx"},{"name":"NoteCard","sourcePath":"components/content/NoteCard.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"StackPill","sourcePath":"components/core/StackPill.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"NewsletterSignup","sourcePath":"components/forms/NewsletterSignup.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"0aa99fe7ee51","components/content/CapabilityRow.jsx":"d77068e80b79","components/content/FeaturedCard.jsx":"80c616d4b6c8","components/content/NoteCard.jsx":"efbbbc2fb12b","components/content/StatBlock.jsx":"aac8dfbaeb5b","components/core/Button.jsx":"f2b7feaa3e5e","components/core/Card.jsx":"52a1486ae3ce","components/core/Eyebrow.jsx":"972a06eb6325","components/core/StackPill.jsx":"4f3d1849ae50","components/core/Tag.jsx":"452e5faccc06","components/forms/Input.jsx":"79a03f67a39f","components/forms/NewsletterSignup.jsx":"bd58c4077fc3","components/forms/Textarea.jsx":"5567baaa49ca","components/navigation/Footer.jsx":"1a8c85c21e7b","components/navigation/NavBar.jsx":"1b9a0fa6ea4b","ui_kits/website/Contact.jsx":"923e526f163e","ui_kits/website/Home.jsx":"f43cad56713c","ui_kits/website/Notes.jsx":"66da212a1aa2","ui_kits/website/Work.jsx":"aadf354b15ef"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KanishkChadhaDesignSystem_1b1504 = window.KanishkChadhaDesignSystem_1b1504 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
/** KC monogram + optional wordmark. Typographic mark set in Inter. */
function Logo({
  variant = 'lockup',
  onDark = false,
  size = 28,
  className,
  style
}) {
  const kColor = onDark ? '#fff' : 'var(--kc-ink)';
  const mark = /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--kc-font-logo)',
      fontWeight: 800,
      fontSize: size,
      letterSpacing: '-.08em',
      lineHeight: 1,
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: kColor
    }
  }, "K"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--kc-accent)'
    }
  }, "C"));
  if (variant === 'monogram') return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: style
  }, mark);
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * 0.42,
      ...style
    }
  }, mark, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--kc-font-logo)',
      fontWeight: 700,
      fontSize: size * 0.62,
      letterSpacing: '-.04em',
      color: onDark ? '#fff' : 'var(--kc-ink)',
      lineHeight: 1
    }
  }, "Kanishk Chadha"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/content/CapabilityRow.jsx
try { (() => {
/** Numbered capability row: index · title + description · stack tags. */
function CapabilityRow({
  index,
  title,
  description,
  tags = [],
  divider = true,
  className,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'grid',
      gridTemplateColumns: '32px 1fr 240px',
      gap: 18,
      alignItems: 'start',
      padding: '22px 0',
      borderBottom: divider ? '1px solid var(--kc-line-2)' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--kc-accent)'
    }
  }, index), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--kc-font-display)',
      fontWeight: 600,
      fontSize: 18,
      letterSpacing: '-.02em',
      marginBottom: 6,
      color: 'var(--kc-ink)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      fontWeight: 500,
      lineHeight: 1.6,
      color: 'var(--kc-body)',
      margin: 0
    }
  }, description)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px 14px',
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--kc-ocean)'
    }
  }, tags.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, t))));
}
Object.assign(__ds_scope, { CapabilityRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CapabilityRow.jsx", error: String((e && e.message) || e) }); }

// components/content/NoteCard.jsx
try { (() => {
/** Blog / notes preview card with textured thumbnail, category, title, meta. */
function NoteCard({
  category,
  title,
  meta,
  href = '#',
  className,
  style
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    className: className,
    style: {
      textDecoration: 'none',
      color: 'inherit',
      display: 'block',
      background: '#fff',
      border: '1px solid var(--kc-line)',
      borderRadius: 'var(--kc-radius-md)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 150,
      background: 'var(--kc-surface-2)',
      backgroundImage: 'repeating-linear-gradient(135deg, rgba(9,38,52,.04) 0 2px, transparent 2px 20px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--kc-accent)',
      marginBottom: 10
    }
  }, category), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--kc-font-display)',
      fontWeight: 600,
      fontSize: 19,
      letterSpacing: '-.02em',
      lineHeight: 1.3,
      color: 'var(--kc-ink)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: 'var(--kc-muted)',
      marginTop: 10
    }
  }, meta)));
}
Object.assign(__ds_scope, { NoteCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/NoteCard.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
/** A single metric: large Manrope 800 value over a plain-language caption. */
function StatBlock({
  value,
  label,
  accent = false,
  onDark = true,
  className,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--kc-font-sans)',
      fontWeight: 800,
      fontSize: 38,
      letterSpacing: '-.02em',
      color: accent ? 'var(--kc-accent)' : onDark ? '#fff' : 'var(--kc-ink)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      marginTop: 4,
      color: onDark ? 'var(--kc-on-dark-2)' : 'var(--kc-body-2)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: 'var(--kc-font-sans)',
  fontWeight: 700,
  fontSize: 14,
  padding: '13px 24px',
  borderRadius: 'var(--kc-radius-sm)',
  border: 'none',
  cursor: 'pointer',
  lineHeight: 1,
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  textDecoration: 'none',
  transition: 'background .15s, border-color .15s'
};

/** Primary action button and its variants. Renders <a> when href is set, else <button>. */
function Button({
  variant = 'primary',
  onDark = false,
  disabled = false,
  href,
  children,
  className,
  style,
  ...rest
}) {
  let v;
  if (disabled) {
    v = {
      background: 'transparent',
      color: 'var(--kc-muted)',
      border: '1px solid var(--kc-line)',
      cursor: 'not-allowed'
    };
  } else if (onDark) {
    v = variant === 'primary' ? {
      background: 'var(--kc-accent)',
      color: '#fff'
    } : {
      background: 'var(--kc-on-dark-fill)',
      color: '#fff',
      border: '1px solid var(--kc-on-dark-line)'
    };
  } else if (variant === 'primary') {
    v = {
      background: 'var(--kc-accent)',
      color: '#fff'
    };
  } else if (variant === 'secondary') {
    v = {
      background: 'var(--kc-ink)',
      color: '#fff'
    };
  } else {
    // ghost
    v = {
      background: 'transparent',
      color: 'var(--kc-ink)',
      border: '1px solid var(--kc-input-border)'
    };
  }
  const props = {
    className,
    style: {
      ...base,
      ...v,
      ...style
    },
    ...rest
  };
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    href: href
  }, props), children);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled
  }, props), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
/** Surface container. white = hairline card, ocean = filled blue, navy = dark panel. */
function Card({
  variant = 'white',
  raise = false,
  padding = 24,
  children,
  className,
  style
}) {
  const map = {
    white: {
      background: '#fff',
      border: '1px solid var(--kc-line)',
      color: 'var(--kc-ink)'
    },
    ocean: {
      background: 'var(--kc-ocean)',
      color: '#fff'
    },
    navy: {
      background: 'var(--kc-ink)',
      color: '#fff'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      borderRadius: 'var(--kc-radius-md)',
      padding,
      boxSizing: 'border-box',
      boxShadow: raise ? 'var(--kc-shadow-soft)' : 'none',
      ...map[variant],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
/** Uppercase overline / eyebrow label. */
function Eyebrow({
  tone = 'accent',
  size = 'md',
  children,
  className,
  style
}) {
  const color = {
    accent: 'var(--kc-accent)',
    ocean: 'var(--kc-ocean)',
    muted: 'var(--kc-muted)'
  }[tone];
  const s = size === 'lg' ? {
    fontSize: 12,
    letterSpacing: '.22em'
  } : size === 'sm' ? {
    fontSize: 11,
    letterSpacing: '.14em'
  } : {
    fontSize: 11,
    letterSpacing: '.18em'
  };
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      fontFamily: 'var(--kc-font-sans)',
      fontWeight: 600,
      textTransform: 'uppercase',
      color,
      ...s,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/StackPill.jsx
try { (() => {
/** White bordered pill used for the technology stack list. */
function StackPill({
  children,
  className,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      background: '#fff',
      border: '1px solid var(--kc-line)',
      borderRadius: 'var(--kc-radius-sm)',
      padding: '9px 16px',
      fontFamily: 'var(--kc-font-sans)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--kc-ink)',
      boxShadow: 'var(--kc-shadow-subtle)',
      display: 'inline-block',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { StackPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StackPill.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/** Small uppercase tag. solid = orange fill, tint = soft orange, neutral = grey/ocean. */
function Tag({
  variant = 'solid',
  children,
  className,
  style
}) {
  const map = {
    solid: {
      background: 'var(--kc-accent)',
      color: '#fff',
      letterSpacing: '.08em'
    },
    tint: {
      background: 'var(--kc-accent-tint)',
      color: 'var(--kc-accent-deep)',
      letterSpacing: '.06em'
    },
    neutral: {
      background: 'var(--kc-surface-2)',
      color: 'var(--kc-ocean)',
      letterSpacing: '.06em'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      display: 'inline-block',
      borderRadius: 'var(--kc-radius-xs)',
      padding: '6px 12px',
      fontFamily: 'var(--kc-font-sans)',
      fontSize: 11,
      fontWeight: 700,
      textTransform: 'uppercase',
      ...map[variant],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/FeaturedCard.jsx
try { (() => {
/** Navy textured feature panel for flagship work. */
function FeaturedCard({
  badge,
  title,
  description,
  compact = false,
  className,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      borderRadius: 'var(--kc-radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--kc-shadow-raised)',
      background: 'var(--kc-ink-2)',
      backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,.03) 0 2px, transparent 2px 22px)',
      padding: compact ? 24 : '34px 36px',
      color: '#fff',
      ...(compact ? {
        minHeight: 120,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
      } : {}),
      ...style
    }
  }, badge && (compact ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--kc-accent)',
      marginBottom: 8
    }
  }, badge) : /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    variant: "solid"
  }, badge))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--kc-font-display)',
      fontWeight: 600,
      letterSpacing: '-.02em',
      fontSize: compact ? 16 : 28,
      lineHeight: compact ? 1.25 : 1.15,
      margin: 0,
      maxWidth: compact ? 'none' : '22ch'
    }
  }, title), description && !compact && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.6,
      color: 'var(--kc-on-dark)',
      margin: '12px 0 0',
      maxWidth: '70ch'
    }
  }, description));
}
Object.assign(__ds_scope, { FeaturedCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeaturedCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Labelled text input. onDark reverses to a white fill for navy surfaces. */
function Input({
  label,
  type = 'text',
  placeholder,
  onDark = false,
  className,
  style,
  ...rest
}) {
  const field = /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    placeholder: placeholder,
    style: {
      fontFamily: 'var(--kc-font-sans)',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--kc-ink)',
      padding: '12px 14px',
      borderRadius: 'var(--kc-radius-sm)',
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box',
      border: onDark ? 'none' : '1px solid var(--kc-input-border)',
      background: '#fff'
    }
  }, rest));
  if (!label) return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: style
  }, field);
  return /*#__PURE__*/React.createElement("label", {
    className: className,
    style: {
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'var(--kc-font-sans)',
      color: onDark ? '#fff' : 'var(--kc-ink)',
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      ...style
    }
  }, label, field);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/NewsletterSignup.jsx
try { (() => {
/** Inline email field + subscribe button. Pairs with newsletter / contact CTAs. */
function NewsletterSignup({
  placeholder = 'you@email.com',
  buttonLabel = 'Subscribe',
  onDark = true,
  className,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'flex',
      gap: 10,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    type: "email",
    placeholder: placeholder,
    onDark: onDark
  })), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    onDark: onDark,
    style: {
      whiteSpace: 'nowrap'
    }
  }, buttonLabel));
}
Object.assign(__ds_scope, { NewsletterSignup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/NewsletterSignup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Labelled multi-line text input. */
function Textarea({
  label,
  rows = 3,
  placeholder,
  className,
  style,
  ...rest
}) {
  const field = /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    placeholder: placeholder,
    style: {
      fontFamily: 'var(--kc-font-sans)',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--kc-ink)',
      padding: '12px 14px',
      border: '1px solid var(--kc-input-border)',
      borderRadius: 'var(--kc-radius-sm)',
      outline: 'none',
      resize: 'vertical',
      width: '100%',
      boxSizing: 'border-box'
    }
  }, rest));
  if (!label) return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: style
  }, field);
  return /*#__PURE__*/React.createElement("label", {
    className: className,
    style: {
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'var(--kc-font-sans)',
      color: 'var(--kc-ink)',
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      ...style
    }
  }, label, field);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
/** Site footer: orange top rule, monogram lockup, tagline, link. */
function Footer({
  tagline = 'Build smarter. Measure better. Automate with intention.',
  link = 'LinkedIn',
  href = '#',
  className,
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: className,
    style: {
      borderRadius: 'var(--kc-radius-md)',
      overflow: 'hidden',
      boxShadow: 'var(--kc-shadow-soft)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      background: 'var(--kc-accent)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--kc-ink)',
      padding: 26,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: '#fff',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "lockup",
    onDark: true,
    size: 22
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: 'var(--kc-on-dark-2)',
      textAlign: 'center'
    }
  }, tagline), /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--kc-accent)',
      textDecoration: 'none'
    }
  }, link)));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
/** Sticky top navigation on navy. links: [{label, href, active}]. */
function NavBar({
  links = [],
  className,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: className,
    style: {
      background: 'var(--kc-ink)',
      padding: '16px 26px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "lockup",
    onDark: true,
    size: 24
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.12em',
      textTransform: 'uppercase'
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: l.href || '#',
    onClick: l.onClick,
    style: {
      color: l.active ? 'var(--kc-accent)' : 'var(--kc-on-dark-2)',
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }, l.label))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
/* Contact screen */
(function () {
  const NS = window.KanishkChadhaDesignSystem_1b1504;
  const {
    Eyebrow,
    Input,
    Textarea,
    Button,
    NewsletterSignup
  } = NS;
  const wrap = {
    maxWidth: 1080,
    margin: '0 auto',
    padding: '0 40px',
    boxSizing: 'border-box'
  };
  function Contact() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        padding: '64px 40px',
        display: 'flex',
        flexDirection: 'column',
        gap: 40
      }
    }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "accent",
      size: "lg"
    }, "Contact")), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--kc-font-display)',
        fontSize: 44,
        fontWeight: 600,
        letterSpacing: '-.03em',
        color: 'var(--kc-ink)',
        margin: 0,
        maxWidth: '16ch'
      }
    }, "Tell me what you're building."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        fontWeight: 500,
        lineHeight: 1.6,
        color: 'var(--kc-body)',
        maxWidth: '56ch',
        margin: '16px 0 0'
      }
    }, "Martech, measurement, or an AI system you want to trust \u2014 start a conversation and I'll reply personally.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        border: '1px solid var(--kc-line)',
        borderRadius: 12,
        padding: 28,
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Name",
      placeholder: "Your name"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Email address",
      type: "email",
      placeholder: "you@email.com"
    })), /*#__PURE__*/React.createElement(Textarea, {
      label: "Message",
      rows: 4,
      placeholder: "What are you building?"
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      style: {
        alignSelf: 'flex-start'
      }
    }, "Start a conversation \u2192")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--kc-ink)',
        borderRadius: 12,
        padding: 28,
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        color: '#fff'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "accent"
    }, "The newsletter"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 1.6,
        color: 'var(--kc-on-dark)',
        margin: 0
      }
    }, "Prefer to read first? Get Automated Marketer weekly."), /*#__PURE__*/React.createElement(NewsletterSignup, {
      onDark: true,
      buttonLabel: "Subscribe"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        border: '1px solid var(--kc-line)',
        borderRadius: 12,
        padding: 24,
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 42,
        height: 42,
        borderRadius: 9,
        background: 'var(--kc-linkedin)',
        color: '#fff',
        fontWeight: 800,
        fontSize: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 'none',
        fontFamily: 'var(--kc-font-logo)'
      }
    }, "in"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--kc-font-display)',
        fontWeight: 600,
        fontSize: 16,
        letterSpacing: '-.02em',
        color: 'var(--kc-ink)'
      }
    }, "Let's connect on LinkedIn"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        fontWeight: 500,
        color: 'var(--kc-body-2)',
        marginTop: 2
      }
    }, "Tracking teardowns and AI-agent experiments.")), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      style: {
        padding: '11px 20px',
        fontSize: 13,
        whiteSpace: 'nowrap'
      }
    }, "Follow \u2192")))));
  }
  window.KitContact = Contact;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
/* Home screen — kanishkchadha.com landing */
(function () {
  const NS = window.KanishkChadhaDesignSystem_1b1504;
  const {
    Eyebrow,
    Button,
    StatBlock,
    CapabilityRow,
    Card,
    StackPill,
    FeaturedCard,
    NoteCard,
    NewsletterSignup
  } = NS;
  const wrap = {
    maxWidth: 1080,
    margin: '0 auto',
    padding: '0 40px',
    boxSizing: 'border-box'
  };
  const h2 = {
    fontFamily: 'var(--kc-font-display)',
    fontWeight: 600,
    fontSize: 34,
    letterSpacing: '-.03em',
    color: 'var(--kc-ink)',
    margin: 0
  };
  function SectionHead({
    eyebrow,
    title,
    sub
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 30
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "accent",
      size: "lg"
    }, eyebrow)), /*#__PURE__*/React.createElement("h2", {
      style: h2
    }, title), sub && /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        fontWeight: 500,
        lineHeight: 1.6,
        color: 'var(--kc-body)',
        maxWidth: '58ch',
        margin: '14px 0 0'
      }
    }, sub));
  }
  function Home({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--kc-ink)',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        right: -120,
        top: -120,
        width: 380,
        height: 380,
        borderRadius: '50%',
        background: 'var(--kc-ocean)',
        opacity: .35
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        right: 90,
        bottom: -50,
        width: 150,
        height: 150,
        borderRadius: '50%',
        background: 'var(--kc-accent)',
        opacity: .9
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        padding: '86px 40px 76px',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "accent",
      size: "lg"
    }, "AI \xB7 Analytics \xB7 Automation"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--kc-font-display)',
        fontSize: 58,
        fontWeight: 600,
        lineHeight: 1.02,
        letterSpacing: '-.03em',
        margin: '22px 0 18px',
        maxWidth: '15ch'
      }
    }, "Build smarter. Measure better."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 18,
        fontWeight: 500,
        lineHeight: 1.6,
        color: 'var(--kc-on-dark)',
        maxWidth: '54ch',
        margin: 0
      }
    }, "Senior martech, analytics, and automation \u2014 9+ years turning messy stacks into systems that measure themselves and act on their own."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        marginTop: 30,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onDark: true,
      onClick: () => go('work')
    }, "See the work \u2192"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onDark: true
    }, "Download R\xE9sum\xE9 \u2193")))), /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        padding: '64px 40px',
        display: 'flex',
        flexDirection: 'column',
        gap: 72
      }
    }, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--kc-ink)',
        borderRadius: 14,
        padding: '34px 40px',
        color: '#fff',
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
        gap: 28,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "accent"
    }, "9+ years in martech")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--kc-font-display)',
        fontSize: 22,
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: '-.02em'
      }
    }, "Senior enough to be trusted with the stack \u2014 and the outcomes.")), /*#__PURE__*/React.createElement(StatBlock, {
      value: "9+ yrs",
      label: "Owning martech, measurement & reporting"
    }), /*#__PURE__*/React.createElement(StatBlock, {
      value: "$250K+",
      label: "Paid media managed at 3.6+ ROAS",
      accent: true
    }), /*#__PURE__*/React.createElement(StatBlock, {
      value: "10+",
      label: "Locations instrumented end-to-end"
    })), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "What I do",
      title: "Three systems, one operator",
      sub: "I build the plumbing and the intelligence on top of it \u2014 then prove it works."
    }), /*#__PURE__*/React.createElement(Card, {
      padding: 0,
      style: {
        padding: '4px 26px'
      }
    }, /*#__PURE__*/React.createElement(CapabilityRow, {
      index: "01",
      title: "Automation & AI Systems",
      description: "Agentic workflows with tool access, decision loops, and escalation logic \u2014 systems that self-correct after launch.",
      tags: ['n8n', 'HubSpot', 'Salesforce', 'GPT / Claude']
    }), /*#__PURE__*/React.createElement(CapabilityRow, {
      index: "02",
      title: "Analytics & Attribution",
      description: "Full-funnel measurement so every spend and campaign decision is grounded in real, queryable data.",
      tags: ['SQL', 'GA4', 'Looker Studio', 'Server-side GTM']
    }), /*#__PURE__*/React.createElement(CapabilityRow, {
      index: "03",
      title: "Customer Data / CDP",
      description: "Unified profiles, event tracking, and audience activation across the stack for clean, real-time segmentation.",
      tags: ['Segment', 'GTM', 'Consent Mode v2', 'Identity'],
      divider: false
    }))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "ocean"
    }, "The stack I work in")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 10,
        justifyContent: 'center',
        maxWidth: 660,
        margin: '0 auto'
      }
    }, ['HubSpot', 'Salesforce', 'Segment', 'GA4', 'Looker Studio', 'n8n', 'OpenAI', 'Claude', 'Zapier', 'BigQuery'].map(t => /*#__PURE__*/React.createElement(StackPill, {
      key: t
    }, t)))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "Featured work",
      title: "Outcomes, not project names"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement(FeaturedCard, {
      badge: "Flagship \xB7 Martech + AI",
      title: "The agent that qualifies our inbound leads \u2014 and how I know it's right.",
      description: "Built on n8n + Make calling the Anthropic and OpenAI APIs: qualifies and scores inbound leads, pushes enriched records into the CRM so sales works the right buyers first."
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(FeaturedCard, {
      compact: true,
      badge: "Measurement",
      title: "The tracking plan that governs a CDP"
    }), /*#__PURE__*/React.createElement(FeaturedCard, {
      compact: true,
      badge: "Analytics / BI",
      title: "Five spreadsheets to one source of truth"
    }), /*#__PURE__*/React.createElement(FeaturedCard, {
      compact: true,
      badge: "Growth / CRO",
      title: "Owning a CRO program end-to-end"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 20
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => go('work')
    }, "See all work \u2192"))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "Field notes",
      title: "The newsletter, in longer form"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(NoteCard, {
      category: "Privacy",
      title: "Consent Mode v2 default states, explained properly",
      meta: "6 min read \xB7 Aug 2026",
      href: "#"
    }), /*#__PURE__*/React.createElement(NoteCard, {
      category: "AI Systems",
      title: "How I eval an AI agent before I trust it with leads",
      meta: "8 min read \xB7 Sep 2026",
      href: "#"
    }))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--kc-ink)',
        borderRadius: 14,
        padding: 44,
        textAlign: 'center',
        color: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "accent",
      size: "lg"
    }, "The newsletter")), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--kc-font-display)',
        fontSize: 34,
        fontWeight: 600,
        letterSpacing: '-.02em',
        margin: '0 0 12px'
      }
    }, "Automated Marketer"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15,
        fontWeight: 500,
        lineHeight: 1.6,
        color: 'var(--kc-on-dark)',
        maxWidth: '46ch',
        margin: '0 auto 26px'
      }
    }, "A weekly note on using AI, analytics and automation in real campaigns. Build smarter, measure better, automate with intention."), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 420,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(NewsletterSignup, {
      onDark: true
    })))));
  }
  window.KitHome = Home;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Notes.jsx
try { (() => {
/* Notes screen — blog / newsletter archive */
(function () {
  const NS = window.KanishkChadhaDesignSystem_1b1504;
  const {
    Eyebrow,
    NoteCard,
    NewsletterSignup
  } = NS;
  const wrap = {
    maxWidth: 1080,
    margin: '0 auto',
    padding: '0 40px',
    boxSizing: 'border-box'
  };
  const notes = [{
    category: 'Privacy',
    title: 'Consent Mode v2 default states, explained properly',
    meta: '6 min read · Aug 2026'
  }, {
    category: 'AI Systems',
    title: 'How I eval an AI agent before I trust it with leads',
    meta: '8 min read · Sep 2026'
  }, {
    category: 'Attribution',
    title: 'Server-side GTM without breaking your reporting',
    meta: '7 min read · Jul 2026'
  }, {
    category: 'CDP',
    title: 'One event schema to keep every tool honest',
    meta: '9 min read · Jun 2026'
  }, {
    category: 'Analytics',
    title: 'Five spreadsheets to one source of truth',
    meta: '5 min read · May 2026'
  }, {
    category: 'Growth',
    title: 'A CRO cadence that ties tests to revenue',
    meta: '6 min read · Apr 2026'
  }];
  function Notes() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        padding: '64px 40px',
        display: 'flex',
        flexDirection: 'column',
        gap: 40
      }
    }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "accent",
      size: "lg"
    }, "Field notes")), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--kc-font-display)',
        fontSize: 44,
        fontWeight: 600,
        letterSpacing: '-.03em',
        color: 'var(--kc-ink)',
        margin: 0
      }
    }, "Automated Marketer"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        fontWeight: 500,
        lineHeight: 1.6,
        color: 'var(--kc-body)',
        maxWidth: '58ch',
        margin: '16px 0 0'
      }
    }, "Teardowns, AI-agent experiments, and the occasional \"here's what actually moved the number.\"")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 18
      }
    }, notes.map((n, i) => /*#__PURE__*/React.createElement(NoteCard, {
      key: i,
      category: n.category,
      title: n.title,
      meta: n.meta,
      href: "#"
    }))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--kc-ink)',
        borderRadius: 14,
        padding: 44,
        textAlign: 'center',
        color: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "accent",
      size: "lg"
    }, "Get it weekly")), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--kc-font-display)',
        fontSize: 30,
        fontWeight: 600,
        letterSpacing: '-.02em',
        margin: '0 0 22px'
      }
    }, "One note, every week. No hype."), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 420,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(NewsletterSignup, {
      onDark: true
    }))));
  }
  window.KitNotes = Notes;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Notes.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Work.jsx
try { (() => {
/* Work screen — case-study index */
(function () {
  const NS = window.KanishkChadhaDesignSystem_1b1504;
  const {
    Eyebrow,
    Button,
    FeaturedCard,
    Tag,
    Card,
    CapabilityRow
  } = NS;
  const wrap = {
    maxWidth: 1080,
    margin: '0 auto',
    padding: '0 40px',
    boxSizing: 'border-box'
  };
  function Work({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        padding: '64px 40px',
        display: 'flex',
        flexDirection: 'column',
        gap: 48
      }
    }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "accent",
      size: "lg"
    }, "Selected work")), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--kc-font-display)',
        fontSize: 44,
        fontWeight: 600,
        letterSpacing: '-.03em',
        lineHeight: 1.05,
        color: 'var(--kc-ink)',
        margin: 0,
        maxWidth: '18ch'
      }
    }, "The systems, and how I know they work."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        fontWeight: 500,
        lineHeight: 1.6,
        color: 'var(--kc-body)',
        maxWidth: '60ch',
        margin: '16px 0 0'
      }
    }, "Each of these is measured, then automated with intention. Named by the outcome \u2014 not the tool.")), /*#__PURE__*/React.createElement(FeaturedCard, {
      badge: "Flagship \xB7 Martech + AI",
      title: "The agent that qualifies our inbound leads \u2014 and how I know it's right.",
      description: "Built on n8n + Make calling the Anthropic and OpenAI APIs: qualifies and scores inbound leads, pushes enriched records into the CRM so sales works the right buyers first. Governed by an eval suite that catches drift before it reaches a rep."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(FeaturedCard, {
      badge: "Measurement",
      title: "The tracking plan that governs a CDP",
      description: "A single event schema that keeps Segment, GA4, and the warehouse honest."
    }), /*#__PURE__*/React.createElement(FeaturedCard, {
      badge: "Analytics / BI",
      title: "Five spreadsheets to one source of truth",
      description: "Consolidated reporting into a governed Looker Studio layer over BigQuery."
    }), /*#__PURE__*/React.createElement(FeaturedCard, {
      badge: "Growth / CRO",
      title: "Owning a CRO program end-to-end",
      description: "Hypotheses, instrumentation, and a testing cadence tied to revenue."
    }), /*#__PURE__*/React.createElement(FeaturedCard, {
      badge: "Privacy",
      title: "Consent Mode v2, done right",
      description: "Default states and server-side tagging that survive an audit."
    })), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "ocean"
    }, "How every engagement runs")), /*#__PURE__*/React.createElement(Card, {
      padding: 0,
      style: {
        padding: '4px 26px'
      }
    }, /*#__PURE__*/React.createElement(CapabilityRow, {
      index: "01",
      title: "Instrument",
      description: "Measure what matters before touching a tool \u2014 a clean, queryable data layer first.",
      tags: ['SQL', 'GA4', 'Segment']
    }), /*#__PURE__*/React.createElement(CapabilityRow, {
      index: "02",
      title: "Automate",
      description: "Wrap the measured process in agentic workflows with escalation and eval.",
      tags: ['n8n', 'GPT / Claude']
    }), /*#__PURE__*/React.createElement(CapabilityRow, {
      index: "03",
      title: "Prove",
      description: "Report the outcome in plain language, with the eval that proves it's right.",
      tags: ['Looker Studio'],
      divider: false
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => go('contact')
    }, "Start a conversation \u2192")));
  }
  window.KitWork = Work;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Work.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.CapabilityRow = __ds_scope.CapabilityRow;

__ds_ns.FeaturedCard = __ds_scope.FeaturedCard;

__ds_ns.NoteCard = __ds_scope.NoteCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.StackPill = __ds_scope.StackPill;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.NewsletterSignup = __ds_scope.NewsletterSignup;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
