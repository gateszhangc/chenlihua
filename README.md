# 陈丽华关键词站

围绕 `陈丽华最新消息` 构建的 Next.js 关键词站，包含公开时间线、FAQ、来源汇总、Clarity 接入和 ArgoCD/Kubernetes 发布骨架。

## 本地开发

```bash
npm run dev
```

默认打开 `http://localhost:3000`。

## 测试与构建

```bash
npm run lint
npm run test:e2e
```

`test:e2e` 会先执行生产构建，再用 Playwright 以 `next start` 模式启动站点，避免和本地开发中的 `next dev` 冲突。

## 环境变量

复制 `.env.example` 作为本地或 CI 参考：

```bash
NEXT_PUBLIC_SITE_URL=https://chenlihua.lol
NEXT_PUBLIC_CLARITY_PROJECT_ID=waexonttkx
NEXT_PUBLIC_GA_MEASUREMENT_ID=
GOOGLE_SITE_VERIFICATION=
```

说明：

- `NEXT_PUBLIC_CLARITY_PROJECT_ID` 默认生产值是 `waexonttkx`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` 预留给 GA4
- `GOOGLE_SITE_VERIFICATION` 用于 Search Console 验证标签

## 部署映射

- GitHub repository: `gateszhangc/chenlihua`
- Git branch: `main`
- Image repository: `registry.144.91.77.245.sslip.io/chenlihua`
- K8s manifest path: `deploy/k8s/overlays/prod`
- Argo CD application: `chenlihua`
- Primary domain: `chenlihua.lol`
- 发布链路：`gateszhangc/chenlihua -> main -> registry.144.91.77.245.sslip.io/chenlihua -> deploy/k8s/overlays/prod -> ArgoCD application chenlihua`

## GitHub Actions

工作流位于 `.github/workflows/build-and-release.yml`，职责是：

1. 构建并推送镜像到私有 registry
2. 用当前 `git sha` 回写 `deploy/k8s/overlays/prod/kustomization.yaml`
3. 提交 `chore: release <sha> [skip ci]`，让 ArgoCD 感知 manifest 更新

需要的 GitHub Secrets / Variables：

- Secrets: `REGISTRY_USERNAME`, `REGISTRY_PASSWORD`
- Variables: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_CLARITY_PROJECT_ID`, `NEXT_PUBLIC_GA_MEASUREMENT_ID`, `GOOGLE_SITE_VERIFICATION`

## ArgoCD 与 Kubernetes

- ArgoCD Application 清单位于 `deploy/argocd/application.yaml`
- 基础资源位于 `deploy/k8s/base`
- 生产 overlay 位于 `deploy/k8s/overlays/prod`
- Ingress 同时接收 `chenlihua.lol` 和 `www.chenlihua.lol`，站点层通过 Next.js 重定向把 `www` 归并到 apex

## 上线检查

上线后至少核验：

1. `https://chenlihua.lol/healthz` 返回 200
2. `https://chenlihua.lol/robots.txt` 与 `/sitemap.xml` 可访问
3. 首页主视觉图正常加载
4. 页面源代码中出现 canonical、OG 图、JSON-LD、Clarity 脚本
