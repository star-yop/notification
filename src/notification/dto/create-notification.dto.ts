export class CreateNotificationDto {
  readonly to: string;       // Email o ID de usuario
  readonly message: string;
  readonly email?: string;   // Opcional, para notificaciones por email
  readonly userId?: string;  // Opcional, para notificaciones in-app
}