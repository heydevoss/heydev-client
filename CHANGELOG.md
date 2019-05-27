# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- ElementUI plugin.
- Default Roboto font.
- Setted primary Color to `#2a5fe1`.
- Header containing `Home` option.
- User page containing User info and user stats.
- Org pull requests, issues and commits.
- Unit tests for all components.

### Fixed

- Avatar throws error when image is not provided. Setted a default image in `assets/`
- Organization query with wrong sintax.

### Changed

- Package name `NeoLite` to `HeyDev`.

## [0.1.0] - 2019-05-06

### Added

- Get organizations infos
- Implemented organization page
- Implemented login and logout.
- Connected with server using localhost 5000.
- Configured apollo client.
- Nuxt project structure and configured Travis.
- Contributor views.
- Contributor activities timeline

### Fixed

- Reload page when Logout is clicked.

### Changed

- Authentication type to default *Bearer*.
- Package name to *NeoLite*.
- Button designs.
- Result profile page to show `Hey <login_of_the_user>`.
