FROM mysql:8.0

COPY ./docker-entrypoint-initdb.d/* ./docker-entrypoint-initdb.d/
COPY ./conf/ /etc/mysql/conf.d/

CMD ["mysqld"]
CMD ["client"]