document.addEventListener("DOMContentLoaded", () => {
  const puzzle = Array(8).fill(0);
  const puzzleContainer = document.getElementById("binary-puzzle");
  const submitBtn = document.getElementById("submit-btn");
  const alertBox = document.getElementById("alert-box");
  const alertMessage = document.getElementById("alert-message");
  const closeAlert = document.getElementById("close-alert");

  // Create binary puzzle cells
  for (let i = 0; i < 8; i++) {
    const cell = document.createElement("div");
    cell.className = "binary-cell";
    cell.textContent = "0";
    cell.dataset.index = i;

    cell.addEventListener("click", () => {
      const index = parseInt(cell.dataset.index, 10);
      puzzle[index] = puzzle[index] === 0 ? 1 : 0;
      cell.textContent = puzzle[index];
      cell.classList.toggle("selected");
    });

    puzzleContainer.appendChild(cell);
  }

  // Submit answer event
  submitBtn.addEventListener("click", async () => {
    const userAnswer = puzzle.join("");

    try {
      const response = await fetch("/check-answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: "binary_puzzle", answer: userAnswer }),
      });

      const result = await response.json();
      showAlert(result.message);
    } catch (error) {
      showAlert("Error checking your answer. Please try again.");
    }
  });

  closeAlert.addEventListener("click", () => {
    alertBox.style.display = "none";
  });

  function showAlert(message) {
    alertMessage.textContent = message;
    alertBox.style.display = "block";
  }
});
