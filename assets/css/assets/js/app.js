// ======================= DATABASE TANAMAN & HAMA =======================
const databaseTanaman = [
    { nama: "Padi", hamaPenyakit: ["Wereng coklat", "Penggerek batang", "Tungro", "Hawar daun", "Ulat grayak"] },
    { nama: "Jagung", hamaPenyakit: ["Ulat grayak", "Penggerek batang jagung", "Bulu babi", "Hawar daun", "Busuk tongkol"] },
    { nama: "Cabai", hamaPenyakit: ["Antraknosa", "Kutu daun", "Thrips", "Virus kuning", "Busuk buah"] },
    { nama: "Tomat", hamaPenyakit: ["Antraknosa", "Kutu kebul", "Layu bakteri", "Bercak daun", "Ulat buah"] },
    { nama: "Bawang Merah", hamaPenyakit: ["Bercak ungu (Alternaria)", "Ulat bawang", "Tepung", "Busuk umbi"] },
    { nama: "Kentang", hamaPenyakit: ["Hawar daun (Phytophthora)", "Kutu daun", "Penggerek umbi", "Virus"] },
    { nama: "Kedelai", hamaPenyakit: ["Ulat grayak", "Penggerek polong", "Karat daun", "Bercak daun"] },
    { nama: "Tebu", hamaPenyakit: ["Penggerek batang", "Ularat", "Luka api", "Hawar merah"] },
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
    "Kutu daun": "Decis 0.8 ml/L atau Confidor 0.5 ml/L. Semprot merata.",
    "Thrips": "Decis atau Confidor. Ulangi 5-7 hari.",
    "Virus kuning": "Kendalikan vektor (kutu kebul) dengan Decis. Cabut tanaman sakit.",
    "Busuk buah": "Fungisida Antracol 2 ml/L. Kurangi kelembaban.",
    "Bercak ungu (Alternaria)": "Score 0.6 ml/L atau Dithane. Rotasi tanaman.",
    "Karat daun": "Score atau Amistar Top 1 ml/L.",
    "CVPD (Huanglongbing)": "Tidak ada obat. Potong dan bakar tanaman terserang. Kontrol vektor (kutu loncat) dengan Confidor.",
    "Ganoderma": "Belum ada fungisida efektif. Sanitasi lahan, aplikasi Trichoderma.",
    "Default": "Konsultasikan dengan penyuluh setempat. Pastikan identifikasi tepat."
};

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

// Kamera
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
        opt.dataset.dosis = p.dosis_ml_per_liter;
        opt.dataset.target = p.target;
        selectObat.appendChild(opt);
    });
    if (prev !== 'custom' && filtered.some(p => p.id === prev)) {
        selectObat.value = prev;
        selectObat.dispatchEvent(new Event('change'));
    } else {
        inputDosis.value = '';
        infoTargetObat.innerHTML = "💡 Pilih pestisida untuk rekomendasi dosis.";
    }
}

function onTanamanChange() {
    const tanaman = selectTanaman.value;
    if (!tanaman) {
        panelHama.style.display = 'none';
        updatePestisidaDropdown(null);
        return;
    }
    const obj = databaseTanaman.find(t => t.nama === tanaman);
    if (obj) {
        daftarHamaDiv.innerHTML = obj.hamaPenyakit.map(h => `<span class="hama-tag" data-penyakit="${h}">🐛 ${h}</span>`).join('');
        panelHama.style.display = 'block';
        document.querySelectorAll('.hama-tag').forEach(tag => {
            tag.addEventListener('click', (e) => {
                let penyakit = tag.dataset.penyakit;
                tampilkanSolusiPenyakit(penyakit);
            });
        });
        updatePestisidaDropdown(tanaman);
    } else {
        panelHama.style.display = 'none';
        updatePestisidaDropdown(null);
    }
}

function onPestisidaChange() {
    const id = selectObat.value;
    if (id === 'custom') {
        infoTargetObat.innerHTML = "💡 Mode manual. Isi dosis sendiri.";
        return;
    }
    const p = databasePestisida.find(o => o.id === id);
    if (p) {
        inputDosis.value = p.dosis_ml_per_liter;
        infoTargetObat.innerHTML = `🎯 Target: ${p.target}<br><span class="badge">${p.jenis}</span> Dosis rekomendasi: ${p.dosis_ml_per_liter} ml/L`;
    }
    hitungSemua();
}

