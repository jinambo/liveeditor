// Variables - article components
let title = $('.title h1');
let article = $('.article p');
let footer = $('.footer p');

// Variables - article components data
var titleData = ['This is title'];
var articleData = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer lacinia. Nam sed tellus id magna elementum tincidunt. Fusce tellus. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante.'];
var footerData = ['This article was published by Carl Doe.'];

// Variables - article components stored data from localhost
var storedTitle = JSON.parse(localStorage.getItem("titleData"));
var storedArticle = JSON.parse(localStorage.getItem("articleData"));
var storedFooter = JSON.parse(localStorage.getItem("footerData"));

var storedStylesTitle = JSON.parse(localStorage.getItem("myStylesTitle"));
var storedStylesArticle = JSON.parse(localStorage.getItem("myStylesArticle"));
var storedStylesFooter = JSON.parse(localStorage.getItem("myStylesFooter"));

//CSS in objects
var myStylesTitle = [
  {
    fontStyle: "font-style: italic;",
    fontWeight: 'font-weight: 600',
  },
  {
    fontStyle: "font-style: normal",
    fontWeight: 'font-weight: 300',
  },
  {
    fontStyle: "font-weight: bold;",
    fontWeight: 'font-weight: 100',
  }
]

var myStylesArticle = [
  {
    fontStyle: "font-style: italic;",
    fontWeight: 'font-weight: 600',
  },
  {
    fontStyle: "font-style: normal",
    fontWeight: 'font-weight: 300',
  },
  {
    fontStyle: "font-weight: bold;",
    fontWeight: 'font-weight: 100',
  }
]

var myStylesFooter = [
  {
    fontStyle: "font-style: italic;",
    fontWeight: 'font-weight: 600',
  },
  {
    fontStyle: "font-style: normal",
    fontWeight: 'font-weight: 300',
  },
  {
    fontStyle: "font-weight: bold;",
    fontWeight: 'font-weight: 100',
  }
]

title.html('<h1 style="' + storedStylesTitle + '">' + storedTitle + '</h1>');
article.html('<p style="' + storedStylesArticle + '">' + storedArticle + '</p>');
footer.html('<p style="' + storedStylesFooter + '">' + storedFooter + '</p>');

$('#title_edit').val(storedTitle);
$('#article_edit').val(storedArticle);
$('#footer_edit').val(storedFooter);

var i = 0;
$('.controllers_title .fa-italic').click(function(){
  i = 0;
  styleTitle();
});
$('.controllers_title .fa-font').click(function(){
  i = 1;
  styleTitle();
});
$('.controllers_title .fa-bold').click(function(){
  i = 2;
  styleTitle();
});

$('.controllers_article .fa-italic').click(function(){
  i = 0;
  styleArticle();
});
$('.controllers_article .fa-font').click(function(){
  i = 1;
  styleArticle();
});
$('.controllers_article .fa-bold').click(function(){
  i = 2;
  styleArticle();
});

$('.controllers_footer .fa-italic').click(function(){
  i = 0;
  styleFooter();
});
$('.controllers_footer .fa-font').click(function(){
  i = 1;
  styleFooter();
});
$('.controllers_footer .fa-bold').click(function(){
  i = 2;
  styleFooter();
});

function styleTitle() {
  localStorage.setItem('myStylesTitle', JSON.stringify(myStylesTitle[i].fontStyle));
  var storedStylesTitle = JSON.parse(localStorage.getItem("myStylesTitle"));
  title.html('<h1 style="' + storedStylesTitle + '">' + storedTitle + '</h1>');
}

function styleArticle() {
  localStorage.setItem('myStylesArticle', JSON.stringify(myStylesArticle[i].fontStyle));
  var storedStylesArticle = JSON.parse(localStorage.getItem("myStylesArticle"));
  article.html('<p style="' + storedStylesArticle + '">' + storedArticle + '</p>');
}

function styleFooter() {
  localStorage.setItem('myStylesFooter', JSON.stringify(myStylesFooter[i].fontStyle));
  var storedStylesFooter = JSON.parse(localStorage.getItem("myStylesFooter"));
  footer.html('<p style="' + storedStylesFooter + '">' + storedFooter + '</p>');
}

// If any components is empty the edit input will show
if (storedTitle[0] == '') {
  $('.controllers_title').slideDown(100);
}
if (storedArticle[0] == '') {
  $('.controllers_article').slideDown(100);
}
if (storedFooter[0] == '') {
  $('.controllers_footer').slideDown(100);
}

// Show and focus the edit input
title.click(function(){
  $('.controllers_title').slideDown(100);
  $('#title_edit').focus();
  editBtn.html('<i class="fas fa-times-circle"></i> Stop editting');
});
article.click(function(){
  $('.controllers_article').slideDown(100);
  $('#article_edit').focus();
  editBtn.html('<i class="fas fa-times-circle"></i> Stop editting');
});
footer.click(function(){
  $('.controllers_footer').slideDown(100);
  $('#footer_edit').focus();
  editBtn.html('<i class="fas fa-times-circle"></i> Stop editting');
});

//Edit click button
var editClick = true;
var editBtn = $('#editBtn');

//Edit button content will change (stop/start)
editBtn.click(function(){
  if (editClick == false) {
    editClick = true;
    $(this).html('<i class="fas fa-edit"></i> Start editting');
    $('#title_edit').focusout();
  } else {
    editClick = false;
    $(this).html('<i class="fas fa-times-circle"></i> Stop editting');
    $('#title_edit').focus();
  }
  $('.controllers_title, .controllers_article, .controllers_footer').slideToggle(100);
});


// Hide the edit input 
$('.fa-times').click(function(){
  $('.controllers_title, .controllers_article, .controllers_footer').hide(100);
  editBtn.html('<i class="fas fa-edit"></i> Start editting');
});

// Save and send data to localhost
$('#title_edit').change(function(){
  $('.controllers_title').hide(100);
  titleData.splice(0);
  titleData.push($('#title_edit').val());
  localStorage.setItem('titleData', JSON.stringify(titleData));
  var storedTitle = JSON.parse(localStorage.getItem("titleData"));
  title.html(storedTitle);
});

$('#article_edit').change(function(){
  $('.controllers_article').hide(100);
  articleData.splice(0);
  articleData.push($('#article_edit').val());
  localStorage.setItem('articleData', JSON.stringify(articleData));
  var storedArticle = JSON.parse(localStorage.getItem("articleData"));
  article.html(storedArticle);
});

$('#footer_edit').change(function(){
  $('.controllers_footer').hide(100);
  footerData.splice(0);
  footerData.push($('#footer_edit').val());
  localStorage.setItem('footerData', JSON.stringify(footerData));
  var storedFooter = JSON.parse(localStorage.getItem("footerData"));
  footer.html(storedFooter);
});

// Drag and drop
/* 
var $dragging = null;

  $(document.body).on("mousemove", function(e) {
      if ($dragging) {
          $dragging.offset({
              top: e.pageY,
              left: e.pageX
          });
      }
  });
  
  $(document.body).on("mousedown", "div.title", function (e) {
      $dragging = $(e.target);
  });
  
  $(document.body).on("mouseup", function (e) {
      $dragging = null;
  });
*/