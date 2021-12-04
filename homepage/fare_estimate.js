


    function append_address() {
        let transport_detatails = JSON.parse(localStorage.getItem("last_transport"))
        console.log(transport_detatails);



        let last_transport = transport_detatails[transport_detatails.length - 1];

        console.log(last_transport);

        let pickUp_address = document.getElementById("pickUp_address");

        pickUp_address.textContent = `${last_transport.pickUp_address} , ${last_transport.cityName}`

        let drop_address = document.getElementById("drop_address");

        drop_address.textContent = `${last_transport.dropOff_address} , ${last_transport.cityName}`

        alert(`You will get call on ${last_transport.mobile} for further process`)

    }

    append_address()







    let left = -49.2;

    let left_btn = document.getElementById("left_btn");

    let right_btn = document.getElementById("right_btn")


    function khisakLeft() {
        left_btn.style.display = "none";
        right_btn.style.display = "block"
        let vehicles_container = document.getElementById("vehicles_container");

        vehicles_container.style.transform = `translateX(0rem)`

    }
    function khisakRight() {

        left_btn.style.display = "block";
        right_btn.style.display = "none"
        let vehicles_container = document.getElementById("vehicles_container");

        vehicles_container.style.transform = `translateX(${left}rem)`
    }
