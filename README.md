# update pull requests action

GitHub Action to update pull requests' branches with the Head of the base branch

## Inputs

### `GITHUB_TOKEN`

**Required** The token to be used for creating the pull request. Can be set to the one given for the workflow or another user.

## Example usage

```YML
name: Sync branches with their base

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
      - name: update branches
        uses: omaresmael/update-pull-requests@v1.0
        with:
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```
