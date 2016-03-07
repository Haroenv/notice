var notice = require('notice');

var noticeText = document.getElementById('noticeText');
var noticeButton = document.getElementById('noticeButton');
noticeButton.addEventListener('click',function() {
    notice(noticeText.value);
});
