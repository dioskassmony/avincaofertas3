/**
 * SET DOM
 * 
 */


const inputName = document.querySelector('#name');
const inputSurname = document.querySelector('#surname');
const inputNumber = document.querySelector('#number');
const inputEmail = document.querySelector('#email');
const btnNextPassenger = document.querySelector('#btn-next-passenger');
const btnNextStep = document.querySelector('#next-step');

const labelEditing = document.querySelector('#editing-label');
const loader = document.querySelector('.loader');
const passengersSelect = document.querySelector('#select-passengers');
let selectedOption = '';

setTimeout(() =>{
    try{
        document.querySelector('body').classList.remove('sb-hidden');
        loader.classList.remove('show');

        /* --- FLIGHT RESUME --- */
        document.querySelector('#origin-code').textContent = info.flightInfo.origin.code;
        document.querySelector('#destination-code').textContent = info.flightInfo.destination.code;
        let finalPrice = "- -";
        if(info.flightInfo.ticket_nat === 'NAC'){
            finalPrice = pricesNAC[info.flightInfo.ticket_sched][info.flightInfo.ticket_type] * (info.flightInfo.adults + info.flightInfo.children);
            if(info.flightInfo.type === 1){
                finalPrice = finalPrice * 2;
            }
        }else if(info.flightInfo.ticket_nat === 'INT'){
            finalPrice = pricesNAT[info.flightInfo.ticket_sched][info.flightInfo.ticket_type] * (info.flightInfo.adults + info.flightInfo.children);
            if(info.flightInfo.type === 1){
                finalPrice = finalPrice * 2;
            }
        }else{
            console.log('flight resume error');
        }

        document.querySelector('#flight-cost').textContent = formatPrice(finalPrice);

        if(info.flightInfo.adults + info.flightInfo.children + info.flightInfo.babies < 2){
            btnNextPassenger.remove();
        }

        updateSelect();

        passengersSelect.addEventListener('input', () =>{
            console.log('Select passenger');
            const selected = passengersSelect.value.split('-');
            selectedOption = passengersSelect.value;

            labelEditing.textContent = `${info.passengersInfo[selected[0]][parseInt(selected[1])].name} ${info.passengersInfo[selected[0]][parseInt(selected[1])].surname}`;

            if(info.passengersInfo[selected[0]][parseInt(selected[1])].name.split(' ')[0] !== 'Adulto' && selected[0] === 'adults'){
                inputName.value = info.passengersInfo[selected[0]][parseInt(selected[1])].name; 21
                inputSurname.value = info.passengersInfo[selected[0]][parseInt(selected[1])].surname;
                return;
            }

            if(info.passengersInfo[selected[0]][parseInt(selected[1])].name.split(' ')[0] !== 'Niño' && selected[0] === 'children'){
                inputName.value = info.passengersInfo[selected[0]][parseInt(selected[1])].name;
                inputSurname.value = info.passengersInfo[selected[0]][parseInt(selected[1])].surname;
                return;
            }

            if(info.passengersInfo[selected[0]][parseInt(selected[1])].name.split(' ')[0] !== 'Bebé' && selected[0] === 'babies'){
                inputName.value = info.passengersInfo[selected[0]][parseInt(selected[1])].name;
                inputSurname.value = info.passengersInfo[selected[0]][parseInt(selected[1])].surname;
                return;
            }

            inputName.value = '';
            inputSurname.value = '';

        });

        let launchSelect = new Event('input', {cancelable: true});

        passengersSelect.dispatchEvent(launchSelect);

        console.log("Index ON")
    }catch(err){
        console.log(err);
    }
}, 2000);



inputName.addEventListener('input', (e) =>{
    const selected = passengersSelect.value.split('-');

    try{
        e.target.classList.remove('input-error');
        e.target.nextElementSibling.classList.remove('show');
    }catch(err){
        console.log(err);
    }

    if(e.target.value === ''){
        if(selected[0] === 'adults'){
            console.log('1');
            info.passengersInfo[selected[0]][parseInt(selected[1])].name = `Adulto ${parseInt(selected[1]) + 1}`;
        }else if(selected[0] === 'children'){
            console.log('2');
            info.passengersInfo[selected[0]][parseInt(selected[1])].name = `Niño ${parseInt(selected[1]) + 1}`;
        }else if(selected[0] === 'babies'){
            console.log('3');
            info.passengersInfo[selected[0]][parseInt(selected[1])].name = `Bebé ${parseInt(selected[1]) + 1}`;
        }


        labelEditing.textContent = `${info.passengersInfo[selected[0]][parseInt(selected[1])].name} ${info.passengersInfo[selected[0]][parseInt(selected[1])].surname}`;
        updateLS();
        updateSelect();
        return;
    }

    info.passengersInfo[selected[0]][parseInt(selected[1])].name = e.target.value;

    labelEditing.textContent = `${info.passengersInfo[selected[0]][parseInt(selected[1])].name} ${info.passengersInfo[selected[0]][parseInt(selected[1])].surname}`;
    updateLS();
    updateSelect();
});



