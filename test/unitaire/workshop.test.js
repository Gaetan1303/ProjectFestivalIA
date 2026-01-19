const { Workshop } = require('../../src/models/workshop');
const { v4: uuidv4 } = require('uuid');

describe('Workshop Model', () => {
  it('doit créer un atelier valide avec tous les champs requis', () => {
    const workshop = new Workshop({ 
      id: uuidv4(),
      nom: 'Atelier IA Générative',
      created_at: new Date()
    });
    expect(workshop.nom).toBe('Atelier IA Générative');
    expect(workshop.id).toBeDefined();
  });

  it('doit valider que l\'ID est un UUID', () => {
    const workshopId = uuidv4();
    const workshop = new Workshop({ 
      id: workshopId,
      nom: 'Atelier Test',
      created_at: new Date()
    });
    expect(workshop.id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
  });

  it('doit accepter différents noms d\'ateliers', () => {
    const workshops = [
      new Workshop({ id: uuidv4(), nom: 'Atelier Montage Vidéo', created_at: new Date() }),
      new Workshop({ id: uuidv4(), nom: 'Atelier Scénario IA', created_at: new Date() }),
      new Workshop({ id: uuidv4(), nom: 'Atelier Post-Production', created_at: new Date() })
    ];
    
    expect(workshops[0].nom).toBe('Atelier Montage Vidéo');
    expect(workshops[1].nom).toBe('Atelier Scénario IA');
    expect(workshops[2].nom).toBe('Atelier Post-Production');
  });

  it('doit gérer correctement le timestamp created_at', () => {
    const now = new Date();
    const workshop = new Workshop({
      id: uuidv4(),
      nom: 'Atelier Timestamp',
      created_at: now
    });
    expect(workshop.created_at).toEqual(now);
  });

  it('doit rejeter un atelier sans nom', () => {
    expect(() => {
      new Workshop({
        id: uuidv4(),
        created_at: new Date()
      });
    }).toThrow();
  });
});
