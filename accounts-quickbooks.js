Accounts.oauth.registerService('quickbooks');

if (Meteor.isClient) {
  Meteor.loginWithQuickbooks = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Quickbooks.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
//  var autopublishedFields = _.map(
    // don't send access token. https://dev.twitter.com/discussions/5025
    // TODO This should be customized for Quickbooks... total shameless copy at this point.
//    Quickbooks.whitelistedFields.concat(['id', 'screenName']),
//    function (subfield) { return 'services.twitter.' + subfield; });

  Accounts.addAutopublishFields({
    forLoggedInUser: ["id", "foo"], // autopublishedFields,
    forOtherUsers: ["id", "bar"] // autopublishedFields
  });
}

