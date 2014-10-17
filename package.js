Package.describe({
  name: 'accounts-quickbooks',
  summary: 'Meteor login provider package for QuickBooks online. Also provides authorization to QuickBooks Online API.',
  version: '1.0.0',
  git: 'https://github.com/benzenwen/accounts-quickbooks'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');
  api.use('underscore', ['server']);
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('quickbooks', ['client', 'server']);
  api.use('http', ['client', 'server']);

  api.add_files('quickbooks_login_button.css', 'client'); // TODO: difference between add_files and addFiles?
  api.add_files("accounts-quickbooks.js");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('accounts-quickbooks');
  api.addFiles('accounts-quickbooks-tests.js');
});
