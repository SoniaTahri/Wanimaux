
// $(window).scroll(function() {
//   $('.fadedfx').each(function(){
//   var imagePos = $(this).offset().top;

//   var topOfWindow = $(window).scrollTop();
//     if (imagePos < topOfWindow+500) {
//       $(this).addClass("fadeIn");
//     }
//   });
// });



//------- inscription Admin ------//
function inscritAdmin() {


  // recuperation de donnes inputs d form de la page login.html

  var Email = document.getElementById('EmailUser').value;
  var CEmail = document.getElementById('CEmailUser').value;
  var Password = document.getElementById('PasswordUser').value;
  var CPassword = document.getElementById('CPasswordUser').value;
  var Prenom = document.getElementById('PrenomUser').value;
  var Nom = document.getElementById('NomUser').value;
  var Tel = document.getElementById('Teluser').value;

  //verification des inputs
  var verifEmail = validateEmail(Email);
  var verifPassword = verifyLength(Password, 7, 20);
  var verifPrenom = verifyLength(Prenom, 3, 15);
  var verifNom = verifyLength(Nom, 3, 15);

  if (!verifEmail) {
    document.getElementById('EmailUserError').innerHTML = 'Merci de saisir une adresse e-mail valide';
  }

  if (!verifPassword) {
    document.getElementById('PasswordUserError').innerHTML = 'Le mot de passe doit avoir 8 caractères minimum, et ne peut contenir que des lettres, des chiffres, ou les caractères suivants : _-@';
  }

  if (!verifPrenom) {
    document.getElementById('PrenomUserError').innerHTML = 'Merci de saisir un prénom valide';
  }

  if (!verifNom) {
    document.getElementById('NomUserError').innerHTML = 'Merci de saisir un nom valide';
  }

  if (CEmail !== Email) {
    document.getElementById('CEmailUserError').innerHTML = 'Les deux adresses Email ne sont pas identiques';
  }
  else {
    document.getElementById('CEmailUserError').innerHTML = '';
  }

  if (CPassword !== Password) {
    document.getElementById('CPasswordUserError').innerHTML = 'Les mot de passe ne sont pas identiques';
  }
  else {
    document.getElementById('CPasswordUserError').innerHTML = '';
  }

  allUtilisateurs = JSON.parse(localStorage.getItem('Utilisateurs') || '[]');
  var userExist = false;
  for (let i = 0; i < allUtilisateurs.length; i++) {
    if (allUtilisateurs[i].Email === Email) {
      userExist = true;
    }

  }
  if (userExist) {
    document.getElementById('EmailUserError').innerHTML = 'Cette adresse e-mail est déjà existe';
  }
  else {
    if (verifEmail
      && verifPassword
      && verifPrenom
      && verifNom
      && (CEmail == Email)
      && (CPassword == Password)) {
      var id = JSON.parse(localStorage.getItem('Identificateur') || '1');
      var user = {
        id: id,
        Email: Email,
        ConfirmEmail: CEmail,
        Password: Password,
        ConfirmPassword: CPassword,
        Prenom: Prenom,
        Nom: Nom,
        Telephone: Tel,
        role: 'admin'
      };


      allUtilisateurs.push(user);
      localStorage.setItem('Identificateur', id + 1);

      localStorage.setItem('Utilisateurs', JSON.stringify(allUtilisateurs));
      alert('Admin a été ajouter avec succes');
      location.replace('index-admin.html');
    }
  }
}

//------- inscription Utilisateur ------//
function inscritUser() {
  var Email = document.getElementById('EmailUser').value;
  var CEmail = document.getElementById('CEmailUser').value;
  var Password = document.getElementById('PasswordUser').value;
  var CPassword = document.getElementById('CPasswordUser').value;
  var Prenom = document.getElementById('PrenomUser').value;
  var Nom = document.getElementById('NomUser').value;
  var Tel = document.getElementById('Teluser').value;

  //verification des inputs 

  var verifEmail = validateEmail(Email);
  var verifPassword = verifyLength(Password, 7, 20);
  var verifPrenom = verifyLength(Prenom, 3, 15);
  var verifNom = verifyLength(Nom, 3, 15);


  if (!verifEmail) {
    document.getElementById('EmailUserError').innerHTML = 'Merci de saisir une adresse e-mail valide';
  }

  if (!verifPassword) {
    document.getElementById('PasswordUserError').innerHTML = 'Le mot de passe doit avoir 8 caractères minimum, et ne peut contenir que des lettres, des chiffres, ou les caractères suivants : _-@';
  }

  if (!verifPrenom) {
    document.getElementById('PrenomUserError').innerHTML = 'Merci de saisir un prénom valide';
  }

  if (!verifNom) {
    document.getElementById('NomUserError').innerHTML = 'Merci de saisir un nom valide';
  }

  if (CEmail !== Email) {
    document.getElementById('CEmailUserError').innerHTML = 'Les deux adresses Email ne sont pas identiques';
  }
  else {
    document.getElementById('CEmailUserError').innerHTML = '';
  }

  if (CPassword !== Password) {
    document.getElementById('CPasswordUserError').innerHTML = 'Les mot de passe ne sont pas identiques';
  }
  else {
    document.getElementById('CPasswordUserError').innerHTML = '';
  }

  allUtilisateurs = JSON.parse(localStorage.getItem('Utilisateurs') || '[]');
  var userExist = false;
  for (let i = 0; i < allUtilisateurs.length; i++) {
    if (allUtilisateurs[i].Email === Email) {
      userExist = true;
    }

  }
  if (userExist) {
    document.getElementById('EmailUserError').innerHTML = 'Cette adresse e-mail est déjà existe';
  }
  else {
    if (verifEmail
      && verifPassword
      && verifPrenom
      && verifNom
      && (CEmail == Email)
      && (CPassword == Password)) {
      var id = JSON.parse(localStorage.getItem('Identificateur') || '1');
      var user = {
        id: id,
        Email: Email,
        ConfirmEmail: CEmail,
        Password: Password,
        ConfirmPassword: CPassword,
        Prenom: Prenom,
        Nom: Nom,
        Telephone: Tel,
        role: 'user'
      };


      allUtilisateurs.push(user);
      localStorage.setItem('Identificateur', id + 1);

      localStorage.setItem('Utilisateurs', JSON.stringify(allUtilisateurs));
      alert('Utilisateur a été ajouter avec succes');
      location.replace('SeConnecter.html');
    }
  }
}

//------- Se Connecter ------//

