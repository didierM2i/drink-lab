function switch_disponibilte(dispo){
  console.log(dispo);
  var boissons;
  if (dispo == "energy"){
        boissons = $('.energy');
        $('#buttEnergy').removeClass('disabled');
  } else {
    boissons = $('.desalterantes');
    $('#buttDesalter').removeClass('disabled');
  }
  console.log(boissons);
  boissons.each(function(){
    console.log($(this));
    if ($(this).hasClass("nrjNonDisponible")){
      $(this).text("Non disponible. Modifiez votre sélection pour sélectionner cette recette.");
      $(this).addClass('nonDispo');
      $('.buttEnergy').addClass('disabled');
    } else {
      $(this).text("Boisson énergisante gazeuse, saveur mojito à la caféine et sans alcool.");
      $(this).removeClass('nonDispo');
    }
  }); // fin du each
};

$(function() {
  // DOM complétement chargé..

  // La page atteint une hauteur de 100
  $(window).scroll(function(){
    if( $(window).scrollTop() < 100){
      $('.navbar-default').hide();
      // alert($(window).scrollTop());
    }
    if( $(window).scrollTop() > 100){
      $('.navbar-default').show("slow");
      // alert($(window).scrollTop());
    }
  });

  //rendre les boissons disponibles où non disponibles
  // en cliquant sur l'icone flash ou flocon
  $('#upDown1').on('click',function(){
    $('#original').toggleClass('nrjNonDisponible');
  });
  $('#upDown2').on('click',function(){
    $('#mojito').toggleClass('nrjNonDisponible');
  });
  $('#upDown3').on('click',function(){
    $('#tropical').toggleClass('desNonDisponible');
  });


  $('.badge').each(function(index){
    // var typeBoisson;
    $(this).on('click',function(){
      if ( $(this).hasClass("energie") ) {
        // typeBoisson = "energie";
        switch_disponibilte("energy");
        } //fin traitement boisson energisantes
         else {
           console.log("desal");
           switch_disponibilte("desalterantes");
      }
      // console.log(typeBoisson);
    });
  });
  // });
  //idem pour desalterante
  // $('#desalter').on('click',function(){
  //   $('.desNonDisponible').text("Non disponible. Modifiez votre sélection pour sélectionner cette recette.");
  //   //bouton toggle change a chaque clic => à modifier
  //   $('.buttDesalter').toggleClass('disabled');
  // });


  // Afficher la boisson sélectionnée
  // On scrute les boutons 'selectionner' qui ont une classe choix

  var cBoxes = $("input[type='checkbox']");
  cBoxes.each(function(){
    $(this).on('click',function(){
      $(this).is(':checked') ? $('#choixClient').text($(this).attr('value')) : console.log("false");
    });
  });
  // alert($('#checkBox').is(':checked'));
  // :checked").each(
  //           function() {
  //            console.log($(this));
  //           });
      //      }
      // );

});
