import render from 'preact-render-to-string'
import { html } from 'htm/preact' // use the provided preact binding

const express = require('express')
const compression = require('compression')

const app = express() // create the express app
app.use(compression()) // use gzip for all requests

const body = render(html`<h1>Lil' Pedia (for Animals)</h1>`)

// some basic html to show
const layout = `
  <!DOCTYPE html>
  <html>
    <head>
    <script src="https://cdn.jsdelivr.net/npm/unpoly@3.5.2/unpoly.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/unpoly@3.5.2/unpoly.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/unpoly@3.5.2/unpoly-bootstrap3.min.css">

    <!-- Custom CSS -->
    <style>
      .custom-link {
        color: red; /* Sets the text color to red */
        border: 1px solid grey; /* Adds a border to create a box */
        padding: 10px; /* Adds space inside the box */
        display: inline-block; /* Aligns items in a line and respects padding/margin */
        margin: 5px; /* Adds space outside the box */
        text-decoration: none; /* Removes the underline from the link */
      }
    </style>
    </head>
    <body style="background-color: #9999CC">
      ${body}

      <p>"Wikipedia, but shorter"</p>
      <p>Inspired by: https://twitter.com/ShaanVP/status/1732528736376160506</p>

      </br><a href="/Aardvark" up-layer="new">Aardvark</a> 
      </br><a href="/Aardwolf" up-layer="new">Aardwolf</a> 
      </br><a href="/Abyssinian" up-layer="new">Abyssinian</a> 
      </br><a href="/Abyssinian-Guinea-Pig" up-layer="new">Abyssinian-Guinea-Pig</a> 
      </br><a href="/Acadian-Flycatcher" up-layer="new">Acadian-Flycatcher</a> 
      </br><a href="/Achrioptera-Manga" up-layer="new">Achrioptera-Manga</a> 
      </br><a href="/Ackie-Monitor" up-layer="new">Ackie-Monitor</a> 
      </br><a href="/Addax" up-layer="new">Addax</a> 
      </br><a href="/Adelie-Penguin" up-layer="new">Adelie-Penguin</a> 
      </br><a href="/Admiral-Butterfly" up-layer="new">Admiral-Butterfly</a> 
      </br><a href="/Aesculapian-Snake" up-layer="new">Aesculapian-Snake</a> 
      </br><a href="/Affenpinscher" up-layer="new">Affenpinscher</a> 
      </br><a href="/Afghan-Hound" up-layer="new">Afghan-Hound</a> 
      </br><a href="/African-Bullfrog" up-layer="new">African-Bullfrog</a> 
      </br><a href="/African-Bush-Elephant" up-layer="new">African-Bush-Elephant</a> 
      </br><a href="/African-Civet" up-layer="new">African-Civet</a> 
      </br><a href="/African-Clawed-Frog" up-layer="new">African-Clawed-Frog</a> 
      </br><a href="/African-Elephant" up-layer="new">African-Elephant</a> 
      </br><a href="/African-Fish-Eagle" up-layer="new">African-Fish-Eagle</a> 
      </br><a href="/African-Forest-Elephant" up-layer="new">African-Forest-Elephant</a> 
      </br><a href="/African-Golden-Cat" up-layer="new">African-Golden-Cat</a> 
      </br><a href="/African-Grey-Parrot" up-layer="new">African-Grey-Parrot</a> 
      </br><a href="/African-Jacana" up-layer="new">African-Jacana</a> 
      </br><a href="/African-Palm-Civet" up-layer="new">African-Palm-Civet</a> 
      </br><a href="/African-Penguin" up-layer="new">African-Penguin</a> 
      </br><a href="/African-Sugarcane-Borer" up-layer="new">African-Sugarcane-Borer</a> 
      </br><a href="/African-Tree-Toad" up-layer="new">African-Tree-Toad</a> 
      </br><a href="/African-Wild-Dog" up-layer="new">African-Wild-Dog</a> 
      </br><a href="/Africanized-bee-killer-bee" up-layer="new">Africanized-bee-killer-bee</a> 
      </br><a href="/Agama-Lizard" up-layer="new">Agama-Lizard</a> 
      </br><a href="/Agkistrodon-Contortrix" up-layer="new">Agkistrodon-Contortrix</a> 
      </br><a href="/Agouti" up-layer="new">Agouti</a> 
      </br><a href="/Aidi" up-layer="new">Aidi</a> 
      </br><a href="/Ainu" up-layer="new">Ainu</a> 
      </br><a href="/Airedale-Terrier" up-layer="new">Airedale-Terrier</a> 
      </br><a href="/Airedoodle" up-layer="new">Airedoodle</a> 
      </br><a href="/Akbash" up-layer="new">Akbash</a> 
      </br><a href="/Akita" up-layer="new">Akita</a> 
      </br><a href="/Akita-Shepherd" up-layer="new">Akita-Shepherd</a> 
      </br><a href="/Alabai-Central-Asian-Shepherd" up-layer="new">Alabai-Central-Asian-Shepherd</a> 
      </br><a href="/Alaskan-Husky" up-layer="new">Alaskan-Husky</a> 
      </br><a href="/Alaskan-Klee-Kai" up-layer="new">Alaskan-Klee-Kai</a> 
      </br><a href="/Alaskan-Malamute" up-layer="new">Alaskan-Malamute</a> 
      </br><a href="/Alaskan-Pollock" up-layer="new">Alaskan-Pollock</a> 
      </br><a href="/Alaskan-Shepherd" up-layer="new">Alaskan-Shepherd</a> 
      </br><a href="/Albacore-Tuna" up-layer="new">Albacore-Tuna</a> 
      </br><a href="/Albatross" up-layer="new">Albatross</a> 
      </br><a href="/Albertonectes" up-layer="new">Albertonectes</a> 
      </br><a href="/Albino-Amelanistic-Corn-Snake" up-layer="new">Albino-Amelanistic-Corn-Snake</a> 
      </br><a href="/Aldabra-Giant-Tortoise" up-layer="new">Aldabra-Giant-Tortoise</a> 
      </br><a href="/Alligator-Gar" up-layer="new">Alligator-Gar</a> 
      </br><a href="/Allosaurus" up-layer="new">Allosaurus</a> 
      </br><a href="/Alpaca" up-layer="new">Alpaca</a> 
      </br><a href="/Alpine-Dachsbracke" up-layer="new">Alpine-Dachsbracke</a> 
      </br><a href="/Alpine-Goat" up-layer="new">Alpine-Goat</a> 
      </br><a href="/Alusky" up-layer="new">Alusky</a> 
      </br><a href="/Amano-Shrimp" up-layer="new">Amano-Shrimp</a> 
      </br><a href="/Amargasaurus" up-layer="new">Amargasaurus</a> 
      </br><a href="/Amazon-Parrot" up-layer="new">Amazon-Parrot</a> 
      </br><a href="/Amazon-River-Dolphin-Pink-Dolphin" up-layer="new">Amazon-River-Dolphin-Pink-Dolphin</a> 
      </br><a href="/Amazon-Tree-Boa" up-layer="new">Amazon-Tree-Boa</a> 
      </br><a href="/Amazonian-Royal-Flycatcher" up-layer="new">Amazonian-Royal-Flycatcher</a> 
      </br><a href="/Amberjack" up-layer="new">Amberjack</a> 
      </br><a href="/Ambrosia-Beetle" up-layer="new">Ambrosia-Beetle</a> 
      </br><a href="/American-Alligator" up-layer="new">American-Alligator</a> 
      </br><a href="/American-Alsatian" up-layer="new">American-Alsatian</a> 
      </br><a href="/American-Bulldog" up-layer="new">American-Bulldog</a> 
      </br><a href="/American-Bully" up-layer="new">American-Bully</a> 
      </br><a href="/American-Cocker-Spaniel" up-layer="new">American-Cocker-Spaniel</a> 
      </br><a href="/American-Cockroach" up-layer="new">American-Cockroach</a> 
      </br><a href="/American-Coonhound" up-layer="new">American-Coonhound</a> 
      </br><a href="/American-Dog-Tick" up-layer="new">American-Dog-Tick</a> 
      </br><a href="/American-Eel" up-layer="new">American-Eel</a> 
      </br><a href="/American-Eskimo-Dog" up-layer="new">American-Eskimo-Dog</a> 
      </br><a href="/American-Foxhound" up-layer="new">American-Foxhound</a> 
      </br><a href="/American-Hairless-Terrier" up-layer="new">American-Hairless-Terrier</a> 
      </br><a href="/American-Leopard-Hound" up-layer="new">American-Leopard-Hound</a> 
      </br><a href="/American-Paddlefish" up-layer="new">American-Paddlefish</a> 
      </br><a href="/American-Pit-Bull-Terrier" up-layer="new">American-Pit-Bull-Terrier</a> 
      </br><a href="/American-Pugabull" up-layer="new">American-Pugabull</a> 
      </br><a href="/American-Pygmy-Goat" up-layer="new">American-Pygmy-Goat</a> 
      </br><a href="/American-Robin" up-layer="new">American-Robin</a> 
      </br><a href="/American-Staffordshire-Terrier" up-layer="new">American-Staffordshire-Terrier</a> 
      </br><a href="/American-Toad" up-layer="new">American-Toad</a> 
      </br><a href="/American-Water-Spaniel" up-layer="new">American-Water-Spaniel</a> 
      </br><a href="/American-Wirehair" up-layer="new">American-Wirehair</a> 
      </br><a href="/Amethystine-Python-Scrub-Python" up-layer="new">Amethystine-Python-Scrub-Python</a> 
      </br><a href="/Amphicoelias-Fragillimus" up-layer="new">Amphicoelias-Fragillimus</a> 
      </br><a href="/Amur-Leopard" up-layer="new">Amur-Leopard</a> 
      </br><a href="/Anaconda" up-layer="new">Anaconda</a> 
      </br><a href="/Anatolian-Shepherd-Dog" up-layer="new">Anatolian-Shepherd-Dog</a> 
      </br><a href="/Anchovies" up-layer="new">Anchovies</a> 
      </br><a href="/Andrewsarchus" up-layer="new">Andrewsarchus</a> 
      </br><a href="/Angelfish" up-layer="new">Angelfish</a> 
      </br><a href="/Angelshark" up-layer="new">Angelshark</a> 
      </br><a href="/Angled-Sunbeam-Caterpillar" up-layer="new">Angled-Sunbeam-Caterpillar</a> 
      </br><a href="/Anglerfish" up-layer="new">Anglerfish</a> 
      </br><a href="/Angora-Ferret" up-layer="new">Angora-Ferret</a> 
      </br><a href="/Angora-Goat" up-layer="new">Angora-Goat</a> 
      </br><a href="/Anhinga" up-layer="new">Anhinga</a> 
      </br><a href="/Annas-Hummingbird" up-layer="new">Annas-Hummingbird</a> 
      </br><a href="/Anole-Lizard" up-layer="new">Anole-Lizard</a> 
      </br><a href="/Anomalocaris" up-layer="new">Anomalocaris</a> 
      </br><a href="/Ant" up-layer="new">Ant</a> 
      </br><a href="/Antarctic-Scale-Worm" up-layer="new">Antarctic-Scale-Worm</a> 
      </br><a href="/Anteater" up-layer="new">Anteater</a> 
      </br><a href="/Antelope" up-layer="new">Antelope</a> 
      </br><a href="/Anteosaurus" up-layer="new">Anteosaurus</a> 
      </br><a href="/Antiguan-Racer-Snake" up-layer="new">Antiguan-Racer-Snake</a> 
      </br><a href="/Aoudad-Sheep" up-layer="new">Aoudad-Sheep</a> 
      </br><a href="/Ape" up-layer="new">Ape</a> 
      </br><a href="/Apennine-Wolf" up-layer="new">Apennine-Wolf</a> 
      </br><a href="/Appenzeller-Dog" up-layer="new">Appenzeller-Dog</a> 
      </br><a href="/Apple-Head-Chihuahua" up-layer="new">Apple-Head-Chihuahua</a> 
      </br><a href="/Apple-Moth" up-layer="new">Apple-Moth</a> 
      </br><a href="/Arabian-Cobra" up-layer="new">Arabian-Cobra</a> 
      </br><a href="/Arabian-Cobra" up-layer="new">Arabian-Cobra</a> 
      </br><a href="/Arabian-Wolf" up-layer="new">Arabian-Wolf</a> 
      </br><a href="/Arafura-File-Snake" up-layer="new">Arafura-File-Snake</a> 
      </br><a href="/Arapaima" up-layer="new">Arapaima</a> 
      </br><a href="/Archaeopteryx" up-layer="new">Archaeopteryx</a> 
      </br><a href="/Archelon-Turtle" up-layer="new">Archelon-Turtle</a> 
      </br><a href="/Arapaima" up-layer="new">Arapaima</a> 
      </br><a href="/Archaeoindris" up-layer="new">Archaeoindris</a> 
      </br><a href="/Archaeotherium" up-layer="new">Archaeotherium</a> 
      </br><a href="/Argentavis-Magnificens" up-layer="new">Argentavis-Magnificens</a> 
      </br><a href="/Argentine-Black-and-White-Tegu" up-layer="new">Argentine-Black-and-White-Tegu</a> 
      </br><a href="/Argentine-Horned-Frog" up-layer="new">Argentine-Horned-Frog</a> 
      </br><a href="/Argentinosaurus" up-layer="new">Argentinosaurus</a> 
      </br><a href="/Arizona-Bark-Scorpion" up-layer="new">Arizona-Bark-Scorpion</a> 
      </br><a href="/Arizona-Black-Rattlesnake" up-layer="new">Arizona-Black-Rattlesnake</a> 
      </br><a href="/Arizona-Blonde-Tarantula" up-layer="new">Arizona-Blonde-Tarantula</a> 
      </br><a href="/Arizona-Coral-Snake" up-layer="new">Arizona-Coral-Snake</a> 
      </br><a href="/Armadillo" up-layer="new">Armadillo</a> 
      </br><a href="/Armadillo-Lizard" up-layer="new">Armadillo-Lizard</a> 
      </br><a href="/Armenian-Gampr" up-layer="new">Armenian-Gampr</a> 
      </br><a href="/Armored-Catfish" up-layer="new">Armored-Catfish</a> 
      </br><a href="/Armyworm" up-layer="new">Armyworm</a> 
      </br><a href="/Arsinoitherium" up-layer="new">Arsinoitherium</a> 
      </br><a href="/Arthropleura" up-layer="new">Arthropleura</a> 
      </br><a href="/Aruba-Rattlesnake" up-layer="new">Aruba-Rattlesnake</a> 
      </br><a href="/Ashy-Mining-Bee" up-layer="new">Ashy-Mining-Bee</a> 
      </br><a href="/Asian-Arowana" up-layer="new">Asian-Arowana</a> 
      </br><a href="/Asian-Carp" up-layer="new">Asian-Carp</a> 
      </br><a href="/Asian-Cockroach" up-layer="new">Asian-Cockroach</a> 
      </br><a href="/Asian-Elephant" up-layer="new">Asian-Elephant</a> 
      </br><a href="/Asian-Giant-Hornet" up-layer="new">Asian-Giant-Hornet</a> 
      </br><a href="/Asian-Lady-Beetle" up-layer="new">Asian-Lady-Beetle</a> 
      </br><a href="/Asian-Longhorn-Beetle" up-layer="new">Asian-Longhorn-Beetle</a> 
      </br><a href="/Asian-Palm-Civet" up-layer="new">Asian-Palm-Civet</a> 
      </br><a href="/Asian-Vine-Snake" up-layer="new">Asian-Vine-Snake</a> 
      </br><a href="/Asian-Water-Monitor" up-layer="new">Asian-Water-Monitor</a> 
      </br><a href="/Asiatic-Black-Bear" up-layer="new">Asiatic-Black-Bear</a> 
      </br><a href="/Asp" up-layer="new">Asp</a> 
      </br><a href="/Asp-Caterpillar" up-layer="new">Asp-Caterpillar</a> 
      </br><a href="/Assassin-Bug" up-layer="new">Assassin-Bug</a> 
      </br><a href="/Assassin-Snail" up-layer="new">Assassin-Snail</a> 
      </br><a href="/Atlantic-Cod" up-layer="new">Atlantic-Cod</a> 
      </br><a href="/Atlantic-Salmon" up-layer="new">Atlantic-Salmon</a> 
      </br><a href="/Atlantic-Sturgeon" up-layer="new">Atlantic-Sturgeon</a> 
      </br><a href="/Atlas-Beetle" up-layer="new">Atlas-Beetle</a> 
      </br><a href="/Atlas-Moth" up-layer="new">Atlas-Moth</a> 
      </br><a href="/Aurochs" up-layer="new">Aurochs</a> 
      </br><a href="/Aussiedoodle" up-layer="new">Aussiedoodle</a> 
      </br><a href="/Aussiedor" up-layer="new">Aussiedor</a> 
      </br><a href="/Aussiepom" up-layer="new">Aussiepom</a> 
      </br><a href="/Australian-Bulldog" up-layer="new">Australian-Bulldog</a> 
      </br><a href="/Australian-Cattle-Dog" up-layer="new">Australian-Cattle-Dog</a> 
      </br><a href="/Australian-Cockroach" up-layer="new">Australian-Cockroach</a> 
      </br><a href="/Australian-Firehawk" up-layer="new">Australian-Firehawk</a> 
      </br><a href="/Australian-Flathead-Perch" up-layer="new">Australian-Flathead-Perch</a> 
      </br><a href="/Australian-Gecko" up-layer="new">Australian-Gecko</a> 
      </br><a href="/Australian-Kelpie-Dog" up-layer="new">Australian-Kelpie-Dog</a> 
      </br><a href="/Australian-Labradoodle" up-layer="new">Australian-Labradoodle</a> 
      </br><a href="/Australian-Mist" up-layer="new">Australian-Mist</a> 
      </br><a href="/Australian-Retriever" up-layer="new">Australian-Retriever</a> 
      </br><a href="/Australian-Shepherd" up-layer="new">Australian-Shepherd</a> 
      </br><a href="/Australian-Shepherd-Mix" up-layer="new">Australian-Shepherd-Mix</a> 
      </br><a href="/Australian-Terrier" up-layer="new">Australian-Terrier</a> 
      </br><a href="/Australopithecus" up-layer="new">Australopithecus</a> 
      </br><a href="/Australorp-Chicken" up-layer="new">Australorp-Chicken</a> 
      </br><a href="/Avocet" up-layer="new">Avocet</a> 
      </br><a href="/Axanthic-Ball-Python" up-layer="new">Axanthic-Ball-Python</a> 
      </br><a href="/Axolotl" up-layer="new">Axolotl</a> 
      </br><a href="/Ayam-Cemani" up-layer="new">Ayam-Cemani</a> 
      </br><a href="/Aye-aye" up-layer="new">Aye-aye</a> 
      </br><a href="/Azawakh" up-layer="new">Azawakh</a> 


    </body>
  </html>
`

