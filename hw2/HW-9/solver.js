/**
 * 在已排序的陣列中搜尋目標值
 * @param {number[]} arr - 已排序的陣列 (Proxy Object)
 * @param {number} target - 目標值
 * @returns {number} - 目標值的索引，找不到回傳 -1
 */
function search(arr, target) {
  // 請在此實作你的搜尋邏輯
  // 注意：你存取 arr[i] 的次數非常有限 (< 100 次)！
  
  // ❌ 禁止使用 arr.indexOf() 或 arr.find() 
  // 因為這些內建函式底層是從頭掃描，會瞬間超過讀取次數限制。
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        let middleval = arr[mid];
        console.log(`min: ${min}, max: ${max}, mid: ${mid}, middleval: ${middleval}`);
        if (middleval === target) {
            return mid;
        } else if (middleval < target) {//若想找的比較大，則往右爪
            min = mid + 1;
        } else {//若想找的比較middleval小，往min方向找
            max = mid - 1;
        }
    }
  
  return -1; 
}