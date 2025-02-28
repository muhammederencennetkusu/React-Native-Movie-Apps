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

## 📂 Kurulum
Projeyi çalıştırmak için aşağıdaki adımları takip edin:

### 1️⃣ Bağımlılıkları Yükleyin
```bash
npm install
```

### 2️⃣ Android için Derleme
```bash
npx react-native run-android
```

### 3️⃣ iOS için Derleme (Mac Kullanıcıları İçin)
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
![Movies List](https://via.placeholder.com/400x800)
![Movie Details](https://via.placeholder.com/400x800)

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
