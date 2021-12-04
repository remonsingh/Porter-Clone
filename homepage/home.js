// here is the script for main slide show


let images = [
    "https://porter-website-banners.s3-ap-southeast-1.amazonaws.com/prod/home/all/desktop_2W_heroimage.jpg",
    "https://porter-website-banners.s3-ap-southeast-1.amazonaws.com/prod/home/all/outstation_webbanner.jpg",
    "https://porter-website-banners.s3-ap-southeast-1.amazonaws.com/prod/home/all/Helper_compressed.png",
    "https://porter-website-banners.s3-ap-southeast-1.amazonaws.com/prod/home/all/Helper_compressed.png"

];
let cont = document.getElementById("slide");
let interval;

function slide() {

    let count = 0;
    let img = document.createElement("img");
    img.src = images[0];
    cont.append(img);
    count = count + 1;


    let interval = setInterval(function () {
        cont.innerHTML = null;
        if (count == images.length) {
            count = 0;
        }

        let img = document.createElement("img");
        img.src = images[count];
        cont.append(img);

        count = count + 1;
    }, 3000)

}

slide();







let vehicle_boxes = document.querySelectorAll(".img_wrapper");


function changeVehicle() {
    for (let i = 0; i < vehicle_boxes.length; i++) {
        vehicle_boxes[i].onclick = function () {
            avi(i)
        }
    }
}

changeVehicle()

vehicle_ids = {
    0: "one",
    1: "two",
    2: "three",
    3: "four",
    4: "five",
    5: "six",
    6: "seven",
    7: "eight"
}

function avi(i) {
    uppendVehicle(i)
    let id = i.toString();
    id = vehicle_ids[id];

    let vehicle_img = document.getElementById(`${id}`);

    for (let i = 0; i < 7; i++) {
        let id = i.toString();
        id = vehicle_ids[id];

        let vehicle_img = document.getElementById(`${id}`);
        vehicle_img.style.backgroundPositionY = "top"
    }

    vehicle_img.style.backgroundPositionY = "bottom"
}



let left = -49.2;

let left_btn = document.getElementById("left_btn");

let right_btn = document.getElementById("right_btn")


function khisakLeft() {
    left_btn.style.display = "none";
    right_btn.style.display = "block"
    for (let box of vehicle_boxes) {
        box.style.transform = `translateX(0rem)`
    }
}
function khisakRight() {

    left_btn.style.display = "block";
    right_btn.style.display = "none"
    for (let box of vehicle_boxes) {
        box.style.transform = `translateX(${left}rem)`
    }
}





let rent_details = [
    {
        vehicle_img: "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/tata_ace-e92a36b3508e6e3b1804fd2015adbfb6c948bc35afab36699440785ed83b5b24.png",
        heading: "TATA ACE",
        price: "₹210",
        distance: "1.0 km",
        time: "70 ",
        capacity: "750kg",
        size: "7ft x 4ft x 5ft"

    },
    {
        vehicle_img: "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/tata_407-b968c07406c8b63fca431ef8ea2152caf5272b0013502a73d2390289f1138505.png",
        heading: "RENT TATA 407",
        price: "₹625",
        distance: "2.0 km",
        time: "120 ",
        capacity: "2500kg",
        size: "9ft x 5.5ft x 6ft"

    },
    {
        vehicle_img: "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/3_wheeler-022fc2284832545607afeea8be6e567e0d2e99ff2e4e035e4f66374b22fa92db.png",
        heading: "RENT 3 WHEELER",
        price: "₹160",
        distance: "1.0 km",
        time: "50 ",
        capacity: "500kg",
        size: "5.5ft x 4.5ft x 5ft"

    },
    {
        vehicle_img: "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/ace_helper-13b68258cbd75d2985ef458b6840d37c90735c3d50378dd07392ed6eb09073c9.png",
        heading: "RENT ACE (HELPER)",
        price: "₹210",
        distance: "1.0 km",
        time: "75 ",
        capacity: "750kg",
        size: "7ft x 4ft x 5ft"

    },
    {
        vehicle_img: "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/3_wheeler_helper-51343864a9a26168e4bfc00ad299c33515cc01b793fc8b797c380aa46abf19c3.png",
        heading: "RENT 3 WHEELER (HELPER)",
        price: "₹160",
        distance: "1.0 km",
        time: "55 ",
        capacity: "500kg",
        size: "6ft x 5ft x 5ft"

    },
    {
        vehicle_img: "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/8ft_1ton-a9abd7ed5e7104c62305c68c97527eac0ff7d40dd7808175d097546b57f901d7.png",
        heading: "RENT 8FT 1TON",
        price: "₹300",
        distance: "1.0 km",
        time: "90 ",
        capacity: "1000kg",
        size: "8ft x 4.5ft x 5.5ft"

    },
    {
        vehicle_img: "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/tata_ace_closed-e92a36b3508e6e3b1804fd2015adbfb6c948bc35afab36699440785ed83b5b24.png",
        heading: "RENT 8FT PICKUP",
        price: "₹325",
        distance: "1.0 km",
        time: "70 ",
        capacity: "1250kg",
        size: "9ft x 5ft x 6ft"

    },
    {
        vehicle_img: "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/2_wheeler-947e3c6aac74dcdd11fdd4059e4ee72132b276200dff063d6dff2c445f7aab5b.png",
        heading: "RENT 2 WHEELER",
        price: "₹40",
        distance: "1.0 km",
        time: "25 ",
        capacity: "20kg",
        size: "40cm x 40cm x 40cm"

    }
]




