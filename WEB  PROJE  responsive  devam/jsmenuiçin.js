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