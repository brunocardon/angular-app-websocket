<?php
    use Monolog\Level;
    use Monolog\Logger;
    use Monolog\Handler\StreamHandler;

    class Log {

        const NAME = 'APP_LOG';
        const FILE = 'logs/app.log';

        public static function info($txt, $data=[])
        {
            $logger = new Logger(self::NAME);
            $logger->pushHandler(new StreamHandler(self::FILE, Level::Debug));
            $logger->info($txt, $data);
        }

        public static function error($txt, $data=[])
        {
            $logger = new Logger(self::NAME);
            $logger->pushHandler(new StreamHandler(self::FILE, Level::Debug));
            $logger->info($txt, $data);
        }

        public static function getLog()
        {
            if (!file_exists(self::FILE)) {
                return "--";
            }

            $logContents = file_get_contents(self::FILE);
            return $logContents;
        }

        public static function getLogLast()
        {
            if (!file_exists(self::FILE)) {
                return "--";
            }

            $logContents = file(self::FILE);
            $last = end($logContents);
            $last = trim($last);
            return $last;
        }
    }