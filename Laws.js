const laws = [
    "Never Outshine the Master",
    "Never Put Too Much Trust in Friends, Learn How to Use Enemies",
    "Conceal Your Intentions",
    "Always Say Less Than Necessary",
    "So Much Depends on Reputation – Guard It With Your Life",
    "Court Attention at All Costs",
    "Get Others to Do the Work for You, but Always Take the Credit",
    "Make Other People Come to You – Use Bait if Necessary",
    "Win Through Your Actions, Never Through Argument",
    "Infection: Avoid the Unhappy and Unlucky",
    "Learn to Keep People Dependent on You",
    "Use Selective Honesty and Generosity to Disarm Your Victim",
    "When Asking for Help, Appeal to People’s Self-Interest, Never to Their Mercy or Gratitude",
    "Pose as a Friend, Work as a Spy",
    "Crush Your Enemy Totally",
    "Use Absence to Increase Respect and Honor",
    "Keep Others in Suspended Terror: Cultivate an Air of Unpredictability",
    "Do Not Build Fortresses to Protect Yourself – Isolation is Dangerous",
    "Know Who You’re Dealing With – Do Not Offend the Wrong Person",
    "Do Not Commit to Anyone",
    "Play a Sucker to Catch a Sucker – Seem Dumber Than Your Mark",
    "Use the Surrender Tactic: Transform Weakness into Power",
    "Concentrate Your Forces",
    "Play the Perfect Courtier",
    "Re-Create Yourself",
    "Keep Your Hands Clean",
    "Play on People’s Need to Believe to Create a Cult-like Following",
    "Enter Action with Boldness",
    "Plan All the Way to the End",
    "Make Your Accomplishments Seem Effortless",
    "Control the Options: Get Others to Play with the Cards You Deal",
    "Play to People’s Fantasies",
    "Discover Each Man’s Thumbscrew",
    "Be Royal in Your Own Fashion: Act Like a King to Be Treated Like One",
    "Master the Art of Timing",
    "Disdain Things You Cannot Have: Ignoring Them is the Best Revenge",
    "Create Compelling Spectacles",
    "Think as You Like but Behave Like Others",
    "Stir Up Waters to Catch Fish",
    "Despise the Free Lunch",
    "Avoid Stepping into a Great Man’s Shoes",
    "Strike the Shepherd and the Sheep Will Scatter",
    "Work on the Hearts and Minds of Others",
    "Disarm and Infuriate with the Mirror Effect",
    "Preach the Need for Change, but Never Reform Too Much at Once",
    "Never Appear Too Perfect",
    "Do Not Go Past the Mark You Aimed For; In Victory, Learn When to Stop",
    "Assume Formlessness"
];

let currentIndex = -1; 

function updateLaw() {
    const lawTitle = document.getElementById('law-title');
    const lawContent = document.getElementById('law-content');
    if (currentIndex === -1) {
        lawTitle.textContent = "The 48 Laws of Power";
        lawContent.textContent = "Robert Greene";
    } else {
        lawTitle.textContent = `Law ${currentIndex + 1}`;
        lawContent.textContent = laws[currentIndex];
    }
}

function nextLaw() {
    if (currentIndex < laws.length - 1) {
        currentIndex++;
    } else {
        currentIndex = -1; // Loop back to the title page
    }
    updateLaw();
}

function prevLaw() {
    if (currentIndex > -1) {
        currentIndex--;
    } else {
        currentIndex = laws.length - 1; // Loop back to the last law
    }
    updateLaw();
}

function toggleDropdown() {
    const contentSection = document.querySelector('.content-section');
    const dropdown = document.getElementById('dropdown');
    contentSection.style.display = contentSection.style.display === 'none' ? 'block' : 'none';
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function selectLaw(index) {
    currentIndex = index;
    updateLaw();
    toggleDropdown(); 
}

const dropdown = document.getElementById('dropdown');
laws.forEach((law, index) => {
    const lawOption = document.createElement('a');
    lawOption.href = "#";
    lawOption.textContent = `Law ${index + 1}`;
    lawOption.onclick = () => selectLaw(index); 
    dropdown.appendChild(lawOption);
});

updateLaw();
