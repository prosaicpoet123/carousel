module.exports = {
  bracketSpacing: true,
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',
  semi: false,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^(.*)/components/(.*)$',
    '^(.*)/(?!generated)(.*)/(.*)$',
    '^(.*)/generated/(.*)$',
    '^[./]',
  ],
  importOrderCaseInsensitive: true
};