inputSurname.addEventListener('input', (e) =>{
    const selected = passengersSelect.value.split('-');

    try{
        e.target.classList.remove('input-error');
        e.target.nextElementSibling.classList.remove('show');
    }catch(err){
        console.log(err);
    }

    if(e.target.value === ''){
        if(selected[0] === 'adults'){
            info.passengersInfo[selected[0]][parseInt(selected[1])].surname = '';
        }else if(selected[0] === 'children'){
            info.passengersInfo[selected[0]][parseInt(selected[1])].surname = '';
        }else if(selected[0] === 'babies'){
            info.passengersInfo[selected[0]][parseInt(selected[1])].surname = '';
        }


        labelEditing.textContent = `${info.passengersInfo[selected[0]][parseInt(selected[1])].name} ${info.passengersInfo[selected[0]][parseInt(selected[1])].surname}`;
        updateLS();
        updateSelect();
        return;
    }

    info.passengersInfo[selected[0]][parseInt(selected[1])].surname = e.target.value;

    labelEditing.textContent = `${info.passengersInfo[selected[0]][parseInt(selected[1])].name} ${info.passengersInfo[selected[0]][parseInt(selected[1])].surname}`;
    updateLS();
    updateSelect();
});



inputEmail.addEventListener('input', e => {
    try{
        e.target.classList.remove('input-error');
        e.target.nextElementSibling.classList.remove('show');
    }catch(err){
        console.log(err);
    }
});



inputNumber.addEventListener('input', e => {
    try{
        e.target.classList.remove('input-error');
        e.target.nextElementSibling.classList.remove('show');
    }catch(err){
        console.log(err);
    }
});



btnNextPassenger.addEventListener('click', (e) =>{
    e.preventDefault();
    let totalOptions = passengersSelect.options.length;

    if(passengersSelect.selectedIndex < totalOptions -1){
        passengersSelect.selectedIndex++;

        let launchSelect = new Event('input', {cancelable: true});
        passengersSelect.dispatchEvent(launchSelect);
    }else{
        passengersSelect.selectedIndex = 0;

        let launchSelect = new Event('input', {cancelable: true});
        passengersSelect.dispatchEvent(launchSelect);
    }

    
});



btnNextStep.addEventListener('submit', e =>{
    e.preventDefault();

    if(inputName.value !== ''){
        if(inputSurname.value !== ''){
            if(inputEmail.value !== ''){
                if(inputNumber.value !== ''){

                    window.location.href = 'payment.html';

                }else{
                    console.log('falla');
                    inputNumber.classList.add('input-error');
                    inputNumber.nextElementSibling.classList.add('show');
                }
            }else{
                inputEmail.classList.add('input-error');
                inputEmail.nextElementSibling.classList.add('show');
            }
        }else{
            inputSurname.classList.add('input-error');
            inputSurname.nextElementSibling.classList.add('show');
        }
    }else{
        inputName.classList.add('input-error');
        inputName.nextElementSibling.classList.add('show');
    }
});




/**
 * FUNCTIONS
 * 
 */
function updateSelect(){
    passengersSelect.innerHTML = '';

    info.passengersInfo.adults.forEach((adult, index) => {
        passengersSelect.innerHTML += `
            <option value="adults-${index}"> ${adult.name} ${adult.surname}</option>
        `
    });
    info.passengersInfo.children.forEach((children, index) => {
        passengersSelect.innerHTML += `
            <option value="children-${index}"> ${children.name} ${children.surname}</option>
        `
    });
    info.passengersInfo.babies.forEach((babie, index) => {
        passengersSelect.innerHTML += `
            <option value="babies-${index}"> ${babie.name} ${babie.surname}</option>
        `
    });

    selectedOption !== '' ? passengersSelect.value = selectedOption : '';
}

function formatPrice(number){
    return number.toLocaleString('es', {
        maximumFractionDigits: 0,
        useGrouping: true
    });
}

function updateLS(){
    LS.setItem('info', JSON.stringify(info));
}