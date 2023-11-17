function showWechatQrcode() {
  var qrcodeUrl = /image/wechat_qrcode.png;  // 你的二维码图片的 URL
  var img = document.createElement('img');
  img.src = qrcodeUrl;
  img.style.width = '100%';
  img.style.height = 'auto';
  var div = document.createElement('div');
  div.appendChild(img);
  document.body.appendChild(div);
  div.style.position = 'fixed';
  div.style.top = '50%';
  div.style.left = '50%';
  div.style.transform = 'translate(-50%, -50%)';
  div.style.zIndex = '9999';
  div.onclick = function () {
    document.body.removeChild(div);
  };
}

