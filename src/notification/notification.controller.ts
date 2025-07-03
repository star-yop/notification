import { Controller, Post, Body } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('notify')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  async sendNotification(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationService.sendNotification(createNotificationDto);
  }

  @MessagePattern({ cmd: 'send_notification' })
  async handleSendNotification(createNotificationDto: CreateNotificationDto) {
    return this.notificationService.sendNotification(createNotificationDto);
  }
}