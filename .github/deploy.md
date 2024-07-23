

deploy

```shell
npx @cloudflare/next-on-pages
pnpm wrangler pages deploy .vercel/output/static --branch master --commit-dirty=true
```

upload

```shell
rclone copy ../public/ r2:assets/moon-docs --progress
```
