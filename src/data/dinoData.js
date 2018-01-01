const dinoData = {
  'allosaurus': {
    dinoId: "allosaurus",
    name: "Allosaurus",
    pronunciation: "AL-oh-sore-us",
    meaningOfName: "Other lizard",
    diet: "Carnivore",
    length: "12m",
    period: "Late Jurassic",
    mya: [156, 144],
    habitat: "Land",
    info: "Allosaurus was an apex predator in the Late Jurassic in North America."
  },
  'apatosaurus': {
    display: false,
    dinoId: "apatosaurus",
    name: "Apatosaurus",
    pronunciation: "Ah-PAT-oh-sore-us",
    meaningOfName: "Deceptive lizard",
    diet: "Herbivore",
    length: "21m",
    period: "Late Jurassic",
    mya: [154, 145],
    info: "Named the 'deceptive lizard' because its skull was confused with those of other sauropods until 1909."
  },
  'brachiosaurus': {
    dinoId: "brachiosaurus",
    name: "Brachiosaurus",
    pronunciation: "BRAK-ee-oh-sore-us",
    meaningOfName: "Arm lizard",
    diet: "Herbivore",
    length: "30m",
    period: "Late Jurassic",
    mya: [155, 140],
    habitat: "Land",
    info: "Brachiosaurus was a large, North American sauropod dinosaur with an arch encircling its nasal opening."
  },
  'compsognathus': {
    display: false,
    dinoId: "compsognathus",
    name: "Compsognathus",
    pronunciation: "Komp-sog-NATH-us",
    meaningOfName: "Pretty jaw",
    diet: "Carnivore",
    length: "0.65m",
    period: "Late Jurassic",
    mya: [145, 140],
    info: "Compsognathus was small and bipedal, roughly the size of a turkey. It lived in Europe and was the first dinosaur genus to be portrayed with feathers."
  },
  'dracorex': {
    display: false,
    dinoId: "dracorex",
    name: "Dracorex",
    pronunciation: "Dray-ko-rex",
    meaningOfName: "Dragon king",
    diet: "Herbivore",
    length: "estimated 4m",
    period: "Late Cretaceous",
    mya: [66, 66],
    info: "<em>Dracorex hogwartsia</em> was a pachycephalosaur that did not have a domed head. Instead, its skull was adorned with spikes and frills reminiscent of a dragon. A skull was discovered in the Hell Creek Formation in South Dakota and donated to the Children's Museum of Indianapolis in 2004. Its name was inspired by J.K. Rowling's Harry Potter series and the young visitors to the children's museum."
  },
  'elasmosaurus': {
    dinoId: "elasmosaurus",
    name: "Elasmosaurus",
    pronunciation: "Ee-LAZ-mo-sore-us",
    meaningOfName: "Thin plate lizard",
    diet: "Carnivore",
    length: "14m",
    period: "Late Cretaceous",
    mya: [80.5, 80.5],
    habitat: "Sea",
    info: "Elasmosaurus was an aquatic dinosaur with an extremely long neck that likely fed on other smaller aquatic fauna like fish, molluscs, and squid. E.D. Cope mistakenly placed the skull of an Elasmosaurus on the much shorter tail rather than the extremely long neck."
  },
  'giraffatitan': {
    dinoId: "giraffatitan",
    name: "Giraffatitan",
    pronunciation: "Ji-raf-e-tie-tan",
    meaningOfName: "Giraffe titan",
    diet: "Herbivore",
    length: "23m",
    period: "Late Jurassic",
    mya: [154, 142],
    habitat: "Land",
    info: "Giraffatitan was a large sauropod related to Brachiosaurus with huge nostrils and nasal openings in its skull."
  },
  'indosuchus': {
    display: false,
    dinoId: "indosuchus",
    name: "Indosuchus",
    pronunciation: "In-doh-sook-us",
    meaningOfName: "Indian crocodile",
    diet: "Carnivore",
    length: "7m",
    period: "Late Cretaceous",
    mya: [70, 66],
    info: "Indosuchus had a flattened crest on its skull."
  },
  'jingshanosaurus': {
    display: false,
    dinoId: "jingshanosaurus",
    name: "Jingshanosaurus",
    pronunciation: "Jing-shahn-oh-sore-us",
    meaningOfName: "Jingshan lizard",
    diet: "Herbivore",
    length: "5m",
    period: "Early Jurassic",
    mya: [205, 190],
    info: "Jingshanosaurus was one of the last prosauropods, a long-necked herbivore able to walk on two legs."
  },
  'khaan': {
    display: false,
    dinoId: "khaan",
    name: "Khaan",
    pronunciation: "Kahn",
    meaningOfName: "Ruler",
    diet: "Omnivore",
    length: "1.8m",
    period: "Late Cretaceous",
    mya: [81, 75],
    info: "Khaan was an oviraptor with a parrot-like beak, discovered in Mongolia."
  },
  'minmi': {
    display: false,
    dinoId: "minmi",
    name: "Minmi",
    pronunciation: "Min-mie",
    meaningOfName: "Minmi Crossing, Queensland, Australia",
    diet: "Herbivore",
    length: "3m",
    period: "Early Cretaceous",
    mya: [121, 112],
    info: "Minmi was a small, anklyosaurian, armored dinosaur discovered in Australia."
  },
  'ouranosaurus': {
    display: false,
    dinoId: "ouranosaurus",
    name: "Ouranosaurus",
    pronunciation: "Oo-RAH-noh-sore-us",
    meaningOfName: "Brave monitor lizard",
    diet: "Herbivore",
    length: "7m",
    period: "Early Cretaceous",
    mya: [125, 112],
    info: "Ouranosaurus was an iguanodont dinosaur in Africa. It had a large sail on its back supported by long, wide neural spines and an elnogated, flat skull."
  },
  'parasaurolophus': {
    display: false,

    dinoId: "parasaurolophus",
    name: "Parasaurolophus",
    pronunciation: "PARR-eh-saw-ROL-off-us / PARR-eh-sawr-eh-LOH-fus",
    meaningOfName: "Near crested lizard",
    diet: "Herbivore",
    length: "11m",
    period: "Late Cretaceous",
    mya: [76, 74],
    info: "Found in Canada and the USA, Parasaurolophus was a hadrosaur most famous for its long, elaborate cranial crest."
  },
  'spinosaurus': {
    dinoId: "spinosaurus",
    name: "Spinosaurus",
    pronunciation: "SPINE-oh-SORE-us",
    meaningOfName: "Spine lizard",
    diet: "Carnivore",
    length: "18m",
    period: "Early Cretaceous",
    mya: [112, 97],
    habitat: "Land",
    info: "Spinosaurus was one of the largest carnivore dinosaurs to walk the Earth. Its diet consisted mostly of fish and the large spines on its back likely formed a sail."
  },
  'tyrannosaurus': {
    display: false,
    dinoId: "tyrannosaurus",
    name: "Tyrannosaurus",
    pronunciation: "Tie-RAN-oh-sore-us",
    meaningOfName: "Tyrant lizard",
    diet: "Carnivore",
    length: "12m",
    period: "Late Cretaceous",
    mya: [68, 66],
    legCount: 2,
    habitat: "Land",
    info: "Tyrannosaurus is well-represented in both fiction and history with over 50 specimens discovered. It and was one of the last non-avian dinosaurs to exist before the extinction event. Tyrannosaurus had a massive skull and a long heavy tail."
  },
  'utahraptor': {
    display: false,
    dinoId: "utahraptor",
    name: "Utahraptor",
    pronunciation: "YOO-tah-RAP-tor",
    meaningOfName: "Utah predator",
    diet: "Carnivore",
    length: "6m",
    period: "Early Cretaceous",
    mya: [112, 100],
    info: "Found in the USA, Utahraptor resembled velociraptor but much larger, prompting Robert T. Bakker to pronounce it 'Spielberg's raptor' due to the velociraptors in the movie <em>Jurassic Park</em> being portrayed much larger than their historical counterparts."
  },
  'vulcanodon': {
    display: false,
    dinoId: "vulcanodon",
    name: "Vulcanodon",
    pronunciation: "Vul-ka-oh-don",
    meaningOfName: "Vulcano tooth",
    diet: "Herbivore",
    length: "6.5m",
    period: "Early Jurassic",
    mya: [183, 175],
    info: "Vulcanodon was a primitive sauropod that lived in southern Africa."
  },
  'xenoceratops': {
    display: false,
    dinoId: "xenoceratops",
    name: "Xenoceratops",
    pronunciation: "ZEE-no-SEH-ruh-tops",
    meaningOfName: "Alien horned face",
    diet: "Herbivore",
    length: "6m",
    period: "Early Cretaceous",
    mya: [78.5, 77.5],
    info: "Xenoceratops had horns and a bony frill with elborate ornamentation of projections, knobs, and spikes."
  },
  'zephyrosaurus': {
    display: false,
    dinoId: "zephyrosaurus",
    name: "Zephyrosaurus",
    pronunciation: "ZEF-ear-ro-SORE-us",
    meaningOfName: "West wind lizard",
    diet: "Herbivore",
    length: "1.8m",
    period: "Early Cretaceous",
    mya: [120, 110],
    info: "An ornithopod dinosaur known only by a partial skull and postcranial fragments, not much about Zephyrosaurus has been discovered."
  },
  'abelisaurus': {
    dinoId: "abelisaurus",
    name: "Abelisaurus",
    habitat: "Land",
    diet: "Carnivore"
  },
  'camarosaurus': {
    dinoId: "camarosaurus",
    name: "Camarosaurus",
    legCount: 4,
    habitat: "Land",
    diet: "Herbivore"
  },
  'claosaurus': {
    dinoId: "claosaurus",
    name: "Claosaurus",
    habitat: "Land",
    diet: "Herbivore"
  },
  'eromangasaurus': {
    dinoId: "eromangasaurus",
    name: "Eromangasaurus",
    habitat: "Sea"
  },
  'mamenchisaurus': {
    dinoId: "mamenchisaurus",
    name: "Mamenchisaurus",
    habitat: "Land",
    diet: "Herbivore"
  },
  'aerosteon': {
    dinoId: "aerosteon",
    name: "Aerosteon",
    habitat: "Land",
    diet: "Carnivore"
  },
  'camptosaurus': {
    dinoId: "camptosaurus",
    name: "Camptosaurus",
    habitat: "Land",
    diet: "Herbivore"
  },
  'daspletosaurus': {
    dinoId: "daspletosaurus",
    name: "Daspletosaurus",
    habitat: "Land",
    mya: [77, 74],
    diet: "Carnivore"
  },
  'gigantoraptor': {
    dinoId: "gigantoraptor",
    name: "Gigantoraptor",
    habitat: "Land",
    diet: "Carnivore"
  },
  'mapusaurus': {
    dinoId: "mapusaurus",
    name: "Mapusaurus",
    habitat: "Land",
    diet: "Carnivore"
  },
  'albertosaurus': {
    dinoId: "albertosaurus",
    name: "Albertosaurus",
    habitat: "Land",
    diet: "Carnivore"
  },
  'carcharodontosaurus': {
    dinoId: "carcharodontosaurus",
    name: "Carcharodontosaurus",
    habitat: "Land",
    diet: "Carnivore"
  },
  'deinonychus': {
    dinoId: "deinonychus",
    name: "Deinonychus",
    habitat: "Land",
    diet: "Carnivore"
  },
  'massospondylus': {
    dinoId: "massospondylus",
    name: "Massospondylus",
    habitat: "Land",
    diet: "Herbivore"
  },
  'caudipteryx': {
    dinoId: "caudipteryx",
    name: "Caudipteryx",
    habitat: "Land",
    diet: "Carnivore"
  },
  'dilong': {
    dinoId: "dilong",
    name: "Dilong",
    habitat: "Land",
    diet: "Carnivore"
  },
  'iguanodon': {
    dinoId: "iguanodon",
    name: "Iguanodon",
    habitat: "Land",
    diet: "Herbivore"
  },
  'megalosaurus': {
    dinoId: "megalosaurus",
    name: "Megalosaurus",
    habitat: "Land",
    diet: "Carnivore"
  },
  'velociraptor': {
    dinoId: "velociraptor",
    name: "Velociraptor",
    habitat: "Land",
    diet: "Carnivore"
  },
  'archaeopteryx': {
    dinoId: "archaeopteryx",
    name: "Archaeopteryx",
    habitat: "Land",
    diet: "Carnivore"
  },
  'centrosaurus': {
    dinoId: "centrosaurus",
    name: "Centrosaurus",
    habitat: "Land",
    diet: "Herbivore"
  },
  'diplodocus': {
    dinoId: "diplodocus",
    name: "Diplodocus",
    habitat: "Land",
    diet: "Carnivore"
  },
  'irritator': {
    dinoId: "irritator",
    name: "Irritator",
    habitat: "Land",
    diet: "Carnivore"
  },
  'microraptor': {
    dinoId: "microraptor",
    name: "Microraptor",
    habitat: "Sky",
    diet: "Carnivore"
  },
  'argentinosaurus': {
    dinoId: "argentinosaurus",
    name: "Argentinosaurus",
    habitat: "Land",
    diet: "Herbivore"
  },
  'cetiosaurus': {
    dinoId: "cetiosaurus",
    name: "Cetiosaurus",
    habitat: "Land",
    diet: "Herbivore"
  },
  'edmontosaurus': {
    dinoId: "edmontosaurus",
    name: "Edmontosaurus",
    habitat: "Land",
    diet: "Herbivore"
  },
  'leyesaurus': {
    dinoId: "leyesaurus",
    name: "Leyesaurus",
    habitat: "Land"
  },
  'monoclonius': {
    dinoId: "monoclonius",
    name: "Monoclonius",
    habitat: "Land",
    diet: "Herbivore"
  },
  'baryonyx': {
    dinoId: "baryonyx",
    name: "Baryonyx",
    habitat: "Land",
    diet: "Carnivore"
  },
  'chasmosaurus': {
    dinoId: "chasmosaurus",
    name: "Chasmosaurus",
    habitat: "Land",
    diet: "Herbivore"
  },
  'magyarosaurus': {
    dinoId: "magyarosaurus",
    name: "Magyarosaurus",
    habitat: "Land",
    diet: "Herbivore"
  },
  'plateosaurus': {
    dinoId: "plateosaurus",
    name: "Plateosaurus",
    habitat: "Land",
    diet: "Herbivore"
  },
  'citipati': {
    dinoId: "citipati",
    name: "Citipati",
    habitat: "Land",
    diet: "Omnivore"
  },
  'epidexipteryx': {
    dinoId: "epidexipteryx",
    name: "Epidexipteryx",
    habitat: "Land",
    diet: "Carnivore"
  },
  'majungasaurus': {
    dinoId: "majungasaurus",
    name: "Majungasaurus",
    habitat: "Land",
    diet: "Carnivore"
  },
  'pterodactyl': {
    dinoId: "pterodactyl",
    name: "Pterodactyl",
    habitat: "Sky",
    diet: "Carnivore"
  }
};

export default dinoData;