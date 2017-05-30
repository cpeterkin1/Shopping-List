$(document).ready(function(){
  $('.shopping-list').on('click','.shopping-item-toggle',function(){
    $(this).parent().siblings('.shopping-item').toggleClass('shopping-item__checked');
  });
  
  $('.shopping-list').on('click','.shopping-item-delete',function(){
    $(this).parent().parent().remove();
  });
 
  $('#js-shopping-list-form button').click(function(e){
    e.preventDefault();
    var item = $('#shopping-list-entry').val();
    var itemHTML = '<li>'+
        '<span class="shopping-item">'+item+'</span>'+
        '<div class="shopping-item-controls">'+
          '<button class="shopping-item-toggle">'+
            '<span class="button-label">check</span>'+
          '</button>'+
          '<button class="shopping-item-delete">'+
            '<span class="button-label">delete</span>'+
          '</button>'+
        '</div>'+
      '</li>';
    $('.shopping-list').append(itemHTML);
    $('#shopping-list-entry').val('');
  });

});