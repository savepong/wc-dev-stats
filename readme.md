# Dev Stats WebComponents

## Example

### Github Stats

```html
<github-stats username="savepong"></github-stats>
```

![](https://github-readme-stats.vercel.app/api?username=savepong&show_icons=true&count_private=true&theme=&hide_border=&bg_color=&text_color=)

API Document for [github-stats](src/components/github-stats/readme.md) component.

### Github Streak Stats

```html
<github-streak-stats username="savepong"></github-streak-stats>
```

![](https://github-readme-streak-stats.herokuapp.com/?user=savepong&theme=&hide_border=&background=&dates=)

API Document for [github-streak-stats](src/components/github-streak-stats/readme.md) component.

### Github Top Languages

```html
<github-top-langs username="savepong" layout="compact" langs-count="10"></github-top-langs>
```

![](https://github-readme-stats.vercel.app/api/top-langs/?username=savepong&layout=compact&langs_count=10&theme=&hide_border=&bg_color=&text_color=)

API Document for [github-top-langs](src/components/github-top-langs/readme.md) component.

### Wakatime Stats

```html
<wakatime-stats username="savepong" layout="default"></wakatime-stats>
```

![](https://github-readme-stats.vercel.app/api/wakatime?username=@savepong&layout=default&theme=&hide_border=&bg_color=&text_color=)

API Document for [wakatime-stats](src/components/wakatime-stats/readme.md) component.

## Using this component

### Script tag

- Put a script tag similar to this `<script src='https://unpkg.com/wc-dev-stats@0.0.1/dist/wc-dev-stats.esm.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules

- Run `npm install wc-dev-stats --save`
- Put a script tag similar to this `<script src='node_modules/wc-dev-stats/dist/wc-dev-stats.esm.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app

- Run `npm install wc-dev-stats --save`
- Add an import to the npm packages `import wc-dev-stats;`
- Then you can use the element anywhere in your template, JSX, html etc

## API Docs

- [github-stats](src/components/github-stats/readme.md)
- [github-streak-stats](src/components/github-streak-stats/readme.md)
- [github-top-langs](src/components/github-top-langs/readme.md)
- [wakatime-stats](src/components/wakatime-stats/readme.md)
