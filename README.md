![Project Structure](project-structure.png#center)


# Go Project Structure

This document outlines the structure and conventions for a Go (Golang) project.

## Root Directory

- **.env**: Configuration file for environment variables.
- **.gitignore**: Specifies files and directories to be ignored by git.
- **Dockerfile**: Instructions to build a Docker image for the application.
- **go.mod**: Defines the module's path and its dependencies.
- **go.sum**: Contains checksums of the module's dependencies.
- **main.go**: Entry point of the application.
- **secret.env**: Likely another environment variables file, possibly containing sensitive data.

## Directories

### bootstrap

- **middlewares.go**: Contains middleware functions used for request handling.

### config

- **config.go**: Configuration settings for the application.
- **load_secret.go**: Functions to load secrets, probably from a file or environment variables.

### i18n

- **en.toml**: Localization file for English.
- **th.toml**: Localization file for Thai.

### internal

This directory holds the internal code. It is a convention in Go to place application-specific code that should not be accessible outside the module here.

- **constants**: Contains constants used across the application.
  - **example.go**: Example constant definitions.
- **dto**: Data Transfer Objects (DTOs) for defining how data is sent and received.
  - **example.go**: Example DTO definitions.
- **handlers**: Contains HTTP handler functions.
  - **example.go**: Example handler definitions.
  - **example_test.go**: Unit tests for the example handler.
- **models**: Defines data models.
  - **example.go**: Example model definitions.
- **repositories**: Contains data access logic, typically for databases.
  - **example.go**: Example repository implementations.
  - **example_test.go**: Unit tests for the example repository.
- **route**: Defines routes for the application.
  - **example.go**: Example route definitions.
- **services**: Contains business logic.
  - **example.go**: Example service implementations.
  - **example_test.go**: Unit tests for the example service.
- **validate**: Contains validation logic.
  - **example.go**: Example validation implementations.
  - **example_test.go**: Unit tests for the example validation.

## Conventions

1. **Separation of Concerns**: Each directory has a specific purpose, such as handling routes, business logic, data access, etc. This makes the code easier to maintain and understand.
2. **Internal Package**: The `internal` package is used to hide implementation details that should not be exposed outside the module.
3. **Environment Configuration**: Environment variables and secrets are managed through `.env` and `secret.env` files.
4. **Testing**: Tests are placed in the same directory as the code they test, following the `_test.go` naming convention.
