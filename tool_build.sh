#!/usr/bin/env sh

# build the plugin

cd EcoSonar-SonarQube
export REACT_APP_BASE_URL_ECOSONAR_API=http://localhost:4444
mvn clean package -DskipTests -Durl=http://localhost:4444
cd ..