function hitungSemua() {
    let dosis = parseFloat(inputDosis.value);
    let tangki = parseFloat(inputTangki.value);
    let volTutup = parseFloat(inputVolTutup.value);
    
    if (isNaN(dosis) || dosis <= 0) dosis = 0;
    if (isNaN(tangki) || tangki <= 0) tangki = 0;
    if (isNaN(volTutup) || volTutup <= 0) volTutup = 12.5;
    
    let perTangkiMl = dosis * tangki;
    let luas = parseFloat(luasInput.value);
    let satuan = satuanLuas.value;
    let volPerHaVal = parseFloat(volPerHa.value);
    
    if (isNaN(volPerHaVal) || volPerHaVal <= 0) volPerHaVal = 400;
    
    let luasHa = 0;
    if (!isNaN(luas) && luas > 0) {
        if (satuan === 'm2') luasHa = luas / 10000;
        else if (satuan === 'are') luasHa = luas / 100;
        else luasHa = luas;
    }
    
    let totalKebutuhanMl = luasHa * volPerHaVal * dosis;
    let jumlahTangki = luasHa > 0 ? Math.ceil(totalKebutuhanMl / perTangkiMl) : 0;
    
    if (isNaN(totalKebutuhanMl)) totalKebutuhanMl = 0;
    
    hasilLahanTotal.innerText = totalKebutuhanMl.toFixed(1) + " ml";
    hasilJumlahTangki.innerText = jumlahTangki + " tangki";
    
    let jumlahTutupPerTangki = perTangkiMl / volTutup;
    let infoTambahan = document.getElementById('infoPerTangki');
    
    if (!infoTambahan) {
        let div = document.createElement('div');
        div.id = 'infoPerTangki';
        div.style.marginTop = '10px';
        div.style.fontSize = '0.8rem';
        document.querySelector('#hasilLahan').appendChild(div);
        infoTambahan = div;
    }
    infoTambahan.innerHTML = `📌 Per tangki: ${perTangkiMl.toFixed(1)} ml ≈ ${jumlahTutupPerTangki.toFixed(1)} tutup (kalibrasi ${volTutup} ml/tutup)`;
}

function tampilkanSolusiPenyakit(penyakit) {
    let solusi = solusiPenyakit[penyakit] || solusiPenyakit["Default"];
    teksRekomendasi.innerHTML = `<strong>${penyakit}</strong><br>${solusi}<br>💡 Rekomendasi pestisida: cek daftar pestisida di atas.`;
    rekomendasiDiv.style.display = 'block';
}

async function startCamera() {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
    }
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        hasilFotoDiv.innerHTML = "Fitur kamera tidak didukung di browser ini.";
        return;
    }
    try {
        stream = await navigator.mediaDevices.getUserMedia({ 
            video: { facingMode: "environment" } 
        });
        video.srcObject = stream;
    } catch (err) {
        hasilFotoDiv.innerHTML = "Gagal akses kamera. Pastikan izin kamera diberikan.";
    }
}

function capturePhoto() {
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL('image/png');
    hasilFotoDiv.innerHTML = `<img src="${imageData}" style="width:100%; border-radius:16px; margin-top:8px;"><br><small>Foto terekam. Pilih penyakit dari daftar hama di atas untuk solusi.</small>`;
}

btnAmbil.addEventListener('click', capturePhoto);
btnReset.addEventListener('click', () => {
    startCamera();
    hasilFotoDiv.innerHTML = "";
    rekomendasiDiv.style.display = 'none';
});

selectTanaman.addEventListener('change', onTanamanChange);
selectObat.addEventListener('change', onPestisidaChange);
btnHitung.addEventListener('click', hitungSemua);
luasInput.addEventListener('input', hitungSemua);
satuanLuas.addEventListener('change', hitungSemua);
volPerHa.addEventListener('input', hitungSemua);
inputDosis.addEventListener('input', hitungSemua);
inputTangki.addEventListener('input', hitungSemua);
inputVolTutup.addEventListener('input', hitungSemua);

function init() {
    startCamera();
    updatePestisidaDropdown(null);
    panelHama.style.display = 'none';
    hitungSemua();
}
init();
