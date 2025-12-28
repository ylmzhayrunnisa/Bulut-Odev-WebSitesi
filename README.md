# Cilt Bakım Ürünleri Web Sitesi & AWS Bulut Dağıtımı

Bu proje, HTML, CSS ve JavaScript kullanılarak geliştirilmiş statik bir e-ticaret arayüzünün (Cilt Bakım Ürünleri), **Amazon Web Services (AWS)** bulut altyapısı üzerine taşınması, güvenli hale getirilmesi ve yayına alınması sürecini kapsar.

## Proje Hakkında
Bu çalışma iki ana odak noktasına sahiptir:
1.  **Frontend Geliştirme:** Kullanıcı dostu, estetik ve responsive bir cilt bakım ürünleri satış sitesi arayüzü.
2.  **DevOps & Cloud:** Yerel ortamda çalışan projenin, gerçek bir bulut sunucusunda canlıya alınması.

---

## Kullanılan Teknolojiler

**Web Arayüzü:**
* ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) **HTML5**
* ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) **CSS3**
* ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) **JavaScript**

**Bulut & Altyapı:**
* ![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazon-aws&logoColor=white) **Amazon EC2 (t3.micro)**
* ![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=flat&logo=ubuntu&logoColor=white) **Ubuntu Server 24.04 LTS**
* ![Apache](https://img.shields.io/badge/Apache-D22128?style=flat&logo=apache&logoColor=white) **Apache HTTP Server**
* ![Git](https://img.shields.io/badge/GIT-E44C30?style=flat&logo=git&logoColor=white) **Git & GitHub**

---

## Bulut Mimarisi ve Dağıtım Süreci

Proje, AWS üzerinde güvenli ve ölçeklenebilir bir yapı üzerine kurulmuştur. Dağıtım sürecinde **CI/CD** mantığına uygun olarak kodlar GitHub üzerinden sunucuya çekilmiştir.
<img width="857" height="468" alt="image" src="https://github.com/user-attachments/assets/6be2052a-b0c8-49b5-ba5a-744907f3721a" />


### Temel Yapılandırma Adımları:
1.  **Sunucu Kurulumu:** AWS EC2 üzerinde Ubuntu 24.04 sanal sunucu ayağa kaldırıldı.
2.  **Güvenlik:** SSH (22), HTTP (80) ve HTTPS (443) portları yapılandırıldı.
3.  **Web Sunucusu:** Apache servisi kuruldu ve optimize edildi.
4.  **Deployment:** Proje dosyaları Git kullanılarak sunucuya dağıtıldı.
5.  **SSL/TLS:** Self-Signed sertifika ile veri güvenliği (HTTPS) sağlandı.

---

## Kurulum Komutları (Deployment)

Projenin canlı sunucuya alınması sırasında kullanılan temel otomasyon komutları:

```bash
# 1. Sistem ve Paket Güncellemesi
sudo apt update
sudo apt install apache2 -y

# 2. Projenin GitHub'dan Çekilmesi
cd /var/www/html
sudo rm index.html
sudo git clone [https://github.com/ylmzhayrunnisa/Bulut-Odev-WebSitesi.git](https://github.com/ylmzhayrunnisa/Bulut-Odev-WebSitesi.git)
sudo mv Bulut-Odev-WebSitesi/* .

# 3. SSL (HTTPS) Aktivasyonu
sudo a2enmod ssl
sudo a2ensite default-ssl
sudo systemctl restart apache2
