import Statics from './Statics'
export default class Candidate {
  static TYPE = {
    NORMAL: {
      typeName : "normal",
    },
    MAUVAIS: {
      typeName: "mauvais",
      vitesseFaim: 1.8,
      vitesseFatigue: 1.8,
      chance: 0.5,
      force: 0.8,
      vitesse: 0.8,
      natation: 0.6,
      survie: 0.7,
      precision: 0.5,
    },
    GENTIL: {
      typeName: "gentil",
      chance: 0.8,
      intelligence: 0.6,
    },
    MECHANT: {
      typeName: "mechant",
      vitesseFaim: 0.9,
      force: 1.2,
    },
    FOU: {
      typeName: "fou",
      vitesseFaim: 0.8,
      vitesseFatigue: 0.6,
      chance: 1.6,
      force: 0.9,
      vitesse: 1.2,
      natation: 1.1,
      intelligence: 0.5,
      precision: 0.8,
    },
    PARFAIT: {
      typeName: "parfait",
      vitesseFaim: 0.3,
      vitesseFatigue: 0.3,
      force: 1.5,
      vitesse: 1.5,
      natation: 1.5,
      survie: 1.5,
      intelligence: 1.5,
      precision: 1.5,
    },
    FUN: {
      typeName: "fun",
      vitesseFaim: 1,
      vitesseFatigue: 0.7,
      vitesse: 0.8,
      survie: 0.9,
    },
    SPORTIF: {
      typeName: "sportif",
      vitesseFaim: 1.2,
      vitesseFatigue: 0.6,
      force: 1.8,
      vitesse: 1.8,
      natation: 1.6,
      precision: 1.1,
    },
    STRATEGE: {
      typeName: "stratege",
      vitesseFaim: 1.2,
      vitesseFatigue: 1.2,
      chance: 1.2,
      force: 0.6,
      vitesse: 0.7,
      natation: 0.7,
      survie: 0.8,
      intelligence: 2,
      precision: 0.9,
    },
    DOYEN: {
      typeName: "doyen",
      vitesseFaim: 0.8,
      vitesseFatigue: 1.2,
      chance: 1.1,
      force: 0.7,
      vitesse: 0.7,
      survie: 1.3,
      intelligence: 1.2,
    },
    FLEMMARD: {
      typeName: "flemmard",
      vitesseFatigue: 1.5,
      chance: 1.2,
      force: 0.8,
      vitesse: 0.8,
      survie: 0.5,
    },
    CHANCEUX: {
      typeName: "chanceux",
      chance: 2,
      force: 0.9,
      vitesse: 1.2,
      natation: 1.1,
      precision: 1.6,
    },
    MALCHANCEUX: {
      typeName: "malchanceux",
      vitesseFaim: 1.2,
      vitesseFatigue: 1.3,
      chance: 0.3,
      force: 1.1,
      vitesse: 1.3,
      survie: 1.1,
      precision: 0.6,
    },
    BAVARD: {
      typeName: "bavard",
      vitesseFaim: 1.5,
      vitesseFatigue: 0.5,
      chance: 1.3,
      force: 0.8,
      vitesse: 1.2,
      natation: 1.3,
      survie: 0.8,
      intelligence: 0.8,
    },
    GOURMAND: {
      typeName: "gourmand",
      vitesseFaim: 1.8,
      vitesseFatigue: 1.2,
      force: 1.3,
      vitesse: 0.8,
      natation: 0.8,
    },
    MUSCLE: {
      typeName: "musclé",
      vitesseFaim: 1.3,
      vitesseFatigue: 0.8,
      force: 2,
      vitesse: 1.6,
      natation: 1.2,
      survie: 0.7,
      intelligence: 0.6,
    },
    DEPRESSIF: {
      typeName: "dépressif",
      vitesseFatigue: 1.6,
      chance: 0.6,
      force: 0.6,
      vitesse: 0.6,
      survie: 0.8,
      intelligence: 1.2,
    },
    PLAINTIF: {
      typeName: "plaintif",
      vitesseFaim: 1.5,
      vitesseFatigue: 1.5,
      chance: 1.2,
      vitesse: 0.9,
      survie: 0.7,
    },
    PEUREUX: {
      typeName: "peureux",
      vitesseFaim: 1,
      vitesseFatigue: 1,
      chance: 1.2,
      force: 0.6,
      vitesse: 1.3,
      natation: 0.7,
      survie: 0.5,
      intelligence: 1.1,
    },
    DEBROUILLARD: {
      typeName: "débrouillard",
      vitesseFaim: 0.8,
      vitesseFatigue: 0.7,
      chance: 0.6,
      force: 1.2,
      vitesse: 1.2,
      natation: 1.2,
      survie: 1.6,
      intelligence: 1.2,
      precision: 1.2,
    },
    NAGEUR: {
      typeName: "nageur",
      force: 1.2,
      vitesse: 1.2,
      natation: 2.1,
    },
  };

