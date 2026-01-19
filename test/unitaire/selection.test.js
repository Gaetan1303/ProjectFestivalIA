const { Selection } = require('../../src/models/selection');
const { v4: uuidv4 } = require('uuid');

describe('Selection Model', () => {
  it('doit créer une sélection valide avec tous les champs requis', () => {
    const filmId = uuidv4();
    const selection = new Selection({
      id: uuidv4(),
      film_id: filmId,
      dateSelection: new Date(),
      type: 'OFFICIELLE'
    });
    expect(selection.film_id).toBe(filmId);
    expect(selection.type).toBe('OFFICIELLE');
  });

  it('doit accepter tous les types de sélection valides', () => {
    const filmId = uuidv4();
    const typesValides = ['OFFICIELLE', 'HORS_COMPETITION', 'AUTRE'];
    
    typesValides.forEach(type => {
      const selection = new Selection({
        id: uuidv4(),
        film_id: filmId,
        dateSelection: new Date(),
        type: type
      });
      expect(selection.type).toBe(type);
    });
  });

  it('doit valider que les IDs sont des UUID', () => {
    const selectionId = uuidv4();
    const filmId = uuidv4();
    
    const selection = new Selection({
      id: selectionId,
      film_id: filmId,
      dateSelection: new Date(),
      type: 'OFFICIELLE'
    });
    
    expect(selection.id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    expect(selection.film_id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
  });

  it('doit rejeter un type de sélection invalide', () => {
    expect(() => {
      new Selection({
        id: uuidv4(),
        film_id: uuidv4(),
        dateSelection: new Date(),
        type: 'TYPE_INVALIDE'
      });
    }).toThrow('Type de sélection invalide');
  });

  it('doit gérer correctement le timestamp dateSelection', () => {
    const now = new Date();
    const selection = new Selection({
      id: uuidv4(),
      film_id: uuidv4(),
      dateSelection: now,
      type: 'HORS_COMPETITION'
    });
    expect(selection.dateSelection).toEqual(now);
  });

  it('doit permettre de récupérer toutes les sélections d\'un film', async () => {
    const filmId = uuidv4();
    
    // Supposons une méthode statique Selection.getByFilmId
    const selections = await Selection.getByFilmId(filmId);
    expect(Array.isArray(selections)).toBe(true);
  });

  it('doit rejeter une sélection sans film_id', () => {
    expect(() => {
      new Selection({
        id: uuidv4(),
        dateSelection: new Date(),
        type: 'OFFICIELLE'
      });
    }).toThrow();
  });

  it('doit permettre de distinguer les sélections officielles des hors compétition', () => {
    const filmId = uuidv4();
    
    const selectionOfficielle = new Selection({
      id: uuidv4(),
      film_id: filmId,
      dateSelection: new Date(),
      type: 'OFFICIELLE'
    });
    
    const selectionHC = new Selection({
      id: uuidv4(),
      film_id: filmId,
      dateSelection: new Date(),
      type: 'HORS_COMPETITION'
    });
    
    expect(selectionOfficielle.isOfficielle()).toBe(true);
    expect(selectionHC.isOfficielle()).toBe(false);
    expect(selectionHC.isHorsCompetition()).toBe(true);
  });
});
