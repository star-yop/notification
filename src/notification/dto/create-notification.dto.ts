export class CreateNotificationDto {
  readonly to: string;      
  readonly message: string;
  readonly email?: string;  
  readonly userId?: string;  
}