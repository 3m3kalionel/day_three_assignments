Array.prototype.toTwenty = function(){
  var blocks = [];
  for(var i = 1; i < 21; i++){
    blocks.push(i);
  }
  return blocks;
};
Array.prototype.toForty = function(){
  var blocks = [];
  for(var i = 2; i < 41; i++){
    if((i % 2) === 0){
	 blocks.push(i);
 }
 }
  return blocks;
};
Array.prototype.toOneThousand = function(){
  var blocks = [];
  for(var i = 10; i<1001; i++){
   if((i % 10) === 0){
    blocks.push(i);
   }
  }

  return blocks;
};


Array.prototype.compareValue = function(a, b){
  return a - b;
};

Array.prototype.search = function(i){
  var m = 0;
    var n = this.length - 1;
    var len = this.length - 1;
    var ctx = 0;
    var resp = {count:0,index:-1,length:len};
    
    this.sort(function(a,b){return a - b});

    while (m <= n) {
        ctx++;
        var k = (n + m) >> 1;
        var cmp = this.compareValue(i, this[k]);
        if (cmp > 0) {
            m = k + 1;
        } else if(cmp < 0) {
            n = k - 1;
        } else {
            resp['index'] = k;
            break;
        }
    }
    
    return resp;
};