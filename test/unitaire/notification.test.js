const { Notification } = require('../../src/models/notification');

describe('Notification Model', () => {
  it('doit créer une notification non lue par défaut', () => {
    const notif = new Notification({ type: 'Validation', titre: 'Vidéo validée', message: 'Votre vidéo est validée', user_id: 1 });
    expect(notif.lu).toBe(false);
  });

  it('doit associer la notification à un utilisateur', () => {
    const notif = new Notification({ user_id: 1 });
    expect(notif.user_id).toBe(1);
  });

  it('doit permettre de marquer la notification comme lue', () => {
    const notif = new Notification({ lu: false });
    notif.lu = true;
    expect(notif.lu).toBe(true);
  });
});
