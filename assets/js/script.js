
// przelaczanie klasy "completed" po kliknieciu
// $(selector).on(event, childSelector, function)
$("ul").on("click", "li", (function(){
    $(this).toggleClass("completed")
}));

// usuwanie rekordu z opoznieniem
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(1000, function(){
        $(this).remove();
    });
    // zatrzymanie triggerowania eventu parenta ul aby nie przelaczac klasy completed przy usuwaniu
    event.stopPropagation();
});

// dodanie rekordu z inputu poprzez nacisniecie enter na klawiaturze
$("input[type='text']").keypress(function(event){
    if (event.which === 13){
        let todoText = $(this).val();
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
        // przywrocenie pustego pola inputu
        $(this).val("");
    }
});

// zwijanie i rozwijanie pola input przez nacisniecie ikony "plusa"
$("#fontAwesome").click(function(){
    $("input[type='text']").fadeToggle(500);
});