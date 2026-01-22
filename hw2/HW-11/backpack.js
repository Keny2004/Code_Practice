const STORAGE_KEY = "my_backpack";

/**
 * 1. 讀取背包
 * @returns {Array} - 道具陣列 (若無資料則回傳 [])
 */
function loadItems() {
  // TODO: 實作讀取邏輯
  let data = localStorage.getItem(STORAGE_KEY);

  if (data) {
    console.log("Data found",data);
    return JSON.parse(data);
  }
  console.log("No data found",data);
  return [];
}

/**
 * 2. 儲存背包
 * @param {Array} items - 要儲存的道具陣列
 */
function saveItems(items) {
  // TODO: 實作儲存邏輯
  console.log(items);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  
}

/**
 * 3. 新增道具 (整合測試)
 * @param {string} name - 道具名稱
 * @returns {Array} - 更新後的陣列
 */
function addItem(name) {
  // TODO:
  // 1. 呼叫 loadItems() 取得目前背包
  // 2. 建立新物件 { id: Date.now(), name: name }
  // 3. 將新物件 push 進陣列
  // 4. 呼叫 saveItems() 存檔
  // 5. 回傳陣列
    let packitem = loadItems();
    const newitem = { id: Date.now(), name: name };
    packitem.push(newitem);
    saveItems(packitem);
    return packitem;
}