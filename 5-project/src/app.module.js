import angular from 'angular'

import Config from './app.config'
import Controllers from './controllers'
import Services from './services'

const app = angular.module('app', ['ui.router'])

app.config(Config)

Controllers.forEach((controller) => {
  app.controller(controller.name, controller.controller)
})

Services.forEach((service) => {
  app.service(service.name, service.service)
})
