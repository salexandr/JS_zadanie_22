
"use strict";

$(function(){
  var html = _.template($('#shablon').html());

  var info = html({
	  titleH1: 'Тест по программированию',
	  question1: '1.Вопрос №1',
	  answerO1: ["Вариант ответа №1", "Вариант ответа №2 (правильный)", "Вариант ответа №3"],
	  question2: '2.Вопрос №2',
	  answerO2: ["Вариант ответа №1 (правильный)", "Вариант ответа №2", "Вариант ответа №3"],	
	  question3: '3.Вопрос №3',
	  answerO3: ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3 (правильный)"]	  
	  });

  localStorage.setItem('infoObj', JSON.stringify(info));	
  var questions = localStorage.getItem('infoObj');
  questions = JSON.parse(questions);	  
	  
  $('body').append(questions);
  
  $('.submit_class').on('click', function(){		
	
         if ($(".inputAnswer:eq(1)").prop("checked") == true){
             if ($(".inputAnswer:eq(3)").prop("checked") == true){
				  if ($(".inputAnswer:eq(8)").prop("checked") == true){
					  $(".alert_true h2:first").text("Поздравляем!");
				  	  $(".alert_true h2:last").text("Тест пройден успешно!");						
					  $(".alert_true").slideDown(600);
					  $(".overlay").show();						  
				  } else {test_not();}
			 } else { test_not();}
		 } else {
			 test_not();
		 };	

		 $('.inputAnswer').removeAttr("checked");
	 });
	 
    $('.button_ok').on('click', function(){
	    $(".alert_true").slideUp(600); $(".overlay").hide();		
	});	 
	
	function test_not(){
        $(".alert_true h2:first").text("Тест не пройден.");
	    $(".alert_true h2:last").text("Попробуйте еще раз.");
        $(".alert_true").slideDown(600); 
	    $(".overlay").show();	
	};
  
}); 

