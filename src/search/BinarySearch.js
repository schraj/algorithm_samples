class BinarySearch {
  constructor(data) {
    this.data = data;
  }
    
  search(key) {
    const arrLength = this.data.length;
    let currentIndex = Math.ceil(arrLength/2);     
    while (true){
        if (this.data[currentIndex] === key) {
            return currentIndex;
        }

        if (this.data[currentIndex] > key) {
            
        }
    }
  }
}

module.exports=BinarySearch;