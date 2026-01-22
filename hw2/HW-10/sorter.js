/**
 * 高效排序演算法
 * @param {number[]} arr - 雜亂的陣列 (Proxy)
 * @returns {number[]} - 排序後的陣列
 */
function superSort(arr) {
  // 請在此實作你的演算法
  // 提示：不要試圖一次解決所有問題，試著把陣列切成小塊來處理\
  console.log(arr);
  console.log(arr.length);
  console.log(arr[0]);
  if (arr.length <= 1) {return arr;}
//計數排序（有找極值、建計數陣列、填回去）
  let minval = 0;
  let maxval = 0;
//找最大最小
  for(let i=0; i<arr.length; i++){
    let arrnum=arr[i];
    //console.log(arrnum);
    if(arrnum<minval){
      minval = arrnum;
    }
    if(arrnum>maxval){
      maxval = arrnum;
    }
  }
//建計數陣列，類排序，計數的值填到第（數值-最小值）格
  let arrsize =maxval - minval + 1;
  let countarr = new Array(arrsize).fill(0);
  console.log(countarr);
  for(let j=0; j<arr.length; j++){
    let index = arr[j]-minval;
    countarr[index]++;
    
  }
//填回去
  let sortnum = 0;
  for(let k=0; k<arrsize; k++){
    while(countarr[k]>0){
      arr[sortnum] = k + minval;
      sortnum++;//移到下格
      countarr[k]--;//減排好得數量
    }
  }
  console.log(arr);
  // 範例：回傳排序好的陣列
  return arr;
}