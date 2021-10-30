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
    switch (rarity.toLowerCase()) {
      case "common":
        return "beta"
      case "rare":
        return "alpha"
      case "epic":
        return "omega"
      case "legendary":
        return "infinity"
      default:
        return ""
    }
  },

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

  getResourceIcon(resourceCode) {
    let img = ""
    switch (resourceCode) {
      case "BO_attacker_booster":
        img = "attacker_booster.webp"
        break
      case "BO_defender_booster":
        img = "defender_booster.webp"
        break
      case "BO_support_booster":
        img = "support_booster.webp"
        break
      case "BO_fine_attacker_booster":
        img = "fine_attacker_booster.webp"
        break
      case "BO_fine_defender_booster":
        img = "fine_defender_booster.webp"
        break
      case "BO_fine_support_booster":
        img = "fine_support_booster.webp"
        break
      case "RG_common_dry_leaf":
        img = "dry_leaf.webp"
        break
      case "RG_common_hydrant":
        img = "hydrant.webp"
        break
      case "RG_common_bucket_of_milk":
        img = "bucket_of_milk.webp"
        break
      case "RG_common_dried_skull":
        img = "dried_skull.webp"
        break
      case "RG_common_traffic_light":
        img = "traffic_light.webp"
        break
      case "RG_common_evaporator":
        img = "evaporator.webp"
        break
      case "RG_common_mittens":
        img = "mittens.webp"
        break
      case "RG_common_flower_crown":
        img = "flower_crown.webp"
        break
      case "RG_common_movie_camera":
        img = "movie_camera.webp"
        break
        case "RG_common_skull":
          img = "skull.webp"
          break        
        case "RG_fine_dry_leaf":
          img = "fine_dry_leaf.webp"
          break
        case "RG_fine_hydrant":
          img = "fine_hydrant.webp"
          break
        case "RG_fine_bucket_of_milk":
          img = "fine_bucket_of_milk.webp"
          break
        case "RG_fine_dried_skull":
          img = "fine_dried_skull.webp"
          break
        case "RG_fine_traffic_light":
          img = "fine_traffic_light.webp"
          break
        case "RG_fine_evaporator":
          img = "fine_evaporator.webp"
          break
        case "RG_fine_mittens":
          img = "fine_mittens.webp"
          break
        case "RG_fine_flower_crown":
          img = "fine_flower_crown.webp"
          break
        case "RG_fine_movie_camera":
          img = "fine_movie_camera.webp"
          break        
          case "RG_fine_skull":
            img = "fine_skull.webp"
            break                  
          case "RG_superior_dry_leaf":
            img = "superior_dry_leaf.webp"
            break
          case "RG_superior_hydrant":
            img = "superior_hydrant.webp"
            break
          case "RG_superior_bucket_of_milk":
            img = "superior_bucket_of_milk.webp"
            break
          case "RG_superior_dried_skull":
            img = "superior_dried_skull.webp"
            break
          case "RG_superior_traffic_light":
            img = "superior_traffic_light.webp"
            break
          case "RG_superior_evaporator":
            img = "superior_evaporator.webp"
            break
          case "RG_superior_mittens":
            img = "superior_mittens.webp"
            break
          case "RG_superior_flower_crown":
            img = "superior_flower_crown.webp"
            break
          case "RG_superior_movie_camera":
            img = "superior_movie_camera.webp"
            break       
            case "RG_superior_skull":
          img = "superior_skull.webp"
          break           
      default:
        return resourceCode
    }
    return `<img  src="assets/resources/${img}" class="icon" />`
  },
}
