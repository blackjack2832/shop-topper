<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('customJs/jqurey.js') }}" defer></script>
    <script src="{{ asset('customJs/slick.js') }}" defer></script>
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="{{ asset('customJs/custom.js') }}" defer></script>
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;600;800&display=swap" rel="stylesheet">    
    <link rel="stylesheet" href="./css/style.min.css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('customCss/custom.css') }}" rel="stylesheet">
    <link href="{{ asset('customCss/style.min.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app" class="wrapper">
        <header class="header">
            <div class="header-blocks header-blocks-top">
                <div class="header-blocks-container">
                    <a href="/" class="logotype">
                        SHOP TOPPER
                    </a>
                    <div class="header-icons">
                        <a href="" class="header-icon icon-search"></a>
                        <a href="../favorite.html" class="header-icon icon-favorite-products"></a>
                        <cart-menu-item></cart-menu-item>
                    </div>
                </div>
            </div>
            <div class="header-blocks header-blocks-bottom">
                <div class="header-blocks-container">
                    <div class="header-contacts">
                        <a href="tel:+79999999999" class="header-contacts-phone">+ 7(999)-999-99-99</a>
                    </div>
                    <div class="header-menu">
                        <div class="header-mobile-menu"></div>
                        <div class="header-menu-items">
                            <div class="header-menu-item"><a href="">О нас</a></div>
                            <catalog-menu></catalog-menu>
                            <div class="header-menu-item"><a href="">Политика конфиденциальности</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <main class="main">
            @yield('index')
        </main>
        <footer class="footer">
            <div class="container">
                <div class="footer-social-networks-title">Мы в социальных сетях</div>
                <div class="footer-social-networks-block">
                    <!--<a href="" class="social-network-block"><img src="../img/svg/vk.svg" alt=""></a>
                    <a href="" class="social-network-block"><img src="../img/svg/zen.svg" alt=""></a>
                    <a href="" class="social-network-block"><img src="../img/svg/telegram.svg" alt=""></a>-->
                </div>
            </div>
        </footer>
    </div>
</body>
</html>

