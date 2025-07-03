import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';

@Injectable()
export class NotificationService {
  async sendNotification(createNotificationDto: CreateNotificationDto) {
    console.log('Enviando notificación:', createNotificationDto);
    if (createNotificationDto.email) {
      console.log(`Email enviado a ${createNotificationDto.email}: ${createNotificationDto.message}`);
    }
    
    return { success: true, message: 'Notificación enviada' };
  }
}