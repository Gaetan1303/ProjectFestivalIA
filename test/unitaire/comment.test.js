const { Comment } = require('../../src/models/comment');
const { v4: uuidv4 } = require('uuid');

describe('Comment Model', () => {
  it('doit créer un commentaire valide avec tous les champs requis', () => {
    const filmId = uuidv4();
    const userId = uuidv4();
    const comment = new Comment({
      id: uuidv4(),
      film_id: filmId,
      user_id: userId,
      contenu: 'Excellent court-métrage sur l\'IA',
      commentaire: 'COMMENTAIRE',
      prive: false,
      created_at: new Date()
    });
    expect(comment.film_id).toBe(filmId);
    expect(comment.user_id).toBe(userId);
    expect(comment.contenu).toBe('Excellent court-métrage sur l\'IA');
    expect(comment.prive).toBe(false);
  });

  it('doit accepter les types de commentaires valides (COMMENTAIRE, NOTE, TECHNIQUE, AUTRE)', () => {
    const filmId = uuidv4();
    const userId = uuidv4();
    
    const commentGeneral = new Comment({ 
      id: uuidv4(),
      film_id: filmId, 
      user_id: userId, 
      contenu: 'Commentaire général',
      commentaire: 'COMMENTAIRE',
      prive: false
    });
    expect(commentGeneral.commentaire).toBe('COMMENTAIRE');
    
    const commentNote = new Comment({ 
      id: uuidv4(),
      film_id: filmId, 
      user_id: userId, 
      contenu: 'Note justificative',
      commentaire: 'NOTE',
      prive: true
    });
    expect(commentNote.commentaire).toBe('NOTE');
    
    const commentTechnique = new Comment({ 
      id: uuidv4(),
      film_id: filmId, 
      user_id: userId, 
      contenu: 'Analyse technique',
      commentaire: 'TECHNIQUE',
      prive: false
    });
    expect(commentTechnique.commentaire).toBe('TECHNIQUE');
  });

  it('doit gérer les commentaires privés et publics', () => {
    const filmId = uuidv4();
    const userId = uuidv4();
    
    const commentPrive = new Comment({
      id: uuidv4(),
      film_id: filmId,
      user_id: userId,
      contenu: 'Commentaire privé du jury',
      commentaire: 'NOTE',
      prive: true,
      created_at: new Date()
    });
    expect(commentPrive.prive).toBe(true);
    
    const commentPublic = new Comment({
      id: uuidv4(),
      film_id: filmId,
      user_id: userId,
      contenu: 'Commentaire public',
      commentaire: 'COMMENTAIRE',
      prive: false,
      created_at: new Date()
    });
    expect(commentPublic.prive).toBe(false);
  });

  it('doit rejeter un commentaire sans film_id ou user_id', () => {
    expect(() => {
      new Comment({
        id: uuidv4(),
        contenu: 'Commentaire sans références',
        commentaire: 'COMMENTAIRE',
        prive: false
      });
    }).toThrow();
  });

  it('doit valider que les IDs sont des UUID', () => {
    const filmId = uuidv4();
    const userId = uuidv4();
    const commentId = uuidv4();
    
    const comment = new Comment({
      id: commentId,
      film_id: filmId,
      user_id: userId,
      contenu: 'Test UUID',
      commentaire: 'AUTRE',
      prive: false
    });
    
    expect(comment.id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    expect(comment.film_id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    expect(comment.user_id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
  });
});
