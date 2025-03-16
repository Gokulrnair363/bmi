const calculateButton=document.getElementById('calculateButton')

const weightInput=document.getElementById('weight1')
const heightInput=document.getElementById('height1')
const resultbmiscore=document.getElementById('resultbmiscore')
const resultbmicategory=document.getElementById('resultbmicategory')
const bmiindicator=document.getElementById('bmiindicato')
calculateButton.addEventListener('click',() =>{
    // calculatebmi()
})

function calculatebmi(){
    const weight=parseFloat(weightInput.value)
    const height=parseFloat(heightInput.value)/100
    if(weight > 0 && height > 0){
        const bmiscore=(weight/(height*height)).toFixed(1)
        resultbmiscore.textContent=bmiscore
        showResultBmicategory(bmiscore)
        showbmiindicator(bmiscore)
    }else{
        alert('please enter valid height and weight!')
    }
}
function   showResultBmicategory(bmiscore){
if(bmiscore<18.5){
    resultbmiscore.style.color = '#0000FF'
    resultbmicategory.textContent='Underweight'
}else if(bmiscore>=18.5 && bmiscore<=24.9){
     resultbmiscore.style.color = '#008000'
    resultbmicategory.textContent='Normal'
}else if(bmiscore>=25 && bmiscore<=29.9){
    resultbmiscore.style.color = '#FFA500'
   resultbmicategory.textContent='Overweight'
}
else{
       resultbmiscore.style.color = '#FF0000'
   resultbmicategory.textContent='Obese'
}
}
function showbmiindicator(bmiscore){
let firstScoreRange, lastScoreRange
let firstPercentRange, LastPercentRange
if(bmiscore<18.5){
  firstScoreRange=0
  lastScoreRange=18.49
  firstPercentRange=0
  LastPercentRange=25
}else if(bmiscore>=18.5 && bmiscore<=24.9){
    firstScoreRange=18.5
    lastScoreRange=24.9
    firstPercentRange=25
    LastPercentRange=50
}else if(bmiscore>=25 && bmiscore<=29.9){
    firstScoreRange=25
    lastScoreRange=39.9
    firstPercentRange=50
    LastPercentRange=75
}
else{
    firstScoreRange=30
    lastScoreRange=40
    firstPercentRange=75
    LastPercentRange=100
}
const slope=(LastPercentRange - firstPercentRange)/(lastScoreRange -firstScoreRange)
const intercept= firstPercentRange - slope *firstScoreRange
const percentage=Math.min(slope *bmiscore +intercept, 100)
bmiindicator.style.left=percentage + '%'
console.log(percentage);

}