const notificationService =
  require("../services/notificationService");

const getNotifications = async (req, res, next) => {
  try {
    const notifications =
      await notificationService.getNotifications();

    res.json(notifications);
  } catch (error) {
    next(error);
  }
};

const markAsRead = async (req, res, next) => {
  try {
    const notification =
      await notificationService.markAsRead(req.params.id);

    if (!notification) {
      return res.status(404).json({
        message: "Notificación no encontrada",
      });
    }

    res.json(notification);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getNotifications,
  markAsRead,
};
