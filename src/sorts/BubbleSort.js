class BubbleSort {
  constructor(data) {
    this.data = data;
  }
    
  sort() {
    let endIndex = this.data.length;
    let swapped = true;
    for (let i = 0; i<this.data.length; i++){
      for (let j = 0; i<endIndex; i++){
        const previousValue = this.data[i-1];
        const currentValue = this.data[i];
        if (currentValue < previousValue){
          this.data[i] = previousValue;
          this.data[i-1]=currentValue;
        }        
      }  
    }
  }
}

module.exports=BubbleSort;