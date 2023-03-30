const slides = document.querySelectorAll(".slide");
const form = document.getElementById("page-banner-form");
let counter = 0;

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
      document.getElementById(
        "page-banner"
      ).style.backgroundImage = `url(${response.topBanner})`;

      document.getElementById("hotel-heading").textContent =
        response.hotelDetails.heading;
      document.getElementById("hotel-details-text").textContent =
        response.hotelDetails.details;
      document.getElementById("signature-img").src = response.hotelDetails.url;

      document.getElementById("food-img").src = response.chooseHotel.foodUrl;
      document.getElementById("yoga-img").src = response.chooseHotel.yogaUrl;
      document.getElementById("loc-img").src = response.chooseHotel.locUrl;

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

      document.getElementById("room1").src = response.room1;
      document.getElementById("room2").src = response.room2;
      document.getElementById("room3").src = response.room3;

      document.getElementById("pool-img").src = response.poolImg;
      document.getElementById("forest-img").src = response.forestImg;

      document.getElementById("slide1").src =
        response.showRooms.standardRoom.url;
      document.getElementById("slide2").src = response.showRooms.suite.url;
      document.getElementById("slide3").src =
        response.showRooms.presidentSuite.url;

      document.getElementById("selena-img").src = response.reviews.selena.url;
      document.getElementById("selena-name").textContent =
        response.reviews.selena.name;
      document.getElementById("selena-date").textContent =
        response.reviews.selena.date;
      document.getElementById("selena-comment").textContent =
        response.reviews.selena.comment;
      document.getElementById("selena-review").textContent =
        response.reviews.selena.review;

      document.getElementById("esther-img").src = response.reviews.esther.url;
      document.getElementById("esther-name").textContent =
        response.reviews.esther.name;
      document.getElementById("esther-date").textContent =
        response.reviews.esther.date;
      document.getElementById("esther-comment").textContent =
        response.reviews.esther.comment;
      document.getElementById("esther-review").textContent =
        response.reviews.esther.review;

      document.getElementById("jane-img").src = response.reviews.jane.url;
      document.getElementById("jane-name").textContent =
        response.reviews.jane.name;
      document.getElementById("jane-date").textContent =
        response.reviews.jane.date;
      document.getElementById("jane-comment").textContent =
        response.reviews.jane.comment;
      document.getElementById("jane-review").textContent =
        response.reviews.jane.review;

      document.getElementById("trip-img-1").src = response.tripImg;
      document.getElementById("trip-img-2").src = response.tripImg;
      document.getElementById("trip-img-3").src = response.tripImg;

      document.getElementById("travel-1").src = response.travelImg1;
      document.getElementById("travel-2").src = response.travelImg2;
      document.getElementById("travel-3").src = response.travelImg3;

      document.getElementById(
        "services-img"
      ).style.backgroundImage = `url(${response.helloImg})`;
    } catch (err) {
      console.log(err);
    }
  }
}
fetchData();

async function changedata() {
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
    if (counter === 0) {
      document.getElementById("show-room-heading").textContent =
        response.showRooms.standardRoom.heading;
      document.getElementById("show-room-price").textContent =
        response.showRooms.standardRoom.price;
      document.getElementById("show-room-details").textContent =
        response.showRooms.standardRoom.details;
      document.getElementById("bed-size").textContent =
        response.showRooms.standardRoom.bedSize;
      document.getElementById("capacity").textContent =
        response.showRooms.standardRoom.capacity;
      document.getElementById("room-size").textContent =
        response.showRooms.standardRoom.roomSize;
      document.getElementById("hotel-view").textContent =
        response.showRooms.standardRoom.hotelView;
    } else if (counter === 1) {
      document.getElementById("show-room-heading").textContent =
        response.showRooms.suite.heading;
      document.getElementById("show-room-price").textContent =
        response.showRooms.suite.price;
      document.getElementById("show-room-details").textContent =
        response.showRooms.suite.details;
      document.getElementById("bed-size").textContent =
        response.showRooms.suite.bedSize;
      document.getElementById("capacity").textContent =
        response.showRooms.suite.capacity;
      document.getElementById("room-size").textContent =
        response.showRooms.suite.roomSize;
      document.getElementById("hotel-view").textContent =
        response.showRooms.suite.hotelView;
    } else if (counter === 2) {
      document.getElementById("show-room-heading").textContent =
        response.showRooms.presidentSuite.heading;
      document.getElementById("show-room-price").textContent =
        response.showRooms.presidentSuite.price;
      document.getElementById("show-room-details").textContent =
        response.showRooms.presidentSuite.details;
      document.getElementById("bed-size").textContent =
        response.showRooms.presidentSuite.bedSize;
      document.getElementById("capacity").textContent =
        response.showRooms.presidentSuite.capacity;
      document.getElementById("room-size").textContent =
        response.showRooms.presidentSuite.roomSize;
      document.getElementById("hotel-view").textContent =
        response.showRooms.presidentSuite.hotelView;
    }
  }
}

slides.forEach((slide, index) => {
  slide.style.left = `${index * 150}%`;
});

const previousSlide = () => {
  counter = (counter - 1) % 3;
  if (counter < 0) {
    counter = counter + 3;
  }
  slideImage();
  changedata();
};
const nextSlide = () => {
  counter = (counter + 1) % 3;
  slideImage();
  changedata();
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 150}%)`;
  });
};

function formDataSender(event) {
  event.preventDefault();
  let formDataEntered = {
    checkIn: document.getElementById("check-in").value,
    checkOut: document.getElementById("check-out").value,
    adults: document.getElementById("adults").value,
    children: document.getElementById("children").value,
  };
  fetch("http://localhost:200/", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(formDataEntered),
  });
  document.getElementById("check-in").value = "";
  document.getElementById("check-out").value = "";
  document.getElementById("adults").value = "";
  document.getElementById("children").value = "";
}
