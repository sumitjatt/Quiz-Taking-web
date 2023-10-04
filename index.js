const question = [
    {
        'ques':'Which of following is markup language ? ',
        'a':'HTML',
        'b':'CSS',
        'c':'Java',
        'd':'JavaScript',
        'correct':'a'
    },
    {
        'ques':'CSS stands for ?',
        'a':'Common Style Sheet',
        'b':'Core Style Sheet',
        'c':'Cascading Style Sheet',
        'd':'Clear Some Style',
        'correct':'c'
    },
    {
        'ques':'Which of following defines structure of webpage?',
        'a':'HTML',
        'b':'CSS',
        'c':'Java',
        'd':'JavaScript',
        'correct':'a'
    },
    {
        'ques':'When was JavaScript launched ?',
        'a':'1996',
        'b':'1995',
        'c':'1994',
        'd':'None of these',
        'correct':'b'
    }
];

let index = 0 ;
const quest = document.querySelector('.q');
const inp = document.querySelectorAll(".inpu");

const loadQuest = ()=>{
    quest.innerHTML = `${index+1}) ${question[index].ques}`;
    inp[0].nextElementSibling.innerHTML = question[index].a;
    inp[1].nextElementSibling.innerHTML = question[index].b;
    inp[2].nextElementSibling.innerHTML = question[index].c;
    inp[3].nextElementSibling.innerHTML = question[index].d;
}

let right = 0 ;
let total = question.length ;
const submit = ()=>{
    check();
    index++;
    if(index == total){
        endQuiz();
    }
    reset();
    loadQuest();
}

const check = ()=>{
    inp.forEach((input)=>{
        if(input.checked){
            if(input.value == question[index].correct){
                right++;
            }
        }
    })
}

const reset = ()=>{
    inp.forEach((input)=>{
        input.checked = false;
    })
}

const endQuiz = ()=>{
    const box = document.querySelector(".box")
    box.innerHTML = `<h1  class = "res">Thanks for Playing the Quiz</h1>
                    <h2 class = "res">${right} out of ${total} are correct</h2>`;
}
//initial call
loadQuest()