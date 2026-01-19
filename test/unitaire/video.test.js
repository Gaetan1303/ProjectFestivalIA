const { Video } = require('../../src/models/video');

describe('Video Model', () => {
  it('doit créer une vidéo valide avec tous les champs requis', () => {
    const video = new Video({
      title: 'Futur Désirable',
      description: 'Court-métrage IA',
      status: 'En attente',
      path: '/videos/futur.mp4',
      urlYoutube: 'https://youtube.com/watch?v=abc123',
      poster: '/images/poster.jpg',
      duree: 60,
      nbVues: 0,
      outilsIA: { scenario: 'GPT', postprod: 'StableDiffusion' },
      realisateurReferent: true,
      type: '100% IA',
      submissionDate: new Date(),
      dateValidation: null,
      user_id: 1,
      categorie_id: 2,
      language_code: 'fr'
    });
    expect(video.duree).toBeLessThanOrEqual(60);
    expect(video.status).toBe('En attente');
    expect(video.type).toMatch(/IA/);
  });

  it('doit rejeter une vidéo de plus de 60 secondes', () => {
    expect(() => {
      new Video({ duree: 61 });
    }).toThrow();
  });

  it('doit vérifier le format vidéo (16:9)', () => {
    const video = new Video({ format: '16:9', duree: 60 });
    expect(video.format).toBe('16:9');
  });

  it('doit valider la présence d\'un utilisateur référent', () => {
    const video = new Video({ realisateurReferent: true });
    expect(video.realisateurReferent).toBe(true);
  });
});