  constructor(name, type, genre) {
    this.name = name;
    this.type = type || Candidate.TYPE.NORMAL;
    this.genre = genre || "H";
    this.faim = 0; // pourcentage de faim
    this.fatigue = 0; // pourcentage de fatigue
    this.items = []
    this.friends = []
    this.ennemies = []
    this.immunity = false
  }

  presentation() {
    // console.log(`Bonjour je suis ${this.name}, de type ${this.type.typeName} et je suis de genre ${this.genre}`)
  }

  getType() {
    return this.type;
  }

  updateFatigue(unite) {
    let vitesseFatigue = this.type.vitesseFatigue || 1
    this.fatigue += unite * vitesseFatigue
  }

  updateFaim(unite) {
    let vitesseFaim = this.type.vitesseFaim || 1
    this.faim += unite * vitesseFaim
  }

  getFatigue() {
    return this.fatigue
  }

  dialogue() {
    return `${this.name} : je suis ${this.type.intelligence || 1}, ma fatigue est ${this.fatigue} , ma faim est de ${this.faim}`
  }

  addItem(item) {
    this.items.push(item)
  }

  addFriend(candidate){
    this.friends.push(candidate)
  }

  addEnnemy(candidate){
    this.ennemies.push(candidate)
  }

  getCompetence(competence){
    return this.type[competence] || 1
  }

  vote(candidates, immunedCandidates, color="white") {
    // Vote for an ennemy, if no ennemies, don't vote for a friend, if everybody friend or no friend vote for somebody random that is not you
    candidates = Statics.diffArray(candidates, immunedCandidates)
    if (this.ennemies.length) {
      let votedCandidate = Statics.randomArray(this.ennemies.slice(), this)
      if (candidates.includes(votedCandidate)) { // test if the ennemy is still in the team
        return {vote: votedCandidate, text: {text: `${this.name}: Ce soir je vote contre toi ${votedCandidate.name} car tu es trop ${votedCandidate.type.typeName}`, color: color, key: Statics.uniqueKey() }}
      }
    }
    if (this.friends.length) {
      let notFriendsCandidates = Statics.diffArray(candidates, this.friends) 
      if (notFriendsCandidates.length) {
        let votedCandidate = Statics.randomArray(notFriendsCandidates.slice(), this)
        if (candidates.includes(votedCandidate)) { // test if the friend is still in the team
          return {vote: votedCandidate, text: {text: `${this.name}: Désolé mais ce soir je vote contre toi ${votedCandidate.name} c'est pas personel juste que j'ai moins d'afinité avec toi`, color: color , key: Statics.uniqueKey()}}
        }
      }
    }
    return {vote: Statics.randomArray(candidates.slice(), this), text: {text: `${this.name}: Pour qui je vote ? Suspense`, color: color, key: Statics.uniqueKey()}}
  }

  immune() {
    this.immunity = true
  }

  notImmune() {
    this.immunity = false
  }

}

