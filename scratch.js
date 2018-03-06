var depthSum = function(nestedList, level=1) {
    let sum = 0;
    
    nestedList.forEach((item) => {
    	if (typeof(item) == "number") {
      	sum += item*level;
      } else {
      	sum += depthSum(item, level+1);
      }
    });
    
    return sum;
};

// console.log(depthSum([[1,1],2,[1,1]])

console.log(depthSum([[1,2,3],2,3,[10,20,[20,20,20]]]))


