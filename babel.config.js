module.exports = function (api) {
  api.cache(true)
  const presets = [
    [
      "@babel/preset-env", 
      {
        useBuiltIns: "usage",
        debug: true,
      }
    ]
  ]
  const plugins = ["@babel/plugin-proposal-class-properties"]

  return {
    presets,
    plugins
  }
}

//  Notes:
//  -----------------------------------------------------------------------------------------------------------------
//
//  ## About "Babel"
//  1.Babel will convert ECMAScript2015+ code into a version that will be understood by current browsers.
//  2.That will involve both transforming new syntax and polyfilling missing features which is done using babel plugins.
//  3.A "preset" is a pre-determined set of plugins.
//
//  -----------------------------------------------------------------------------------------------------------------
//
//  ## The "env" preset:
//  1.The default behaviour without options runs all transforms on the code.
//  2.This preset will include all plugins to support modern JavaScript (ES2015, ES2016, etc.)
//  3.We can target specific browsers with the "env" preset, which will only load transformation plugins for features 
//    that are not available in those target browsers.
//  4.With the "useBuiltIns" option set to "usage", babel will only include the polyfills you need i.e only for the 
//    features that are missing in the target browsers.
//  5.If the "env" preset is not used with the "useBuiltIns" options set to "usage", babel will load the full polyfill
//    i.e polyfills for all the new features in es2015+, even for those features that are natively available in the 
//    target browsers.
//  6."@babel/preset-env" is the same as "@babel/env".
//
//  -----------------------------------------------------------------------------------------------------------------
//
//  ## Polyfills
//  1.With polyfills you can use new built-ins like Promise, Weakmap, static methods like Array.from, Object.assign
//    and instance methods like Array.prototype.includes, and generator functions.
//  2.The Polyfill adds to the global scope as well as the native prototypes like Array, String in order to do this.
//  3.@babel/polyfill needs to be dependency because it should be run before the source code (because polyfills
//    add to the global scope and native prototypes).
//
//  -----------------------------------------------------------------------------------------------------------------
//
//  ## -proposal- (Babel-7 feature)
//  1.Any plugin for a feature that is not in a early release of ECMAScript like ES2015, ES2016 etc should be named with
//    -proposal-.
//  2.This is to signify that a proposal is not officially in JavaScript.
//  3.ex:- @babel/plugin-transform-class-properties is now @babel/plugin-proposal-class-properties
//
//  -----------------------------------------------------------------------------------------------------------------
//
//  ## Targeting browsers
//  1.The special feature of preset "env" is that it lets you configure the browsers you want to target.
//  2.This let's babel load only the transformers and polyfills needed to support those target browsers, which reduces
//    bundle sizes as you compile only what you need.
//  4."Browserslist" is a library used to share a supported list of browsers between different front-end tools like 
//    autoprefixer, stylelint, eslint-plugin-compat and many others.
//  5.By default, @babel/preset-env will use "browserslist config sources", the main ones are 
//    1)"browserslist" prop in package.json.
//    2)"browserslist" config file.
//    3)".browserslistrc" config file.
//  6.If targets.browsers is specified, browserslist config will be ignored.
//  7.If targets.browsers is not specified, babel will search for browserslist config file or package.json for a 
//    "browserslist" field.
//
//  -----------------------------------------------------------------------------------------------------------------
