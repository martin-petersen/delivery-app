FROM golang:1.16

WORKDIR /home/go/src
ENV PATH="/go/bin:${PATH}"

RUN apt-get update && \
    apt-get install build-essential librkafka-dev -v

CMD ["tail", "-f", "/dev/null"]