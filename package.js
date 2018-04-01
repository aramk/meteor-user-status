Package.describe({
  name: "aramk:user-status",
  summary: "User connection and idle state tracking for Meteor",
  version: "1.0.0",
  git: "https://github.com/aramk/meteor-user-status.git"
});

Package.onUse( function(api) {
  api.versionsFrom('METEOR@1.6.1');

  api.use('accounts-base');
  api.use('check');
  api.use(['coffeescript@2.2.1_1', 'underscore']);
  api.use('mongo');

  api.use('deps', 'client');

  api.use('mizzao:timesync@0.3.4');

  api.addFiles('monitor.coffee', 'client');
  api.addFiles('status.coffee', 'server');

  api.export('UserStatus'); // on both

  api.export('MonitorInternals', 'client', {testOnly: true});
  api.export('StatusInternals', 'server', {testOnly: true});
});

Package.onTest( function(api) {
  api.use('aramk:user-status');
  api.use('mizzao:timesync');

  api.use(['accounts-base', 'accounts-password']);
  api.use(['coffeescript', 'underscore']);

  api.use(['random', 'tracker']);

  api.use('test-helpers');
  api.use('tinytest');

  api.addFiles("tests/insecure_login.js");
  api.addFiles('tests/setup.coffee');
  // Just some unit tests here. Use the test app otherwise.
  api.addFiles('tests/monitor_tests.coffee', 'client');
  api.addFiles('tests/status_tests.coffee', 'server');

  api.addFiles('tests/server_client_tests.coffee');
});
