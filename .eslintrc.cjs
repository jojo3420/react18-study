module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [], // 모든 상속을 제거합니다.
  ignorePatterns: ['**/*'], // 모든 파일 무시
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: [],
  rules: {}
}
