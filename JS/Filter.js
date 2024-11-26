
        function filterChallenges() {
            var difficulty = document.getElementById("difficultyFilter").value;
            var challenges = document.querySelectorAll(".challenge");
    
            challenges.forEach(function(challenge) {
                var challengeDifficulty = challenge.querySelector(".difficulty").classList;
                if (difficulty === "all" || challengeDifficulty.contains(difficulty)) {
                    if (challenge.style.display === "none") {
                        challenge.style.opacity = "0";
                        challenge.style.display = "block";
                        setTimeout(function() {
                            challenge.style.opacity = "1";
                        }, 10); 
                    }
                } else {
                    if (challenge.style.display !== "none") {
                        challenge.style.opacity = "0";
                        setTimeout(function() {
                            challenge.style.display = "none";
                        }, 300); 
                    }
                }
            });
        }
