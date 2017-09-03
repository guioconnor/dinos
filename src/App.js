import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom';

import abelisaurus from './img/abelisaurus.svg';
import camarosaurus from './img/camarosaurus.svg';
import claosaurus from './img/claosaurus.svg';
import eromangasaurus from './img/eromangasaurus.svg';
import mamenchisaurus from './img/mamenchisaurus.svg';
import spinosaurus from './img/spinosaurus.svg';
import aerosteon from './img/aerosteon.svg';
import camptosaurus from './img/camptosaurus.svg';
import daspletosaurus from './img/daspletosaurus.svg';
import gigantoraptor from './img/gigantoraptor.svg';
import mapusaurus from './img/mapusaurus.svg';
import tyrannosaurusRex from './img/tyrannosaurusRex.svg';
import albertosaurus from './img/albertosaurus.svg';
import carcharodontosaurus from './img/carcharodontosaurus.svg';
import deinonychus from './img/deinonychus.svg';
import giraffatitan from './img/giraffatitan.svg';
import massospondylus from './img/massospondylus.svg';
import allosaurus from './img/allosaurus.svg';
import caudipteryx from './img/caudipteryx.svg';
import dilong from './img/dilong.svg';
import iguanodon from './img/iguanodon.svg';
import megalosaurus from './img/megalosaurus.svg';
import velociraptor from './img/velociraptor.svg';
import archaeopteryx from './img/archaeopteryx.svg';
import centrosaurus from './img/centrosaurus.svg';
import diplodocus from './img/diplodocus.svg';
import irritator from './img/irritator.svg';
import microraptor from './img/microraptor.svg';
import argentinosaurus from './img/argentinosaurus.svg';
import cetiosaurus from './img/cetiosaurus.svg';
import edmontosaurus from './img/edmontosaurus.svg';
import leyesaurus from './img/leyesaurus.svg';
import monoclonius from './img/monoclonius.svg';
import baryonyx from './img/baryonyx.svg';
import chasmosaurus from './img/chasmosaurus.svg';
import elasmosaurus from './img/elasmosaurus.svg';
import magyarosaurus from './img/magyarosaurus.svg';
import plateosaurus from './img/plateosaurus.svg';
import brachiosaurus from './img/brachiosaurus.svg';
import citipati from './img/citipati.svg';
import epidexipteryx from './img/epidexipteryx.svg';
import majungasaurus from './img/majungasaurus.svg';
import pterodactyl from './img/pterodactyl.svg';
import mainIllustration from './img/main-illustration.jpg';
import './App.css';

