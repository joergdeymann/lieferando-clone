function addAllCategory() {
    companyUse(0);
    categoryListUse(company["categoryList"]);
    categoryAdd("Beliebt","Beliebt");
    categoryAdd("Menüs","Menüs","./img/company001/menu.jpg");
    categoryAdd("Salate","Salate","./img/company001/salat.jpg");
    categoryAdd("Burger","Burger","./img/company001/burger.jpg");
    categoryAdd("Imbissgerichte","Imbissgerichte","./img/company001/imbiss.jpg");
    categoryAdd("Beilagen und Saucen","Beilagen und Saucen","./img/company001/beilage.jpg");

    companyUse(1);
    categoryListUse(company["categoryList"]);
    categoryAdd("Beliebt","Beliebt");
    categoryAdd("Burger","Burger","./img/company002/burger.jpg");
    categoryAdd("Salate","Salate","./img/company002/salat.jpg");
}

 