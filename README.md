# VisuScan

VisuScan, **Gemini API** destekli yapay zekâ kullanarak görsel tarama ve yorumlama işlemleri gerçekleştiren, tam kapsamlı (full-stack) bir web uygulamasıdır.

---

## Özellikler
- Gemini API ile yapay zekâ destekli görsel analiz  
- Modern ve responsive kullanıcı arayüzü  
- Görsel verileri işleyen Python tabanlı backend API  
- Nginx reverse proxy ile Docker tabanlı mimari  
- Ölçeklenebilir ve temiz full-stack yapı  

---

## Teknoloji Yığını
- **Frontend:** Vue.js, TypeScript  
- **Backend:** Python  
- **Yapay Zekâ:** Google Gemini API  
- **Altyapı:** Docker, Docker Compose, Nginx  

---

## Proje Yapısı
```text
VisuScan/
├── frontend/
│   ├── src/
│   └── package.json
├── backend/
│   ├── app/
│   └── requirements.txt
├── docker/
│   └── nginx/
├── docker-compose.yml
└── README.md
```

---

## Gereksinimler (Prerequisites)
Node.js (LTS sürümü önerilir)
Python 3.x
Docker ve Docker Compose
Gemini API anahtarı

---

## Ortam Değişkenleri (Environment Variables)
Backend dizini altında bir .env dosyası oluşturun ve aşağıdaki değişkeni ekleyin:
```bash
GEMINI_API_KEY=your_gemini_api_key_here
```
---

## Docker ile Çalıştırma (Önerilen)
Proje ana dizininde aşağıdaki komutu çalıştırın:
```bash
docker compose up --build
```
Container’ları durdurmak için:
```bash
docker compose down --build
```

---

### Docker Olmadan Lokal Çalıştırma

Backend
```bash
cd backend
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
python main.py
```
Frontend
```bash
cd frontend
bun install
bun run dev
```

---

## Nasıl Çalışır?
Kullanıcı, Vue.js tabanlı arayüz üzerinden görsel girdiyi sisteme iletir.
Frontend, isteği Python tabanlı backend API’ye gönderir.
Backend, gelen veriyi Gemini API kullanarak yapay zekâ ile analiz eder.
Analiz sonucu frontend’e geri döndürülür ve kullanıcıya görsel olarak sunulur.


## Sorun Giderme
.env dosyasında GEMINI_API_KEY değişkeninin doğru tanımlandığından emin olun.
Frontend backend’e erişemiyorsa CORS ve API URL ayarlarını kontrol edin.
Docker kaynaklı sorunlarda container loglarını ve Nginx yapılandırmasını inceleyin.


