
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
    }], [{
      value: "Cooperation is a key word for me", action: () => communicationStyles.addToPeople()
    }, {
      value: "I use logical methods to test alternatives", action: () => communicationStyles.addToProcess()
    }], [{
      value: "I like to handle several projects at the same time", action: () => communicationStyles.addToAction()
    }, {
      value: "I always question myself", action: () => communicationStyles.addToProcess()
    }], [{
      value: "I learn by doing", action: () => communicationStyles.addToAction()
    }, {
      value: "I believe that my head rules my heart", action: () => communicationStyles.addToProcess()
    }], [{
      value: "I can predict how others may react to a certain action", action: () => communicationStyles.addToPeople()
    }, {
      value: "I do not like details", action: () => communicationStyles.addToIdeas()
    }], [{
      value: "Analysis should always precede action", action: () => communicationStyles.addToProcess()
    }, {
      value: "I am able to assess the climate of a group", action: () => communicationStyles.addToPeople()
    }], [{
      value: "I have a tendency to start things and not finish them up", action: () => communicationStyles.addToIdeas()
    }, {
      value: "I perceive myself as decisive", action: () => communicationStyles.addToAction()
    }], [{
      value: "I search for challenging tasks", action: () => communicationStyles.addToAction()
    }, {
      value: "I rely on observation and data", action: () => communicationStyles.addToProcess()
    }], [{
      value: "I can express my feelings openly", action: () => communicationStyles.addToPeople()
    }, {
      value: "I like to design new projects", action: () => communicationStyles.addToIdeas()
    }], [{
      value: "I enjoy reading very much", action: () => communicationStyles.addToIdeas()
    }, {
      value: "I perceive myself as a facilitator", action: () => communicationStyles.addToPeople()
    }], [{
      value: "I like to focus on one issue at a time", action: () => communicationStyles.addToProcess()
    }, {
      value: "I like to achieve", action: () => communicationStyles.addToAction()
    }], [{
      value: "I enjoy learning about others", action: () => communicationStyles.addToPeople()
    }, {
      value: "I like variety", action: () => communicationStyles.addToAction()
    }], [{
      value: "Facts speak for themselves", action: () => communicationStyles.addToProcess()
    }, {
      value: "I use my imagination as much as possible", action: () => communicationStyles.addToIdeas()
    }], [{
      value: "I am impatient with long, slow assignments", action: () => communicationStyles.addToAction()
    }, {
      value: "My mind never stops working", action: () => communicationStyles.addToIdeas()
    }], [{
      value: "Key decisions have to be made in a cautious way", action: () => communicationStyles.addToProcess()
    }, {
      value: "I strongly believe that people need each other to get work done", action: () => communicationStyles.addToPeople()
    }], [{
      value: "I usually make decisions without thinking too much", action: () => communicationStyles.addToAction()
    }, {
      value: "Emotions create problems", action: () => communicationStyles.addToProcess()
    }], [{
      value: "I like to be liked by others", action: () => communicationStyles.addToPeople()
    }, {
      value: "I can put two and two together very quickly", action: () => communicationStyles.addToIdeas()
    }], [{
      value: "I like to be liked by others", action: () => communicationStyles.addToPeople()
    }, {
      value: "I can put two and two together very quickly", action: () => communicationStyles.addToIdeas()
    }], [{
      value: "I try out my new ideas on people", action: () => communicationStyles.addToIdeas()
    }, {
      value: "I believe in the scientific approach", action: () => communicationStyles.addToProcess()
    }], [{
      value: "I like to get things done", action: () => communicationStyles.addToAction()
    }, {
      value: "Good relationships are essential", action: () => communicationStyles.addToPeople()
    }], [{
      value: "I am impulsive", action: () => communicationStyles.addToAction()
    }, {
      value: "I accept differences in people", action: () => communicationStyles.addToProcess()
    }], [{
      value: "Communicating with people is an end in itself", action: () => communicationStyles.addToPeople()
    }, {
      value: "I like to be intellectually stimulated", action: () => communicationStyles.addToIdeas()
    }], [{
      value: "I like to organize", action: () => communicationStyles.addToProcess()
    }, {
      value: "I usually jump from one task to another", action: () => communicationStyles.addToAction()
    }], [{
      value: "Talking and working with people is a creative art", action: () => communicationStyles.addToPeople()
    }, {
      value: "Self-actualization is a key word for me", action: () => communicationStyles.addToIdeas()
    }], [{
      value: "I enjoy playing with ideas", action: () => communicationStyles.addToIdeas()
    }, {
      value: "I dislike to waste my time", action: () => communicationStyles.addToAction()
    }], [{
      value: "I enjoy doing what I am good at", action: () => communicationStyles.addToProcess()
    }, {
      value: "I learn by interacting with others", action: () => communicationStyles.addToPeople()
    }], [{
      value: "I find abstractions interesting and enjoyable", action: () => communicationStyles.addToIdeas()
    }, {
      value: "I am patient with details", action: () => communicationStyles.addToProcess()
    }], [{
      value: "I like brief, to the point statements", action: () => communicationStyles.addToAction()
    }, {
      value: "I feel confident in myself", action: () => communicationStyles.addToPeople()
    }]
  ]

  return {
    next: () => index = index + 1,
    getPercentageOfComplete: () => index / questions.length * 100,
    getNumberOfQuestions: () => questions.length,
    getNumberOfOptions: () => questions[index] ? questions[index].length : 0,
    getOption: (location) => questions[index][location],
  }
})();

