# 867678.xyz

Source code for <https://867678.xyz>

## 🛠️ Build Guide

### ⚠️ Prerequisites

Make sure you can visit GitHub, else maybe cannot compile.

Example for archlinux(pacman):

Init environment

```bash
sudo pacman -Syu --needed nodejs corepack git
git clone git@github.com:moaeiou/867678.xyz.git
cd 867678.xyz/
sudo corepack enable
corepack use pnpm@latest
pnpm install
```

### 🖥 Development

Make sure you are now at `867678.xyz/`

Default output on `dist/`

```bash
# Test
pnpm dev
# Format
pnpm format
# Depoly
pnpm build
```

## 🙏 Acknowledgements

<https://cloudflare.com>

<https://chatgpt.com>(Codex)

<https://github.com>

<https://github.com/withastro/astro>

<https://marked.js.org>

<https://github.com/iamkun/dayjs>

<https://github.com/sindresorhus/github-markdown-css>

<https://github.com/prettier/prettier>

## ⚖️ License

This website was licensed under the [MoPL](https://867678.xyz/doc/MoPL)

MoPL not applicable and use the imported projects own protocol
