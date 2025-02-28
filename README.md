# React Native Movie App

Bu proje, **React Native** ile geliştirilmiş bir film keşif uygulamasıdır. Kullanıcılar, popüler filmleri görüntüleyebilir, film detaylarını inceleyebilir ve favori filmlerini kaydedebilir.

## 🚀 Özellikler
- 🎬 Popüler filmleri listeleme
- 🔍 Film detaylarını görüntüleme
- 📱 Responsive tasarım

## 🛠 Kullanılan Teknolojiler
- **React Native 0.76**
- **react-native-navigation** (Uygulama içi gezinme)
- **react-native-modals** (Özel modal pencereler)
- **react-native-vector-icons** (Özel ikonlar)
- **FontAwesome5** (Font tabanlı ikon desteği)
- **Laravel** (Backend ve veritabanı yönetimi)

## 📂 Kurulum
Projeyi çalıştırmak için aşağıdaki adımları takip edin:

### 1️⃣ Bağımlılıkları Yükleyin
```bash
npm install
```

### 2️⃣ Laravel Backend Kurulumu
#### Laravel Bağımlılıklarını Yükleme
```bash
cd backend
composer install
```

#### .env Dosyası ve Veritabanı Ayarları
`.env` dosyanızın aşağıdaki gibi olduğundan emin olun:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=movie_app
DB_USERNAME=root
DB_PASSWORD=
```
Ardından veritabanını oluşturun ve migrate işlemini gerçekleştirin:
```bash
php artisan migrate
```

### 3️⃣ Android için Derleme
```bash
npx react-native run-android
```

### 4️⃣ iOS için Derleme (Mac Kullanıcıları İçin)
```bash
cd ios
pod install
cd ..
npx react-native run-ios
```

## ⚙️ Yapılandırma
Eğer API anahtarı gerektiren bir yapılandırma varsa, `.env` dosyası oluşturup şu formatta API anahtarınızı ekleyin:

```env
API_KEY=YOUR_API_KEY_HERE
```
Ardından, bu anahtarı kullanabilmek için **react-native-dotenv** paketini kullanabilirsiniz.

## 📸 Ekran Görüntüleri

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
    <img src="https://github.com/muhammederencennetkusu/React-Native-Movie-Apps/blob/main/AppScreen/homeScreen.png?raw=true" width="250">
    <img src="https://github.com/muhammederencennetkusu/React-Native-Movie-Apps/blob/main/AppScreen/moviesDetails.png?raw=true" width="250">
    <img src="https://github.com/muhammederencennetkusu/React-Native-Movie-Apps/blob/main/AppScreen/moviesFirst.png?raw=true" width="250">
    <img src="https://github.com/muhammederencennetkusu/React-Native-Movie-Apps/blob/main/AppScreen/movieList.png?raw=true" width="250">
    <img src="https://github.com/muhammederencennetkusu/React-Native-Movie-Apps/blob/main/AppScreen/moviesSlide.png?raw=true" width="250">
    
</div>


![Movie Details](https://via.placeholder.com/400x800)

## 🎥 Uygulama Tanıtım Videosu
[![Kurulum ve Kullanım Videosu][(https://img.youtube.com/vi/P4C3GLwAUa0/maxresdefault.jpg)](https://www.youtube.com/watch?v=P4C3GLwAUa0)](https://www.youtube.com/watch?v=P4C3GLwAUa0)


## 🐛 Karşılaşılan Sorunlar ve Çözümler
**1️⃣ Gradle ve Kütüphane Uyumsuzlukları**
- Eğer Gradle ile ilgili bir hata alıyorsanız, `android/build.gradle` dosyanızı kontrol edip doğru Gradle sürümünü kullandığınızdan emin olun.

**2️⃣ Paket Uyumsuzlukları**
- Eğer kütüphanelerle ilgili uyumsuzluk yaşarsanız, tüm bağımlılıkları güncellemek için aşağıdaki komutu çalıştırabilirsiniz:
  ```bash
  npm audit fix --force
  ```

## 🤝 Katkıda Bulunma
Projeye katkıda bulunmak isterseniz, lütfen aşağıdaki adımları takip edin:
1. **Fork** yapın.
2. Yeni bir **branch** oluşturun: `git checkout -b yeni-ozellik`
3. Değişikliklerinizi yapın ve commitleyin: `git commit -m 'Yeni özellik eklendi'`
4. Değişiklikleri push edin: `git push origin yeni-ozellik`
5. Bir **Pull Request** oluşturun.

## 📄 Lisans
Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için [LICENSE](LICENSE) dosyasına bakabilirsiniz.

---
✨ **Muhammed Eren Cennetkuşu** tarafından geliştirildi. Destek olmak için ⭐ bırakmayı unutmayın!
