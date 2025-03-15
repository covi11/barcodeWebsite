
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/barcodeWebsite/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5109, hash: '7432df81cf48038369800aea6ecd73b4c7ecaae2dbae35cb2440292b62eb86cd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1082, hash: '69d46bba571c27e7afefc9257e730c5a629a2fece44685bd516e84f8509be796', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ZLZVAEMD.css': {size: 244815, hash: 'BKIUCPa4G2w', text: () => import('./assets-chunks/styles-ZLZVAEMD_css.mjs').then(m => m.default)}
  },
};
