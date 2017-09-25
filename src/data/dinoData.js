import Silhouettes from "../components/atoms/Silhouettes/index.jsx";

const dinoData = [
  {
    image: Silhouettes.allosaurus,
    name: "Allosaurus",
    pronunciation: "AL-oh-sore-us",
    meaningOfName: "other lizard",
    diet: "carnivore",
    length: "12m",
    period: "Late Jurassic",
    mya: "156-144",
    info:
      "Allosaurus was an apex predator in the Late Jurassic in North America."
  },
  {
    // "image": apatosaurus,
    name: "Apatosaurus",
    pronunciation: "ah-PAT-oh-sore-us",
    meaningOfName: "deceptive lizard",
    diet: "herbivore",
    length: "21m",
    period: "Late Jurassic",
    mya: "154-145",
    info:
      "Named the 'deceptive lizard' because its skull was confused with those of other sauropods until 1909."
  },
  {
    image: Silhouettes.brachiosaurus,
    name: "Brachiosaurus",
    pronunciation: "BRAK-ee-oh-sore-us",
    meaningOfName: "Arm lizard",
    diet: "herbivore",
    length: "30m",
    period: "Late Jurassic",
    mya: "155-140",
    info:
      "Brachiosaurus was a large, North American sauropod dinosaur with an arch encircling its nasal opening."
  },
  {
    // "image": compsognathus,
    name: "Compsognathus",
    pronunciation: "komp-sog-NATH-us",
    meaningOfName: "pretty jaw",
    diet: "carnivore",
    length: "0.65m",
    period: "Late Jurassic",
    mya: "145-140",
    info:
      "Compsognathus was small and bipedal, roughly the size of a turkey. It lived in Europe and was the first dinosaur genus to be portrayed with feathers."
  },
  {
    // "image": dracorex,
    name: "Dracorex",
    pronunciation: "dray-ko-rex",
    meaningOfName: "dragon king",
    diet: "herbivore",
    length: "estimated 4m",
    period: "Late Cretaceous",
    mya: "66",
    info:
      "<em>Dracorex hogwartsia</em> was a pachycephalosaur that did not have a domed head. Instead, its skull was adorned with spikes and frills reminiscent of a dragon. A skull was discovered in the Hell Creek Formation in South Dakota and donated to the Children's Museum of Indianapolis in 2004. Its name was inspired by J.K. Rowling's Harry Potter series and the young visitors to the children's museum."
  },
  {
    image: Silhouettes.elasmosaurus,
    name: "Elasmosaurus",
    pronunciation: "ee-LAZ-mo-sore-us",
    meaningOfName: "thin plate lizard",
    diet: "carnivore",
    length: "14m",
    period: "Late Cretaceous",
    mya: "80.5",
    info:
      "Elasmosaurus was an aquatic dinosaur with an extremely long neck that likely fed on other smaller aquatic fauna like fish, molluscs, and squid. E.D. Cope mistakenly placed the skull of an Elasmosaurus on the much shorter tail rather than the extremely long neck."
  },
  {
    image: Silhouettes.giraffatitan,
    name: "Giraffatitan",
    pronunciation: "ji-raf-e-tie-tan",
    meaningOfName: "giraffe titan",
    diet: "herbivore",
    length: "23m",
    period: "Late Jurassic",
    mya: "154-142",
    info:
      "Giraffatitan was a large sauropod related to Brachiosaurus with huge nostrils and nasal openings in its skull."
  },
  {
    // "image": indosuchus,
    name: "Indosuchus",
    pronunciation: "in-doh-sook-us",
    meaningOfName: "Indian crocodile",
    diet: "carnivore",
    length: "7m",
    period: "Late Cretaceous",
    mya: "70-66",
    info: "Indosuchus had a flattened crest on its skull."
  },
  {
    // "image": jingshanosaurus,
    name: "Jingshanosaurus",
    pronunciation: "jing-shahn-oh-sore-us",
    meaningOfName: "Jingshan lizard",
    diet: "herbivore",
    length: "5m",
    period: "Early Jurassic",
    mya: "205-190",
    info:
      "Jingshanosaurus was one of the last prosauropods, a long-necked herbivore able to walk on two legs."
  },
  {
    // "image": khaan,
    name: "Khaan",
    pronunciation: "kahn",
    meaningOfName: "ruler",
    diet: "omnivore",
    length: "1.8m",
    period: "Late Cretaceous",
    mya: "81-75",
    info:
      "Khaan was an oviraptor with a parrot-like beak, discovered in Mongolia."
  },
  {
    // "image": minmi,
    name: "Minmi",
    pronunciation: "min-mie",
    meaningOfName: "Minmi Crossing, Queensland, Australia",
    diet: "herbivore",
    length: "3m",
    period: "Early Cretaceous",
    mya: "121-112",
    info:
      "Minmi was a small, anklyosaurian, armored dinosaur discovered in Australia."
  },
  {
    // "image": ouranosaurus,
    name: "Ouranosaurus",
    pronunciation: "oo-RAH-noh-sore-us",
    meaningOfName: "brave monitor lizard",
    diet: "herbivore",
    length: "7m",
    period: "Early Cretaceous",
    mya: "125-112",
    info:
      "Ouranosaurus was an iguanodont dinosaur in Africa. It had a large sail on its back supported by long, wide neural spines and an elnogated, flat skull."
  },
  {
    // "image": parasaurolophus,
    name: "Parasaurolophus",
    pronunciation: "PARR-eh-saw-ROL-off-us / PARR-eh-sawr-eh-LOH-fus",
    meaningOfName: "near crested lizard",
    diet: "herbivore",
    length: "11m",
    period: "Late Cretaceous",
    mya: "76-74",
    info:
      "Found in Canada and the USA, Parasaurolophus was a hadrosaur most famous for its long, elaborate cranial crest."
  },
  {
    image: Silhouettes.spinosaurus,
    name: "Spinosaurus",
    pronunciation: "SPINE-oh-SORE-us",
    meaningOfName: "spine lizard",
    diet: "carnivore",
    length: "18m",
    period: "Early Cretaceous",
    mya: "112-97",
    info:
      "Spinosaurus was one of the largest carnivore dinosaurs to walk the Earth. Its diet consisted mostly of fish and the large spines on its back likely formed a sail."
  },
  {
    // "image": tyrannosaurus,
    name: "Tyrannosaurus",
    pronunciation: "tie-RAN-oh-sore-us",
    meaningOfName: "tyrant lizard",
    diet: "carnivore",
    length: "12m",
    period: "Late Cretaceous",
    mya: "68-66",
    info:
      "Tyrannosaurus is well-represented in both fiction and history with over 50 specimens discovered. It and was one of the last non-avian dinosaurs to exist before the extinction event. Tyrannosaurus had a massive skull and a long heavy tail."
  },
  {
    // "image": utahraptor,
    name: "Utahraptor",
    pronunciation: "YOO-tah-RAP-tor",
    meaningOfName: "Utah predator",
    diet: "carnivore",
    length: "6m",
    period: "Early Cretaceous",
    mya: "112-100",
    info:
      "Found in the USA, Utahraptor resembled velociraptor but much larger, prompting Robert T. Bakker to pronounce it 'Spielberg's raptor' due to the velociraptors in the movie <em>Jurassic Park</em> being portrayed much larger than their historical counterparts."
  },
  {
    // "image": vulcanodon,
    name: "Vulcanodon",
    pronunciation: "vul-ka-oh-don",
    meaningOfName: "vulcano tooth",
    diet: "herbivore",
    length: "6.5m",
    period: "Early Jurassic",
    mya: "183-175",
    info: "Vulcanodon was a primitive sauropod that lived in southern Africa."
  },
  {
    // "image": xenoceratops,
    name: "Xenoceratops",
    pronunciation: "ZEE-no-SEH-ruh-tops",
    meaningOfName: "Alien horned face",
    diet: "herbivore",
    length: "6m",
    period: "Early Cretaceous",
    mya: "78.5-77.5",
    info:
      "Xenoceratops had horns and a bony frill with elborate ornamentation of projections, knobs, and spikes."
  },
  {
    // "image": zephyrosaurus,
    name: "Zephyrosaurus",
    pronunciation: "ZEF-ear-ro-SORE-us",
    meaningOfName: "West wind lizard",
    diet: "herbivore",
    length: "1.8m",
    period: "Early Cretaceous",
    mya: "120-110",
    info:
      "An ornithopod dinosaur known only by a partial skull and postcranial fragments, not much about Zephyrosaurus has been discovered."
  },
  {
    image: Silhouettes.abelisaurus,
    name: "Abelisaurus"
  },
  {
    image: Silhouettes.camarosaurus,
    name: "Camarosaurus"
  },
  {
    image: Silhouettes.claosaurus,
    name: "Claosaurus"
  },
  {
    image: Silhouettes.eromangasaurus,
    name: "Eromangasaurus"
  },
  {
    image: Silhouettes.mamenchisaurus,
    name: "Mamenchisaurus"
  },
  {
    image: Silhouettes.spinosaurus,
    name: "Spinosaurus"
  },
  {
    image: Silhouettes.aerosteon,
    name: "Aerosteon"
  },
  {
    image: Silhouettes.camptosaurus,
    name: "Camptosaurus"
  },
  {
    image: Silhouettes.daspletosaurus,
    name: "Daspletosaurus"
  },
  {
    image: Silhouettes.gigantoraptor,
    name: "Gigantoraptor"
  },
  {
    image: Silhouettes.mapusaurus,
    name: "Mapusaurus"
  },
  {
    image: Silhouettes.tyrannosaurusRex,
    name: "TyrannosaurusRex"
  },
  {
    image: Silhouettes.albertosaurus,
    name: "Albertosaurus"
  },
  {
    image: Silhouettes.carcharodontosaurus,
    name: "Carcharodontosaurus"
  },
  {
    image: Silhouettes.deinonychus,
    name: "Deinonychus"
  },
  {
    image: Silhouettes.giraffatitan,
    name: "Giraffatitan"
  },
  {
    image: Silhouettes.massospondylus,
    name: "Massospondylus"
  },
  {
    image: Silhouettes.allosaurus,
    name: "Allosaurus"
  },
  {
    image: Silhouettes.caudipteryx,
    name: "Caudipteryx"
  },
  {
    image: Silhouettes.dilong,
    name: "Dilong"
  },
  {
    image: Silhouettes.iguanodon,
    name: "Iguanodon"
  },
  {
    image: Silhouettes.megalosaurus,
    name: "Megalosaurus"
  },
  {
    image: Silhouettes.velociraptor,
    name: "Velociraptor"
  },
  {
    image: Silhouettes.archaeopteryx,
    name: "Archaeopteryx"
  },
  {
    image: Silhouettes.centrosaurus,
    name: "Centrosaurus"
  },
  {
    image: Silhouettes.diplodocus,
    name: "Diplodocus"
  },
  {
    image: Silhouettes.irritator,
    name: "Irritator"
  },
  {
    image: Silhouettes.microraptor,
    name: "Microraptor"
  },
  {
    image: Silhouettes.argentinosaurus,
    name: "Argentinosaurus"
  },
  {
    image: Silhouettes.cetiosaurus,
    name: "Cetiosaurus"
  },
  {
    image: Silhouettes.edmontosaurus,
    name: "Edmontosaurus"
  },
  {
    image: Silhouettes.leyesaurus,
    name: "Leyesaurus"
  },
  {
    image: Silhouettes.monoclonius,
    name: "Monoclonius"
  },
  {
    image: Silhouettes.baryonyx,
    name: "Baryonyx"
  },
  {
    image: Silhouettes.chasmosaurus,
    name: "Chasmosaurus"
  },
  {
    image: Silhouettes.elasmosaurus,
    name: "Elasmosaurus"
  },
  {
    image: Silhouettes.magyarosaurus,
    name: "Magyarosaurus"
  },
  {
    image: Silhouettes.plateosaurus,
    name: "Plateosaurus"
  },
  {
    image: Silhouettes.brachiosaurus,
    name: "Brachiosaurus"
  },
  {
    image: Silhouettes.citipati,
    name: "Citipati"
  },
  {
    image: Silhouettes.epidexipteryx,
    name: "Epidexipteryx"
  },
  {
    image: Silhouettes.majungasaurus,
    name: "Majungasaurus"
  },
  {
    image: Silhouettes.pterodactyl,
    name: "Pterodactyl"
  }
];

export default dinoData;
