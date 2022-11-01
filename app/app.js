function changeRoute(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    //console.log(hashTag + " " + pageID);

    if (pageID != "") {
       $.get(`pages/${pageID}/${pageID}.html`, function(data){
        //console.log("data " + data);

        $("#app").html(data);
        $("#submit").click(function (e) {
            e.preventDefault();
            let firstName = $("#fName").val();
            let lastName = $("#lName").val();
            let email = $("#email").val();
            let address = $("#address").val();
            let city = $("#city").val();
            let state = $("#state").val();
            let phone = $("#phone").val();
            let color = $("#color").val();
            let pet = $("#pet").val();
            let birth = $("#birth").val();
    
            console.log("First Name:" + " " + firstName + "\n" + "Last Name:" + " " + lastName + "\n" + "Email:" + " " + email + "\n" + "Address:" + " " + address + "\n" + "City:" + " " + city + "\n" + "State:" + " " + state + "\n" + "Phone:" + " " + phone + "\n" + "Favorite Color:" + " " + color + "\n" + "First Pet Name:" + " " + pet + "\n" + "Place of Birth:" + " " + birth);
        });
    
        $("#edit").click(function(e) {
            e.preventDefault();
    
            let userAccount = {
                fName: "Jimmy",
                lName: "Fallon",
                email: "jfallonlol@gmail.com",
                address: "2840 Wakabear Avenue",
                city: "Dallas",
                state: "Texas",
                phone: "492-248-5920",
                color: "Aqua",
                pet: "Bella",
                birth: "09-19-1974"
            }
    
            console.log(userAccount);
            $("#fName").val(userAccount.fName);
            $("#lName").val(userAccount.lName);
            $("#email").val(userAccount.email);
            $("#address").val(userAccount.address);
            $("#city").val(userAccount.city);
            $("#state").val(userAccount.state);
            $("#phone").val(userAccount.phone);
            $("#color").val(userAccount.color);
            $("#pet").val(userAccount.pet);
            $("#birth").val(userAccount.birth);
        });

        $("#create-button").click(function (e) {
            e.preventDefault();
            let create_email = $("#create-email").val();
            let create_password = $("#create-password").val();
            let create_firstName = $("#create-fName").val();
            let create_lastName = $("#create-lName").val();
    
            console.log("Email:" + " " + create_email + "\n" + "Password:" + " " + create_password + "\n" + "First Name:" + " " + create_firstName + "\n" + "Last Name:" + " " + create_lastName);
        });

        $("#login-button").click(function (e) {
            e.preventDefault();
            let login_username = $("#login-left").val();
            let login_password = $("#pass-left").val();
        
    
            console.log("Username:" + " " + login_username + "\n" + "Password:" + " " + login_password);
        });
        });

    } else {
        $.get(`pages/homePage/homepage.html`, function(data){
            //console.log("data " + data);
            $("#app").html(data);
            $("#submit").click(function (e) {
                e.preventDefault();
                let firstName = $("#fName").val();
                let lastName = $("#lName").val();
                let email = $("#email").val();
                let address = $("#address").val();
                let city = $("#city").val();
                let state = $("#state").val();
                let phone = $("#phone").val();
                let color = $("#color").val();
                let pet = $("#pet").val();
                let birth = $("#birth").val();
        
                console.log("First Name:" + " " + firstName + "\n" + "Last Name:" + " " + lastName + "\n" + "Email:" + " " + email + "\n" + "Address:" + " " + address + "\n" + "City:" + " " + city + "\n" + "State:" + " " + state + "\n" + "Phone:" + " " + phone + "\n" + "Favorite Color:" + " " + color + "\n" + "First Pet Name:" + " " + pet + "\n" + "Place of Birth:" + " " + birth);
            });

            $("#create-button").click(function (e) {
                e.preventDefault();
                let create_email = $("#create-email").val();
                let create_password = $("#create-password").val();
                let create_firstName = $("#create-fName").val();
                let create_lastName = $("#create-lName").val();
        
                console.log("Email:" + " " + create_email + "\n" + "Password:" + " " + create_password + "\n" + "First Name:" + " " + create_firstName + "\n" + "Last Name:" + " " + create_lastName);
            });
        
            $("#edit").click(function(e) {
                e.preventDefault();
        
                let userAccount = {
                    fName: "Jimmy",
                    lName: "Fallon",
                    email: "jfallonlol@gmail.com",
                    address: "2840 Wakabear Avenue",
                    city: "Dallas",
                    state: "Texas",
                    phone: "492-248-5920",
                    color: "Aqua",
                    pet: "Bella",
                    birth: "09-19-1974"
                }
        
                console.log(userAccount);
                $("#fName").val(userAccount.fName);
                $("#lName").val(userAccount.lName);
                $("#email").val(userAccount.email);
                $("#address").val(userAccount.address);
                $("#city").val(userAccount.city);
                $("#state").val(userAccount.state);
                $("#phone").val(userAccount.phone);
                $("#color").val(userAccount.color);
                $("#pet").val(userAccount.pet);
                $("#birth").val(userAccount.birth);
            });

            $("#login-button").click(function (e) {
                e.preventDefault();
                let login_username = $("#login-left").val();
                let login_password = $("#pass-left").val();
            
        
                console.log("Username:" + " " + login_username + "\n" + "Password:" + " " + login_password);
            });
            });
    }

}

