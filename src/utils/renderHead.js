import HeadConfig from '../../configureHead.js';

export default function renderHead( html, preloadedState ) {
  return `
    <!doctype ${ HeadConfig.lang ? 'lang="' + HeadConfig.lang + '"' : null }>
    <html>
      <head>
        <title>universalBust</title>
        ${ HeadConfig.charset ? '<meta charset="' + HeadConfig.charset '">' : null }
        ${ HeadConfig.description ? '<meta name="description" content="' + HeadConfig.description '">' : null }
        ${ HeadConfig.keywords ? '<meta name="keywords" content="' + HeadConfig.keywords '">' : null }
        ${ HeadConfig.viewport ? '<meta name="viewport" content="' + HeadConfig.viewport '">' : null }
        ${ HeadConfig.viewport ? '<meta name="viewport" content="' + HeadConfig.viewport '">' : null }
        ${ HeadConfig.extStylesheets ? '<link rel="stylesheets" type="text/css" href="' + HeadConfig.extStylesheets '">' : null }
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script type="text/javascript" src="/assets/bundle.js"></script>
      </body>
    </html>
  `
}