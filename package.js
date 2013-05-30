Package.describe({
  summary: "Meteor smart package for pagedown."
})

Npm.depends({
  "pagedown": "1.1.0"
});

Package.on_use(function (api, where) {
  api.add_files('pagedown.js', 'server');
});
