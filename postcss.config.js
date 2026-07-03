import purgecss from '@fullhuman/postcss-purgecss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    autoprefixer(),
    process.env.NODE_ENV === 'production' && purgecss({
      content: ['./index.html', './src/**/*.js'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ]
};