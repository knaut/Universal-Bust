// IMPORTS
import '@babel/polyfill'
// GLOBAL
import chalk from 'chalk'
import clear from 'clear'
import figlet from 'figlet'
import emoji from 'node-emoji'
import util from 'util'
import Moment from 'moment'

clear()
console.log(chalk.cyan('Configuring server…'))

// SERVER
import Glue from '@hapi/glue'

const manifest = {
  server: {
    port: process.env.PORT || 3000
  },
  register: {
    plugins: [
      // add Hapi plugins, routes, auth strategies, etc. here…
      // logging configuration
      {
        plugin: '@hapi/good',
        options: {
          reporters: {
            // add custom reporter objects here.
            // myConsoleReporter logs everything to the console.
            // see: https://github.com/hapijs/good/blob/master/API.md#reporter-interface
            myConsoleReporter: [
              {
                module: '@hapi/good-squeeze',
                name: 'Squeeze',
                args: [{
                  error: '*',
                  log: '*',
                  request: '*',
                  response:'*'
                }]
              },
              {
                module: '@hapi/good-console',
                args: [{
                  color: {
                    $filter: 'env',
                    production: false,
                    $default: true
                  }
                }]
              },
              'stdout'
            ]
          }
        }
      },
      // custom routes
      {
        plugin: {
          pkg: {
            name: 'example route',
            version: '0.0.1'
          },
          register: function(server, options, next) {

            server.route({
              method: 'GET',
              path: '/',
              handler: function(response, h) {
                console.log('hit test')
                return h.response('test')

              }
            })

          }
        }
      }

    ]
  }
}

const options = {
  relativeTo: __dirname
}

const welcome = function({
  protocol,
  address,
  port,
  started
}) {
  const timestamp = Moment(started).format('llll')
  const localAddress = `${protocol}://${address}:${port}`
  const rocket = emoji.get('rocket')
  const fig = chalk.green(
    figlet.textSync('universal bust', {
      horizontalLayout: 'fit',
      verticalLayout: 'fit',
      font: 'Calvin S'
    })
  )

  console.log(fig)
  console.log(
    rocket,
    chalk.bold(`Server at`), 
    chalk.bold.cyan(localAddress), 
    chalk.bold(`started on`), 
    chalk.bold.cyan(timestamp)
  )
}

const startServer = async function () {
  console.log(chalk.cyan('Configured server successfully. Starting up…'))

  try {
    const server = await Glue.compose(manifest, options)

    await server.start()

    const { 
      protocol,
      address,
      port,
      started
    } = server.info

    welcome({
      protocol,
      address,
      port,
      started
    })

  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

startServer()