const dinoData = [
  {
    "image": allosaurus,
    "name": "Allosaurus",
    "pronunciation": "AL-oh-sore-us",
    "meaningOfName": "other lizard",
    "diet": "carnivorous",
    "length": "12m",
    "period": "Late Jurassic",
    "mya": "156-144",
    "info": "Allosaurus was an apex predator in the Late Jurassic in North America."
  },
  {
    // "image": apatosaurus,
    "name": "Apatosaurus",
    "pronunciation": "ah-PAT-oh-sore-us",
    "meaningOfName": "deceptive lizard",
    "diet": "herbivorous",
    "length": "21m",
    "period": "Late Jurassic",
    "mya": "154-145",
    "info": "Named the 'deceptive lizard' because its skull was confused with those of other sauropods until 1909."
  },
  {
    "image": brachiosaurus,
    "name": "Brachiosaurus",
    "pronunciation": "BRAK-ee-oh-sore-us",
    "meaningOfName": "arm lizard",
    "diet": "herbivorous",
    "length": "30m",
    "period": "Late Jurassic",
    "mya": "155-140",
    "info": "Brachiosaurus was a large, North American sauropod dinosaur with an arch encircling its nasal opening."
  },
  {
    // "image": compsognathus,
    "name": "Compsognathus",
    "pronunciation": "komp-sog-NATH-us",
    "meaningOfName": "pretty jaw",
    "diet": "carnivorous",
    "length": "0.65m",
    "period": "Late Jurassic",
    "mya": "145-140",
    "info": "Compsognathus was small and bipedal, roughly the size of a turkey. It lived in Europe and was the first dinosaur genus to be portrayed with feathers."
  },
  {
    // "image": dracorex,
    "name": "Dracorex",
    "pronunciation": "dray-ko-rex",
    "meaningOfName": "dragon king",
    "diet": "herbivorous",
    "length": "estimated 4m",
    "period": "Late Cretaceous",
    "mya": "66",
    "info": "<em>Dracorex hogwartsia</em> was a pachycephalosaur that did not have a domed head. Instead, its skull was adorned with spikes and frills reminiscent of a dragon. A skull was discovered in the Hell Creek Formation in South Dakota and donated to the Children's Museum of Indianapolis in 2004. Its name was inspired by J.K. Rowling's Harry Potter series and the young visitors to the children's museum."
  },
  {
    "image": elasmosaurus,
    "name": "Elasmosaurus",
    "pronunciation": "ee-LAZ-mo-sore-us",
    "meaningOfName": "thin plate lizard",
    "diet": "carnivorous",
    "length": "14m",
    "period": "Late Cretaceous",
    "mya": "80.5",
    "info": "Elasmosaurus was an aquatic dinosaur with an extremely long neck that likely fed on other smaller aquatic fauna like fish, molluscs, and squid. E.D. Cope mistakenly placed the skull of an Elasmosaurus on the much shorter tail rather than the extremely long neck."
  },
  {
    "image": giraffatitan,
    "name": "Giraffatitan",
    "pronunciation": "ji-raf-e-tie-tan",
    "meaningOfName": "giraffe titan",
    "diet": "herbivorous",
    "length": "23m",
    "period": "Late Jurassic",
    "mya": "154-142",
    "info": "Giraffatitan was a large sauropod related to Brachiosaurus with huge nostrils and nasal openings in its skull."
  },
  {
    // "image": indosuchus,
    "name": "Indosuchus",
    "pronunciation": "in-doh-sook-us",
    "meaningOfName": "Indian crocodile",
    "diet": "carnivorous",
    "length": "7m",
    "period": "Late Cretaceous",
    "mya": "70-66",
    "info": "Indosuchus had a flattened crest on its skull."
  },
  {
    // "image": jingshanosaurus,
    "name": "Jingshanosaurus",
    "pronunciation": "jing-shahn-oh-sore-us",
    "meaningOfName": "Jingshan lizard",
    "diet": "herbivorous",
    "length": "5m",
    "period": "Early Jurassic",
    "mya": "205-190",
    "info": "Jingshanosaurus was one of the last prosauropods, a long-necked herbivore able to walk on two legs."
  },
  {
    // "image": khaan,
    "name": "Khaan",
    "pronunciation": "kahn",
    "meaningOfName": "ruler",
    "diet": "omnivorous",
    "length": "1.8m",
    "period": "Late Cretaceous",
    "mya": "81-75",
    "info": "Khaan was an oviraptor with a parrot-like beak, discovered in Mongolia."
  },
  {
    // "image": minmi,
    "name": "Minmi",
    "pronunciation": "min-mie",
    "meaningOfName": "Minmi Crossing, Queensland, Australia",
    "diet": "herbivorous",
    "length": "3m",
    "period": "Early Cretaceous",
    "mya": "121-112",
    "info": "Minmi was a small, anklyosaurian, armored dinosaur discovered in Australia."
  },
  {
    // "image": ouranosaurus,
    "name": "Ouranosaurus",
    "pronunciation": "oo-RAH-noh-sore-us",
    "meaningOfName": "brave monitor lizard",
    "diet": "herbivorous",
    "length": "7m",
    "period": "Early Cretaceous",
    "mya": "125-112",
    "info": "Ouranosaurus was an iguanodont dinosaur in Africa. It had a large sail on its back supported by long, wide neural spines and an elnogated, flat skull."
  },
  {
    // "image": parasaurolophus,
    "name": "Parasaurolophus",
    "pronunciation": "PARR-eh-saw-ROL-off-us / PARR-eh-sawr-eh-LOH-fus",
    "meaningOfName": "near crested lizard",
    "diet": "herbivorous",
    "length": "11m",
    "period": "Late Cretaceous",
    "mya": "76-74",
    "info": "Found in Canada and the USA, Parasaurolophus was a hadrosaur most famous for its long, elaborate cranial crest."
  },
  {
    "image": spinosaurus,
    "name": "Spinosaurus",
    "pronunciation": "SPINE-oh-SORE-us",
    "meaningOfName": "spine lizard",
    "diet": "carnivorous",
    "length": "18m",
    "period": "Early Cretaceous",
    "mya": "112-97",
    "info": "Spinosaurus was one of the largest carnivorous dinosaurs to walk the Earth. Its diet consisted mostly of fish and the large spines on its back likely formed a sail."
  },
  {
    // "image": tyrannosaurus,
    "name": "Tyrannosaurus",
    "pronunciation": "tie-RAN-oh-sore-us",
    "meaningOfName": "tyrant lizard",
    "diet": "carnivorous",
    "length": "12m",
    "period": "Late Cretaceous",
    "mya": "68-66",
    "info": "Tyrannosaurus is well-represented in both fiction and history with over 50 specimens discovered. It and was one of the last non-avian dinosaurs to exist before the extinction event. Tyrannosaurus had a massive skull and a long heavy tail."
  },
  {
    // "image": utahraptor,
    "name": "Utahraptor",
    "pronunciation": "YOO-tah-RAP-tor",
    "meaningOfName": "Utah predator",
    "diet": "carnivorous",
    "length": "6m",
    "period": "Early Cretaceous",
    "mya": "112-100",
    "info": "Found in the USA, Utahraptor resembled velociraptor but much larger, prompting Robert T. Bakker to pronounce it 'Spielberg's raptor' due to the velociraptors in the movie <em>Jurassic Park</em> being portrayed much larger than their historical counterparts."
  },
  {
    // "image": vulcanodon,
    "name": "Vulcanodon",
    "pronunciation": "vul-ka-oh-don",
    "meaningOfName": "vulcano tooth",
    "diet": "herbivorous",
    "length": "6.5m",
    "period": "Early Jurassic",
    "mya": "183-175",
    "info": "Vulcanodon was a primitive sauropod that lived in southern Africa."
  },
  {
    // "image": xenoceratops,
    "name": "Xenoceratops",
    "pronunciation": "ZEE-no-SEH-ruh-tops",
    "meaningOfName": "alien horned face",
    "diet": "herbivorous",
    "length": "6m",
    "period": "Early Cretaceous",
    "mya": "78.5-77.5",
    "info": "Xenoceratops had horns and a bony frill with elborate ornamentation of projections, knobs, and spikes."
  },
  {
    // "image": zephyrosaurus,
    "name": "Zephyrosaurus",
    "pronunciation": "ZEF-ear-ro-SORE-us",
    "meaningOfName": "West wind lizard",
    "diet": "herbivorous",
    "length": "1.8m",
    "period": "Early Cretaceous",
    "mya": "120-110",
    "info": "An ornithopod dinosaur known only by a partial skull and postcranial fragments, not much about Zephyrosaurus has been discovered."
  },
  {
    image: abelisaurus,
    name: 'abelisaurus',
  },
  {
    image: camarosaurus,
    name: 'camarosaurus',
  },
  {
    image: claosaurus,
    name: 'claosaurus',
  },
  {
    image: eromangasaurus,
    name: 'eromangasaurus',
  },
  {
    image: mamenchisaurus,
    name: 'mamenchisaurus',
  },
  {
    image: spinosaurus,
    name: 'spinosaurus',
  },
  {
    image: aerosteon,
    name: 'aerosteon',
  },
  {
    image: camptosaurus,
    name: 'camptosaurus',
  },
  {
    image: daspletosaurus,
    name: 'daspletosaurus',
  },
  {
    image: gigantoraptor,
    name: 'gigantoraptor',
  },
  {
    image: mapusaurus,
    name: 'mapusaurus',
  },
  {
    image: tyrannosaurusRex,
    name: 'tyrannosaurusRex',
  },
  {
    image: albertosaurus,
    name: 'albertosaurus',
  },
  {
    image: carcharodontosaurus,
    name: 'carcharodontosaurus',
  },
  {
    image: deinonychus,
    name: 'deinonychus',
  },
  {
    image: giraffatitan,
    name: 'giraffatitan',
  },
  {
    image: massospondylus,
    name: 'massospondylus',
  },
  {
    image: allosaurus,
    name: 'allosaurus',
  },
  {
    image: caudipteryx,
    name: 'caudipteryx',
  },
  {
    image: dilong,
    name: 'dilong',
  },
  {
    image: iguanodon,
    name: 'iguanodon',
  },
  {
    image: megalosaurus,
    name: 'megalosaurus',
  },
  {
    image: velociraptor,
    name: 'velociraptor',
  },
  {
    image: archaeopteryx,
    name: 'archaeopteryx',
  },
  {
    image: centrosaurus,
    name: 'centrosaurus',
  },
  {
    image: diplodocus,
    name: 'diplodocus',
  },
  {
    image: irritator,
    name: 'irritator',
  },
  {
    image: microraptor,
    name: 'microraptor',
  },
  {
    image: argentinosaurus,
    name: 'argentinosaurus',
  },
  {
    image: cetiosaurus,
    name: 'cetiosaurus',
  },
  {
    image: edmontosaurus,
    name: 'edmontosaurus',
  },
  {
    image: leyesaurus,
    name: 'leyesaurus',
  },
  {
    image: monoclonius,
    name: 'monoclonius',
  },
  {
    image: baryonyx,
    name: 'baryonyx',
  },
  {
    image: chasmosaurus,
    name: 'chasmosaurus',
  },
  {
    image: elasmosaurus,
    name: 'elasmosaurus',
  },
  {
    image: magyarosaurus,
    name: 'magyarosaurus',
  },
  {
    image: plateosaurus,
    name: 'plateosaurus',
  },
  {
    image: brachiosaurus,
    name: 'brachiosaurus',
  },
  {
    image: citipati,
    name: 'citipati',
  },
  {
    image: epidexipteryx,
    name: 'epidexipteryx',
  },
  {
    image: majungasaurus,
    name: 'majungasaurus',
  },
  {
    image: pterodactyl,
    name: 'pterodactyl',
  }
]

