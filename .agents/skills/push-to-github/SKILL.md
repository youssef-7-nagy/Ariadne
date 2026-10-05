---
name: push-to-github
description: >-
  Use this skill to push updates to GitHub specifically for the Ariadne repository located at c:\Users\youssef nagy\Desktop\leo_github.
---

# Push updates to GitHub

This skill defines the standard procedure to commit and push changes for the `youssef-7-nagy/Ariadne` repository.

## Steps

1. Always set the working directory to `c:\Users\youssef nagy\Desktop\leo_github`.
2. Ensure you have the desired commit message from the user, or infer one from the recent changes.
3. Run the following command via PowerShell to push the updates:
   ```powershell
   git add . ; git commit -m "<your commit message>" ; git push
   ```
4. Verify that the command succeeds.
