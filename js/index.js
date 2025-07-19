/**
 * UI JS
 */
// const destinations = [
//     {
//         city: "Toronto",
//         country: "Canadá",
//         code: "YYZ"
//     },
//     {
//         city: "Dallas",
//         country: "Estados Unidos",
//         code: "DFW"
//     },
//     {
//         city: "Fort Lauderdale",
//         country: "Estados Unidos",
//         code: "FLL"
//     },
//     {
//         city: "Houston",
//         country: "Estados Unidos",
//         code: "IAH"
//     },
//     {
//         city: "Los Ángeles",
//         country: "Estados Unidos",
//         code: "LAX"
//     },
//     {
//         city: "Miami",
//         country: "Estados Unidos",
//         code: "MIA"
//     },
//     {
//         city: "Nueva York",
//         country: "Estados Unidos",
//         code: "JFK"
//     },
//     {
//         city: "Orlando",
//         country: "Estados Unidos",
//         code: "MCO"
//     },
//     {
//         city: "San Francisco",
//         country: "Estados Unidos",
//         code: "SFO"
//     },
//     {
//         city: "Washington",
//         country: "Estados Unidos",
//         code: "IAD"
//     },
//     {
//         city: "Cancún",
//         country: "México",
//         code: "CUN"
//     },
//     {
//         city: "Ciudad de México",
//         country: "México",
//         code: "MEX"
//     },
//     {
//         city: "Ciudad de Belice",
//         country: "Belice",
//         code: "BZE"
//     },
//     {
//         city: "Liberia",
//         country: "Costa Rica",
//         code: "LIR"
//     },
//     {
//         city: "San José",
//         country: "Costa Rica",
//         code: "SJO"
//     },
//     {
//         city: "San Salvador",
//         country: "El Salvador",
//         code: "SAL"
//     },
//     {
//         city: "Guatemala",
//         country: "Guatemala",
//         code: "GUA"
//     },
//     {
//         city: "Flores",
//         country: "Guatemala",
//         code: "FRS"
//     },
//     {
//         city: "Tegucigalpa",
//         country: "Honduras",
//         code: "TGU"
//     },
//     {
//         city: "San Pedro Sula",
//         country: "Honduras",
//         code: "SAP"
//     },
//     {
//         city: "Managua",
//         country: "Nicaragua",
//         code: "MGA"
//     },
//     {
//         city: "Panamá",
//         country: "Panamá",
//         code: "PTY"
//     },
//     {
//         city: "Oranjestad",
//         country: "Aruba",
//         code: "AUA"
//     },
//     {
//         city: "Bridgetown",
//         country: "Barbados",
//         code: "BGI"
//     },
//     {
//         city: "La Habana",
//         country: "Cuba",
//         code: "HAV"
//     },
//     {
//         city: "Willemstad",
//         country: "Curazao",
//         code: "CUR"
//     },
//     {
//         city: "San Juan",
//         country: "Puerto Rico",
//         code: "SJU"
//     },
//     {
//         city: "Punta Cana",
//         country: "República Dominicana",
//         code: "PUJ"
//     },
//     {
//         city: "Santo Domingo",
//         country: "República Dominicana",
//         code: "SDQ"
//     },
//     {
//         city: "Buenos Aires",
//         country: "Argentina",
//         code: "EZE"
//     },
//     {
//         city: "La Paz",
//         country: "Bolivia",
//         code: "LPB"
//     },
//     {
//         city: "Santa Cruz de la Sierra",
//         country: "Bolivia",
//         code: "VVI"
//     },
//     {
//         city: "Arauca",
//         country: "Colombia",
//         code: "AUC"
//     },
//     {
//         city: "Armenia",
//         country: "Colombia",
//         code: "AXM"
//     },
//     {
//         city: "Barrancabermeja",
//         country: "Colombia",
//         code: "EJA"
//     },
//     {
//         city: "Barranquilla",
//         country: "Colombia",
//         code: "BAQ"
//     },
//     {
//         city: "Bogotá",
//         country: "Colombia",
//         code: "BOG"
//     },
//     {
//         city: "Bucaramanga",
//         country: "Colombia",
//         code: "BGA"
//     },
//     {
//         city: "Cali",
//         country: "Colombia",
//         code: "CLO"
//     },
//     {
//         city: "Cartagena",
//         country: "Colombia",
//         code: "CTG"
//     },
//     {
//         city: "Cúcuta",
//         country: "Colombia",
//         code: "CUC"
//     },
//     {
//         city: "Florencia",
//         country: "Colombia",
//         code: "FLA"
//     },
//     {
//         city: "Guapi",
//         country: "Colombia",
//         code: "GPI"
//     },
//     {
//         city: "Ibagué",
//         country: "Colombia",
//         code: "IBE"
//     },
//     {
//         city: "Ipiales",
//         country: "Colombia",
//         code: "IPI"
//     },
//     {
//         city: "Leticia",
//         country: "Colombia",
//         code: "LET"
//     },
//     {
//         city: "Manizales",
//         country: "Colombia",
//         code: "MZL"
//     },
//     {
//         city: "Medellín",
//         country: "Colombia",
//         code: "MDE"
//     },
//     {
//         city: "Montería",
//         country: "Colombia",
//         code: "MTR"
//     },
//     {
//         city: "Neiva",
//         country: "Colombia",
//         code: "NVA"
//     },
//     {
//         city: "Pasto",
//         country: "Colombia",
//         code: "PSO"
//     },
//     {
//         city: "Pereira",
//         country: "Colombia",
//         code: "PEI"
//     },
//     {
//         city: "Popayán",
//         country: "Colombia",
//         code: "PPN"
//     },
//     {
//         city: "Puerto Asís",
//         country: "Colombia",
//         code: "PUU"
//     },
//     {
//         city: "Riohacha",
//         country: "Colombia",
//         code: "RCH"
//     },
//     {
//         city: "San Andrés",
//         country: "Colombia",
//         code: "ADZ"
//     },
//     {
//         city: "San José del Guaviare",
//         country: "Colombia",
//         code: "SJE"
//     },
//     {
//         city: "Santa Marta",
//         country: "Colombia",
//         code: "SMR"
//     },
//     {
//         city: "Tumaco",
//         country: "Colombia",
//         code: "TCO"
//     },
//     {
//         city: "Valledupar",
//         country: "Colombia",
//         code: "VUP"
//     },
//     {
//         city: "Villavicencio",
//         country: "Colombia",
//         code: "VVC"
//     },
//     {
//         city: "Yopal",
//         country: "Colombia",
//         code: "EYP"
//     },
//     {
//         city: "Cuenca",
//         country: "Ecuador",
//         code: "CUE"
//     },
//     {
//         city: "Galápagos - Isla Baltra",
//         country: "Ecuador",
//         code: "GPS"
//     },
//     {
//         city: "Galápagos - San Cristóbal",
//         country: "Ecuador",
//         code: "SCY"
//     },
//     {
//         city: "Guayaquil",
//         country: "Ecuador",
//         code: "GYE"
//     },
//     {
//         city: "Manta",
//         country: "Ecuador",
//         code: "MEC"
//     },
//     {
//         city: "Quito",
//         country: "Ecuador",
//         code: "UIO"
//     },
//     {
//         city: "Asunción",
//         country: "Paraguay",
//         code: "ASU"
//     },
//     {
//         city: "Cusco",
//         country: "Perú",
//         code: "CUZ"
//     },
//     {
//         city: "Lima",
//         country: "Perú",
//         code: "LIM"
//     },
//     {
//         city: "Montevideo",
//         country: "Uruguay",
//         code: "MVD"
//     },
//     {
//         city: "Caracas",
//         country: "Venezuela",
//         code: "CCS"
//     },
//     {
//         city: "Madrid",
//         country: "España",
//         code: "MAD"
//     },
//     {
//         city: "Barcelona",
//         country: "España",
//         code: "BCN"
//     },
//     {
//         city: "Londres",
//         country: "Reino Unido",
//         code: "LHR"
//     },
//     {
//         city: "Munich",
//         country: "Alemania",
//         code: "MUC"
//     }
// ];

