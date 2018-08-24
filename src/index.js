import grapesjs from 'grapesjs';
import grape_mjml from 'grapesjs-mjml';
import campaign_mjml from 'grapesjs-campaign';

module.exports = (() => {
  return {
    init( config = {} ) {
      config = { ...config }
      console.log('config', config);
      const editor = grapesjs.init(config)
      return editor;
    }
  };
})()
