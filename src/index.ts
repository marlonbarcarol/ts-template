// Encrypting
import {
	Alphabet,
	Cipher,
	EnigmaConfiguration,
	Plugboard,
	Reflector,
	Rotor,
	RotorWiring,
	Wheel,
	Wiring,
} from '@enigmaciphy/engine';

const alphabet = Alphabet.create('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

const rotors: Rotor[] = [
  new Rotor({
    position: 'A',
    wiring: RotorWiring.create(
        Alphabet.create('ABCDEFGHIJKLMNOPQRSTUVWXYZ'),
        Alphabet.create('EKMFLGDQVZNTOWYHXUSPAIBRCJ')
    ),
    notches: ['Q'],
    lock: false,
  }),
  new Rotor({
    position: 'A',
    wiring: RotorWiring.create(
      Alphabet.create('ABCDEFGHIJKLMNOPQRSTUVWXYZ'),
      Alphabet.create('AJDKSIRUXBLHWTMCQGZNPYFVOE')
    ),
    notches: ['E'],
    lock: false,
  }),
  new Rotor({
    position: 'A',
    wiring: RotorWiring.create(
      Alphabet.create('ABCDEFGHIJKLMNOPQRSTUVWXYZ'),
      Alphabet.create('BDFHJLCPRTXVZNYEIWGAKMUSQO')
    ),
    notches: ['V'],
    lock: false,
  }),
];

const plugboard = new Plugboard(
  Wiring.create(
    Alphabet.create('ABCDEFGHIJKLMNOPQRSTUVWXYZ'),
    Alphabet.create('AQRIJFHGDEWLTNSXBCOMZVKPYU')
  )
);
const entry = new Wheel(Wiring.withEnglish(Alphabet.createEnglish()));
const reflector = new Reflector(Wiring.withEnglish(Alphabet.create('YRUHQSLDPXNGOKMIEBFZCWVJAT')));

const configuration: EnigmaConfiguration = {
  alphabet,
  plugboard,
  entry,
  rotors,
  reflector,
  chargroup: 5,
};

const cipher = new Cipher(configuration);

cipher.encrypt('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
// XPJUP VYBRA QAJNY VAIXO UUWXO VVPDM LKVEK BHQIL DMAKH YL