function initListeners() {
    $("#submit").click(function (e) {
        e.preventDefault();
        let firstName = $("#fName").val();
        let lastName = $("#lName").val();
        let email = $("#email").val();
        let address = $("#address").val();
        let city = $("#city").val();
        let state = $("#state").val();
        let phone = $("#phone").val();
        let color = $("#color").val();
        let pet = $("#pet").val();
        let birth = $("#birth").val();

        console.log("First Name:" + " " + firstName + "\n" + "Last Name:" + " " + lastName + "\n" + "Email:" + " " + email + "\n" + "Address:" + " " + address + "\n" + "City:" + " " + city + "\n" + "State:" + " " + state + "\n" + "Phone:" + " " + phone + "\n" + "Favorite Color:" + " " + color + "\n" + "First Pet Name:" + " " + pet + "\n" + "Place of Birth:" + " " + birth);
    });

    $("#edit").click(function(e) {
        e.preventDefault();

        let userAccount = {
            fName: "Jimmy",
            lName: "Fallon",
            email: "jfallonlol@gmail.com",
            address: "2840 Wakabear Avenue",
            city: "Dallas",
            state: "Texas",
            phone: "492-248-5920",
            color: "Aqua",
            pet: "Bella",
            birth: "09-19-1974"
        }

        console.log(userAccount);
        $("#fName").val(userAccount.fName);
        $("#lName").val(userAccount.lName);
        $("#email").val(userAccount.email);
        $("#address").val(userAccount.address);
        $("#city").val(userAccount.city);
        $("#state").val(userAccount.state);
        $("#phone").val(userAccount.phone);
        $("#color").val(userAccount.color);
        $("#pet").val(userAccount.pet);
        $("#birth").val(userAccount.birth);
    });

    $("#create-button").click(function (e) {
        e.preventDefault();
        let create_email = $("#create-email").val();
        let create_password = $("#create-password").val();
        let create_firstName = $("#create-fName").val();
        let create_lastName = $("#create-lName").val();

        console.log("Email:" + " " + create_email + "\n" + "Password:" + " " + create_password + "\n" + "First Name:" + " " + create_firstName + "\n" + "Last Name:" + " " + create_lastName);
    });

    $("#login-button").click(function (e) {
        e.preventDefault();
        let login_username = $("#login-left").val();
        let login_password = $("#pass-left").val();
    

        console.log("Username:" + " " + login_username + "\n" + "Password:" + " " + login_password);
    });

    // Change Between Pages
    $(window).on("hashchange", changeRoute);
    changeRoute();

    //Navigation animation 
    $(".bars").click(function(e) {
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    })

    $(".links a").click(function(e) {
        $(".bars").removeClass("active");
        $(".links").removeClass("active");
    })
}

$(document).ready(function () {
    initListeners();
})