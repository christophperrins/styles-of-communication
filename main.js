
let communicationStyles = (() => {
  let action = 0;
  let process = 0;
  let people = 0;
  let ideas = 0;

  return {
    getAction: () => {
      return action;
    },
    getProcess: () => {
      return process;
    },
    getPeople: () => {
      return people;
    },
    getIdeas: () => {
      return ideas;
    },
    addToAction: () => {
      action = action + 1;
    },
    addToProcess: () => {
      process = process + 1;
    },
    addToPeople: () => {
      people = people + 1;
    },
    addToIdeas: () => {
      ideas = ideas + 1;
    }
  }
})();

let questions = (() => {
  let index = 0;
  let questions = [
    [{
      value: "I like action", action: () => communicationStyles.addToAction()
    }, {
      value: "I deal with problems in a systematic way", action: () => communicationStyles.addToProcess()
    }], [{
      value: "I believe that teams are more effective than individuals", action: () => communicationStyles.addToPeople()
    }, {
      value: "I enjoy innovation very much", action: () => communicationStyles.addToIdeas()
    }], [{
      value: "I am more interested in the future than in the past", action: () => communicationStyles.addToIdeas()
    }, {
      value: "I enjoy working with people", action: () => communicationStyles.addToPeople()
    }], [{
      value: "I like to attend well organized group meetings", action: () => communicationStyles.addToProcess()
    }, {
      value: "Deadlines are important for me", action: () => communicationStyles.addToAction()
    }], [{
      value: "I cannot stand procrastination", action: () => communicationStyles.addToAction()
    }, {
      value: "I believe that new ideas have to be tested before being used", action: () => communicationStyles.addToProcess()
    }], [{
      value: "I enjoy the stimulation of interaction with others", action: () => communicationStyles.addToPeople()
    }, {
      value: "I am always looking for new possibilities", action: () => communicationStyles.addToIdeas()
    }], [{
      value: "I want to set up my own objectives", action: () => communicationStyles.addToAction()
    }, {
      value: "When I start something I go through until the end", action: () => communicationStyles.addToProcess()
    }], [{
      value: "I basically try to understand other people's emotions", action: () => communicationStyles.addToPeople()
    }, {
      value: "I do challenge people around me", action: () => communicationStyles.addToIdeas()
    }], [{
      value: "I look forward to recieving feedback on my performance", action: () => communicationStyles.addToAction()
    }, {
      value: "I find the step-by-step approach very effective", action: () => communicationStyles.addToProcess()
    }], [{
      value: "I think I am good at reading people", action: () => communicationStyles.addToPeople()
    }, {
      value: "I like creative problem solving", action: () => communicationStyles.addToIdeas()
    }], [{
      value: "I extrapolate and project all the time", action: () => communicationStyles.addToIdeas()
    }, {
      value: "I am sensitive to others' needs", action: () => communicationStyles.addToPeople()
    }], [{
      value: "Planning is the key to success", action: () => communicationStyles.addToProcess()
    }, {
      value: "I become impatient with long deliberations", action: () => communicationStyles.addToAction()
    }], [{
      value: "I am cool under pressure", action: () => communicationStyles.addToProcess()
    }, {
      value: "I value experience very much", action: () => communicationStyles.addToAction()
    }], [{
      value: "I listen to people", action: () => communicationStyles.addToPeople()
    }, {
      value: "People say that I am a fast thinker", action: () => communicationStyles.addToIdeas()
    }]
  ]

// "Cooperation is a key word for me"
// "I use logical methods to test alternatives"

// "I like to handle several projects at the same time"
// "I always question myself"

// "I learn by doing"
// "I believe that my head rules my heart"

// "I can predict how others may react to a certain action"
// "I do not like details"

// "Analysis should always precede action"
// "I am able to assess the climate of a group"

// "I have a tendency to start things and not finish them up"
// "I perceive myself as decisive"

// "I search for challenging tasks"
// "I rely on observation and data"

// "I can express my feelings openly"
// "I like to design new projects"

// "I enjoy reading very much"
// "I perceive myself as a facilitator"

// "I like to focus on one issue at a time"
// "I like to achieve"

// "I enjoy learning about others"
// "I like variety"

// "Facts speak for themselves"
// "I use my imagination as much as possible"

// "I am impatient with long, slow assignments"
// "My mind never stops working"

// "Key decisions have to be made in a cautious way"
// "I strongly believe that people need each other to get work done"

// "I usually make decisions without thinking too much"
// "Emotions create problems"

// "I like to be liked by others"
// "I can put two and two together very quickly"

// "I try out my new ideas on people"
// "I believe in the scientific approach"

// "I like to get things done"
// "Good relationships are essential"

// "I am impulsive"
// "I accept differences in people"

// "Communicating with people is an end in itself"
// "I like to be intellectually stimulated.

// "I like to organize"
// "I usually jump from one task to another"

// "Talking and working with people is a creative art"
// "Self-actualization is a key word for me"

// "I enjoy playing with ideas"
// "I dislike to waste my time"

// "I enjoy doing what I am good at"
// "I learn by interacting with others"

// "I find abstractions interesting and enjoyable"
// "I am patient with details"

// "I like brief, to the point statements"
// "I feel confident in myself"

  return {
    next: () => index = index+1,
    getPercentageOfComplete: () => (index+1)/questions.length*100,
    getNumberOfQuestions: () => questions.length,
    getNumberOfOptions: () => questions[index] ? questions[index].length : 0,
    getOption: (location) => questions[index][location],
  }
})();

