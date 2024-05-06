new Vue({
    el: '#app',
    data: {
      formData: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        gender: '',
        city: '',
        dob: '',
        preferred_contact: '',
        employment: '',
        message: ''
      },
      errors: {} // Doğrulama hatalarını depolamak için kullanılacak nesne
    },
    methods: {
      handleVueSubmit: function() {
        // Formu göndermeden önce doğrulama işlemlerini yap
        this.errors = {}; // Her submit işlemi öncesi hataları sıfırla
  
        // Ad alanının boş olup olmadığını kontrol et
        if (!this.formData.firstname.trim()) {
          this.errors.firstname = 'Ad alanı boş bırakılamaz';
        }
        // Soyad alanının boş olup olmadığını kontrol et
        if (!this.formData.lastname.trim()) {
          this.errors.lastname = 'Soyad alanı boş bırakılamaz';
        }
        // E-posta adresinin boş olup olmadığını ve doğru formatı içerip içermediğini kontrol et
        if (!this.formData.email.trim()) {
          this.errors.email = 'E-posta alanı boş bırakılamaz';
        } else if (!this.isValidEmail(this.formData.email)) {
          this.errors.email = 'Geçerli bir e-posta adresi giriniz';
        }
        // Telefon alanının boş olup olmadığını kontrol et
        if (!this.formData.phone.trim()) {
          this.errors.phone = 'Telefon alanı boş bırakılamaz';
        }
        // Diğer alanların kontrolünü buraya ekleyebilirsiniz
  
        // Eğer hata varsa alert ile kullanıcıyı uyar
        if (Object.keys(this.errors).length > 0) {
          alert('Form gönderilmedi. Lütfen tüm alanları doğru şekilde doldurun.');
          return false;
        }
  
        // Formu gönderme işlemi burada gerçekleştirilir
        console.log('Vue.js ile form gönderildi!');
      },
      isValidEmail: function(email) {
        // Basit bir e-posta doğrulama fonksiyonu
        // Gerçek bir e-posta doğrulama işlemi için daha gelişmiş bir yöntem kullanılmalıdır
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }
    }
  });
  