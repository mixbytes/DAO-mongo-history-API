FROM node

COPY . /tool
WORKDIR /tool

RUN rm -rf .git/

RUN npm install && \
    npm run build

EXPOSE 3333

ENTRYPOINT ["node", "index.js"]
CMD []

