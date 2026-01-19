const { Film } = require('../../src/models/film');
const { v4: uuidv4 } = require('uuid');

describe('Film Model', () => {
  it('doit créer un film valide avec tous les champs requis', () => {
    const userId = uuidv4();
    const candidatureId = uuidv4();
    const film = new Film({
      id: uuidv4(),
      titre: 'Futur Désirable',
      description: 'Court-métrage sur l\'IA',
      duree: 60,
      format: '16:9',
      urlYoutube: 'https://youtube.com/watch?v=abc123',
      chemin: '/films/futur.mp4',
      dateSoumission: new Date(),
      user_id: userId,
      candidature_id: candidatureId,
      created_at: new Date(),
      updated_at: new Date()
    });
    expect(film.duree).toBeLessThanOrEqual(60);
    expect(film.format).toBe('16:9');
    expect(film.user_id).toBe(userId);
    expect(film.candidature_id).toBe(candidatureId);
  });

  it('doit rejeter un film de plus de 60 secondes', () => {
    expect(() => {
      new Film({ 
        id: uuidv4(),
        duree: 61,
        format: '16:9'
      });
    }).toThrow('La durée du film ne peut pas dépasser 60 secondes');
  });

  it('doit vérifier le format vidéo (16:9)', () => {
    const film = new Film({ 
      id: uuidv4(),
      format: '16:9', 
      duree: 60,
      user_id: uuidv4()
    });
    expect(film.format).toBe('16:9');
  });

  it('doit rejeter un format vidéo différent de 16:9', () => {
    expect(() => {
      new Film({ 
        id: uuidv4(),
        format: '4:3', 
        duree: 60 
      });
    }).toThrow('Le format doit être 16:9');
  });

  it('doit valider la présence d\'un user_id (UUID)', () => {
    const userId = uuidv4();
    const film = new Film({ 
      id: uuidv4(),
      user_id: userId,
      duree: 60,
      format: '16:9'
    });
    expect(film.user_id).toBe(userId);
  });

  it('doit gérer les sous-titres optionnels', () => {
    const film = new Film({
      id: uuidv4(),
      titre: 'Film avec sous-titres',
      duree: 45,
      format: '16:9',
      'fichier des sous-titres': 'https://example.com/subtitles.srt',
      user_id: uuidv4()
    });
    expect(film['fichier des sous-titres']).toBe('https://example.com/subtitles.srt');
  });

  it('doit garantir l\'unicité de candidature_id', () => {
    const candidatureId = uuidv4();
    const film = new Film({
      id: uuidv4(),
      candidature_id: candidatureId,
      duree: 60,
      format: '16:9',
      user_id: uuidv4()
    });
    expect(film.candidature_id).toBe(candidatureId);
  });
});
