# Dev Stats WebComponents

## Example usage

### Github Stats

```html
<github-stats username="your-github-username"></github-stats>
```

![](https://github-readme-stats.vercel.app/api?username=savepong&show_icons=true&count_private=true&theme=&hide_border=&bg_color=&text_color=)

API Document for [github-stats](src/components/github-stats/readme.md) component.

### Github Streak Stats

```html
<github-streak-stats username="your-github-username"></github-streak-stats>
```

![](https://github-readme-streak-stats.herokuapp.com/?user=savepong&theme=&hide_border=&background=&dates=)

API Document for [github-streak-stats](src/components/github-streak-stats/readme.md) component.

### Github Top Languages

```html
<github-top-langs username="your-github-username" layout="compact" langs-count="10"></github-top-langs>
```

![](https://github-readme-stats.vercel.app/api/top-langs/?username=savepong&layout=compact&langs_count=10&theme=&hide_border=&bg_color=&text_color=)

API Document for [github-top-langs](src/components/github-top-langs/readme.md) component.

### Wakatime Stats

```html
<wakatime-stats username="your-wakatime-username" layout="default"></wakatime-stats>
```

![](https://github-readme-stats.vercel.app/api/wakatime?username=@savepong&layout=default&theme=&hide_border=&bg_color=&text_color=)

API Document for [wakatime-stats](src/components/wakatime-stats/readme.md) component.

## Using this component

### Using in popular javascript frameworks or libraries

- Go to [Using WebComponents in Angular, React.js, Vue.js, Node.js and Basic HTML example projects](https://github.com/savepong/using-web-components)

### Script tag

- Put a script tag below in the head of your index.html

```html
<script type="module" src="https://unpkg.com/wc-dev-stats/dist/wc-dev-stats/wc-dev-stats.esm.js"></script>
```

- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules

- Run

```bash
npm install wc-dev-stats --save
```

- Put a script tag below in the head of your index.html

```html
<script type="module" src="node_modules/wc-dev-stats/dist/wc-dev-stats/wc-dev-stats.esm.js"></script>
```

- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app

- Run

```bash
npm install wc-dev-stats --save
```

- Add an import to the npm packages

```javascript
import wc-dev-stats;
```

- Then you can use the element anywhere in your template, JSX, html etc

## API Docs

- [github-stats](src/components/github-stats/readme.md)
- [github-streak-stats](src/components/github-streak-stats/readme.md)
- [github-top-langs](src/components/github-top-langs/readme.md)
- [wakatime-stats](src/components/wakatime-stats/readme.md)

## Contributing

Clone this repo to a new directory:

```bash
git clone https://github.com/savepong/wc-dev-stats.git
cd wc-dev-stats
```

and run:

```bash
npm install
npm start
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```