const Dinos = () => (
  <div className="App">
    <h1>Thomas and Marco's <br /> dinosaur page</h1>
    <img className="main" src={mainIllustration} alt="dinosaurs" />
    <div className="container">
      {dinoData.map(dino => (
        <NavLink to={`/dino/${dino.name}`} className="dino">
          <img src={dino.image} alt={dino.name} />
        </NavLink>
      ))}
    </div>
  </div>
);

const SingleDino = ({ dino }) => (
  <div className="App">
    <h1>Thomas and Marco's <br /> {dino.name} page</h1>
    <img className="main" src={dino.image} alt="dinosaurs" />
    <ul className="dino-data">
      <li>{dino.name}</li>
      <li>{dino.pronunciation}</li>
      <li>{dino.meaningOfName}</li>
      <li>{dino.diet}</li>
      <li>{dino.length}</li>
      <li>{dino.period}</li>
      <li>{dino.mya}</li>
      <li>{dino.info}</li>
    </ul>
  </div>
);

const Links = () => (
  <nav>
    <NavLink exact activeClassName="active" to="/dinos">Home</NavLink>
    <NavLink activeClassName="active" to={{ pathname: '/about' }}>About</NavLink>
    <NavLink activeClassName="active" to={{ pathname: '/contact' }}>Contact</NavLink>
  </nav>
);

const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" component={Dinos} />
      <Route exact path="/dino/:dinoName" render={({ match }) => (
        <SingleDino
          dino={dinoData.filter(dino => (dino.name === match.params.dinoName))[0]}
        />)} />
      <Route path="/about" render={() => (<h1>About</h1>)} />
      <Route path="/contact" render={() => (<h1>Contact</h1>)} />
    </div>
  </Router>
);

export default App;
