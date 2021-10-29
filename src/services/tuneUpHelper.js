module.exports = {
  getRegionalMaterialName: (region) => {
    region = region.toLowerCase()
    switch (region) {
      case "forest":
        return "dry_leaf"
      case "town":
        return "hydrant"
      case "farm":
        return "bucket_of_milk"
      case "desert":
        return "dried_skull"
      case "city":
        return "traffic_light"
      case "space":
        return "evaporator"
      case "summit":
        return "mittens"
      case "tasmania":
        return "skull"
      case "wb studio":
        return "movie_camera"
      case "avalooney":
        return "flower_crown"
      default:
        return region
    }
  },

  getTypeBoosterName: (type) => {
    switch (type.toLowerCase()) {
      case "attacker":
        return "Attacker"
      case "defender":
        return "Defender"
      case "support":
        return "Support"
      default:
        return type
    }
  },
  
  getFormularName: (rarity) => {
    switch(rarity.toLowerCase()) {
      case 'common'  : return 'beta'
      case 'rare'  : return 'alpha'
      case 'epic'  : return 'omega'
      case 'legendary'  : return 'infinity'
      default : return ''
    }
    
  } , 

  getSpecialMaterialName: (toonBase, itemName) => {
    switch (toonBase.toLowerCase()) {
      case "barnyard dawg":
        return "Dog Collar"
      case "bugs bunny":
        return "Carrot"
      case "daffy duck":
        return "Mirror"
      case "dr. frankenbeans":
        return "Old Switch"
      case "egghead jr.":
        return "pencil"
      case "elmer fudd":
        return "Hunting Hat"
      case "foghorn leghorn":
        return "Baseball"
      case "gossamer":
        return "Hair Shampoo"
      case "granny":
        return "Granny's Glasses"
      case "hector":
        return "Blue Ball"
      case "henery hawk":
        return "CHICKEN???"
      case "hippety hopper":
        return "PUNCHING GLOVE"
      case "hugo":
        return "GEORGE"
      case "k-9":
        return "Biscuit"
      case "lebron james":
        return "BASKETBALL"
      case "lola":
        return "Scrunchy"
      case "marvin":
        return "Sneaker Shoes"
      case "melissa":
        return "Pocket Mirror"
      case "miss prissy":
        return "Chicken Nest"
      case "nasty canasta":
        return "Vile Cocktail"
      case "o' mike":
        return "Clover"
      case "o' pat":
        return "Clover"
      case "penelope":
        return "Gas Mask"
      case "pepe le pew":
        return "Bottle of Perfume"
      case "petunia pig":
        return "Red Bow"
      case "porky pig":
        return "Watering Can"
      case "ralph wolf":
        return "ACME Catalog"
      case "roadrunner":
        return "Bird Seed"
      case "sam sheepdog":
        return "Red Punching Clock"

      case "speedy gonzales":
        return "Cheese"
      case "sylvester":
        return "Bird Cage"
      case "sylvester jr":
        return "Paper Bag"
      case "tasmanian she-devil":
        return "Tasty Meat"
      case "taz":
        return "Tasty Meat"
      case "the mighty angelo":
        return "Weights Meat"
      case "toro":
        return "Nose Ring"
      case "tweety":
        return "Bird Perch"
      case "wille e. coyote":
        return "ACME Catalog"
      case "witch hazel":
        return "Potion Book Meat"
      case "yosemite sam":
        return "Comb"
      default:
        return itemName
    }
  },
}
