import css from 'questionnaire.css'
function App() {
  return (
<head>
    <title>Personality Quiz</title>
    <link rel="stylesheet" href="main.css">
    <meta charset="utf-8">
    <meta name="viewport" content="width=1024, initial-scale=1, shrink-to-fit=yes">
</head>

<body>
    
    <div class="quiz-container">
        <div class="title">Bias Assesment Questionnaire</div>
        <div id="question" class="question"></div>
        <label class="option">
            <input type="radio" name="option" value="1" />
            <span class="option1"></span>
        </label>
        <label class="option">
            <input type="radio" name="option" value="2" />
            <span class="option2"></span>
        </label>
        <label class="option">
            <input type="radio" name="option" value="3" />
            <span class="option3"></span>
        </label>
        <label class="option">
            <input type="radio" name="option" value="4" />
            <span class="option4"></span>
        </label>
        <label class="option">
            <input type="radio" name="option" value="5" />
            <span class="option5"></span>
        </label>
        <!-- Buttons -->
        <div class="controls">
            <button class="previous">Previous</button>
            <button class="next">Next</button>
        </div>
    </div>

    <div class="result">
        <div class= "content-bg">
            <div class="card-body pb-0 text-center">
              <h3>Invisible Influences - Questionnaire Visualization</h3> <!--This is where we put the title that will appear in the card-->
            </div>
            <div class= "row justify-content-center align-self-center">
                <div class= "col-s12"> <!--We are making some design tweeks for visual appeal-->
                  <div class= "card">
                      <div class= "card-content" width= "500" height= "500">
                        <canvas id= "secondChart" width= "900" height= "562"></canvas> 
                      </div>
                  </div>
                </div>
                <div class= "col-s12">
                  <div class= "card">
                      <div class= "card-content">
                        <canvas id= "firstChart" width="900" height= "562"></canvas>
                      </div>
                  </div>
                </div>
        
            </div>
          </div>
    </div>
    <script src="main.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  
  <script src="https://cdn.jsdelivr.net/npm/chart.js@3.0.1"></script>
</body>
      );
}

export default App;
