const navShow = () => {  // navshow fonksiyonunu oluşturduk  // 
    const burger = document.querySelector('.burger');  // burgere (sağdaki tuş ile açılan menü ) class yardımı ile erişiriz //
    const nav = document.querySelector('.nav-links'); // listeye   class yardımı ile erişiriz //
    const links = document.querySelectorAll('.nav-links li');  //list elemanlarıın hepsine ulaşırız  // 
  
    burger.addEventListener('click',()=>{ // tıklanıp tıklanmadığını kontrol ediyoruz  // 
      nav.classList.toggle('nav-active');  // her basıldığında clasımız eklenip çıkıcak // 
  
      links.forEach((link,index)=>{ //  link her idexin ismi 
        if (link.style.animation) {  //ifler  ile animasyon kontrolü yapıyoruz ikinci kez basıldığında da yapılması için ve burger menü açıkken tekrar animasyon olmaması için kontrol  // 
          link.style.animation = '';
        }else{
          link.style.animation = `linksFade 0.5s ease forwards ${index / 5 + 0.2}s`; // +2 saniye ile hepsi ayrı ayrı belirir// 
        }
      });
  
      burger.classList.toggle('close'); // kapatma için class tanımladık css ile animasyonları yapıcaz // 
    });
  }
  
  navShow();


  function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // E-posta adresinin doğruluğunu kontrol et
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(username)) {
        alert("Lütfen geçerli bir e-posta adresi girin");
        return false;
    }

    if (username == "" || password == "") {
      alert("Kullanıcı adı ve şifre alanları boş bırakılamaz!");
      return false;     
    }
    
  }




  function validatePhoneNumber(phoneNumber) {
    // Telefon numarası için bir desen oluştur
    var phonePattern = /^\d*$/;

    // Telefon numarasının desene uygun olup olmadığını kontrol et
    if (!phonePattern.test(phoneNumber)) {
        return false; // Desene uymuyorsa false döndür
    }

    return true; // Desene uyuyorsa true döndür
}

  function validateıletısım() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var city = document.getElementById("city").value;
    var dob = document.getElementById("dob").value;
    var message = document.getElementById("message").value;


    if (!validatePhoneNumber(phone)) {
      alert("Geçerli bir telefon numarası girin");
      return false;}

    // Ad ve soyadında sayı olup olmadığını kontrol et
    var namePattern = /\d/;
    if (namePattern.test(firstname) || namePattern.test(lastname)) {
        alert("Ad ve soyad alanlarında sayı bulunamaz");
        return false;
    }

    // Şehirde sayı olup olmadığını kontrol et
    if (namePattern.test(city)) {
        alert("Şehir alanında sayı bulunamaz");
        return false;
    }

    // E-posta adresinin doğruluğunu kontrol et
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Lütfen geçerli bir e-posta adresi girin");
        return false;
    }

    // Doğum tarihinin geçerli olup olmadığını ve kullanıcının 13 yaşından büyük olduğunu kontrol et
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if (age < 13) {
        alert("13 yaşından küçükler formu dolduramaz");
        return false;
    }

    if (firstname == "" || lastname == "" || email == "" || phone == "" || city == "" || dob == "" || message == "") {
        alert("Lütfen tüm alanları doldurun");
        return false;
    }
    return true;
}