function seConnecter() {

  //recuperation des inputs 
  var EmailLogin = document.getElementById('email').value;
  var PasswordLogin = document.getElementById('password').value;

  var verifEmail = validateEmail(EmailLogin);

  if (EmailLogin.length === 0) {
    document.getElementById('emailError').innerHTML = 'Merci de saisir votre adresse e-mail';
    document.getElementById('emailError').style.color = 'black';
  }
  if (PasswordLogin.length === 0) {
    document.getElementById('passwordError').innerHTML = 'Merci de saisir un mot de passe';
    document.getElementById('passwordError').style.color = 'black';
  }

  if (!verifEmail && EmailLogin.length !== 0) {
    document.getElementById('emailError1').innerHTML = 'Merci de saisir une adresse e-mail valide (nom@domaine.ext)';
    document.getElementById('emailError1').style.color = 'black';
    document.getElementById('emailError').innerHTML = '';
  }

  //recuperation des tableau d'objets de la cle (key) utilisateurs
  var allUtilisateurs = JSON.parse(localStorage.getItem('Utilisateurs'));

  var user;

  for (let i = 0; i < allUtilisateurs.length; i++) {
    if (allUtilisateurs[i].Email === EmailLogin && allUtilisateurs[i].Password === PasswordLogin) {
      user = allUtilisateurs[i];
    }

  }
  if (user) {
    localStorage.setItem('UtilisateurConnecte', JSON.stringify(user));
    if (user.role === 'user') {
      //redirection vers la page d'utilisateur
      location.replace('index.html');
    } else {
      //redirection vers la page de l'administrateur
      location.replace('index-admin.html')
    }
  }

  else {
    document.getElementById('connexionError').innerHTML = 'Votre identifiant ou votre mot de passe ne sont pas corrects.';
    document.getElementById('connexionError').style.color = 'black';
  }

}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function verifyLength(ch, min, max) {
  return ch.length >= min && ch.length <= max;
}

//------ Recuperation de l'utilisateur connecte ------//
function setHeader() {
  var UtilisateurConnecte = JSON.parse(localStorage.getItem('UtilisateurConnecte'));
  var header = ``;
  if (UtilisateurConnecte) {
    if (UtilisateurConnecte.role === "user") {
      header += `
        <li class="nav-item">
        <a class="nav-link" aria-current="page" href="#" style="color:red;">${UtilisateurConnecte.Nom} ${UtilisateurConnecte.Prenom}</a></li>
        <li class="nav-item"><a class="nav-link" href="#" onclick='deconnecte()'>Se déconnecter</a></li>`;



    } else {
      //connectedUser === "admin"
      header += `
      <li class="nav-item ">
      <a class="nav-link active" aria-current="page" href="#">${UtilisateurConnecte.Nom} ${UtilisateurConnecte.Prenom}</a></li>
      <li class="nav-item"><a class="nav-link" href="#" onclick='deconnecte()'>Se déconnecter</a></li>`;
    }
  } else {
    header += ` <li class="nav-item ms-5">
  <a class="nav-link ms-5" aria-current="page" href="SeConnecter.html">Se Connecter</a>
  </li>`;
  }
  document.getElementById('headerId').innerHTML = header;
}

function deconnecte() {
  localStorage.removeItem('UtilisateurConnecte');
  location.reload;
  location.replace('SeConnecter.html');
}

//------ affichage de Admins dans la fenetre admin ------//
function displayAdmins() {
  var alladmins = JSON.parse(localStorage.getItem('Utilisateurs'));
  var Admin = new Array();
  for (let i = 0; i < alladmins.length; i++) {
    if (alladmins[i].role === 'admin') {
      Admin.push(alladmins[i]);
    }

  }
  var adminsTable = `<table class="customers">  
                        <thead style="background: linear-gradient(to right, #57ddd2, #025e56);">   
                        <tr>
                            <th>IDS</th>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Email</th>
                            <th>Mot de passe</th>
                            <th>Téléphone</th>
                        </tr>
                        </thead>
                        <tbody>`;
  for (let i = 0; i < Admin.length; i++) {
    adminsTable += `<tr>
                      <td>${Admin[i].id}</td>
                      <td>${Admin[i].Nom}</td>
                      <td>${Admin[i].Prenom}</td>
                      <td>${Admin[i].Email}</td>
                      <td>${Admin[i].Password}</td>
                      <td>${Admin[i].Telephone}</td>
                      <td>
                      <a type="button" onclick='deleteObject(${i}, "Utilisateurs")' style="margin-right:15px;color:#99b19c"><i class="fas fa-trash"></i></a>
                      <a type="button" style="color:#99b19c" 
                      data-toggle="modal" data-target="#exampleModalCenter" onclick ='editAdmin(${Admin[i].id})'><i class="far fa-edit"></i></a>
                      </td>
                  </tr>`;
  }
  adminsTable += `</tbody>
                  </table>`;
  document.getElementById('adminsTable').innerHTML = adminsTable;
}

//------ affichage de Users dans la fenetre admin ------//
function displayUsers() {
  var allUtilisateurs = JSON.parse(localStorage.getItem('Utilisateurs'));
  var user = new Array();
  for (let i = 0; i < allUtilisateurs.length; i++) {
    if (allUtilisateurs[i].role === 'user') {
      user.push(allUtilisateurs[i]);
    }
  }
  var usersTable = `<table class="customers">  
                      <thead class="thead-primary" style="background: linear-gradient(to right, rgb(109, 180, 109), rgb(3, 145, 3), #000);">   
                      <tr>
                          <th>IDS</th>
                          <th>Nom</th>
                          <th>Prénom</th>
                          <th>Email</th>
                          <th>Mot de passe</th>
                          <th>Téléphone</th>
                      </tr>
                      </thead>
                      <tbody>`;
  for (let i = 0; i < user.length; i++) {
    usersTable += `<tr>
                        <td>${user[i].id}</td>
                        <td>${user[i].Nom}</td>
                        <td>${user[i].Prenom}</td>
                        <td>${user[i].Email}</td>
                        <td>${user[i].Password}</td>
                        <td>${user[i].Telephone}</td>
                        <td>
                        <a type="button" onclick='deleteObject(${i}, "Utilisateurs")' style="margin-right:15px;color:#99b19c"><i class="fas fa-trash"></i></a>
                        </td>
                    </tr>`;
  }
  usersTable += `</tbody>
                 </table>` ;
  document.getElementById('usersTable').innerHTML = usersTable;
}


//------modifier donnees admin ------//

function editAdmin(id) {
  var searchAd = searchById(id, 'Utilisateurs');
  var modifAd = `
    <div class="row no-gutters">
    <div class="col-md-12 d-flex">
      <div class="modal-body p-4 p-md-5 d-flex align-items-center color-1">
        <div class="text w-100 py-3">
          <h3 class="mb-4 heading"> Modifier les données</h3>
          <div class="contact-form">
            <div class="form-group mb-3">
            <input type="text" class="form-control" id="newMail"  value=${searchAd.Email}>
            <span id="newMailError"></span>
            </div>
            <div class="form-group">
            <input type="text" class="form-control" id="newPwd"  value=${searchAd.Password}>
               <span id="newPwdError"></span>
            </div>
            <div class="form-group">
            <input type="text" class="form-control" id="newPhone"  value=${searchAd.Telephone}>
               <span id="newPhoneError"></span>
            </div>
            <div class="form-group">
              <button type="submit" class="form-control btn btn-secondary rounded submit px-3"         onclick="validModifAd(${searchAd.id})">Valider la modification</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> `;
  document.getElementById('modifAd').innerHTML = modifAd;
}

function validModifAd(id) {
  var allUtilisateurs = JSON.parse(localStorage.getItem('Utilisateurs'));
  var newMail = document.getElementById('newMail').value;
  var newPwd = document.getElementById('newPwd').value;
  var newPhone = document.getElementById('newPhone').value;
 

    for (let i = 0; i < allUtilisateurs.length; i++) {
      if (allUtilisateurs[i].id == id) {
        allUtilisateurs[i].Email = newMail;
        allUtilisateurs[i].Password = newPwd;
        allUtilisateurs[i].Telephone = newPhone;
      }

    localStorage.setItem('Utilisateurs', JSON.stringify(allUtilisateurs));
    location.reload();

  }
}


