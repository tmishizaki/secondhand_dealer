
FROM php:8.0.3-fpm


COPY ./conf/php.ini /usr/local/etc/php/

RUN apt-get update \
  && apt-get install -y zlib1g-dev mariadb-client libzip-dev unzip vim\
  && docker-php-ext-install zip pdo_mysql

#Composer install
COPY --from=composer /usr/bin/composer /usr/bin/composer

ENV COMPOSER_ALLOW_SUPERUSER 1

ENV COMPOSER_HOME /composer

ENV PATH $PATH:/composer/vendor/bin


WORKDIR /var/www/html

RUN composer global require "laravel/installer"

# SHELL ["/bin/bash", "-oeux", "pipefail", "-c"]

# ENV COMPOSER_ALLOW_SUPERUSER 1

# ENV COMPOSER_HOME /composer

# ENV PATH $PATH:/composer/vendor/bin

# COPY --from=composer /usr/bin/composer /usr/bin/composer



# RUN apt-get update && \
#     apt-get install -y zlib1g-dev mariadb-client git libicu-dev libonig-dev libzip-dev unzip locales && \
#     apt-get clean && \
#     rm -rf /var/lib/apt/lists/* && \
#     locale-gen en_US.UTF-8 && \
#     localedef -f UTF-8 -i en_US en_US.UTF-8 && \
#     mkdir /var/run/php-fpm && \
#     mkdir /var/log/php && \
#     docker-php-ext-install intl zip pdo_mysql bcmath && \
#     composer config -g process-timeout 3600 && \
#     composer config -g repos.packagist composer https://packagist.jp && \
#     #composer global require "laravel/installer"

# COPY ./conf/php.ini /usr/local/etc/php/

# WORKDIR /var/www