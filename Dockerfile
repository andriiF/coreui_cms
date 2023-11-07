FROM php:8.2-apache

ARG NODE_VERSION=18

RUN apt-get update

RUN apt-get install -y \
    git \
    wget \
    vim \
    zip \
    curl \
    sudo \
    unzip \
    libzip-dev \
    libicu-dev \
    libbz2-dev \
    libpng-dev \
    libjpeg-dev \
    libmcrypt-dev \
    libreadline-dev \
    libfreetype6-dev \
    libonig-dev \
    imagemagick \
    g++ \
    && curl -sLS https://deb.nodesource.com/setup_$NODE_VERSION.x | bash - \
        && apt-get install -y nodejs \
        && npm install -g npm \

ENV APACHE_DOCUMENT_ROOT=/var/www/html
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

RUN a2enmod rewrite headers

RUN mv "$PHP_INI_DIR/php.ini-development" "$PHP_INI_DIR/php.ini"

RUN docker-php-ext-install \
    bz2 \
    intl \
    iconv \
    bcmath \
    opcache \
    calendar \
    mbstring \
    pdo_mysql \
    exif    \
    gd  \
    zip

RUN touch /usr/local/etc/php/conf.d/uploads.ini \
    && echo "upload_max_filesize = 20M;" >> /usr/local/etc/php/conf.d/uploads.ini

COPY 000-default.conf /etc/apache2/sites-available/000-default.conf
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
#COPY . ./

ARG uid
RUN useradd -G www-data,root -u $uid -d /home/webuser webuser
RUN mkdir -p /home/webuser/.composer && \
    chown -R webuser:webuser /home/webuser

RUN usermod -u 999 www-data \
    && groupmod -g 999 www-data