//------ add products ------//
function products() {

  var productType = document.getElementById('productType').value;
  var productName = document.getElementById('productName').value;
  var productPrice = document.getElementById('productPrice').value;
  var productStock = document.getElementById('productStock').value;
  var productCategorie = document.getElementById('productCategorie').value;


  if (productType === '' || productName === '' || productPrice === '' || productStock === '' || productCategorie === '') {
    document.getElementById('productError').innerHTML = 'Veuillez remplir tout les champs';
    document.getElementById('productError').style.color = "red";
  }
  else {
    if (productType.length < 3) {
      document.getElementById('productTypeError').innerHTML = 'Ce champ doit avoir au moins 5 caractères';
      document.getElementById('productTypeError').style.color = "red";

    }
    if (productName.length < 3) {
      document.getElementById('productNameError').innerHTML = 'Ce champ doit avoir au moins 5 caractères';
      document.getElementById('productNameError').style.color = "red";

    }

    if (productPrice <= 0) {
      document.getElementById('productPriceError').innerHTML = 'Merci de saisir un prix valide';
      document.getElementById('productPriceError').style.color = "red";

    }

    if (productStock < 0) {
      document.getElementById('productStockError').innerHTML = 'Merci de saisir un nombre valide';
      document.getElementById('productStockError').style.color = "red";

    }

  }

  //insertion d'image a coté de product 
  var image = document.getElementById('image').value;
  var img = replaceCh(image);
  var verifImage = image.length != 0;
  if (!verifImage) {
    document.getElementById('productError').innerHTML = 'Ajouter produit !';
    document.getElementById('productError').style.color = "red";
  }
  var allProducts = JSON.parse(localStorage.getItem('products') || '[]');

  //traitement // si le nom de product existe ou non
  var productExist;
  for (let i = 0; i < allProducts.length; i++) {
    if (allProducts[i].productName === productName) {
      productExist = true;

    }
  }

  if (productExist) {  //productExist ==> true
    document.getElementById('productNameError').innerHTML = 'Ce produit est déja existé';
    document.getElementById('productNameError').style.color = "red";

  }
  else { //productExist ==> false
    if (productType.length > 3 && productName.length > 3 && productPrice > 0 && productStock >= 0 && verifImage && productCategorie !== '') {
      alert('test')
      var id = JSON.parse(localStorage.getItem('productId') || '1');
      //ajouter le product 
      //creation d'objet product
      var product = {
        id: id,
        productType: productType,
        productName: productName,
        productPrice: productPrice,
        productStock: productStock,
        productCategorie: productCategorie,
        image: img

      };

      allProducts.push(product);
      localStorage.setItem('productId', id + 1);

      localStorage.setItem('products', JSON.stringify(allProducts));
      alert('Produit enregistre avec succes');
      location.reload();


    }
  }
}

//------ insertion d'image a coté de produit ------//
function replaceCh(ch) {
  var newCh = ch.replace(/\\/g, "/");
  var res = newCh.replace("fakepath", "Users/Admin/Desktop/Wanimaux/images/products");
  return res;
}

//------ affichage de products  dans la fenetre admin ------//
function displayproducts() {
  var allProducts = JSON.parse(localStorage.getItem('products'));
  // console.log(allProducts) // [{},{},{}]  
  var productsTable = `<table class="customers" >  
                      <thead class="thead-primary" style="background: linear-gradient(to right, rgba(247, 200, 129, 0.918), rgb(245, 141, 72), #000);">   
                      <tr>
                          <th></th>  
                          <th>Type produit</th>
                          <th>Nom</th>
                          <th>Prix</th>   
                          <th>Stock</th>
                          <th>Categorie</th>
                      </tr>
                      </thead>
                      <tbody>`;
  for (let i = 0; i < allProducts.length; i++) {
    productsTable += `<tr>
                          <td style="width:200px;"><img class="w-75" src="${allProducts[i].image}"> </td>
                          <td>${allProducts[i].productType}</td>
                          <td>${allProducts[i].productName}</td>
                          <td>${allProducts[i].productPrice}</td>
                          <td>${allProducts[i].productStock}</td>
                          <td>${allProducts[i].productCategorie}</td>
                          <td>
                            <a type="button"  onclick='deleteObject(${i}, "products")' style="margin-right:15px;color:#99b19c"><i class="fas fa-trash"></i></a>

                            <a type="button" data-toggle="modal" data-target="#exampleModalCenter" onclick ='modifProduct(${allProducts[i].id})' style="margin-right:15px;color:#99b19c"><i class="far fa-edit"></i></a>

                            <a type="button"  onclick ='displayProduct(${allProducts[i].id})' style="color:#99b19c"><i class="fas fa-sticky-note"></i></a>
                          </td>
                      </tr>`
  }
  productsTable += `</tbody>
                  </table>` ;
  document.getElementById('productsTable').innerHTML = productsTable;

}

//------ supprission d'un produit ------//
function deleteObject(pos, cle) {
  var objects = JSON.parse(localStorage.getItem(cle) || '[]');
  objects.splice(pos, 1) //delete un element selon sa position
  localStorage.setItem(cle, JSON.stringify(objects));
  location.reload();
}


//------ modification de produit //
function modifProduct(id) {
  var searchedPr = searchById(id, "products");
  var modifProduct = `
    <div class="row no-gutters">
    <div class="col-md-12 d-flex">
      <div class="modal-body p-4 p-md-5 d-flex align-items-center color-1">
        <div class="text w-100 py-3">
          <h3 class="mb-4 heading">Modifier produit</h3>
          <div action="#" class="contact-form">
      
            <div class="form-group mb-3">
            <input type="text" class="form-control" id="newPrice"  placeholder="Prix" value=${searchedPr.productPrice} >
            <span id="newPriceError"></span>
          </div>
            </div>
  
            <div class="form-group">
            <input type="text" class="form-control" id="newStock" placeholder="Stock"  value=${searchedPr.productStock}>
               <span id="newStockError"></span>
            </div>
            <div class="form-group">
              <button type="submit" class="form-control btn btn-secondary rounded submit px-3" onclick="validModifProduct(${searchedPr.id})">Valider la modification</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> `;
  document.getElementById('modifProduct').innerHTML = modifProduct;
}

function validModifProduct(id) {
  var allProducts = JSON.parse(localStorage.getItem('products'));
  var newPrice = document.getElementById('newPrice').value;

  if (newPrice > 0) {
    document.getElementById('newPriceError').innerHTML = '';
  }
  else {
    document.getElementById('newPriceError').innerHTML = 'Merci de tapez un prix valide';
    document.getElementById('newPriceError').style.color = 'red';
  }
  var newStock = document.getElementById('newStock').value;
  if (newStock >= 0) {
    document.getElementById('newStockError').innerHTML = '';
  }
  else {
    document.getElementById('newStockError').innerHTML = 'Merci de tapez un stock valide';
    document.getElementById('newStockError').style.color = 'red';
  }

  if ((newPrice > 0) && (newStock >= 0)) {

    for (let i = 0; i < allProducts.length; i++) {
      if (allProducts[i].id == id) {
        allProducts[i].productPrice = newPrice;
        allProducts[i].productStock = newStock;
      }
    }
    localStorage.setItem('products', JSON.stringify(allProducts));
    location.reload();

  }
}

