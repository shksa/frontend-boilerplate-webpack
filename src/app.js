import './app.css'

class HelloWebpackAndBabel {
  webpackVersion = '4.14.0'

  babelVersion = '7.0.0'

  someWebpackTools = {
    "webpack": "^4.14.0",
    "webpack-bundle-analyzer": "^2.13.1",
    "webpack-cli": "^3.0.8",
    "webpack-dev-server": "^3.1.4"
  }

  someBabelTools = {
    "@babel/cli": "^7.0.0-beta.52",
    "@babel/core": "^7.0.0-beta.52",
    "@babel/plugin-proposal-class-properties": "^7.0.0-beta.52",
    "@babel/preset-env": "^7.0.0-beta.52",
  }

  render() {
    const someWebpackAndBabelTools = {...this.someBabelTools, ...this.someWebpackTools}
    return `
      <div id="greeting">hello webpack and babel</div>
      <div>some of the webpack and babel tools used</div>
      <ul>
        ${Object.keys(someWebpackAndBabelTools).reduce((acc, tool) => {
          return acc + `<li>${tool}</li>`
        }, '')}
      </ul>
    `
  }
}

export default HelloWebpackAndBabel