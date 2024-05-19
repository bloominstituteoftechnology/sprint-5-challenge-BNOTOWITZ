async function sprintChallenge5() { // Note the async keyword so you can use `await` inside sprintChallenge5
  // 👇 WORK ONLY BELOW THIS LINE 👇
  // 👇 WORK ONLY BELOW THIS LINE 👇
  // 👇 WORK ONLY BELOW THIS LINE 👇

  // 👇 ==================== TASK 1 START ==================== 👇

  // 🧠 Use Axios to GET learners and mentors.
  // ❗ Use the variables `mentors` and `learners` to store the data.
  // ❗ Use the await keyword when using axios.

  async function fetchData() {
    try {
        // Fetch data from Endpoint A
        const responseA = await axios.get('http://localhost:3003/api/learners');
        const learners = responseA.data;

        // Fetch data from Endpoint B
        const responseB = await axios.get('http://localhost:3003/api/mentors');
        const mentors = responseB.data;

        // Process the data and match mentor IDs with real names
        const processedLearners = learners.map(learner => {
            const matchedMentors = learner.mentors.map(mentorId => {
                const mentor = mentors.find(m => m.id === mentorId);
                return mentor ? mentor.fullName : 'Unknown Mentor';
            });

            return {
                id: learner.id,
                fullName: learner.fullName,
                email: learner.email,
                mentors: matchedMentors
            };
        });

        // Call a function to render the learner cards with the processed data
        renderLearnerCards(processedLearners);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function renderLearnerCards(learners) {
    // TASK 3: Render learner cards with mentors
    const cardsContainer = document.querySelector('.cards');

    learners.forEach(learner => {
        const card = document.createElement('div');
        card.classList.add('card');

        const heading = document.createElement('h3');
        heading.textContent = learner.fullName;

        const email = document.createElement('div');
        email.textContent = `Email: ${learner.email}`;

        const mentorsHeading = document.createElement('h4');
        mentorsHeading.textContent = 'Mentors:';

        const mentorsList = document.createElement('ul');
        learner.mentors.forEach(mentor => {
            const mentorItem = document.createElement('li');
            mentorItem.textContent = mentor;
            mentorsList.appendChild(mentorItem);
        });

        card.appendChild(heading);
        card.appendChild(email);
        card.appendChild(mentorsHeading);
        card.appendChild(mentorsList);

        cardsContainer.appendChild(card);
    });
}

// Call the fetchData function to start fetching data when the script runs
fetchData();


  // 👆 ==================== TASK 1 END ====================== 👆

  // 👇 ==================== TASK 2 START ==================== 👇

  async function fetchData() {
    try {
        // Fetch data from Endpoint A
        const responseA = await axios.get('http://localhost:3003/api/learners');
        const learners = responseA.data;

        // Fetch data from Endpoint B
        const responseB = await axios.get('http://localhost:3003/api/mentors');
        const mentors = responseB.data;

        // Task 2: Combine learners and mentors
        learners.forEach(learner => {
            // Map over the mentors array of IDs and replace them with mentor names
            learner.mentors = learner.mentors.map(mentorId => {
                const mentor = mentors.find(m => m.id === mentorId);
                return mentor ? mentor.fullName : 'Unknown Mentor';
            });
        });

        // Call a function to render the learner cards with the processed data
        renderLearnerCards(learners);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the fetchData function to start fetching data when the script runs
fetchData();


  // 🧠 Combine learners and mentors.
  // ❗ At this point the learner objects only have the mentors' IDs.
  // ❗ Fix the `learners` array so that each learner ends up with this exact structure:
  // {
  //   id: 6,
  //   fullName: "Bob Johnson",
  //   email: "bob.johnson@example.com",
  //   mentors: [
  //     "Bill Gates",
  //     "Grace Hopper"
  //   ]`
  // }

  // 👆 ==================== TASK 2 END ====================== 👆

  const cardsContainer = document.querySelector('.cards')
  const info = document.querySelector('.info')
  info.textContent = 'No learner is selected'


  // 👇 ==================== TASK 3 START ==================== 👇

  for (let learner of learners) { // looping over each learner object
    for (let learner of learners) {
      // Create elements for the learner card
      const card = document.createElement('div');
      const heading = document.createElement('h3');
      const email = document.createElement('div');
      const mentorsHeading = document.createElement('h4');
      const mentorsList = document.createElement('ul');
  
      // Set text content for the elements
      heading.textContent = learner.fullName;
      email.textContent = learner.email;
      mentorsHeading.textContent = 'Mentors:';
  
      // Add classes to the elements
      card.classList.add('card');
      heading.classList.add('name');
      email.classList.add('email');
      mentorsHeading.classList.add('mentors-heading');
  
      // Append elements to the card
      card.appendChild(heading);
      card.appendChild(email);
      card.appendChild(mentorsHeading);
      card.appendChild(mentorsList);
  
      // Loop over mentors and create <li> elements for each
      for (let mentor of learner.mentors) {
          const mentorItem = document.createElement('li');
          mentorItem.textContent = mentor;
          mentorsList.appendChild(mentorItem);
      }
  
      // Append the card to the container (assuming you have a container with class 'cards')
      document.querySelector('.cards').appendChild(card);
  }
  
    // 🧠 Flesh out the elements that describe each learner
    // ❗ Give the elements below their (initial) classes, textContent and proper nesting.
    // ❗ Do not change the variable names, as the code that follows depends on those names.
    // ❗ Also, loop over the mentors inside the learner object, creating an <li> element for each mentor.
    // ❗ Fill each <li> with a mentor name, and append it to the <ul> mentorList.
    // ❗ Inspect the mock site closely to understand what the initial texts and classes look like!

    const card = document.createElement('div')
    const heading = document.createElement('h3')
    const email = document.createElement('div')
    const mentorsHeading = document.createElement('h4')
    const mentorsList = document.createElement('ul')

    // 👆 ==================== TASK 3 END ====================== 👆

    // 👆 WORK ONLY ABOVE THIS LINE 👆
    // 👆 WORK ONLY ABOVE THIS LINE 👆
    // 👆 WORK ONLY ABOVE THIS LINE 👆
    card.appendChild(mentorsList)
    card.dataset.fullName = learner.fullName
    cardsContainer.appendChild(card)

    card.addEventListener('click', evt => {
      const mentorsHeading = card.querySelector('h4')
      // critical booleans
      const didClickTheMentors = evt.target === mentorsHeading
      const isCardSelected = card.classList.contains('selected')
      // do a reset of all learner names, selected statuses, info message
      document.querySelectorAll('.card').forEach(crd => {
        crd.classList.remove('selected')
        crd.querySelector('h3').textContent = crd.dataset.fullName
      })
      info.textContent = 'No learner is selected'
      // conditional logic
      if (!didClickTheMentors) {
        // easy case, no mentor involvement
        if (!isCardSelected) {
          // selecting the card:
          card.classList.add('selected')
          heading.textContent += `, ID ${learner.id}`
          info.textContent = `The selected learner is ${learner.fullName}`
        }
      } else {
        // clicked on mentors, we toggle and select no matter what
        card.classList.add('selected')
        if (mentorsHeading.classList.contains('open')) {
          mentorsHeading.classList.replace('open', 'closed')
        } else {
          mentorsHeading.classList.replace('closed', 'open')
        }
        if (!isCardSelected) {
          // if card was not selected adjust texts
          heading.textContent += `, ID ${learner.id}`
          info.textContent = `The selected learner is ${learner.fullName}`
        }
      }
    })
  }

  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`
}

// ❗ DO NOT CHANGE THIS CODE. WORK ONLY INSIDE TASKS 1, 2, 3
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()

// ❗ DO NOT CHANGE THIS CODE. WORK ONLY INSIDE TASKS 1, 2, 3
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
