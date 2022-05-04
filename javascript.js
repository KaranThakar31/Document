function openCoupon(){
    document.querySelector('#coupon').style.display != "none";
}
function closeCoupon(){
    document.querySelector('#coupon').style.display = "none"; 
}
function togglemode(){
    let header = document.getElementById('headcolor');
    header.classList.toggle('lighthead');

    let navtoggle = document.getElementById('navigation');
    navtoggle.classList.toggle('navlight');

    let navbtn = document.getElementById('btn-lightdarkmode');
    navbtn.classList.toggle('navlight-btn-light');

    let prodsec = document.getElementById('products');
    prodsec.classList.toggle('lightprod');

    let rugh = document.getElementById('rughead');
    rugh.classList.toggle('lightrughead');

    let fphead = document.getElementById('fphead');
    fphead.classList.toggle('lightfphead')

    let chead = document.getElementById('chandelierhead');
    chead.classList.toggle('lightchead');
}

let x = document.getElementById('geoloc');
function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        x.innerText="";
    }
}
function showPosition(data){
    let lat = data.coords.latitude;
    let long = data.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    console.log(data);

    fetch (url, {method:'GET'})
    .this((res) => res.json() )
    .this((data)=>{
        let cityName = data.city.name;
        let weather = data.list[0].temp.day;
        x.innerText = `Weather of ${cityName} is ${weather} °C`
    })
}