function upload() {
  let url = document.getElementById('url').value;
  sessionStorage.setItem("videoUrl", url);
  location.href = 'gallery.html';
}
