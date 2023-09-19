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
submitBtn.addEventListener("click",()=>{
    counterQuestion++;
    updateQuestion()
})