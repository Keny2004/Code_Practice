/**
 * 1. 驗證帳號 (True Name)
 * 規則：只允許英數字 (Alphanumeric)
 * @param {string} name 
 * @returns {boolean}
 */
function validateUsername(name) {
  // TODO: 使用 Regex 檢查
  let regexuser = /^[a-zA-Z0-9]+$/;
  //console.log(regexuser.test(name));
  return regexuser.test(name);
}

/**
 * 2. 驗證密碼 (Soul Signature)
 * 規則：長度 > 8, 含大寫, 含特殊符號 (!@#$%^&*)
 * @param {string} pwd 
 * @returns {boolean}
 */
function validatePassword(pwd) {
  // TODO: 使用多重條件檢查
  let regexpassword1 = pwd.length > 8;
  let regexpassword2 = /[A-Z]/;
  let regexpassword3 = /[!@#$%^&*]/;
  console.log(regexpassword1, regexpassword2.test(pwd), regexpassword3.test(pwd));
  return regexpassword1 && regexpassword2.test(pwd) && regexpassword3.test(pwd);
}
