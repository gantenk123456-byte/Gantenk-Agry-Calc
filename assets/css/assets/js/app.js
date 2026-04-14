// ======================= DATABASE TANAMAN & HAMA =======================
const databaseTanaman = [
    { nama: "Padi", hamaPenyakit: ["Wereng coklat", "Penggerek batang", "Tungro", "Hawar daun", "Ulat grayak"] },
    { nama: "Jagung", hamaPenyakit: ["Ulat grayak", "Penggerek batang jagung", "Bulu babi", "Hawar daun", "Busuk tongkol"] },
    { nama: "Cabai", hamaPenyakit: ["Antraknosa", "Kutu daun", "Thrips", "Virus kuning", "Busuk buah"] },
    { nama: "Tomat", hamaPenyakit: ["Antraknosa", "Kutu kebul", "Layu bakteri", "Bercak daun", "Ulat buah"] },
    { nama: "Bawang Merah", hamaPenyakit: ["Bercak ungu (Alternaria)", "Ulat bawang", "Tepung", "Busuk umbi"] },
    { nama: "Bawang Putih", hamaPenyakit: ["Bercak ungu", "Busuk putih (Sclerotium)", "Thrips", "Layu Fusarium", "Ulat grayak"] },
    { nama: "Kentang", hamaPenyakit: ["Hawar daun (Phytophthora)", "Kutu daun", "Penggerek umbi", "Virus"] },
    { nama: "Kedelai", hamaPenyakit: ["Ulat grayak", "Penggerek polong", "Karat daun", "Bercak daun"] },
    { nama: "Kelapa Sawit", hamaPenyakit: ["Ulat kantong", "Kumbang tanduk", "Busuk pangkal batang", "Ganoderma"] },
    { nama: "Kopi", hamaPenyakit: ["Penggerek buah kopi (PBKo)", "Karat daun", "Bubuk buah", "Nematoda"] },
    { nama: "Kakao", hamaPenyakit: ["Busuk buah (Phytophthora)", "Penggerek buah", "Kutu loncat", "Vaskular streak"] },
    { nama: "Jeruk", hamaPenyakit: ["CVPD (Huanglongbing)", "Kutu daun", "Penggerek daun", "Embun jelaga"] }
];

const solusiPenyakit = {
    "Antraknosa": "Gunakan fungisida berbahan aktif Mancozeb (Dithane) atau Tembaga hidroksida. Dosis 2-2.5 ml/L. Buang buah terserang.",
    "Wereng coklat": "Insektisida berbahan aktif Pymetrozine (Confidor) atau BPMC. Dosis 0.5-1 ml/L. Jaga air tergenang.",
    "Penggerek batang": "Curacron atau Regent 0.4 ml/L. Semprotkan pada saat telur menetas.",
    "Hawar daun": "Amistar Top atau Dithane 2.5 ml/L. Hindari kelembaban tinggi.",
    "Ulat grayak": "Curacron 1.5 ml/L atau Decis 0.8 ml/L. Lakukan di pagi/sore hari.",
    "Bercak ungu": "Gunakan Score 0.6 ml/L atau Antracol 2 ml/L. Perbaiki drainase lahan agar tidak lembab.",
    "Busuk putih (Sclerotium)": "Berikan Trichoderma pada tanah saat olah lahan. Cabut tanaman yang busuk agar tidak menular.",
    "Layu Fusarium": "Pastikan pH tanah netral (6-7) dengan pemberian kapur dolomit. Gunakan fungisida sistemik.",
    "Kutu daun": "Decis 0.8 ml/L atau Confidor 0.5 ml/L.",
    "Default": "Konsultasikan dengan penyuluh setempat. Pastikan identifikasi tepat."
};

// ======================= DATABASE DIAGNOSA HARA (KONDISI TANAH) =======================
const diagnosaHara = [
    { gejala: "Daun bawah kuning, batang pendek", diagnosa: "Kurang Nitrogen (N)", solusi: "Berikan pupuk Urea atau ZA." },
    { gejala: "Pinggiran daun coklat seperti terbakar", diagnosa: "Kurang Kalium (K)", solusi: "Berikan pupuk KCL atau NPK." },
    { gejala: "Warna daun ungu tua/kemerahan", diagnosa: "Kurang Fosfor (P)", solusi: "Berikan pupuk SP-36." },
    { gejala: "Urat daun hijau tapi daun menguning", diagnosa: "Kurang Magnesium (Mg)", solusi: "Berikan Dolomit/Kieserit." }
];

