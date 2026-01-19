const { Film } = require('../../src/models/film');

describe('Film Model', () => {
  it('doit créer un film valide avec tous les champs requis', () => {
    const film = new Film({
      titre: 'Futur Désirable',
      description: 'Court-métrage IA',
      duree: 60,
      format: '16:9',
      urlYoutube: 'https://youtube.com/watch?v=abc123',
      chemin: '/films/futur.mp4',
      dateSoumission: new Date(),
      user_id: 1,
      candidature_id: 1
    });
    expect(film.duree).toBeLessThanOrEqual(60);
    expect(film.format).toBe('16:9');
  });

  it('doit rejeter un film de plus de 60 secondes', () => {
    expect(() => {
      new Film({ duree: 61 });
    }).toThrow();
  });

  it('doit vérifier le format vidéo (16:9)', () => {
    const film = new Film({ format: '16:9', duree: 60 });
    expect(film.format).toBe('16:9');
  });

  it('doit valider la présence d\'un utilisateur', () => {
    const film = new Film({ user_id: 1 });
    expect(film.user_id).toBe(1);
  });
});
