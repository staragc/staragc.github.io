/*menu manager - start*/
let menuItemObjs = [
    {
        name : "Golden Caviar Blini",
        img : "images/menu_items/appetizers/golden_caviar_blini.webp",
        category : "appetizer",
        price : "94.99",
        desc : "Delicate blini topped with premium golden caviar, offering a burst of exquisite flavors in every bite.",
        ingr : "Golden caviar, blini, crème fraîche, chives."
    },
    {
        name : "Truffle Arancini",
        img : "images/menu_items/appetizers/truffle_arcancini.webp",
        category : "appetizer",
        price : "64.99",
        desc : "Crispy, golden arancini infused with the earthy aroma of black truffles, served with a velvety truffle aioli.",
        ingr : "Arborio rice, black truffles, parmesan cheese, truffle oil, breadcrumbs."
    },
    {
        name : "Foie Gras Pâté",
        img : "images/menu_items/appetizers/fois_gras_pate.webp",
        category : "appetizer",
        price : "84.99",
        desc : "Silky smooth foie gras pâté, delicately seasoned and served with toasted brioche points for a luxurious start to your meal.",
        ingr : "Foie gras, butter, shallots, cognac, spices, brioche."
    },
    {
        name : "Lobster Bisque",
        img : "images/menu_items/appetizers/lobster_brisque.webp",
        category : "appetizer",
        price : "109.99",
        desc : "A rich and creamy bisque infused with the essence of succulent lobster meat, finished with a hint of brandy and served with artisanal bread.",
        ingr : "Lobster meat, cream, brandy, vegetables, herbs, spices."
    },
    {
        name : "Wagyu Beef Tartare",
        img : "images/menu_items/appetizers/wagyu_beef_tartare.webp",
        category : "appetizer",
        price : "119.99",
        desc : "Finely diced Wagyu beef, hand-mixed with capers, shallots, and a hint of Dijon mustard, served with quail egg yolk and crispy crostini.",
        ingr : "Wagyu beef, capers, shallots, Dijon mustard, quail egg yolk, crostini."
    },
    {
        name : "Oysters Rockefeller",
        img : "images/menu_items/appetizers/oyster_rockefeller.webp",
        category : "appetizer",
        price : "99.99",
        desc : "Plump oysters topped with a rich blend of spinach, herbs, and Pernod liqueur, baked to perfection and served on a bed of rock salt.",
        ingr : "Oysters, spinach, Pernod liqueur, herbs, breadcrumbs."
    },
    
    {
        name : "Alaskan King Crab Salad",
        img : "images/menu_items/lunch/alaskan_king_crab_salad.webp",
        category : "lunch",
        price : "219.99",
        desc : "Tender Alaskan king crab meat served atop a bed of mixed greens, avocado, grapefruit segments, and a citrus champagne vinaigrette.",
        ingr : "Alaskan king crab meat, mixed greens, avocado, grapefruit, citrus champagne vinaigrette."
    },
    {
        name : "Grilled Wagyu Steak Sandwich",
        img : "images/menu_items/lunch/grilled_wagyu_steak_sandwich.webp",
        category : "lunch",
        price : "229.99",
        desc : "Grilled Wagyu steak slices served on ciabatta bread with caramelized onions, roasted red peppers, arugula, and horseradish aioli",
        ingr : "Wagyu steak, ciabatta bread, caramelized onions, roasted red peppers, arugula, horseradish aioli."
    },
    {
        name : "Truffle Lobster Mac and Cheese",
        img : "images/menu_items/lunch/truffle_lobster_mack_and_cheese.webp",
        category : "lunch",
        price : "244.99",
        desc : "Creamy macaroni and cheese infused with chunks of lobster meat and black truffle, baked to perfection and topped with breadcrumbs.",
        ingr : "Lobster meat, macaroni, cheese sauce, black truffle, breadcrumbs."
    },
    {
        name : "Seared Scallop Salad",
        img : "images/menu_items/lunch/seared_scallop_salad.webp",
        category : "lunch",
        price : "224.99",
        desc : "Pan-seared scallops served over a bed of arugula, roasted beets, fennel, and citrus segments, drizzled with a blood orange vinaigrette.",
        ingr : "Scallops, arugula, roasted beets, fennel, citrus segments, blood orange vinaigrette."
    },
    {
        name : "Crispy Duck Confit Tacos",
        img : "images/menu_items/lunch/crispy_duch_confit_tacos.webp",
        category : "lunch",
        price : "234.44",
        desc : "Crispy duck confit nestled in warm corn tortillas with pickled red cabbage slaw, avocado crema, and cilantro.",
        ingr : "Duck confit, corn tortillas, pickled red cabbage slaw, avocado crema, cilantro."
    },
    {
        name : "Miso Glazed Salmon Salad",
        img : "images/menu_items/lunch/miso_glased_salmon_salad.webp",
        category : "lunch",
        price : "204.99",
        desc : "Miso glazed salmon fillet served atop a bed of mixed greens, cucumber, edamame, and sesame ginger dressing.",
        ingr : "Salmon fillet, miso glaze, mixed greens, cucumber, edamame, sesame ginger dressing."
    },
    
    {
        name : "Lobster Tail Thermidor",
        img : "images/menu_items/dinner/lobster_tail_thermidor.webp",
        category : "dinner",
        price : "339.99",
        desc : "Succulent lobster tail meat cooked in a creamy brandy sauce with shallots, Dijon mustard, and Gruyère cheese, served with herb-roasted potatoes.",
        ingr : "Lobster tail, brandy, shallots, Dijon mustard, Gruyère cheese, potatoes."
    },
    {
        name : "Veal Osso Buco",
        img : "images/menu_items/dinner/veal_osso_buco.webp",
        category : "dinner",
        price : "365.99",
        desc : "Tender veal shanks braised in a rich red wine sauce with tomatoes, carrots, celery, and aromatic herbs, served atop creamy saffron risotto.",
        ingr : "Veal shanks, red wine, tomatoes, carrots, celery, saffron risotto."
    },
    {
        name : "Pan-Seared Duck Breast",
        img : "images/menu_items/dinner/pan_seared_duck_breast.webp",
        category : "dinner",
        price : "315.99",
        desc : "Pan-seared duck breast served medium-rare with a honey-orange glaze, accompanied by roasted Brussels sprouts and sweet potato puree.",
        ingr : "Duck breast, honey-orange glaze, Brussels sprouts, sweet potato puree."
    },
    {
        name : "Miso Marinated Black Cod",
        img : "images/menu_items/dinner/miso_marinated_black_cod.webp",
        category : "dinner",
        price : "349.99",
        desc : "Black cod fillet marinated in a sweet and savory miso glaze, oven-roasted and served with stir-fried baby bok choy and jasmine rice.",
        ingr : "Black cod fillet, miso glaze, baby bok choy, jasmine rice."
    },
    {
        name : "Risotto alla Milanese with Shrimp Scampi",
        img : "images/menu_items/dinner/risotto_alla_milanese_with_shrimp_Scampi.webp",
        category : "dinner",
        price : "324.99",
        desc : "Creamy saffron risotto served with succulent shrimp scampi cooked in garlic, white wine, and lemon butter sauce, garnished with parsley.",
        ingr : "Saffron risotto, shrimp, garlic, white wine, lemon butter sauce."
    },
    {
        name : "Filet Mignon Rossini",
        img : "images/menu_items/dinner/filet_mignon_rossini.webp",
        category : "dinner",
        price : "399.99",
        desc : "Prime filet mignon topped with seared foie gras and black truffle slices, served with a rich Madeira wine sauce and truffle mashed potatoes.",
        ingr : "Filet mignon, foie gras, black truffle, Madeira wine sauce, truffle mashed potatoes."
    },
    
    {
        name : "Domaine Leroy Musigny Grand Cru",
        img : "images/menu_items/drinks/domaine_leroy_musigny_grand_cru.webp",
        category : "drink",
        price : "449.99",
        desc : "This prestigious Pinot Noir from Burgundy, France boasts a complex and layered aroma with notes of black cherry, earth, truffle, and spice.  On the palate, it's full-bodied with silky tannins and flavors of ripe fruit, earth, and a hint of minerality. This luxurious wine is best enjoyed after several years of aging.",
        ingr : ""
    },
    {
        name : "Barolo Riserva DOCG from Giacomo Conterno",
        img : "images/menu_items/drinks/barolo_iserva_docg.webp",
        category : "drink",
        price : "299.99",
        desc : "This Barolo from Italy's Piedmont region is crafted from the Nebbiolo grape. Known for its robust character, it offers aromas of dried rose, tar, and dark fruit. The palate is bold and structured with firm tannins, notes of black cherry, licorice, and a long, lingering finish. This wine benefits from aging and can improve for decades in the cellar.",
        ingr : ""
    },
    {
        name : "Châteauneuf-du-Pape from Château Rayas",
        img : "images/menu_items/drinks/châteauneuf-du-pape.webp",
        category : "drink",
        price : "279.99",
        desc : "This Southern Rhône blend from France typically includes Grenache, Syrah, Mourvèdre, and other permitted grapes. Château Rayas produces a powerful and complex expression with aromas of black fruit, leather, and herbs. The palate is full-bodied and structured with rich tannins, flavors of plum, licorice, and earth. This wine can age for over a decade.",
        ingr : ""
    },
    {
        name : "Colgin Cellars IX Estate Napa Valley Cabernet Sauvignon",
        img : "images/menu_items/drinks/colgin_cellars_ix_estate.webp",
        category : "drink",
        price : "399.99",
        desc : "This Cabernet Sauvignon from California's Napa Valley offers intense aromas of black currant, cedar, and dark chocolate. The palate is full-bodied and richly textured with firm tannins, flavors of blackberry, cassis, and spice. This wine is built for aging and can improve for over 20 years in the cellar.",
        ingr : ""
    },
    {
        name : "Heitz Cellar Martha's Vineyard Cabernet Sauvignon",
        img : "images/menu_items/drinks/heitz_cellar_marthas_vineyard_cabernet_sauvignon.webp",
        category : "drink",
        price : "349.99",
        desc : "Another exceptional Cabernet Sauvignon from Napa Valley, this wine boasts a complex bouquet of black cherry, cedar, and earth. The palate is full-bodied and well-structured with ripe tannins, flavors of black fruit, tobacco, and a hint of mint. This wine can age gracefully for a decade or more.",
        ingr : ""
    },
    {
        name : "Château d'Yquem Sauternes",
        img : "images/menu_items/drinks/château_d_yquem_sauternes.webp",
        category : "drink",
        price : "399.99",
        desc : "This world-renowned Sauternes from Bordeaux, France is a sweet white wine crafted from Semillon and Sauvignon Blanc grapes affected by noble rot. It offers an intensely concentrated aroma of honey, apricot, and orange blossom with hints of botrytis. The palate is luxuriously sweet with balanced acidity, flavors of dried fruit, honey, and a touch of saffron. This is a rare and collectible wine.",
        ingr : ""
    }
]
//manager variables
const blankClMI = document.getElementById("blank_cl_mi");
const appetizerPage = document.getElementById("appetizer_page");
const dinnerPage = document.getElementById("dinner_page");
const lunchPage = document.getElementById("lunch_page");
const drinkPage = document.getElementById("drink_page");
let MILoadingFinished = false;
//reservation variables
const blankRfMI = document.getElementById("blank_rf_mi");
const appetizerRfPage = document.getElementById("appetizer_rf_page");
const dinnerRfPage = document.getElementById("dinner_rf_page");
const lunchRfPage = document.getElementById("lunch_rf_page");
const drinkRfPage = document.getElementById("drink_rf_page");