function uppendVehicle(id) {
    let vehicle_img_box = document.getElementById("vehicle_img_box");

    vehicle_img_box.innerHTML = null;

    let img = document.createElement("img");

    if (id == 2 || id == 4 || id == 7) {
        img.style.width = "100%";
        img.style.height = '100%'
    }

    img.src = rent_details[id].vehicle_img;

    let rent_vehicle = document.getElementById("rent_vehicle");

    rent_vehicle.textContent = rent_details[id].heading;

    let rent_price = document.getElementById("rent_price");

    rent_price.textContent = rent_details[id].price;

    vehicle_img_box.append(img)


    let distace = document.getElementById("distance");

    distace.textContent = rent_details[id].distance;


    let time = document.getElementById("time");

    time.textContent = rent_details[id].time;

    let vehicle_capacity = document.getElementById("capacity");

    vehicle_capacity.textContent = rent_details[id].capacity;

    let vehicle_size = document.getElementById("size");

    vehicle_size.textContent = rent_details[id].size;

}


// here is the script for pickup and dropoff container


let PUNE = [
    "katraj Pune Maharashtra",
    "katepuram chowk",
    "aga Khan Palace",
    "rajiv Gandhi Zoological Park",
    "shaniwar Wada Fort",
    "shiwajinagar Pune,Maharashtra",
    "akurdi Pune,Maharashtra",
    "kothrud Pune,Maharashtra",
    "koregon Park Pune,Maharashtra",
    "sanghavi Pune,Maharashtra",
    "pune junction Maharashtra",
    "pimple-Saudagar Pune Maharashtra",
    "khandala Pune,Maharashtra",
    "lonawala Pune,Maharashtra",
    "wagholi Pune,Maharashtra",
    "bavdhan Pune,Maharashtra",
    "wakad Pune,Maharashtra",
    "hadapsar Pune,Maharashtra",
    "kharadi Pune,Maharashtra",
    "hinjewadi Pune,Maharashtra",
    "aundh Pune,Maharashtra"
];

let DELHI = [
    "asafali road",
    "bhikaji kama Palace",
    "chandni chawk new Delhi",
    "civil lines",
    "new frinds colony",
    "green park",
    "nehru place",
    "pushpanjali farms"
]

let MUMBAI = ["Andheri - Kurla Road",
    "andheri (E) - Marol",
    "andheri (E) - MIDC",
    "andheri (E) - Station",
    "andheri (W)",
    "ballard Estate",
    "band Stand",
    "bandra (E)",
    "bandra (W)",
    "bandra Kurla Complex",
    "byculla",
    "chembur",
    "church Gate",
    "colaba",
    "cuffe Parade",
    "dadar (Central)",
    "dadar (West)",
    "domestic Airport",
    "gateway of India",
    "goregaon (E)",
    "goregaon (W)",
    "international airport"
];

let BANGALORE = ["around Railway Station",
"begur Kopa Road",
"doddaballapur Road",
"electronic City",
"hebbal",
"hesaraghatta",
"hoskote",
"hosur",
"hosur Road",
"indiranagar",
"international airport",
"jayanagar",
"jp nagar",
"kaggalipura",
"kga Golf Course",
"koramangala",
"krishnarajapuram"
]
let lUCKNOW = ["gomti Nagar",
"jankipuram",
"indira Nagar",
"rajajipuram",
"chinhat",
"alambagh",
"aliganj",
"hazratganj",
"nishatganj"
]

let JAIPUR = [
    "shreenath Plaza, Near Sagar Market, Ajmer Road, Bhankrota",
    "kalwar Road, Anand Laxmi Plot 1,2, Jhotwara Road, Jaipur (Raj)	Jaipur	Rajasthan",		
    "shiprapath , Mansarovar , Jaipur	Jaipur	Rajasthan",		
    "unit-I, Divl.Office Campus , Bhawani Singh Road , Jaipur",	
    "sunder Nagar, Girdhar Marg, J.L.N. Marg, Malviya Nagar, Jaipur	Jaipur	Rajasthan",	
    "p & Gs Divl.Office Campus, Bhawani Singh Road, Jaipur	Jaipur	Rajasthan",	
    "divl.Office Jeevan Prakash, Bhawani Singh Road, Jaipur",	
    "dab, 1, Gopinath Marg, G.P.O., Jaipur"
    ]



