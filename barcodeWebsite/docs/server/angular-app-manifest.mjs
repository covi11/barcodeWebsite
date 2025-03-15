
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/barcodeWebsite/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5109, hash: 'c1fa1c76c7c212f493daaa9d0aaae229904f01602b37d3ccb3b35025e0c1ddda', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1082, hash: '09bc12ee413e2fd40911e23918b798c12bf1d112847c1181618701c9e604e920', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-RNOKCK3Y.css': {size: 244815, hash: 'drBSQjWO93E', text: () => import('./assets-chunks/styles-RNOKCK3Y_css.mjs').then(m => m.default)}
  },
};
