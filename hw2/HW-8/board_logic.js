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
    //<div id="message-board"></div>
    const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const data = await response.json();
    console.log(data);
    const data2024 = data.filter(message => {
        const messageDate = new Date(message.timestamp);
        console.log(messageDate);
        console.log(messageDate.getFullYear());
        return messageDate.getFullYear() === 2024;
    });
    data2024.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    console.log(data2024);
    const messageBoard = document.getElementById('message-board');
    let string = '';
    data2024.forEach(element => {
    string += `
    <div class="msg-card">
        <div class="msg-header">
            <span class="msg-author">
                <span class="icon">👤</span> 
            ${element.author} </span>
        <span class="msg-time">${element.timestamp}</span> </div>
        <p class="msg-content">${element.content} </p>
    </div>`;
    
    });
    messageBoard.innerHTML = string;
}