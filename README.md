# Merge base branch action

GitHub Action to update pull requests' branches with the Head of the base branch by Merging the base branch into the pr's branch

## Inputs

### `GITHUB_TOKEN`

**Required**
## Example usage

```YML
name: Sync pr's branches with their base branch

on:
  push:
    branches:
      - main

jobs:
  update-branches:
    runs-on: ubuntu-latest
    name: Update branches
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Set up Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
      - name: Merge base branch
        uses: omaresmael/merge-base-branch@v1
        with:
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```
