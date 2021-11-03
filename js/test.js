 //------- affichage de animalerie produits dans les pages des utilisateurs 
  
  function displaychiensShopProducts(){
    var allProductsChiens = JSON.parse(localStorage.getItem('productsChiens') || '[]');
    var chienShopProducts = ``;
    for (let i = 0; i < allProductsChiens.length; i++) {
        chienShopProducts += `<div class="col">
        <div class="card h-80 shadow-sm"> <img src="${allProductsChiens[i].image}" class="card-img-top" alt="...">
           <div class="label-top shadow-sm">${allProductsChiens[i].productStock}</div>
           <div class="card-body">
               <div class="clearfix mb-3"> <span class="float-start badge rounded-pill bg-success">${allProductsChiens[i].productPrice} DT</span></div>
               <h5 class="card-title">${allProductsChiens[i].productName}</h5>
               <div class="text-center mb-3"> 
               <a type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#ChienproductOffer" onclick="ReservationPrChien(${allProductsChiens[i].id})">Check offer</a></div>
           </div>
        </div>
       </div>
       </div>`;
      
    }
    document.getElementById("chienShopProducts").innerHTML = chienShopProducts;
  }
  
  function displaychatsShopProducts(){
    var allProductsChats = JSON.parse(localStorage.getItem('productsChats') || '[]');
    var chatsShopProducts = ``;
    for (let i = 0; i < allProductsChats.length; i++) {
        chatsShopProducts += `<div class="col">
                                <div class="card h-80 shadow-sm"> <img src="${allProductsChats[i].image}" class="card-img-top" alt="...">
                                  <div class="label-top shadow-sm">${allProductsChats[i].productStock}</div>
                                  <div class="card-body">
                                      <div class="clearfix mb-3"> <span class="float-start badge rounded-pill bg-success">${allProductsChats[i].productPrice} DT</span></div>
                                      <h5 class="card-title">${allProductsChats[i].productName}</h5>
                                      <div class="text-center mb-3"> 
                                      <a type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#ChatproductOffer" onclick="ReservationPrChat(${allProductsChats[i].id})">Check offer</a></div>
                                  </div>
                                </div>
                              </div>
                              </div>`;
    }
    document.getElementById("chatsShopProducts").innerHTML = chatsShopProducts;
  }
  
  function displayhamstersShopProducts(){
    var allProductsHamsters = JSON.parse(localStorage.getItem('productsHamsters') || '[]');
    var hamstersShopProducts = ``;
    for (let i = 0; i < allProductsHamsters.length; i++) {
      hamstersShopProducts += `<div class="col">
      <div class="card h-80 shadow-sm"> <img src="${allProductsHamsters[i].image}" class="card-img-top" alt="...">
        <div class="label-top shadow-sm">${allProductsHamsters[i].productStock}</div>
        <div class="card-body">
            <div class="clearfix mb-3"> <span class="float-start badge rounded-pill bg-success">${allProductsHamsters[i].productPrice} DT</span></div>
            <h5 class="card-title">${allProductsHamsters[i].productName}</h5>
            <div class="text-center mb-3"> 
            <a type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#HamsterproductOffer" onclick="ReservationPrHamster(${allProductsHamsters[i].id})">Check offer</a></div>
        </div>
      </div>
    </div>
    </div>`;
    }
    document.getElementById("hamstersShopProducts").innerHTML = hamstersShopProducts;
  }
  
  function displaypoissonsShopProducts(){
    var allProductsPoissons = JSON.parse(localStorage.getItem('productsPoissons') || '[]');
    var poissonsShopProducts = ``;
    for (let i = 0; i < allProductsPoissons.length; i++) {
      poissonsShopProducts += `<div class="col">
      <div class="card h-80 shadow-sm"> <img src="${allProductsPoissons[i].image}" class="card-img-top" alt="...">
        <div class="label-top shadow-sm">${allProductsPoissons[i].productStock}</div>
        <div class="card-body">
            <div class="clearfix mb-3"> <span class="float-start badge rounded-pill bg-success">${allProductsPoissons[i].productPrice} DT</span></div>
            <h5 class="card-title">${allProductsPoissons[i].productName}</h5>
            <div class="text-center mb-3"> 
            <a type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#PoissonproductOffer" onclick="ReservationPrPoisson(${allProductsPoissons[i].id})">Check offer</a></div>
        </div>
      </div>
    </div>
    </div>`;
    }
    document.getElementById("poissonsShopProducts").innerHTML = poissonsShopProducts;
  }
  
  
  //------- Affichage de detail offer produit (check offer) sous forme popup 
  
  
  function displayshopProduct(id){
    localStorage.setItem('idPr',id);
  }
  function checkChienproductOffer(){
    var idPr = localStorage.getItem('idPr');
    var searchedPr = searchById(idPr,'productsChiens');
    document.getElementById('productName').innerHTML = searchedPr.productName;
    document.getElementById("price").innerHTML = searchedPr.productPrice + " DT";
    document.getElementById("stock").innerHTML = searchedPr.productStock + " Pièces";
    
    var img = ` <img src="${searchedPr.image}" alt="image" width="360px" height="220px" style="margin-left: 10%;">`;
      document.getElementById("image").innerHTML = img;
  
  }
  function checkChatproductOffer(){
    var idPr = localStorage.getItem('idPr');
    var searchedPr = searchById(idPr,'productsChats');
    document.getElementById('productName').innerHTML = searchedPr.productName;
    document.getElementById("price").innerHTML = searchedPr.productPrice + " DT";
    document.getElementById("stock").innerHTML = searchedPr.productStock + " Pièces";
    document.getElementById('closeButton').addEventListener('click', function(e) {
      e.preventDefault();
      
      this.parentNode.style.display = 'none';
   
    }, true);
    
    var img = ` <img src="${searchedPr.image}" alt="image" width="360px" height="220px" style="margin-left: 10%;">`;
      document.getElementById("image").innerHTML = img;
  
  }
  function checkHamsterproductOffer(){
    var idPr = localStorage.getItem('idPr');
    var searchedPr = searchById(idPr,'productsHamsters');
    document.getElementById('productName').innerHTML = searchedPr.productName;
    document.getElementById("price").innerHTML = searchedPr.productPrice + " DT";
    document.getElementById("stock").innerHTML = searchedPr.productStock + " Pièces";
    document.getElementById('closeButton').addEventListener('click', function(e) {
      e.preventDefault();
      
      this.parentNode.style.display = 'none';
   
    }, true);
    
    var img = ` <img src="${searchedPr.image}" alt="image" width="360px" height="220px" style="margin-left: 10%;">`;
      document.getElementById("image").innerHTML = img;
  
  }
  function checkPoissonproductOffer(){
    var idPr = localStorage.getItem('idPr');
    var searchedPr = searchById(idPr,'productsPoissons');
    document.getElementById('productName').innerHTML = searchedPr.productName;
    document.getElementById("price").innerHTML = searchedPr.productPrice + " DT";
    document.getElementById("stock").innerHTML = searchedPr.productStock + " Pièces";
    document.getElementById('closeButton').addEventListener('click', function(e) {
      e.preventDefault();
      
      this.parentNode.style.display = 'none';
   
    }, true);
    
    var img = ` <img src="${searchedPr.image}" alt="image" width="360px" height="220px" style="margin-left: 10%;">`;
      document.getElementById("image").innerHTML = img;
  
  }
  


  // *-------------Reservation des produits -------------- *//
  
  
  //------- Go To Reservation Function : directs to reservation.html and save the product ID to reserve --------//
  
  function ReservationPrChien(id){
    localStorage.setItem('idPrChienReserve',id);
    location.replace('reservationProduitChien.html');
  }
  
  function ReservationPrChat(id){
    localStorage.setItem('idPrChatReserve',id);
    location.replace('reservationProduitChat.html');
  }
  
  function ReservationPrHamster(id){
    localStorage.setItem('idPrHamsterReserve',id);
    location.replace('reservationProduitHamster.html');
  }
  
  function ReservationPrPoisson(id){
    localStorage.setItem('idPrPoissonReserve',id);
    location.replace('reservationProduitPoisson.html');
  }
  


