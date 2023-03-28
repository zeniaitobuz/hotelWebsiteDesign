
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  async function getDynamicImg() {
    const response = await fetch(`http://localhost:200/`)
      .then(function (res) {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
      if (response.error) {
        alert(response.error.message);
      } else {
        console.log(response.portrait);
      document.getElementById("top-img").style.backgroundImage = `url(${response.topBanner})`;
      document.getElementById("portrait-image").src = response.portrait;
      document.getElementById("hotel-image").src= response.hotel;
      document.getElementById("landscape-image").src= response.landscape;
      }
  
  
    //   document.getElementById("feels-like").innerHTML =
    //     "Feels like " + response.weatherDatabase[0].feelsLike + "°";
    //   document.getElementById("temperature").innerHTML =
    //     response.weatherDatabase[0].tempC + "°";
    }
  
  
//   document.addEventListener("change", (e) => {
//     let loc = document.getElementById("place-select").value;
//     if (loc == null || loc == "") {
//       document.getElementById("temperature").innerHTML = "0°";
//       document.getElementById("feels-like").innerHTML =
//         "Feels like " + response.weatherDatabase[0].feelsLike + "°";
//     } else {
      getDynamicImg();
//     }
//   });
  
//   let select = document.getElementById("place-select");
  
//   let elmts = [
//     "Kolkata",
//     "London",
//     "Norway",
//     "Mumbai",
//     "Chennai",
//     "Paris",
//     "Amsterdam",
//     "Bangalore",
//     "Tripura",
//     "Agra",
//     "Gujarat",
//     "Hyderabad",
//   ];
  
//   for (let i = 0; i < elmts.length; i++) {
//     let optn = elmts[i];
//     let el = document.createElement("option");
//     el.textContent = optn;
//     el.value = optn;
//     select.appendChild(el);
//   }
  