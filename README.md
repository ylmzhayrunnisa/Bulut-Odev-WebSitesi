# 🌿 AWS Üzerinde Statik Web Uygulaması Dağıtımı

Bu proje, **Bulut Bilişim** dersi kapsamında hazırlanmıştır. Yerel ortamda geliştirilen statik bir web uygulamasının, endüstri standardı olan **Amazon Web Services (AWS)** bulut sağlayıcısı üzerine taşınması, yapılandırılması ve yayınlanması sürecini kapsar.

---

## 📑 İçindekiler
1. [Proje Açıklaması ve Hedefleri](#1-proje-açıklaması-ve-hedefleri)
2. [Uygulama Seçimi ve Teknolojiler](#2-uygulama-seçimi-ve-teknolojiler)
3. [Bulut Platformu Seçimi](#3-bulut-platformu-seçimi)
4. [Uygulama Mimarisi](#4-uygulama-mimarisi)
5. [Dağıtım Süreci (Deployment)](#5-dağıtım-süreci-deployment)
6. [Karşılaşılan Zorluklar ve Çözümler](#6-karşılaşılan-zorluklar-ve-çözümler)
7. [Bağlantılar](#7-bağlantılar)

---

## 1. Proje Açıklaması ve Hedefleri
Projenin temel amacı, sadece yazılım geliştirmek değil, **DevOps ve Bulut Dağıtım (Deployment)** süreçlerini deneyimlemektir.

**Proje Hedefleri:**
* Sanal sunucu (EC2) ve Linux işletim sistemi yönetimi becerilerinin kazanılması.
* Ağ güvenliği (Security Groups) ve port yönetiminin deneyimlenmesi.
* Git versiyon kontrol sistemi ile kodun canlı ortama taşınması.
* SSL/TLS protokolü ile güvenli veri iletiminin (HTTPS) sağlanması.

---

## 2. Uygulama Seçimi ve Teknolojiler
Proje kapsamında, dağıtım süreçlerine odaklanabilmek adına veritabanı bağımlılığı olmayan, **HTML, CSS ve JavaScript** ile geliştirilmiş statik bir **Cilt Bakım Ürünleri Satış Sitesi** tercih edilmiştir.

**Kullanılan Teknolojiler:**
* **Web Sunucusu:** Apache HTTP Server
* **İşletim Sistemi:** Ubuntu Server 24.04 LTS
* **Versiyon Kontrol:** Git & GitHub
* **Programlama:** HTML, CSS, JavaScript
* **Bulut Altyapısı:** AWS EC2 (t3.micro)

---

## 3. Bulut Platformu Seçimi
Uygulama dağıtımı için **Amazon Web Services (AWS)** platformu tercih edilmiştir.

**Seçim Gerekçeleri:**
* **Pazar Payı:** Endüstride en çok kullanılan ve talep gören bulut sağlayıcısı olması.
* **Maliyet Etkinliği:** **AWS Free Tier** (Ücretsiz Katman) kapsamında öğrencilere sunduğu 750 saatlik ücretsiz sunucu kullanım hakkı.
* **Dokümantasyon:** Kapsamlı eğitim kaynaklarına ve topluluk desteğine sahip olması.

---

## 4. Uygulama Mimarisi
Uygulamanın çalışma mantığı, kullanıcı erişimi ve geliştirici dağıtım süreçleri aşağıdaki şemada özetlenmiştir:

<img width="857" height="468" alt="image" src="https://github.com/user-attachments/assets/6be2052a-b0c8-49b5-ba5a-744907f3721a" />

**Bileşenler:**
* **İstemci:** Web tarayıcısı üzerinden HTTPS (Port 443) isteği gönderir.
* **Security Group:** Sadece gerekli portlara (22, 80, 443) izin veren güvenlik duvarıdır.
* **EC2 Instance:** Uygulamanın üzerinde çalıştığı Ubuntu tabanlı sanal sunucudur.

---

## 5. Dağıtım Süreci (Deployment)
Projenin canlıya alınması sırasında uygulanan adımlar ve kullanılan otomasyon komutları:

### Adım 1: Sunucu Hazırlığı
AWS konsolu üzerinden Ubuntu 24.04 LTS işletim sistemine sahip sunucu oluşturulmuş, paket listeleri güncellenmiş ve Apache kurulmuştur.
```bash
sudo apt update
sudo apt install apache2 -y

### Adım 2: Kod Dağıtımı (Git Clone)
```bash
cd /var/www/html
sudo rm index.html
sudo git clone [https://github.com/ylmzhayrunnisa/Bulut-Odev-WebSitesi.git](https://github.com/ylmzhayrunnisa/Bulut-Odev-WebSitesi.git)
sudo mv Bulut-Odev-WebSitesi/* .

### Adım 3: SSL Güvenlik Yapılandırması
```bash
sudo a2enmod ssl
sudo a2ensite default-ssl
sudo systemctl restart apache2

