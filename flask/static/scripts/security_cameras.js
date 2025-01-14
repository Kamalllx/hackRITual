document.addEventListener("DOMContentLoaded", () => {
  const cameras = document.querySelectorAll(".camera img");
  const solveButton = document.getElementById("solve-equation-btn");
  const answerInput = document.getElementById("equation-answer");

  // Camera click event
  cameras.forEach((camera) => {
    camera.addEventListener("click", () => {
      alert("You are viewing Camera 3. Look closer for hidden details.");
    });
  });

  // Solve equation event
  solveButton.addEventListener("click", async () => {
    const userAnswer = answerInput.value.trim();

    try {
      const response = await fetch("/check-answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: "camera_equation",
          answer: userAnswer,
        }),
      });

      const result = await response.json();
      alert(result.message);

      if (result.success) {
        // Redirect to the next challenge
      }
    } catch (error) {
      alert("Error checking your answer. Please try again.");
    }
  });
});
