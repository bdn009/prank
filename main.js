function hideClassById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('hidden');
}
function showClassById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('hidden');
}
// utility
function genderMale(){
    hideClassById('gender-screen');
    showClassById('afterMale');
}
function genderFemale(){
    hideClassById('gender-screen');
    showClassById('afterFemale');
}
function maleYes(){
    hideClassById('afterMale');
    showClassById('maleLast');

    const audio=new Audio('air horn.mp3');
    audio.play()
}
function maleNo(){
    const yesButton = document.querySelector('.maleYes');
    const noButton = document.querySelector('.maleNo');
    const newSize = parseInt(window.getComputedStyle(yesButton).fontSize) + 50;
    yesButton.style.fontSize = newSize + 'px';
        if (newSize > 200) {
            noButton.style.display = 'none';
        }
}
function femaleYes(){
    hideClassById('afterFemale');
    showClassById('femaleLast');

    const audio=new Audio('Just do it.mp3');
    audio.play()
}
function femaleNo(){
    const yesButton = document.querySelector('.femaleYes');
    const noButton = document.querySelector('.femaleNo');
    const newSize = parseInt(window.getComputedStyle(yesButton).fontSize) + 50;
    yesButton.style.fontSize = newSize + 'px';
        if (newSize > 200) {
            noButton.style.display = 'none';
        }
}
function homeBtn(){
    hideClassById('maleLast');
    hideClassById('femaleLast');
    showClassById('gender-screen');
    location.reload();
}