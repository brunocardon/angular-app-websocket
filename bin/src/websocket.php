<?php
    require_once __DIR__ . '/log.php';

    use Ratchet\MessageComponentInterface;
    use Ratchet\ConnectionInterface;


    class WebSocket implements MessageComponentInterface {

        protected $clients;

        public function __construct() {
            $this->clients = new \SplObjectStorage;
        }

        public function onOpen(ConnectionInterface $conn) {
            $this->clients->attach($conn);
            $txt = "New client connected: ({$conn->resourceId})";
            Log::info($txt);

            foreach ($this->clients as $client) {
                if ($conn !== $client) {
                    $client->send(json_encode(["message" => $txt, "log" => Log::getLog(), "last" => "EXT--".Log::getLogLast()]));
                }
            }

            $conn->send(json_encode(["message" => $txt, "log" => Log::getLog(), "last" => Log::getLogLast()]));
        }

        public function onMessage(ConnectionInterface $from, $msg) {
            $txt = "Client[{$from->resourceId}]: $msg";
            Log::info($txt);
            
            foreach ($this->clients as $client) {
                if ($from !== $client) {
                    $client->send(json_encode(["message" => $txt, "log" => Log::getLog(), "last" => "EXT--".Log::getLogLast()]));
                }
            }

            $from->send(json_encode(["message" => $txt, "log" => Log::getLog(), "last" => Log::getLogLast()]));
        }

        public function onClose(ConnectionInterface $conn) {
            $this->clients->detach($conn);
            $txt = "Client disconnected: ({$conn->resourceId})";
            Log::info($txt);
        }

        public function onError(ConnectionInterface $conn, \Exception $e) {
            $txt = "Error: {$e->getMessage()}";
            $conn->close();
            Log::error($txt);
        }
    }