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
      const s = fib(n - 1);
      return s.concat(s[n - 2] + s[n - 3]);
    }
  }
  console.log(fib(12));