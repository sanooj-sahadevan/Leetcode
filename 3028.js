const nums = [2, 3, -5];


let x = 0,
  ctr = 0;


  for(i=0;i<nums.length;i++){
    if(nums[i]>0){
        x +=nums[i]
    }else{
        x -= Math.abs(nums[i]); 
    }
    if(x==0){
        ctr++
    }
  }

console.log(x);
