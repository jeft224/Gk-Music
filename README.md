[中文说明](./README.zh-cn.md)

## Quick start

install

```bash
yarn
# or
npm install
```

start dev

```bash
npm run dev
```

## Overview

> 前端

- webpack
- electron
- electron-builder
- electron-log
- react
- react-router
- redux
- ant-design
- remixicon
- less
- typescript
- eslint
- prettier

> 后端

- 基于 Binaryify/NeteaseCloudMusicApi 开发
- 用 egg 转发

## DevTools

Toggle DevTools:

- OSX: <kbd>Cmd</kbd> <kbd>Alt</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
- Linux: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
- Windows: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>

## Build package

Modify [builder.config.ts](./build/builder.config.ts) to edit package info.

For a full list of options see: https://www.electron.build/configuration/configuration

Create a package for OSX, Windows and Linux

```
npm run build
```

Please check the `release` folder after the build is complete.
