import "../src/global.scss"
export const parameters = {
  actions: { argTypeRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    }
  }
}
