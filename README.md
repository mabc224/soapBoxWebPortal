# SoapBoxWebPortal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.

# Pre-Reqs

Before getting started, install node: 8.12.0 (https://nodejs.org/en/download/)
update npm @ 6.4.1 to be compatible with angular cli for angular 7
check existing version of npm

$ npm -v
5.6.0 
update npm to latest version

$ npm install -g npm@latest

$ npm -v
6.4.1
Install correct version of packages by using below command at the root of the project

$ npm ci
More about npm-ci here: https://docs.npmjs.com/cli/ci

##Scaffloding step performed to generate this app
To create this project following steps were taken;

- Angular 7 cli was used to setup basic structure
- Angular Router was configured for home route & invalid route. All routes will point to valid '\dashboard'
- Production build was tested so that moving forward there are no major hiccups to make prod build
- Firebase-tools were setup for hosting of this angular application
- Angular Http Services are used to make ship api call for fetching customers data
- Ag-grid setup to show data
- Models for the response objects were created for clean code
- Global filter for finding data in all columns was implemented
- Performed all code checkins in Bit-Bucket with each step
- Performed prod, build optimizations with latest dev-kit to shrink build size
- Added Angular Material for text-input and future references
- Setup app base urls in dev and prod environment.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