//------- Search By Id Function : generic function which search an object in an array by its ID--------//
function searchById(id, T) {
  var objects = JSON.parse(localStorage.getItem(T) || "[]");
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].id == id) {
      var obj = objects[i];
    }

  }
  return obj;
}

//------- affichage de details des produits 
function displayProduct(id) {
  localStorage.setItem('idPr', id);
  location.replace('ProductDetails.html');
}

function displayProductDetails() {
  var idPr = localStorage.getItem('idPr');
  var searchedPr = searchById(idPr, 'products');
  document.getElementById('type').innerHTML = searchedPr.productType;
  document.getElementById('productName').innerHTML = searchedPr.productName;
  document.getElementById("price").innerHTML = searchedPr.productPrice + " DT";
  document.getElementById("stock").innerHTML = searchedPr.productStock + " Pièces";
  document.getElementById("category").innerHTML = searchedPr.productCategorie;

  var img = ` <img src="${searchedPr.image}" alt="image" width="360px" height="220px" style="margin-left: 10%;">`;
  document.getElementById("image").innerHTML = img;
}

function addAnimal() {
  var animalType = document.getElementById('animalType').value;
  var image = document.getElementById('images').value;
  var img = replaceCh(image);
  var animals = JSON.parse(localStorage.getItem('animals') || '[]');
  var idanimal = JSON.parse(localStorage.getItem('idanimal') || '1');

  var animal = {
    id: idanimal,
    animalType: animalType,
    imageAnimal: img
  }

  animals.push(animal);
  localStorage.setItem('idanimal', idanimal + 1);
  localStorage.setItem('animals', JSON.stringify(animals));
  alert('Classement enregistre avec succes');
  location.reload();
}

function displayTableauAnimal() {
  var allanimals = JSON.parse(localStorage.getItem('animals'));
  console.log(allanimals)
  // console.log(allProducts) // [{},{},{}]  
  var animalsTable = `<table class="customers">  
                        <thead class="thead-primary" style="background: linear-gradient(to right, #57ddd2, #025e56);">   
                        <tr>
                            <th></th>  
                            <th>Type produit</th>
                        </tr>
                        </thead>
                        <tbody>`;
  for (let i = 0; i < allanimals.length; i++) {
    animalsTable += `<tr>
                            <td style="width:300px;"><img class="w-75" src="${allanimals[i].imageAnimal}"> </td>
                            <td>${allanimals[i].animalType}</td>
                            <td>
                              <a type="button"  onclick='deleteObject(${i}, "animals")' style="margin-right:15px;color:#99b19c"><i class="fas fa-trash fa-2x"></i></a>                              
                            </td>
                        </tr>`
  }
  animalsTable += `</tbody>
                    </table>` ;
  document.getElementById('animalsTable').innerHTML = animalsTable;

}


function displayAnimals() {
  var allanimals = JSON.parse(localStorage.getItem('animals'));

  var aniamltabe = ``;
  for (let i = 0; i < allanimals.length; i++) {
    aniamltabe += `<div class="col-3">
      <div class="card">
        <figure class="card__thumb">
          <img src="${allanimals[i].imageAnimal}"  class="card__image">
          <figcaption class="card__caption">
            <button class="card__button" onclick="goToAniaml(${allanimals[i].id})">${allanimals[i].animalType}</button>
          </figcaption>
        </figure>
      </div>
      </div>`;
  }

  document.getElementById('aniamltabe').innerHTML = aniamltabe;
}

function goToAniaml(id) {
  // alert('tttt')
  localStorage.setItem('idanimal', id)
  var animaux = searchById(Number(id), 'animals');
  
  if (animaux.animalType === "chat") {
    location.replace('chat.html');
  }
  else if (animaux.animalType === "chien") {
    location.replace('chiens.html')
  }
  else if (animaux.animalType === "hamster") {
    location.replace('hamsters.html')
  }
  else if (animaux.animalType === "poisson") {
    location.replace('poissons.html')
  }
  else if (animaux.animalType === "oiseaux") {
    location.replace('Oiseaux.html')
  }
  else if (animaux.animalType === "poules") {
    location.replace('poules.html')
  }

}


// *------- affichage de animalerie produits dans les pages des utilisateurs ------* /

function displayShopProductsChien() {
  var allProducts = JSON.parse(localStorage.getItem('products') || '[]');
  var allChien = allProducts.filter(allProducts => allProducts.productType === 'chien')

  var ShopProductsChien = ``;
  for (let i = 0; i < allChien.length; i++) {
    ShopProductsChien += `<div class="col">
        <div class="card h-80 shadow-sm"> <img src="${allChien[i].image}" class="card-img-top" alt="...">
           <div class="label-top shadow-sm">${allChien[i].productStock}</div>
           <div class="card-body">
               <div class="clearfix mb-3"> <span class="float-start badge rounded-pill bg-success">${allChien[i].productPrice} DT</span></div>
               <h5 class="card-title">${allChien[i].productName}</h5>
               <div class="text-center"> 
               <button type="button" class="btn btn-warning" onclick="ReservationPr(${allChien[i].id})">Consulter l'offre</button></div>
           </div>
        </div>
       </div>
       </div>`;

  }
  document.getElementById("ShopProductsChien").innerHTML = ShopProductsChien;
}

function displayShopProductsChat() {
  var allProducts = JSON.parse(localStorage.getItem('products') || '[]');
  var allChat = allProducts.filter(allProducts => allProducts.productType === 'chat')


  var ShopProductsChat = ``;
  for (let i = 0; i < allChat.length; i++) {
    ShopProductsChat += `<div class="col">
    <div class="card h-80 shadow-sm"> <img src="${allChat[i].image}" class="card-img-top" alt="...">
       <div class="label-top shadow-sm">${allChat[i].productStock}</div>
       <div class="card-body">
           <div class="clearfix mb-3"> <span class="float-start badge rounded-pill bg-success">${allChat[i].productPrice} DT</span></div>
           <h5 class="card-title">${allChat[i].productName}</h5>
           <div class="text-center mb-3"> 
           <a type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#productOffer" onclick="ReservationPr(${allChat[i].id})">Consulter l'offre</a></div>
       </div>
    </div>
   </div>
   </div>`;

  }
  document.getElementById("ShopProductsChat").innerHTML = ShopProductsChat;

}

function displayShopProductsHamster() {
  var allProducts = JSON.parse(localStorage.getItem('products') || '[]');
  var allHamsters = allProducts.filter(allProducts => allProducts.productType === 'hamster')

  var ShopProductsHamster = ``;
  for (let i = 0; i < allHamsters.length; i++) {
    ShopProductsHamster += `<div class="col">
      <div class="card h-80 shadow-sm"> <img src="${allHamsters[i].image}" class="card-img-top" alt="...">
         <div class="label-top shadow-sm">${allHamsters[i].productStock}</div>
         <div class="card-body">
             <div class="clearfix mb-3"> <span class="float-start badge rounded-pill bg-success">${allHamsters[i].productPrice} DT</span></div>
             <h5 class="card-title">${allHamsters[i].productName}</h5>
             <div class="text-center mb-3"> 
             <a type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#productOffer" onclick="ReservationPr(${allHamsters[i].id})">Consulter l'offre</a></div>
         </div>
      </div>
     </div>
     </div>`;

  }
  document.getElementById("ShopProductsHamster").innerHTML = ShopProductsHamster; 0
}

