const increaseBlueColorWidth = () => {
  setTimeout(() => {
    document.getElementById("hello-section-blue-half").style.width = "100%";
    document.querySelector(".hello-text-blue-dot").style.color = "#F8F8F8";
  }, 1000);
};

const movingHelloText = () => {
  setTimeout(() => {
    document.getElementById("hello-text-box").style.left = "180%";
  }, 2000);
};

const addTextEffect = (target) => {
  target.classList.add("text-effect");
  setTimeout(() => target.classList.remove("text-effect"), 800);
};

// window.getComputedStyle( document.querySelector('.intro-text-name-font'), '::after' ).getPropertyValue("display")

const increasingVisibilityofIntroText = () => {
  const line1 = "I'M SOURABH";
  const line2 = "FULL-STACK DEVELOPER";
  const line3 = "I DEVELOP WEB & MOBILE APPS";
  const line4 = "I stand on a fine spot where Design fuses into Code.";
  let currTime = 3000;

  setTimeout(() => {
    document
      .querySelector(".intro-text-name-font")
      .classList.add("after-danda");
  }, currTime);
  for (let i = 0; i < line1.length; i++) {
    setTimeout(() => {
      let span = document.createElement("span");
      span.innerText = line1[i];
      span.addEventListener("mouseover", () => addTextEffect(span));
      document.querySelector(".intro-text-name-font").appendChild(span);
      // document.querySelector(".intro-text-name-font").innerHTML+="<span onmouseover='addTextEffect(this)'>"+line1[i]+"</span>";
    }, (currTime += 80));
  }
  setTimeout(() => {
    document
      .querySelector(".intro-text-name-font")
      .classList.remove("after-danda");
  }, currTime);

  setTimeout(() => {
    document
      .querySelector(".intro-text-developer-font")
      .classList.add("after-danda");
  }, currTime);
  for (let i = 0; i < line2.length; i++) {
    setTimeout(() => {
      document.querySelector(".intro-text-developer-font").innerHTML +=
        "<span>" + line2[i] + "</span>";
    }, (currTime += 80));
  }
  setTimeout(() => {
    document
      .querySelector(".intro-text-developer-font")
      .classList.remove("after-danda");
  }, currTime);

  setTimeout(() => {
    document
      .querySelector(".intro-text-apps-font")
      .classList.add("after-danda");
  }, currTime);
  for (let i = 0; i < line3.length; i++) {
    setTimeout(() => {
      document.querySelector(".intro-text-apps-font").innerHTML +=
        "<span>" + line3[i] + "</span>";
    }, (currTime += 80));
  }
  setTimeout(() => {
    document
      .querySelector(".intro-text-apps-font")
      .classList.remove("after-danda");
  }, currTime);

  setTimeout(() => {
    document.querySelector(".intro-text-quote-font").innerHTML = "<q></q>";
  }, (currTime += 100));
  for (let i = 0; i < line4.length; i++) {
    setTimeout(() => {
      document.querySelector(".intro-text-quote-font>q").innerHTML += line4[i];
    }, (currTime += 50));
  }
};

document.addEventListener("DOMContentLoaded", function () {
  increaseBlueColorWidth();
  movingHelloText();
  increasingVisibilityofIntroText();
});
