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