function displayShopProductsPoisson() {
  var allProducts = JSON.parse(localStorage.getItem('products') || '[]');
  var allPoissons = allProducts.filter(allProducts => allProducts.productType === 'poisson')

  var ShopProductsPoisson = ``;
  for (let i = 0; i < allPoissons.length; i++) {
    ShopProductsPoisson += `<div class="col">
        <div class="card h-80 shadow-sm"> <img src="${allPoissons[i].image}" class="card-img-top" alt="...">
           <div class="label-top shadow-sm">${allPoissons[i].productStock}</div>
           <div class="card-body">
               <div class="clearfix mb-3"> <span class="float-start badge rounded-pill bg-success">${allPoissons[i].productPrice} DT</span></div>
               <h5 class="card-title">${allPoissons[i].productName}</h5>
               <div class="text-center mb-3"> 
               <a type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#productOffer" onclick="ReservationPr(${allPoissons[i].id})">Consulter l'offre</a></div>
           </div>
        </div>
       </div>
       </div>`;

  }
  document.getElementById("ShopProductsPoisson").innerHTML = ShopProductsPoisson;
}

function displayShopProductsOiseaux() {
  var allProducts = JSON.parse(localStorage.getItem('products') || '[]');
  var allOiseaux = allProducts.filter(allProducts => allProducts.productType === 'oiseaux')

  var ShopProductsOiseaux = ``;
  for (let i = 0; i < allOiseaux.length; i++) {
    ShopProductsOiseaux += `<div class="col">
        <div class="card h-80 shadow-sm"> <img src="${allOiseaux[i].image}" class="card-img-top" alt="...">
           <div class="label-top shadow-sm">${allOiseaux[i].productStock}</div>
           <div class="card-body">
               <div class="clearfix mb-3"> <span class="float-start badge rounded-pill bg-success">${allOiseaux[i].productPrice} DT</span></div>
               <h5 class="card-title">${allOiseaux[i].productName}</h5>
               <div class="text-center mb-3"> 
               <a type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#productOffer" onclick="ReservationPr(${allOiseaux[i].id})">Consulter l'offre</a></div>
           </div>
        </div>
       </div>
       </div>`;

  }
  document.getElementById("ShopProductsOiseaux").innerHTML = ShopProductsOiseaux;
}

function displayShopProductsPoules() {
  var allProducts = JSON.parse(localStorage.getItem('products') || '[]');
  var allPoules = allProducts.filter(allProducts => allProducts.productType === 'poules')

  var ShopProductsPoules = ``;
  for (let i = 0; i < allPoules.length; i++) {
    ShopProductsPoules += `<div class="col">
        <div class="card h-80 shadow-sm"> <img src="${allPoules[i].image}" class="card-img-top" alt="...">
           <div class="label-top shadow-sm">${allPoules[i].productStock}</div>
           <div class="card-body">
               <div class="clearfix mb-3"> <span class="float-start badge rounded-pill bg-success">${allPoules[i].productPrice} DT</span></div>
               <h5 class="card-title">${allPoules[i].productName}</h5>
               <div class="text-center mb-3"> 
               <a type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#productOffer" onclick="ReservationPr(${allPoules[i].id})">Consulter l'offre</a></div>
           </div>
        </div>
       </div>
       </div>`;

  }
  document.getElementById("ShopProductsPoules").innerHTML = ShopProductsPoules;
}



// *-------------Reservation des produits -------------- *//

function ReservationPr(id) {
  localStorage.setItem('idPrReserve', id);
  location.replace('reservationProduit.html');
}

//------- Display Product To Reserve Function : displays the product details in order to reserve the quantity --------//

function displayReservationPr() {
  var idPr = localStorage.getItem('idPrReserve');
  console.log(idPr)
  var searchedPr = searchById(Number(idPr), 'products');
  console.log(searchedPr)
  document.getElementById('productNameToReserve').innerHTML = searchedPr.productName;
  document.getElementById('priceToReserve').innerHTML = searchedPr.productPrice;
  document.getElementById('categoryToReserve').innerHTML = searchedPr.productCategorie;
  document.getElementById('stockToReserve').innerHTML = searchedPr.productStock;

  var img = `<img src="${searchedPr.image}" alt="image" width="100px" height="100px">`;
  document.getElementById("image").innerHTML = img;
}

//------- validate Reservation Function : Saves the user order--------//
function validateReservationPr() {
  var UtilisateurConnecte = JSON.parse(localStorage.getItem('UtilisateurConnecte') || '[]');
  if (UtilisateurConnecte.length === 0) {

    Swal.fire({
      icon: 'info',
      title: 'Veuillez vous connecter!',
      confirmButtonText:
        '<strong> <a href ="SeConnecter.html" style="color :red">Ok</a> </strong>',
      footer: '<a href ="inscriptionUser.html">Ou créer un compte</a>'
    })
  } else {

    var idPrReserve = localStorage.getItem('idPrReserve');
    var searchedPr = searchById(Number(idPrReserve), 'products');
    var qty = document.getElementById('qty').value;

    if ((qty > 0) && (qty <= searchedPr.productStock)) {
      var UtilisateurConnecte = JSON.parse(localStorage.getItem("UtilisateurConnecte"));

      var orders = JSON.parse(localStorage.getItem('orders') || '[]');
      var idOrder = JSON.parse(localStorage.getItem('idOrder') || '1');

      var order = {
        id: idOrder,
        qty: qty,
        idPr: idPrReserve,
        idUser: UtilisateurConnecte.id
      };

      orders.push(order);
      localStorage.setItem('orders', JSON.stringify(orders));
      localStorage.setItem("idOrder", idOrder + 1);

      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'votre choix a été ajouté au panier avec succès!',
        timer: 1500,

      })

      var allProducts = JSON.parse(localStorage.getItem("products") || "[]");

      for (let i = 0; i < allProducts.length; i++) {
        if (allProducts[i].id == Number(idPrReserve)) {
          allProducts[i].productStock = Number(allProducts[i].productStock) - Number(qty);
        }
      }

     

      localStorage.setItem("products", JSON.stringify(allProducts));

    }

    else {
      document.getElementById("qtyError").innerHTML = "Qty not available";
      document.getElementById("qtyError").style.color = "red";
    }

  }


}