if (localStorage.getItem("cities") === null) {
    localStorage.setItem("cities", JSON.stringify({}))
}

let cityObj = JSON.parse(localStorage.getItem("cities"));

cityObj["PUNE"] = PUNE;

cityObj["DELHI"] = DELHI;

cityObj["BANGALORE"] = BANGALORE;

cityObj["lUCKNOW"] = lUCKNOW;

cityObj["JAIPUR"] = JAIPUR;

cityObj["MUMBAI"] = MUMBAI;

console.log(cityObj);










//  here enabaling visibility of city container 

let city_container = document.getElementById("city_container");
function showCity() {


    city_container.style.display = "block"
    drop_container.style.display = "none"
    pickUp_container.style.display = "none"
}

// accecing each city value

let cityName = document.querySelectorAll(".cityName");

cityName.forEach((el) => {
    el.onclick = () => {
        selectCity(el.textContent)
    }
})





function selectCity(cityName) {
    let cityName_input = document.getElementById("cityName_input");

    cityName_input.value = cityName;

    city_container.style.display = "none"
}


// accecing requirement value

let requirements = document.querySelectorAll(".requirement");

requirements.forEach((el) => {
    el.onclick = () => {
        select_requirement(el.textContent)
    }
})


function select_requirement(requirement) {
    let requirement_input = document.getElementById("requirement");

    requirement_input.value = requirement;

    requirement_container.style.display = "none"

}


// here enabaling visibility of pickUp_container

let pickUp_container = document.getElementById("pickUp_container")

function show_pickUp_container() {
    pickUp_container.style.display = "block"
    drop_container.style.display = "none"
    city_container.style.display = "none"
}

// here enabaling visibility of drop_container

let drop_container = document.getElementById("drop_container")

function show_drop_container() {
    drop_container.style.display = "block"
    pickUp_container.style.display = "none"
    city_container.style.display = "none"
}

//here enabling visibility of requirement container

let requirement_container = document.getElementById("requirement_container")

function show_requirement() {
    requirement_container.style.display = "block";
    drop_container.style.display = "none"
    pickUp_container.style.display = "none"
    city_container.style.display = "none"

}

//  appending pickUp_address in the pickUp container

function pickUp_locality() {
    pickUp_container.innerHTML = null;

    let cityName_input = document.getElementById("cityName_input").value;

    let pickUp = document.getElementById("pickUp").value;



    let output = cityObj[cityName_input];

    output.forEach((el) => {
        let count = 0;
        for (let i = 0; i < pickUp.length; i++) {
            if (el[i] == pickUp[i]) {
                count++
            }
        }


        if (count == pickUp.length) {

            let locality = document.createElement("div");

            locality.textContent = el;

            let line = document.createElement("hr")

            pickUp_container.append(locality, line);

            locality.onclick = () => {
                pickUp_address(locality.textContent)
            }
        }
    })

    // console.log(output);


}


function pickUp_address(addres) {

    let pickUp_address = document.getElementById("pickUp");

    pickUp.value = addres;

    pickUp_container.style.display = "none"
}


// appending dropoff address in the drop off container


function dropOff_locality() {
    drop_container.innerHTML = null;
    let cityName_input = document.getElementById("cityName_input").value;

    let dropOff = document.getElementById("dropOff").value;



    let output = cityObj[cityName_input];

    output.forEach((el) => {
        let count = 0;
        for (let i = 0; i < dropOff.length; i++) {
            if (el[i] == dropOff[i]) {
                count++
            }
        }

        if (count == dropOff.length) {

            let locality = document.createElement("div");

            locality.textContent = el;

            let line = document.createElement("hr")

            drop_container.append(locality, line);

            locality.onclick = () => {
                dropOff_address(locality.textContent)
            }
        }
    })

    // console.log(output);

}


function dropOff_address(addres) {

    let dropOff_address = document.getElementById("dropOff");

    dropOff_address.value = addres;

    drop_container.style.display = "none"
}


// pickupp dropp off form validation


if (localStorage.getItem("last_transport") == null) {
    localStorage.setItem("last_transport", JSON.stringify([]))
}





function validation(e) {

    e.preventDefault()

    let form = document.getElementById("search_form");

    let transport_details = {
        cityName: form.cityName_input.value,
        pickUp_address: form.pickUp.value,
        dropOff_address: form.dropOff.value,

        mobile: form.mob.value,

        requirement: form.requirement.value

    }

    let details = Object.values(transport_details);

    let flag = true

    for (let i = 0; i < details.length; i++) {
        if (details[i] == "") {
            flag = false
        }
    }

    if (flag == false) {
        alert("Please fill all the details")
    }
    else {
        let last_transport = JSON.parse(localStorage.getItem("last_transport"));

        last_transport.push(transport_details);

        localStorage.setItem("last_transport", JSON.stringify(last_transport));

        let update = JSON.parse(localStorage.getItem("last_transport"));

        console.log(update);


        window.location.href = "fare_estimate.html"
    }



}


