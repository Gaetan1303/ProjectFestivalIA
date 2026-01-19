const { Note } = require('../../src/models/note');

describe('Note Model', () => {
  it('doit accepter une note entre 1 et 10', () => {
    const note = new Note({ note: 7, film_id: 1, user_id: 2 });
    expect(note.note).toBeGreaterThanOrEqual(1);
    expect(note.note).toBeLessThanOrEqual(10);
  });

  it('doit rejeter une note hors limites', () => {
    expect(() => new Note({ note: 0 })).toThrow();
    expect(() => new Note({ note: 11 })).toThrow();
  });

  it('doit enregistrer une note avec film_id et user_id', () => {
    const note = new Note({ note: 8, film_id: 1, user_id: 2 });
    expect(note.film_id).toBe(1);
    expect(note.user_id).toBe(2);
  });

  it('doit garantir l\'unicité de la note par jury/film', async () => {
    // Supposons une méthode statique Note.isUniqueNote
    const isUnique = await Note.isUniqueNote(2, 1);
    expect(isUnique).toBe(true);
  });
});
