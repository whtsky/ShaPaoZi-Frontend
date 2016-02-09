window.BWEUM || (window.BWEUM = {
  info: {
    'stand': true,
    'agentType': 'browser',
    'agent': 'bi-collector.oneapm.com/static/js/bw-send-411.4.5.js',
    'beaconUrl': 'bi-collector.oneapm.com/beacon',
    'licenseKey': 'e63fE~FqmujeuFzi',
    'applicationID': 2277852
  }
})

var script = document.createElement('script')
script.type = 'text/javascript'
script.src = '//bi-collector.oneapm.com/static/js/bw-loader-411.4.5.js'
document.getElementsByTagName('head')[0].appendChild(script)
