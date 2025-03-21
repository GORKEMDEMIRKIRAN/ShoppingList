


//---------- SHOPPING LIST APPLICATION-----------------

//       ---------JAVASCRIPT REGION------------


//=================================================
// Hiç ürün yoksa;
/* 
    Kalıcı görünen bölümler:
        1-inputs bölümü
    görünmez bölümler: 
        1-buttons altındaki "buttonsList"
        2-clear altındaki clear butonu
        3-products altındaki "productsList"
    görünen bölümler: 
        1-products altındaki "NoproductsList"
*/
//=================================================


// BUTTONS REGION
//======================================================================================================
// Buton bölümünü ekle
function AddbuttonsList(){
    let html=
    `
    <div class="container buttonsList">
        <form action="" id="PressButtons" name="PressButton">
            <div class="container me-0">
                <button id="1" type="button" class="btn" name="All">All</button>
                <button id="2" type="button" class="btn" name="Incomplete">Incomplete</button>
                <button id="3" type="button" class="btn" name="Completed">Completed</button>
            </div>
        </form>
    </div>
    `;
    //id=products altına ekleme
    document.getElementById("buttons").insertAdjacentHTML("afterbegin",html);

    // her bir butona tıklandığında gerçekleşecek işlemleri tanımlayalım.
    document.querySelector("button[id='1']").addEventListener("click",AllButton);
    document.querySelector("button[id='2']").addEventListener("click",InCompleteButton);
    document.querySelector("button[id='3']").addEventListener("click",CompletedButton);

}
//=========================================================
// Buton bölümünü sil
function RemoveButtonsList(){
    const buttons=document.getElementById("buttons");
    const first=buttons.children[0];
    buttons.removeChild(first);
}
//=========================================================
// BUTTON TIKLANMA SONUCU GERÇEKLEŞİCEK İŞLEMLER

function AllButton(e){
    e.preventDefault();
    //========================================================
    // Butona tıklandığın arka plan renk değişimi
    const btn1=document.querySelector("button[id='1']");
    const btn2=document.querySelector("button[id='2']");
    const btn3=document.querySelector("button[id='3']");
    btn1.classList.add("btnColor");
    btn2.classList.remove("btnColor");
    btn3.classList.remove("btnColor");
    //========================================================
    // ürün bölümünü kaldırma
    const productsList=document.getElementById("productsList");
    while(productsList.firstChild){
        productsList.removeChild(productsList.firstChild);
    }
    //========================================================
    // producsArray içeriğini yazdırma
    for(let item of productsArray){
        // productName,productId 2 parametre alır.
        if(item.isChecked==true){
            AddProduct(item.productName,item.productId,true,item.backColor,item.textDecoration);
        }
        else{
            AddProduct(item.productName,item.productId,false,item.backColor,item.textDecoration);
        }
    }
    //========================================================
}

function InCompleteButton(e){
    e.preventDefault();
    //========================================================
    // Butona tıklandığın arka plan renk değişimi
    const btn1=document.querySelector("button[id='1']");
    const btn2=document.querySelector("button[id='2']");
    const btn3=document.querySelector("button[id='3']");
    btn1.classList.remove("btnColor");
    btn2.classList.add("btnColor");
    btn3.classList.remove("btnColor");
    //========================================================
    // ürün bölümünü kaldırma
    const productsList=document.getElementById("productsList");
    while(productsList.firstChild){
        productsList.removeChild(productsList.firstChild);
    }
    //========================================================
    // producsArray içeriğini yazdırma
    for(let item of productsArray){
        // productName,productId 2 parametre alır.
        if(item.isChecked==false){
            AddProduct(item.productName,item.productId,false,item.backColor,item.textDecoration);
        }
    }
    //========================================================
}

function CompletedButton(e){
    e.preventDefault();
    //========================================================
    // Butona tıklandığın arka plan renk değişimi
    const btn1=document.querySelector("button[id='1']");
    const btn2=document.querySelector("button[id='2']");
    const btn3=document.querySelector("button[id='3']");
    btn1.classList.remove("btnColor");
    btn2.classList.remove("btnColor");
    btn3.classList.add("btnColor");
    //========================================================
    // ürün bölümünü kaldırma
    const productsList=document.getElementById("productsList");
    while(productsList.firstChild){
        productsList.removeChild(productsList.firstChild);
    }
    //========================================================
    // producsArray içeriğini yazdırma
    // productName,productId 2 parametre alır.
    for(let item of productsArray){
        // productName,productId 2 parametre alır.
        if(item.isChecked==true){
            AddProduct(item.productName,item.productId,true,item.backColor,item.textDecoration);
        }
    }
    //========================================================
}
//======================================================================================================




