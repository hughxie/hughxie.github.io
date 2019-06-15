const ghpages = require('gh-pages')

ghpages.publish(
  'hugh-xie/public',
  {
    branch: 'master',
    repo: 'https://github.com/hughxie/hughxie.github.io',
  },
  () => {
    console.log('Deploy Complete!')
  }
)