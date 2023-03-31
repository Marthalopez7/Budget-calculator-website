const data = [
    [ 'Accountant', 55650 ],
    [ 'Advance Tractor/Trailer Driver', 53550 ],
    [ 'Agricultural Engineer', 56700 ],
    [ 'Architect', 53550 ],
    [ 'Auto Tech/Mechanic', 49350 ],
    [ 'Aviation Tech. Mechanic', 50400 ],
    [ 'Biologist', 54600 ],
    [ 'Bus Driver', 37800 ],
    [ 'Business Development Officer', 54600 ],
    [ 'Business Manager Hotel etc.', 61950 ],
    [ 'CNC Manufacturing', 80850 ],
    [ 'Carpenter', 47250 ],
    [ 'Chef', 52500 ],
    [ 'Chemist', 56700 ],
    [ 'Civil Engineering Technician', 68250 ],
    [ 'Commercial Driver', 51450 ],
    [ 'ComputerTechnician', 46200 ],
    [ 'Conserv./Environ. Science', 72450 ],
    [ 'Correctional Officer', 48300 ],
    [ 'Cosmetologist', 36750 ],
    [ 'Credit Union/Bank Manager', 61950 ],
    [ 'Daycare Director', 37800 ],
    [ 'Dentist', 115500 ],
    [ 'Detective', 60900 ],
    [ 'Diesel Tech/Mechanic', 55650 ],
    [ 'Doctor/Physician', 147000 ],
    [ 'Electrician', 54600 ],
    [ 'Electronic Engineer', 75600 ],
    [ 'EMT', 34650 ],
    [ 'Energy Management PG&E', 106050 ],
    [ 'Engineer', 72450 ],
    [ 'Fashion Designer', 63000 ],
    [ 'Fire Fighter', 49350 ],
    [ 'Forest Ranger', 52500 ],
    [ 'Graphic/Media Designer', 58800 ],
    [ 'H/C HVAC', 63000 ],
    [ 'Highway Patrol', 84000 ],
    [ 'Home Inspector', 56700 ],
    [ 'Industrial Mechanic', 46200 ],
    [ 'Interior Designer', 49350 ],
    [ 'Investment Analyst', 66150 ],
    [ 'Lab Technician', 42000 ],
    [ 'Landscaper Horticulture', 48300 ],
    [ 'lawyer', 86100 ],
    [ 'Marketing/Sales Manager', 58800 ],
    [ 'Media/Communications', 45150 ],
    [ 'Medical RepairTech.', 52500 ],
    [ 'Military', 55650 ],
    [ 'Nuse', 66150 ],
    [ 'Nutitionist', 45150 ],
    [ 'Oceanographer', 69300 ],
    [ 'Pastor', 50400 ],
    [ 'PGBEATT Technician', 78750 ],
    [ 'Pharmacist', 105000 ],
    [ 'Photographer', 45150 ],
    [ 'Physical Therapist', 72450 ],
    [ 'Pilot Commercial', 78750 ],
    [ 'Plumber', 52500 ],
    [ 'Police Officer', 53550 ],
    [ 'Principal', 93450 ],
    [ 'Probation Officer', 44100 ],
    [ 'Psychologist', 77700 ],
    [ 'Retail Sales Associate', 34650 ],
    [ 'Social Worker', 50400 ],
    [ 'Solar Energy Tech.', 53550 ],
    [ 'Teacher', 52500 ],
    [ 'UPS/Fed Ex Driver', 68250 ],
    [ 'Veterinarian', 82950 ],
    [ 'Welder/Metal Specialist', 47250 ],
    [ 'Wind EnergyTechnician', 56700 ]
]
class Job {
    constructor(name, length) {
        this.name = name
        this.length = length
    }
}

const careerList = document.getElementById('career-list');
const fedtax =  document.getElementById('ft');
const statetax = document.getElementById('st');
const socSec = document.getElementById('ss');
const medi = document.getElementById('med');
const stateDis = document.getElementById('sd');
const reti = document.getElementById('rt');
const medInsur = document.getElementById('mi');
const co = document.getElementById('co');
const income = document.getElementById('income');
const gmi = document.getElementById('gmi');
const housePay = document.getElementById('hp');

const table = document.querySelector('.table')

const jobList = new Job ()
for(job of data){
    let element = document.createElement('li');
    element.innerHTML = `<span class="title">${job[0]}</span> <span class="salary">$${job[1]}.00</span>`;
    element.addEventListener('click', (e) => selectjob(e.target))
    element.setAttribute('salary', job[1]);
    careerList.appendChild(element);
}

function monthlyIncome(salary) {
    gmi.innerText = salary / 12
}

function selectjob(element){
element.classList.toggle('selected')
calculate(element.getAttribute('salary'))
monthlyIncome(element.getAttribute('salary'))
housePayment(element.getAttribute('salary'))
}

function calculate(salary){
fedtax.innerText= salary * 0.12
statetax.innerText = salary * 0.07
socSec.innerText = salary * 0.062 
medi.innerText = salary * 0.0145
stateDis.innerText = salary * 0.01 
reti.innerText = salary * 0.05 
medInsur.innerText = salary + 180
}

function housePayment(salary){
    housePay.innerText = salary * 0.33
}

// function showjob(salary) {
//      co.innerText = selectjob(e.target) 
//      co.innerText = job.name
// }

// function currentbalance(balance) {
//     let startingBalance = 0;
//     let calculateBalance = 0;

//     if(startingBalance && calculateBalance){
//         if(startingBalance == )
//     }
// }