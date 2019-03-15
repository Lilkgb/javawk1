export class Player {
  constructor(name,chClass,hp,atk,items) {
    this.name = name;
    this.chClass = chClass;
    this.hp = hp;
    this.atk = atk;
    this.items = [];
    this.turn = true;
  }
  setName(name) {
    this.name = name;
  }

  setClass(chClass) {
    this.chClass = chClass;
    if (this.chClass === 'Warrior') {
      this.items.push('Knife');
    } else if (this.chClass === 'Ranger') {
      this.items.push('Bow & Arrows');
    } else if (this.chClass === 'Wizard') {
      this.items.push('Wand');
    }
  }

  playerAttack(Enemy) {
    console.log(`The Enemy HP was: ${Enemy.hp}`);
    console.log(`The player hits for: ${this.atk}`);
    Enemy.hp -= this.atk;
    console.log(`The Enemy is now: ${Enemy.hp}`);
  }

  playerAddItem(item) {
    console.log(`Current Inventory: ${this.items}`);
    this.items.push(item);
    console.log(`Current Inventory: ${this.items}`);
  }
}

export class Enemy {
  constructor(name,hp,atk) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.turn = false;
  }
  enenmyAttack(Player) {
    console.log(`The players HP was: ${Player.hp}`);
    console.log(`The monster hits for: ${this.atk}`);
    Player.hp -= this.atk;
    console.log(`The playersHP is now: ${Player.hp}`);
  }
}

export function encounter(enemyArray) {
  let randomNumber = Math.floor(Math.random() * enemyArray.length);
  console.log(randomNumber);
  return randomNumber;
}

console.log(typeof encounter(['a', 'b']));