const destinations = [
    {
        city: "Arauca",
        country: "Colombia",
        code: "AUC"
    },
    {
        city: "Armenia",
        country: "Colombia",
        code: "AXM"
    },
    {
        city: "Barrancabermeja",
        country: "Colombia",
        code: "EJA"
    },
    {
        city: "Barranquilla",
        country: "Colombia",
        code: "BAQ"
    },
    {
        city: "Bogotá",
        country: "Colombia",
        code: "BOG"
    },
    {
        city: "Bucaramanga",
        country: "Colombia",
        code: "BGA"
    },
    {
        city: "Cali",
        country: "Colombia",
        code: "CLO"
    },
    {
        city: "Cartagena",
        country: "Colombia",
        code: "CTG"
    },
    {
        city: "Cúcuta",
        country: "Colombia",
        code: "CUC"
    },
    {
        city: "Florencia",
        country: "Colombia",
        code: "FLA"
    },
    {
        city: "Guapi",
        country: "Colombia",
        code: "GPI"
    },
    {
        city: "Ibagué",
        country: "Colombia",
        code: "IBE"
    },
    {
        city: "Ipiales",
        country: "Colombia",
        code: "IPI"
    },
    {
        city: "Leticia",
        country: "Colombia",
        code: "LET"
    },
    {
        city: "Manizales",
        country: "Colombia",
        code: "MZL"
    },
    {
        city: "Medellín",
        country: "Colombia",
        code: "MDE"
    },
    {
        city: "Montería",
        country: "Colombia",
        code: "MTR"
    },
    {
        city: "Neiva",
        country: "Colombia",
        code: "NVA"
    },
    {
        city: "Pasto",
        country: "Colombia",
        code: "PSO"
    },
    {
        city: "Pereira",
        country: "Colombia",
        code: "PEI"
    },
    {
        city: "Popayán",
        country: "Colombia",
        code: "PPN"
    },
    {
        city: "Puerto Asís",
        country: "Colombia",
        code: "PUU"
    },
    {
        city: "Riohacha",
        country: "Colombia",
        code: "RCH"
    },
    {
        city: "San Andrés",
        country: "Colombia",
        code: "ADZ"
    },
    {
        city: "San José del Guaviare",
        country: "Colombia",
        code: "SJE"
    },
    {
        city: "Santa Marta",
        country: "Colombia",
        code: "SMR"
    },
    {
        city: "Tumaco",
        country: "Colombia",
        code: "TCO"
    },
    {
        city: "Valledupar",
        country: "Colombia",
        code: "VUP"
    },
    {
        city: "Villavicencio",
        country: "Colombia",
        code: "VVC"
    },
    {
        city: "Yopal",
        country: "Colombia",
        code: "EYP"
    }
];

