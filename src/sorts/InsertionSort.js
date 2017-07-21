class InsertionSort {
  constructor(data) {
    this.data = data;
  }
    
  sort() {
    let endIndex = this.data.length;

    for (let i = 0; i<this.data.length; i++){
      for (let j = 0; i<endIndex; i++){
        const currentValue = this.data[i];
        const nextValue = this.data[i + 1];
        if (currentValue > nextValue){
          this.data[i] = nextValue;
          this.data[i+1]=currentValue;
        }        
      }  
      endIndex = endIndex -1;    
    }
  }
}

module.exports=InsertionSort;