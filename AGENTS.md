# Portfolio working instructions

- Treat `WebApp/src` as the main source tree and `WebApp/public` as the asset tree.
- Do not scan or read `WebApp/node_modules`, `WebApp/dist`, `.git`, `Backups`, `app_fixing`, or `21st_dev_scraper` unless the current task explicitly requires them.
- Use targeted searches (`rg`) and inspect only files relevant to the requested page or component. Do not enumerate image, video, PDF, or font contents merely to build a repository map.
- Prefer small, scoped edits. Preserve existing visual design and behavior unless the request explicitly asks for a change.
- For work on “Orto Botanico di Catania”, modify only that project page and its directly required styles or components. Touch shared code only when strictly necessary.
- Reuse an already-running preview when available. Run focused checks during iteration, then run `npm run lint` and `npm run build` once before completion.
- Use Git history or a worktree for recoverable snapshots; never duplicate `node_modules`, `dist`, or the full media library as a backup.
