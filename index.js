function MyArray(){
  this.length = 0;
}

MyArray.isMyArray = function (arg) {
  return arg instanceof MyArray 
}


const methodObject = {
  push(item) {
    this[this.length] = item;
    return ++this.length;
  },

  pop() {
    if(this.length === 0){
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  },
  
  forEach(func) {
    for(let i = 0; i < this.length; i++){
      func(this[i], i, this);
    }
  },
  
  map(func) {
    const mapNew = new MyArray();
    for(let i = 0; i < this.length; i++){
      const result = func(this[i], i, this)
      mapNew.push(result)
    }
    return mapNew;
  },

  shift() {
    if(this.length === 0){
      return;
    }
   for(let i = 0; i < this.length; i++){
     this[i] = this[i + 1];
   }
   delete this[this.length -1];
   this.length--;
  },
  
  unshift(arg) {
    if(!arg){
      return
    }
    for(let k = this.length; k >= 0; k--) {
      this[k+1] = this[k];
    }
    this.length++;
    this[0] = arg;
  },
  
  reverse() {
    for(let i = 0; i <= Math.trunc(this.length)/2; i++){
      let temp = this[i];
      this[i] = this[this.length - (i + 1)];
      this[this.length - (i + 1)] = temp;
    }
  },
  
  concat(arr) {
     const newArr= new MyArray();
     for(let i = 0; i < this.length; i++){
       newArr.push(this[i]);
     }
     for(let k = 0; k < arr.length; k++){
       newArr.push(arr[k]);
     }
     return newArr;
  }
}

MyArray.prototype = methodObject;