interface ProtectOptions {
  disableF12?: boolean
  disableCopy?: boolean
  disableSelect?: boolean
}

export default function vitepressProtectPlugin(options: ProtectOptions) {
  const { disableCopy = true, disableF12 = true, disableSelect = true } = options

  const injectScript = `
    (function() {
      document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
      });

      document.addEventListener('keydown', function(e) {
        ${disableF12 ? "if (e.keyCode === 123 || e.code === 'F12') {e.preventDefault(); return false;}" : ""} 
        ${disableCopy ? "if (e.ctrlKey && (e.keyCode === 67 || e.code === 'KeyC')) {e.preventDefault(); return false;}" : ""}
      });
    })();
  `

  const injectStyle = disableSelect
    ? `body {
      user-select: none;
      --webkit-user-select: none;
      --moz-user-select: none;
      --ms-user-select: none;
    }`
    : ""

  return {
    name: "vitepress-protect",
    transformIndexHtml(html: string) {
      return html.replace("</head>", `<script>${injectScript}</script><style>${injectStyle}</style></head>`)
    },
  }
}