// NOITEMS MESSAGE REGION
//======================================================================================================
function AddNoItems(){
    let html=
    `
    <div class="NoproductItem rounded">
        <label for="" name="NoItems" class="form-check-label">No Items</label>
    </div>
    `;
    document.getElementById("NoproductsList").insertAdjacentHTML("afterbegin",html);
}
function RemoveNoItems(){
    const NoProduct=document.querySelector(".NoproductsList");
    console.log("ürün sayısı: ",NoProduct.children.length);
    const firstChild=NoProduct.children[0];
    NoProduct.removeChild(firstChild);
}
//======================================================================================================




// CLEAR BUTTON REGION
//======================================================================================================

function AddClearButton(){
    let html=
    `
    <div class="container">
        <button class="btn btn-danger" id="clearButton">Clear</button>
    </div>
    `;
    //id=cleat altına ekleme
    document.getElementById("clear").insertAdjacentHTML("afterbegin",html);
    // CLEAR BUTONU
    // clear butonu eklendiğinde press işlemi sonucu gerçekleşecek işlem
    document.getElementById("clearButton").addEventListener("click",clearAllItems);
}
function RemoveClearButton(){
    const btn=document.getElementById("clear");
    const first=btn.children[0];
    btn.removeChild(first);
}

// ALL CLEAR
// Clear butonu tıklama sonucu;
/*
    1-NoItems mesajı eklenir.
    2-Clear butonu siinir.
    3-Ürünler silinir.
    4-Butonlar bölümü silinir.
 */
function clearAllItems(e){
    e.preventDefault();
    DelProducts();          // bütün ürünleri siler
    AddNoItems();           // noitems mesaj bölümünü ekleme
    RemoveButtonsList();    // buttons kaldırma
    RemoveClearButton();    // clear butonu kaldırma
}

// ALL ITEMS CLEAR
function DelProducts(){
    // productArray listesiniz temizleme
    productsArray.length=0;
    // ekran üstünde productsList temizleme
    const productsList=document.getElementById("productsList");
    while(productsList.firstChild){
        productsList.removeChild(productsList.firstChild);
    }
    console.log(productsArray);

}

//======================================================================================================






// DATABASE REGION
//======================================================================================================
// Database 3 parametre içeriyor.
/*
    1-isChecked   = bool    - işaretli ürün olup olmadığı
    2-productName = string  - ürün ismi
    3-productId   = int     - ürün id değeri
 */

// PRODUCTS ARRAY (ürünleri bu listede tutuyoruz.)
const productsArray = [];

function AddArrayList(){
    // bu kısımda girilen bütün bilgileri listeye ekler  ve veri tutar.
    const productItems = document.querySelectorAll(".productItem");
    for(let item of productItems){
        const inputElement=item.querySelector("input[name='productSelect']");
        const labelElement=item.querySelector("label");
        const numberElement=item.querySelector("input").id;

        const productName=labelElement.textContent.trim();

        // Aynı ürün ismi mevcutsa eklemez.
        const isExist=productsArray.some(product=>product.productName === productName);
        if(!isExist){
            productsArray.push({
                isChecked:inputElement.checked,
                productName:labelElement.textContent.trim(),
                productId:numberElement,
                backColor:"",
                textDecoration:""
            });
        }
    }
}

//======================================================================================================






// PRODUCTS REGION
//======================================================================================================
// ÜRN EKLEME
function AddProduct(productName,number,checked,backColor,textDecoration)
{
    /*
        productName=string
        number=int
        checked=bool
        backColor=string(cssAttribute)
     */
    let checkedAttribute = checked ? "checked" : ""; // checked değişkenine göre "checked" veya boş string
    let html=
    `
    <li class="productItem ${backColor} ${textDecoration}" id="productItem-${number}">
        <form action="" id="productsForm">
            <input type="checkbox" name="productSelect" id="${number}" class="form-check-input" ${checkedAttribute}>
            <label for="${number}" id="${number}" name="productName" class="form-check-label ms-2">${productName}</label>
            <button type="button" name="productClose" id="productClose-${number}" class="btn btn-danger btn-sm">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </form>
    </li>
    `;
    document.getElementById("productsList").insertAdjacentHTML("afterbegin",html);
    //close butonuna tıklama sonucu eleman silinecektir.
    // "DeleteProductItem" ürünü silen metod
    document.getElementById(`productClose-${number}`).addEventListener("click",function(){DeleteProductItem(number)});
    //input butonu seçildiğinde
    document.querySelector(`input[id='${number}']`).addEventListener("click",function(){SelectProductItem(number)});
}

// ÜRÜN SİLME
function RemoveProduct(productId){
    // Ürün id göre ürünü siler.
    //=====================================
    // 1-productArray ürün silme
    for(let i=0;i<productsArray.length; i++){
        if(productsArray[i].productId == productId){
            productsArray.splice(i,1); //i.dizinin elemanını siler.
            break;
        }
    }
    //=====================================
    // 2-productsList ürün silme
    const productItem=document.querySelector(`input[id='${productId}']`).closest(".productItem");
    if(productItem){
        productItem.remove();
    }
    //=====================================
}

