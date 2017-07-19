class BubbleSort {
  constructor(data) {
    this.data = data;
  }
    
  sort() {
    let endIndex = this.input.length;

    for (let i = 0; i<this.input.length; i++){
      for (let j = 0; i<endIndex; i++){
        const currentValue = this.input[i];
        const nextValue = this.input[i + 1];
        if (currentValue > nextValue){
          this.input[i] = nextValue;
          this.input[i+1]=currentValue;
        }        
      }  
      endIndex = endIndex -1;    
    }
  }
}

module.exports=BubbleSort;