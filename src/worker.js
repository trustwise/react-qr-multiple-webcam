// jsQR is concatenated by gulp

self.addEventListener('message', function(e) {
  var decoded = jsQR(
    e.data.imageData.data,
    e.data.imageData.width,
    e.data.imageData.height
  )
  if (decoded) {
    postMessage(e.data.binaryData ? decoded.binaryData : decoded.data)
  } else {
    postMessage(null)
  }
})
