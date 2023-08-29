$(function () {
    var autoComplete = [
        "Kalem",
        "Kadın",
        "Elbise",
        "Şort",
        "Telefon",
        "Bilgisayar"
    ];
    $("#tagsSearch").autocomplete({
        source: autoComplete
    });
});