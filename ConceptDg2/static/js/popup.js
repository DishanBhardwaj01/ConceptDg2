// const { type } = require("os");

function popupFunction(button_id) {
  console.log("Here");
  var modal = document.getElementById("myModal");

  var btn = document.getElementById(button_id);
  //   var btn = document.querySelectorAll('[id ^= "trigger-button"]');
  console.log(button_id);
  if (button_id == "trigger-button2") {
    // $("#2019")
    //   .children("img")
    //   .attr("src", "{% static 'images/905_01 2.jpg' %}");
    // document.getElementById($("#2019").children("img")).src =
    //   "{% static 'images/905_01 2.jpg' %}";
    document.getElementById("photo-caption").innerHTML =
      "Woodcroft Shopping Centre – (132.5 T)";
  } else if (button_id == "trigger-button") {
    document.getElementById("photo-caption").innerHTML =
      "Australian SKA Pathfinder- (35.5 T)";
  } else if (button_id == "trigger-button3") {
    document.getElementById("photo-caption").innerHTML =
      "The Lion Hotel - (82.2 T)";
  }

  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function () {
    console.log("First function");
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

function frequentquestionSection(faq_id) {
  if (faq_id == "faq1") {
    var header = document.getElementById("faq1").innerHTML;
    document.getElementById("data-head").innerHTML = header;
    document.getElementById("data-section").innerHTML =
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit";
  } else if (faq_id == "faq2") {
    var header = document.getElementById("faq2").innerHTML;
    document.getElementById("data-head").innerHTML = header;
    document.getElementById("data-section").innerHTML =
      " Duis quis quam ac purus imperdiet porta. Integer congue justo sed nulla tristique mattis. Duis et placerat mauris. Integer id lobortis velit. Phasellus convallis lorem a metus lobortis, sed rutrum urna feugiat. Nulla magna eros, euismod vel ante molestie, molestie elementum nisl.";
  } else if (faq_id == "faq3") {
    var header = document.getElementById("faq3").innerHTML;
    document.getElementById("data-head").innerHTML = header;
    document.getElementById("data-section").innerHTML =
      "Sed vel ex eu tortor mattis condimentum at vel nisl. Proin at varius nibh. Etiam id pharetra purus, non volutpat turpis. Quisque purus massa, auctor at dolor ut, pharetra ultrices felis. Aliquam venenatis quam a nulla pulvinar, finibus ultrices mi consequat. Morbi tincidunt sit amet dolor at ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.";
  } else if (faq_id == "faq4") {
    var header = document.getElementById("faq4").innerHTML;
    document.getElementById("data-head").innerHTML = header;
    document.getElementById("data-section").innerHTML =
      "Nam orci lacus, porttitor et commodo in, vehicula quis diam. Curabitur cursus, metus id suscipit tempus, ex nibh viverra sem, sed tincidunt nibh ante vitae dui. Sed ut tortor ultricies, commodo odio in, dapibus enim. Mauris posuere, diam et suscipit efficitur, felis augue placerat arcu, lacinia semper orci enim vitae justo. ";
  }
}

function dropdownFunction() {
  document.getElementById("infoLinks").classList.toggle("show");

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
}

$(document).ready(function () {
  // function contactfunc() {
  $(".explore").click(function () {
    console.log("Running ajax");
    var Name = document.getElementById("Name").innerHTML;
    var Email = document.getElementById("Email").innerHTML;
    var Message = document.getElementById("Message").innerHTML;
    $.ajax({
      url: "contactus/",
      type: "get",
      data: { Name: Name, Email: Email, Message: Message },
    });
  });
  // }
});
