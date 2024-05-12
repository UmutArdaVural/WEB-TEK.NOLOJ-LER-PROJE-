


function HavaDurumuGetir(cityID, key) {
    return fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityID + '&lang=tr&appid=' + key)
      .then(function (resp) { return resp.json() })
      .then(function (data) {
        return data;
      });
  }

  var istanbulIlceleri = [
   "Adalar", "Arnavutköy", "Ataşehir", "Avcılar", "Bağcılar", "Bahçelievler", "Bakırköy", "Başakşehir",
    "Bayrampaşa", "Beşiktaş", "Beykoz", "Beylikdüzü", "Beyoğlu", "Büyükçekmece", "Çatalca", "Çekmeköy",
    "Esenler", "Esenyurt", "Eyüp", "Fatih", "Gaziosmanpaşa", "Güngören", "Kadıköy", "Kağıthane", "Kartal",
    "Küçükçekmece", "Maltepe", "Pendik", "Sancaktepe", "Sarıyer", "Silivri", "Sultanbeyli", "Sultangazi",
    "Şile", "Şişli", "Tuzla", "Ümraniye", "Üsküdar", "Zeytinburnu"
  ];

  var apiKey = "e4fef1062a6f7cbcd476b3ee0d92cc62"; // API anahtarı
  var havaDurumuListesiDiv = document.getElementById('havaDurumuListesi');

  HavaDurumuGetir("Istanbul", apiKey)
    .then(function(havaDurumu) {
      var celcius = Math.round(parseFloat(havaDurumu.main.temp) - 273.15);
      var aciklama = havaDurumu.weather[0].description;
      var iconURL = "http://openweathermap.org/img/w/" + havaDurumu.weather[0].icon + ".png";
      var html = "<div class='ilce'><strong>İstanbul</strong>: " + aciklama + ", Sıcaklık: " + celcius + "&deg;C <br><img src='" + iconURL + "'></div>";
      havaDurumuListesiDiv.innerHTML += html;
    })
    .catch(function(error) {
      console.error("Hava durumu bilgisi alınamadı:", error);
    });

  istanbulIlceleri.forEach(function(ilce) {
    HavaDurumuGetir(ilce + ",Istanbul", apiKey)
      .then(function(havaDurumu) {
        var celcius = Math.round(parseFloat(havaDurumu.main.temp) - 273.15);
        var aciklama = havaDurumu.weather[0].description;
        var iconURL = "http://openweathermap.org/img/w/" + havaDurumu.weather[0].icon + ".png";
        var html = "<div class='ilce'><strong>" + ilce + "</strong>: " + aciklama + ", Sıcaklık: " + celcius + "&deg;C <br><img src='" + iconURL + "'></div>";
        havaDurumuListesiDiv.innerHTML += html;
      })
      .catch(function(error) {
        console.error("Hava durumu bilgisi alınamadı:", error);
      });
  });
