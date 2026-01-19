const { Notification } = require('../../src/models/notification');
const { v4: uuidv4 } = require('uuid');

describe('Notification Model', () => {
  it('doit créer une notification valide avec tous les champs requis', () => {
    const userId = uuidv4();
    const notification = new Notification({
      id: uuidv4(),
      user_id: userId,
      type: 'VIDEO_VALIDATION',
      titre: 'Votre film a été validé',
      message: 'Félicitations ! Votre film "Futur Désirable" a été accepté pour le festival.',
      dateCreation: new Date(),
      lu: false
    });
    expect(notification.user_id).toBe(userId);
    expect(notification.type).toBe('VIDEO_VALIDATION');
    expect(notification.lu).toBe(false);
  });

  it('doit accepter tous les types de notifications valides', () => {
    const userId = uuidv4();
    const typesValides = ['VIDEO_VALIDATION', 'NEW_VIDEO', 'RANKING_UPDATE', 'WORKSHOP_REMINDER', 'GENERAL'];
    
    typesValides.forEach(type => {
      const notification = new Notification({
        id: uuidv4(),
        user_id: userId,
        type: type,
        titre: `Test ${type}`,
        message: `Message de test pour ${type}`,
        dateCreation: new Date(),
        lu: false
      });
      expect(notification.type).toBe(type);
    });
  });

  it('doit avoir lu=false par défaut', () => {
    const notification = new Notification({
      id: uuidv4(),
      user_id: uuidv4(),
      type: 'GENERAL',
      titre: 'Test',
      message: 'Message test',
      dateCreation: new Date()
    });
    expect(notification.lu).toBe(false);
  });

  it('doit permettre de marquer une notification comme lue', () => {
    const notification = new Notification({
      id: uuidv4(),
      user_id: uuidv4(),
      type: 'NEW_VIDEO',
      titre: 'Nouveau film disponible',
      message: 'Un nouveau film a été publié',
      dateCreation: new Date(),
      lu: false
    });
    
    notification.marquerCommeLue();
    expect(notification.lu).toBe(true);
  });

  it('doit valider que user_id est un UUID', () => {
    const userId = uuidv4();
    const notification = new Notification({
      id: uuidv4(),
      user_id: userId,
      type: 'WORKSHOP_REMINDER',
      titre: 'Rappel atelier',
      message: 'Votre atelier commence dans 1 heure',
      dateCreation: new Date(),
      lu: false
    });
    expect(notification.user_id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
  });

  it('doit rejeter un type de notification invalide', () => {
    expect(() => {
      new Notification({
        id: uuidv4(),
        user_id: uuidv4(),
        type: 'TYPE_INVALIDE',
        titre: 'Test',
        message: 'Message',
        dateCreation: new Date()
      });
    }).toThrow('Type de notification invalide');
  });

  it('doit rejeter une notification sans user_id', () => {
    expect(() => {
      new Notification({
        id: uuidv4(),
        type: 'GENERAL',
        titre: 'Test',
        message: 'Message',
        dateCreation: new Date()
      });
    }).toThrow();
  });

  it('doit gérer correctement le timestamp dateCreation', () => {
    const now = new Date();
    const notification = new Notification({
      id: uuidv4(),
      user_id: uuidv4(),
      type: 'RANKING_UPDATE',
      titre: 'Classement mis à jour',
      message: 'Le classement général a été actualisé',
      dateCreation: now,
      lu: false
    });
    expect(notification.dateCreation).toEqual(now);
  });

  it('doit permettre de récupérer toutes les notifications non lues d\'un utilisateur', async () => {
    const userId = uuidv4();
    
    // Supposons une méthode statique Notification.getUnreadByUserId
    const notifications = await Notification.getUnreadByUserId(userId);
    expect(Array.isArray(notifications)).toBe(true);
    notifications.forEach(notif => {
      expect(notif.user_id).toBe(userId);
      expect(notif.lu).toBe(false);
    });
  });
});
