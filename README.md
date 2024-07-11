# 🛡️ VitePress Protect Plugin

A VitePress plugin to protect your content from copying and inspection.

## 🌟 Features

- 🚫 Disable F12 key (optional)
- 📋 Prevent copying (optional)
- 🖱️ Disable text selection (optional)

## 📦 Installation

```bash
npm install vitepress-protect-plugin
```

or if you're using yarn:

```bash
yarn add vitepress-protect-plugin
```

or if you're using pnpm:

```bash
pnpm add vitepress-protect-plugin
```

## 🚀 Usage

In your VitePress config file (usually `.vitepress/config.js` or `.vitepress/config.ts`):

```javascript
import { defineConfig } from "vitepress"
import vitepressProtectPlugin from "vitepress-protect-plugin"

export default defineConfig({
  // other VitePress configs...
  vite: {
    plugins: [
      vitepressProtectPlugin({
        disableF12: true,
        disableCopy: true,
        disableSelect: true,
      }),
    ],
  },
})
```

## ⚙️ Options

| Option          | Type    | Default | Description                                        |
| --------------- | ------- | ------- | -------------------------------------------------- |
| `disableF12`    | boolean | `true`  | Disable F12 key to prevent opening developer tools |
| `disableCopy`   | boolean | `true`  | Prevent copying content                            |
| `disableSelect` | boolean | `true`  | Disable text selection                             |

## 🤝 Contributing

Contributions, issues and feature requests are welcome! Feel free to check [issues page](https://github.com/cellinlab/vitepress-protect-plugin/issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazingFeature'`)
4. Push to the branch (`git push origin feature/amazingFeature`)
5. Open a Pull Request

## 📝 License

This project is [MIT](LICENSE) licensed.

## 🙏 Acknowledgements

- [VitePress](https://vitepress.dev/) for the amazing static site generator
- All contributors who help improve this plugin

---

Made with ❤️ by [Your Name](https://github.com/cellinlab)
