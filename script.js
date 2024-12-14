function suggestName() {
    const country = document.getElementById("country").value.toLowerCase();
    let name = "";

    switch(country) {
        case "india":
            name = "Aarav (Male), Anaya (Female)";
            break;
        case "germany":
            name = "Finn (Male), Emma (Female)";
            break;
        case "france":
            name = "Gabriel (Male), Louise (Female)";
            break;
        case "spain":
            name = "Hugo (Male), Lucia (Female)";
            break;
        case "italy":
            name = "Leonardo (Male), Sofia (Female)";
            break;
        default:
            name = "No suggestion";
    }

    document.getElementById("result").innerHTML = name;
}
