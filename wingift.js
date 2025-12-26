
const correctAnswers=['E','E','E','E','E'];
const form=document.querySelector('.question-form');
const result=document.querySelector('.result');

form.addEventListener('submit',e=>{
    e.preventDefault();

    let score=0;
    const userAnsers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value];
	console.log(userAnsers);
    userAnsers.forEach((answer,index) =>{
        if(answer === correctAnswers[index])
        {
            score +=20;
        }
    })

    if(score == 100)
    {
        result.querySelector('p').textContent = "You win the gift";
        result.querySelector('p').style.fontWeight = "bold";
    }
    else
    {
        result.querySelector('p').textContent = "Sorry...You lost the gift"; 
        result.querySelector('p').style.fontWeight = "bold";
    }

    result.classList.remove('d-none');
})

const button=document.querySelector('button');
const mainPopup=document.querySelector('.main-popup');
const close=document.querySelector('.popup-close');

button.addEventListener('click',()=>{
    mainPopup.style.display='block';
})

close.addEventListener('click',()=>{
    mainPopup.style.display='none';
	form.reset();
},10);