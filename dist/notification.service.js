"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NotificationService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const firebase_service_1 = require("./firebase.service");
let NotificationService = NotificationService_1 = class NotificationService {
    firebaseService;
    logger = new common_1.Logger(NotificationService_1.name);
    constructor(firebaseService) {
        this.firebaseService = firebaseService;
    }
    async sendPushNotification(payload) {
        const { token, title, body, data } = payload;
        try {
            const message = {
                token,
                notification: {
                    title,
                    body,
                },
                data: data || {},
            };
            const response = await this.firebaseService.getMessaging().send(message);
            this.logger.log(`Successfully sent message: ${response}`);
            return {
                success: true,
                messageId: response,
            };
        }
        catch (error) {
            this.logger.error('Error sending push notification:', error);
            throw new common_1.InternalServerErrorException('Failed to send notification via Firebase');
        }
    }
};
exports.NotificationService = NotificationService;
exports.NotificationService = NotificationService = NotificationService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [firebase_service_1.FirebaseService])
], NotificationService);
//# sourceMappingURL=notification.service.js.map