const database = [
  {
    name: 'Iron Man',
    bio: `Iron Man is a fictional superhero appearing in American comic books published by Marvel Comics.`,
    path: 'file:///home/user/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/CartoonProject/iron-man.png'
  
  },
  {
    name: 'Jake',
    bio: `Jake the Dog is a main character in the American television
     series Adventure Time created by Pendleton Ward.`,
    path: 'file:///home/user/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/CartoonProject/jake.png'
  
  },
  {
    name: 'Mario',
    bio: `Mario is a fictional character in the Mario video game,
     owned by Nintendo and created by Miyamoto`,
    path: 'file:///home/user/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/CartoonProject/mario.png'
    
  },
  {
    name: 'Scream',
    bio: `Scream is a 1996 American comedy slasher film directed by Wes Craven and written by Kevin Williamson.`,
    path: 'file:///home/user/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/CartoonProject/scream.png'
    
  },
  {
    name: 'Homer Simpson',
    bio: `Homer Jay Simpson is a fictional character and the protagonist 
    of the American animated sitcom The Simpsons.`,
    path: 'simpson.png'
    
  },
  {
    name: 'Stormtrooper',
    bio: `Stormtroopers, nicknamed "bucketheads"
     and—after the Battle of Endor—Remnant Stormtroopers.`,
    path: 'stormtrooper.png'
  }
]

window.onload = function() {
  for (var i = 0; i < database.length; i++) {
    var card = document.createElement('div');
    card.className = 'card';
    var img = document.createElement('img');
    img.setAttribute('src',database[i].path);

    var cardBody = document.createElement('div');
    var name = document.createElement('h5');
    var p = document.createElement('p');
    p.textContent = database[i].bio;
    name.textContent = database[i].name;
    cardBody.appendChild(name);
    cardBody.appendChild(p);
    cardBody.className = 'card-body';


    card.appendChild(img);
    card.appendChild(cardBody);
    document.body.appendChild(card);
  }
  
};