let selectType = 'origin';


document.addEventListener('DOMContentLoaded', e => {

    
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
    }, 1000);

    updateDOM();

    
});





const modalDestinations = document.querySelector('#cover-destinations');
const modalResume = document.querySelector('#cover-resume');
const modalPassengers = document.querySelector('#cover-passengers');
const btnCloseModal = document.querySelectorAll('#close-modal');
btnCloseModal.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        try{
            inputSearch.value = '';
            clearSearch();
            document.querySelector('body').classList.remove('sb-hidden');
            modalDestinations.classList.remove('show');
            modalResume.classList.remove('show');
            modalPassengers.classList.remove('show');

            // put type selector back
            const typeSelectorDiv = document.querySelector('#type-selector');
            const mainTypeSelector = document.querySelector('#main-type-selector');
            mainTypeSelector.appendChild(typeSelectorDiv);

            // put destination selector back
            const destinationsSelectorDiv = document.querySelector('#destinations-selector');
            const mainDestinationsSelector = document.querySelector('#main-destinations-selector');
            mainDestinationsSelector.appendChild(destinationsSelectorDiv);

        }catch(err){
            console.log(err+" ;)");
        }
    });
});




const btnOrigin = document.querySelector('#btn-origin');
btnOrigin.addEventListener('click', e => {
    btnCloseModal[0].click();
    clearSearch();
    selectType = 'origin';
    document.querySelector('body').classList.add('sb-hidden');
    document.querySelector('#search-label').textContent = 'Origen';
    document.querySelector('#search-input-label').textContent = 'Origen';
    modalDestinations.classList.add('show');
});