//display
function displayMenuClient(){
    //add menu carousel elements
    if(blankClMI != null){
        for (let i = 0; i < menuItemObjs.length; i++){
            let currentMIObj = menuItemObjs[i];
            let newMIEl = blankClMI.cloneNode(true);
            newMIEl.id = '';
            //get important elements
            let newMIElImg = newMIEl.querySelector("img");
            let newMIElName = newMIEl.querySelector(".mi_name");
            let newMIElPrice = newMIEl.querySelector(".mi_price");
            let newMIElBtn = newMIEl.querySelector("button");
            //assign values
            newMIElBtn.addEventListener("click", () =>{MMDisplay(currentMIObj);})
            newMIElImg.src = currentMIObj.img;
            newMIElImg.alt = currentMIObj.img;
            newMIElName.innerHTML = currentMIObj.name;
            newMIElPrice.innerHTML = "$" + currentMIObj.price;
            if(currentMIObj.category == "appetizer")
                appetizerPage.append(newMIEl);
            else if(currentMIObj.category == "lunch")
                lunchPage.append(newMIEl);
            else if(currentMIObj.category == "dinner")
                dinnerPage.append(newMIEl);
            else if(currentMIObj.category == "drink")
                drinkPage.append(newMIEl);
        }
    }
    //add reservation elements
    for (let i = 0; i < menuItemObjs.length; i++){
        let currentMIObj = menuItemObjs[i];
        let newMIEl = blankRfMI.cloneNode(true);
        newMIEl.id = '';
        //get important elements
        let newMIElImg = newMIEl.querySelector("img");
        let newMIElName = newMIEl.querySelector(".rf_mi_name");
        let newMIElPrice = newMIEl.querySelector(".rf_mi_price");
        let newMIElBtn = newMIEl.querySelector(".mi_btn");
        //assign values
        newMIElBtn.addEventListener("click", () =>{MMDisplay(currentMIObj);})
        newMIElImg.src = currentMIObj.img;
        newMIElImg.alt = currentMIObj.img;
        newMIElName.innerHTML = currentMIObj.name;
        newMIElPrice.innerHTML = "$" + currentMIObj.price;
        if(currentMIObj.category == "appetizer")
            appetizerRfPage.append(newMIEl);
        else if(currentMIObj.category == "lunch")
            lunchRfPage.append(newMIEl);
        else if(currentMIObj.category == "dinner")
            dinnerRfPage.append(newMIEl);
        else if(currentMIObj.category == "drink")
            drinkRfPage.append(newMIEl);
    }
    MILoadingFinished = true;
}
window.addEventListener("load", () =>{
    displayMenuClient();
})
/*menu manager - start*/