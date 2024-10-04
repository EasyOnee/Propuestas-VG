module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('@angular-devkit/build-angular/plugins/karma'), 
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter')
    ],
    client: {
      clearContext: false  

    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/becki-app'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcepaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    browsers: ['ChromeHeadless'],
  });
};