// CLOSE SONUCU ÜRÜN SİLME
function DeleteProductItem(productId){
    //=====================================
    const productCount=document.getElementById("productsList").children.length;
    // Eğer sorguda sadece kendi kaldıysa genişlik "1" olur.Yani son ürün siliniyor.
    if(productCount==1){
        RemoveButtonsList();        // buton bölümü siinir.
        RemoveClearButton();        // clear butonu silinir.
        AddNoItems();               // NoItems bölümü eklenir.
        RemoveProduct(productId);   // ürün id göre ürünü siler.

    }
    else{
        // daha ürünler bitmediği durumda;
        RemoveProduct(productId);   // ürün id göre ürünü siler.
    }
     //=====================================
    console.log("The product deleted.");
    console.log(productsArray);
}

// CHECKBOX SELELT SONUCU ÜRÜN İŞARETLEME
function SelectProductItem(productId){
    //================================================
    // 1-productsArray "checked" özelliğini değiştirme
    const bool=document.querySelector(`input[id='${productId}']`).checked;
    // productItem-Id ile arka plan değişimi;
    const product=document.getElementById(`productItem-${productId}`);
    const label=document.querySelector(`label[id='${productId}']`);
    if(bool==true){
        product.classList.add("productColor");
        product.classList.add("line-through");
    }
    else{
        product.classList.remove("productColor");
        product.classList.remove("line-through");

    }
    console.log(bool);
    for(let i=0; i<productsArray.length; i++){
        if(productId==productsArray[i].productId){
            productsArray[i].isChecked=bool;
            productsArray[i].backColor="productColor";
            productsArray[i].textDecoration="line-through";
        }
    }
    //================================================
    console.log("The product selected.");
    console.log(productsArray);

}
//======================================================================================================



// ACTION BUTTON PRESS
//======================================================================================================

let ProductNumber=0;

function ButtonPress(e){
    /*
    Ürün ekleme için işleminde hiç ürün yoksa;
        --1. ürün eklemede;
            1-buttons altında "buttonsList" ekleme
            2-clear altında "container" ekleme
            3-products altında "productsList" ekleme
            4-products altında "NoproductsList" silme
        --2.ürün ve sonrasında;
            1-buttons altında "buttonsList" ekleme
     */

    // Buton default değeri etkisiz halde;
    e.preventDefault();
    const products=document.getElementById("productsList");
    const input=document.getElementById("InputproductName").value;
    console.log("ürün ismi: ",input);
    if(input.length==0){
        alert("Lütfen ürün ismi giriniz.");
    }
    else{
        // Eğer productsList altında hiç ürün yoksa;
        if(products.children.length==0){
            // Ürün id için her seferinde değer artıcaktır.
            ProductNumber=ProductNumber+1;
            // NoItems kaldırma
            console.log("Noitems kalktı.");
            RemoveNoItems();
            // Clear butonu ekleme
            console.log("Clear butonu eklendi.");
            AddClearButton();
            // Buttonları listesini ekleme
            console.log("Butonlar eklendi.");
            AddbuttonsList();
            // ürün ekleme
            console.log(`${ProductNumber}.ürün eklendi.`);
            AddProduct(input,ProductNumber);
            // Girilen bilgileri database ekleme
            AddArrayList();
            console.log(productsArray);
            //Input içeriğini temizleme
            document.getElementById("InputproductName").value="";
        }
        else{
            // Eğer bir ve daha fazla ürün varsa;
            const TrimInput=input.trim();
            let productFound=false;  // Eşleşme bayrağı koyalım.
            for(let item of productsArray){
                if(item.productName === TrimInput){
                    // Eşletme bulunma durumumda(aynı ürün ismi var ise)
                    alert("Lütfen mevcut olmayan bir ürün giriniz.");
                    document.getElementById("InputproductName").value="";
                    productFound=true;
                    break;
                }
            }
            // Eşleşme bulunmama durumunda ürün ekleme(aynı ürün ismi yok ise)
            if(!productFound){
                ProductNumber=ProductNumber+1;
                // ürün ekleme
                console.log(`${ProductNumber}.ürün eklendi.`);
                AddProduct(input,ProductNumber);
                // girilen bilgileri ürün listesine ekleme
                AddArrayList();
                console.log(productsArray);
                document.getElementById("InputproductName").value="";
            }
        }
    }
    console.log("============================");
}

// ÜRÜN EKLEME BUTONU
// dom oluştuğunda tetiklenme
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("InputproductPlus").addEventListener("click", ButtonPress);
});

// Eğer javascript dosya bağlantısı html-body;
/*
    Başında tanımlarsak;
        -Dom yüklenmesini beklemek için "DOMContentLoaded" tanımlamamız gerekir.
    Sonunda tanımlarsak;
        -Dom yüklenmesini beklemeyiz çünkü html sonunda html içeriği yüklenmiş olur.
 */
//======================================================================================================

