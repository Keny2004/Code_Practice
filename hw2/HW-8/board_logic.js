/*📡 API 規格 (Spec)
URL: https://web-and-algo-prac-api.vercel.app/api/messages
Method: GET
Header: Content-Type: application/json
Body: {}*/

/**
 * 從 API 取得留言，篩選 2024 年並「由新到舊」排序
 * @param {string} apiUrl - API 的網址，已在demo_board.html中被傳入
 */
async function renderMessages(apiUrl) {
    // 1.利用fetch向apiURL獲取資料
    // 2.篩選出年份為2024年的資料
    // 3.根據時間大小排序資料
    // 4.將資料依下方模板規範渲染至message-board容器中
    
}