const btnDestination = document.querySelector('#btn-destination');
btnDestination.addEventListener('click', e => {
    btnCloseModal[0].click();
    clearSearch();
    selectType = 'destination';
    document.querySelector('body').classList.add('sb-hidden');
    document.querySelector('#search-label').textContent = 'Destino';
    document.querySelector('#search-input-label').textContent = 'Destino';
    modalDestinations.classList.add('show');
});


const inputSearch = document.querySelector('.search--input');
inputSearch.addEventListener('keyup', () =>{
    searchDestination();
});



const btnSearchFlight = document.querySelector('#search-flight');
btnSearchFlight.addEventListener('click', ()=>{
    // go to resume
    document.querySelector('body').classList.add('sb-hidden');
    modalResume.classList.add('show');

    // put type selector back
    const typeSelectorDiv = document.querySelector('#type-selector');
    const resumeTypeSelector = document.querySelector('#resume-type-selector');
    resumeTypeSelector.appendChild(typeSelectorDiv);

    // put destination selector back
    const destinationsSelectorDiv = document.querySelector('#destinations-selector');
    const resumeDestinationsSelector = document.querySelector('#resume-destinations-selector');
    resumeDestinationsSelector.appendChild(destinationsSelectorDiv);

});




const btnPassengers = document.querySelector('#btn-passengers');
btnPassengers.addEventListener('click', () =>{
    btnCloseModal[0].click();
    document.querySelector('body').classList.add('sb-hidden');
    modalPassengers.classList.add('show');
});




const btnNextStep = document.querySelector('#btn-next-step');
btnNextStep.addEventListener('click', () =>{
    // validate dates
    if((info.flightInfo.type === 1 && info.flightInfo.flightDates[1] !== 0) || (info.flightInfo.type === 2 && info.flightInfo.flightDates[0] !== 0)){

        info.passengersInfo.adults = [];
        info.passengersInfo.children = [];
        info.passengersInfo.babies = [];

        // Create passengers
        for(let i = 0; i < info.flightInfo.adults; i++){
            info.passengersInfo.adults.push({
                name: `Adulto ${i + 1}`,
                surname: ''
            });
        }
        for(let i = 0; i < info.flightInfo.children; i++){
            info.passengersInfo.children.push({
                name: `Niño ${i + 1}`,
                surname: ''
            });
        }
        for(let i = 0; i < info.flightInfo.babies; i++){
            info.passengersInfo.babies.push({
                name: `Bebé ${i + 1}`,
                surname: ''
            });
        }
        updateDOM();
        updateLS();


        window.location.href = 'flight-detail.html';
    }
});




/**
 *  FUNCTIONAL JS
 */

function updateDOM(){
    /**
     * Configuration
     */

    // Flight Type
    if(info.flightInfo.type === 1){
        document.querySelector('#ida_vuelta').checked = true;
    }else{
        document.querySelector('#solo_ida').checked = true;
    }

    // Origin
    document.querySelector('#btn-origin-label').textContent = info.flightInfo.origin.city;

    // Destination
    document.querySelector('#btn-destination-label').textContent = info.flightInfo.destination.city;

    // Passengers
    const passengersLabel = document.querySelectorAll('#btn-passengers-label');
    passengersLabel.forEach(label => label.textContent = info.flightInfo.adults + info.flightInfo.children + info.flightInfo.babies);
    document.querySelector('#adults-label').textContent = info.flightInfo.adults;
    document.querySelector('#children-label').textContent = info.flightInfo.children;
    document.querySelector('#babies-label').textContent = info.flightInfo.babies;

    // Flight Dates
    const inputDateGo = document.querySelector('#date-go');
    const btnDateGo = document.querySelector('#btn-date-go');
    const labelDateGo = document.querySelector('#btn-date-go-label');

    const inputDateBack = document.querySelector('#date-back');
    const btnDateBack = document.querySelector('#btn-date-back');
    const labelDateBack = document.querySelector('#btn-date-back-label');

        // set min dates
        let actualDate = new Date();
        actualDate.setDate(actualDate.getDate() + 1);
        let minDate = actualDate.toISOString().split('T')[0];

        inputDateGo.setAttribute('min', minDate);
        info.flightInfo.flightDates[0] === 0 ? inputDateGo.value = minDate : inputDateGo.value = info.flightInfo.flightDates[0];
        info.flightInfo.flightDates[0] === 0 ? info.flightInfo.flightDates[0] = minDate : '';
        LS.setItem('info', JSON.stringify(info));
        labelDateGo.textContent = inputDateGo.value;
        
        inputDateBack.setAttribute('min', minDate);
        info.flightInfo.flightDates[1] === 0 ? inputDateBack.value = '' : inputDateBack.value = info.flightInfo.flightDates[1];
        labelDateBack.textContent = inputDateBack.value;

    if(info.flightInfo.type === 1){
        try{
            btnDateBack.classList.remove('d-none');
        }catch(err){
            console.log(err);
        }
    }else if(info.flightInfo.type === 2){
        try{
            btnDateBack.classList.add('d-none');
        }catch(err){
            console.log(err);
        }
    }
}

