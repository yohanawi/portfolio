# Build Troubleshooting

Use this guide when `npm run build` fails locally with a Windows file operation error such as:

```text
EPERM: operation not permitted, unlink '.next/app-path-routes-manifest.json'
```

This error affects generated files inside `.next`. If the same commit builds successfully in CI or after a retry in a normal terminal, treat it as an environment or file-locking issue first, not an application defect.

## Quick Workaround

Run a clean build:

```bash
npm run build:clean
```

This removes the generated `.next` directory and then runs the normal production build.

You can also remove only the generated output:

```bash
npm run clean
```

## Investigation Steps

If the issue repeats on Windows:

1. Close running Next.js processes, including `npm run dev`, `npm run start`, and any terminal running a build.
2. Close IDE preview tools or extensions that may watch `.next`.
3. Run:

   ```bash
   npm run build:clean
   ```

4. Retry from both PowerShell and Command Prompt.
5. Check whether antivirus, Windows Defender, OneDrive sync, or file indexing is scanning the project directory.
6. Confirm Node.js and npm versions:

   ```bash
   node --version
   npm --version
   ```

7. If possible, move the repo outside synced or heavily monitored folders and retry.

## Reproduction Notes

Record these details if opening or reopening an issue:

- Windows version:
- Node.js version:
- npm version:
- Shell: PowerShell / Command Prompt / Git Bash
- IDE running: yes / no
- Antivirus or file indexing enabled: yes / no
- Was `npm run dev` or `next start` running: yes / no
- Did `npm run build:clean` pass: yes / no
- Exact error text:

## Expected Resolution

Close the issue as environment-specific if:

- `npm run build` passes after retrying in a normal terminal.
- `npm run build:clean` passes.
- CI builds successfully on the same commit.

Keep the issue open if:

- `npm run build:clean` fails consistently on a normal Windows terminal.
- The failure reproduces with no IDE, dev server, antivirus scan, or sync tool touching `.next`.
- The same commit also fails in CI.