let choices = (() => {

  let colour = (i) => i % 2 == 0 ? "btn-primary" : "btn-secondary";

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
    progressContainer.className = "progress my-2";
    let progressBar = document.createElement("div");
    progressBar.className = "progress-bar progress-bar-striped";
    progressBar.setAttribute("style", "width: " + parseInt(questions.getPercentageOfComplete()) + "%");
    progressContainer.append(progressBar);
    col.append(progressContainer);

    choicesRow.append(col);
  }

  let displayResults = () => {
    let row = document.getElementById("choices")
    row.id = "results";
    let results = document.createElement("div");
    results.className = "col-lg-6 col-sm-12";
    let heading = document.createElement("h3");
    heading.innerText = "Your results:"
    let character = document.createElement("h4");

    let orientation = "Action";
    let value = communicationStyles.getAction();
    if (communicationStyles.getProcess() > value) {
      orientation = "Process"
    }
    if (communicationStyles.getPeople() > value) {
      orientation = "People"
    }
    if (communicationStyles.getIdeas() > value) {
      orientation = "Ideas"
    }
    character.innerHTML = "You are a <b>" + orientation + "</b> orientated individual";

    let orientationButton = (() => {
      let numberCreated = 0;
      let getType = () => numberCreated % 2 ? "btn-primary" : "btn-secondary";
      return {
        create: () => {
          numberCreated = numberCreated + 1;
          let button = document.createElement("button");
          button.className = "btn " + getType() + " m-1 d-block";
          return button
        }
      }
    })(); 

    
    let actions = orientationButton.create();
    let convert = (value) => Math.round(value / questions.getNumberOfQuestions() * 100);
    actions.innerText = "Actions: " + convert(communicationStyles.getAction()) + "%";
    let process = orientationButton.create();
    process.innerText = "Process: " + convert(communicationStyles.getProcess()) + "%";
    let people = orientationButton.create();
    people.innerText = "People: " + convert(communicationStyles.getPeople()) + "%";
    let ideas = orientationButton.create();
    ideas.innerText = "Ideas: " + convert(communicationStyles.getIdeas()) + "%";

    let infoPanel = document.createElement("div");
    infoPanel.className = "col-lg-6 col-sm-12";
    
    let clearDisplay = () => {
      infoPanel.innerHTML = "";
    }

    let displayHeading = (heading) => {
      let title = document.createElement("h2");
      title.innerText = "Communicating with "+ heading +" orientated person";
      infoPanel.append(title);
    }

    let addToList = (value) => {
      let listItem = document.createElement("li");
      listItem.innerHTML = value;
      return listItem;
    }

    let displayAction = () => {
      displayHeading("an Action");
      let list = document.createElement("ul");
      list.append(addToList("Focus on the results first (state the conclusion at the outset)"));
      list.append(addToList("State your best recommendation (do not offer many alternatives)"));
      list.append(addToList("Be as brief as possible"));
      list.append(addToList("Emphasize the practicality of your ideas"));
      list.append(addToList("Use visual aids"));
      infoPanel.append(list);
    }

    let displayProcess = () => {
      displayHeading("a Process");
      let list = document.createElement("ul");
      list.append(addToList("Be precise (state the facts)"));
      list.append(addToList("Organize your presentation in a logical order:"));
      let sublist = document.createElement("ul");
      sublist.append(addToList("Background"));
      sublist.append(addToList("Present situation"));
      sublist.append(addToList("Outcome"));
      list.append(sublist);
      list.append(addToList("Break down your recommendations"));
      list.append(addToList("Include options (consider alternatives) with pros and cons"));
      list.append(addToList("Do not rush a process-oriented person"));
      list.append(addToList("Outline your proposal (1, 2, 3...)"));
      infoPanel.append(list);
    }

    let displayPeople = () => {
      displayHeading("a People");
      let list = document.createElement("ul");
      list.append(addToList("Allow for small talk (do not start the discussion right away)"));
      list.append(addToList("Stress the relationships between your proposal and the people concerned"));
      list.append(addToList("Show how the idea worked well in the past"));
      list.append(addToList("Indicate support from well-respected people"));
      list.append(addToList("Use an informal writing style"));
      infoPanel.append(list);
    }

    let displayIdea = () => {
      displayHeading("an Idea");
      let list = document.createElement("ul");
      list.append(addToList("Allow enough time for discussion"));
      list.append(addToList("Do not get impatient when he or she goes off on tangents"));
      list.append(addToList("In your opening, try to relate the discussed topic to a broader concept or idea (in other words, be conceptual"))
      list.append(addToList("Stress the uniqueness of the idea or topic at hand"));
      list.append(addToList("Emphasize future value or relate the impact of the idea to the future"));
      list.append(addToList("If writing to an idea-oriented person, try to stress the key concepts that underlie your proposal or recommendation at the outset. Start with an overall statement and work toward the more particular."));
      infoPanel.append(list);
    }

    let infoDisplay = () => {
      clearDisplay();
      return {
        action: () => displayAction(),
        process: () => displayProcess(),
        people: () => displayPeople(),
        ideas: () => displayIdea()
      }
    }

    actions.addEventListener("click", () => infoDisplay().action());
    process.addEventListener("click", () => infoDisplay().process());
    people.addEventListener("click", () => infoDisplay().people());
    ideas.addEventListener("click", () => infoDisplay().ideas());

    let canvas = document.createElement("canvas");
    canvas.width = "100";
    let chart = new Chart(canvas, {
      type: "pie",
      data: {
        labels: ["Action", "Process", "People", "Idea"],
        datasets: [{
          backgroundColor: ["#ffC000", "#4472C4", "#ed7d31", "#a5a5a5"],
          data: [
            convert(communicationStyles.getAction()),
            convert(communicationStyles.getProcess()),
            convert(communicationStyles.getPeople()),
            convert(communicationStyles.getIdeas())
          ]
        }]
      }
    })


    results.append(heading);
    results.append(character);
    results.append(actions);
    results.append(process);
    results.append(people);
    results.append(ideas);
    results.append(canvas);

    row.append(results);
    row.append(infoPanel);
  }

  let createButtons = () => {
    let numberOfOptions = questions.getNumberOfOptions();
    if (numberOfOptions > 0) {
      for (let i = 0; i < numberOfOptions; i++) {
        createButton(i);
      }
      createProgressBar();
    } else {
      displayResults();
    }
  }
  createButtons();

})()