//------- Basket Function : displays the connected user basket--------//
function basket() {
  var UtilisateurConnecte = JSON.parse(localStorage.getItem("UtilisateurConnecte"));
  var orders = JSON.parse(localStorage.getItem("orders") || "[]");
  var myOrders = [];

  for (let i = 0; i < orders.length; i++) {
    if (orders[i].idUser == UtilisateurConnecte.id) {
      myOrders.push(orders[i]);
    }
  }
  var sum = 0;
  var orderTable = ` 
                <table class="customers">
                  <thead class="thead-primary">
                  <tr>
                  <th>&nbsp;</th>
                  <th>Produit</th>
                  <th>Prix</th>
                  <th>Categorie</th>
                  <th>Quantité</th>
                  <th>Total</th>
                  <th>&nbsp;</th>
                  </tr>
                  </thead>
                  <tbody>
                `;

  for (let i = 0; i < myOrders.length; i++) {
    var pr = searchById(Number(myOrders[i].idPr), "products");

    var totalPrice = pr.productPrice * myOrders[i].qty;
    sum = sum + totalPrice;
    orderTable = orderTable + `
                <tr class="alert" role="alert">
                    <td>
                    <div class="d-flex">
                    <img src="${pr.image}" alt="" width="150px" height="120px">
                    </div>                    </td>
                    <td><h5>${pr.productName}</h5></td>
                    <td>${pr.productPrice} DT</td>
                    <td>${pr.productCategorie}</td>
                    <td>${myOrders[i].qty}</td>
                    <td>${totalPrice} DT</td>
                    <td>
                    <a type="button" onclick="deleteOrder(${searchObjectPosition(myOrders[i].id, "orders")}, ${myOrders[i].id})" style="margin-right:15px; color:#99b19c"><i class="fas fa-trash fa-lg"></i></a>
                    <a type="button" data-toggle="modal" data-target="#exampleModalCenter" onclick="editOrder(${myOrders[i].id})" style="color:#99b19c"><i class="far fa-edit fa-lg"></i></a>
                    </td>
                </tr>`;
  }
  orderTable = orderTable + `
                  <tr>
                  <td colspan ="5"> 
                  <td>
                      <h5>Total = ${sum} DT</h5>
                  </td>

                  </tr>
                  </tbody>
                  </table> ` ;
  document.getElementById("orderTable").innerHTML = orderTable;
}

//------- Search Object Position Function : searchs an the position of an object in an array --------//
function searchObjectPosition(id, clé) {
  var objects = JSON.parse(localStorage.getItem(clé) || "[]");
  var pos;
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].id == id) {
      pos = i;
    }
  }
  return pos;
}

//------- Delete Order Function : deletes an order and return the order quatity to the stock--------//
function deleteOrder(pos, id) {
  var order = searchById(Number(id), "orders");
  var qty = order.qty;

  var allproducts = JSON.parse(localStorage.getItem("products") || "[]");

  for (let i = 0; i < allproducts.length; i++) {
    if (allproducts[i].id == order.idPr) {
      allproducts[i].productStock = allproducts[i].productStock + Number(qty);
    }
  }

  localStorage.setItem("products", JSON.stringify(allproducts));

  deleteObject(pos, "orders");

}

//------- Edit Order Function : Displays the order details in order to modify them--------//
function editOrder(id) {
  var order = searchById(id, "orders");
  var editForm = `
    <div class="row no-gutters">
    <div class="col-md-12 d-flex">
      <div class="modal-body p-4 p-md-5 d-flex align-items-center color-1">
        <div class="text w-100 py-3">
          <h3 class="mb-4 heading">Modifier produit</h3>
          <div action="#" class="contact-form">
            <div class="form-group mb-3">
            <input type="number" class="form-control" id="editQty" value=${order.qty} >
            <span id="editQtyError"></span>
          </div>
            </div>
            <div class="form-group">
              <button type="submit" class="form-control btn btn-secondary rounded submit px-3" onclick="validateEditOrder(${order.id})">Valider la modification</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> `;
  document.getElementById('editForm').innerHTML = editForm;
}

//------- Validate Edit Order Function : Saves the new values for an order--------//
function validateEditOrder(id) {
  var newQty = document.getElementById("editQty").value;
  var order = searchById(id, "orders");
  var product = searchById(Number(order.idPr), "products");
  var diff = Number(newQty) - Number(order.qty);
  console.log(order);
  console.log(newQty);
  console.log(product);
  console.log(diff);
  if (product.productStock < diff) {
    document.getElementById("editQtyError").innerHTML = "Quantité non disponible";
    document.getElementById("editQtyError").style.color = "red";
  }
  else {
    if (Number(newQty) == 0) {
      deleteOrder(searchObjectPosition(order.id, "orders"), order.id);
    }

    else if (Number(newQty) < 0) {
      document.getElementById("editQtyError").innerHTML = "Quantité invalide";
      document.getElementById("editQtyError").style.color = "red";
    }

    else {
      //  Mise à jour order qty
      var orders = JSON.parse(localStorage.getItem("orders") || "[]");
      for (let i = 0; i < orders.length; i++) {
        if (orders[i].id == id) {
          orders[i].qty = Number(newQty);
        }
      }
      localStorage.setItem("orders", JSON.stringify(orders));
      //Mise à jour stock
      var allproducts = JSON.parse(localStorage.getItem("products") || "[]");
      for (let i = 0; i < allproducts.length; i++) {
        if (allproducts[i].id == order.idPr) {
          allproducts[i].productStock = allproducts[i].productStock - Number(diff);
        }
      }
      localStorage.setItem("products", JSON.stringify(allproducts));
      location.reload();
    }
  }
}

//------- Nb Orders Function : displays the number of orders for the connected user--------//
function nbOrders() {
  var orders = JSON.parse(localStorage.getItem('orders'));
  var UtilisateurConnecte = JSON.parse(localStorage.getItem('UtilisateurConnecte'));
  var orderNbr = 0;
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].idUser === UtilisateurConnecte.id) {
      orderNbr += 1;
    }
  }
  document.getElementById('orderNbr').innerHTML = + orderNbr;
}



//------- Send Message Function : saves a user message in LocalStorage--------//
function sendMessage() {

  var name = document.getElementById("Name").value;
  var verifName = verifyLength(name, 4, 15);
  if (verifName) {
    document.getElementById("NameError").innerHTML = "";
  } else {
    document.getElementById("NameError").innerHTML = "Ce champ doit avoir au moins 4 caractères";
    document.getElementById("NameError").style.color = "red";
  }

  var subject = document.getElementById("subject").value;
  if (subject.length != 0) {
    document.getElementById("subjectError").innerHTML = "";
  } else {
    document.getElementById("subjectError").innerHTML = "Champ obligatoire";
    document.getElementById("subjectError").style.color = "red";

  }

  var email = document.getElementById("Email").value;
  var verifEmail = validateEmail(email);
  if (verifEmail) {
    document.getElementById("EmailError").innerHTML = "";
  } else {
    document.getElementById("EmailError").innerHTML = "Email invalide";
    document.getElementById("EmailError").style.color = "red";

  }

  var message = document.getElementById("message").value;

  if (message.length != 0) {
    document.getElementById("messageError").innerHTML = "";
  } else {
    document.getElementById("messageError").innerHTML = "Champ obligatoire";
    document.getElementById("messageError").style.color = "red";

  }

  if (verifName && verifEmail && (message.Length != 0) && (subject.length != 0)) {

    var messages = JSON.parse(localStorage.getItem("messages") || "[]");
    var idMessage = JSON.parse(localStorage.getItem("idMessage") || "1");

    var message = {
      id: idMessage,
      name: name,
      subject: subject,
      message: message,
      emailEmet: email,
      emailRec: "admin@gmail.com"

    };

    messages.push(message);

    localStorage.setItem("messages", JSON.stringify(messages));
    localStorage.setItem("idMessage", idMessage + 1);


    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Votre message a été envoyé !',
      showConfirmButton: false,
      timer: 1500,


    })


    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";

  }
}

