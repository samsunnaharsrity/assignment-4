let interviewBtnList =[];
let rejectedBtnList = [];

let total = document.getElementById("totalCount");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");

//console.log(totalCount,interviewCount,rejectedCount);

let allCardsSec = document.getElementById("allCardSec");
let availableJob = document.getElementById("availableJob");
//console.log(allCardsSec.children.length);
let mainSec = document.querySelector('main')

let filteredSec = document.getElementById('filteredSec')
//console.log(mainSec)

//call btn
const allBtn = document.getElementById("all-btn");


const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn= document.getElementById("rejected-btn" );



function calAllCardSec() {
     total.innerText = allCardsSec.children.length;
     interviewCount.innerText = allCardsSec.length;
     rejectedCount.innerText = allCardsSec.length;


     availableJob.innerText = allCardsSec.children.length;


}
//calAllCardSec()

function toggleStyle(id){
    allBtn.classList.add('text-gray-500' , 'bg-white');
    interviewBtn.classList.add('text-gray-500' , 'bg-white');
    rejectedBtn.classList.add('text-gray-500' , 'bg-white');


    allBtn.classList.remove('text-white','bg-blue-500');
    interviewBtn.classList.remove('text-white','bg-blue-500');
    rejectedBtn.classList.remove('text-white','bg-blue-500');
 //console.log('clicked', id);
 
//toggleStyle theke remove id gulo selected nam er id te add & toggleStyle theke  add id gulo remove dite hbe

    const selected = document.getElementById(id)

    selected.classList.add('text-white','bg-blue-500')
    selected.classList.remove('text-gray-500','bg-white')
   
    if(id =="interview-btn"){
        allCardsSec.classList.add('hidden');
        filteredSec.classList.remove('hidden')
    }
    else if(id == 'all-btn') {
        allCardsSec.classList.remove('hidden');
        filteredSec.classList.add('hidden')
    }
    else if (id == 'rejected-btn'){
        allCardsSec.classList.add('hidden')
        filteredSec.classList.remove('hidden')
    }
}


mainSec.addEventListener('click', function(event) {


if(event.target.classList.contains('interview-btn')){

    const cards = event.target.parentNode.parentNode;
    //console.log(parentNode);
    const mobileFirst = cards.querySelector('.mobile-first').innerText;
    const developers = cards.querySelector('.developers').innerText
    const payment = cards.querySelector('.payment').innerText
    const btnText = cards.querySelector('.btn').innerText
    const notes  = cards.querySelector('.notes ').innerText
    //console.log(mobileFirst,developersP,remoteNote,btnText,notes);

    
//calAllCardSec()
    const totalInfo = {
        mobileFirst,
        developers,
        payment:'Interview',
        btnText,
        notes
    };


    const jobExist = interviewBtnList.find(item => item.mobileFirst === totalInfo.mobileFirst)


    cards.querySelector('.btn').innerText ='Interview'
    if(!jobExist){
       interviewBtnList.push(totalInfo)
    }
    
}

if(event.target.classList.contains('rejected-btn')){

    const cards = event.target.parentNode.parentNode;
    //console.log(parentNode);
    const mobileFirst = cards.querySelector('.mobile-first').innerText;
    const developers = cards.querySelector('.developers').innerText
    const payment = cards.querySelector('.payment').innerText
    const btnText = cards.querySelector('.btn').innerText
    const notes  = cards.querySelector('.notes ').innerText
    //console.log(mobileFirst,developersP,remoteNote,btnText,notes);

    
//calAllCardSec()
    const totalInfo = {
        mobileFirst,
        developers,
        payment:'Rejected',
        btnText,
        notes
    };


    const jobExist = interviewBtnList.find(item => item.mobileFirst === totalInfo.mobileFirst)


    cards.querySelector('.btn').innerText ='Rejected'
    if(!jobExist){
       interviewBtnList.push(totalInfo)
    }
    
}
//console.log(jobExist);
calAllCardSec()

renderInterviewBtn()
   
})


function renderInterviewBtn() {
    filteredSec.innerHTML = ''


    for(let item of interviewBtnList){
        
        
    let div = document.createElement('div')

    div.className = 'w-11/12 mx-auto bg-base-200 mt-10 ';
    div.innerHTML = `
        
    <div class="allCards bg-white shadow p-3  lg:flex justify-between md:grid grid-cols-1  ">
        <!--main part1-->
        <div class="space-y-4 ">
            <div class="space-y-4">
                <div>
                    <p class="mobile-first text-2xl font-bold">${item. mobileFirst}</p>
                    <p class="developers text-sm text-gray-500">${item. developers}</p>
                </div>
               <div>
                     <p class="payment text-sm text-gray-500" >${item.payment}</p>
                </div>  
                
                <div>
                <p class="btn btn-soft btn-primary">${item.btnText}</p>
                <p class="notes text-sm text-gray-500" >${item.notes}</p>
                </div>

            </div>
            <div>
                <button class="interview-btn btn btn-outline btn-primary">Interview</button>
                <button class="rejected-btn btn btn-outline btn-error">Rejected</button>
            </div>
        </div>
        <!--main part-2-->
        <div  class=" py-10">
            <button><i class="fa-solid fa-trash"></i></button>
        </div>
    </div>  `
        filteredSec.appendChild(div)
    }
    
}