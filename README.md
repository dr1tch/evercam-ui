## CI Pipeline for [@evercam/ui](https://www.npmjs.com/package/@evercam/ui)

```yml
name: Release

on:
  push:
    branches:
      - master

concurrency: ${{ github.workflow }}-${{ github.ref }}

jobs:
  release:
    name: Release
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repo
        uses: actions/checkout@v3

      - name: Setup Node.js 16.x
        uses: actions/setup-node@v3
        with:
          node-version: 16.x
          registry-url: "https://registry.npmjs.org"

      - name: Install Dependencies
        run: yarn install --frozen-lockfile

      - name: Creating .npmrc
        run: echo "//registry.npmjs.org/:_authToken=${{ secrets.npm_token }}" > ~/.npmrc

      - name: Create Release Pull Request or Publish to npm
        id: changesets
        uses: changesets/action@v1
        with:
          # This expects you to have a script called release which does a build for your packages and calls changeset publish
          publish: yarn release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.npm_token }}
          NODE_AUTH_TOKEN: ${{ secrets.npm_token }}
```

## Goal:

Our goal is to release the package once the pull request is merged to evercam u, with a changelog and semantic versioning

The solution is to use [changesets](https://github.com/changesets/changesets)

## This is a scenario:

1. Here we added a EBuuton to our UI system

![image](https://github.com/dr1tch/evercam-ui/assets/35114389/86ec7aeb-5d5e-45f7-b620-4d11ada2d5fe)

2. Then, we run ``yarn changeset``

![image](https://github.com/dr1tch/evercam-ui/assets/35114389/a21a6f57-dfe8-47bc-b0bb-af933e9813c1)

kind of changes: ``major | minor | patch | none``:
  - ``MAJOR`` version when you make incompatible API changes ``0.0.1`` ==> ``1.0.0``
  - ``MINOR`` version when you add functionality in a backward compatible manner ``0.0.1`` ==> ``0.1.0``
  - ``PATCH`` version when you make backward compatible bug fixes ``0.0.1`` ==> ``0.0.1``
So in our case we'll select ``patch``, it will ask us for a summary about the changes we made

![image](https://github.com/dr1tch/evercam-ui/assets/35114389/f97ca78a-7f96-4b4d-883b-818d8ed25620)

We just click on enter here:

![image](https://github.com/dr1tch/evercam-ui/assets/35114389/cc0523af-ef56-4268-8ef6-fa57a9169674)

We commit our changes and we push it to remote:

![image](https://github.com/dr1tch/evercam-ui/assets/35114389/da78d897-5d2f-48ba-b002-1f26edf9d879)


On github, actions tab, Release pipline, we have:

![image](https://github.com/dr1tch/evercam-ui/assets/35114389/ae621015-125a-4ae7-8377-0131a44f5a58)

This will create a pull request, ``Versioning packages``:

![image](https://github.com/dr1tch/evercam-ui/assets/35114389/1038d5a2-210e-4d18-abf1-f519f8944612)

We merge it, another round of github actions fired up, now for building package, creating a release and publish it to npm:


##  build 

![image](https://github.com/dr1tch/evercam-ui/assets/35114389/c2532782-48ff-4b26-a303-139b04edb5d4)


## Create a release with a changelog:

![image](https://github.com/dr1tch/evercam-ui/assets/35114389/c2ea630a-da6e-45aa-94df-1068898ee397)


## Publish to npm:
- CI:

![image](https://github.com/dr1tch/evercam-ui/assets/35114389/b21139eb-3345-44a0-ae14-57a9c610df18)

- NPM:
  
![image](https://github.com/dr1tch/evercam-ui/assets/35114389/9b4fff07-02a4-4dee-a774-372b5e1caf58)



