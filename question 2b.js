function fib(n){
    if (n <= 0){
      return [0];
    }
    else if(n == 1){
      return [1];
    }
    else if (n == 2){
      return [0,1];
    }
    else{
      var s = fib(n - 1);
      return s.concat(s[n - 2] + s[n - 3]);
    }
    
  }
  var arr = fib(n);
  var newArr = arr.reverse();
  
  

  