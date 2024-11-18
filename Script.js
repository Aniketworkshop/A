const challenges = [
    "Take 5 deep breaths and relax.",
    "Write down 3 things you're grateful for today.",
    "Spend 5 minutes meditating.",
    "Stretch for 2 minutes to relieve tension.",
    "Drink a glass of water and hydrate yourself.",
    "Go for a quick walk outside.",
    "Take a moment to smile and appreciate the present.",
];

const gratitudeTasks = [
    "Send a positive message to a friend.",
    "Write down a happy memory.",
    "Compliment yourself for something you've achieved.",
    "List 3 things you appreciate about your day.",
];

function generateChallenge() {
    const randomIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomIndex];
    document.getElementById("quote").textContent = challenge;
    showReward("You've unlocked a new mindfulness task!");
}

function showGratitude() {
    const randomIndex = Math.floor(Math.random() * gratitudeTasks.length);
    const task = gratitudeTasks[randomIndex];
    document.getElementById("quote").textContent = task;
    showReward("Gratitude helps you feel happier!");
}

function showReward(message) {
    document.getElementById("reward").textContent = message;
}