app.get('/', (request, response) => { // listen for requests to the root path
  response.send(layout) // send the HTML string
})

app.get('/Aardvark', (req, res) => {
  res.send(`
    <div up-main="modal">
      <h1>Aardvark</h1>
      <p>A nocturnal mammal native to Africa, known for its long snout and ability to dig burrows.</p>
      <!-- More HTML content -->
    </div>
  `);
});

app.get('/Aardwolf', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Aardwolf</h1>      <p>A small, insectivorous mammal, resembling a striped hyena, found in Eastern and Southern Africa.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Abyssinian', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Abyssinian</h1>      <p>A breed of domestic cat with a distinctive ticked tabby coat, known for its slender build and lively nature.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Abyssinian-Guinea-Pig', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Abyssinian-Guinea-Pig</h1>      <p>A breed of guinea pig known for its rosette patterned fur and sociable demeanor.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Acadian-Flycatcher', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Acadian-Flycatcher</h1>      <p>A small insect-eating bird of the tyrant flycatcher family, found in North America, particularly in forested wetlands.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Achrioptera-Manga', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Achrioptera-Manga</h1>      <p>A species of stick insect found in Madagascar, notable for its bright colors and large size.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Ackie-Monitor', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Ackie-Monitor</h1>      <p>A small to medium-sized species of monitor lizard native to Australia, known for its spiny tail and active disposition.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Addax', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Addax</h1>      <p>A critically endangered species of antelope found in the Sahara desert, with long, twisted horns and a white coat that helps reflect the sun's rays.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Adelie-Penguin', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Adelie-Penguin</h1>      <p>A species of penguin common along the entire Antarctic coast, recognized by its blue-black back and white front.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Admiral-Butterfly', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Admiral-Butterfly</h1>      <p>A colorful butterfly commonly found in North America, known for its migratory habits and striking red, white, and black wing patterns.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Aesculapian-Snake', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Aesculapian-Snake</h1>      <p>A non-venomous, large European snake known for its historical symbolism in Greek and Roman mythology, often associated with healing.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Affenpinscher', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Affenpinscher</h1>      <p>A small dog breed with a distinctive monkey-like expression and a shaggy, wiry coat, originally bred for hunting rats.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Afghan-Hound', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Afghan-Hound</h1>      <p>An elegant, tall dog breed with a distinctive long and silky coat, renowned for its speed and independent nature.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/African-Bullfrog', (req, res) => {  res.send(`    <div up-main="modal">      <h1>African-Bullfrog</h1>      <p>One of the largest frogs in Southern Africa, known for its aggressive behavior and ability to survive drought by burrowing underground.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/African-Bush-Elephant', (req, res) => {  res.send(`    <div up-main="modal">      <h1>African-Bush-Elephant</h1>      <p>The largest land mammal on Earth, distinguished by its large tusks, long trunk, and massive body, native to various habitats in Africa.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/African-Civet', (req, res) => {  res.send(`    <div up-main="modal">      <h1>African-Civet</h1>      <p>A nocturnal mammal found in sub-Saharan Africa, known for its musk used in perfumery and its unique coloration.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/African-Clawed-Frog', (req, res) => {  res.send(`    <div up-main="modal">      <h1>African-Clawed-Frog</h1>      <p>A species of aquatic frog native to South Africa, recognizable by its claw-like structures on its hind feet used for tearing apart food.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/African-Elephant', (req, res) => {  res.send(`    <div up-main="modal">      <h1>African-Elephant</h1>      <p>A term that can refer to both the larger African bush elephant and the smaller African forest elephant, both noted for their intelligence and complex social structures.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/African-Fish-Eagle', (req, res) => {  res.send(`    <div up-main="modal">      <h1>African-Fish-Eagle</h1>      <p>A large species of eagle that is a national symbol of multiple countries, known for its distinctive call and fish hunting prowess.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/African-Forest-Elephant', (req, res) => {  res.send(`    <div up-main="modal">      <h1>African-Forest-Elephant</h1>      <p>A smaller, reclusive cousin of the bush elephant, adapted to the dense forests of the Congo Basin with straighter, downward-pointing tusks.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/African-Golden-Cat', (req, res) => {  res.send(`    <div up-main="modal">      <h1>African-Golden-Cat</h1>      <p>A wild cat found in the rainforests of West and Central Africa, elusive and difficult to observe in its natural habitat.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/African-Grey-Parrot', (req, res) => {  res.send(`    <div up-main="modal">      <h1>African-Grey-Parrot</h1>      <p>A highly intelligent bird known for its exceptional ability to mimic human speech, making it one of the most popular avian pets.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/African-Jacana', (req, res) => {  res.send(`    <div up-main="modal">      <h1>African-Jacana</h1>      <p>A wading bird known for its extremely long toes and claws that enable it to walk on floating vegetation in shallow lakes.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/African-Palm-Civet', (req, res) => {  res.send(`    <div up-main="modal">      <h1>African-Palm-Civet</h1>      <p>A small mammal found in the forests of eastern Africa, not a true civet but named for its civet-like appearance and palm tree habitat.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/African-Penguin', (req, res) => {  res.send(`    <div up-main="modal">      <h1>African-Penguin</h1>      <p>Also known as the jackass penguin, this species is distinguished by its black and white plumage and braying call, found on the southern African coast.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/African-Sugarcane-Borer', (req, res) => {  res.send(`    <div up-main="modal">      <h1>African-Sugarcane-Borer</h1>      <p>A moth larva that is a pest of sugarcane crops, known for boring into stems and causing significant agricultural damage.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/African-Tree-Toad', (req, res) => {  res.send(`    <div up-main="modal">      <h1>African-Tree-Toad</h1>      <p>A species of toad that, unlike many others, spends a significant amount of time in trees, found in Central African forests.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/African-Wild-Dog', (req, res) => {  res.send(`    <div up-main="modal">      <h1>African-Wild-Dog</h1>      <p>A highly social and endangered canid species known for its distinctive mottled coat and highly efficient hunting in packs.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Africanized-bee-killer-bee', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Africanized-bee-killer-bee</h1>      <p>A hybrid of African and European honeybees, known for its aggressive behavior and rapid spread throughout the Americas.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Agama-Lizard', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Agama-Lizard</h1>      <p>A group of small to medium-sized colorful lizards found in Africa, characterized by their ability to rapidly change skin color.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Agkistrodon-Contortrix', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Agkistrodon-Contortrix</h1>      <p>A venomous snake commonly known as the copperhead, found in Eastern North America, recognized by its distinctive hourglass banding.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Agouti', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Agouti</h1>      <p>A rodent from Central and South America, similar to a large guinea pig, known for its agility and ability to jump.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Aidi', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Aidi</h1>      <p>A Moroccan dog breed, also known as the Atlas Mountain Dog, which is sturdy and muscular, traditionally used to guard livestock.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Ainu', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Ainu</h1>      <p>A breed of dog from Japan, also known as Hokkaido, with a thick coat, often used for hunting and guarding.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Airedale-Terrier', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Airedale-Terrier</h1>      <p>The largest of the terrier breeds, known as the "King of Terriers," with a wiry coat and energetic personality.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Airedoodle', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Airedoodle</h1>      <p>A hybrid dog breed combining the Airedale Terrier and the Poodle, known for its intelligence and low-shedding coat.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Akbash', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Akbash</h1>      <p>A Turkish breed of dog that serves as a livestock guardian, recognized by its white coat and alert demeanor.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Akita', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Akita</h1>      <p>A large and powerful dog breed with a noble and intimidating presence, originally from Japan.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Akita-Shepherd', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Akita-Shepherd</h1>      <p>A mix between an Akita and a German Shepherd, known for its loyalty and protective instincts.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Alabai-Central-Asian-Shepherd', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Alabai-Central-Asian-Shepherd</h1>      <p>An ancient dog breed from Central Asia, large and strong, used for protecting sheep from predators.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Alaskan-Husky', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Alaskan-Husky</h1>      <p>A type of dog bred primarily for its sled-pulling ability, known for its endurance and good temperament.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Alaskan-Klee-Kai', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Alaskan-Klee-Kai</h1>      <p>A small breed of dog resembling a miniature Husky, known for being active and good with families.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Alaskan-Malamute', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Alaskan-Malamute</h1>      <p>A large, powerful breed of sled dog known for its strength, endurance, and friendly disposition.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Alaskan-Pollock', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Alaskan-Pollock</h1>      <p>A species of fish widely used for food, known for its white flesh and mild flavor, commonly found in the North Pacific.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Alaskan-Shepherd', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Alaskan-Shepherd</h1>      <p>A crossbreed between an Alaskan Malamute and a German Shepherd, known for its strength and companionship.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Albacore-Tuna', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Albacore-Tuna</h1>      <p>A species of tuna with long pectoral fins and a lighter flesh, popular in canned tuna products.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Albatross', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Albatross</h1>      <p>Large seabirds known for their impressive wingspan and their ability to glide on ocean winds for long distances.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Albertonectes', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Albertonectes</h1>      <p>An extinct genus of plesiosaur known for its extremely long neck and aquatic lifestyle during the Late Cretaceous period.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Albino-Amelanistic-Corn-Snake', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Albino-Amelanistic-Corn-Snake</h1>      <p>A corn snake morph lacking pigmentation, resulting in a white or yellowish coloration, popular in the pet trade.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Aldabra-Giant-Tortoise', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Aldabra-Giant-Tortoise</h1>      <p>One of the largest tortoise species, found on the Aldabra Atoll in the Seychelles, known for its long lifespan.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Alligator-Gar', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Alligator-Gar</h1>      <p>A large freshwater fish with a broad snout and armored scales, found in parts of the United States.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Allosaurus', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Allosaurus</h1>      <p>A large carnivorous dinosaur that lived during the Late Jurassic period, known for its large head and sharp teeth.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Alpaca', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Alpaca</h1>      <p>A South American mammal closely related to the llama, valued for its soft and luxurious wool.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Alpine-Dachsbracke', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Alpine-Dachsbracke</h1>      <p>A small hunting dog from Austria, known for its keen sense of smell and sturdy build.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Alpine-Goat', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Alpine-Goat</h1>      <p>A breed of domestic goat known for its good milking ability and adaptability to various climates and environments.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Alusky', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Alusky</h1>      <p>A hybrid of the Alaskan Malamute and Siberian Husky, known for its friendly nature and thick coat.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Amano-Shrimp', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Amano-Shrimp</h1>      <p>A freshwater shrimp species popular in aquariums for its ability to eat large amounts of algae.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Amargasaurus', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Amargasaurus</h1>      <p>A distinct dinosaur known for its two rows of spines along its neck and back, which lived during the Early Cretaceous period.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Amazon-Parrot', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Amazon-Parrot</h1>      <p>A broad term for several parrot species from South America, known for their vibrant colors and exceptional mimicry skills.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Amazon-River-Dolphin-Pink-Dolphin', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Amazon-River-Dolphin-Pink-Dolphin</h1>      <p>A freshwater dolphin species found in the Amazon River, notable for its pink coloration and high intelligence.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Amazon-Tree-Boa', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Amazon-Tree-Boa</h1>      <p>A non-venomous boa species that resides in South American trees, recognized by its slender body and diverse color patterns.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Amazonian-Royal-Flycatcher', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Amazonian-Royal-Flycatcher</h1>      <p>A small, vividly colored bird found in the Amazon rainforest, with an impressive fan-shaped crest.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Amberjack', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Amberjack</h1>      <p>A large species of fish found in warm waters, known for its fighting ability when caught.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Ambrosia-Beetle', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Ambrosia-Beetle</h1>      <p>A wood-boring beetle that spreads fungal spores, which grow into gardens of fungi that the beetles eat.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/American-Alligator', (req, res) => {  res.send(`    <div up-main="modal">      <h1>American-Alligator</h1>      <p>A large reptile endemic to the southeastern United States, often found in freshwater wetlands.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/American-Alsatian', (req, res) => {  res.send(`    <div up-main="modal">      <h1>American-Alsatian</h1>      <p>A large companion dog breed, bred to resemble a dire wolf in appearance with a calm and friendly demeanor.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/American-Bulldog', (req, res) => {  res.send(`    <div up-main="modal">      <h1>American-Bulldog</h1>      <p>A muscular and powerful dog breed, originally used for farm work and now a popular family pet.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/American-Bully', (req, res) => {  res.send(`    <div up-main="modal">      <h1>American-Bully</h1>      <p>A breed of companion dog with a muscular build and a friendly disposition, developed from the American Pit Bull Terrier and other bulldog-type breeds.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/American-Cocker-Spaniel', (req, res) => {  res.send(`    <div up-main="modal">      <h1>American-Cocker-Spaniel</h1>      <p>A breed of sporting dog known for its long ears and happy temperament, popular as a pet and show dog.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/American-Cockroach', (req, res) => {  res.send(`    <div up-main="modal">      <h1>American-Cockroach</h1>      <p>One of the largest species of cockroach, reddish-brown in color, often found in buildings.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/American-Coonhound', (req, res) => {  res.send(`    <div up-main="modal">      <h1>American-Coonhound</h1>      <p>A breed of dog known for its ability to hunt raccoons and its distinctive loud bark.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/American-Dog-Tick', (req, res) => {  res.send(`    <div up-main="modal">      <h1>American-Dog-Tick</h1>      <p>A species of tick that commonly parasitizes dogs, as well as other animals and humans, potentially transmitting diseases.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/American-Eel', (req, res) => {  res.send(`    <div up-main="modal">      <h1>American-Eel</h1>      <p>A species of fish that migrates from freshwater to the Atlantic Ocean to breed, known for its snake-like body.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/American-Eskimo-Dog', (req, res) => {  res.send(`    <div up-main="modal">      <h1>American-Eskimo-Dog</h1>      <p>A small to medium-sized breed of companion dog, with a fluffy white coat and a lively, intelligent character.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/American-Foxhound', (req, res) => {  res.send(`    <div up-main="modal">      <h1>American-Foxhound</h1>      <p>An American breed of dog that is cousin to the English Foxhound, known for its good nose and voice when hunting foxes.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/American-Hairless-Terrier', (req, res) => {  res.send(`    <div up-main="modal">      <h1>American-Hairless-Terrier</h1>      <p>A breed of dog best known for its lack of fur, making it an ideal pet for those with allergies.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/American-Leopard-Hound', (req, res) => {  res.send(`    <div up-main="modal">      <h1>American-Leopard-Hound</h1>      <p>A versatile hunting dog with a spotted coat, known for its treeing ability and loyalty.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/American-Paddlefish', (req, res) => {  res.send(`    <div up-main="modal">      <h1>American-Paddlefish</h1>      <p>A large, smooth-skinned freshwater fish with a paddle-shaped snout, native to the Mississippi River basin.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/American-Pit-Bull-Terrier', (req, res) => {  res.send(`    <div up-main="modal">      <h1>American-Pit-Bull-Terrier</h1>      <p>A breed of dog with a reputation for strength and courage, often caught in the crossfire of breed-specific legislation.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/American-Pugabull', (req, res) => {  res.send(`    <div up-main="modal">      <h1>American-Pugabull</h1>      <p>A cross between a Pug and an American Bulldog, known for its playful personality and sturdy body.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/American-Pygmy-Goat', (req, res) => {  res.send(`    <div up-main="modal">      <h1>American-Pygmy-Goat</h1>      <p>A small domestic goat breed, popular as a friendly and manageable pet or a source of milk on homesteads.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/American-Robin', (req, res) => {  res.send(`    <div up-main="modal">      <h1>American-Robin</h1>      <p>A migratory songbird with a bright red chest, commonly found in North America, known for its melodious song.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/American-Staffordshire-Terrier', (req, res) => {  res.send(`    <div up-main="modal">      <h1>American-Staffordshire-Terrier</h1>      <p>A breed of dog known for its strength and loyalty, often confused with the American Pit Bull Terrier.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/American-Toad', (req, res) => {  res.send(`    <div up-main="modal">      <h1>American-Toad</h1>      <p>A common species of toad found in North America, known for its bumpy skin and the ability to emit a toxin to deter predators.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/American-Water-Spaniel', (req, res) => {  res.send(`    <div up-main="modal">      <h1>American-Water-Spaniel</h1>      <p>A dog breed developed in the United States as a hunting companion, known for its curly coat and agility in water and woods.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/American-Wirehair', (req, res) => {  res.send(`    <div up-main="modal">      <h1>American-Wirehair</h1>      <p>A breed of domestic cat that originated in upstate New York; notable for its wiry coat and friendly nature.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Amethystine-Python-Scrub-Python', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Amethystine-Python-Scrub-Python</h1>      <p>One of the longest snake species native to Australia and Southeast Asia, with a beautiful iridescent sheen.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Amphicoelias-Fragillimus', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Amphicoelias-Fragillimus</h1>      <p>Presumed to be one of the largest dinosaurs ever, it's known only from fragmentary remains, and its exact size remains a topic of debate.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Amur-Leopard', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Amur-Leopard</h1>      <p>One of the world's most endangered big cats, known for its beautiful spotted fur and adapted for cold, snowy environments of the Russian Far East.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Anaconda', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Anaconda</h1>      <p>A group of large, non-venomous snakes found in South America, known for their aquatic lifestyle and immense size.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Anatolian-Shepherd-Dog', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Anatolian-Shepherd-Dog</h1>      <p>A breed of dog that originated in the Anatolia region of central Turkey, used for guarding livestock against predators.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Anchovies', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Anchovies</h1>      <p>Small, common saltwater forage fish, known for their significant role in the marine food chain and as a human food source.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Andrewsarchus', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Andrewsarchus</h1>      <p>An extinct mammal that lived during the Eocene epoch, believed to be one of the largest carnivorous land mammals.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Angelfish', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Angelfish</h1>      <p>A term that can refer to several species of freshwater or marine fish known for their flattened bodies and vivid patterns.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Angelshark', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Angelshark</h1>      <p>A genus of sharks that have a flattened body and broad pectoral fins, resembling rays and skates.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Angled-Sunbeam-Caterpillar', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Angled-Sunbeam-Caterpillar</h1>      <p>A caterpillar known for its unique defensive posture, where it raises its head and tail in a way that resembles a small snake.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Anglerfish', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Anglerfish</h1>      <p>A deep-sea fish known for its luminescent lure used to attract prey in the darkness of the ocean depths.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Angora-Ferret', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Angora-Ferret</h1>      <p>A type of ferret with long, silky hair, which is a result of a genetic mutation, often bred for its unique appearance.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Angora-Goat', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Angora-Goat</h1>      <p>A breed of domestic goat known for its long, silky wool called mohair, originally from the Ankara region in Turkey.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Anhinga', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Anhinga</h1>      <p>A water bird found in warmer parts of the Americas, known for its swimming ability and sharp, pointed bill.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Annas-Hummingbird', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Annas-Hummingbird</h1>      <p>A medium-sized hummingbird native to the west coast of North America, noted for the male's remarkable iridescent red crown and throat.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Anole-Lizard', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Anole-Lizard</h1>      <p>A diverse group of American lizards known for their ability to change color and the males' prominent dewlaps.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Anomalocaris', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Anomalocaris</h1>      <p>An extinct marine animal from the Cambrian period, considered one of the first apex predators of the prehistoric oceans.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Ant', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Ant</h1>      <p>A widespread group of insects known for their complex social structures and ability to work together in colonies.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Antarctic-Scale-Worm', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Antarctic-Scale-Worm</h1>      <p>A type of marine worm found in the cold waters of the Antarctic, known for its scales which cover the back like shingles on a roof.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Anteater', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Anteater</h1>      <p>A term commonly referring to the four species of animals known for eating ants and termites, characterized by their elongated snouts.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Antelope', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Antelope</h1>      <p>A group of hoofed animals native to various regions in Africa and Eurasia, known for their speed and agility.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Anteosaurus', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Anteosaurus</h1>      <p>An extinct genus of carnivorous therapsid that lived during the Middle Permian period, known for its bulky body and large skull.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Antiguan-Racer-Snake', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Antiguan-Racer-Snake</h1>      <p>One of the world's rarest snakes, native to a few small islands in the Caribbean, now recovering from the brink of extinction.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Aoudad-Sheep', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Aoudad-Sheep</h1>      <p>A wild sheep species native to rocky areas in North Africa, with a distinctive mane and curved horns.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Ape', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Ape</h1>      <p>A group of primates that includes gibbons, orangutans, gorillas, chimpanzees, and humans, known for their intelligence and lack of a tail.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Apennine-Wolf', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Apennine-Wolf</h1>      <p>A subspecies of grey wolf native to the Italian Peninsula, known for its adaptability to diverse habitats.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Appenzeller-Dog', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Appenzeller-Dog</h1>      <p>A medium-sized herding dog from Switzerland, known for its tri-color coat and lively, intelligent nature.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Apple-Head-Chihuahua', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Apple-Head-Chihuahua</h1>      <p>A type of Chihuahua with a round, apple-shaped head, which is a breed standard characteristic.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Apple-Moth', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Apple-Moth</h1>      <p>A moth species whose caterpillars are considered pests because they feed on apple leaves and can damage crops.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Arabian-Cobra', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Arabian-Cobra</h1>      <p>A venomous cobra species found on the Arabian Peninsula, known for its potential aggressiveness when threatened.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Arabian-Cobra', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Arabian-Cobra</h1>      <p>The Arabian Cobra is a venomous snake known for its striking appearance, with a hood and distinctive patterns on its scales. It is found in arid regions of the Arabian Peninsula and is known for its potent venom.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Arabian-Wolf', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Arabian-Wolf</h1>      <p>The Arabian Wolf is a subspecies of the gray wolf native to the Arabian Peninsula. It has a sandy or light gray coat and is adapted to desert environments. It's a social carnivore known for its hunting prowess.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Arafura-File-Snake', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Arafura-File-Snake</h1>      <p>The Arafura File Snake is a non-venomous snake found in northern Australia and New Guinea. It is named for the ridges on its scales, giving it a file-like appearance. It's an aquatic snake that preys on fish.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Arapaima', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Arapaima</h1>      <p>The Arapaima is a massive freshwater fish native to the Amazon Basin. It is one of the largest freshwater fish in the world, known for its size and powerful leaping ability. It has bony scales and breathes air.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Archaeopteryx', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Archaeopteryx</h1>      <p>Archaeopteryx is an ancient bird-like dinosaur known for its transitional features between reptiles and birds. It lived during the Late Jurassic period and had feathers, wings, and teeth, resembling a small bird.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Archelon-Turtle', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Archelon-Turtle</h1>      <p>Archelon was a giant prehistoric sea turtle that lived during the Late Cretaceous period. It was one of the largest turtles ever, with a shell measuring over 13 feet in length. It was a marine reptile.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Arapaima', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Arapaima</h1>      <p>The Arapaima is a massive freshwater fish native to the Amazon Basin. It is one of the largest freshwater fish in the world, known for its size and powerful leaping ability. It has bony scales and breathes air.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Archaeoindris', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Archaeoindris</h1>      <p>Archaeoindris, also known as the "elephant bird," was a massive flightless bird that lived in Madagascar. It was one of the heaviest birds to have ever existed, with a tall, ostrich-like appearance. It went extinct around 1,000 years ago.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Archaeotherium', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Archaeotherium</h1>      <p>Archaeotherium is an extinct genus of prehistoric mammals that resembled a large bear-dog. It lived during the Miocene and Oligocene epochs. It had a robust build and was a carnivorous predator.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Argentavis-Magnificens', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Argentavis-Magnificens</h1>      <p>Argentavis Magnificens was an extinct giant bird that lived during the Miocene epoch. It is considered one of the largest flying birds ever known, with a wingspan that could reach up to 23 feet. It was a formidable predator in the prehistoric skies.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Argentine-Black-and-White-Tegu', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Argentine-Black-and-White-Tegu</h1>      <p>The Argentine Black and White Tegu is a large lizard native to South America. It is known for its distinctive black and white coloration and is a popular pet reptile. It is an omnivore and can grow quite large, with a strong, muscular body.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Argentine-Horned-Frog', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Argentine-Horned-Frog</h1>      <p>The Argentine Horned Frog, also known as the Pac-Man Frog, is a distinctive frog species known for its large mouth and round shape, resembling the video game character Pac-Man. It has a voracious appetite and is an ambush predator.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Argentinosaurus', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Argentinosaurus</h1>      <p>Argentinosaurus was a massive, long-necked dinosaur that lived during the Late Cretaceous period in what is now Argentina. It is considered one of the largest dinosaurs ever discovered, with estimates of its length reaching over 100 feet. It was a herbivore.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Arizona-Bark-Scorpion', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Arizona-Bark-Scorpion</h1>      <p>The Arizona Bark Scorpion is a venomous scorpion found in the southwestern United States, particularly Arizona. It is known for its small size and potent venom, which can be painful but is usually not lethal to humans. It is a nocturnal predator.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Arizona-Black-Rattlesnake', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Arizona-Black-Rattlesnake</h1>      <p>The Arizona Black Rattlesnake is a venomous snake found in the southwestern United States, including Arizona. It is named for its dark black coloration and distinctive rattling tail. It is a pit viper known for its potent venom and is often encountered in desert habitats.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Arizona-Blonde-Tarantula', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Arizona-Blonde-Tarantula</h1>      <p>The Arizona Blonde Tarantula is a large, hairy spider species found in the deserts of the southwestern United States, including Arizona. It is known for its blonde or light-colored hair and is a non-aggressive spider that preys on insects. It is a popular tarantula species in the pet trade.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Arizona-Coral-Snake', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Arizona-Coral-Snake</h1>      <p>The Arizona Coral Snake is a venomous snake found in the southwestern United States, including Arizona. It has vibrant red, yellow, and black bands on its body, making it resemble the venomous coral snake. It is a reclusive snake and has potent neurotoxic venom.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Armadillo', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Armadillo</h1>      <p>The Armadillo is a small mammal known for its distinctive armored shell made of bony plates. There are several species of armadillos, and they are found in the Americas. They have a habit of rolling into a ball when threatened, providing protection against predators.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Armadillo-Lizard', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Armadillo-Lizard</h1>      <p>The Armadillo Lizard is a reptile known for its resemblance to an armadillo due to its bony plated scales. It is found in South Africa and is adapted to arid environments. It has a unique defense mechanism of curling into a ball when threatened, similar to armadillos.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Armenian-Gampr', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Armenian-Gampr</h1>      <p>The Armenian Gampr is a breed of livestock guardian dog originating from Armenia. It is known for its strength, protective nature, and loyalty. These dogs have been used for centuries to protect livestock from predators such as wolves and bears.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Armored-Catfish', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Armored-Catfish</h1>      <p>Armored Catfish is a family of freshwater fish known for their distinctive armor-like bony plates covering their bodies. They are primarily found in South America and are bottom-dwelling fish. They are popular in the aquarium trade and come in various species.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Armyworm', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Armyworm</h1>      <p>Armyworms are a type of caterpillar that are known for their mass migration behavior. They are destructive agricultural pests that can quickly consume crops. They get their name from their habit of marching in large groups, resembling an army on the move.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Arsinoitherium', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Arsinoitherium</h1>      <p>Arsinoitherium was an extinct prehistoric mammal that lived during the Eocene epoch. It was a massive, rhinoceros-like creature with two large horn-like structures on its head. It was herbivorous and roamed in what is now Africa.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Arthropleura', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Arthropleura</h1>      <p>Arthropleura was an extinct prehistoric arthropod that lived during the Carboniferous period. It was one of the largest land-dwelling arthropods, resembling a giant millipede. It had a segmented body and was an herbivore, feeding on vegetation in ancient forests.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Aruba-Rattlesnake', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Aruba-Rattlesnake</h1>      <p>The Aruba Rattlesnake is a venomous snake species found on the island of Aruba in the Caribbean. It is known for its small size and distinctive coloration, with yellow and black bands on its tail. It is a pit viper with venomous fangs and is endemic to Aruba.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Ashy-Mining-Bee', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Ashy-Mining-Bee</h1>      <p>The Ashy Mining Bee is a type of solitary bee known for its ashy or grayish appearance. They are important pollinators and are commonly found in gardens and meadows. These bees nest in the ground and play a crucial role in pollinating various plants.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Asian-Arowana', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Asian-Arowana</h1>      <p>The Asian Arowana, also known as the Dragon Fish, is a highly prized and expensive fish species native to Southeast Asia. It is known for its vibrant colors and elongated body. It is considered a symbol of good luck and prosperity in some Asian cultures.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Asian-Carp', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Asian-Carp</h1>      <p>Asian Carp refers to several species of invasive fish originally from Asia. They have become a significant ecological problem in parts of North America, where they outcompete native species for resources. They are known for their leaping behavior when startled by boats.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Asian-Cockroach', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Asian-Cockroach</h1>      <p>The Asian Cockroach is a species of cockroach that is similar in appearance to the German cockroach. It is known for its ability to fly, which distinguishes it from many other cockroach species. It is considered a household pest in some regions.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Asian-Elephant', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Asian-Elephant</h1>      <p>The Asian Elephant is one of the largest land mammals and is native to various parts of Asia. It is characterized by its large size, trunk, and distinctive ears. Asian elephants are highly intelligent and have been used for various purposes, including logging and transportation.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Asian-Giant-Hornet', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Asian-Giant-Hornet</h1>      <p>The Asian Giant Hornet, also known as the "murder hornet," is a large and aggressive hornet species native to Asia. It is known for its potent sting, which can be dangerous to humans. It is a social insect that preys on other insects and is a threat to honeybee populations.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Asian-Lady-Beetle', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Asian-Lady-Beetle</h1>      <p>The Asian Lady Beetle, also known as the Asian Ladybug, is a species of lady beetle originally from Asia. It is often introduced as a biological control agent to manage aphid populations. It is known for its distinctive spotted appearance and is beneficial in agriculture.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Asian-Longhorn-Beetle', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Asian-Longhorn-Beetle</h1>      <p>The Asian Longhorn Beetle is a large beetle species native to Asia. It is known for its long antennae and striking black-and-white striped pattern on its body. It is considered an invasive species in some regions and can cause damage to trees by tunneling into wood.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Asian-Palm-Civet', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Asian-Palm-Civet</h1>      <p>The Asian Palm Civet is a small mammal found in Asia. It is known for its unique feeding behavior, as it consumes coffee cherries and later excretes the beans. These beans are used to produce a specialty coffee known as "civet coffee" or "kopi luwak."</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Asian-Vine-Snake', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Asian-Vine-Snake</h1>      <p>The Asian Vine Snake is a slender, arboreal snake species found in South and Southeast Asia. It has a vine-like appearance and is highly adapted to life in trees. It is mildly venomous and preys on small vertebrates and insects. It is known for its cryptic coloration.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Asian-Water-Monitor', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Asian-Water-Monitor</h1>      <p>The Asian Water Monitor is a large species of monitor lizard found in various parts of Asia. It is known for its semi-aquatic lifestyle and can often be seen near water bodies. It is a carnivorous reptile that preys on a variety of animals, including fish and birds.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Asiatic-Black-Bear', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Asiatic-Black-Bear</h1>      <p>The Asiatic Black Bear, also known as the Moon Bear, is a bear species native to Asia. It is characterized by its black fur and distinctive white crescent-shaped patch on its chest. It is an omnivore that inhabits forests and mountainous regions.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Asp', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Asp</h1>      <p>The Asp is a venomous snake species found in Europe, particularly in the Mediterranean region. It is known for its slender body and potent venom, which was historically associated with causing death. The name "Asp" has historical significance and has been referenced in literature and mythology.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Asp-Caterpillar', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Asp-Caterpillar</h1>      <p>The Asp Caterpillar, also known as the Southern Flannel Moth Caterpillar, is a caterpillar species found in North and Central America. It is covered in dense, hair-like structures and has a deceptively cute appearance. However, its hairs contain venom that can cause severe pain and skin irritation.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Assassin-Bug', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Assassin-Bug</h1>      <p>Assassin Bugs are a diverse group of insects known for their predatory behavior. They often hunt other insects and have a sharp, elongated mouthpart used to inject venom into their prey. Some species are known for transmitting diseases to humans.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Assassin-Snail', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Assassin-Snail</h1>      <p>The Assassin Snail is a freshwater snail known for its unique feeding behavior. It preys on other snails by drilling a hole into their shells and consuming the soft tissues inside. It is a popular aquarium snail used to control pest snail populations.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Atlantic-Cod', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Atlantic-Cod</h1>      <p>The Atlantic Cod is a species of fish found in the North Atlantic Ocean. It is known for its importance in commercial fishing and has been a staple food source for centuries. It has a distinctive white flesh and is used in various culinary dishes.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Atlantic-Salmon', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Atlantic-Salmon</h1>      <p>The Atlantic Salmon is a highly sought-after fish species known for its migratory behavior. It is born in freshwater rivers, migrates to the ocean to grow, and returns to its natal river to spawn. It has a characteristic pink flesh and is a popular choice in seafood cuisine.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Atlantic-Sturgeon', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Atlantic-Sturgeon</h1>      <p>The Atlantic Sturgeon is a prehistoric-looking fish species found in the Atlantic Ocean and associated rivers. It is known for its elongated body and bony plates (scutes). Atlantic Sturgeons are ancient fish with a unique life cycle and have been overfished for their roe (caviar).</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Atlas-Beetle', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Atlas-Beetle</h1>      <p>The Atlas Beetle is a large and impressive beetle species found in tropical rainforests of Southeast Asia. It is one of the largest beetle species in the world, known for its robust body and impressive horns. It is a symbol of strength and is often collected by entomologists.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Atlas-Moth', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Atlas-Moth</h1>      <p>The Atlas Moth is one of the largest moth species in the world, native to Southeast Asia. It is known for its enormous wingspan and striking patterns on its wings. The adult moths have a short lifespan and are often seen at night, while the larvae are voracious eaters.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Aurochs', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Aurochs</h1>      <p>The Aurochs was an extinct wild cattle species that once roamed across Europe, Asia, and North Africa. It was one of the ancestors of modern domestic cattle breeds. Aurochs were massive and robust animals, with long, curved horns. They went extinct in the 17th century.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Aussiedoodle', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Aussiedoodle</h1>      <p>The Aussiedoodle is a crossbreed dog resulting from a mix between an Australian Shepherd and a Poodle. It is known for its intelligence, playful nature, and wavy or curly coat. Aussiedoodles are popular as family pets and often excel in dog sports and training.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Aussiedor', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Aussiedor</h1>      <p>The Aussiedor is a mixed breed dog resulting from a cross between an Australian Shepherd and a Labrador Retriever. It combines the herding and retrieving instincts of both</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Aussiepom', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Aussiepom</h1>      <p>The Aussiepom is a small dog breed resulting from a cross between an Australian Shepherd and a Pomeranian. It typically has a fluffy coat and inherits traits from both parent breeds, including intelligence and agility.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Australian-Bulldog', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Australian-Bulldog</h1>      <p>The Australian Bulldog is a medium-sized breed known for its muscular build, wrinkled face, and distinctive appearance. It's a friendly and loyal companion dog that was developed in Australia.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Australian-Cattle-Dog', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Australian-Cattle-Dog</h1>      <p>The Australian Cattle Dog, also known as the Blue Heeler, is a working dog breed. It is highly energetic and intelligent, often used for herding cattle. It has a blue or red coat with distinctive markings.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Australian-Cockroach', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Australian-Cockroach</h1>      <p>The Australian Cockroach is a large species of cockroach found in Australia. It has a reddish-brown coloration and is known for its ability to fly. It's one of the most common cockroach species in Australian households.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Australian-Firehawk', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Australian-Firehawk</h1>      <p>The Australian Firehawk is a term used to describe various raptor species in Australia, such as the Black Kite and Whistling Kite. These birds are known to carry burning sticks to spread wildfires, a behavior observed in some regions.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Australian-Flathead-Perch', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Australian-Flathead-Perch</h1>      <p>The Australian Flathead Perch is a fish species found in coastal waters of Australia. It has a flat, elongated body with a large mouth and is popular among anglers for its delicious meat.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Australian-Gecko', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Australian-Gecko</h1>      <p>Australian Geckos are a diverse group of small lizards found throughout Australia. They are known for their ability to climb vertical surfaces and have adhesive toe pads. Geckos are nocturnal and insectivorous.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Australian-Kelpie-Dog', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Australian-Kelpie-Dog</h1>      <p>The Australian Kelpie is a highly skilled herding dog breed known for its intelligence and agility. It is often used for working livestock, especially sheep. Kelpies have a strong work ethic and are energetic.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Australian-Labradoodle', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Australian-Labradoodle</h1>      <p>The Australian Labradoodle is a crossbreed dog known for its friendly and sociable nature. It's a mix of Labrador Retriever and Poodle, bred for its hypoallergenic coat and suitability as a family pet.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Australian-Mist', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Australian-Mist</h1>      <p>The Australian Mist, also known as the Spotted Mist, is a cat breed originating from Australia. It has a short coat with distinctive spots and is known for its gentle and affectionate personality.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Australian-Retriever', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Australian-Retriever</h1>      <p>The Australian Retriever is a mixed-breed dog resulting from a cross between an Australian Shepherd and a Golden Retriever. It inherits the intelligence and herding instincts of the Australian Shepherd.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Australian-Shepherd', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Australian-Shepherd</h1>      <p>The Australian Shepherd is a herding dog breed known for its intelligence and agility. Despite the name, it originated in the United States and is highly skilled in tasks like herding and agility competitions.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Australian-Shepherd-Mix', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Australian-Shepherd-Mix</h1>      <p>Australian Shepherd Mix dogs are crossbreeds that include an Australian Shepherd as one of the parent breeds. They can inherit various traits from their mixed heritage, making them unique and versatile.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Australian-Terrier', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Australian-Terrier</h1>      <p>The Australian Terrier is a small terrier breed originating from Australia. It has a wiry coat and a lively, spirited personality. Australian Terriers were originally bred for vermin hunting and companionship.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Australopithecus', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Australopithecus</h1>      <p>Australopithecus is an extinct genus of hominins that lived in Africa between 2 and 4 million years ago. They are considered ancestral to the human lineage and are known for their bipedalism and ape-like features.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Australorp-Chicken', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Australorp-Chicken</h1>      <p>The Australorp Chicken is a breed of domestic chicken developed in Australia. It is known for its excellent egg-laying abilities and has black feathers with a greenish sheen. Australorps are popular in poultry farming.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Avocet', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Avocet</h1>      <p>Avocets are elegant wading birds known for their long, slender legs and distinctive upturned bills. They are often found in wetlands and shallow waters, where they use their bills to forage for aquatic insects.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Axanthic-Ball-Python', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Axanthic-Ball-Python</h1>      <p>The Axanthic Ball Python is a color morph of the Ball Python snake. It lacks yellow pigmentation, resulting in a gray or silver appearance. These snakes are popular in the pet trade due to their unique coloration.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Axolotl', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Axolotl</h1>      <p>The Axolotl is a unique amphibian species native to Mexico. It is known for its neotenic characteristics, which means it retains its aquatic larval form throughout its life. Axolotls have regenerative abilities.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Ayam-Cemani', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Ayam-Cemani</h1>      <p>The Ayam Cemani is a rare and exotic breed of chicken originating from Indonesia. It is entirely black, including its feathers, skin, and internal organs. Ayam Cemani chickens are prized for their unique appearance.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Aye-aye', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Aye-aye</h1>      <p>The Aye-aye is a rare and unusual primate found in Madagascar. It has a long, bony middle finger used for tapping on trees to locate insect larvae. Aye-ayes are nocturnal and have a distinctive appearance.</p>      <!-- More HTML content -->    </div>  `);}); 
app.get('/Azawakh', (req, res) => {  res.send(`    <div up-main="modal">      <h1>Azawakh</h1>      <p>The Azawakh is a sighthound breed originating from West Africa. It is known for its slender and elegant appearance, with a short coat. Azawakhs are used for hunting and have a gentle and loyal temperament.</p>      <!-- More HTML content -->    </div>  `);}); 


app.listen(3000) // listen for requests on port 3000