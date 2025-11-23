<template>
  <v-main class="bg-grey-lighten-5">
    <section class="text-center text-indigo-darken-4">
      <v-container>
        <h1 class="text-h3 font-weight-bold mb-4">Hizmet Şartları</h1>
        <p class="text-h6 text-grey-darken-1 mx-auto" style="max-width: 700px">
          VisuScan'i kullanmadan önce lütfen bu kullanım koşullarını dikkatlice
          okuyun.
        </p>
      </v-container>
    </section>

    <section class="py-16">
      <v-container style="max-width: 900px">
        <v-card class="pa-8 pa-md-12 rounded-xl" elevation="2">
          <div class="text-caption text-grey-darken-1 mb-8">
            Son Güncelleme: 1 Ocak 2024
          </div>

          <div class="terms-content text-body-1 text-grey-darken-3">
            <h2>1. Şartların Kabulü</h2>
            <p>
              VisuScan web sitesine erişerek veya hizmetlerimizi kullanarak, bu
              Hizmet Şartları'na ("Şartlar") bağlı kalmayı kabul etmiş
              olursunuz. Bu Şartları kabul etmiyorsanız, hizmetlerimizi
              kullanmamalısınız.
            </p>

            <h2>2. Hizmetin Tanımı</h2>
            <p>
              VisuScan, kullanıcıların yüklediği görselleri analiz etmek için
              yapay zeka teknolojilerini kullanan bir web uygulamasıdır. Hizmet,
              "olduğu gibi" ve "mevcut olduğu şekilde" sunulmaktadır.
            </p>

            <h2>3. Kullanıcı Sorumlulukları</h2>
            <p>
              Hizmeti kullanırken aşağıdaki eylemlerde bulunmamayı kabul
              edersiniz:
            </p>
            <ul>
              <li>
                Yasadışı, zararlı, tehditkar, müstehcen, nefret dolu veya başka
                bir şekilde sakıncalı içerik yüklemek.
              </li>
              <li>
                Başkalarının fikri mülkiyet haklarını ihlal eden içerikler
                yüklemek.
              </li>
              <li>
                Hizmetin güvenliğini ihlal etmeye çalışmak veya sisteme zarar
                verecek virüsler, solucanlar vb. yüklemek.
              </li>
              <li>
                Yapay zeka modelini tersine mühendislik (reverse engineer)
                yapmaya çalışmak.
              </li>
            </ul>

            <h2>4. Fikri Mülkiyet</h2>
            <h3>4.1. Kullanıcı İçeriği</h3>
            <p>
              Yüklediğiniz görsellerin tüm hakları size aittir. VisuScan'e
              görselleri yükleyerek, bize yalnızca analiz hizmetini sağlamak
              amacıyla bu görselleri geçici olarak işleme lisansı vermiş
              olursunuz.
            </p>
            <h3>4.2. VisuScan İçeriği</h3>
            <p>
              Hizmetin tasarımı, kodu, logosu ve tüm yazılımları VisuScan'in
              mülkiyetindedir ve telif hakkı yasalarıyla korunmaktadır.
            </p>

            <v-alert
              type="warning"
              variant="tonal"
              class="my-8"
              icon="mdi-alert-circle-outline"
            >
              <h3 class="text-h6 font-weight-bold mb-2">
                5. Yapay Zeka Sorumluluk Reddi (Önemli)
              </h3>
              <p class="mb-0">
                VisuScan, en son yapay zeka teknolojilerini kullansa da, yapay
                zeka hatasız değildir. Analiz sonuçları her zaman %100 doğru,
                eksiksiz veya güvenilir olmayabilir. VisuScan tarafından
                sağlanan sonuçlar yalnızca bilgilendirme amaçlıdır ve tıbbi,
                hukuki, finansal veya diğer kritik kararlar için temel
                alınmamalıdır. Sonuçların doğruluğunu teyit etmek kullanıcının
                sorumluluğundadır.
              </p>
            </v-alert>

            <h2>6. Sorumluluğun Sınırlandırılması</h2>
            <p>
              Yasaların izin verdiği azami ölçüde, VisuScan, hizmetin
              kullanımından veya kullanılamamasından kaynaklanan doğrudan,
              dolaylı, arızi veya cezai zararlardan sorumlu tutulamaz.
            </p>

            <h2>7. Şartların Değiştirilmesi</h2>
            <p>
              Bu Şartları dilediğimiz zaman değiştirme hakkımızı saklı tutarız.
              Değişiklikler bu sayfada yayınlandığı anda yürürlüğe girer.
              Hizmeti kullanmaya devam etmeniz, yeni şartları kabul ettiğiniz
              anlamına gelir.
            </p>
          </div>
        </v-card>
      </v-container>
    </section>
  </v-main>
</template>

<style scoped>
.terms-content h2 {
  font-size: 1.75rem;
  font-weight: 700;
  color: rgb(var(--v-theme-grey-darken-4));
  margin-top: 2.5rem;
  margin-bottom: 1.25rem;
}

.terms-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: rgb(var(--v-theme-grey-darken-3));
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.terms-content p {
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.terms-content ul {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  line-height: 1.8;
}

.terms-content li {
  margin-bottom: 0.5rem;
}
</style>
