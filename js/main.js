requirejs.config({
    paths: {
      app: 'app',
      jquery:'lib/jquery'
  }
});

requirejs(['app/app']);
