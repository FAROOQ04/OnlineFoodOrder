var data = {
    "images": [
      
      {

       "image1": "resources/img/1.jpg",
       "Description":"labore repellendus. Distinctio eligendi sint atque reprehenderit deserunt fuga ex dolorum, optio fugit possimus?",
       "Name":"Ice cream"
    },  
    {
      "image1": "resources/menu_items_img/leg nv briyani.jpeg",
      "Description":"labore repellendus. Distinctio eligendi sint atque reprehenderit deserunt fuga ex dolorum, optio fugit possimus?",
      "Name":"Leg Piece Briyani"
   }, 
   {
      "image1": "resources/menu_items_img/fry nv briyani.jpeg",
      "Description":" labore repellendus. Distinctio eligendi sint atque reprehenderit deserunt fuga ex dolorum, optio fugit possimus?",
      "Name":"Fry Piece Briyani"
   }, 
   {
      "image1": "resources/menu_items_img/dum nv briyani.jpeg",
      "Description":" labore repellendus. Distinctio eligendi sint atque reprehenderit deserunt fuga ex dolorum, optio fugit possimus?",
      "Name":"Dum chicken Briyani"
   }, 
   {
      "image1": "resources/menu_items_img/royal veg birayani cum pulao.jpeg",
      "Description":" labore repellendus. Distinctio eligendi sint atque reprehenderit deserunt fuga ex dolorum, optio fugit possimus?",
      "Name":"Royal VEG Briyani"
   }, 
   {
      "image1": "resources/menu_items_img/kaju barif.jpeg",
      "Description":" labore repellendus. Distinctio eligendi sint atque reprehenderit deserunt fuga ex dolorum, optio fugit possimus?",
      "Name":"Kaju Barif"
   }, 
   {
      "image1": "resources/menu_items_img/chocalate ice cream.jpeg",
      "Description":" labore repellendus. Distinctio eligendi sint atque reprehenderit deserunt fuga ex dolorum, optio fugit possimus?",
      "Name":"chocalate ice cream"
   }, 
   {
      "image1": "resources/menu_items_img/butter scoth.jpeg",
      "Description":" labore repellendus. Distinctio eligendi sint atque reprehenderit deserunt fuga ex dolorum, optio fugit possimus?",
      "Name":"Butter Scoth"
   }, 
   {
      "image1": "resources/menu_items_img/ladu.jpeg",
      "Description":" labore repellendus. Distinctio eligendi sint atque reprehenderit deserunt fuga ex dolorum, optio fugit possimus?",
      "Name":"ladu"
   }, 
   {
      "image1": "resources/menu_items_img/houes of meals.jpeg",
      "Description":" labore repellendus. Distinctio eligendi sint atque reprehenderit deserunt fuga ex dolorum, optio fugit possimus?",
      "Name":"Houes of meals"
   }, 
   {
      "image1": "resources/menu_items_img/thali express.jpeg",
      "Description":" labore repellendus. Distinctio eligendi sint atque reprehenderit deserunt fuga ex dolorum, optio fugit possimus?",
      "Name":"Thali Express"
   },
   {
      "image1": "resources/menu_items_img/royal veg birayani cum pulao.jpeg",
      "Description":" labore repellendus. Distinctio eligendi sint atque reprehenderit deserunt fuga ex dolorum, optio fugit possimus?",
      "Name":"Royal VEG Briyani"
   },
   {
      "image1": "resources/menu_items_img/mutton nv briyani.jpeg",
      "Description":" labore repellendus. Distinctio eligendi sint atque reprehenderit deserunt fuga ex dolorum, optio fugit possimus?",
      "Name":"Mutton Briyani"
   },
   {
      "image1": "resources/img/tiffins.jpeg",
      "Description":" labore repellendus. Distinctio eligendi sint atque reprehenderit deserunt fuga ex dolorum, optio fugit possimus?",
      "Name":"Tiffins"
   },
   {
      "image1": "resources/img/sweets.jpeg",
      "Description":" labore repellendus. Distinctio eligendi sint atque reprehenderit deserunt fuga ex dolorum, optio fugit possimus?",
      "Name":"Sweets"
   },
   {
      "image1": "resources/img/v briyani.jpeg",
      "Description":" labore repellendus. Distinctio eligendi sint atque reprehenderit deserunt fuga ex dolorum, optio fugit possimus?",
      "Name":"VEG-Briyani"
   },
   
   ]
 };
 data.images.forEach(function(obj) {
    var image = new Image();
    image.src = obj.image1;
    image.width="200";
    let getName = obj.Name;
    let getDesc = obj.Description;
    let name = document.createElement("h1");
    name.innerText=getName;
    let desc = document.createElement("p");
    
    desc.innerText=getDesc;
    document.getElementById("Cards").appendChild(name)
    document.getElementById("Cards").appendChild(image)
    document.getElementById("Cards").appendChild(desc)
 })
 
 