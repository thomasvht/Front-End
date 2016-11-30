(function(){

    var addProfileButton;
    var profileSelect;

    function addProfile(){
        /*
        * <li class="profileList__profile">
         <span>Developer</span>
         <button class="btn">
         <span class="btn__icon">x</span>
         </button>
         </li>
        * */
        var newProfile = document.createElement("li");
        newProfile.classList.add("profileList__profile");

        var profileTitle = document.createElement("span");
        var removeButton = document.createElement("button");
        removeButton.classList.add("btn");
        var removespan = document.createElement("span");
        removespan.classList.add("btn__icon");
        removespan.innerHTML = "x";

        removeButton.appendChild(removespan);
        newProfile.appendChild(profileTitle);
        newProfile.appendChild(removeButton);

        document.getElementById("profileList").appendChild(newProfile);

    }

    function initializeElements(){
        addProfileButton = document.getElementById("addProfileButton");
        profileSelect = document.getElementById("profileSelector");
    }

    function addEventsToElements(){
        addProfileButton.addEventListener("click", addProfile);
    }



    (function init(){

        initializeElements();
        addEventsToElements();

    })();





})();