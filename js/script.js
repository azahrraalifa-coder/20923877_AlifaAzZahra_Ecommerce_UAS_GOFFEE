// Tambah ke keranjang
function tambahKeranjang(namaProduk, harga) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ nama: namaProduk, harga: harga });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(namaProduk + " berhasil ditambahkan ke keranjang!");
}

// Update jumlah keranjang
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let el = document.getElementById("cart-count");
  if (el) el.innerText = cart.length;
}

// Tampilkan isi keranjang
function tampilkanKeranjang() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let container = document.getElementById("cart-items");
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = "<p>Keranjang kosong.</p>";
  } else {
    let html = "<ul>";
    cart.forEach((item, index) => {
      html += `<li>${item.nama} - Rp ${item.harga} 
        <button onclick="hapusItem(${index})">Hapus</button></li>`;
    });
    html += "</ul>";
    container.innerHTML = html;
  }
}

// Hapus item
function hapusItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  tampilkanKeranjang();
  updateCartCount();
}

// Checkout dummy
function prosesCheckout(event) {
  event.preventDefault();
  localStorage.removeItem("cart");
  updateCartCount();
  alert("Pesanan berhasil diproses! Terima kasih sudah belanja di Goffee.");
  window.location.href = "index.html";
}

// Jalankan saat halaman load
window.onload = function() {
  updateCartCount();
  tampilkanKeranjang();
};
// Tambah produk ke keranjang
function tambahKeranjang(namaProduk, harga, gambar) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ nama: namaProduk, harga: harga, gambar: gambar });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(namaProduk + " berhasil ditambahkan ke keranjang!");
}

// Tampilkan isi keranjang
function tampilkanKeranjang() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let container = document.getElementById("cart-items");
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = "<p>Keranjang kosong.</p>";
  } else {
    let html = "<table class='cart-table'><tr><th>Foto</th><th>Nama</th><th>Harga</th><th>Aksi</th></tr>";
    cart.forEach((item, index) => {
      html += `
        <tr>
          <td><img src="${item.gambar}" alt="${item.nama}" class="cart-thumb"></td>
          <td>${item.nama}</td>
          <td>Rp ${item.harga}</td>
          <td><button onclick="hapusItem(${index})">Hapus</button></td>
        </tr>`;
    });
    html += "</table>";
    container.innerHTML = html;
  }
}