function updateLS(){
    LS.setItem('info', JSON.stringify(info));
    // updateDOM();
}

function addP(type){
    let sum = info.flightInfo.children + info.flightInfo.babies + info.flightInfo.adults;
    if(sum + 1 <= 9){
        switch(type){
            case 'adult':
                info.flightInfo.adults += 1;
                updateDOM();
                updateLS();
                break;
            case 'child':
                info.flightInfo.children += 1;
                updateDOM();
                updateLS();
                break;
            case 'baby':
                info.flightInfo.babies += 1;
                updateDOM();
                updateLS();
                break;
        }
    }
}

function rmP(type){
    let sum = info.flightInfo.children + info.flightInfo.babies + info.flightInfo.adults;
    if(sum - 1 >= 1){
        switch(type){
            case 'adult':
                if(info.flightInfo.adults != 0){
                    info.flightInfo.adults -= 1;
                    updateDOM();
                    updateLS();
                }
                break;
            case 'child':
                if(info.flightInfo.children != 0){
                    info.flightInfo.children -= 1;
                    updateDOM();
                    updateLS();
                }
                break;
            case 'baby':
                if(info.flightInfo.babies != 0){
                    info.flightInfo.babies -= 1;
                    updateDOM();
                    updateLS();
                }
                break;
        }
    }
}

function printDestinationsByCountry(country){
    const search = destinations.filter(destination => destination.country === country);
    printDestinations(search);
}

function clearSearch(){
    const container = document.getElementById('destinations');
    container.innerHTML = '';
    inputSearch.value = '';
}

function printDestinations(destinations){
    const container = document.getElementById('destinations');
    container.innerHTML = '';

    destinations.forEach(destination =>{
        if(selectType === 'origin'){
            container.innerHTML += `
                <div class="destination" onclick="setOrigin('${destination.city}')">
                    <p>${destination.city}</p>
                    <p>(${destination.country})</p>
                    <p>${destination.code}</p>
                </div>
            `
        }else if(selectType === 'destination'){
            container.innerHTML += `
                <div class="destination" onclick="setDestination('${destination.city}')">
                    <p>${destination.city}</p>
                    <p>(${destination.country})</p>
                    <p>${destination.code}</p>
                </div>
            `
        };
    });
}

function clearDestinations(){
    const container = document.getElementById('destinations');
    container.innerHTML = '';
}

function getSelectedRadioValue(name) {
    let radios = document.getElementsByName(name);
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
    return null;
}

function searchDestination() {

    if (inputSearch.value === '') {
        clearDestinations(destinations);
    } else {
        let search = [];

        search = destinations.filter(destination => {return (destination.country.toLowerCase().includes(inputSearch.value.toLowerCase()) || destination.city.toLowerCase().includes(inputSearch.value.toLowerCase()) || destination.code.toLowerCase().includes(inputSearch.value.toLowerCase()))});
        printDestinations(search);
    }

}

function setOrigin(city){
    destinations.forEach(dest =>{
        if(dest.city === city){
            info.flightInfo.origin = dest;
        }
    });
    updateDOM();
    updateLS();

    btnDestination.click();
}

function setDestination(city){
    destinations.forEach(dest =>{
        if(dest.city === city){
            info.flightInfo.destination = dest;
        }
    });
    updateDOM();
    updateLS();

    // show resume
    btnCloseModal[0].click();
    btnSearchFlight.click();
}