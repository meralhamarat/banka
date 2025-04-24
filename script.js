document.addEventListener("DOMContentLoaded", function () {
  const girisYapLink = document.querySelector(".nav-link:nth-child(1)");
  const musteriOlLink = document.querySelector(".nav-link:nth-child(2)");
  const icerik = document.getElementById("icerik");

  girisYapLink.addEventListener("click", function (e) {
    e.preventDefault();
    icerik.innerHTML = `
        <h4 class="mb-3">Giriş Yap</h4>
        <form>
          <div class="mb-3">
            <label class="form-label">Kullanıcı Adı</label>
            <input type="text" class="form-control" placeholder="Kullanıcı adınızı girin">
          </div>
          <div class="mb-3">
            <label class="form-label">Şifre</label>
            <input type="password" class="form-control" placeholder="Şifrenizi girin">
          </div>
          <button type="submit" class="btn btn-primary">Giriş Yap</button>
        </form>
      `;
  });

  musteriOlLink.addEventListener("click", function (e) {
    e.preventDefault();
    icerik.innerHTML = `
        <h4 class="mb-3">Yeni Müşteri Kaydı</h4>
        <form>
          <div class="mb-3">
            <label class="form-label">Ad Soyad</label>
            <input type="text" class="form-control" placeholder="Adınızı Soyadınızı girin">
          </div>
          <div class="mb-3">
            <label class="form-label">E-posta</label>
            <input type="email" class="form-control" placeholder="E-posta adresiniz">
          </div>
          <div class="mb-3">
            <label class="form-label">Şifre</label>
            <input type="password" class="form-control" placeholder="Şifre belirleyin">
          </div>
          <button type="submit" class="btn btn-success">Müşteri Ol</button>
        </form>
      `;
  });
});
