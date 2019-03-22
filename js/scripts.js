$(function() {
  var $sqre = $('#tabs a').click(function() {
    $sqre.not(this).removeClass('active');
    $(this).toggleClass('active');
  });
});

$(function() {
  var $sqre = $('.menu a').click(function() {
    $sqre.not(this).removeClass('active');
    $(this).toggleClass('active');
  });
});
$.ajax({
  url:'products.json',
  dataType: 'json',
  type: 'post',
  cache: false,
  success: function(data) {
    var first_section_title = data[0]; 
    var my_first_title = first_section_title.title; 
    $('#label1').append(my_first_title);  
    var first_section_description = data[0]; 
    var my_first_description = first_section_description.description; 
    $('#section1').append(my_first_description);  
    var first_section_image = data[0]; 
    var my_first_image = first_section_image.image; 
    $('#accordion-1').prepend($('<img>',{src: my_first_image, class:'image1', alt:'image'}));

    var second_section_title = data[1]; 
    var my_second_title = second_section_title.title; 
    $('#label2').append(my_second_title);  
    var second_section_description = data[1]; 
    var my_second_description = second_section_description.description; 
    $('#section2').append(my_second_description);  
    var second_section_image = data[1]; 
    var my_second_image = second_section_image.image; 
    $('#accordion-2').prepend($('<img>',{src: my_second_image, class:'image2', alt:'image'}));

    var third_section_title = data[2]; 
    var my_third_title = third_section_title.title; 
    $('#label3').append(my_third_title);  
    var third_section_description = data[2]; 
    var my_third_description = third_section_description.description; 
    $('#section3').append(my_third_description);  
    var third_section_image = data[2]; 
    var my_third_image = third_section_image.image; 
    $('#accordion-3').prepend($('<img>',{src: my_third_image, class:'image3', alt:'image'}));

    var fourth_section_title = data[3]; 
    var my_fourth_title = fourth_section_title.title; 
    $('#label4').append(my_fourth_title);  
    var fourth_section_description = data[3]; 
    var my_fourth_description = fourth_section_description.description; 
    $('#section4').append(my_fourth_description);  
    var fourth_section_image = data[3]; 
    var my_fourth_image = fourth_section_image.image; 
    $('#accordion-4').prepend($('<img>',{src: my_fourth_image, class:'image4', alt:'image'}));
  }
});