const databasePestisida = [
    { id: "antracol", nama: "Antracol 70 WP", jenis: "Fungisida", dosis_ml_per_liter: 2.0, target: "Antraknosa, bercak daun, busuk buah" },
    { id: "dithane", nama: "Dithane M-45", jenis: "Fungisida", dosis_ml_per_liter: 2.5, target: "Hawar daun, karat daun, embun tepung" },
    { id: "curacron", nama: "Curacron 500 EC", jenis: "Insektisida", dosis_ml_per_liter: 1.5, target: "Ulat grayak, penggerek batang" },
    { id: "decis", nama: "Decis 25 EC", jenis: "Insektisida", dosis_ml_per_liter: 0.8, target: "Kutu daun, thrips, kepik" },
    { id: "score", nama: "Score 250 EC", jenis: "Fungisida", dosis_ml_per_liter: 0.6, target: "Embun tepung, karat daun, bercak ungu" },
    { id: "confidor", nama: "Confidor 200 SL", jenis: "Insektisida", dosis_ml_per_liter: 0.5, target: "Wereng, kutu putih, thrips" },
    { id: "amistar", nama: "Amistar Top", jenis: "Fungisida", dosis_ml_per_liter: 1.0, target: "Hawar daun, embun tepung, antraknosa" },
    { id: "regent", nama: "Regent 50 SC", jenis: "Insektisida", dosis_ml_per_liter: 0.4, target: "Wereng, penggerek batang" }
];

// DOM elements
const selectTanaman = document.getElementById('pilihTanaman');
const panelHama = document.getElementById('panelHama');
const daftarHamaDiv = document.getElementById('daftarHama');
const selectObat = document.getElementById('pilihObat');
const infoTargetObat = document.getElementById('infoTargetObat');
const inputDosis = document.getElementById('dosis');
const inputTangki = document.getElementById('tangki');
const inputVolTutup = document.getElementById('volTutup');
const btnHitung = document.getElementById('btnHitung');
const hasilLahanTotal = document.getElementById('totalKebutuhan');
const hasilJumlahTangki = document.getElementById('jumlahTangki');
const luasInput = document.getElementById('luas');
const satuanLuas = document.getElementById('satuanLuas');
const volPerHa = document.getElementById('volPerHa');

// Kamera & Rekomendasi
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const btnAmbil = document.getElementById('btnAmbilFoto');
const btnReset = document.getElementById('btnResetKamera');
const hasilFotoDiv = document.getElementById('hasilFoto');
const rekomendasiDiv = document.getElementById('rekomendasiPenyakit');
const teksRekomendasi = document.getElementById('teksRekomendasi');

let stream = null;

// Populate tanaman
databaseTanaman.forEach(t => {
    let opt = document.createElement('option');
    opt.value = t.nama;
    opt.textContent = t.nama;
    selectTanaman.appendChild(opt);
});

// Logic Relevansi
function isRelevan(pestisida, tanamanNama) {
    const tanaman = databaseTanaman.find(t => t.nama === tanamanNama);
    if (!tanaman) return true;
    const hamaList = tanaman.hamaPenyakit.map(h => h.toLowerCase());
    const target = pestisida.target.toLowerCase();
    return hamaList.some(h => target.includes(h) || (h.includes("ulat") && target.includes("ulat")));
}

function updatePestisidaDropdown(tanamanNama) {
    let prev = selectObat.value;
    selectObat.innerHTML = '<option value="custom">-- Pilih pestisida (relevan) --</option>';
    let filtered = databasePestisida;
    if (tanamanNama) filtered = databasePestisida.filter(p => isRelevan(p, tanamanNama));
    filtered.forEach(p => {
        let opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = `${p.nama} (${p.jenis}) - ${p.dosis_ml_per_liter} ml/L`;
        selectObat.appendChild(opt);
    });
    if (prev !== 'custom' && filtered.some(p => p.id === prev)) {
        selectObat.value = prev;
    } else {
        inputDosis.value = '';
        infoTargetObat.innerHTML = "💡 Pilih pestisida untuk rekomendasi dosis.";
    }
}

// Event Handlers
function onTanamanChange() {
    const tanaman = selectTanaman.value;
    if (!tanaman) {
        panelHama.style.display = 'none';
        updatePestisidaDropdown(null);
        return;
    }
    const obj = databaseTanaman.find(t => t.nama === tanaman);
    if (obj) {
        // Tampilkan Hama + Tombol Diagnosa Hara
        let haraHtml = `<div style="margin-top:10px; border-top:1px dashed #ccc; padding-top:10px;"><small>Atau cek gejala tanah/hara:</small><br>`;
        haraHtml += diagnosaHara.map(d => `<span class="hara-tag" onclick="tampilkanSolusiHara('${d.diagnosa}')">🌱 ${d.gejala}</span>`).join('') + `</div>`;
        
        daftarHamaDiv.innerHTML = obj.hamaPenyakit.map(h => `<span class="hama-tag" onclick="tampilkanSolusiPenyakit('${h}')">🐛 ${h}</span>`).join('') + haraHtml;
        panelHama.style.display = 'block';
        updatePestisidaDropdown(tanaman);
    }
}

