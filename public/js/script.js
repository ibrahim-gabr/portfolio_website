new TypeIt("#showcase-typing", {
  speed: 200,
  waitUntilVisible: true,
  loop : true
})
  .type("Alexander")
  .pause(200)
  .delete(9)
  .type("Freelancer")
  .pause(200)
  .delete(10)
  .type("Photographer")
  .pause(200)
  .delete(12)
  .type("developer")
  .pause(200)
  .delete(9)
  .go();
  let collapsedMenuInvisible = $("#collapsed-menu").hasClass("invisible")

  $("#toggle-menu").click(function(){
    $("#toggle-menu").html('<button id="toggle-menu" class="focus:outline-none">Close</button>')
    $("#collapsed-menu").toggleClass("invisible")
    collapsedMenuInvisible = $("#collapsed-menu").hasClass("invisible")
    if(collapsedMenuInvisible == true){
      $("#toggle-menu").html('<button id="toggle-menu" class="focus:outline-none">Menu</button>')
    }
  })

  $(".portfolio-img").hover(function(){
    $(this).toggleClass("pulse");
    $(this).find(".portfolio-img-overlay").toggleClass("invisible");
    $(this).find(".portfolio-img-overlay").css("background-color","rgba(250, 0, 0, 0.4)");
  })




  $(function(){
    $(".bla-1").YouTubePopUp();
});

// lightbox

$(".portfolio-img").slice(1).click(function(){
$(".lightbox-image").addClass("hidden")
  $(".modal").toggleClass("invisible");
  let index = $(this).find("img").attr("index")
  $(".lightbox-image[index=" + index + "]").removeClass("hidden")


  $(".lightbox-image").click(function(){
    $(".lightbox-image").addClass("hidden")
    $(this).addClass("hidden")
    i = ++index
    if(index == 7){
      index = 1;
      i = 1;
    }
    console.log(index,"index")
    console.log(i,"i")
    $(".lightbox-image[index=" + i + "]").removeClass("hidden")
})

})


$(".closebtn").click(function(){
  $(".modal").addClass("invisible");
})

$(".outside-modal").click(function(){
  $(".modal").addClass("invisible");
})

$(".portfolio-category").click(function(){
  $(".portfolio-category").removeClass("active");
  $(this).addClass("active");
  var categoryClass = $(this).html()
  console.log(categoryClass)
switch(categoryClass){
  case "Development":
    $(".ALL").addClass("zoomOut").hide();
    $(".Development").removeClass("zoomOut").addClass("zoomIn").show()
    break;
    case "Video":
      $(".ALL").addClass("zoomOut").hide();
      $(".Video").removeClass("zoomOut").addClass("zoomIn").show()
      break;
      case "Photography":
        $(".ALL").addClass("zoomOut").hide();
        $(".Photography").removeClass("zoomOut").addClass("zoomIn").show()
        break;
case "All":
  $(".ALL").removeClass("zoomOut").addClass("zoomIn").show();
}

})

