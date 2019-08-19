export default function renderHead ({
  jsxString, 
  preloadedState,
  title
}) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${ title ? title : 'Universal Bust 🎇 SPA + SSR for static websites.'}</title>
        <meta charset="utf-8"/>
      </head>
      <body style="margin: 0; padding: 0; min-height: -webkit-fill-available;">
        <div id="root">${jsxString}</div>
        ${ preloadedState ? (`
            <script>
              window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
          `) : ''
        }
        <script type="text/javascript" src="/assets/bundle.js"></script>
      </body>
    </html>
  `
}