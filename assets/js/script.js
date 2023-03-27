// tabs

const triggerTabList = document.querySelectorAll('#myTab button')
triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger.show()
  })
})

$("#next1").click(function () {
  $("#tabone").removeClass("active show");
  $("#tabtwo").addClass("active show");
});

$("#next2").click(function () {
  $("#tabtwo").removeClass("active show");
  $("#tabthree").addClass("active show");
});

$("#next3").click(function () {
  $("#tabthree").removeClass("active show");
  $("#tabfour").addClass("active show");
});

$("#next4").click(function () {
  $("#tabfour").removeClass("active show");
  $("#tabfive").addClass("active show");
});

$("#next5").click(function () {
  $("#tabfive").removeClass("active show");
  $("#tabsix").addClass("active show");
});

$("#next6").click(function () {
  $("#tabsix").removeClass("active show");
  $("#tabseven").addClass("active show");
});


$("#back1").click(function () {
  $("#tabtwo,#tabthree").removeClass("active show");
  $("#tabone").addClass("active show");
});

$("#back2").click(function () {
  $("#tabthree").removeClass("active show");
  $("#tabtwo").addClass("active show");
});

$("#back3").click(function () {
  $("#tabfour").removeClass("active show");
  $("#tabthree").addClass("active show");
});

$("#back4").click(function () {
  $("#tabfive").removeClass("active show");
  $("#tabfour").addClass("active show");
});

$("#back5").click(function () {
  $("#tabsix").removeClass("active show");
  $("#tabfive").addClass("active show");
});

$("#back6").click(function () {
  $("#tabseven").removeClass("active show");
  $("#tabsix").addClass("active show");
});

// Scroll
	
vph = $(window).height();

$(window).scroll(function () {
    // set distance user needs to scroll before we start fadeIn
    if ($(this).scrollTop() > vph){
      $('header').addClass('scrolled');
    } else {
      $('header').removeClass('scrolled');
    }

    
  });

// Equal height tabs

// Select and loop the container element of the elements you want to equalise
$('#pills-tabContent').each(function(){  
      
  // Cache the highest
  var highestBox = 0;
  
  // Select and loop the elements you want to equalise
  $('.tab-pane', this).each(function(){
    
    // If this box is higher than the cached highest then store it
    if($(this).height() > highestBox) {
      highestBox = $(this).height() + 140; 
    }
  
  });  
        
  // Set the height of all those children to whichever was highest 
  $('.tab-pane',this).height(highestBox);
                
}); 


/*
// forms
const startForm = document.getElementById("start-form");
const secondForm = document.getElementById("second-form");
const thirdForm = document.getElementById("third-form");
const fourthForm = document.getElementById("fourth-form");
const fifthForm = document.getElementById("fifth-form");
const endForm = document.getElementById("end-form");

// end and bottom pages
const endPage = document.getElementById("end-page");
const bottomPage = document.getElementById("bottom-page");

// form buttons
const startFormBtn = document.getElementById("get-started");
const secondFormBtn = document.getElementById("make-next");
const thirdFormBtn = document.getElementById("mileage-next");
const fourthFormBtn = document.getElementById("zipcode-next");
const fifthFormBtn = document.getElementById("name-next");
const endFormBtn = document.getElementById("get-quote");

// event listeners for buttons to make forms move
startFormBtn.onclick = function () {
  startForm.setAttribute("class", "hide");
  secondForm.classList.remove("hide");
};

secondFormBtn.onclick = function () {
  secondForm.setAttribute("class", "hide");
  thirdForm.classList.remove("hide");
};

thirdFormBtn.onclick = function () {
  thirdForm.setAttribute("class", "hide");
  fourthForm.classList.remove("hide");
};

fourthFormBtn.onclick = function () {
  fourthForm.setAttribute("class", "hide");
  fifthForm.classList.remove("hide");
};

fifthFormBtn.onclick = function () {
  fifthForm.setAttribute("class", "hide");
  endForm.classList.remove("hide");
};

endFormBtn.onclick = function () {
  endForm.setAttribute("class", "hide");
  bottomPage.setAttribute("class", "hide");
  endPage.classList.remove("hide");
};
*/