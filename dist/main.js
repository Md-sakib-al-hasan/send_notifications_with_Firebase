"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
let app;
async function bootstrap() {
    if (!app) {
        app = await core_1.NestFactory.create(app_module_1.AppModule);
        app.useGlobalPipes(new common_1.ValidationPipe());
        await app.init();
    }
    return app;
}
if (process.env.NODE_ENV !== 'production') {
    bootstrap().then((a) => a.listen(process.env.PORT ?? 3000));
}
exports.default = async (req, res) => {
    const nestApp = await bootstrap();
    const instance = nestApp.getHttpAdapter().getInstance();
    instance(req, res);
};
//# sourceMappingURL=main.js.map