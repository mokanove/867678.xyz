# 867678.xyz

Source code for 867678.xyz, MoITools and CyAks.

## 🚀 How to init

Example using ArchLinux

```bash
sudo pacman -Syyuu --needed corepack nodejs
corepack use pnpm@latest
git clone git@github.com:moaeiou/867678.xyz.git
# or try https://github.com/moaeiou/867678.xyz.git
cd 867678.xyz
pnpm install
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |
| `pnpm astro preferences *action* devToolbar` | enable or disable devToolbar |
| `pnpm format`          | Using prettier format files                      |
| `pnpm check`           | Using prettier check files format                |

## ⚖️ LICENSE

This web site and the 2rd project aslo licensed under the [MoPL](https://867678.xyz/doc/mopubliclicense)

Some included depends use themeself license.
