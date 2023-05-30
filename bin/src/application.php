<?php
    require_once __DIR__ . '/log.php';
    require_once __DIR__ . '/websocket.php';
    
    use Ratchet\Server\IoServer;
    use Ratchet\Http\HttpServer;
    use Ratchet\WebSocket\WsServer;
    
    class Application
    {
        const PORT = 8080;
        
        private static function init()
        {
            Log::info('Server started');
        }

        public function run()
        {
            self::init();

            $server = IoServer::factory(
                new HttpServer(
                    new WsServer(
                        new WebSocket()
                    )
                ),
                self::PORT
            );
            
            $server->run();
        }
    }