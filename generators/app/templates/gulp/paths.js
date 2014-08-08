module.exports = {
  build: 'dist',
  css: {
    src: 'scss/**/*.scss',
    dest: 'dist/css',
    includes: ['../node_modules', '../bower_components'],
    csslintrc: 'scss/.csslintrc.json'
  },
  scripts: {
    src: 'scripts/index.coffee',
    dest: 'dist/js',
    watch: 'scripts/**/*.{coffee,js}'
  },
  images: {
    src: 'img_src/**/*.{svg, png, jpg, gif}',
    dest: 'dist/img'
  }
};
