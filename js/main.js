const slides = document.querySelectorAll(".slide");
const form = document.getElementById("page-banner-form");
let counter = 0;

async function getData() {
  const response = await fetch(`http://localhost:5000/`)
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

      document.getElementById("wellnessService").src =
        response.wellnessService.url;
      document.getElementById("wellnessServiceHeading").textContent =
        response.wellnessService.heading;
      document.getElementById("wellnessServiceSubHeading").textContent =
        response.wellnessService.subHeading;
      document.getElementById("wellnessServiceDetails").textContent =
        response.wellnessService.details;
      document.getElementById("giftCardService").src =
        response.giftCardService.url;
      document.getElementById("giftCardServiceHeading").textContent =
        response.giftCardService.heading;
      document.getElementById("giftCardServiceSubHeading").textContent =
        response.giftCardService.subHeading;
      document.getElementById("giftCardServiceDetails").textContent =
        response.giftCardService.details;
      document.getElementById("spaService").src = response.spaService.url;
      document.getElementById("spaServiceHeading").textContent =
        response.spaService.heading;

      document.getElementById("room1").src = response.room1;
      document.getElementById("room2").src = response.room2;
      document.getElementById("room3").src = response.room3;

      document.getElementById("spaServiceSubHeading").textContent =
        response.spaService.subHeading;
      document.getElementById("spaServiceDetails").textContent =
        response.spaService.details;
      document.getElementById("adventureService").src =
        response.adventureService.url;
      document.getElementById("adventureServiceHeading").textContent =
        response.adventureService.heading;
      document.getElementById("adventureServiceSubHeading").textContent =
        response.adventureService.subHeading;
      document.getElementById("adventureServiceDetails").textContent =
        response.adventureService.details;
      document.getElementById("slide1").src =
        response.showRooms.standardRoom.url;
      document.getElementById("slide2").src = response.showRooms.deluxeRoom.url;
      document.getElementById("slide3").src =
        response.showRooms.superDeluxeRoom.url;
    } catch (err) {
      console.log(err);
    }
  }
}
getData();

async function setData() {
  const response = await fetch(`http://localhost:5000/`)
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
      document.getElementById("showRoomHeading").textContent =
        response.showRooms.standardRoom.heading;
      document.getElementById("showRoomPrice").textContent =
        response.showRooms.standardRoom.price;
      document.getElementById("showRoomDetails").textContent =
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
      document.getElementById("showRoomHeading").textContent =
        response.showRooms.deluxeRoom.heading;
      document.getElementById("showRoomPrice").textContent =
        response.showRooms.deluxeRoom.price;
      document.getElementById("showRoomDetails").textContent =
        response.showRooms.deluxeRoom.details;
      document.getElementById("bed-size").textContent =
        response.showRooms.deluxeRoom.bedSize;
      document.getElementById("capacity").textContent =
        response.showRooms.deluxeRoom.capacity;
      document.getElementById("room-size").textContent =
        response.showRooms.deluxeRoom.roomSize;
      document.getElementById("hotel-view").textContent =
        response.showRooms.deluxeRoom.hotelView;
    } else if (counter === 2) {
      document.getElementById("showRoomHeading").textContent =
        response.showRooms.superDeluxeRoom.heading;
      document.getElementById("showRoomPrice").textContent =
        response.showRooms.superDeluxeRoom.price;
      document.getElementById("showRoomDetails").textContent =
        response.showRooms.superDeluxeRoom.details;
      document.getElementById("bed-size").textContent =
        response.showRooms.superDeluxeRoom.bedSize;
      document.getElementById("capacity").textContent =
        response.showRooms.superDeluxeRoom.capacity;
      document.getElementById("room-size").textContent =
        response.showRooms.superDeluxeRoom.roomSize;
      document.getElementById("hotel-view").textContent =
        response.showRooms.superDeluxeRoom.hotelView;
    }
  }
}

slides.forEach((slide, index) => {
  slide.style.left = `${index * 150}%`;
});

const previousSlide = () => {
  counter = (counter - 1) % 3;
  if (counter < 0) {
    counter = 0;
  }
  slideImage();
  setData();
};
const nextSlide = () => {
  counter = (counter + 1) % 3;
  slideImage();
  setData();
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 150}%)`;
  });
};

// function formHandler() {
//   let checkIn = document.getElementById("check-in").value;
//   let checkOut = document.getElementById("check-out").value;
//   let adults = document.getElementById("adults").value;
//   let children = document.getElementById("children").value;
//   console.log(checkIn, checkOut, adults, children);
// }