//------- Display Messages Function : displays messages sent to the Super Admin--------//
function displayMessages() {
  var messages = JSON.parse(localStorage.getItem("messages") || "[]");

  var adminMessages = [];

  for (let i = 0; i < messages.length; i++) {
    if (messages[i].emailRec == "admin@gmail.com") {
      adminMessages.push(messages[i]);
    }
  }

  var msgTable = `
  <table class="table table-hover table-inbox">
  <thead class="table table-hover table-inbox">   
  <tr>
  <th></th>
  <th></th>
  <th></th>
  <th>Sujet</th>  
  <th>Message</th>
  <th></th>   
  <th></th>
  </tr> 
  </thead>
  <tbody>
  `;

  for (let i = 0; i < adminMessages.length; i++) {
    msgTable = msgTable + `
      <tr class="unread">
      <td class="">
          <label><input type="checkbox" checked="" class="i-checks"></label>
      </td>
      <td>${adminMessages[i].name}</td>
      <td>${adminMessages[i].emailEmet}</td>
      <td>${adminMessages[i].subject} </td>
      <td style="width:300px;">${adminMessages[i].message}</td>
      <td>
      <a type="button" onclick='deleteObject(${i}, "messages")' style="margin-right:15px;margin-left:20px; color:#99b19c"><i class="fas fa-trash"></i></a>
      <a type="button" data-toggle="modal" data-target="#exampleModalCenter"  onclick="answerMessage(${adminMessages[i].id})" style="color:#99b19c"><i class="fas fa-reply"></i></a>
      </td>
  </tr>
      `

  }

  msgTable = msgTable + ` </tbody>
  </table>`;

  document.getElementById('msgTable').innerHTML = msgTable;

}

//------- Answer Message Function : allows to the super admin to write an anwser for a user message--------//
function answerMessage(id) {
  var message = searchById(id, "messages");



  var answerMsg = `<div class="row no-gutters">
  <div class="col-md-12 d-flex">
    <div class="modal-body p-4 p-md-5 d-flex align-items-center color-1">
      <div class="text w-100 py-3">
        <h3 class="mb-4 heading">Répondre</h3>
        <div action="#" class="contact-form">
    
          <div class="form-group mb-3">
            <input type="text" class="form-control" id="subject"  placeholder="Sujet" value=${message.subject} disabled="true">
            <span id="newPriceError"></span>
          </div>

          <div class="form-group">
            <input type="text" class="form-control" id="emailRec" placeholder="Email"  value=${message.emailEmet} disabled="true" >
            <span id="newStockError"></span>
          </div>
          <br>
          <div class="form-group">
            <textarea class="form-control" name="message" id="msg" rows="1" placeholder="Reponse" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Message'"></textarea>
           <span id="messageError"></span>
          </div>
          <div class="form-group">
            <button type="submit" class="form-control btn btn-secondary rounded submit px-3" onclick="validateAnswerMessage(${message.id})">Envoyer la reponse</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;

  document.getElementById("answerMsg").innerHTML = answerMsg;

}

// ------- Validate Answer Message Function : saves the super admin message in localstorage--------//
function validateAnswerMessage(id) {
  var msg = searchById(id, "messages");

  var newMsg = document.getElementById("msg").value;

  if (newMsg.length > 0) {
    document.getElementById("messageError").innerHTML = "";
  }

  else {
    document.getElementById("messageError").innerHTML = "Champ obligatoire !";
    document.getElementById("messageError").style.color = "red";
  }

  if (newMsg.length > 0) {

    var messages = JSON.parse(localStorage.getItem("messages") || "[]");
    var idMessage = JSON.parse(localStorage.getItem("idMessage") || "1");

    var message = {
      id: idMessage,
      subject: msg.subject,
      message: newMsg,
      emailEmet: "admin@gmail.com",
      emailRec: msg.emailEmet,
      name: "Aida"
    };

    messages.push(message);

    localStorage.setItem("messages", JSON.stringify(messages));
    localStorage.setItem("idMessage", idMessage + 1);

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Votre message a été envoyé!',
      showConfirmButton: false,
      timer: 1500,

    });

    location.reload();
  }



}






//------- Send consultation Function : saves a user consultation in LocalStorage--------//
function sendConsultations() {

  var name = document.getElementById("name").value;
  var verifName = verifyLength(name, 4, 15);
  if (verifName) {
    document.getElementById("nameError").innerHTML = "";
  } else {
    document.getElementById("nameError").innerHTML = "Ce champ doit avoir au moins 4 caractères";
    document.getElementById("nameError").style.color = "red";
  }

  var animal = document.getElementById("animal").value;
  var verifanimal = verifyLength(animal, 4, 25);
  if (verifanimal) {
    document.getElementById("animalError").innerHTML = "";
  } else {
    document.getElementById("animalError").innerHTML = "Ce champ doit avoir au moins 4 caractères";
    document.getElementById("animalError").style.color = "red";
  }

  var email = document.getElementById("email").value;
  var verifEmail = validateEmail(email);
  if (verifEmail) {
    document.getElementById("emailError").innerHTML = "";
  } else {
    document.getElementById("emailError").innerHTML = "Email invalide";
    document.getElementById("emailError").style.color = "red";

  }

  var poid = document.getElementById("poid").value;
  if (poid.length != 0) {
    document.getElementById("poidError").innerHTML = "";
  } else {
    document.getElementById("poidError").innerHTML = "Champ obligatoire";
    document.getElementById("poidError").style.color = "red";

  }

  var taille = document.getElementById("taille").value;
  if (taille.length != 0) {
    document.getElementById("tailleError").innerHTML = "";
  } else {
    document.getElementById("tailleError").innerHTML = "Champ obligatoire";
    document.getElementById("tailleError").style.color = "red";

  }

  var age = document.getElementById("age").value;
  if (age.length != 0) {
    document.getElementById("ageError").innerHTML = "";
  } else {
    document.getElementById("ageError").innerHTML = "age is required";
    document.getElementById("ageError").style.color = "red";

  }

  var antecedents = document.getElementById("antecedents").value;

  if (antecedents.length != 0) {
    document.getElementById("antecedentsError").innerHTML = "";
  } else {
    document.getElementById("antecedentsError").innerHTML = "En cas ou votre animal n'a aucun antécédent médical merci d'écrire aucune";
    document.getElementById("antecedentsError").style.color = "red";

  }

  var question = document.getElementById("question").value;
  if (question.length != 0) {
    document.getElementById("questionError").innerHTML = "";
  } else {
    document.getElementById("questionError").innerHTML = "Champ obligatoire";
    document.getElementById("questionError").style.color = "red";

  }


  if (verifName && verifanimal && (poid.length != 0) && (taille.length != 0) && (age.length != 0) && verifEmail && (antecedents.length != 0) && (question.length != 0)) {

    var consultations = JSON.parse(localStorage.getItem("consultations") || "[]");
    var idConsultation = JSON.parse(localStorage.getItem("idConsultation") || "1");

    var consultation = {
      id: idConsultation,
      name: name,
      animal: animal,
      poid: poid,
      taille: taille,
      age: age,
      antecedents: antecedents,
      question: question,
      emailEmet: email,
      emailRec: "veto@gmail.com"

    };

    consultations.push(consultation);

    localStorage.setItem("consultations", JSON.stringify(consultations));
    localStorage.setItem("idConsultation", idConsultation + 1);

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Votre consultation a été envoyer avec succes !',
      showConfirmButton: false,
      timer: 1500,


    })


    document.getElementById("name").value = "";
    document.getElementById("animal").value = "";
    document.getElementById("email").value = "";
    document.getElementById("poid").value = "";
    document.getElementById("taille").value = "";
    document.getElementById("age").value = "";
    document.getElementById("antecedents").value = "";
    document.getElementById("question").value = "";

  }
}

//------- Display consultation Function : displays consultation sent to the Super Admin--------//
function displayConsultations() {
  var consultations = JSON.parse(localStorage.getItem("consultations") || "[]");

  var adminConsultations = [];

  for (let i = 0; i < consultations.length; i++) {
    if (consultations[i].emailRec == "veto@gmail.com") {
      adminConsultations.push(consultations[i]);
    }
  }


  var cnsltTable = `
  <table class="customers">
  <thead class="thead-primary" style="background: linear-gradient(to right, rgb(110, 76, 233), rgb(210, 163, 231), #000);">   
  <tr>
  <th>Nom</th>
  <th>Animal</th>
  <th>Email</th>
  <th>Poids</th>  
  <th>Taille</th>  
  <th>Age</th>  
  <th>Antécédents</th> 
  <th>Question</th>
  </tr> 
  </thead>
  <tbody>
  `;

  for (let i = 0; i < adminConsultations.length; i++) {
    cnsltTable = cnsltTable + `
      <tr>
      <td>${adminConsultations[i].name}</td>
      <td style="width:130px;">${adminConsultations[i].animal}</td>
      <td>${adminConsultations[i].emailEmet} </td>
      <td>${adminConsultations[i].poid} kg</td>
      <td>${adminConsultations[i].taille} cm</td>
      <td>${adminConsultations[i].age} ans</td>
      <td>${adminConsultations[i].antecedents} </td>
      <td style="width:250px;"> ${adminConsultations[i].question}</td>
      <td> 
      <a type="button" onclick='deleteObject(${i}, "consultations")' style="margin-right:15px;color:#99b19c"><i class="fas fa-trash"></i></a>
      <a type="button" data-toggle="modal" data-target="#exampleModalCenter" onclick="answerConsultation(${adminConsultations[i].id})" style="color:#99b19c"><i class="fas fa-reply"></i></a>
      </td>
      </tr>
      `
   
  }

  cnsltTable = cnsltTable + ` </tbody>
  </table>`;

  document.getElementById('cnsltTable').innerHTML = cnsltTable;

}

//------- Answer consultation Function : allows to the super admin to write an anwser for a user consultation--------//
function answerConsultation(id) {
  var consultations = searchById(id, "consultations");

  var answerCnslt = `
  <div class="row no-gutters">
  <div class="col-md-12 d-flex">
    <div class="modal-body p-4 p-md-5 d-flex align-items-center color-1">
      <div class="text w-100 py-3">
        <span class="subheading">Consultation gratuite</span>
        <h3 class="mb-4 heading">Questions@Véto</h3>
        <div action="#" class="contact-form">
    
          <div class="form-group mb-3">
            <input type="text" class="form-control" placeholder="" id="emailRec" value=${consultations.emailEmet} >
          </div>

          <div class="form-group">
            <input type="text" class="form-control" placeholder="" id="question"  placeholder="question" value=${consultations.question} >
            <span id="antecedentsError"></span>
          </div>
          <br>
          <div class="form-group">
            <textarea name="" id="reponse" cols="30" rows="4" class="form-control" placeholder="Votre reponse"></textarea>
            <span id="reponseError"></span>
          </div>
          <div class="form-group">
            <button type="submit" class="form-control btn btn-secondary rounded submit px-3" onclick="validateAnswerConsultation(${consultations.id})">Envoyer la reponse</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;

  document.getElementById("answerCnslt").innerHTML = answerCnslt;

}

