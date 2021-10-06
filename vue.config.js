const Mode = require('frontmatter-markdown-loader/mode')
const markdownIt = require('markdown-it')
const markdownItHlJs = require('markdown-it-highlightjs')
const markdownItLA = require('markdown-it-link-attributes')

module.exports = {
  publicPath: '/',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          loader: 'frontmatter-markdown-loader',
          options: {
            mode: [Mode.VUE_COMPONENT],
            markdownIt: markdownIt({ html: true })
              .use(markdownItHlJs, { inline: true })
              .use(markdownItLA, {
                attrs: {
                  target: '_blank'
                }
              })
          }
        }
      ]
    }
  }
}