let choices = (() => {
  
  let colour = (i) => i%2==0 ? "btn-primary" : "btn-secondary";
  
  let choicesRow = document.getElementById("choices");
  choicesRow.innerHTML = "";

  let createButton = (i) => {
    let col = document.createElement("div");
    col.className = "col-lg-6 col-sm-12 my-2";
    let button = document.createElement("button");
    button.className = "btn " + colour(i) + " w-100";
    let option = questions.getOption(i);
    button.innerText = option.value;
    button.addEventListener("click", () => {
      option.action();
      questions.next();
      choicesRow.innerHTML = "";
      createButtons();
    })
    col.append(button);
    choicesRow.append(col);
  }

  let createProgressBar = () => {
    let col = document.createElement("div")
    col.className = "col-12";
    let progressContainer = document.createElement("div");
    progressContainer.className="progress my-2";
    let progressBar = document.createElement("div");
    progressBar.className= "progress-bar progress-bar-striped";
    progressBar.setAttribute("style", "width: " + parseInt(questions.getPercentageOfComplete())+"%");
    progressContainer.append(progressBar);
    col.append(progressContainer);

    choicesRow.append(col);
  }

  let displayResults = () => {
    let row = document.getElementById("choices")
    row.id = "results";
    let col = document.createElement("div");
    col.className = "col-12";
    let heading = document.createElement("h3");
    heading.innerText = "Your results:"
    let list = document.createElement("ul");
    let actions = document.createElement("li");
    actions.innerText = "Actions: " + communicationStyles.getAction() / questions.getNumberOfQuestions() * 100 + "%";
    let process = document.createElement("li");
    process.innerText = "Process: " + communicationStyles.getProcess() / questions.getNumberOfQuestions() * 100 + "%";
    let people = document.createElement("li");
    people.innerText = "People: " + communicationStyles.getPeople() / questions.getNumberOfQuestions() * 100 + "%";
    let ideas = document.createElement("li");
    ideas.innerText = "Ideas: " + communicationStyles.getIdeas() / questions.getNumberOfQuestions() * 100 + "%";
  
    list.append(actions);
    list.append(process);
    list.append(people);
    list.append(ideas);
    
    col.append(heading);
    col.append(list);
  
    row.append(col)
  }

  let createButtons = () => {
    let numberOfOptions = questions.getNumberOfOptions();
    if (numberOfOptions > 0) {
      for (let i = 0; i < numberOfOptions; i++){
        createButton(i);
      }
      createProgressBar();
    } else {
      displayResults();
    }
  }
  createButtons();
  
})()











