module.exports = {
  extends: ["@humanoids/eslint-config", "plugin:cypress/recommended"],

  env: {
    jest: true,
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "no-alert": "off",
  },
};
