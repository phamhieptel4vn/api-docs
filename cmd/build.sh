#!/bin/sh
npm audit fix --force
npm run build
service api-docs restart