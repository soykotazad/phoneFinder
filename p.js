

const loadPhone = async (searchT=13, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchT}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones , isShowAll);
}

const displayPhones = (phones, isShowAll) => { 

    // console.log(phones);

    const phoneContainer = document.getElementById('phoneContainer')
//    clear before phoneeesss
phoneContainer.textContent='';

// display and hide show all buttonnnnn

const showAll = document.getElementById('show-all');
if( phones.length > 12 && !isShowAll) {
    showAll.classList.remove('hidden');
}
else{
    showAll.classList.add('hidden');
}

// console.log('is show all', isShowAll)

// display 12 phone 
if(!isShowAll){

    phones= phones.slice(0,12);
}









    phones.forEach(phone =>{
        // console.log(phone);
        // 1divvvvv
        const phonecard =document.createElement('div');
        phonecard.classList=`card w-96 bg-base-100 shadow-xl`
        phonecard.innerHTML=`        
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a kornia  chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-center">
            <button onclick="showDetails('${phone.slug}');
            my_modal.showModal()" class="btn btn-primary">show Details</button>
          </div>
        </div>
        `;

        // append chield 
        phoneContainer.appendChild(phonecard)
        
    });

    // hideloagindspin
    togloadingSpin(false);   

}

// 
const  showDetails = async (id) => {
    // console.log('clicked', id)
    const res =  await fetch(`https://openapi.programming-hero.com/api/phone/${id} `);
    const data = await res.json();
    console.log(data);
    const phone =data.data
    showPhoneDetails(phone)
}
 
const showPhoneDetails = (phone) => {

    const phoneName =document.getElementById('showDetailsphoneName')
    phoneName.innerText = phone.name ;

    const showDetailsContainer= document.getElementById('show-details-container')
    showDetailsContainer.innerHTML = `
    <img src="${phone.image}" alt="" />

    <p> <span>chipset : </span> ${phone.mainFeatures.chipSet}</p>
    
    `;


    // cALL CODAL 
     my_modal.showModal()
} 

// handle search button 

handleSearch = (isShowAll) => {

    togloadingSpin(true);  

    const searchF= document.getElementById("search-F");
    const searchT = searchF.value;

    console.log(searchT);
    loadPhone(searchT, isShowAll);
   
}

// handleSearch2 = () => {

//     togloadingSpin(true);   

//     const searchF= document.getElementById("search-F2");
//     const searchT = searchF.value;
//     loadPhone(searchT);
// }


const togloadingSpin = (isLoading) =>{
    const loadingSpin =document.getElementById('load');
if(isLoading){
    loadingSpin.classList.remove('hidden');

}
else{
    loadingSpin.classList.add('hidden');

}

    

}



//handle show all


const handleShow =() =>{

    handleSearch(true);

}






loadPhone();

// displayPhones();