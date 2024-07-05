var arr = [
  {
    dp: "https:images.unsplash.com/photo-1699393393011-4f6f3e36a5c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://plus.unsplash.com/premium_photo-1699537318780-b26685fa523e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
  },
  {
    dp: "https://images.unsplash.com/photo-1698854607842-83327fd8690b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8",
    story:
      "https://images.unsplash.com/photo-1683009427041-d810728a7cb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1699791459475-c5646251700e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1699427980129-40db19eba9e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8cVBZc0R6dkpPWWN8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1625025850789-fec5bce0a2fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8cVBZc0R6dkpPWWN8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1609834655583-6f8566bff409?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8cVBZc0R6dkpPWWN8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1632549220273-699f0d47519d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8cVBZc0R6dkpPWWN8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1609931387008-2b7598c96ad1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHFQWXNEenZKT1ljfHxlbnwwfHx8fHw%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1635696444844-001888ec3119?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8cVBZc0R6dkpPWWN8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1603562651327-ec7d209989c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHFQWXNEenZKT1ljfHxlbnwwfHx8fHw%3D",
  },
];

//variables is here =>

var story = document.querySelectorAll(".story");
var stories = document.querySelector(".storiyan");
var fullscrn = document.querySelector(".full-screen");

//code for display picrure =>

story.forEach((elem, indx) => {
  elem.innerHTML = `<img id="${indx}" src="${arr[indx].dp}" alt="">`;
  //   elem.style.display = "none";
});

//code for stories of a users =>

stories.addEventListener("click", (e) => {
  var idis = e.target.id;
  var storyval = arr[idis].story;
  fullscrn.style.display = "block";
  fullscrn.style.backgroundImage = `url(${storyval})`;
  setTimeout(() => {
    fullscrn.style.display = "none";
  }, 2000);
});
