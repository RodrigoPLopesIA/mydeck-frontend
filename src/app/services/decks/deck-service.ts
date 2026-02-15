import { Injectable } from '@angular/core';
interface IDeck {
  id: number;
  name: string;
  description: string;
  cards: ICard[];
}

interface ICard {
  id: number;
  name: string;
  type: string;
  attribute: string;
  attack: number;
  defense: number;
  imageUrl: string;
  description?: string;
  monsterType?: string;
  monsterSubTypes?: string[];
}
@Injectable({
  providedIn: 'root',
})
export class DeckService {
  decks: IDeck[] = [{
    id: 1,
    name: 'Dark Magician Supreme',
    description: 'Deck focado em controle e invocação especial.',
    cards: [
      {
        id: 1,
        name: 'Blue-Eyes White Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 3000,
        defense: 2500,
        monsterType: 'Dragon',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/89631139.jpg',
        description: 'This legendary dragon is a powerful engine of destruction.'
      },
      {
        id: 2,
        name: 'Dark Magician',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2500,
        defense: 2100,
        monsterType: 'Spellcaster',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/46986414.jpg',
        description: 'The ultimate wizard in terms of attack and defense.'
      },
      {
        id: 3,
        name: 'Red-Eyes Black Dragon',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2400,
        defense: 2000,
        monsterType: 'Dragon',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/74677422.jpg',
        description: 'A ferocious dragon with a deadly attack.'
      },
      {
        id: 4,
        name: 'Monster Reborn',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/83764718.jpg',
        description: 'Target 1 monster in either GY; Special Summon it.'
      },
      {
        id: 5,
        name: 'Exodia the Forbidden One',
        type: 'Monster',
        attribute: 'DARK',
        attack: 1000,
        defense: 1000,
        monsterType: 'Spellcaster',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/33396948.jpg',
        description: 'If you have all 5 pieces of Exodia in your hand, you win the Duel.'
      },
      {
        id: 6,
        name: 'Slifer the Sky Dragon',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 0,
        defense: 0,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000020.jpg',
        description: 'One of the legendary Egyptian God Cards.'
      },
      {
        id: 7,
        name: 'Obelisk the Tormentor',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 4000,
        defense: 4000,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000000.jpg',
        description: 'The strongest of the Egyptian Gods.'
      },
      {
        id: 8,
        name: 'The Winged Dragon of Ra',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 0,
        defense: 0,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000010.jpg',
        description: 'The third Egyptian God Card.'
      },
      {
        id: 9,
        name: 'Summoned Skull',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2500,
        defense: 1200,
        monsterType: 'Fiend',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/70781052.jpg',
        description: 'A fiend with dark powers for confusing the enemy.'
      },
      {
        id: 10,
        name: 'Cyber Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 2100,
        defense: 1600,
        monsterType: 'Machine',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/70095154.jpg',
        description: 'If only your opponent controls a monster, you can Special Summon this card.'
      },
      {
        id: 11,
        name: 'Kuriboh',
        type: 'Monster',
        attribute: 'DARK',
        attack: 300,
        defense: 200,
        monsterType: 'Fiend',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/40640057.jpg',
        description: 'During damage calculation, you can discard this card; you take no battle damage.'
      },
      {
        id: 12,
        name: 'Junk Synchron',
        type: 'Monster',
        attribute: 'DARK',
        attack: 1300,
        defense: 500,
        monsterType: 'Warrior',
        monsterSubTypes: ['Effect', 'Tuner'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/63977008.jpg',
        description: 'When this card is Normal Summoned, you can Special Summon 1 Level 2 or lower monster from your GY.'
      },
      {
        id: 13,
        name: 'Blue-Eyes Ultimate Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 4500,
        defense: 3800,
        monsterType: 'Dragon',
        monsterSubTypes: ['Fusion'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/23995346.jpg',
        description: 'Fusion of 3 Blue-Eyes White Dragons.'
      },
      {
        id: 14,
        name: 'Pot of Greed',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/55144522.jpg',
        description: 'Draw 2 cards.'
      },
      {
        id: 15,
        name: 'Mirror Force',
        type: 'Trap',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/44095762.jpg',
        description: 'When an opponent’s monster declares an attack: Destroy all Attack Position monsters your opponent controls.'
      },
      {
        id: 16,
        name: 'Raigeki',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/12580477.jpg',
        description: 'Destroy all monsters your opponent controls.'
      },
      {
        id: 17,
        name: 'Dark Hole',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/53129443.jpg',
        description: 'Destroy all monsters on the field.'
      }
    ]
  },
  {
    id: 2,
    name: 'Dark Magician Control',
    description: 'Controle e magia negra.',
    cards: [
      {
        id: 1,
        name: 'Blue-Eyes White Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 3000,
        defense: 2500,
        monsterType: 'Dragon',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/89631139.jpg',
        description: 'This legendary dragon is a powerful engine of destruction.'
      },
      {
        id: 2,
        name: 'Dark Magician',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2500,
        defense: 2100,
        monsterType: 'Spellcaster',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/46986414.jpg',
        description: 'The ultimate wizard in terms of attack and defense.'
      },
      {
        id: 3,
        name: 'Red-Eyes Black Dragon',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2400,
        defense: 2000,
        monsterType: 'Dragon',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/74677422.jpg',
        description: 'A ferocious dragon with a deadly attack.'
      },
      {
        id: 4,
        name: 'Monster Reborn',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/83764718.jpg',
        description: 'Target 1 monster in either GY; Special Summon it.'
      },
      {
        id: 5,
        name: 'Exodia the Forbidden One',
        type: 'Monster',
        attribute: 'DARK',
        attack: 1000,
        defense: 1000,
        monsterType: 'Spellcaster',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/33396948.jpg',
        description: 'If you have all 5 pieces of Exodia in your hand, you win the Duel.'
      },
      {
        id: 6,
        name: 'Slifer the Sky Dragon',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 0,
        defense: 0,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000020.jpg',
        description: 'One of the legendary Egyptian God Cards.'
      },
      {
        id: 7,
        name: 'Obelisk the Tormentor',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 4000,
        defense: 4000,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000000.jpg',
        description: 'The strongest of the Egyptian Gods.'
      },
      {
        id: 8,
        name: 'The Winged Dragon of Ra',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 0,
        defense: 0,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000010.jpg',
        description: 'The third Egyptian God Card.'
      },
      {
        id: 9,
        name: 'Summoned Skull',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2500,
        defense: 1200,
        monsterType: 'Fiend',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/70781052.jpg',
        description: 'A fiend with dark powers for confusing the enemy.'
      },
      {
        id: 10,
        name: 'Cyber Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 2100,
        defense: 1600,
        monsterType: 'Machine',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/70095154.jpg',
        description: 'If only your opponent controls a monster, you can Special Summon this card.'
      },
      {
        id: 11,
        name: 'Kuriboh',
        type: 'Monster',
        attribute: 'DARK',
        attack: 300,
        defense: 200,
        monsterType: 'Fiend',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/40640057.jpg',
        description: 'During damage calculation, you can discard this card; you take no battle damage.'
      },
      {
        id: 12,
        name: 'Junk Synchron',
        type: 'Monster',
        attribute: 'DARK',
        attack: 1300,
        defense: 500,
        monsterType: 'Warrior',
        monsterSubTypes: ['Effect', 'Tuner'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/63977008.jpg',
        description: 'When this card is Normal Summoned, you can Special Summon 1 Level 2 or lower monster from your GY.'
      },
      {
        id: 13,
        name: 'Blue-Eyes Ultimate Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 4500,
        defense: 3800,
        monsterType: 'Dragon',
        monsterSubTypes: ['Fusion'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/23995346.jpg',
        description: 'Fusion of 3 Blue-Eyes White Dragons.'
      },
      {
        id: 14,
        name: 'Pot of Greed',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/55144522.jpg',
        description: 'Draw 2 cards.'
      },
      {
        id: 15,
        name: 'Mirror Force',
        type: 'Trap',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/44095762.jpg',
        description: 'When an opponent’s monster declares an attack: Destroy all Attack Position monsters your opponent controls.'
      },
      {
        id: 16,
        name: 'Raigeki',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/12580477.jpg',
        description: 'Destroy all monsters your opponent controls.'
      },
      {
        id: 17,
        name: 'Dark Hole',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/53129443.jpg',
        description: 'Destroy all monsters on the field.'
      }
    ]
  },
  {
    id: 3, 
    name: 'Blue-Eyes Chaos', 
    description: 'Ataque explosivo.', 
    cards: [
      {
        id: 1,
        name: 'Blue-Eyes White Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 3000,
        defense: 2500,
        monsterType: 'Dragon',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/89631139.jpg',
        description: 'This legendary dragon is a powerful engine of destruction.'
      },
      {
        id: 2,
        name: 'Dark Magician',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2500,
        defense: 2100,
        monsterType: 'Spellcaster',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/46986414.jpg',
        description: 'The ultimate wizard in terms of attack and defense.'
      },
      {
        id: 3,
        name: 'Red-Eyes Black Dragon',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2400,
        defense: 2000,
        monsterType: 'Dragon',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/74677422.jpg',
        description: 'A ferocious dragon with a deadly attack.'
      },
      {
        id: 4,
        name: 'Monster Reborn',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/83764718.jpg',
        description: 'Target 1 monster in either GY; Special Summon it.'
      },
      {
        id: 5,
        name: 'Exodia the Forbidden One',
        type: 'Monster',
        attribute: 'DARK',
        attack: 1000,
        defense: 1000,
        monsterType: 'Spellcaster',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/33396948.jpg',
        description: 'If you have all 5 pieces of Exodia in your hand, you win the Duel.'
      },
      {
        id: 6,
        name: 'Slifer the Sky Dragon',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 0,
        defense: 0,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000020.jpg',
        description: 'One of the legendary Egyptian God Cards.'
      },
      {
        id: 7,
        name: 'Obelisk the Tormentor',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 4000,
        defense: 4000,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000000.jpg',
        description: 'The strongest of the Egyptian Gods.'
      },
      {
        id: 8,
        name: 'The Winged Dragon of Ra',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 0,
        defense: 0,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000010.jpg',
        description: 'The third Egyptian God Card.'
      },
      {
        id: 9,
        name: 'Summoned Skull',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2500,
        defense: 1200,
        monsterType: 'Fiend',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/70781052.jpg',
        description: 'A fiend with dark powers for confusing the enemy.'
      },
      {
        id: 10,
        name: 'Cyber Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 2100,
        defense: 1600,
        monsterType: 'Machine',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/70095154.jpg',
        description: 'If only your opponent controls a monster, you can Special Summon this card.'
      },
      {
        id: 11,
        name: 'Kuriboh',
        type: 'Monster',
        attribute: 'DARK',
        attack: 300,
        defense: 200,
        monsterType: 'Fiend',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/40640057.jpg',
        description: 'During damage calculation, you can discard this card; you take no battle damage.'
      },
      {
        id: 12,
        name: 'Junk Synchron',
        type: 'Monster',
        attribute: 'DARK',
        attack: 1300,
        defense: 500,
        monsterType: 'Warrior',
        monsterSubTypes: ['Effect', 'Tuner'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/63977008.jpg',
        description: 'When this card is Normal Summoned, you can Special Summon 1 Level 2 or lower monster from your GY.'
      },
      {
        id: 13,
        name: 'Blue-Eyes Ultimate Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 4500,
        defense: 3800,
        monsterType: 'Dragon',
        monsterSubTypes: ['Fusion'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/23995346.jpg',
        description: 'Fusion of 3 Blue-Eyes White Dragons.'
      },
      {
        id: 14,
        name: 'Pot of Greed',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/55144522.jpg',
        description: 'Draw 2 cards.'
      },
      {
        id: 15,
        name: 'Mirror Force',
        type: 'Trap',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/44095762.jpg',
        description: 'When an opponent’s monster declares an attack: Destroy all Attack Position monsters your opponent controls.'
      },
      {
        id: 16,
        name: 'Raigeki',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/12580477.jpg',
        description: 'Destroy all monsters your opponent controls.'
      },
      {
        id: 17,
        name: 'Dark Hole',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/53129443.jpg',
        description: 'Destroy all monsters on the field.'
      }
    ]
  },
  {
    id: 4, 
    name: 'Cyber Dragon OTK', 
    description: 'Finalização rápida.', 
    cards: [
      {
        id: 1,
        name: 'Blue-Eyes White Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 3000,
        defense: 2500,
        monsterType: 'Dragon',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/89631139.jpg',
        description: 'This legendary dragon is a powerful engine of destruction.'
      },
      {
        id: 2,
        name: 'Dark Magician',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2500,
        defense: 2100,
        monsterType: 'Spellcaster',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/46986414.jpg',
        description: 'The ultimate wizard in terms of attack and defense.'
      },
      {
        id: 3,
        name: 'Red-Eyes Black Dragon',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2400,
        defense: 2000,
        monsterType: 'Dragon',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/74677422.jpg',
        description: 'A ferocious dragon with a deadly attack.'
      },
      {
        id: 4,
        name: 'Monster Reborn',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/83764718.jpg',
        description: 'Target 1 monster in either GY; Special Summon it.'
      },
      {
        id: 5,
        name: 'Exodia the Forbidden One',
        type: 'Monster',
        attribute: 'DARK',
        attack: 1000,
        defense: 1000,
        monsterType: 'Spellcaster',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/33396948.jpg',
        description: 'If you have all 5 pieces of Exodia in your hand, you win the Duel.'
      },
      {
        id: 6,
        name: 'Slifer the Sky Dragon',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 0,
        defense: 0,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000020.jpg',
        description: 'One of the legendary Egyptian God Cards.'
      },
      {
        id: 7,
        name: 'Obelisk the Tormentor',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 4000,
        defense: 4000,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000000.jpg',
        description: 'The strongest of the Egyptian Gods.'
      },
      {
        id: 8,
        name: 'The Winged Dragon of Ra',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 0,
        defense: 0,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000010.jpg',
        description: 'The third Egyptian God Card.'
      },
      {
        id: 9,
        name: 'Summoned Skull',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2500,
        defense: 1200,
        monsterType: 'Fiend',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/70781052.jpg',
        description: 'A fiend with dark powers for confusing the enemy.'
      },
      {
        id: 10,
        name: 'Cyber Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 2100,
        defense: 1600,
        monsterType: 'Machine',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/70095154.jpg',
        description: 'If only your opponent controls a monster, you can Special Summon this card.'
      },
      {
        id: 11,
        name: 'Kuriboh',
        type: 'Monster',
        attribute: 'DARK',
        attack: 300,
        defense: 200,
        monsterType: 'Fiend',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/40640057.jpg',
        description: 'During damage calculation, you can discard this card; you take no battle damage.'
      },
      {
        id: 12,
        name: 'Junk Synchron',
        type: 'Monster',
        attribute: 'DARK',
        attack: 1300,
        defense: 500,
        monsterType: 'Warrior',
        monsterSubTypes: ['Effect', 'Tuner'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/63977008.jpg',
        description: 'When this card is Normal Summoned, you can Special Summon 1 Level 2 or lower monster from your GY.'
      },
      {
        id: 13,
        name: 'Blue-Eyes Ultimate Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 4500,
        defense: 3800,
        monsterType: 'Dragon',
        monsterSubTypes: ['Fusion'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/23995346.jpg',
        description: 'Fusion of 3 Blue-Eyes White Dragons.'
      },
      {
        id: 14,
        name: 'Pot of Greed',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/55144522.jpg',
        description: 'Draw 2 cards.'
      },
      {
        id: 15,
        name: 'Mirror Force',
        type: 'Trap',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/44095762.jpg',
        description: 'When an opponent’s monster declares an attack: Destroy all Attack Position monsters your opponent controls.'
      },
      {
        id: 16,
        name: 'Raigeki',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/12580477.jpg',
        description: 'Destroy all monsters your opponent controls.'
      },
      {
        id: 17,
        name: 'Dark Hole',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/53129443.jpg',
        description: 'Destroy all monsters on the field.'
      }
    ]
  },
  {
    id: 5, 
    name: 'Branded Despia', 
    description: 'Fusão estratégica.', 
    cards: [
      {
        id: 1,
        name: 'Blue-Eyes White Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 3000,
        defense: 2500,
        monsterType: 'Dragon',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/89631139.jpg',
        description: 'This legendary dragon is a powerful engine of destruction.'
      },
      {
        id: 2,
        name: 'Dark Magician',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2500,
        defense: 2100,
        monsterType: 'Spellcaster',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/46986414.jpg',
        description: 'The ultimate wizard in terms of attack and defense.'
      },
      {
        id: 3,
        name: 'Red-Eyes Black Dragon',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2400,
        defense: 2000,
        monsterType: 'Dragon',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/74677422.jpg',
        description: 'A ferocious dragon with a deadly attack.'
      },
      {
        id: 4,
        name: 'Monster Reborn',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/83764718.jpg',
        description: 'Target 1 monster in either GY; Special Summon it.'
      },
      {
        id: 5,
        name: 'Exodia the Forbidden One',
        type: 'Monster',
        attribute: 'DARK',
        attack: 1000,
        defense: 1000,
        monsterType: 'Spellcaster',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/33396948.jpg',
        description: 'If you have all 5 pieces of Exodia in your hand, you win the Duel.'
      },
      {
        id: 6,
        name: 'Slifer the Sky Dragon',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 0,
        defense: 0,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000020.jpg',
        description: 'One of the legendary Egyptian God Cards.'
      },
      {
        id: 7,
        name: 'Obelisk the Tormentor',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 4000,
        defense: 4000,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000000.jpg',
        description: 'The strongest of the Egyptian Gods.'
      },
      {
        id: 8,
        name: 'The Winged Dragon of Ra',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 0,
        defense: 0,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000010.jpg',
        description: 'The third Egyptian God Card.'
      },
      {
        id: 9,
        name: 'Summoned Skull',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2500,
        defense: 1200,
        monsterType: 'Fiend',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/70781052.jpg',
        description: 'A fiend with dark powers for confusing the enemy.'
      },
      {
        id: 10,
        name: 'Cyber Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 2100,
        defense: 1600,
        monsterType: 'Machine',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/70095154.jpg',
        description: 'If only your opponent controls a monster, you can Special Summon this card.'
      },
      {
        id: 11,
        name: 'Kuriboh',
        type: 'Monster',
        attribute: 'DARK',
        attack: 300,
        defense: 200,
        monsterType: 'Fiend',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/40640057.jpg',
        description: 'During damage calculation, you can discard this card; you take no battle damage.'
      },
      {
        id: 12,
        name: 'Junk Synchron',
        type: 'Monster',
        attribute: 'DARK',
        attack: 1300,
        defense: 500,
        monsterType: 'Warrior',
        monsterSubTypes: ['Effect', 'Tuner'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/63977008.jpg',
        description: 'When this card is Normal Summoned, you can Special Summon 1 Level 2 or lower monster from your GY.'
      },
      {
        id: 13,
        name: 'Blue-Eyes Ultimate Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 4500,
        defense: 3800,
        monsterType: 'Dragon',
        monsterSubTypes: ['Fusion'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/23995346.jpg',
        description: 'Fusion of 3 Blue-Eyes White Dragons.'
      },
      {
        id: 14,
        name: 'Pot of Greed',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/55144522.jpg',
        description: 'Draw 2 cards.'
      },
      {
        id: 15,
        name: 'Mirror Force',
        type: 'Trap',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/44095762.jpg',
        description: 'When an opponent’s monster declares an attack: Destroy all Attack Position monsters your opponent controls.'
      },
      {
        id: 16,
        name: 'Raigeki',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/12580477.jpg',
        description: 'Destroy all monsters your opponent controls.'
      },
      {
        id: 17,
        name: 'Dark Hole',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/53129443.jpg',
        description: 'Destroy all monsters on the field.'
      }
    ]
  },
  {
    id: 6, 
    name: 'Tearlaments Meta', 
    description: 'Deck competitivo.', 
    cards: [
      {
        id: 1,
        name: 'Blue-Eyes White Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 3000,
        defense: 2500,
        monsterType: 'Dragon',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/89631139.jpg',
        description: 'This legendary dragon is a powerful engine of destruction.'
      },
      {
        id: 2,
        name: 'Dark Magician',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2500,
        defense: 2100,
        monsterType: 'Spellcaster',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/46986414.jpg',
        description: 'The ultimate wizard in terms of attack and defense.'
      },
      {
        id: 3,
        name: 'Red-Eyes Black Dragon',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2400,
        defense: 2000,
        monsterType: 'Dragon',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/74677422.jpg',
        description: 'A ferocious dragon with a deadly attack.'
      },
      {
        id: 4,
        name: 'Monster Reborn',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/83764718.jpg',
        description: 'Target 1 monster in either GY; Special Summon it.'
      },
      {
        id: 5,
        name: 'Exodia the Forbidden One',
        type: 'Monster',
        attribute: 'DARK',
        attack: 1000,
        defense: 1000,
        monsterType: 'Spellcaster',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/33396948.jpg',
        description: 'If you have all 5 pieces of Exodia in your hand, you win the Duel.'
      },
      {
        id: 6,
        name: 'Slifer the Sky Dragon',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 0,
        defense: 0,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000020.jpg',
        description: 'One of the legendary Egyptian God Cards.'
      },
      {
        id: 7,
        name: 'Obelisk the Tormentor',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 4000,
        defense: 4000,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000000.jpg',
        description: 'The strongest of the Egyptian Gods.'
      },
      {
        id: 8,
        name: 'The Winged Dragon of Ra',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 0,
        defense: 0,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000010.jpg',
        description: 'The third Egyptian God Card.'
      },
      {
        id: 9,
        name: 'Summoned Skull',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2500,
        defense: 1200,
        monsterType: 'Fiend',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/70781052.jpg',
        description: 'A fiend with dark powers for confusing the enemy.'
      },
      {
        id: 10,
        name: 'Cyber Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 2100,
        defense: 1600,
        monsterType: 'Machine',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/70095154.jpg',
        description: 'If only your opponent controls a monster, you can Special Summon this card.'
      },
      {
        id: 11,
        name: 'Kuriboh',
        type: 'Monster',
        attribute: 'DARK',
        attack: 300,
        defense: 200,
        monsterType: 'Fiend',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/40640057.jpg',
        description: 'During damage calculation, you can discard this card; you take no battle damage.'
      },
      {
        id: 12,
        name: 'Junk Synchron',
        type: 'Monster',
        attribute: 'DARK',
        attack: 1300,
        defense: 500,
        monsterType: 'Warrior',
        monsterSubTypes: ['Effect', 'Tuner'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/63977008.jpg',
        description: 'When this card is Normal Summoned, you can Special Summon 1 Level 2 or lower monster from your GY.'
      },
      {
        id: 13,
        name: 'Blue-Eyes Ultimate Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 4500,
        defense: 3800,
        monsterType: 'Dragon',
        monsterSubTypes: ['Fusion'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/23995346.jpg',
        description: 'Fusion of 3 Blue-Eyes White Dragons.'
      },
      {
        id: 14,
        name: 'Pot of Greed',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/55144522.jpg',
        description: 'Draw 2 cards.'
      },
      {
        id: 15,
        name: 'Mirror Force',
        type: 'Trap',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/44095762.jpg',
        description: 'When an opponent’s monster declares an attack: Destroy all Attack Position monsters your opponent controls.'
      },
      {
        id: 16,
        name: 'Raigeki',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/12580477.jpg',
        description: 'Destroy all monsters your opponent controls.'
      },
      {
        id: 17,
        name: 'Dark Hole',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/53129443.jpg',
        description: 'Destroy all monsters on the field.'
      }
    ]
  },
  {
    id: 7, 
    name: 'Kashtira Lock', 
    description: 'Controle de campo.', 
    cards: [
      {
        id: 1,
        name: 'Blue-Eyes White Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 3000,
        defense: 2500,
        monsterType: 'Dragon',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/89631139.jpg',
        description: 'This legendary dragon is a powerful engine of destruction.'
      },
      {
        id: 2,
        name: 'Dark Magician',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2500,
        defense: 2100,
        monsterType: 'Spellcaster',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/46986414.jpg',
        description: 'The ultimate wizard in terms of attack and defense.'
      },
      {
        id: 3,
        name: 'Red-Eyes Black Dragon',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2400,
        defense: 2000,
        monsterType: 'Dragon',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/74677422.jpg',
        description: 'A ferocious dragon with a deadly attack.'
      },
      {
        id: 4,
        name: 'Monster Reborn',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/83764718.jpg',
        description: 'Target 1 monster in either GY; Special Summon it.'
      },
      {
        id: 5,
        name: 'Exodia the Forbidden One',
        type: 'Monster',
        attribute: 'DARK',
        attack: 1000,
        defense: 1000,
        monsterType: 'Spellcaster',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/33396948.jpg',
        description: 'If you have all 5 pieces of Exodia in your hand, you win the Duel.'
      },
      {
        id: 6,
        name: 'Slifer the Sky Dragon',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 0,
        defense: 0,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000020.jpg',
        description: 'One of the legendary Egyptian God Cards.'
      },
      {
        id: 7,
        name: 'Obelisk the Tormentor',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 4000,
        defense: 4000,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000000.jpg',
        description: 'The strongest of the Egyptian Gods.'
      },
      {
        id: 8,
        name: 'The Winged Dragon of Ra',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 0,
        defense: 0,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000010.jpg',
        description: 'The third Egyptian God Card.'
      },
      {
        id: 9,
        name: 'Summoned Skull',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2500,
        defense: 1200,
        monsterType: 'Fiend',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/70781052.jpg',
        description: 'A fiend with dark powers for confusing the enemy.'
      },
      {
        id: 10,
        name: 'Cyber Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 2100,
        defense: 1600,
        monsterType: 'Machine',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/70095154.jpg',
        description: 'If only your opponent controls a monster, you can Special Summon this card.'
      },
      {
        id: 11,
        name: 'Kuriboh',
        type: 'Monster',
        attribute: 'DARK',
        attack: 300,
        defense: 200,
        monsterType: 'Fiend',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/40640057.jpg',
        description: 'During damage calculation, you can discard this card; you take no battle damage.'
      },
      {
        id: 12,
        name: 'Junk Synchron',
        type: 'Monster',
        attribute: 'DARK',
        attack: 1300,
        defense: 500,
        monsterType: 'Warrior',
        monsterSubTypes: ['Effect', 'Tuner'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/63977008.jpg',
        description: 'When this card is Normal Summoned, you can Special Summon 1 Level 2 or lower monster from your GY.'
      },
      {
        id: 13,
        name: 'Blue-Eyes Ultimate Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 4500,
        defense: 3800,
        monsterType: 'Dragon',
        monsterSubTypes: ['Fusion'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/23995346.jpg',
        description: 'Fusion of 3 Blue-Eyes White Dragons.'
      },
      {
        id: 14,
        name: 'Pot of Greed',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/55144522.jpg',
        description: 'Draw 2 cards.'
      },
      {
        id: 15,
        name: 'Mirror Force',
        type: 'Trap',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/44095762.jpg',
        description: 'When an opponent’s monster declares an attack: Destroy all Attack Position monsters your opponent controls.'
      },
      {
        id: 16,
        name: 'Raigeki',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/12580477.jpg',
        description: 'Destroy all monsters your opponent controls.'
      },
      {
        id: 17,
        name: 'Dark Hole',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/53129443.jpg',
        description: 'Destroy all monsters on the field.'
      }
    ]
  },
  {
    id: 8, 
    name: 'Exodia FTK', 
    description: 'Vitória instantânea.', 
    cards: [
      {
        id: 1,
        name: 'Blue-Eyes White Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 3000,
        defense: 2500,
        monsterType: 'Dragon',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/89631139.jpg',
        description: 'This legendary dragon is a powerful engine of destruction.'
      },
      {
        id: 2,
        name: 'Dark Magician',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2500,
        defense: 2100,
        monsterType: 'Spellcaster',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/46986414.jpg',
        description: 'The ultimate wizard in terms of attack and defense.'
      },
      {
        id: 3,
        name: 'Red-Eyes Black Dragon',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2400,
        defense: 2000,
        monsterType: 'Dragon',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/74677422.jpg',
        description: 'A ferocious dragon with a deadly attack.'
      },
      {
        id: 4,
        name: 'Monster Reborn',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/83764718.jpg',
        description: 'Target 1 monster in either GY; Special Summon it.'
      },
      {
        id: 5,
        name: 'Exodia the Forbidden One',
        type: 'Monster',
        attribute: 'DARK',
        attack: 1000,
        defense: 1000,
        monsterType: 'Spellcaster',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/33396948.jpg',
        description: 'If you have all 5 pieces of Exodia in your hand, you win the Duel.'
      },
      {
        id: 6,
        name: 'Slifer the Sky Dragon',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 0,
        defense: 0,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000020.jpg',
        description: 'One of the legendary Egyptian God Cards.'
      },
      {
        id: 7,
        name: 'Obelisk the Tormentor',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 4000,
        defense: 4000,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000000.jpg',
        description: 'The strongest of the Egyptian Gods.'
      },
      {
        id: 8,
        name: 'The Winged Dragon of Ra',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 0,
        defense: 0,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000010.jpg',
        description: 'The third Egyptian God Card.'
      },
      {
        id: 9,
        name: 'Summoned Skull',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2500,
        defense: 1200,
        monsterType: 'Fiend',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/70781052.jpg',
        description: 'A fiend with dark powers for confusing the enemy.'
      },
      {
        id: 10,
        name: 'Cyber Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 2100,
        defense: 1600,
        monsterType: 'Machine',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/70095154.jpg',
        description: 'If only your opponent controls a monster, you can Special Summon this card.'
      },
      {
        id: 11,
        name: 'Kuriboh',
        type: 'Monster',
        attribute: 'DARK',
        attack: 300,
        defense: 200,
        monsterType: 'Fiend',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/40640057.jpg',
        description: 'During damage calculation, you can discard this card; you take no battle damage.'
      },
      {
        id: 12,
        name: 'Junk Synchron',
        type: 'Monster',
        attribute: 'DARK',
        attack: 1300,
        defense: 500,
        monsterType: 'Warrior',
        monsterSubTypes: ['Effect', 'Tuner'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/63977008.jpg',
        description: 'When this card is Normal Summoned, you can Special Summon 1 Level 2 or lower monster from your GY.'
      },
      {
        id: 13,
        name: 'Blue-Eyes Ultimate Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 4500,
        defense: 3800,
        monsterType: 'Dragon',
        monsterSubTypes: ['Fusion'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/23995346.jpg',
        description: 'Fusion of 3 Blue-Eyes White Dragons.'
      },
      {
        id: 14,
        name: 'Pot of Greed',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/55144522.jpg',
        description: 'Draw 2 cards.'
      },
      {
        id: 15,
        name: 'Mirror Force',
        type: 'Trap',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/44095762.jpg',
        description: 'When an opponent’s monster declares an attack: Destroy all Attack Position monsters your opponent controls.'
      },
      {
        id: 16,
        name: 'Raigeki',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/12580477.jpg',
        description: 'Destroy all monsters your opponent controls.'
      },
      {
        id: 17,
        name: 'Dark Hole',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/53129443.jpg',
        description: 'Destroy all monsters on the field.'
      }
    ]
  },
  {
    id: 9, 
    name: 'Red Dragon Archfiend', 
    description: 'Sincronia agressiva.', 
    cards: [
      {
        id: 1,
        name: 'Blue-Eyes White Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 3000,
        defense: 2500,
        monsterType: 'Dragon',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/89631139.jpg',
        description: 'This legendary dragon is a powerful engine of destruction.'
      },
      {
        id: 2,
        name: 'Dark Magician',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2500,
        defense: 2100,
        monsterType: 'Spellcaster',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/46986414.jpg',
        description: 'The ultimate wizard in terms of attack and defense.'
      },
      {
        id: 3,
        name: 'Red-Eyes Black Dragon',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2400,
        defense: 2000,
        monsterType: 'Dragon',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/74677422.jpg',
        description: 'A ferocious dragon with a deadly attack.'
      },
      {
        id: 4,
        name: 'Monster Reborn',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/83764718.jpg',
        description: 'Target 1 monster in either GY; Special Summon it.'
      },
      {
        id: 5,
        name: 'Exodia the Forbidden One',
        type: 'Monster',
        attribute: 'DARK',
        attack: 1000,
        defense: 1000,
        monsterType: 'Spellcaster',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/33396948.jpg',
        description: 'If you have all 5 pieces of Exodia in your hand, you win the Duel.'
      },
      {
        id: 6,
        name: 'Slifer the Sky Dragon',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 0,
        defense: 0,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000020.jpg',
        description: 'One of the legendary Egyptian God Cards.'
      },
      {
        id: 7,
        name: 'Obelisk the Tormentor',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 4000,
        defense: 4000,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000000.jpg',
        description: 'The strongest of the Egyptian Gods.'
      },
      {
        id: 8,
        name: 'The Winged Dragon of Ra',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 0,
        defense: 0,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000010.jpg',
        description: 'The third Egyptian God Card.'
      },
      {
        id: 9,
        name: 'Summoned Skull',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2500,
        defense: 1200,
        monsterType: 'Fiend',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/70781052.jpg',
        description: 'A fiend with dark powers for confusing the enemy.'
      },
      {
        id: 10,
        name: 'Cyber Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 2100,
        defense: 1600,
        monsterType: 'Machine',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/70095154.jpg',
        description: 'If only your opponent controls a monster, you can Special Summon this card.'
      },
      {
        id: 11,
        name: 'Kuriboh',
        type: 'Monster',
        attribute: 'DARK',
        attack: 300,
        defense: 200,
        monsterType: 'Fiend',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/40640057.jpg',
        description: 'During damage calculation, you can discard this card; you take no battle damage.'
      },
      {
        id: 12,
        name: 'Junk Synchron',
        type: 'Monster',
        attribute: 'DARK',
        attack: 1300,
        defense: 500,
        monsterType: 'Warrior',
        monsterSubTypes: ['Effect', 'Tuner'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/63977008.jpg',
        description: 'When this card is Normal Summoned, you can Special Summon 1 Level 2 or lower monster from your GY.'
      },
      {
        id: 13,
        name: 'Blue-Eyes Ultimate Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 4500,
        defense: 3800,
        monsterType: 'Dragon',
        monsterSubTypes: ['Fusion'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/23995346.jpg',
        description: 'Fusion of 3 Blue-Eyes White Dragons.'
      },
      {
        id: 14,
        name: 'Pot of Greed',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/55144522.jpg',
        description: 'Draw 2 cards.'
      },
      {
        id: 15,
        name: 'Mirror Force',
        type: 'Trap',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/44095762.jpg',
        description: 'When an opponent’s monster declares an attack: Destroy all Attack Position monsters your opponent controls.'
      },
      {
        id: 16,
        name: 'Raigeki',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/12580477.jpg',
        description: 'Destroy all monsters your opponent controls.'
      },
      {
        id: 17,
        name: 'Dark Hole',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/53129443.jpg',
        description: 'Destroy all monsters on the field.'
      }
    ]
  },
  {
    id: 10, 
    name: 'Sky Striker', 
    description: 'Controle tático.', 
    cards: [
      {
        id: 1,
        name: 'Blue-Eyes White Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 3000,
        defense: 2500,
        monsterType: 'Dragon',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/89631139.jpg',
        description: 'This legendary dragon is a powerful engine of destruction.'
      },
      {
        id: 2,
        name: 'Dark Magician',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2500,
        defense: 2100,
        monsterType: 'Spellcaster',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/46986414.jpg',
        description: 'The ultimate wizard in terms of attack and defense.'
      },
      {
        id: 3,
        name: 'Red-Eyes Black Dragon',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2400,
        defense: 2000,
        monsterType: 'Dragon',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/74677422.jpg',
        description: 'A ferocious dragon with a deadly attack.'
      },
      {
        id: 4,
        name: 'Monster Reborn',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/83764718.jpg',
        description: 'Target 1 monster in either GY; Special Summon it.'
      },
      {
        id: 5,
        name: 'Exodia the Forbidden One',
        type: 'Monster',
        attribute: 'DARK',
        attack: 1000,
        defense: 1000,
        monsterType: 'Spellcaster',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/33396948.jpg',
        description: 'If you have all 5 pieces of Exodia in your hand, you win the Duel.'
      },
      {
        id: 6,
        name: 'Slifer the Sky Dragon',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 0,
        defense: 0,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000020.jpg',
        description: 'One of the legendary Egyptian God Cards.'
      },
      {
        id: 7,
        name: 'Obelisk the Tormentor',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 4000,
        defense: 4000,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000000.jpg',
        description: 'The strongest of the Egyptian Gods.'
      },
      {
        id: 8,
        name: 'The Winged Dragon of Ra',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 0,
        defense: 0,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000010.jpg',
        description: 'The third Egyptian God Card.'
      },
      {
        id: 9,
        name: 'Summoned Skull',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2500,
        defense: 1200,
        monsterType: 'Fiend',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/70781052.jpg',
        description: 'A fiend with dark powers for confusing the enemy.'
      },
      {
        id: 10,
        name: 'Cyber Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 2100,
        defense: 1600,
        monsterType: 'Machine',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/70095154.jpg',
        description: 'If only your opponent controls a monster, you can Special Summon this card.'
      },
      {
        id: 11,
        name: 'Kuriboh',
        type: 'Monster',
        attribute: 'DARK',
        attack: 300,
        defense: 200,
        monsterType: 'Fiend',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/40640057.jpg',
        description: 'During damage calculation, you can discard this card; you take no battle damage.'
      },
      {
        id: 12,
        name: 'Junk Synchron',
        type: 'Monster',
        attribute: 'DARK',
        attack: 1300,
        defense: 500,
        monsterType: 'Warrior',
        monsterSubTypes: ['Effect', 'Tuner'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/63977008.jpg',
        description: 'When this card is Normal Summoned, you can Special Summon 1 Level 2 or lower monster from your GY.'
      },
      {
        id: 13,
        name: 'Blue-Eyes Ultimate Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 4500,
        defense: 3800,
        monsterType: 'Dragon',
        monsterSubTypes: ['Fusion'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/23995346.jpg',
        description: 'Fusion of 3 Blue-Eyes White Dragons.'
      },
      {
        id: 14,
        name: 'Pot of Greed',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/55144522.jpg',
        description: 'Draw 2 cards.'
      },
      {
        id: 15,
        name: 'Mirror Force',
        type: 'Trap',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/44095762.jpg',
        description: 'When an opponent’s monster declares an attack: Destroy all Attack Position monsters your opponent controls.'
      },
      {
        id: 16,
        name: 'Raigeki',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/12580477.jpg',
        description: 'Destroy all monsters your opponent controls.'
      },
      {
        id: 17,
        name: 'Dark Hole',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/53129443.jpg',
        description: 'Destroy all monsters on the field.'
      }
    ]
  },
  {
    id: 11,
    name: 'Salamangreat',
    description: 'Recursos infinitos.', 
    cards: [
      {
        id: 1,
        name: 'Blue-Eyes White Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 3000,
        defense: 2500,
        monsterType: 'Dragon',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/89631139.jpg',
        description: 'This legendary dragon is a powerful engine of destruction.'
      },
      {
        id: 2,
        name: 'Dark Magician',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2500,
        defense: 2100,
        monsterType: 'Spellcaster',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/46986414.jpg',
        description: 'The ultimate wizard in terms of attack and defense.'
      },
      {
        id: 3,
        name: 'Red-Eyes Black Dragon',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2400,
        defense: 2000,
        monsterType: 'Dragon',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/74677422.jpg',
        description: 'A ferocious dragon with a deadly attack.'
      },
      {
        id: 4,
        name: 'Monster Reborn',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/83764718.jpg',
        description: 'Target 1 monster in either GY; Special Summon it.'
      },
      {
        id: 5,
        name: 'Exodia the Forbidden One',
        type: 'Monster',
        attribute: 'DARK',
        attack: 1000,
        defense: 1000,
        monsterType: 'Spellcaster',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/33396948.jpg',
        description: 'If you have all 5 pieces of Exodia in your hand, you win the Duel.'
      },
      {
        id: 6,
        name: 'Slifer the Sky Dragon',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 0,
        defense: 0,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000020.jpg',
        description: 'One of the legendary Egyptian God Cards.'
      },
      {
        id: 7,
        name: 'Obelisk the Tormentor',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 4000,
        defense: 4000,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000000.jpg',
        description: 'The strongest of the Egyptian Gods.'
      },
      {
        id: 8,
        name: 'The Winged Dragon of Ra',
        type: 'Monster',
        attribute: 'DIVINE',
        attack: 0,
        defense: 0,
        monsterType: 'Divine-Beast',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/10000010.jpg',
        description: 'The third Egyptian God Card.'
      },
      {
        id: 9,
        name: 'Summoned Skull',
        type: 'Monster',
        attribute: 'DARK',
        attack: 2500,
        defense: 1200,
        monsterType: 'Fiend',
        monsterSubTypes: ['Normal'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/70781052.jpg',
        description: 'A fiend with dark powers for confusing the enemy.'
      },
      {
        id: 10,
        name: 'Cyber Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 2100,
        defense: 1600,
        monsterType: 'Machine',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/70095154.jpg',
        description: 'If only your opponent controls a monster, you can Special Summon this card.'
      },
      {
        id: 11,
        name: 'Kuriboh',
        type: 'Monster',
        attribute: 'DARK',
        attack: 300,
        defense: 200,
        monsterType: 'Fiend',
        monsterSubTypes: ['Effect'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/40640057.jpg',
        description: 'During damage calculation, you can discard this card; you take no battle damage.'
      },
      {
        id: 12,
        name: 'Junk Synchron',
        type: 'Monster',
        attribute: 'DARK',
        attack: 1300,
        defense: 500,
        monsterType: 'Warrior',
        monsterSubTypes: ['Effect', 'Tuner'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/63977008.jpg',
        description: 'When this card is Normal Summoned, you can Special Summon 1 Level 2 or lower monster from your GY.'
      },
      {
        id: 13,
        name: 'Blue-Eyes Ultimate Dragon',
        type: 'Monster',
        attribute: 'LIGHT',
        attack: 4500,
        defense: 3800,
        monsterType: 'Dragon',
        monsterSubTypes: ['Fusion'],
        imageUrl: 'https://images.ygoprodeck.com/images/cards/23995346.jpg',
        description: 'Fusion of 3 Blue-Eyes White Dragons.'
      },
      {
        id: 14,
        name: 'Pot of Greed',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/55144522.jpg',
        description: 'Draw 2 cards.'
      },
      {
        id: 15,
        name: 'Mirror Force',
        type: 'Trap',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/44095762.jpg',
        description: 'When an opponent’s monster declares an attack: Destroy all Attack Position monsters your opponent controls.'
      },
      {
        id: 16,
        name: 'Raigeki',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/12580477.jpg',
        description: 'Destroy all monsters your opponent controls.'
      },
      {
        id: 17,
        name: 'Dark Hole',
        type: 'Spell',
        attribute: '-',
        attack: 0,
        defense: 0,
        imageUrl: 'https://images.ygoprodeck.com/images/cards/53129443.jpg',
        description: 'Destroy all monsters on the field.'
      }
    ]
  },

  ];

  public getDecks(): IDeck[] {
    return this.decks;
  }

  public getDeckById(id: number): IDeck | undefined {
    return this.decks.find(deck => deck.id === id);
  }

  public createDeck(deck: IDeck): void {
    deck.id = this.decks.length > 0 ? Math.max(...this.decks.map(d => d.id)) + 1 : 1;
    this.decks.push(deck);
  }

  public updateDeck(updatedDeck: IDeck): void {
    const index = this.decks.findIndex(deck => deck.id === updatedDeck.id);
    if (index !== -1) {
      this.decks[index] = updatedDeck;
    }
  }

  public deleteDeck(id: number): void {
    this.decks = this.decks.filter(deck => deck.id !== id);
  }

  public removeCardFromDeck(deckId: number, cardId: number): void {
    const deck = this.getDeckById(deckId);
    if (deck) {
      deck.cards = deck.cards.filter(card => card.id !== cardId);
    }
  }
  public getTotalCardsInDeck(deckId: number): number {
    const deck = this.getDeckById(deckId);
    return deck ? deck.cards.length : 0;
  }
  public addCardToDeck(deckId: number, card: ICard): void {
    const deck = this.getDeckById(deckId);
    if (deck) {
      deck.cards.push(card);
    }
  }
}
