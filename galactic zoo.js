
const door = document.getElementById("door-anim");

door.addEventListener("mouseenter", function () {
  // Get the current scale during the pulse
  const currentScale = getComputedStyle(door).scale;

  // Stop the animation without changing the size
  door.classList.remove("pulse");
  door.style.scale = currentScale;

  // Force the browser to register the current size
  void door.offsetWidth;

  // Smoothly grow to the largest size
  door.style.scale = "1.07";
});

door.addEventListener("mouseleave", function () {
  // Smoothly shrink to the smallest size
  door.style.scale = "1";

  // Wait for the transition to finish
  door.addEventListener("transitionend", function restartPulse(e) {
    if (e.propertyName !== "scale") return;

    door.removeEventListener("transitionend", restartPulse);

    // Only restart if the mouse is still outside
    if (!door.matches(":hover")) {
      door.style.scale = "";
      door.classList.add("pulse");
    }
  });
});