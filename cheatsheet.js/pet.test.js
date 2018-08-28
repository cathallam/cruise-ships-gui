const Pet = require('../src/pet'); 
const MAXIMUM_FITNESS = 10;

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
  });

  describe('constructor', () => {
    it('has a initial age of 0', () => {
      const pet = new Pet('Fido');
      expect(pet.age).toEqual(0);
    });
  });

  describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      expect(pet.age).toEqual(1);
    });
  });
  
  describe('constructor', () => {
    it('has an initial hunger of 0', () => {
      const pet = new Pet('Fido');
      expect(pet.hunger).toEqual(0);
    });
  });

  describe('growUp', () => {
      it('increases the hunger by 5', () => {
          const pet = new Pet('Fido');
          pet.growUp();
          expect(pet.hunger).toEqual(5);
      });
    });describe('constructor', () => {
    it('has an initial hunger of 0', () => {
      const pet = new Pet('Fido');
      expect(pet.hunger).toEqual(0);
    });
  });  

    describe('growUp', () => {
        it('increments hunger by 5', () => {
          const pet = new Pet('Fido');
          pet.growUp();
          expect(pet.hunger).toEqual(5);
        });
      });
    
      describe('growUp', () => {
        it('decrements fitness by 3', () => {
          const pet = new Pet('Fido');
          pet.growUp();
          expect(pet.fitness).toEqual(7);
        });
      });

      describe('walk', () => {
        it('increases fitness by 4', () => {
          const pet = new Pet('fido');
          pet.fitness = 4;
          pet.walk();
          expect(pet.fitness).toEqual(8);
        });
      });

      describe('walk', () => {
        it('increases fitness by to a maximum of 10', () => {
          const pet = new Pet('fido');
          pet.fitness = 8;
          pet.walk();
          expect(pet.fitness).toEqual(MAXIMUM_FITNESS);
        });
      });

      describe('feed', () => {
        it('decreases hunger by 3', () =>{
          const pet = new Pet('Fido');
          pet.hunger = 9;
          pet.feed();
          expect(pet.hunger).toEqual(6);
        });
      });

      describe('feed', () => {
        it('decreases hunger to a minimum of 0', () => {
          const pet = new Pet('Fido');
          pet.hunger = 3;
          pet.feed();
          expect(pet.hunger).toEqual(0);
        });
      });

      describe('checkUp', () => {
        it('Return I need a walk if pet\'s fitness is 3 or less', () => {
          const pet = new Pet('Fido');
          pet.fitness = 3;
          expect(pet.checkUp()).toEqual('I need a walk');
        });
      });
      
      describe('checkUp', () => {
        it('Return I am hungry if pet\'s hunger is 5 or more', () => {
          const pet = new Pet('Fido');
          pet.hunger = 5;
          expect(pet.checkUp()).toEqual('I am hungry');
        });
      });

      describe('checkUp', () => {
        it('Return I am hungry AND I need a walk if both fitness and hungry are true', () => {
          const pet = new Pet('Fido');
          pet.fitness = 3;
          pet.hunger = 5;
          expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
        });
      });
      
      describe('checkUp', () => {
        it('Returns I feel great! if neither of the fitness and hungry are true, ', () => {
          const pet = new Pet('Fido');
          pet.fitness = 4;
          pet.hunger = 4;
          expect(pet.checkUp()).toEqual('I feel great');
        });
      });

      describe('isAlive', () => {
        it('if the pets hunger is 10 or more, it should return false', () => {
          const pet = new Pet('Fido');
          pet.hunger = 10;
          expect(pet.isAlive).toEqual(false);
          const buster = new Pet('Buster');
          pet.hunger = 11;
          expect(pet.isAlive).toEqual(false);
          const rex = new Pet('Rex');
          pet.hunger = 9;
          expect(pet.isAlive).toEqual(true);
        });
      });

      describe('isAlive', () => {
        it('if the pets age is 30 or more, it should return false', () => {
          const pet = new Pet('Fido');
          pet.age = 30;
          expect(pet.isAlive).toEqual(false);
          const buster = new Pet('Buster');
          pet.age = 31;
          expect(pet.isAlive).toEqual(false);
          const rex = new Pet('Rex');
          pet.age = 29;
          expect(pet.isAlive).toEqual(true);
        });
      });


describe('isAlive', () => {
    it('if the pets fitness >= 1, hunger <= 9, and age <= 29, it should return true', () => {
      const pet = new Pet('Fido');
      pet.fitness = 1;
      pet.hunger = 9;
      pet.age = 29;
      expect(pet.isAlive).toEqual(true);
      const buster = new Pet('Buster');
      pet.fitness = 0;
      pet.hunger = 10;
      pet.age = 30;
      expect(pet.isAlive).toEqual(false);
    });
  });

  describe('checkUpDeath', () => {
    it('if the pets fitness is 0, returns Your pet is no longer alive', () => {
      const pet = new Pet('Fido');
      pet.fitness = 0;
      expect(pet.checkUp()).toEqual('Your pet is no longer alive :(');
    });
  });

  describe('checkUpDeath', () => {
    it('if the pets hunger is 5 or more, returns Your pet is no longer alive', () => {
      const pet = new Pet('Fido');
      pet.hunger = 10;
      expect(pet.checkUp()).toEqual('Your pet is no longer alive :(');
    });
  });

  describe('checkUpDeath', () => {
    it('if both fitness and hungry are true, returns Your pet is no longer alive', () => {
      const pet = new Pet('Fido');
      pet.fitness = 0;
      pet.hunger = 10;
      expect(pet.checkUp()).toEqual('Your pet is no longer alive :(');
    });
  });