function onPestisidaChange() {
    const id = selectObat.value;
    if (id === 'custom') {
        infoTargetObat.innerHTML = "💡 Mode manual. Isi dosis sendiri.";
    } else {
        const p = databasePestisida.find(o => o.id === id);
        if (p) {
            inputDosis.value = p.dosis_ml_per_liter;
            infoTargetObat.innerHTML = `🎯 Target: ${p.target}<br><span class="badge">${p.jenis}</span> Rekomendasi: ${p.dosis_ml_per_liter} ml/L`;
        }
    }
    hitungSemua();
}

// FUNGSI UTAMA KALKULASI & VALIDASI
function hitungSemua() {
    let dosis = parseFloat(inputDosis.value) || 0;
    let tangki = parseFloat(inputTangki.value) || 0;
    let volTutup = parseFloat(inputVolTutup.value) || 12.5;
    let luas = parseFloat(luasInput.value) || 0;
    let satuan = satuanLuas.value;
    let volPerHaVal = parseFloat(volPerHa.value) || 400;

    // --- LOGIKA PERINGATAN OVERDOSIS ---
    let warningDiv = document.getElementById('warningDosis');
    if (!warningDiv) {
        warningDiv = document.createElement('div');
        warningDiv.id = 'warningDosis';
        inputDosis.parentNode.insertBefore(warningDiv, inputDosis.nextSibling);
    }

    if (dosis > 5) {
        warningDiv.innerHTML = `<div style="color:red; font-weight:bold; margin-top:5px; padding:8px; border:1px solid red; border-radius:8px; background:#fff0f0;">⚠️ Peringatan: Dosis > 5ml/L berisiko membakar daun (Plasmolisis)!</div>`;
    } else {
        warningDiv.innerHTML = "";
    }

    // Perhitungan Lahan
    let luasHa = 0;
    if (luas > 0) {
        if (satuan === 'm2') luasHa = luas / 10000;
        else if (satuan === 'are') luasHa = luas / 100;
        else luasHa = luas;
    }

    let perTangkiMl = dosis * tangki;
    let totalKebutuhanMl = luasHa * volPerHaVal * dosis;
    let jumlahTangki = totalKebutuhanMl > 0 ? Math.ceil(totalKebutuhanMl / (perTangkiMl || 1)) : 0;

    // Update UI
    hasilLahanTotal.innerText = totalKebutuhanMl.toFixed(1) + " ml";
    hasilJumlahTangki.innerText = jumlahTangki + " tangki";

    let infoTambahan = document.getElementById('infoPerTangki');
    if (!infoTambahan) {
        infoTambahan = document.createElement('div');
        infoTambahan.id = 'infoPerTangki';
        document.querySelector('#hasilLahan').appendChild(infoTambahan);
    }
    infoTambahan.innerHTML = `📌 Per tangki: ${perTangkiMl.toFixed(1)} ml ≈ ${(perTangkiMl / volTutup).toFixed(1)} tutup (kalibrasi ${volTutup} ml/tutup)`;
}

// Fungsi Display Solusi
window.tampilkanSolusiPenyakit = function(penyakit) {
    let solusi = solusiPenyakit[penyakit] || solusiPenyakit["Default"];
    teksRekomendasi.innerHTML = `<div style="color:#2c3e50"><strong>Masalah: ${penyakit}</strong><br>${solusi}</div>`;
    rekomendasiDiv.style.display = 'block';
};

window.tampilkanSolusiHara = function(diag) {
    const data = diagnosaHara.find(d => d.diagnosa === diag);
    teksRekomendasi.innerHTML = `<div style="color:#d35400"><strong>Kondisi: ${data.diagnosa}</strong><br>Saran: ${data.solusi}</div>`;
    rekomendasiDiv.style.display = 'block';
};

// Kamera Functions
async function startCamera() {
    if (stream) stream.getTracks().forEach(track => track.stop());
    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        video.srcObject = stream;
    } catch (err) {
        hasilFotoDiv.innerHTML = "<small>Kamera tidak aktif/tidak diizinkan.</small>";
    }
}

function capturePhoto() {
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    hasilFotoDiv.innerHTML = `<img src="${canvas.toDataURL('image/png')}" style="width:100%; border-radius:12px; margin-top:10px;"><br><small>Foto tersimpan. Klik hama/gejala di atas untuk diagnosa.</small>`;
}

// Listeners
btnAmbil.addEventListener('click', capturePhoto);
btnReset.addEventListener('click', () => { startCamera(); hasilFotoDiv.innerHTML = ""; rekomendasiDiv.style.display = 'none'; });
selectTanaman.addEventListener('change', onTanamanChange);
selectObat.addEventListener('change', onPestisidaChange);
[luasInput, satuanLuas, volPerHa, inputDosis, inputTangki, inputVolTutup].forEach(el => {
    el.addEventListener('input', hitungSemua);
});

// Init
function init() {
    startCamera();
    updatePestisidaDropdown(null);
    panelHama.style.display = 'none';
    hitungSemua();
}
init();
