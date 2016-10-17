

var app = {
power:function pow(x, n) {
  if (n < 0){n = -n}
  var c = x;
  c = +c;
  for (var i = 1; i < n; i++){ 
  c = c*x;
  }

  return c;
}
}



try {
	module.exports = app;
} catch (e){}