// ------- Validate Answer consultation Function : saves the super admin consultation in localstorage--------//
function validateAnswerConsultation(id) {
  var reponseCnslt = searchById(id, "reponseCnslt");

  var reponse = document.getElementById("reponse").value;

  if (reponse.length > 0) {
    document.getElementById("reponseError").innerHTML = "";
  }

  else {
    document.getElementById("reponseError").innerHTML = "Champ obligatoire !";
    document.getElementById("reponseError").style.color = "red";
  }

  if (reponse.length > 0) {

    var reponseCnslt = JSON.parse(localStorage.getItem("reponseCnslt") || "[]");
    var idReponseCnslt = JSON.parse(localStorage.getItem("idReponseCnslt") || "1");

    var reponse = {
      id: idReponseCnslt,
      question: reponseCnslt.question,
      reponse: reponse,
      emailEmet: "veto@gmail.com",
      emailRec: reponseCnslt.emailEmet,
      name: "Véto"
    };

    reponseCnslt.push(reponse);

    localStorage.setItem("reponseCnslt", JSON.stringify(reponseCnslt));
    localStorage.setItem("idReponseCnslt", idReponseCnslt + 1);

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Reponse envoyer!',
      showConfirmButton: false,
      timer: 1500,

    });

  }



}


//------- Display Answer consultation Function : displays Answer consultation sent to the utilisateurs--------//
function displayAnswerConsultation() {
  var reponseCnslt = JSON.parse(localStorage.getItem("reponseCnslt") || "[]");

  var CnsltMessages = [];

  for (let i = 0; i < reponseCnslt.length; i++) {
    if (reponseCnslt[i].emailRec == "user@gmail.com") {
      CnsltMessages.push(reponseCnslt[i]);
    }
  }

  var CnsltTable = `
  <table class="table table-hover table-inbox">
  <thead class="table table-hover table-inbox">   
  <tr>
  <th></th>
  <th>Question</th>
  <th>Réponse</th>   
  <th></th>
  </tr> 
  </thead>
  <tbody>
  `;

  for (let i = 0; i < CnsltMessages.length; i++) {
    CnsltTable = CnsltTable + `
      <tr class="unread">
      <td class="">
          <label><input type="checkbox" checked="" class="i-checks"></label>
      </td>
      <td style="width:300px;">${CnsltMessages[i].question}</td>
      <td style="width:300px;">${CnsltMessages[i].reponse}</td>
      <td>
      <a type="button" onclick='deleteObject(${i}, "reponseCnslt")' style="margin-right:15px;margin-left:20px; color:#99b19c"><i class="fas fa-trash"></i></a>
      </td>
  </tr>
      `

  }

  CnsltTable = CnsltTable + ` </tbody>
  </table>`;
  document.getElementById('CnsltTable').innerHTML = CnsltTable;

}






//------- Nb Orders Function : displays the number of orders for the connected user--------//
// function nbRpse() {
//   var orders = JSON.parse(localStorage.getItem('orders'));
//   var UtilisateurConnecte = JSON.parse(localStorage.getItem('UtilisateurConnecte'));
//   var orderNbr = 0;
//   for (let i = 0; i < orders.length; i++) {
//     if (orders[i].idUser === UtilisateurConnecte.id) {
//       orderNbr += 1;
//     }
//   }
//   document.getElementById('orderNbr').innerHTML = + orderNbr;
// }





















