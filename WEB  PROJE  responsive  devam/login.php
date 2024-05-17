
<!DOCTYPE html>
<html lang="tr"> 
    <head>        
        <title> İlgi alanlarım </title>   
          <link rel="stylesheet" href="styl.css">
          <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'> <!--  yazı sitili -->
           


         <!-- link href ile bootsrap dahil ettik  -->
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"> 
         
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <meta http-equiv="X-UA-Compatible" content="ie=edge">
         
          </head>

    <body>
        
        <!-- nav kullanarak direk en üste konumlancak onun için uğraşmıcam -->
       <!-- Menu tasarımıız -->
       <nav>
        <div class="nav-logo">Hoş Geldiniz</div>
        <ul class="nav-links">  <!-- ul yi nav links classına atadım  -->
          <li><a href="1-Hakkında Sayfa1.html">Hakkımda</a></li>
          <li><a href="2-Sehrim Sayfa2.html">Sehrim</a></li>
          <li><a href="3-Mirasımız Sayfa3.html">Mirasımız</a></li>
          <li><a href="4-Login Sayfa4.html">Login</a></li>
          <li><a href="5-İletişimSayfa5.html">İletişim</a></li>
          <li><a href="6-Özgeçmişsayfa6.html">Öz Geçmiş</a></li>
          <li><a href="7- İlgialanlarım.html">İlgi alanalarım </a></li>


        </ul>
        <div class="burger">  <!-- menuyü açıp kapatmak için burger oluştururuz  -->
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </nav>
      <!-- Menu tasarımıız bitiş  -->

      <div class="boşluk"></div>
      <div class="boşlukkısa"></div>

      <div class="container" id="logincon">

      <?php
        $email = "umut.vural@ogr.sakarya.edu.tr";
        $sifre = "b231210081";

        $kullanici_email = $_POST["email"];
        $kullanici_sifre = $_POST["password"];

        if ($kullanici_email == $email && $kullanici_sifre == $sifre) {
        echo "Giriş başarılı Hoşgeldiniz b231210081 Umut Arda Vural ! Ana sayfaya yönlendiriliyorsunuz. Lütfen <a href='index.html'>buraya tıklayarak</a> devam edin.";
        } else if ($kullanici_email == $email  && $kullanici_sifre != $sifre) {
             echo " Şifre yanlış! Lütfen tekrar deneyin veya <a href='4-Login Sayfa4.html'>buraya tıklayarak</a> giriş yapın.";
              }
        else if ($kullanici_email != $email  && $kullanici_sifre == $sifre) {
         echo " Eposta yanlış! Lütfen tekrar deneyin veya <a href='4-Login Sayfa4.html'>buraya tıklayarak</a> giriş yapın.";
        }   
        else {
         echo " Eposta ve Şifre yanlış! Lütfen tekrar deneyin veya <a href='4-Login Sayfa4.html'>buraya tıklayarak</a> giriş yapın.";
     }
    ?>
      </div>




      <div class="boşlukkısa"></div>

      <div class="boşlukkısa"> </div>
      <div class="boşlukkısa"></div>
 

      <!-- sayfanın altındaki kalın şerit için -->
      <div class="container-fluid  p-5 mt-5"     style="background-color: gray; text-align: center; color: aliceblue;">UmutArdaVural  &copy; 2024  </div>

        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
        <script src="jsmenuiçin.js" charset="utf-8"></script>       <!-- Menu tasarımının js kodlarını aktif ediyoruz -->

    </body>

</html>