const { Workshop, InscriptionWorkshop } = require('../../src/models/workshop');

describe('Workshop Model', () => {
  it('doit créer un atelier avec capacité maximale', () => {
    const ws = new Workshop({ titre: 'Atelier IA', capaciteMax: 30 });
    expect(ws.capaciteMax).toBe(30);
  });

  it('doit refuser une inscription si l\'atelier est complet', () => {
    const ws = new Workshop({ capaciteMax: 1 });
    ws.inscriptions = [new InscriptionWorkshop({ user_id: 1 })];
    expect(() => ws.addInscription(new InscriptionWorkshop({ user_id: 2 }))).toThrow();
  });

  it('doit accepter une inscription valide', () => {
    const ws = new Workshop({ capaciteMax: 2 });
    ws.inscriptions = [];
    ws.addInscription(new InscriptionWorkshop({ user_id: 1 }));
    expect(ws.inscriptions.length).toBe(1);
  });
});
