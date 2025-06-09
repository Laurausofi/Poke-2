const mainView = document.getElementById('main-view');
const detailView = document.getElementById('detail-view');
const pokemonGrid = document.getElementById('pokemon-grid');
const pokemonDetail = document.getElementById('pokemon-detail');
const backBtn = document.getElementById('back-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;

const myPokemons = [
  {
    id: 1,
    name: "Lillipup",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/506.png",
    description: "Altura: 0,4 m Peso: 4,1 kg Tipo: Normal",
  },
  {
    id: 2,
    name: "Charmeleon",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/005.png",
    description: "Altura: 1,1 m Peso: 19 kg Tipo: Fuego",
  },
  {
    id: 3,
    name: "Castform",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/351.png",
    description: "Altura: 0,3 m Peso: 0,8 kg Tipo: Normal",
  },
  {
    id: 4,
    name: "Seedot",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/273.png",
    description: "Altura: 0,5 m Peso: 4 kg Tipo: Planta",
  },
  {
    id: 5,
    name: "Lotad",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/270.png",
    description: "Altura: 0,5 m Peso: 2,6 kg Tipo: Agua - Planta",
  },
  {
    id: 6,
    name: "Excadrill",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/530.png",
    description: "Altura: 0,7 m Peso: 40,4 kg Tipo: Tierra - Acero",
  },
  {
    id: 7,
    name: "Zubat",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/041.png",
    description: "Altura: 0,8 m Peso: 7,5 kg Tipo: Veneno - Volador",
  },
  {
    id: 8,
    name: "Ribombee",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/743.png",
    description: "Altura: 0,2 m Peso: 0,5 kg Tipo: Bicho - Hada",
  },
  {
    id: 9,
    name: "Hydrapple",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/1019.png",
    description: "Altura: 1,8 m Peso: 93 kg Tipo: Dragón - Planta",
  },
  {
    id: 10,
    name: "Clefairy",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/035.png",
    description: "Altura: 0,6 m Peso: 7,5 kg Tipo: Hada",
  },
  {
    id: 11,
    name: "Boltund",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/836.png",
    description: "Altura: 1 m Peso: 34 kg Tipo: Eléctrico",
  },
  {
    id: 12,
    name: "Helioptile",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/694.png",
    description: "Altura: 0,5 m Peso: 6 kg Tipo: Eléctrico - Normal",
  },
  {
    id: 13,
    name: "Poochyena",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/261.png",
    description: "Altura: 0,5 m Peso: 13,6 kg Tipo: Siniestro",
  },
  {
    id: 14,
    name: "Scorbunny",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/813.png",
    description: "Altura: 0,3 m Peso: 4,5 kg Tipo: Fuego",
  },
  {
    id: 15,
    name: "Gossifleur",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/829.png",
    description: "Altura: 0,4 m Peso: 2,2 kg Tipo: Planta",
  },
  {
    id: 16,
    name: "Poliwag",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/060.png",
    description: "Altura: 0,6 m Peso: 12,4 kg Tipo: Agua",
  },
  {
    id: 17,
    name: "Squawkabilly",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/931.png",
    description: "Altura: 0,6 m Peso: 2,4 kg Tipo: Normal - Volador",
  },
  {
    id: 18,
    name: "Gliscor",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/472.png",
    description: "Altura: 2 m Peso: 42,5 kg Tipo: Tierra - Volador",
  },
  {
    id: 19,
    name: "Snom",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/872.png",
    description: "Altura: 0,3 m Peso: 3,8 kg Tipo: Hielo - Bicho",
  },
  {
    id: 20,
    name: "Croagunk",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/453.png",
    description: "Altura: 0,7 m Peso: 23 kg Tipo: Veneno - Lucha",
  },
  {
    id: 21,
    name: "Larvesta",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/636.png",
    description: "Altura: 1,1 m Peso: 28,8 kg Tipo: Bicho - Fuego",
  },
  {
    id: 22,
    name: "Stunfisk",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/618.png",
    description: "Altura: 0,7 m Peso: 11 kg Tipo: Tierra - Eléctrico",
  },
  {
    id: 23,
    name: "Unown",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/201.png",
    description: "Altura: 0,5 m Peso: 5 kg Tipo: Psíquico",
  },
  {
    id: 24,
    name: "Muk",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/089.png",
    description: "Altura: 1,2 m Peso: 30 kg Tipo: Veneno",
  },
  {
    id: 25,
    name: "Pincurchin",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/871.png",
    description: "Altura: 0,3 m Peso: 1 kg Tipo: Eléctrico",
  },
  {
    id: 26,
    name: "Croconaw",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/159.png",
    description: "Altura: 1,1 m Peso: 25 kg Tipo: Agua",
  },
  {
    id: 27,
    name: "Steelix",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/208.png",
    description: "Altura: 9,2 m Peso: 400 kg Tipo: Acero - Tierra",
  },
  {
    id: 28,
    name: "Swoobat",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/528.png",
    description: "Altura: 0,9 m Peso: 10,5 kg Tipo: Psíquico - Volador",
  },
  {
    id: 29,
    name: "Magby",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/240.png",
    description: "Altura: 0,7 m Peso: 21,4 kg Tipo: Fuego",
  },
  {
    id: 30,
    name: "Toxtricity",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/849.png",
    description: "Altura: 1,6 m Peso: 40 kg Tipo: Eléctrico - Veneno",
  },
  {
    id: 31,
    name: "Snorunt",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/361.png",
    description: "Altura: 0,7 m Peso: 16,8 kg Tipo: Hielo",
  },
  {
    id: 32,
    name: "Illumise",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/314.png",
    description: "Altura: 0,6 m Peso: 17,7 kg Tipo: Bicho",
  },
  {
    id: 33,
    name: "Sandile",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/551.png",
    description: "Altura: 0,7 m Peso: 15,2 kg Tipo: Tierra - Siniestro",
  },
  {
    id: 34,
    name: "Koraidon",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/1007.png",
    description: "Altura: 2,5 m Peso: 303 kg Tipo: Dragón - Lucha",
  },
  {
    id: 35,
    name: "Pancham",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/674.png",
    description: "Altura: 0,6 m Peso: 8 kg Tipo: Lucha",
  },
  {
    id: 36,
    name: "Mightyena",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/262.png",
    description: "Altura: 1 m Peso: 37 kg Tipo: Siniestro",
  },
  {
    id: 37,
    name: "Grookey",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/810.png",
    description: "Altura: 0,3 m Peso: 5 kg Tipo: Planta",
  },
  {
    id: 38,
    name: "Cursola",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/864.png",
    description: "Altura: 1 m Peso: 0,4 kg Tipo: Fantasma",
  },
  {
    id: 39,
    name: "Starmie",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/121.png",
    description: "Altura: 1,1 m Peso: 80 kg Tipo: Agua - Psíquico",
  },
  {
    id: 40,
    name: "Dottler",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/825.png",
    description: "Altura: 0,4 m Peso: 19,5 kg Tipo: Bicho - Psíquico",
  },
  {
    id: 41,
    name: "Komala",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/775.png",
    description: "Altura: 0,4 m Peso: 19,9 kg Tipo: Normal",
  },
  {
    id: 42,
    name: "Bidoof",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/399.png",
    description: "Altura: 0,5 m Peso: 20 kg Tipo: Normal",
  },
  {
    id: 43,
    name: "Vanillish",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/583.png",
    description: "Altura: 1,1 m Peso: 41 kg Tipo: Hielo",
  },
  {
    id: 44,
    name: "Ferroseed",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/597.png",
    description: "Altura: 0,6 m Peso: 18,8 kg Tipo: Planta - Acero",
  },
  {
    id: 45,
    name: "Minun",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/312.png",
    description: "Altura: 0,4 m Peso: 4,2 kg Tipo: Eléctrico",
  },
  {
    id: 46,
    name: "Woobat",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/527.png",
    description: "Altura: 0,4 m Peso: 2,1 kg Tipo: Psíquico - Volador",
  },
  {
    id: 47,
    name: "Hoopa",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/720.png",
    description: "Altura: 0,5 m Peso: 9 kg Tipo: Psíquico - Fantasma",
  },
  {
    id: 48,
    name: "Metagross",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/376.png",
    description: "Altura: 1,6 m Peso: 550 kg Tipo: Acero - Psíquico",
  },
  {
    id: 49,
    name: "Finneon",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/456.png",
    description: "Altura: 0,4 m Peso: 7 kg Tipo: Agua",
  },
  {
    id: 50,
    name: "Floette",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/670.png",
    description: "Altura: 0,2 m Peso: 0,9 kg Tipo: Hada",
  },
  {
    id: 51,
    name: "Eelektrik",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/603.png",
    description: "Altura: 1,2 m Peso: 22 kg Tipo: Eléctrico",
  },
  {
    id: 52,
    name: "Trumbeak",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/732.png",
    description: "Altura: 0,6 m Peso: 14,8 kg Tipo: Normal - Volador",
  },
  {
    id: 53,
    name: "Ninetales",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/038.png",
    description: "Altura: 1,1 m Peso: 19,9 kg Tipo: Fuego",
  },
  {
    id: 54,
    name: "Pupitar",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/247.png",
    description: "Altura: 1,2 m Peso: 152 kg Tipo: Tierra - Roca",
  },
  {
    id: 55,
    name: "Pawmot",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/923.png",
    description: "Altura: 0,9 m Peso: 41 kg Tipo: Eléctrico - Lucha",
  },
  {
    id: 56,
    name: "Deerling",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/585.png",
    description: "Altura: 0,6 m Peso: 19,5 kg Tipo: Normal - Planta",
  },
  {
    id: 57,
    name: "Reuniclus",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/579.png",
    description: "Altura: 1 m Peso: 20,1 kg Tipo: Psíquico",
  },
  {
    id: 58,
    name: "Naclstack",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/933.png",
    description: "Altura: 0,6 m Peso: 105 kg Tipo: Roca",
  },
  {
    id: 59,
    name: "Mimikyu",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/778.png",
    description: "Altura: 0,2 m Peso: 0,7 kg Tipo: Fantasma - Hada",
  },
  {
    id: 60,
    name: "Medicham",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/308.png",
    description: "Altura: 1,3 m Peso: 31,5 kg Tipo: Lucha - Psíquico",
  },
  {
    id: 61,
    name: "Meowstic",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/678.png",
    description: "Altura: 0,6 m Peso: 8,5 kg Tipo: Psíquico",
  },
  {
    id: 62,
    name: "Chinchou",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/170.png",
    description: "Altura: 0,5 m Peso: 12 kg Tipo: Agua - Eléctrico",
  },
  {
    id: 63,
    name: "Glalie",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/362.png",
    description: "Altura: 1,5 m Peso: 256,5 kg Tipo: Hielo",
  },
  {
    id: 64,
    name: "Eldegoss",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/830.png",
    description: "Altura: 0,5 m Peso: 2,5 kg Tipo: Planta",
  },
  {
    id: 65,
    name: "Drampa",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/780.png",
    description: "Altura: 3 m Peso: 185 kg Tipo: Dragón - Normal",
  },
  {
    id: 66,
    name: "Darumaka",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/554.png",
    description: "Altura: 0,6 m Peso: 37,5 kg Tipo: Fuego",
  },
  {
    id: 67,
    name: "Vikavolt",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/738.png",
    description: "Altura: 1,5 m Peso: 45 kg Tipo: Bicho - Eléctrico",
  },
  {
    id: 68,
    name: "Arbok",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/024.png",
    description: "Altura: 3,5 m Peso: 65 kg Tipo: Veneno",
  },
  {
    id: 69,
    name: "Eiscue",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/875.png",
    description: "Altura: 1,4 m Peso: 89 kg Tipo: Hielo",
  },
  {
    id: 70,
    name: "Serperior",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/497.png",
    description: "Altura: 3,3 m Peso: 63 kg Tipo: Planta",
  },
  {
    id: 71,
    name: "Taillow",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/276.png",
    description: "Altura: 0,3 m Peso: 2,3 kg Tipo: Normal - Volador",
  },
  {
    id: 72,
    name: "Gourgeist",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/711.png",
    description: "Altura: 0,9 m Peso: 12,5 kg Tipo: Fantasma - Planta",
  },
  {
    id: 73,
    name: "Clobbopus",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/852.png",
    description: "Altura: 0,6 m Peso: 4 kg Tipo: Lucha",
  },
  {
    id: 74,
    name: "Surskit",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/283.png",
    description: "Altura: 0,5 m Peso: 1,7 kg Tipo: Bicho - Agua",
  },
  {
    id: 75,
    name: "Tangela",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/114.png",
    description: "Altura: 1 m Peso: 35 kg Tipo: Planta",
  },
  {
    id: 76,
    name: "Togekiss",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/468.png",
    description: "Altura: 1,5 m Peso: 38 kg Tipo: Volador - Hada",
  },
  {
    id: 77,
    name: "Skeledirge",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/911.png",
    description: "Altura: 1,6 m Peso: 326,5 kg Tipo: Fuego - Fantasma",
  },
  {
    id: 78,
    name: "Tympole",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/535.png",
    description: "Altura: 0,5 m Peso: 4,5 kg Tipo: Agua",
  },
  {
    id: 79,
    name: "Overqwil",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/904.png",
    description: "Altura: 2,5 m Peso: 60,5 kg Tipo: Siniestro - Veneno",
  },
  {
    id: 80,
    name: "Zacian",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/888.png",
    description: "Altura: 2,8 m Peso: 110 kg Tipo: Hada",
  },
  {
    id: 81,
    name: "Charcadet",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/935.png",
    description: "Altura: 0,6 m Peso: 10,5 kg Tipo: Fuego",
  },
  {
    id: 82,
    name: "Rolycoly",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/837.png",
    description: "Altura: 0,3 m Peso: 12 kg Tipo: Roca",
  },
  {
    id: 83,
    name: "Corvisquire",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/822.png",
    description: "Altura: 0,8 m Peso: 16 kg Tipo: Volador",
  },
  {
    id: 84,
    name: "Ferropúas",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/995.png",
    description: "Altura: 1,6 m Peso: 303 kg Tipo: Roca - Eléctrico",
  },
  {
    id: 85,
    name: "Heatran",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/485.png",
    description: "Altura: 1,7 m Peso: 430 kg Tipo: Fuego - Acero",
  },
  {
    id: 86,
    name: "Crabominable",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/740.png",
    description: "Altura: 1,7 m Peso: 180 kg Tipo: Lucha - Hielo",
  },
  {
    id: 87,
    name: "Togepi",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/175.png",
    description: "Altura: 0,3 m Peso: 1,5 kg Tipo: Hada",
  },
  {
    id: 88,
    name: "Stakataka",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/805.png",
    description: "Altura: 5,5 m Peso: 820 kg Tipo: Roca - Acero",
  },
  {
    id: 89,
    name: "Maushold",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/925.png",
    description: "Altura: 0,3 m Peso: 2,8 kg Tipo: Normal",
  },
  {
    id: 90,
    name: "Swadloon",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/541.png",
    description: "Altura: 0,5 m Peso: 7,3 kg Tipo: Bicho - Planta",
  },
  {
    id: 91,
    name: "Jolteon",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/135.png",
    description: "Altura: 0,8 m Peso: 24,5 kg Tipo: Eléctrico",
  },
  {
    id: 92,
    name: "Pelipper",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/279.png",
    description: "Altura: 1,2 m Peso: 28 kg Tipo: Agua - Volador",
  },
  {
    id: 93,
    name: "Hattrem",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/857.png",
    description: "Altura: 0,6 m Peso: 4,8 kg Tipo:  Psíquico",
  },
  {
    id: 94,
    name: "Varoom",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/965.png",
    description: "Altura: 1 m Peso: 35 kg Tipo: Acero - Veneno",
  },
  {
    id: 95,
    name: "Buneary",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/427.png",
    description: "Altura: 0,4 m Peso: 5,5 kg Tipo: Normal",
  },
  {
    id: 96,
    name: "Chesnaught",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/652.png",
    description: "Altura: 1,6 m Peso: 90 kg Tipo: Planta - Lucha",
  },
  {
    id: 97,
    name: "Hakamo-o ",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/783.png",
    description: "Altura: 1,2 m Peso: 47 kg Tipo: Dragón - Lucha",
  },
  {
    id: 98,
    name: "Floragato",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/907.png",
    description: "Altura: 0,9 m Peso: 12,2 kg Tipo: Planta",
  },
  {
    id: 99,
    name: "Greninja ",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/658.png",
    description: "Altura: 1,5 m Peso: 40 kg Tipo: Agua - Siniestro",
  },
  {
    id: 100,
    name: "Volcanion",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/721.png",
    description: "Altura: 1,7 m Peso: 195 kg Tipo:  Fuego - Agua",
  },
  {
    id: 101,
    name: "Heliolisk",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/695.png",
    description: "Altura: 1 m Peso: 21 kg Tipo: Eléctrico - Normal",
  },
  {
    id: 102,
    name: "Palossand",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/770.png",
    description: "Altura: 1,3 m Peso: 250 kg Tipo: Fantasma - Tierra",
  },
  {
    id: 103,
    name: "Arctozolt",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/881.png",
    description: "Altura: 2,3 m Peso: 150 kg Tipo: Hielo - Eléctrico",
  },
  {
    id: 104,
    name: "Heracross",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/214.png",
    description: "Altura: 1,5 m Peso: 54 kg Tipo: Bicho - Lucha",
  },
  {
    id: 105,
    name: "Chatot",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/441.png",
    description: "Altura: 0,5 m Peso: 1,9 kg Tipo: Normal - Volador",
  },
  {
    id: 106,
    name: "Regigigas",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/486.png",
    description: "Altura: 3,7 m Peso: 420 kg Tipo: Normal",
  },
  {
    id: 107,
    name: "Horsea",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/116.png",
    description: "Altura: 0,4 m Peso: 8 kg Tipo: Agua",
  },
  {
    id: 108,
    name: "Chimchar",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/390.png",
    description: "Altura: 0,5 m Peso: 6,2 kg Tipo: Fuego",
  },
  {
    id: 109,
    name: "Ogerpon",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/1017.png",
    description: "Altura: 1,2 m Peso: 39,8 kg Tipo: Planta",
  },
  {
    id: 110,
    name: "Weepinbell",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/070.png",
    description: "Altura: 1 m Peso: 6,4 kg Tipo: Planta - Veneno",
  },
  {
    id: 111,
    name: "Lickitung ",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/108.png",
    description: "Altura: 1,2 m Peso: 65,5 kg Tipo: Normal",
  },
  {
    id: 112,
    name: "Hawlucha",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/701.png",
    description: "Altura: 0,8 m Peso: 21,5 kg Tipo: Lucha - Volador",
  },
  {
    id: 113,
    name: "Venipede",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/543.png",
    description: "Altura: 0,4 m Peso: 5,3 kg Tipo: Bicho - Veneno",
  },
  {
    id: 114,
    name: "Accelgor",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/617.png",
    description: "Altura: 0,8 m Peso: 25,3 kg Tipo: Bicho",
  },
  {
    id: 115,
    name: "Magearna",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/801.png",
    description: "Altura: 1 m Peso: 80,5 kg Tipo: Acero - Hada",
  },
  {
    id: 116,
    name: "Mantyke",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/458.png",
    description: "Altura: 1 m Peso: 65 kg Tipo: Agua - Volador",
  },
  {
    id: 117,
    name: "Melenaleteo",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/987.png",
    description: "Altura: 1,4 m Peso: 4 kg Tipo: Hada - Fantasma",
  },
  {
    id: 118,
    name: "Darkrai",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/491.png",
    description: "Altura: 1,5 m Peso: 50,5 kg Tipo: Siniestro",
  },
  {
    id: 119,
    name: "Yungoos",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/734.png",
    description: "Altura: 0,4 m Peso: 6 kg Tipo: Normal",
  },
  {
    id: 120,
    name: "Archeops",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/567.png",
    description: "Altura: 1,4 m Peso: 32 kg Tipo: Roca - Volador",
  },
  {
    id: 121,
    name: "Dustox",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/269.png",
    description: "Altura: 1,2 m Peso: 31,6 kg Tipo: Bicho - Veneno",
  },
  {
    id: 122,
    name: "Yamask",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/562.png",
    description: "Altura: 0,5 m Peso: 1,5 kg Tipo: Fantasma",
  },
  {
    id: 123,
    name: "Bruxish",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/779.png",
    description: "Altura: 0,9 m Peso: 19 kg Tipo: Agua - Psíquico",
  },
  {
    id: 124,
    name: "Gumshoos",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/735.png",
    description: "Altura: 0,7 m Peso: 14,2 kg Tipo: Normal",
  },
  {
    id: 125,
    name: "Seaking ",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/119.png",
    description: "Altura: 1,3 m Peso: 39 kg Tipo: Agua",
  },
  {
    id: 126,
    name: "Azelf",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/482.png",
    description: "Altura: 0,3 m Peso: 0,3 kg Tipo: Psíquico",
  },
  {
    id: 127,
    name: "Cyndaquil",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/155.png",
    description: "Altura: 0,5 m Peso: 7,9 kg Tipo: Fuego",
  },
  {
    id: 128,
    name: "Guzzlord",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/799.png",
    description: "Altura: 5,5 m Peso: 888 kg Tipo: Siniestro - Dragón",
  },
  {
    id: 129,
    name: "Calyrex",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/898.png",
    description: "Altura: 1,1 m Peso: 7,7 kg Tipo: Psíquico - Planta",
  },
  {
    id: 130,
    name: "Lileep",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/345.png",
    description: "Altura: 1 m Peso: 23,8 kg Tipo: Roca - Planta",
  },
  {
    id: 131,
    name: "Ondulagua",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/1009.png",
    description: "Altura: 3,5 m Peso: 280 kg Tipo: Agua - Dragón",
  },
  {
    id: 132,
    name: "Toedscruel",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/949.png",
    description: "Altura: 1,9 m Peso: 58 kg Tipo: Tierra - Planta",
  },
  {
    id: 133,
    name: "Kartana",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/798.png",
    description: "Altura: 0,3 m Peso: 0,1 kg Tipo: Planta - Acero",
  },
  {
    id: 134,
    name: "Impidimp",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/859.png",
    description: "Altura: 0,4 m Peso: 5,5 kg Tipo: Siniestro - Hada",
  },
  {
    id: 135,
    name: "Shroomish",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/285.png",
    description: "Altura: 0,4 m Peso: 4,5 kg Tipo: Planta",
  },
  {
    id: 136,
    name: "Toxel",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/848.png",
    description: "Altura: 0,4 m Peso: 11 kg Tipo: Eléctrico - Veneno",
  },
  {
    id: 137,
    name: "Orbeetle",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/826.png",
    description: "Altura: 0,4 m Peso: 40,8 kg Tipo: Bicho - Psíquico",
  },
  {
    id: 138,
    name: "Omastar",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/139.png",
    description: "Altura: 1 m Peso: 35 kg Tipo: Roca - Agua",
  },
  {
    id: 139,
    name: "Delibird",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/225.png",
    description: "Altura: 0,9 m Peso: 16 kg Tipo: Hielo - Volador",
  },
  {
    id: 140,
    name: "Wimpod",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/767.png",
    description: "Altura: 0,5 m Peso: 12 kg Tipo: Bicho - Agua",
  },
  {
    id: 141,
    name: "Skitty",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/300.png",
    description: "Altura: 0,6 m Peso: 11 kg Tipo: Normal",
  },
  {
    id: 142,
    name: "Frosmoth",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/873.png",
    description: "Altura: 1,3 m Peso: 42 kg Tipo: Hielo - Bicho",
  },
  {
    id: 143,
    name: "Prinplup",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/394.png",
    description: "Altura: 0,8 m Peso: 23 kg Tipo: Agua",
  },
  {
    id: 144,
    name: "Meganium",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/154.png",
    description: "Altura: 1,8 m Peso: 100,5 kg Tipo: Planta",
  },
  {
    id: 145,
    name: "Staravia",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/397.png",
    description: "Altura: 0,6 m Peso: 15,5 kg Tipo: Normal - Volador",
  },
  {
    id: 146,
    name: "Raboot ",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/814.png",
    description: "Altura: 0,6 m Peso: 9 kg Tipo: Fuego",
  },
  {
    id: 147,
    name: "Yanmega",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/469.png",
    description: "Altura: 1,9 m Peso: 51,5 kg Tipo: Bicho - Volador",
  },
  {
    id: 148,
    name: "Vullaby",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/629.png",
    description: "Altura: 0,5 m Peso: 9 kg Tipo: Siniestro - Volador",
  },
  {
    id: 149,
    name: "Vileplume",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/045.png",
    description: "Altura: 1,2 m Peso: 18,6 kg Tipo: Planta - Veneno",
  },
  {
    id: 150,
    name: "Numel",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/322.png",
    description: "Altura: 0,7 m Peso: 24 kg Tipo: Fuego - Tierra",
  },
  {
    id: 151,
    name: "Ditto",
    image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/132.png",
    description: "Altura: 0,3 m Peso: 4 kg Tipo: Normal",
  },
  
  
];


myPokemons.forEach((poke, index) => {
  const card = document.createElement('div');
  card.className = 'pokemon-card';
  card.innerHTML = `
    <img src="${poke.image}" height="200" width="300" alt="${poke.name}" />
    <p>#${poke.id} ${poke.name}</p>
  `;
  card.addEventListener('click', () => {
    currentIndex = index;
    showDetail();
  });
  pokemonGrid.appendChild(card);
});

function showDetail() {
  const poke = myPokemons[currentIndex];
  mainView.classList.add('hidden');
  detailView.classList.remove('hidden');
  pokemonDetail.innerHTML = `
    <h2>#${poke.id} ${poke.name}</h2>
    <img src="${poke.image}" alt="${poke.name}" />
    <p>${poke.description}</p>
  `;
}

backBtn.addEventListener('click', () => {
  detailView.classList.add('hidden');
  mainView.classList.remove('hidden');
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    showDetail();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < myPokemons.length - 1) {
    currentIndex++;
    showDetail();
  }
});