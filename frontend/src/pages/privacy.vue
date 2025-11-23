<template>
  <v-main class="bg-grey-lighten-5">
    <section class="text-center text-indigo-darken-4">
      <v-container>
        <h1 class="text-h3 font-weight-bold mb-4">Gizlilik Politikası</h1>
        <p class="text-h6 text-grey-darken-1 mx-auto" style="max-width: 700px">
          Verilerinizin güvenliği bizim önceliğimizdir. VisuScan'i kullanırken
          bilgilerinizin nasıl işlendiğini şeffaflıkla açıklıyoruz.
        </p>
      </v-container>
    </section>

    <section class="py-16">
      <v-container style="max-width: 900px">
        <v-card class="pa-8 pa-md-12 rounded-xl" elevation="2">
          <div class="text-caption text-grey-darken-1 mb-8">
            Son Güncelleme: 1 Ocak 2024
          </div>

          <div class="policy-content text-body-1 text-grey-darken-3">
            <h2>1. Giriş</h2>
            <p>
              VisuScan ("biz", "bizim" veya "şirket") olarak, gizliliğinize önem
              veriyoruz. Bu Gizlilik Politikası, web sitemizi (visuscan.com) ve
              yapay zeka destekli görüntü analiz hizmetlerimizi kullandığınızda
              topladığımız bilgileri, bu bilgileri nasıl kullandığımızı ve
              koruduğumuzu açıklar.
            </p>

            <h2>2. Topladığımız Bilgiler</h2>

            <h3>2.1. Yüklediğiniz Görseller (En Önemlisi)</h3>
            <p class="font-weight-bold text-indigo-darken-2">
              Hizmetimizi kullanmak için yüklediğiniz görseller, yalnızca analiz
              işlemini gerçekleştirmek amacıyla geçici olarak işlenir. Analiz
              tamamlandığı ve sonuçlar size sunulduğu anda, yüklenen görsel
              sunucularımızdan derhal ve kalıcı olarak silinir. Görsellerinizi
              asla saklamaz, depolamaz veya üçüncü taraflarla paylaşmayız.
            </p>

            <h3>2.2. Kullanım Verileri ve Çerezler</h3>
            <p>
              Hizmetimizi nasıl kullandığınıza dair standart günlük bilgileri
              (log data) toplayabiliriz. Bu; IP adresiniz, tarayıcı türünüz,
              ziyaret ettiğiniz sayfalar ve ziyaret saati gibi teknik bilgileri
              içerebilir. Bu verileri hizmetimizi iyileştirmek, güvenliği
              sağlamak ve analitik amaçlarla kullanırız.
            </p>

            <h2>3. Bilgilerinizi Nasıl Kullanıyoruz?</h2>
            <ul>
              <li>
                Yapay zeka tabanlı görüntü analizi hizmetini sağlamak ve
                sürdürmek.
              </li>
              <li>
                Hizmetimizin güvenliğini sağlamak ve kötüye kullanımı önlemek.
              </li>
              <li>Hizmetimizi analiz etmek ve geliştirmek.</li>
            </ul>

            <h2>4. Üçüncü Taraf Hizmet Sağlayıcılar</h2>
            <p>
              Görüntü analizi işlemini gerçekleştirmek için güvenilir üçüncü
              taraf yapay zeka sağlayıcılarından (örneğin; Google Gemini API)
              yararlanabiliriz. Görselleriniz, yalnızca analiz süresince bu
              sağlayıcılara şifreli olarak iletilir. Bu sağlayıcılar,
              verilerinizi kendi modellerini eğitmek için kullanmazlar.
            </p>

            <h2>5. Veri Güvenliği</h2>
            <p>
              Kişisel verilerinizi yetkisiz erişime, kullanıma veya ifşaya karşı
              korumak için endüstri standardında güvenlik önlemleri uyguluyoruz.
              Tüm veri iletimleri SSL/TLS şifrelemesi ile korunmaktadır.
            </p>

            <h2>6. İletişim</h2>
            <p>
              Bu Gizlilik Politikası hakkında herhangi bir sorunuz varsa, lütfen
              bizimle iletişime geçin:
              <br />
              E-posta: privacy@visuscan.com
            </p>
          </div>
        </v-card>
      </v-container>
    </section>
  </v-main>
</template>

<style scoped>
.policy-content h2 {
  font-size: 1.75rem;
  font-weight: 700;
  color: rgb(var(--v-theme-indigo-darken-3));
  margin-top: 2.5rem;
  margin-bottom: 1.25rem;
}

.policy-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: rgb(var(--v-theme-grey-darken-3));
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.policy-content p {
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.policy-content ul {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  line-height: 1.8;
}

.policy-content li {
  margin-bottom: 0.5rem;
}
</style>
