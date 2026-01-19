const { Note } = require('../../src/models/note');
const { v4: uuidv4 } = require('uuid');

describe('Note Model', () => {
  it('doit créer une note valide avec tous les champs requis', () => {
    const userId = uuidv4();
    const filmId = uuidv4();
    const note = new Note({
      id: uuidv4(),
      user_id: userId,
      film_id: filmId,
      note: 7,
      created_at: new Date()
    });
    expect(note.user_id).toBe(userId);
    expect(note.film_id).toBe(filmId);
    expect(note.note).toBe(7);
  });

  it('doit accepter une note entre 1 et 10', () => {
    const filmId = uuidv4();
    const userId = uuidv4();
    
    for (let i = 1; i <= 10; i++) {
      const note = new Note({ 
        id: uuidv4(),
        note: i, 
        film_id: filmId, 
        user_id: userId,
        created_at: new Date()
      });
      expect(note.note).toBeGreaterThanOrEqual(1);
      expect(note.note).toBeLessThanOrEqual(10);
    }
  });

  it('doit rejeter une note inférieure à 1', () => {
    expect(() => {
      new Note({ 
        id: uuidv4(),
        note: 0,
        film_id: uuidv4(),
        user_id: uuidv4()
      });
    }).toThrow('La note doit être comprise entre 1 et 10');
  });

  it('doit rejeter une note supérieure à 10', () => {
    expect(() => {
      new Note({ 
        id: uuidv4(),
        note: 11,
        film_id: uuidv4(),
        user_id: uuidv4()
      });
    }).toThrow('La note doit être comprise entre 1 et 10');
  });

  it('doit enregistrer une note avec film_id et user_id (UUID)', () => {
    const filmId = uuidv4();
    const userId = uuidv4();
    const note = new Note({ 
      id: uuidv4(),
      note: 8, 
      film_id: filmId, 
      user_id: userId,
      created_at: new Date()
    });
    expect(note.film_id).toBe(filmId);
    expect(note.user_id).toBe(userId);
    expect(note.film_id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    expect(note.user_id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
  });

  it('doit garantir l\'unicité de la note par jury/film', async () => {
    const userId = uuidv4();
    const filmId = uuidv4();
    
    // Supposons une méthode statique Note.isUniqueNote
    const isUnique = await Note.isUniqueNote(userId, filmId);
    expect(isUnique).toBe(true);
  });

  it('doit gérer correctement le timestamp created_at', () => {
    const now = new Date();
    const note = new Note({
      id: uuidv4(),
      user_id: uuidv4(),
      film_id: uuidv4(),
      note: 9,
      created_at: now
    });
    expect(note.created_at).toEqual(now);
  });

  it('doit rejeter une note sans user_id ou film_id', () => {
    expect(() => {
      new Note({
        id: uuidv4(),
        note: 7,
        created_at: new Date()
      });
    }).toThrow();
  });

  it('doit valider que la note est un nombre entier', () => {
    expect(() => {
      new Note({
        id: uuidv4(),
        note: 7.5,
        film_id: uuidv4(),
        user_id: uuidv4()
      });
    }).toThrow('La note doit être un nombre entier');
  });
});
