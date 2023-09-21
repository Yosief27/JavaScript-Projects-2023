const data=[
    {
        question:"which attribute help radio button to choose noly one?",
        a:"id",
        b:"name",
        c:"for",
        answer:"b"


    },
{
        question:"old one out?",
        a:"p",
        b:"div",
        c:"nav",
        d:"label",
        answer:"d"


    },
{
        question:"which css attribute used to change element layout?",
        a:"display",
        b:"background",
        c:"position",
        d:"fix",
        answer:"c"


    }


]
const question=document.getElementById("questionId")
const aAnswer=document.getElementById("a_text")
const bAnswer=document.getElementById("b_text")
const cAnswer=document.getElementById("c_text")
const dAnswer=document.getElementById("d_text")
const submitBtn=document.getElementById("submitId");

let counterQuestion=0;
const updateQuestion=()=>{
    question.innerHTML=data[counterQuestion].question;
    aAnswer.innerHTML=data[counterQuestion].a;
    bAnswer.innerHTML=data[counterQuestion].b;
    cAnswer.innerHTML=data[counterQuestion].c;
    dAnswer.innerHTML=data[counterQuestion].d;

    
}
updateQuestion()

let rightAnswer=0;
function getChecked(){
    const answers=document.querySelectorAll('input');
    
    let checkradio=false;
    answers.forEach((answer)=>{
      
        if(answer.checked){
            if(answer.id===data[counterQuestion].answer){
                rightAnswer++;
                answer.checked=false;
                checkradio=true;
 
            }
            answer.checked=false;
            checkradio=true;
       }

    }
    
    )
    console.log(checkradio);
    return checkradio;


}
submitBtn.addEventListener("click",()=>{
   
    if(!getChecked()){
        alert(
            'please choice an answer!'
        )
      return ;
    }
    if(!(counterQuestion+1<data.length)){
         alert(`You get ${rightAnswer} right answers from ${data.length} questions`);
       console.log(`${counterQuestion} and ${data.length}`);
       counterQuestion=0;
       updateQuestion();
   return;

    }
    counterQuestion++;
    updateQuestion()
  

})