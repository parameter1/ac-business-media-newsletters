# Newsletters for AC Business Media

## Requirements
- docker-compose

or

- Node >= v10.x
- Yarn package manager

## Installation
To install this repository, execute the `./scripts/yarn.sh` or `./scripts/yarn.bat` script from the project root.

## Development
To work in this repository, start the newsletter instance for your chosen tenant (such as `fcp`):
```
docker-compose up fcp
```

To run the test suite, execute the `./scripts/test.sh` or `./scripts/test.bat` script from the project root.

For more details about working with the Marko newsletter framework, check out the [docs](https://docs.parameter1.com)!

### On Windows
Due to an issue with [Docker for Windows](https://forums.docker.com/t/file-system-watch-does-not-work-with-mounted-volumes/12038/16), file watching is not supported inside a container. If you are using `docker-compose` with this project on a Microsoft Windows system, you'll need to ensure that the backup file watching method (polling for file modification dates at a specified interval) is used. To enable polling, create a `.env` file at the root of this project and add the following line:
```
GULP_POLLING_ENABLED=true
```

If you need to adjust the polling interval, you can do so by adding `GULP_POLLING_INTERVAL=<value in milliseconds>` to this file. The default is 1000ms.
