const { Laureat } = require('../../src/models/laureat');
const { v4: uuidv4 } = require('uuid');

describe('Laureat Model', () => {
  it('doit créer un lauréat valide avec tous les champs requis', () => {
    const filmId = uuidv4();
    const laureat = new Laureat({
      id: uuidv4(),
      film_id: filmId,
      prix: 'Grand Prix du Jury',
      dateRemise: new Date()
    });
    expect(laureat.film_id).toBe(filmId);
    expect(laureat.prix).toBe('Grand Prix du Jury');
  });

  it('doit accepter différents types de prix', () => {
    const filmId = uuidv4();
    const prixValides = [
      'Grand Prix du Jury',
      'Prix du Public',
      'Meilleure Réalisation',
      'Meilleur Scénario',
      'Prix de l\'Innovation IA',
      'Mention Spéciale'
    ];
    
    prixValides.forEach(prix => {
      const laureat = new Laureat({
        id: uuidv4(),
        film_id: filmId,
        prix: prix,
        dateRemise: new Date()
      });
      expect(laureat.prix).toBe(prix);
    });
  });

  it('doit valider que les IDs sont des UUID', () => {
    const laureatId = uuidv4();
    const filmId = uuidv4();
    
    const laureat = new Laureat({
      id: laureatId,
      film_id: filmId,
      prix: 'Prix du Public',
      dateRemise: new Date()
    });
    
    expect(laureat.id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    expect(laureat.film_id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
  });

  it('doit gérer correctement le timestamp dateRemise', () => {
    const dateRemise = new Date('2026-03-15');
    const laureat = new Laureat({
      id: uuidv4(),
      film_id: uuidv4(),
      prix: 'Grand Prix',
      dateRemise: dateRemise
    });
    expect(laureat.dateRemise).toEqual(dateRemise);
  });

  it('doit permettre de récupérer tous les prix d\'un film', async () => {
    const filmId = uuidv4();
    
    // Supposons une méthode statique Laureat.getByFilmId
    const laureats = await Laureat.getByFilmId(filmId);
    expect(Array.isArray(laureats)).toBe(true);
  });

  it('doit rejeter un lauréat sans film_id', () => {
    expect(() => {
      new Laureat({
        id: uuidv4(),
        prix: 'Grand Prix',
        dateRemise: new Date()
      });
    }).toThrow();
  });

  it('doit rejeter un lauréat sans nom de prix', () => {
    expect(() => {
      new Laureat({
        id: uuidv4(),
        film_id: uuidv4(),
        dateRemise: new Date()
      });
    }).toThrow();
  });

  it('doit permettre de compter les prix par film', async () => {
    const filmId = uuidv4();
    
    // Supposons une méthode statique Laureat.countByFilmId
    const count = await Laureat.countByFilmId(filmId);
    expect(typeof count).toBe('number');
    expect(count).toBeGreaterThanOrEqual(0);
  });

  it('doit permettre de récupérer tous les lauréats d\'une édition du festival', async () => {
    const annee = 2026;
    
    // Supposons une méthode statique Laureat.getByYear
    const laureats = await Laureat.getByYear(annee);
    expect(Array.isArray(laureats)).toBe(true);
    laureats.forEach(laureat => {
      expect(laureat.dateRemise.getFullYear()).toBe(annee);
    });
  });
});
