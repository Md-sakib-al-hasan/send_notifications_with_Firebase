import { FirebaseService } from './firebase.service';
import { SendNotificationDto } from './notification.dto';
export declare class NotificationService {
    private readonly firebaseService;
    private readonly logger;
    constructor(firebaseService: FirebaseService);
    sendPushNotification(payload: SendNotificationDto): Promise<{
        success: boolean;
        messageId: string;
    }>;
}
