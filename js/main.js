requirejs.config({
  baseUrl: 'static',
    paths: {
      app: 'app',
      jquery:'lib/jquery'
  }
});

requirejs(['app/app']);
