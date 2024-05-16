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

      <br> <br> <br>

      <div class="container" id="iletişimcon"> 
      <?php

// Formdan gönderilen verileri al
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$gender = $_POST['gender'];
$city = $_POST['city'];
$dob = $_POST['dob'];
$preferred_contact = $_POST['preferred_contact'];
$employment = $_POST['employment'];
$message = $_POST['message'];

$önemdurumu = $_POST['önemdurumu'];
$universiteler = $_POST['universiteler'];

// Ekrana yazdır
echo "<h2>Gönderilen Bilgiler:</h2>  <br>  <br>";
echo "<p><strong>Ad:</strong> $firstname</p>  <br>";

echo "<p><strong>Soyad:</strong> $lastname</p> <br> ";

echo "<p><strong>E-posta:</strong> $email</p>  <br>";

echo "<p><strong>Telefon:</strong> $phone</p> <br>";

echo "<p><strong>Cinsiyet:</strong> $gender</p>  <br>";
echo "<p><strong>Şehir:</strong> $city</p>  <br>" ;
echo "<p><strong>Doğum Tarihi:</strong> $dob</p>  <br>";
echo "<p><strong>Tercih Edilen İletişim:</strong> $preferred_contact</p>  <br>";
echo "<p><strong>Önem durumu :</strong> $önemdurumu</p> <br>";

echo "<p><strong>Yakın Üniversite :</strong> $universiteler</p>";


echo "<p><strong>Mesaj:</strong> $message</p>";
// Eğer dosya yüklendi ise dosya bilgilerini de ekrana yazdır
if(isset($_FILES['files'])) {
    $file_count = count($_FILES['files']['name']);
    echo "<h2>Yüklenen Dosyalar:</h2>";
    for($i=0; $i<$file_count; $i++) {
        $filename = $_FILES['files']['name'][$i];
        echo "<p><strong>Dosya " . ($i+1) . ":</strong> $filename</p>";
    }
}
?>
 </div>     




      <div class="boşlukkısa"></div>

      <div class="boşlukkısa"> </div>

      <!-- sayfanın altındaki kalın şerit için -->
      <div class="container-fluid  p-5 mt-5"     style="background-color: gray; text-align: center; color: aliceblue;">UmutArdaVural  &copy; 2024  </div>

        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
        <script src="jsmenuiçin.js" charset="utf-8"></script>       <!-- Menu tasarımının js kodlarını aktif ediyoruz -->

    </body>

</html>