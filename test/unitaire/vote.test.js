const { Vote } = require('../../src/models/vote');

describe('Vote Model', () => {
  it('doit accepter une note entre 1 et 10', () => {
    const vote = new Vote({ score: 7, video_id: 1, user_id: 2 });
    expect(vote.score).toBeGreaterThanOrEqual(1);
    expect(vote.score).toBeLessThanOrEqual(10);
  });

  it('doit rejeter une note hors limites', () => {
    expect(() => new Vote({ score: 0 })).toThrow();
    expect(() => new Vote({ score: 11 })).toThrow();
  });

  it('doit enregistrer un commentaire privé', () => {
    const vote = new Vote({ score: 8, commentairePrive: 'Très bon film', video_id: 1, user_id: 2 });
    expect(vote.commentairePrive).toBe('Très bon film');
  });

  it('doit garantir l\'unicité du vote par jury/vidéo', async () => {
    // Supposons une méthode statique Vote.isUniqueVote
    const isUnique = await Vote.isUniqueVote(2, 1);
    expect(isUnique).toBe(true);
  });
});
