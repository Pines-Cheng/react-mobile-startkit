module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
    "jest": true,
  },
  "parserOptions": {
    "ecmaVersion": 7,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "redux-saga",
    "react",
    "jsx-a11y"
  ],
  "parser": "babel-eslint",
  "extends": ["eslint:recommended", "airbnb"],
  "rules": {
    "no-console": 0,
    "semi": 2,
    "eqeqeq": 2,
    "comma-dangle": 0,
    "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx"]}],
    "react/forbid-prop-types": 0,
    "react/jsx-tag-spacing":0,
    "global-require": 0,
    "object-curly-spacing":0,
    "import/no-extraneous-dependencies": 0,
    "import/first":0,
    "max-len": [2, {
      code: 200,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true
    }],// 强制最大行数
    "max-lines": ["error", {
      "max": 500,
      "skipBlankLines": true,
      "skipComments": true
    }] // 强制最大行数
  },
  "globals": {
    "Public": false,
    "CoreDecorators": false
  }
};
