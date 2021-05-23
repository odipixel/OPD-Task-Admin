const path = require('path')

module.exports = {
  // Source files
  src: path.resolve(__dirname, '../src'),

  // Production build files
  build: path.resolve(__dirname, '../dist'),

  // Static files
  public: path.resolve(__dirname, '../public'),
  
  //html views
  viewhtml:  path.join(__dirname, 'src/views')
}