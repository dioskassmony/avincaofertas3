/**
 * SET DOM
 * 
 */
const modal = document.querySelector('#modal-select-ticket');

const loader = document.querySelector('.loader');
setTimeout(() =>{
    try{
        document.querySelector('body').classList.remove('sb-hidden');
        loader.classList.remove('show');

        if(info.edit === 1){
            btnSearchFlight.click();
        }
        console.log("Index ON")
    }catch(err){
        console.log(err);
    }
}, 2500);

const closeModalTicket = document.querySelector('#modal-close-ticket');
closeModalTicket.addEventListener('click', () =>{
    try{
        modal.classList.remove('show');
    }catch(e){
        console.log(e);
    }
});


/* --- HEADER --- */
document.querySelector('#origin-code').textContent = info.flightInfo.origin.code;
document.querySelector('#destination-code').textContent = info.flightInfo.destination.code;
document.querySelector('#flight-date').textContent = monthDic[info.flightInfo.flightDates[0].split('-')[1] - 1] + ' ' +info.flightInfo.flightDates[0].split('-')[2];
document.querySelector('#flight-label-1').textContent = `Selecciona tu vuelo de salida - ${formatDateType1(info.flightInfo.flightDates[0])}`;
document.querySelector('#flight-label-2').textContent = `${info.flightInfo.origin.city} a ${info.flightInfo.destination.city}`;
document.querySelector('#flight-label-3').textContent = `${formatDateType1(info.flightInfo.flightDates[0])}`;


/* --- FLIGHT CARDS --- */
if(info.flightInfo.origin.country === 'Colombia' && info.flightInfo.destination.country === 'Colombia'){
    document.querySelector('#flight-price-0').textContent = formatPrice(pricesNAC.flight_1.xs);
    document.querySelector('#flight-price-1').textContent = formatPrice(pricesNAC.flight_1.xs);
    document.querySelector('#flight-price-2').textContent = formatPrice(pricesNAC.flight_2.xs);
    document.querySelector('#flight-price-3').textContent = formatPrice(pricesNAC.flight_3.xs);
}else{
    document.querySelector('#flight-price-0').textContent = formatPrice(pricesINT.flight_1.xs);
    document.querySelector('#flight-price-1').textContent = formatPrice(pricesINT.flight_1.xs);
    document.querySelector('#flight-price-2').textContent = formatPrice(pricesINT.flight_2.xs);
    document.querySelector('#flight-price-3').textContent = formatPrice(pricesINT.flight_3.xs);
}







/**
 * BUTTONS
 * 
 */
const btnEditFlight = document.querySelector('#btn-edit-flight');
btnEditFlight.addEventListener('click', ()=>{
    info.edit = 1;
    updateLS();
    window.location.href = 'index.html';
});









/**
 * FUNCTIONS
 * 
 */
function updateLS(){
    LS.setItem('info', JSON.stringify(info));
}

function formatDateType1(date){
    let format = new Date(parseInt(date.split('-')[0]), parseInt(date.split('-')[1]) - 1, parseInt(date.split('-')[2]) - 1);
    return dayDic[format.getDay()] + ', ' + monthDic[format.getMonth()] + ' ' + date.split('-')[2];
}

function formatPrice(number){
    return number.toLocaleString('es', {
        maximumFractionDigits: 0,
        useGrouping: true
    });
}

function loadFlight(flight_sched){
    //Open modal
    try{
        modal.classList.add('show');
    }catch(err){
        console.log(err);
    }

    info.flightInfo.ticket_sched = flight_sched;
    updateLS();

    const xsPrice = document.querySelector('#xs');
    const sPrice = document.querySelector('#s');
    const mPrice = document.querySelector('#m');
    if(info.flightInfo.origin.country === 'Colombia' && info.flightInfo.destination.country === 'Colombia'){
        // Set type
        info.flightInfo.ticket_nat = 'NAC';
        updateLS();

        if(flight_sched === 'flight_1'){
            xsPrice.textContent = formatPrice(pricesNAC.flight_1.xs)
            sPrice.textContent = formatPrice(pricesNAC.flight_1.s)
            mPrice.textContent = formatPrice(pricesNAC.flight_1.m)
        }else if(flight_sched === 'flight_2'){
            xsPrice.textContent = formatPrice(pricesNAC.flight_2.xs)
            sPrice.textContent = formatPrice(pricesNAC.flight_2.s)
            mPrice.textContent = formatPrice(pricesNAC.flight_2.m)
        }else if(flight_sched === 'flight_3'){
            xsPrice.textContent = formatPrice(pricesNAC.flight_3.xs)
            sPrice.textContent = formatPrice(pricesNAC.flight_3.s)
            mPrice.textContent = formatPrice(pricesNAC.flight_3.m)
        }
    }else{
        // Set type
        info.flightInfo.ticket_nat = 'INT';
        updateLS();

        if(flight_sched === 'flight_1'){
            xsPrice.textContent = formatPrice(pricesINT.flight_1.xs)
            sPrice.textContent = formatPrice(pricesINT.flight_1.s)
            mPrice.textContent = formatPrice(pricesINT.flight_1.m)
        }else if(flight_sched === 'flight_2'){
            xsPrice.textContent = formatPrice(pricesINT.flight_2.xs)
            sPrice.textContent = formatPrice(pricesINT.flight_2.s)
            mPrice.textContent = formatPrice(pricesINT.flight_2.m)
        }else if(flight_sched === 'flight_3'){
            xsPrice.textContent = formatPrice(pricesINT.flight_3.xs)
            sPrice.textContent = formatPrice(pricesINT.flight_3.s)
            mPrice.textContent = formatPrice(pricesINT.flight_3.m)
        }
    }
}

function nextStep(type){
    info.flightInfo.ticket_type = type;
    updateLS();
    if(info.flightInfo.type === 1){
        window.location.href = 'flight-detail-back.html';
    }else{
        window.location.href = 'step-two.html';
    }
    
}