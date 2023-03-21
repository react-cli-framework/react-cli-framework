<h1>React Blueprint Component</h1>

<p>
  <a href="https://www.npmjs.com/package/react-blueprint-component"
    ><img
      src="https://d25lcipzij17d.cloudfront.net/badge.svg?id=js&r=r&type=6e&v=1.0.9&x2=0"
      alt="npm version"
  /></a>
</p>

<p>
  A reusable React component built with TypeScript and styled with CSS modules.
</p>

<h2>Installation</h2>

<p>You can install the package globally using npm:</p>

<pre><code style="font-family: Consolas, Monaco;
    font-size: 14px;
    color: #555;">npm i -g react-blueprint-component</code></pre>
<h2>Usage</h2>

<p>
To create a new React component using this package, run the command <b>react-cli create [component-name]</b> and follow the prompts to specify the component type, directory, props, CSS style, and testing options</p>

<p>The CLI will prompt you for the following options:</p>

<ul>
  <li>Type of component (Functional/Class)</li>
  <li>Directory to create the component in</li>
  <li>Props (if any) to add to the component</li>
  <li>CSS style (Material-UI/Styled Components/None)</li>
  <li>Whether to include a TypeScript file</li>
  <li>Whether to include a testing file</li>
</ul>

<p>
  Once you've answered all the questions, the CLI will create the component in
  the specified directory with the specified options.
</p>

<img width="800" src="https://i.imgur.com/ShquQmY.png" />
<h2>Project Structure</h2>

<p>The project has the following file structure:</p>

<pre><code>src
└── components
    ├── component-name.tsx
    ├── component-name.spec.tsx
    ├── component-name.style.ts
    └── component-name.types.ts</code></pre>

<ul>
  <li><code>component-name.tsx</code> - The main component file.</li>
  <li><code>component-name.spec.tsx</code> - The component test file.</li>
  <li><code>component-name.style.ts</code> - The component styles file.</li>
  <li><code>component-name.types.ts</code> - The component types file.</li>
</ul>

<h2>License</h2>

<p>
  This project is licensed under the
  <a href="https://opensource.org/licenses/MIT">MIT license</a>.
</p>
