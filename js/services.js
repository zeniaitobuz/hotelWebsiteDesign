
async function fetchData() {
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
    try {
      
      document.getElementById("wellness-service").src =
        response.wellnessService.url;
      document.getElementById("wellness-service-heading").textContent =
        response.wellnessService.heading;
      document.getElementById("wellness-service-subheading").textContent =
        response.wellnessService.subHeading;
      document.getElementById("wellness-service-details").textContent =
        response.wellnessService.details;
      document.getElementById("gift-card-service").src =
        response.giftCardService.url;
      document.getElementById("gift-card-service-heading").textContent =
        response.giftCardService.heading;
      document.getElementById("gift-card-service-subheading").textContent =
        response.giftCardService.subHeading;
      document.getElementById("gift-card-service-details").textContent =
        response.giftCardService.details;
      document.getElementById("spa-service").src = response.spaService.url;
      document.getElementById("spa-service-heading").textContent =
        response.spaService.heading;
      document.getElementById("spa-service-subheading").textContent =
        response.spaService.subHeading;
      document.getElementById("spa-service-details").textContent =
        response.spaService.details;
      document.getElementById("adventure-service").src =
        response.adventureService.url;
      document.getElementById("adventure-service-heading").textContent =
        response.adventureService.heading;
      document.getElementById("adventure-service-subheading").textContent =
        response.adventureService.subHeading;
      document.getElementById("adventure-service-details").textContent =
        response.adventureService.details;
        document.getElementById("entertainment").src =
        response.entertainment.url;
      document.getElementById("entertainment-heading").textContent =
        response.entertainment.heading;
      document.getElementById("entertainment-subheading").textContent =
        response.entertainment.subHeading;
      document.getElementById("entertainment-details").textContent =
        response.entertainment.details;
        document.getElementById("kids").src =
        response.kids.url;
      document.getElementById("kids-heading").textContent =
        response.kids.heading;
      document.getElementById("kids-subheading").textContent =
        response.kids.subHeading;
      document.getElementById("kids-details").textContent =
        response.kids.details;
        document.getElementById("swimming-pool").src =
        response.swimmingPool.url;
      document.getElementById("swimming-pool-heading").textContent =
        response.swimmingPool.heading;
      document.getElementById("swimming-pool-subheading").textContent =
        response.swimmingPool.subHeading;
      document.getElementById("swimming-pool-details").textContent =
        response.swimmingPool.details;
        document.getElementById("restaurants").src =
        response.restaurants.url;
      document.getElementById("restaurants-heading").textContent =
        response.restaurants.heading;
      document.getElementById("restaurants-subheading").textContent =
        response.restaurants.subHeading;
      document.getElementById("restaurants-details").textContent =
        response.restaurants.details;
} catch (err) {
      console.log(err);
    }
  }
}
fetchData();

