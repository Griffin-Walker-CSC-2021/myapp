//bias variables
// Optional JavaScript -->
          // jQuery first, then Popper.js, then Bootstrap JS -->
         
var Apperance = 0;
var RaceCulture = 0;
var Disabilty = 0;
var Politics = 0;
var Religion = 0;
var Age  = 0;
var Vocation = 0;
var Education = 0;
var SocioEconomics = 0;
var Gender = 0;
var LGBTQ = 0;
var Marriage = 0;
//teq score
var Teq = 0;
//4 basis
var Individual = 0;
var Philosphical = 0;
var Positional  = 0;
var Relational = 0;
// QUESTIONS

const questions = [
    {
      "question": "When I interact closely with someone traditionally considered more attractive than me, I feel at ease, safe, and comfortable.",
      "answer1": "Never",
      "answer1Total": "0",
      "answer2": "Rarely",
      "answer2Total": "1",
      "answer3": "Sometimes",
      "answer3Total": "2",
      "answer4": "often",
      "answer4Total": "3",
      "answer5": "Always",
      "answer5Total": "4"
    },
    {
      "question": "When I interact closely with someone traditionally considered more attractive than me, I feel at ease, safe, and comfortable.",
      "answer1": "Never",
      "answer1Total": "0",
      "answer2": "Rarely",
      "answer2Total": "1",
      "answer3": "Sometimes",
      "answer3Total": "2",
      "answer4": "often",
      "answer4Total": "3",
      "answer5": "Always",
      "answer5Total": "4"
    },
    {
      "question": "When I interact closely with someone traditionally considered more attractive than me, I feel at ease, safe, and comfortable.",
      "answer1": "Never",
      "answer1Total": "0",
      "answer2": "Rarely",
      "answer2Total": "1",
      "answer3": "Sometimes",
      "answer3Total": "2",
      "answer4": "often",
      "answer4Total": "3",
      "answer5": "Always",
      "answer5Total": "4"
    },
    {
      "question": "When I was a child, I had exposure to and experience with people who were more attractive than me.",
      "answer1": "Never",
      "answer1Total": "0",
      "answer2": "Rarely",
      "answer2Total": "1",
      "answer3": "Sometimes",
      "answer3Total": "2",
      "answer4": "often",
      "answer4Total": "3",
      "answer5": "Always",
      "answer5Total": "4"
    },
    {
      "question": "When I interact closely with someone traditionally considered more attractive than me, I feel at ease, safe, and comfortable.",
      "answer1": "Never",
      "answer1Total": "0",
      "answer2": "Rarely",
      "answer2Total": "1",
      "answer3": "Sometimes",
      "answer3Total": "2",
      "answer4": "often",
      "answer4Total": "3",
      "answer5": "Always",
      "answer5Total": "4"
    },
    {
      "question": "When I interact closely with someone traditionally considered more attractive than me, I feel at ease, safe, and comfortable.",
      "answer1": "Never",
      "answer1Total": "0",
      "answer2": "Rarely",
      "answer2Total": "1",
      "answer3": "Sometimes",
      "answer3Total": "2",
      "answer4": "often",
      "answer4Total": "3",
      "answer5": "Always",
      "answer5Total": "4"
    },
    {
      "question": "When I look at my recent and current situation, I have personal interactions with people who are considered to be more attractive than me.",
      "answer1": "Never",
      "answer1Total": "0",
      "answer2": "Rarely",
      "answer2Total": "1",
      "answer3": "Sometimes",
      "answer3Total": "2",
      "answer4": "often",
      "answer4Total": "3",
      "answer5": "Always",
      "answer5Total": "4"
    }
  ]
  
  
  let currentQuestion = 0;
  let score = [];
  let selectedAnswersData = [];
  const totalQuestions =questions.length;
  
  const container = document.querySelector('.quiz-container');
  const questionEl = document.getElementById('question');
  const option1 = document.querySelector('.option1');
  const option2 = document.querySelector('.option2');
  const option3 = document.querySelector('.option3');
  const option4 = document.querySelector('.option4');
  const option5 = document.querySelector('.option5');
  const nextButton = document.querySelector('.next');
  const previousButton = document.querySelector('.previous');
  const restartButton = document.querySelector('.restart');
  const result = document.querySelector('.result');
  
  //Function to generate question 
  function generateQuestions (index) {
      //Select each question by passing it a particular index
      const question = questions[index];
      const option1Total = questions[index].answer1Total;
      const option2Total = questions[index].answer2Total;
      const option3Total = questions[index].answer3Total;
      const option4Total = questions[index].answer4Total;
      const option5Total = questions[index].answer5Total;
      //Populate html elements 
      questionEl.innerHTML = `${index + 1}. ${question.question}`
      option1.setAttribute('data-total', `${option1Total}`);
      option2.setAttribute('data-total', `${option2Total}`);
      option3.setAttribute('data-total', `${option3Total}`);
      option4.setAttribute('data-total', `${option4Total}`);
      option4.setAttribute('data-total', `${option5Total}`);
      option1.innerHTML = `${question.answer1}`
      option2.innerHTML = `${question.answer2}`
      option3.innerHTML = `${question.answer3}`
      option4.innerHTML = `${question.answer4}`
      option5.innerHTML = `${question.answer5}`
  }
  
  
  function loadNextQuestion () {
      const selectedOption = document.querySelector('input[type="radio"]:checked');
      //Check if there is a radio input checked
      if(!selectedOption) {
          alert('Please select your answer!');
          return;
      }
      //Get value of selected radio
      const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));
  
      ////Add the answer score to the score array
      score.push(answerScore);
  
      selectedAnswersData.push()
      
  
      const totalScore = score.reduce((total, currentNum) => total + currentNum);
  
      //Finally we incement the current question number ( to be used as the index for each array)
      currentQuestion++;
  
          //once finished clear checked
          selectedOption.checked = false;
      //If quiz is on the final question
      if(currentQuestion == totalQuestions - 1) {
          nextButton.textContent = 'Finish';
      }
      //If the quiz is finished then we hide the questions container and show the results 
      if(currentQuestion == totalQuestions) {
          container.style.display = 'none';
          
          var ctx = document.getElementById('firstChart').getContext('2d');
          var ctx2 = document.getElementById('secondChart').getContext('2d');
          var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'polarArea', //all of the chart types that are available to us with chart.js
      
          // The data for our dataset
          data: {
              title: 'All Influences - Visualization',
              labels: [
                'Appearance', 'Race/Culture', 'Disability',   // Grouped according to the Individual Category
                'Politics/Issues', 'Religion', 'Age',         // Grouped according to the Philsophical Category
                'Vocation', 'Education', 'Socioeconomics',    // Grouped according to the Positional Category
              'Gender (M/F)', 'LGBTQ+', 'Family/Marriage'],   // Grouped according to the Relational Category
              datasets: [{
                  label: 'First Dataset',
                  data: [9, 9, 12, 16, 12, 4, 13, 7, 6, 16, 7, 10], //static data that will need to be replaced by live data
                  backgroundColor: [
                    //Grouped according to the Individual Category
                    'rgb(0, 0, 175)', //dark blue
                    'rgb(0, 0, 200)', //deep blue
                    'rgb(0, 0, 255)', //primary blue
                    //Grouped according to the Philsophical Category
                    'rgb(100, 0, 150)', //dark purple
                    'rgb(100, 0, 175)', //deep purple
                    'rgb(100, 0, 200)', //netrual purple
                    //Grouped according to the Positional Category
                    'rgb(255, 100, 0)', //deep orange
                    'rgb(255, 150, 0)', //mid orange
                    'rgb(255, 175, 0)', //burnt yellow
                    //Grouped according to the Relational Category
                    'rgb(0, 150, 0)', //dark green
                    'rgb(0, 200, 0)', //deep green
                    'rgb(0, 255, 0)', //kelly green
                ],
                  borderColor: [
                    //Grouped according to the Individual Category
                    'rgb(0, 0, 150)',
                    'rgb(0, 0, 175)',
                    'rgb(0, 0, 255)',
                    //Grouped according to the Philsophical Category
                    'rgb(100, 0, 200)',
                    'rgb(100, 0, 175)',
                    'rgb(100, 0, 150)',
                    //Grouped according to the Positional Category
                    'rgb(255, 100, 0)',
                    'rgb(255, 150, 0)',
                    'rgb(255, 175, 0)',
                    //Grouped according to the Relational Category
                    'rgb(0, 150, 0)',
                    'rgb(0, 200, 0)',
                    'rgb(0, 255, 0)',
                  ],
                  borderWidth: 0,
              }]
          },
          // Configuration options go here
          options: {
            plugins: {
              title: {  // Here are all the configuration options regarding the chart's title
                display: true,
                text: 'Displaying Total Score of All Bias Categories',
                color: 'rgb(0,0,0)',
                position: 'top',
                font: {
                  size: 36,
                  family:'Arial',
                },
                padding: {
                  top: 10,
                  bottom: 10,
                }
              },
              legend: { // Here are all the configuration options regarding the chart's legend
              position: 'left',
              align: 'center',
              fullWidth: true,
              labels: {
                color: 'rgb(0,0,0)',
                  font:{
                    size: 18,
                    family: 'Arial'
                  }
              },
            },
            response: true,
            maintainAspectRatio: true,
          }
        }
      });
      var chart2 = new Chart(ctx2, {
          // The type of chart we want to create
          type: 'radar',
      
          // The data for our dataset
          data: {
              title: 'Each Individual Assessment Factor',
              labels: [
                'Appearance', 'Race/Culture', 'Disability',   // Grouped according to the Individual Category
                'Politics/Issues', 'Religion', 'Age',         // Grouped according to the Philsophical Category
                'Vocation', 'Education', 'Socioeconomics',    // Grouped according to the Positional Category
              'Gender (M/F)', 'LGBTQ+', 'Family/Marriage'],   // Grouped according to the Relational Category
              datasets: [
                { //start of comfort zone dataset
                  label: 'Comfort Zone',
                  data:[3, 2, 1, 4, 3, 1, 2, 2, 1, 4, 0, 2], //static data that will need to be replaced by live data
                  borderColor: 'rgb(0, 255, 50)', //bright green
               }, //end of comfort zone dataset
               { //start of early life exposture dataset
                  label:'Early Life Exposure',
                  data:[1, 2, 3, 4, 2, 1, 4, 1, 1, 4, 1, 2], //static data that will need to be replaced by live data
                  borderColor: 'rgb(0,200,200)', //green-blue
               }, //end of early life exposure dataset
               { //start of recent life interation dataset
                  label:'Recent Life Interaction',
                  data:[1, 3, 4, 4, 4, 1, 3, 3, 1, 4, 2, 4], //static data that will need to be replaced by live data
                  borderColor:'rgb(100, 0, 200)', //netrual purple
               }, //end of recent life interaction dataset
               { //start of experience favorability dataset
                  label:'Experience Favorability',
                  data:[4, 2, 4, 4, 3, 1, 4, 1, 3, 4, 4, 2], //static data that will need to be replaced by live data
                  borderColor:'rgb(255,50,0)', //primary red
               } //end of experience favoriability datatset
              ]
          },//the end of the data portion
      
          // Configuration options go here
          options: {  
              plugins: {
      
              title: { // Here are all the configuration options regarding the chart's title
                display: true,
                text: 'Measuring Each Assessment Factor',
                color: 'rgb(0,0,0)',
                position: 'top',
                font:{
                  size: 36,
                  family: 'Arial'
                },
              },
              legend: { // Here are all the configuration options regarding the chart's legend
              position: 'top',
              align: 'center',
              fullWidth: true,
              labels: { //label customization options
                color: 'rgb(0,0,0)',
                  font:{ //font customization options
                    size: 18,
                    family: 'Arial'
                  }
              },
            },
            response: true,
            maintainAspectRatio: true,
          }
          }
      });
      
          return;
      }
      generateQuestions(currentQuestion);
  }
  
  //Function to load previous question
  function loadPreviousQuestion() {
      //Decrement quentions index
      currentQuestion--;
      //remove last array value;
      score.pop();
      //Generate the question
      generateQuestions(currentQuestion);
  }
  
  //Fuction to reset and restart the quiz;
  function restartQuiz(e) {
      if(e.target.matches('button')) {
      //reset array index and score
      currentQuestion = 0;
      score = [];
      //Reload quiz to the start
      location.reload();
      }
  
  }
  
  
  generateQuestions(currentQuestion);
  nextButton.addEventListener('click', loadNextQuestion);
  previousButton.addEventListener('click',loadPreviousQuestion);
  result.addEventListener('click',restartQuiz);
  