//------- Display Product To Reserve Function : displays the product details in order to reserve the quantity --------//
  
  function displayReservationPrChien(){
    var idPr = localStorage.getItem('idPrChienReserve');
    console.log(idPr)
    var searchedPr = searchById(Number(idPr),'productsChiens');
    console.log(searchedPr)
    document.getElementById('productNameToReserve').innerHTML = searchedPr.productName;
    document.getElementById('priceToReserve').innerHTML = searchedPr.productPrice;
    document.getElementById('categoryToReserve').innerHTML = searchedPr.productCategorie;
    document.getElementById('stockToReserve').innerHTML = searchedPr.productStock;
   
    var img = `<img src="${searchedPr.image}" alt="image" width="100px" height="100px">`;
      document.getElementById("image").innerHTML = img;
  }
  
  function displayReservationPrChat(){
    var idPr = localStorage.getItem('idPrChatReserve');
    var searchedPr = searchById(Number(idPr),'productsChats');
  
    document.getElementById('productNameToReserveCh').innerHTML = searchedPr.productName;
    document.getElementById('priceToReserveCh').innerHTML = searchedPr.productPrice;
    document.getElementById('categoryToReserveCh').innerHTML = searchedPr.productCategorie;
    document.getElementById('stockToReserveCh').innerHTML = searchedPr.productStock;
   
    var img = `<img src="${searchedPr.image}" alt="image" width="100px" height="100px">`;
      document.getElementById("imageCh").innerHTML = img;
  
  }
  
  function displayReservationPrHamster(){
    var idPr = localStorage.getItem('idPrHamsterReserve');
    var searchedPr = searchById(Number(idPr),'productsHamsters');
  
    document.getElementById('productNameToReserveH').innerHTML = searchedPr.productName;
    document.getElementById('priceToReserveH').innerHTML = searchedPr.productPrice;
    document.getElementById('categoryToReserveH').innerHTML = searchedPr.productCategorie;
    document.getElementById('stockToReserveH').innerHTML = searchedPr.productStock;
   
    var img = `<img src="${searchedPr.image}" alt="image" width="100px" height="100px">`;
      document.getElementById("imageH").innerHTML = img;
  
  
  }
  
  function displayReservationPrPoisson(){
    var idPr = localStorage.getItem('idPrPoissonReserve');
    var searchedPr = searchById(Number(idPr),'productsPoissons');
  
    document.getElementById('productNameToReserveP').innerHTML = searchedPr.productName;
    document.getElementById('priceToReserveP').innerHTML = searchedPr.productPrice;
    document.getElementById('categoryToReserveP').innerHTML = searchedPr.productCategorie;
    document.getElementById('stockToReserveP').innerHTML = searchedPr.productStock;
   
    var img = `<img src="${searchedPr.image}" alt="image" width="100px" height="100px">`;
      document.getElementById("imageP").innerHTML = img;
  
  
  }
  
  

  
  //------- validate Reservation Function : Saves the user order--------//
  function validateReservationChienPr(){
    var UtilisateurConnecte = JSON.parse(localStorage.getItem('UtilisateurConnecte')||'[]');
    if (UtilisateurConnecte.length === 0) {
  
      Swal.fire({
        icon: 'info',
        title: 'Please Sign In',
        confirmButtonText:
            '<strong> <a href ="SeConnecter.html" style="color :white">Ok</a> </strong>',
        footer: '<a href ="inscriptionUser.html">Or Create an account</a>'
    })   
    } else{
     
    var idPrChienReserve = localStorage.getItem('idPrChienReserve');
    var searchedPr = searchById(Number(idPrChienReserve),'productsChiens');
    var qty = document.getElementById('qty').value;
  
    if ((qty>0) && (qty <= searchedPr.productStock)) {
      var UtilisateurConnecte = JSON.parse(localStorage.getItem("UtilisateurConnecte"));
  
       var orders = JSON.parse(localStorage.getItem('orders') || '[]');
       var idOrder = JSON.parse(localStorage.getItem('idOrder') || '1');
  
       var order = {
         id: idOrder,
         qty : qty,
         idPr: idPrChienReserve,
         idUser: UtilisateurConnecte.id
       };
  
       orders.push(order);
       localStorage.setItem('orders',JSON.stringify(orders));
       localStorage.setItem("idOrder", idOrder + 1);
  
       var allProductsChiens = JSON.parse(localStorage.getItem("productsChiens") || "[]");
  
       for (let i = 0; i < allProductsChiens.length; i++) {
           if (allProductsChiens[i].id == Number(idPrChienReserve)) {
            allProductsChiens[i].productStock = Number(allProductsChiens[i].productStock) - Number(qty);
           }
       }
  
       localStorage.setItem("productsChiens", JSON.stringify(allProductsChiens));
       location.reload();
  
    }
  
    else{
      document.getElementById("qtyError").innerHTML = "Qty not available";
      document.getElementById("qtyError").style.color = "red";
    }
  
   } 
  
  }
  
  function validateReservationChatPr(){
    var UtilisateurConnecte = JSON.parse(localStorage.getItem('UtilisateurConnecte')||'[]');
    if (UtilisateurConnecte.length === 0) {
  
      Swal.fire({
        icon: 'info',
        title: 'Please Sign In',
        confirmButtonText:
            '<strong> <a href ="SeConnecter.html" style="color :white">Ok</a> </strong>',
        footer: '<a href ="inscriptionUser.html">Or Create an account</a>'
    })   
    } else{
     
    var idPrChatReserve = localStorage.getItem('idPrChatReserve');
    var searchedPr = searchById(Number(idPrChatReserve),'productsChats');
    var qty = document.getElementById('qtyCh').value;
  
    if ((qty>0) && (qty <= searchedPr.productStock)) {
      var UtilisateurConnecte = JSON.parse(localStorage.getItem("UtilisateurConnecte"));
  
       var orders = JSON.parse(localStorage.getItem('orders') || '[]');
       var idOrder = JSON.parse(localStorage.getItem('idOrder') || '1');
  
       var order = {
         id: idOrder,
         qty : qty,
         idPr: idPrChatReserve,
         idUser: UtilisateurConnecte.id
       };
  
       orders.push(order);
       localStorage.setItem('orders',JSON.stringify(orders));
       localStorage.setItem("idOrder", idOrder + 1);
  
       var allProductsChats = JSON.parse(localStorage.getItem("productsChats") || "[]");
  
       for (let i = 0; i < allProductsChats.length; i++) {
           if (allProductsChats[i].id == Number(idPrChatReserve)) {
            allProductsChats[i].productStock = Number(allProductsChats[i].productStock) - Number(qty);
           }
       }
  
       localStorage.setItem("productsChats", JSON.stringify(allProductsChats));
       location.reload();
  
    }
  
    else{
      document.getElementById("qtyErrorCh").innerHTML = "Qty not available";
      document.getElementById("qtyErrorCh").style.color = "red";
    }
  
   } 
  
  }
  
  function validateReservationHamsterPr(){
    var UtilisateurConnecte = JSON.parse(localStorage.getItem('UtilisateurConnecte')||'[]');
    if (UtilisateurConnecte.length === 0) {
  
      Swal.fire({
        icon: 'info',
        title: 'Please Sign In',
        confirmButtonText:
            '<strong> <a href ="SeConnecter.html" style="color :white">Ok</a> </strong>',
        footer: '<a href ="inscriptionUser.html">Or Create an account</a>'
    })   
    } else{
     
    var idPrHamsterReserve = localStorage.getItem('idPrHamsterReserve');
    var searchedPr = searchById(Number(idPrHamsterReserve),'productsHamsters');
    var qty = document.getElementById('qtyH').value;
  
    if ((qty>0) && (qty <= searchedPr.productStock)) {
      var UtilisateurConnecte = JSON.parse(localStorage.getItem("UtilisateurConnecte"));
  
       var orders = JSON.parse(localStorage.getItem('orders') || '[]');
       var idOrder = JSON.parse(localStorage.getItem('idOrder') || '1');
  
       var order = {
         id: idOrder,
         qty : qty,
         idPr: idPrHamsterReserve,
         idUser: UtilisateurConnecte.id
       };
  
       orders.push(order);
       localStorage.setItem('orders',JSON.stringify(orders));
       localStorage.setItem("idOrder", idOrder + 1);
  
       var allProductsHamsters = JSON.parse(localStorage.getItem("productsHamsters") || "[]");
  
       for (let i = 0; i < allProductsHamsters.length; i++) {
           if (allProductsHamsters[i].id == Number(idPrHamsterReserve)) {
            allProductsHamsters[i].productStock = Number(allProductsHamsters[i].productStock) - Number(qty);
           }
       }
  
       localStorage.setItem("productsChats", JSON.stringify(allProductsChats));
       location.reload();
  
    }
  
    else{
      document.getElementById("qtyErrorH").innerHTML = "Qty not available";
      document.getElementById("qtyErrorH").style.color = "red";
    }
  
   } 
  
  }
  
  function validateReservationPoissonPr(){
    var UtilisateurConnecte = JSON.parse(localStorage.getItem('UtilisateurConnecte')||'[]');
    if (UtilisateurConnecte.length === 0) {
  
      Swal.fire({
        icon: 'info',
        title: 'Please Sign In',
        confirmButtonText:
            '<strong> <a href ="SeConnecter.html" style="color :white">Ok</a> </strong>',
        footer: '<a href ="inscriptionUser.html">Or Create an account</a>'
    })   
    } else{
     
    var idPrPoissonReserve = localStorage.getItem('idPrPoissonReserve');
    var searchedPr = searchById(Number(idPrPoissonReserve),'productsPoissons');
    var qty = document.getElementById('qtyP').value;
  
    if ((qty>0) && (qty <= searchedPr.productStock)) {
      var UtilisateurConnecte = JSON.parse(localStorage.getItem("UtilisateurConnecte"));
  
       var orders = JSON.parse(localStorage.getItem('orders') || '[]');
       var idOrder = JSON.parse(localStorage.getItem('idOrder') || '1');
  
       var order = {
         id: idOrder,
         qty : qty,
         idPr: idPrPoissonReserve,
         idUser: UtilisateurConnecte.id
       };
  
       orders.push(order);
       localStorage.setItem('orders',JSON.stringify(orders));
       localStorage.setItem("idOrder", idOrder + 1);
  
       var allProductsPoissons = JSON.parse(localStorage.getItem("productsPoissons") || "[]");
  
       for (let i = 0; i < allProductsPoissons.length; i++) {
           if (allProductsPoissons[i].id == Number(idPrPoissonReserve)) {
            allProductsPoissons[i].productStock = Number(allProductsPoissons[i].productStock) - Number(qty);
           }
       }
  
       localStorage.setItem("productsPoissons", JSON.stringify(allProductsPoissons));
       location.reload();
  
    }
  
    else{
      document.getElementById("qtyErrorP").innerHTML = "Qty not available";
      document.getElementById("qtyErrorP").style.color = "red";
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
                  <table class="table">
                    <thead class="thead-primary">
                    <tr>
                    <th>&nbsp;</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                  `;
  
    for (let i = 0; i < myOrders.length; i++) {
        var pr = searchById(Number(myOrders[i].idPr), "productsChiens");
  
        var totalPrice = pr.productPrice * myOrders[i].qty;
        sum = sum + totalPrice;
        orderTable = orderTable + `
        <tr class="alert" role="alert">
                      <td>
                      <div id="image" src="${pr.image}"></div>
                      </td>
                      <td><h5>${pr.productName}</h5></td>
                      <td>${pr.productPrice} DT</td>
                      <td>${pr.productCategorie}</td>
                      <td>${myOrders[i].qty}</td>
                      <td>${totalPrice} DT</td>
                      <td>
                      <button class="btn btn-danger"> Delete </button>
                      <button class="btn btn-warning" onclick="editOrder(${myOrders[i].id})"> Edit </button>
                      </td>
      </tr>
        `;
  
    }
    orderTable = orderTable + `
    <tr>
    <td>
  
    </td>
    <td>
    </td>
    <td>
        <h5>Subtotal</h5>
    </td>
    <td>
        <h5>${sum} DT</h5>
    </td>
    </tr>
    </tr>
    </tbody>
    </table> ` ;
    document.getElementById("orderTable").innerHTML = orderTable;
  }
  
  
  //------- Delete Order Function : deletes an order and return the order quatity to the stock--------//
  function deleteOrder(pos, id) {
    var order = searchById(Number(id), "orders");
    var qty = order.qty;
  
    var products = JSON.parse(localStorage.getItem("products") || "[]");
  
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == order.idPr) {
            products[i].stock = products[i].stock + Number(qty);
        }
    }
  
    localStorage.setItem("products", JSON.stringify(products));
  
    deleteObject(pos, "orders");
  
  }
  
  
  function nbOrders(){
    var orders = JSON.parse(localStorage.getItem('orders'));
    var UtilisateurConnecte = JSON.parse(localStorage.getItem('UtilisateurConnecte'));
    var orderNbr = 0;
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].idUser === UtilisateurConnecte.id) {
            orderNbr += 1 ;
        }   
    }
    document.getElementById('orderNbr').innerHTML = + orderNbr ;
  }
  

  `
  <<div class="modal fade" id="ChienproductOffer" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="productName" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="productName"></h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <div class="col-md-12 form-group">
        <input type="text" class="form-control" id="subject"  placeholder="Subject" value=${message.subject} disabled="true">
        <span id="newPriceError"></span>
        </div>
        <div class="col-md-12 form-group">
        <input type="text" class="form-control" id="emailRec" placeholder="Email"  value=${message.emailEmet} disabled="true" >
        <span id="newStockError"></span>
        </div>
        <div class="col-md-12 form-group">
        <textarea class="form-control" name="message" id="msg" rows="1" placeholder="Enter Message" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'"></textarea>
        <span id="messageError"></span>
        </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="closeButton">Close</button>
          <button type="submit" value="submit" class="primary-btn" onclick="validateAnswerMessage(${message.id})">Send</button>
        </div>
      </div>
    </div>
  </div>     
  `

  `

 
 
  <div class="col-md-12 form-group">
  </div> 
  `








  else if (allProducts[i].productType=== "chat") {
    var allChat = JSON.parse(localStorage.getItem('allchat') || '[]');
    allChat.push(allProducts[i]);
    localStorage.setItem('allchat', JSON.stringify(allChat))
  }else if (allProducts[i].productType=== "hamster") {
    var allHamsters = JSON.parse(localStorage.getItem('allHamsters') || '[]');
    allHamsters.push(allProducts[i]);
    localStorage.setItem('allHamsters', JSON.stringify(allHamsters))
  }
  else if (allProducts[i].productType=== "poisson") {
    var allPoissons = JSON.parse(localStorage.getItem('allPoissons') || '[]');
    allPoissons.push(allProducts[i]);
    localStorage.setItem('allPoissons', JSON.stringify(allPoissons))
  }



  else if(allProducts[i].productType === allChat[i].productType){
    ShopProducts += `<div class="col">
  <div class="card h-80 shadow-sm"> <img src="${allChat[i].image}" class="card-img-top" alt="...">
     <div class="label-top shadow-sm">${allChat[i].productStock}</div>
     <div class="card-body">
         <div class="clearfix mb-3"> <span class="float-start badge rounded-pill bg-success">${allChat[i].productPrice} DT</span></div>
         <h5 class="card-title">${allChat[i].productName}</h5>
         <div class="text-center mb-3"> 
         <a type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#productOffer" onclick="ReservationPr(${allChat[i].id})">Check offer</a></div>
     </div>
  </div>
 </div>
 </div>`;
} 
else if(allProducts[i].productType === allHamsters[i].productType){
  ShopProducts += `<div class="col">
<div class="card h-80 shadow-sm"> <img src="${allHamsters[i].image}" class="card-img-top" alt="...">
   <div class="label-top shadow-sm">${allHamsters[i].productStock}</div>
   <div class="card-body">
       <div class="clearfix mb-3"> <span class="float-start badge rounded-pill bg-success">${allHamsters[i].productPrice} DT</span></div>
       <h5 class="card-title">${allHamsters[i].productName}</h5>
       <div class="text-center mb-3"> 
       <a type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#productOffer" onclick="ReservationPr(${allHamsters[i].id})">Check offer</a></div>
   </div>
</div>
</div>
</div>`;
}  
else if(allProducts[i].productType === allPoissons[i].productType){
ShopProducts += `<div class="col">
<div class="card h-80 shadow-sm"> <img src="${allPoissons[i].image}" class="card-img-top" alt="...">
 <div class="label-top shadow-sm">${allPoissons[i].productStock}</div>
 <div class="card-body">
     <div class="clearfix mb-3"> <span class="float-start badge rounded-pill bg-success">${allPoissons[i].productPrice} DT</span></div>
     <h5 class="card-title">${allPoissons[i].productName}</h5>
     <div class="text-center mb-3"> 
     <a type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#productOffer" onclick="ReservationPr(${allPoissons[i].id})">Check offer</a></div>
 </div>
</div>
</div>
</div>`;
}      



//------- affichage de animalerie produits dans les pages des utilisateurs 

function displayShopProducts(){
  var allProducts = JSON.parse(localStorage.getItem('products') || '[]');
  var allChien = allProducts.filter(allProducts => allProducts.productType === 'chien')
  // allChien.push(allProduct);

  // var allChien = JSON.parse(localStorage.getItem('allChien') || '[]');

  // for (let i = 0; i < allProducts.length; i++) {
  //     if (allProducts[i].productType === "chien") { 
  //     }
  // }
// console.log(allChien)

  var ShopProducts = ``;
  for (let i = 0; i < allChien.length; i++) {
      ShopProducts += `<div class="col">
      <div class="card h-80 shadow-sm"> <img src="${allChien[i].image}" class="card-img-top" alt="...">
         <div class="label-top shadow-sm">${allChien[i].productStock}</div>
         <div class="card-body">
             <div class="clearfix mb-3"> <span class="float-start badge rounded-pill bg-success">${allChien[i].productPrice} DT</span></div>
             <h5 class="card-title">${allChien[i].productName}</h5>
             <div class="text-center mb-3"> 
             <a type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#productOffer" onclick="ReservationPr(${allChien[i].id})">Check offer</a></div>
         </div>
      </div>
     </div>
     </div>`;

}

  document.getElementById("ShopProducts").innerHTML = ShopProducts;
}



    // allChien.push(allProduct);

    // var allChien = JSON.parse(localStorage.getItem('allChien') || '[]');

    // for (let i = 0; i < allProducts.length; i++) {
    //     if (allProducts[i].productType === "chien") { 
    //     }
    // }
  // console.log(allChien)



  


